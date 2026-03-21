import { NextResponse } from "next/server";
import { getAvailableCities } from "@/lib/queries";

export const dynamic = "force-dynamic";

/** GET /api/jobs/cities - 获取可用城市列表 */
export async function GET() {
  try {
    const cities = await getAvailableCities();
    return NextResponse.json({ cities });
  } catch {
    return NextResponse.json({ cities: [] });
  }
}
