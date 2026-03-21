/**
 * 数据库种子脚本
 * 运行: npx tsx scripts/seed.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { companiesSeed } from "../seed/companies";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 开始导入公司种子数据...\n");

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
      console.log(`  ✅ 新增: ${company.name}`);
    } else {
      updated++;
      console.log(`  🔄 更新: ${company.name}`);
    }
  }

  console.log(`\n✨ 完成! 新增 ${created} 家，更新 ${updated} 家，共 ${companiesSeed.length} 家公司`);
}

main()
  .catch((e) => {
    console.error("❌ 种子数据导入失败:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
