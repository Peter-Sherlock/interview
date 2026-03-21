import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============ 城市标准化 ============

const CITY_ALIAS_MAP: Record<string, string> = {
  北京市: "北京", 北京: "北京",
  上海市: "上海", 上海: "上海",
  深圳市: "深圳", 深圳: "深圳",
  广州市: "广州", 广州: "广州",
  杭州市: "杭州", 杭州: "杭州",
  成都市: "成都", 成都: "成都",
  南京市: "南京", 南京: "南京",
  武汉市: "武汉", 武汉: "武汉",
  西安市: "西安", 西安: "西安",
  苏州市: "苏州", 苏州: "苏州",
  长沙市: "长沙", 长沙: "长沙",
  郑州市: "郑州", 郑州: "郑州",
  重庆市: "重庆", 重庆: "重庆",
  天津市: "天津", 天津: "天津",
  合肥市: "合肥", 合肥: "合肥",
  厦门市: "厦门", 厦门: "厦门",
  珠海市: "珠海", 珠海: "珠海",
  东莞市: "东莞", 东莞: "东莞",
  大连市: "大连", 大连: "大连",
  青岛市: "青岛", 青岛: "青岛",
  宁波市: "宁波", 宁波: "宁波",
  无锡市: "无锡", 无锡: "无锡",
  佛山市: "佛山", 佛山: "佛山",
};

/** 将原始地点字符串标准化为城市列表 */
export function normalizeLocation(raw: string | null | undefined): string[] {
  if (!raw) return [];

  // 分隔符拆分: / 、 , | ；
  const parts = raw.split(/[/、,|；;]+/).map((s) => s.trim()).filter(Boolean);
  const cities = new Set<string>();

  for (const part of parts) {
    // 尝试从已知城市中匹配
    const matched = Object.keys(CITY_ALIAS_MAP).find((alias) => part.includes(alias));
    if (matched) {
      cities.add(CITY_ALIAS_MAP[matched]);
    } else {
      // 尝试提取前两三个字作为城市名
      const cleaned = part.replace(/[市区县省]+$/, "").trim();
      if (cleaned.length >= 2) {
        cities.add(cleaned);
      }
    }
  }

  return Array.from(cities);
}

// ============ 招聘类型识别 ============

const SUMMER_KEYWORDS = ["暑期实习", "暑期", "夏令营", "summer intern", "summer", "暑假"];
const DAILY_KEYWORDS = ["日常实习", "实习", "intern"];

/** 从标题或描述推断招聘类型 */
export function detectRecruitmentType(
  title: string,
  description?: string
): "summer" | "daily" | "unknown" {
  const text = `${title} ${description || ""}`.toLowerCase();

  for (const kw of SUMMER_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) return "summer";
  }
  for (const kw of DAILY_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) return "daily";
  }
  return "unknown";
}

// ============ 招聘状态计算 ============

/** 根据截止时间计算招聘状态 */
export function computeJobStatus(
  deadlineAt: Date | null | undefined
): "open" | "closing_soon" | "closed" | "unknown" {
  if (!deadlineAt) return "unknown";

  const now = new Date();
  if (deadlineAt < now) return "closed";

  const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (deadlineAt <= sevenDaysLater) return "closing_soon";

  return "open";
}

// ============ 去重 Hash ============

/** 生成岗位去重 hash: companyId + title + 标准化城市 + applyUrl */
export function generateJobHash(
  companyId: string,
  title: string,
  locationNormalized: string[],
  applyUrl: string
): string {
  const raw = `${companyId}|${title}|${locationNormalized.sort().join(",")}|${applyUrl}`;
  return crypto.createHash("md5").update(raw).digest("hex");
}

// ============ 日期解析 ============

/** 尝试解析各种中文日期格式 */
export function parseDeadline(raw: string | null | undefined): Date | null {
  if (!raw) return null;

  const cleaned = raw.trim();

  // 2025-06-30 or 2025/06/30
  const isoMatch = cleaned.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (isoMatch) {
    const d = new Date(
      parseInt(isoMatch[1]),
      parseInt(isoMatch[2]) - 1,
      parseInt(isoMatch[3])
    );
    if (!isNaN(d.getTime())) return d;
  }

  // 2025年6月30日
  const cnMatch = cleaned.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (cnMatch) {
    const d = new Date(
      parseInt(cnMatch[1]),
      parseInt(cnMatch[2]) - 1,
      parseInt(cnMatch[3])
    );
    if (!isNaN(d.getTime())) return d;
  }

  // 直接尝试 Date.parse
  const fallback = new Date(cleaned);
  if (!isNaN(fallback.getTime())) return fallback;

  return null;
}
