import { z } from "zod";

// ============ Zod Schemas ============

export const companySizeSchema = z.enum(["large", "medium", "small"]);
export const recruitmentTypeSchema = z.enum(["summer", "daily", "unknown"]);
export const jobStatusSchema = z.enum(["open", "closing_soon", "closed", "unknown"]);

/** 前端筛选参数 */
export const jobFilterSchema = z.object({
  search: z.string().optional(),
  city: z.string().optional(),
  companySize: companySizeSchema.optional(),
  recruitmentType: recruitmentTypeSchema.optional(),
  sortBy: z.enum(["default", "deadline", "updatedAt"]).optional(),
  page: z.coerce.number().int().min(1).optional(),
});

export type JobFilter = z.infer<typeof jobFilterSchema>;

/** 抓取器返回的原始岗位数据 */
export const rawJobSchema = z.object({
  title: z.string().min(1),
  locationRaw: z.string().optional(),
  deadlineRaw: z.string().optional(),
  applyUrl: z.string().url(),
  sourceUrl: z.string().url().optional(),
  descriptionSnippet: z.string().optional(),
});

export type RawJob = z.infer<typeof rawJobSchema>;

/** 前端展示用的岗位数据 */
export interface JobCardData {
  id: string;
  companyName: string;
  companySlug: string;
  companySize: string;
  title: string;
  recruitmentType: string;
  locationNormalized: string[];
  deadlineAt: string | null;
  status: string;
  applyUrl: string;
  updatedAt: string;
}

/** 分页结果 */
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============ 常量 ============

export const PAGE_SIZE = 20;

/** 公司规模标签映射 */
export const COMPANY_SIZE_LABELS: Record<string, string> = {
  large: "大厂",
  medium: "中厂",
  small: "小厂",
};

/** 招聘类型标签映射 */
export const RECRUITMENT_TYPE_LABELS: Record<string, string> = {
  summer: "暑期实习",
  daily: "日常实习",
  unknown: "未明确",
};

/** 招聘状态标签映射 */
export const JOB_STATUS_LABELS: Record<string, string> = {
  open: "招聘中",
  closing_soon: "即将截止",
  closed: "已截止",
  unknown: "状态未知",
};

/** 招聘状态颜色映射 */
export const JOB_STATUS_COLORS: Record<string, string> = {
  open: "bg-green-100 text-green-800",
  closing_soon: "bg-yellow-100 text-yellow-800",
  closed: "bg-gray-100 text-gray-500",
  unknown: "bg-gray-100 text-gray-500",
};

/** 招聘类型颜色映射 */
export const RECRUITMENT_TYPE_COLORS: Record<string, string> = {
  summer: "bg-blue-100 text-blue-800",
  daily: "bg-purple-100 text-purple-800",
  unknown: "bg-gray-100 text-gray-500",
};

/** 主要城市列表 (用于筛选) */
export const MAJOR_CITIES = [
  "北京", "上海", "深圳", "广州", "杭州",
  "成都", "南京", "武汉", "西安", "苏州",
  "长沙", "郑州", "重庆", "天津", "合肥",
] as const;
