/**
 * 手动运行抓取任务
 * 运行: npx tsx scripts/run-crawlers.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// 设置全局 prisma 实例供 runner 使用
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });
(globalThis as unknown as { prisma: PrismaClient }).prisma = prisma;

async function main() {
  // 动态导入以确保 prisma 全局实例已设置
  const { runAllCrawlers } = await import("../src/lib/crawlers/runner");

  console.log("🕷️ 开始运行抓取任务...\n");

  const result = await runAllCrawlers();

  console.log("\n📊 抓取结果:");
  console.log(`  总计公司: ${result.total}`);
  console.log(`  成功: ${result.success}`);
  console.log(`  失败: ${result.failed}`);
  console.log(`  获取岗位数: ${result.fetched}`);
}

main()
  .catch((e) => {
    console.error("❌ 抓取任务失败:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
