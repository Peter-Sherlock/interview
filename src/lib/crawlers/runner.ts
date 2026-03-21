import { prisma } from "@/lib/db";
import { getAdapter } from "./registry";
import {
  normalizeLocation,
  detectRecruitmentType,
  computeJobStatus,
  generateJobHash,
  parseDeadline,
} from "@/lib/utils";
import { rawJobSchema } from "@/lib/types";

/**
 * 运行所有已启用公司的抓取任务
 * 遍历数据库中 crawlEnabled = true 的公司，逐一执行适配器
 */
export async function runAllCrawlers(): Promise<{
  total: number;
  success: number;
  failed: number;
  fetched: number;
}> {
  const companies = await prisma.company.findMany({
    where: { crawlEnabled: true },
  });

  let success = 0;
  let failed = 0;
  let totalFetched = 0;

  for (const company of companies) {
    try {
      const result = await runCrawlerForCompany(company.id);
      success++;
      totalFetched += result.fetched;
    } catch (err) {
      failed++;
      console.error(
        `[CrawlRunner] 公司 ${company.name} 抓取失败:`,
        err instanceof Error ? err.message : err
      );
    }
  }

  return {
    total: companies.length,
    success,
    failed,
    fetched: totalFetched,
  };
}

/**
 * 运行单个公司的抓取任务
 */
export async function runCrawlerForCompany(
  companyId: string
): Promise<{ fetched: number }> {
  const company = await prisma.company.findUniqueOrThrow({
    where: { id: companyId },
  });

  const adapter = getAdapter(company.crawlAdapterId);

  try {
    const rawJobs = await adapter.crawl({
      companyId: company.id,
      companyName: company.name,
      officialCareerUrl: company.officialCareerUrl,
      campusCareerUrl: company.campusCareerUrl,
    });

    let fetchedCount = 0;

    for (const raw of rawJobs) {
      // 校验原始数据
      const parsed = rawJobSchema.safeParse(raw);
      if (!parsed.success) {
        console.warn(
          `[CrawlRunner] ${company.name}: 无效岗位数据`,
          parsed.error.issues
        );
        continue;
      }

      const job = parsed.data;
      const locationNormalized = normalizeLocation(job.locationRaw);
      const recruitmentType = detectRecruitmentType(
        job.title,
        job.descriptionSnippet
      );
      const deadlineAt = parseDeadline(job.deadlineRaw);
      const status = computeJobStatus(deadlineAt);
      const hash = generateJobHash(
        company.id,
        job.title,
        locationNormalized,
        job.applyUrl
      );

      // Upsert: 存在则更新，不存在则创建
      await prisma.jobPosting.upsert({
        where: { hash },
        create: {
          companyId: company.id,
          title: job.title,
          recruitmentType,
          locationRaw: job.locationRaw || null,
          locationNormalized,
          deadlineAt,
          status,
          applyUrl: job.applyUrl,
          sourceUrl: job.sourceUrl || null,
          descriptionSnippet: job.descriptionSnippet || null,
          hash,
          lastCheckedAt: new Date(),
        },
        update: {
          deadlineAt,
          status,
          lastCheckedAt: new Date(),
          descriptionSnippet: job.descriptionSnippet || undefined,
        },
      });

      fetchedCount++;
    }

    // 记录成功日志
    await prisma.crawlLog.create({
      data: {
        companyId: company.id,
        runStatus: "success",
        fetchedCount,
        message: `成功抓取 ${fetchedCount} 条岗位`,
      },
    });

    return { fetched: fetchedCount };
  } catch (err) {
    // 记录失败日志 (不清除旧数据)
    await prisma.crawlLog.create({
      data: {
        companyId: company.id,
        runStatus: "failed",
        fetchedCount: 0,
        message: err instanceof Error ? err.message : "Unknown error",
      },
    });

    throw err;
  }
}
