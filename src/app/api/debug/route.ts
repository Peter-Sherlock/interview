import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** GET /api/debug - 诊断 Worker 运行环境 */
export async function GET() {
  try {
    // 1. 基础环境检查
    const env = {
      hasDbUrl: !!process.env.DATABASE_URL,
      dbUrlPrefix: process.env.DATABASE_URL?.substring(0, 30) + "...",
      nodeEnv: process.env.NODE_ENV,
      runtime: typeof EdgeRuntime !== "undefined" ? "edge" : "node",
    };

    // 2. 尝试加载 Prisma
    let prismaStatus = "not tested";
    try {
      const { prisma } = await import("@/lib/db");
      prismaStatus = "loaded";

      // 3. 尝试数据库查询
      const count = await prisma.company.count();
      prismaStatus = `connected, ${count} companies`;
    } catch (e) {
      prismaStatus = `error: ${e instanceof Error ? e.message : String(e)}`;
    }

    return NextResponse.json({ ok: true, env, prismaStatus });
  } catch (e) {
    return NextResponse.json({
      ok: false,
      error: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack : undefined,
    });
  }
}
