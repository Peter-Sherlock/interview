/**
 * 批量更新岗位招聘状态
 * 根据截止时间重新计算所有岗位的状态
 * 运行: npx tsx scripts/update-status.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🔄 开始更新岗位状态...\n");

  const now = new Date();
  const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  // 已截止: deadlineAt < now
  const closed = await prisma.jobPosting.updateMany({
    where: {
      deadlineAt: { lt: now },
      status: { not: "closed" },
    },
    data: { status: "closed" },
  });
  console.log(`  已截止: ${closed.count} 个岗位`);

  // 即将截止: deadlineAt 在未来 7 天内
  const closingSoon = await prisma.jobPosting.updateMany({
    where: {
      deadlineAt: { gte: now, lte: sevenDaysLater },
      status: { not: "closing_soon" },
    },
    data: { status: "closing_soon" },
  });
  console.log(`  即将截止: ${closingSoon.count} 个岗位`);

  // 招聘中: deadlineAt > 7天后
  const open = await prisma.jobPosting.updateMany({
    where: {
      deadlineAt: { gt: sevenDaysLater },
      status: { not: "open" },
    },
    data: { status: "open" },
  });
  console.log(`  招聘中: ${open.count} 个岗位`);

  console.log("\n✅ 状态更新完成");
}

main()
  .catch((e) => {
    console.error("❌ 状态更新失败:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
