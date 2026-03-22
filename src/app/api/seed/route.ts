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

    // 为每个有招聘链接的公司创建导航岗位
    // - "both" 类型公司生成两条记录（暑期实习 + 日常实习）
    // - "summer" / "daily" 类型生成一条对应记录
    // - "unknown" 类型生成一条未分类记录
    let jobsCreated = 0;
    let jobsUpdated = 0;
    const companies = await prisma.company.findMany();
    const seedMap = new Map(companiesSeed.map((s) => [s.slug, s]));

    for (const company of companies) {
      const url = company.campusCareerUrl || company.officialCareerUrl;
      if (!url) continue;

      const seed = seedMap.get(company.slug);
      const locations = seed?.locations?.length ? seed.locations : ["全国"];
      const locationRaw = locations.join("、");
      const isCampus = !!company.campusCareerUrl;
      const rType = seed?.recruitmentTypes || "unknown";

      // 决定要生成哪些记录
      type Entry = { suffix: string; type: "summer" | "daily" | "unknown"; title: string };
      const entries: Entry[] = [];

      if (rType === "both") {
        entries.push({
          suffix: "summer",
          type: "summer",
          title: `${company.name} - 暑期实习投递入口`,
        });
        entries.push({
          suffix: "daily",
          type: "daily",
          title: `${company.name} - 日常实习投递入口`,
        });
      } else if (rType === "summer") {
        entries.push({
          suffix: "summer",
          type: "summer",
          title: `${company.name} - 暑期实习投递入口`,
        });
      } else if (rType === "daily") {
        entries.push({
          suffix: "daily",
          type: "daily",
          title: `${company.name} - 日常实习投递入口`,
        });
      } else {
        entries.push({
          suffix: "campus",
          type: "unknown",
          title: `${company.name} - ${isCampus ? "校招实习投递入口" : "官方招聘页"}`,
        });
      }

      for (const entry of entries) {
        const hash = `nav-${company.slug}-${entry.suffix}`;
        const existing = await prisma.jobPosting.findUnique({ where: { hash } });

        if (existing) {
          await prisma.jobPosting.update({
            where: { hash },
            data: {
              title: entry.title,
              recruitmentType: entry.type,
              locationRaw,
              locationNormalized: locations,
            },
          });
          jobsUpdated++;
          continue;
        }

        await prisma.jobPosting.create({
          data: {
            companyId: company.id,
            title: entry.title,
            recruitmentType: entry.type,
            locationRaw,
            locationNormalized: locations,
            status: "open",
            applyUrl: url,
            sourceUrl: url,
            descriptionSnippet: `点击前往 ${company.name} ${isCampus ? "官方校招页面" : "官方招聘页面"}查看最新岗位`,
            hash,
          },
        });
        jobsCreated++;
      }

      // 清理旧的 nav-xxx-campus 记录（如果该公司已改为 both/summer/daily）
      if (rType !== "unknown") {
        const oldHash = `nav-${company.slug}-campus`;
        const old = await prisma.jobPosting.findUnique({ where: { hash: oldHash } });
        if (old) {
          await prisma.jobPosting.delete({ where: { hash: oldHash } });
        }
      }
    }

    return NextResponse.json({
      ok: true,
      companies: { created, updated, total: companiesSeed.length },
      jobs: { created: jobsCreated, updated: jobsUpdated },
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
