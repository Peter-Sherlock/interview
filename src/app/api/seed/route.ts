import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { companiesSeed } from "../../../../seed/companies";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * POST /api/seed - 初始化种子数据
 *
 * 需要 CRON_SECRET 验证，防止被随意调用
 */
export async function POST(request: NextRequest) {
  // 验证密钥
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && cronSecret !== "your-cron-secret-change-me" && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("[Seed] 开始导入种子数据...");

    let created = 0;
    let updated = 0;

    for (const company of companiesSeed) {
      const result = await prisma.company.upsert({
        where: { slug: company.slug },
        create: {
          name: company.name,
          slug: company.slug,
          companySize: company.companySize,
          industryTags: company.industryTags,
          officialCareerUrl: company.officialCareerUrl,
          campusCareerUrl: company.campusCareerUrl,
          crawlEnabled: company.crawlEnabled,
          crawlAdapterId: company.crawlAdapterId,
        },
        update: {
          name: company.name,
          companySize: company.companySize,
          industryTags: company.industryTags,
          officialCareerUrl: company.officialCareerUrl,
          campusCareerUrl: company.campusCareerUrl,
          crawlAdapterId: company.crawlAdapterId,
        },
      });

      if (result.createdAt.getTime() === result.updatedAt.getTime()) {
        created++;
      } else {
        updated++;
      }
    }

    // 为每个有 campusCareerUrl 的公司创建一条导航岗位
    let jobsCreated = 0;
    const companies = await prisma.company.findMany();

    for (const company of companies) {
      if (!company.campusCareerUrl) continue;

      const hash = `nav-${company.slug}-campus`;
      const existing = await prisma.jobPosting.findUnique({ where: { hash } });
      if (existing) continue;

      await prisma.jobPosting.create({
        data: {
          companyId: company.id,
          title: `${company.name} - 校招实习投递入口`,
          recruitmentType: "unknown",
          locationRaw: "全国",
          locationNormalized: ["全国"],
          status: "open",
          applyUrl: company.campusCareerUrl,
          sourceUrl: company.campusCareerUrl,
          descriptionSnippet: `点击前往 ${company.name} 官方校招页面查看最新实习岗位`,
          hash,
        },
      });
      jobsCreated++;
    }

    return NextResponse.json({
      ok: true,
      companies: { created, updated, total: companiesSeed.length },
      jobs: { created: jobsCreated },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[Seed] 种子数据导入失败:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
