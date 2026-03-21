import type { RawJob } from "@/lib/types";

/**
 * 抓取器适配器基类
 * 每个公司/站点实现自己的适配器，继承此类
 */
export abstract class BaseCrawlerAdapter {
  /** 适配器唯一 ID */
  abstract readonly id: string;
  /** 适配器名称 (用于日志) */
  abstract readonly name: string;

  /**
   * 执行抓取，返回原始岗位列表
   * @param config 公司配置信息
   */
  abstract crawl(config: CrawlerConfig): Promise<RawJob[]>;
}

/** 传递给适配器的公司配置 */
export interface CrawlerConfig {
  companyId: string;
  companyName: string;
  officialCareerUrl: string | null;
  campusCareerUrl: string | null;
}

/**
 * 通用 HTTP 请求辅助
 * 设置合理的 User-Agent 和超时
 */
export async function fetchPage(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; InternJobBot/1.0; +https://github.com/your-repo)",
        Accept: "text/html,application/json,*/*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}
