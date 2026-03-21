import { BaseCrawlerAdapter, type CrawlerConfig } from "../base";
import type { RawJob } from "@/lib/types";

/**
 * 通用适配器 (示例/回退)
 *
 * 当某公司暂无定制适配器时，使用此通用适配器
 * 它不会抓取具体岗位，而是返回一条指向官方招聘页面的入口记录
 * 确保用户至少可以通过导航链接跳转到官方页面
 */
export class GenericAdapter extends BaseCrawlerAdapter {
  readonly id = "generic";
  readonly name = "通用适配器";

  async crawl(config: CrawlerConfig): Promise<RawJob[]> {
    const url = config.campusCareerUrl || config.officialCareerUrl;
    if (!url) return [];

    // 返回一条导航入口，指向官方页面
    return [
      {
        title: `${config.companyName} - 校招/实习岗位 (请前往官网查看)`,
        applyUrl: url,
        sourceUrl: url,
        descriptionSnippet: `请访问 ${config.companyName} 官方招聘页面查看最新校招实习岗位`,
      },
    ];
  }
}
