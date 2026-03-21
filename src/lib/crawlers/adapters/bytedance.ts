import { BaseCrawlerAdapter, fetchPage, type CrawlerConfig } from "../base";
import type { RawJob } from "@/lib/types";

/**
 * 字节跳动招聘适配器
 *
 * 说明: 字节跳动的校招页面是 SPA，直接 HTML 抓取可能无法获取内容
 * 这里使用其公开的 API 端点尝试获取岗位列表
 * 如果 API 不可用，回退到导航入口模式
 *
 * TODO: 需要根据实际 API 响应格式调整解析逻辑
 */
export class BytedanceAdapter extends BaseCrawlerAdapter {
  readonly id = "bytedance";
  readonly name = "字节跳动";

  async crawl(config: CrawlerConfig): Promise<RawJob[]> {
    try {
      // 字节跳动校招 API (公开接口，可能随时变更)
      const apiUrl =
        "https://jobs.bytedance.com/api/v1/search/job/posts?" +
        "keyword=&limit=20&offset=0&recruit_type=3"; // recruit_type=3 是实习

      const text = await fetchPage(apiUrl);
      const data = JSON.parse(text);

      if (!data?.data?.job_post_list) {
        return this.fallback(config);
      }

      return data.data.job_post_list.map(
        (item: Record<string, unknown>): RawJob => ({
          title: (item.title as string) || "未知岗位",
          locationRaw: (item.city_info as Record<string, string>)?.name || undefined,
          applyUrl: `https://jobs.bytedance.com/campus/position/${item.id}`,
          sourceUrl: config.campusCareerUrl || undefined,
          descriptionSnippet: (item.description as string)?.slice(0, 200) || undefined,
        })
      );
    } catch {
      console.warn(`[BytedanceAdapter] 抓取失败，回退到导航模式`);
      return this.fallback(config);
    }
  }

  private fallback(config: CrawlerConfig): RawJob[] {
    const url = config.campusCareerUrl || config.officialCareerUrl;
    if (!url) return [];
    return [
      {
        title: "字节跳动 - 校招/实习岗位 (请前往官网查看)",
        applyUrl: url,
        sourceUrl: url,
        descriptionSnippet: "请访问字节跳动官方招聘页面查看最新校招实习岗位",
      },
    ];
  }
}
