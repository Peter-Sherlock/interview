"use client";

import { useCallback, useEffect, useState } from "react";
import { FilterBar } from "./filter-bar";
import { JobCard, JobCardSkeleton } from "./job-card";
import { Pagination } from "./pagination";
import type { JobFilter, JobCardData, PaginatedResult } from "@/lib/types";
import { Briefcase, SearchX } from "lucide-react";

export function JobList() {
  const [filter, setFilter] = useState<JobFilter>({ page: 1 });
  const [result, setResult] = useState<PaginatedResult<JobCardData> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = useCallback(async (f: JobFilter) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (f.search) params.set("search", f.search);
      if (f.city) params.set("city", f.city);
      if (f.companySize) params.set("companySize", f.companySize);
      if (f.recruitmentType) params.set("recruitmentType", f.recruitmentType);
      if (f.sortBy) params.set("sortBy", f.sortBy);
      if (f.page) params.set("page", String(f.page));

      const res = await fetch(`/api/jobs?${params.toString()}`);
      if (!res.ok) throw new Error("请求失败");

      const data: PaginatedResult<JobCardData> = await res.json();
      setResult(data);
    } catch {
      setError("加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // 防抖搜索
    const timer = setTimeout(() => {
      fetchJobs(filter);
    }, filter.search ? 300 : 0);

    return () => clearTimeout(timer);
  }, [filter, fetchJobs]);

  const handleFilterChange = useCallback((newFilter: JobFilter) => {
    setFilter(newFilter);
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      setFilter((prev) => ({ ...prev, page }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  return (
    <div className="space-y-6">
      <FilterBar filter={filter} onFilterChange={handleFilterChange} />

      {/* 结果统计 */}
      {result && !loading && (
        <p className="text-sm text-neutral-400">
          共 {result.total} 个岗位
        </p>
      )}

      {/* 加载状态 */}
      {loading && (
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* 错误状态 */}
      {error && !loading && (
        <div className="rounded-lg border border-red-100 bg-red-50 p-8 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* 空状态 */}
      {!loading && !error && result && result.data.length === 0 && (
        <div className="rounded-lg border border-neutral-200 bg-white p-12 text-center">
          {filter.search || filter.city || filter.companySize || filter.recruitmentType ? (
            <>
              <SearchX className="mx-auto h-12 w-12 text-neutral-300 mb-3" />
              <p className="text-neutral-500 text-lg">没有找到符合条件的岗位</p>
              <p className="text-neutral-400 text-sm mt-1">
                试试调整筛选条件或搜索关键词
              </p>
            </>
          ) : (
            <>
              <Briefcase className="mx-auto h-12 w-12 text-neutral-300 mb-3" />
              <p className="text-neutral-500 text-lg">暂无岗位数据</p>
              <p className="text-neutral-400 text-sm mt-1">
                岗位数据将在抓取任务运行后自动更新
              </p>
            </>
          )}
        </div>
      )}

      {/* 岗位列表 */}
      {!loading && !error && result && result.data.length > 0 && (
        <div className="space-y-3">
          {result.data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* 分页 */}
      {result && result.totalPages > 1 && (
        <Pagination
          page={result.page}
          totalPages={result.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
