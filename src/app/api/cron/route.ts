import { NextRequest, NextResponse } from "next/server";
import { runAllCrawlers } from "@/lib/crawlers/runner";

export const dynamic = "force-dynamic";
export const maxDuration = 300; // 5 分钟超时

/**
 * GET /api/cron - 定时抓取任务入口
 *
 * 由 Vercel Cron 或 GitHub Actions 调用
 * 需要携带 CRON_SECRET 进行验证
 */
export async function GET(request: NextRequest) {
  // 验证密钥
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("[Cron] 开始执行定时抓取任务...");
    const result = await runAllCrawlers();
    console.log("[Cron] 抓取完成:", result);

    return NextResponse.json({
      ok: true,
      total: result.total,
      successCount: result.success,
      failedCount: result.failed,
      fetchedCount: result.fetched,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[Cron] 抓取任务失败:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
