"use client";

import { Input } from "@/components/ui/input";
import { SelectNative } from "@/components/ui/select-native";
import { Button } from "@/components/ui/button";
import {
  MAJOR_CITIES,
  COMPANY_SIZE_LABELS,
  RECRUITMENT_TYPE_LABELS,
} from "@/lib/types";
import type { JobFilter } from "@/lib/types";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useCallback, useState } from "react";

interface FilterBarProps {
  filter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
}

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilter = useCallback(
    (partial: Partial<JobFilter>) => {
      onFilterChange({ ...filter, ...partial, page: 1 });
    },
    [filter, onFilterChange]
  );

  const clearFilters = useCallback(() => {
    onFilterChange({ page: 1 });
  }, [onFilterChange]);

  const hasActiveFilters =
    filter.city || filter.companySize || filter.recruitmentType || filter.sortBy;

  const cityOptions = MAJOR_CITIES.map((c) => ({ value: c, label: c }));
  const sizeOptions = Object.entries(COMPANY_SIZE_LABELS).map(([v, l]) => ({
    value: v,
    label: l,
  }));
  const typeOptions = Object.entries(RECRUITMENT_TYPE_LABELS).map(([v, l]) => ({
    value: v,
    label: l,
  }));
  const sortOptions = [
    { value: "default", label: "默认排序" },
    { value: "deadline", label: "按截止时间" },
    { value: "updatedAt", label: "按更新时间" },
  ];

  return (
    <div className="space-y-3">
      {/* 搜索框 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <Input
          placeholder="搜索公司名或岗位名..."
          value={filter.search || ""}
          onChange={(e) => updateFilter({ search: e.target.value || undefined })}
          className="pl-10"
          aria-label="搜索岗位"
        />
      </div>

      {/* 移动端筛选按钮 */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          筛选
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-neutral-900 px-1.5 text-xs text-white">
              !
            </span>
          )}
        </Button>
      </div>

      {/* 筛选区 (桌面始终显示，移动端可折叠) */}
      <div
        className={`grid grid-cols-2 gap-3 md:grid-cols-4 ${
          mobileOpen ? "block" : "hidden md:grid"
        }`}
      >
        <SelectNative
          placeholder="全部城市"
          options={cityOptions}
          value={filter.city || ""}
          onChange={(e) => updateFilter({ city: e.target.value || undefined })}
          aria-label="按城市筛选"
        />
        <SelectNative
          placeholder="全部规模"
          options={sizeOptions}
          value={filter.companySize || ""}
          onChange={(e) =>
            updateFilter({
              companySize: (e.target.value as JobFilter["companySize"]) || undefined,
            })
          }
          aria-label="按公司规模筛选"
        />
        <SelectNative
          placeholder="全部类型"
          options={typeOptions}
          value={filter.recruitmentType || ""}
          onChange={(e) =>
            updateFilter({
              recruitmentType:
                (e.target.value as JobFilter["recruitmentType"]) || undefined,
            })
          }
          aria-label="按招聘类型筛选"
        />
        <SelectNative
          placeholder="排序方式"
          options={sortOptions}
          value={filter.sortBy || "default"}
          onChange={(e) =>
            updateFilter({
              sortBy: (e.target.value as JobFilter["sortBy"]) || undefined,
            })
          }
          aria-label="排序方式"
        />
      </div>

      {/* 清除筛选 */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-neutral-500">
            <X className="h-3.5 w-3.5" />
            清除筛选
          </Button>
        </div>
      )}
    </div>
  );
}
