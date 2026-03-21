import { NextRequest, NextResponse } from "next/server";
import { jobFilterSchema } from "@/lib/types";
import { queryJobs, getAvailableCities } from "@/lib/queries";

export const dynamic = "force-dynamic";

/** GET /api/jobs - 查询岗位列表 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const filter = jobFilterSchema.parse({
      search: searchParams.get("search") || undefined,
      city: searchParams.get("city") || undefined,
      companySize: searchParams.get("companySize") || undefined,
      recruitmentType: searchParams.get("recruitmentType") || undefined,
      sortBy: searchParams.get("sortBy") || undefined,
      page: searchParams.get("page") || undefined,
    });

    const result = await queryJobs(filter);

    return NextResponse.json(result);
  } catch (err) {
    console.error("[API /jobs] Error:", err);
    return NextResponse.json(
      { error: "查询失败" },
      { status: 500 }
    );
  }
}

/** GET /api/jobs/cities - 获取可用城市列表 */
export { };
