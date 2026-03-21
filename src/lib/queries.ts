import { prisma } from "./db";
import type { JobFilter, JobCardData, PaginatedResult } from "./types";
import { PAGE_SIZE } from "./types";
import { Prisma } from "@/generated/prisma/client";

/**
 * 查询岗位列表 (首页使用)
 * 支持搜索、筛选、排序和分页
 */
export async function queryJobs(
  filter: JobFilter
): Promise<PaginatedResult<JobCardData>> {
  const page = filter.page || 1;
  const skip = (page - 1) * PAGE_SIZE;

  // 构建 WHERE 条件
  const where: Prisma.JobPostingWhereInput = {};

  // 搜索: 公司名 或 岗位名
  if (filter.search) {
    where.OR = [
      { title: { contains: filter.search, mode: "insensitive" } },
      { company: { name: { contains: filter.search, mode: "insensitive" } } },
    ];
  }

  // 按城市筛选
  if (filter.city) {
    where.locationNormalized = { has: filter.city };
  }

  // 按公司规模筛选
  if (filter.companySize) {
    where.company = {
      ...((where.company as Prisma.CompanyWhereInput) || {}),
      companySize: filter.companySize,
    };
  }

  // 按招聘类型筛选
  if (filter.recruitmentType) {
    where.recruitmentType = filter.recruitmentType;
  }

  // 构建排序规则
  let orderBy: Prisma.JobPostingOrderByWithRelationInput[] = [];
  switch (filter.sortBy) {
    case "deadline":
      orderBy = [{ deadlineAt: { sort: "asc", nulls: "last" } }, { updatedAt: "desc" }];
      break;
    case "updatedAt":
      orderBy = [{ updatedAt: "desc" }];
      break;
    default:
      // 默认: 暑期实习优先 -> 招聘中优先 -> 截止时间近优先 -> 更新时间近优先
      orderBy = [
        { recruitmentType: "asc" }, // summer < daily < unknown
        { status: "asc" },          // open < closing_soon < closed < unknown
        { deadlineAt: { sort: "asc", nulls: "last" } },
        { updatedAt: "desc" },
      ];
      break;
  }

  // 执行查询
  const [jobs, total] = await Promise.all([
    prisma.jobPosting.findMany({
      where,
      orderBy,
      skip,
      take: PAGE_SIZE,
      include: {
        company: {
          select: { name: true, slug: true, companySize: true },
        },
      },
    }),
    prisma.jobPosting.count({ where }),
  ]);

  // 映射为前端数据格式
  const data: JobCardData[] = jobs.map((job) => ({
    id: job.id,
    companyName: job.company.name,
    companySlug: job.company.slug,
    companySize: job.company.companySize,
    title: job.title,
    recruitmentType: job.recruitmentType,
    locationNormalized: job.locationNormalized,
    deadlineAt: job.deadlineAt?.toISOString() || null,
    status: job.status,
    applyUrl: job.applyUrl,
    updatedAt: job.updatedAt.toISOString(),
  }));

  return {
    data,
    total,
    page,
    pageSize: PAGE_SIZE,
    totalPages: Math.ceil(total / PAGE_SIZE),
  };
}

/** 获取所有出现过的城市列表 (用于筛选器) */
export async function getAvailableCities(): Promise<string[]> {
  const result = await prisma.$queryRaw<{ city: string }[]>`
    SELECT DISTINCT unnest("locationNormalized") as city
    FROM "JobPosting"
    ORDER BY city
  `;
  return result.map((r) => r.city);
}

/** 获取最近更新时间 */
export async function getLastUpdateTime(): Promise<Date | null> {
  const latest = await prisma.crawlLog.findFirst({
    where: { runStatus: "success" },
    orderBy: { createdAt: "desc" },
  });
  return latest?.createdAt || null;
}

/** 获取统计数据 */
export async function getStats(): Promise<{
  totalJobs: number;
  totalCompanies: number;
  openJobs: number;
}> {
  const [totalJobs, totalCompanies, openJobs] = await Promise.all([
    prisma.jobPosting.count(),
    prisma.company.count(),
    prisma.jobPosting.count({
      where: { status: { in: ["open", "closing_soon"] } },
    }),
  ]);
  return { totalJobs, totalCompanies, openJobs };
}
