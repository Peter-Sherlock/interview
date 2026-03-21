"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type JobCardData,
  RECRUITMENT_TYPE_LABELS,
  RECRUITMENT_TYPE_COLORS,
  JOB_STATUS_LABELS,
  JOB_STATUS_COLORS,
  COMPANY_SIZE_LABELS,
} from "@/lib/types";
import { MapPin, Clock, ExternalLink, Building2 } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface JobCardProps {
  job: JobCardData;
}

export function JobCard({ job }: JobCardProps) {
  const deadlineFormatted = job.deadlineAt
    ? format(new Date(job.deadlineAt), "yyyy年M月d日", { locale: zhCN })
    : null;

  return (
    <div className="group rounded-lg border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-sm">
      {/* 顶部: 公司名 + 标签 */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <Building2 className="h-4 w-4 text-neutral-400 shrink-0" />
            <span className="text-sm text-neutral-500 truncate">
              {job.companyName}
            </span>
            <Badge className="bg-neutral-100 text-neutral-600 shrink-0">
              {COMPANY_SIZE_LABELS[job.companySize] || job.companySize}
            </Badge>
          </div>
          <h3 className="text-base font-medium text-neutral-900 leading-snug line-clamp-2">
            {job.title}
          </h3>
        </div>

        {/* 招聘状态 */}
        <Badge className={`shrink-0 ${JOB_STATUS_COLORS[job.status]}`}>
          {JOB_STATUS_LABELS[job.status]}
        </Badge>
      </div>

      {/* 中间: 信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-neutral-500">
        {/* 招聘类型 */}
        <Badge className={RECRUITMENT_TYPE_COLORS[job.recruitmentType]}>
          {RECRUITMENT_TYPE_LABELS[job.recruitmentType]}
        </Badge>

        {/* 城市 */}
        {job.locationNormalized.length > 0 && (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {job.locationNormalized.join(" / ")}
          </span>
        )}

        {/* 截止时间 */}
        {deadlineFormatted && (
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            截止 {deadlineFormatted}
          </span>
        )}
      </div>

      {/* 底部: 投递按钮 */}
      <div className="mt-4 flex items-center justify-end">
        <Button size="sm" asChild>
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
            立即投递
            <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

/** 加载骨架 */
export function JobCardSkeleton() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 animate-pulse rounded bg-neutral-100" />
          <div className="h-5 w-48 animate-pulse rounded bg-neutral-100" />
        </div>
        <div className="h-5 w-16 animate-pulse rounded bg-neutral-100" />
      </div>
      <div className="mt-3 flex gap-3">
        <div className="h-5 w-16 animate-pulse rounded bg-neutral-100" />
        <div className="h-5 w-24 animate-pulse rounded bg-neutral-100" />
        <div className="h-5 w-28 animate-pulse rounded bg-neutral-100" />
      </div>
      <div className="mt-4 flex justify-end">
        <div className="h-8 w-24 animate-pulse rounded bg-neutral-100" />
      </div>
    </div>
  );
}
