/**
 * 公司种子数据
 *
 * 说明:
 * - officialCareerUrl: 公司官方招聘主站
 * - campusCareerUrl: 校招/实习专用页面
 * - crawlEnabled: 是否启用自动抓取
 * - crawlAdapterId: 对应 lib/crawlers/adapters/ 下的适配器 ID
 * - 对于无法确认的链接，使用 TODO 占位
 */

export interface CompanySeed {
  name: string;
  slug: string;
  companySize: "large" | "medium" | "small";
  industryTags: string[];
  officialCareerUrl: string | null;
  campusCareerUrl: string | null;
  crawlEnabled: boolean;
  crawlAdapterId: string | null;
}

export const companiesSeed: CompanySeed[] = [
  // ========== 大厂 ==========
  {
    name: "字节跳动",
    slug: "bytedance",
    companySize: "large",
    industryTags: ["互联网", "短视频", "AI"],
    officialCareerUrl: "https://jobs.bytedance.com",
    campusCareerUrl: "https://jobs.bytedance.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "bytedance",
  },
  {
    name: "腾讯",
    slug: "tencent",
    companySize: "large",
    industryTags: ["互联网", "游戏", "社交"],
    officialCareerUrl: "https://careers.tencent.com",
    campusCareerUrl: "https://join.qq.com",
    crawlEnabled: false,
    crawlAdapterId: "tencent",
  },
  {
    name: "阿里巴巴",
    slug: "alibaba",
    companySize: "large",
    industryTags: ["互联网", "电商", "云计算"],
    officialCareerUrl: "https://talent.alibaba.com",
    campusCareerUrl: "https://talent.alibaba.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "alibaba",
  },
  {
    name: "美团",
    slug: "meituan",
    companySize: "large",
    industryTags: ["互联网", "本地生活"],
    officialCareerUrl: "https://zhaopin.meituan.com",
    campusCareerUrl: "https://zhaopin.meituan.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "meituan",
  },
  {
    name: "百度",
    slug: "baidu",
    companySize: "large",
    industryTags: ["互联网", "AI", "搜索"],
    officialCareerUrl: "https://talent.baidu.com",
    campusCareerUrl: "https://talent.baidu.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "baidu",
  },
  {
    name: "京东",
    slug: "jd",
    companySize: "large",
    industryTags: ["互联网", "电商", "物流"],
    officialCareerUrl: "https://zhaopin.jd.com",
    campusCareerUrl: "https://campus.jd.com",
    crawlEnabled: false,
    crawlAdapterId: "jd",
  },
  {
    name: "华为",
    slug: "huawei",
    companySize: "large",
    industryTags: ["科技", "通信", "云计算"],
    officialCareerUrl: "https://career.huawei.com",
    campusCareerUrl: "https://career.huawei.com/reccampportal/portal5/campus-recruitment.html",
    crawlEnabled: false,
    crawlAdapterId: "huawei",
  },
  {
    name: "小米",
    slug: "xiaomi",
    companySize: "large",
    industryTags: ["科技", "硬件", "互联网"],
    officialCareerUrl: "https://hr.xiaomi.com",
    campusCareerUrl: "https://hr.xiaomi.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "xiaomi",
  },
  {
    name: "网易",
    slug: "netease",
    companySize: "large",
    industryTags: ["互联网", "游戏", "音乐"],
    officialCareerUrl: "https://hr.163.com",
    campusCareerUrl: "https://campus.163.com",
    crawlEnabled: false,
    crawlAdapterId: "netease",
  },
  {
    name: "快手",
    slug: "kuaishou",
    companySize: "large",
    industryTags: ["互联网", "短视频"],
    officialCareerUrl: "https://zhaopin.kuaishou.cn",
    campusCareerUrl: "https://zhaopin.kuaishou.cn/campus",
    crawlEnabled: false,
    crawlAdapterId: "kuaishou",
  },
  {
    name: "小红书",
    slug: "xiaohongshu",
    companySize: "large",
    industryTags: ["互联网", "社区", "电商"],
    officialCareerUrl: "https://job.xiaohongshu.com",
    campusCareerUrl: "https://job.xiaohongshu.com",
    crawlEnabled: false,
    crawlAdapterId: "xiaohongshu",
  },
  {
    name: "拼多多",
    slug: "pinduoduo",
    companySize: "large",
    industryTags: ["互联网", "电商"],
    officialCareerUrl: "https://careers.pinduoduo.com",
    campusCareerUrl: "https://careers.pinduoduo.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "pinduoduo",
  },
  {
    name: "滴滴",
    slug: "didi",
    companySize: "large",
    industryTags: ["互联网", "出行"],
    officialCareerUrl: "https://talent.didiglobal.com",
    campusCareerUrl: "https://talent.didiglobal.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "didi",
  },
  {
    name: "蚂蚁集团",
    slug: "ant-group",
    companySize: "large",
    industryTags: ["金融科技", "互联网"],
    officialCareerUrl: "https://talent.antgroup.com",
    campusCareerUrl: "https://talent.antgroup.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "ant-group",
  },

  // ========== 中厂 ==========
  {
    name: "哔哩哔哩",
    slug: "bilibili",
    companySize: "medium",
    industryTags: ["互联网", "视频", "游戏"],
    officialCareerUrl: "https://jobs.bilibili.com",
    campusCareerUrl: "https://jobs.bilibili.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "bilibili",
  },
  {
    name: "米哈游",
    slug: "mihoyo",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://join.mihoyo.com",
    campusCareerUrl: "https://join.mihoyo.com/#/campus",
    crawlEnabled: false,
    crawlAdapterId: "mihoyo",
  },
  {
    name: "大疆创新",
    slug: "dji",
    companySize: "medium",
    industryTags: ["科技", "无人机", "硬件"],
    officialCareerUrl: "https://we.dji.com",
    campusCareerUrl: "https://we.dji.com/campus",
    crawlEnabled: false,
    crawlAdapterId: "dji",
  },
  {
    name: "商汤科技",
    slug: "sensetime",
    companySize: "medium",
    industryTags: ["AI", "科技"],
    officialCareerUrl: "https://hr.sensetime.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "sensetime",
  },
  {
    name: "蔚来汽车",
    slug: "nio",
    companySize: "medium",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://nio.jobs.feishu.cn/index",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "nio",
  },
  {
    name: "理想汽车",
    slug: "li-auto",
    companySize: "medium",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://www.lixiang.com/join-us",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "li-auto",
  },
  {
    name: "小鹏汽车",
    slug: "xpeng",
    companySize: "medium",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://job.xiaopeng.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "xpeng",
  },
  {
    name: "携程",
    slug: "ctrip",
    companySize: "medium",
    industryTags: ["互联网", "旅游"],
    officialCareerUrl: "https://careers.ctrip.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "ctrip",
  },
  {
    name: "知乎",
    slug: "zhihu",
    companySize: "medium",
    industryTags: ["互联网", "社区"],
    officialCareerUrl: "https://www.zhihu.com/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "zhihu",
  },
  {
    name: "OPPO",
    slug: "oppo",
    companySize: "medium",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://careers.oppo.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "oppo",
  },
  {
    name: "vivo",
    slug: "vivo",
    companySize: "medium",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://hr.vivo.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "vivo",
  },

  // ========== 外企中国区 ==========
  {
    name: "微软中国",
    slug: "microsoft-cn",
    companySize: "large",
    industryTags: ["科技", "云计算", "AI"],
    officialCareerUrl: "https://careers.microsoft.com",
    campusCareerUrl: "https://careers.microsoft.com/students",
    crawlEnabled: false,
    crawlAdapterId: "microsoft",
  },
  {
    name: "谷歌中国",
    slug: "google-cn",
    companySize: "large",
    industryTags: ["科技", "AI", "搜索"],
    officialCareerUrl: "https://careers.google.com",
    campusCareerUrl: "https://careers.google.com/students",
    crawlEnabled: false,
    crawlAdapterId: "google",
  },
  {
    name: "苹果中国",
    slug: "apple-cn",
    companySize: "large",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://jobs.apple.com/zh-cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "apple",
  },
  {
    name: "亚马逊中国",
    slug: "amazon-cn",
    companySize: "large",
    industryTags: ["科技", "电商", "云计算"],
    officialCareerUrl: "https://www.amazon.jobs/zh",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "amazon",
  },

  // ========== 小厂/新兴公司 ==========
  {
    name: "月之暗面",
    slug: "moonshot-ai",
    companySize: "small",
    industryTags: ["AI"],
    officialCareerUrl: "https://www.moonshot.cn/jobs",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "智谱AI",
    slug: "zhipu-ai",
    companySize: "small",
    industryTags: ["AI"],
    officialCareerUrl: "https://zhipuai.cn/join",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "MiniMax",
    slug: "minimax",
    companySize: "small",
    industryTags: ["AI"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "深势科技",
    slug: "dp-tech",
    companySize: "small",
    industryTags: ["AI", "科技"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },
];
