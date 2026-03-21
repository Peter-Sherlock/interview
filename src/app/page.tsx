import { JobList } from "@/components/job-list";
import { Footer } from "@/components/footer";
import { getStats, getLastUpdateTime } from "@/lib/queries";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function StatsBar() {
  let stats = { totalJobs: 0, totalCompanies: 0, openJobs: 0 };
  let lastUpdate: string | null = null;

  try {
    stats = await getStats();
    const lastUpdateDate = await getLastUpdateTime();
    if (lastUpdateDate) {
      lastUpdate = format(lastUpdateDate, "yyyy年M月d日 HH:mm", { locale: zhCN });
    }
  } catch {
    // 数据库可能未初始化，静默处理
  }

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-neutral-400">
      {stats.totalCompanies > 0 && (
        <span>收录 {stats.totalCompanies} 家公司</span>
      )}
      {stats.totalJobs > 0 && (
        <span>{stats.totalJobs} 个岗位</span>
      )}
      {stats.openJobs > 0 && (
        <span>{stats.openJobs} 个招聘中</span>
      )}
      {lastUpdate && <span>最近更新: {lastUpdate}</span>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 flex-1">
        {/* 标题区 */}
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            校招实习导航
          </h1>
          <p className="mt-2 text-neutral-500">
            互联网校招实习岗位聚合，帮你快速找到暑期实习和日常实习机会
          </p>
          <div className="mt-3">
            <Suspense
              fallback={
                <div className="h-5 w-64 animate-pulse rounded bg-neutral-100" />
              }
            >
              <StatsBar />
            </Suspense>
          </div>
        </header>

        {/* 岗位列表区 */}
        <JobList />
      </main>

      <Footer />
    </>
  );
}
