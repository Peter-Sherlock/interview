/**
 * 公司种子数据
 *
 * 说明:
 * - officialCareerUrl: 公司官方招聘主站
 * - campusCareerUrl: 校招/实习专用页面
 * - crawlEnabled: 是否启用自动抓取
 * - crawlAdapterId: 对应 lib/crawlers/adapters/ 下的适配器 ID
 * - 对于无法确认的链接，使用 TODO 占位
 *
 * 分类标准:
 * - large（大厂）: 员工 10000+ 或行业头部，BAT/TMD 级别
 * - medium（中厂）: 员工 1000~10000 或细分领域头部
 * - small（小厂/新兴）: 员工 <1000 或初创明星公司
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
  // ================================================================
  //  一、互联网大厂（BAT/TMD + 头部平台）
  // ================================================================
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

  // ================================================================
  //  二、互联网中厂 / 细分头部
  // ================================================================
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
    name: "携程",
    slug: "ctrip",
    companySize: "large",
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
    name: "微博",
    slug: "weibo",
    companySize: "large",
    industryTags: ["互联网", "社交", "媒体"],
    officialCareerUrl: "https://career.sina.com.cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "weibo",
  },
  {
    name: "58同城",
    slug: "58",
    companySize: "large",
    industryTags: ["互联网", "本地生活"],
    officialCareerUrl: "https://hr.58.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "搜狐",
    slug: "sohu",
    companySize: "medium",
    industryTags: ["互联网", "媒体"],
    officialCareerUrl: "https://hr.sohu.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "爱奇艺",
    slug: "iqiyi",
    companySize: "medium",
    industryTags: ["互联网", "视频", "娱乐"],
    officialCareerUrl: "https://careers.iqiyi.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "去哪儿",
    slug: "qunar",
    companySize: "medium",
    industryTags: ["互联网", "旅游"],
    officialCareerUrl: "https://career.qunar.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "贝壳找房",
    slug: "beike",
    companySize: "large",
    industryTags: ["互联网", "房产"],
    officialCareerUrl: "https://talent.ke.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Boss直聘",
    slug: "zhipin",
    companySize: "medium",
    industryTags: ["互联网", "招聘"],
    officialCareerUrl: "https://www.zhipin.com/gongsi",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  三、游戏公司
  // ================================================================
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
    name: "莉莉丝游戏",
    slug: "lilith",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.lilith.com/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "叠纸游戏",
    slug: "papergames",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.papergames.net/join",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "鹰角网络",
    slug: "hypergryph",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.hypergryph.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "完美世界",
    slug: "pwrd",
    companySize: "large",
    industryTags: ["游戏", "影视"],
    officialCareerUrl: "https://jobs.games.wanmei.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "三七互娱",
    slug: "37wan",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://hr.37.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "游族网络",
    slug: "youzu",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.youzu.com/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "心动网络",
    slug: "xd",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.xd.com/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "库洛游戏",
    slug: "kurogames",
    companySize: "medium",
    industryTags: ["游戏"],
    officialCareerUrl: "https://www.kurogames.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "散爆网络",
    slug: "sunborn",
    companySize: "small",
    industryTags: ["游戏"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "网易游戏",
    slug: "netease-games",
    companySize: "large",
    industryTags: ["游戏"],
    officialCareerUrl: "https://game.campus.163.com",
    campusCareerUrl: "https://game.campus.163.com",
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  四、AI / 大模型公司
  // ================================================================
  {
    name: "月之暗面",
    slug: "moonshot-ai",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://www.moonshot.cn/jobs",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "智谱AI",
    slug: "zhipu-ai",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://zhipuai.cn/join",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "MiniMax",
    slug: "minimax",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "百川智能",
    slug: "baichuan-ai",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://www.baichuan-ai.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "阶跃星辰",
    slug: "stepfun",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://www.stepfun.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "零一万物",
    slug: "01ai",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://www.lingyiwanwu.com/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
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
  {
    name: "面壁智能",
    slug: "modelbest",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
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
    name: "旷视科技",
    slug: "megvii",
    companySize: "medium",
    industryTags: ["AI", "科技"],
    officialCareerUrl: "https://megvii.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "依图科技",
    slug: "yitu",
    companySize: "medium",
    industryTags: ["AI", "科技"],
    officialCareerUrl: "https://www.yitutech.com/cn/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "云从科技",
    slug: "cloudwalk",
    companySize: "medium",
    industryTags: ["AI", "科技"],
    officialCareerUrl: "https://www.cloudwalk.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "第四范式",
    slug: "4paradigm",
    companySize: "medium",
    industryTags: ["AI", "科技"],
    officialCareerUrl: "https://www.4paradigm.com/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "科大讯飞",
    slug: "iflytek",
    companySize: "large",
    industryTags: ["AI", "科技", "语音"],
    officialCareerUrl: "https://www.iflytek.com/work",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "DeepSeek",
    slug: "deepseek",
    companySize: "small",
    industryTags: ["AI", "大模型"],
    officialCareerUrl: "https://www.deepseek.com/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  五、硬件 / 手机 / IoT 科技
  // ================================================================
  {
    name: "OPPO",
    slug: "oppo",
    companySize: "large",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://careers.oppo.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "oppo",
  },
  {
    name: "vivo",
    slug: "vivo",
    companySize: "large",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://hr.vivo.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: "vivo",
  },
  {
    name: "荣耀",
    slug: "honor",
    companySize: "large",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://career.hihonor.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "联想",
    slug: "lenovo",
    companySize: "large",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://talent.lenovo.com.cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
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
    name: "海康威视",
    slug: "hikvision",
    companySize: "large",
    industryTags: ["科技", "安防", "AI"],
    officialCareerUrl: "https://campushr.hikvision.com",
    campusCareerUrl: "https://campushr.hikvision.com",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "中兴通讯",
    slug: "zte",
    companySize: "large",
    industryTags: ["科技", "通信"],
    officialCareerUrl: "https://job.zte.com.cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "传音控股",
    slug: "transsion",
    companySize: "medium",
    industryTags: ["科技", "硬件"],
    officialCareerUrl: "https://www.transsion.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  六、车企科技岗
  // ================================================================
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
    name: "比亚迪",
    slug: "byd",
    companySize: "large",
    industryTags: ["汽车", "科技", "新能源"],
    officialCareerUrl: "https://job.byd.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "吉利汽车",
    slug: "geely",
    companySize: "large",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://careers.geely.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "小米汽车",
    slug: "xiaomi-auto",
    companySize: "large",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://hr.xiaomi.com",
    campusCareerUrl: "https://hr.xiaomi.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "零跑汽车",
    slug: "leapmotor",
    companySize: "medium",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: "https://www.leapmotor.com/joinus.html",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "哪吒汽车",
    slug: "neta",
    companySize: "medium",
    industryTags: ["汽车", "科技"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "地平线",
    slug: "horizon-robotics",
    companySize: "medium",
    industryTags: ["汽车", "AI", "芯片"],
    officialCareerUrl: "https://www.horizon.auto/join",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Momenta",
    slug: "momenta",
    companySize: "small",
    industryTags: ["汽车", "AI", "自动驾驶"],
    officialCareerUrl: "https://www.momenta.cn/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "小马智行",
    slug: "pony-ai",
    companySize: "small",
    industryTags: ["汽车", "AI", "自动驾驶"],
    officialCareerUrl: "https://www.pony.ai/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  七、云计算 / 企业服务
  // ================================================================
  {
    name: "阿里云",
    slug: "alicloud",
    companySize: "large",
    industryTags: ["云计算", "科技"],
    officialCareerUrl: "https://talent.alibaba.com",
    campusCareerUrl: "https://talent.alibaba.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "腾讯云",
    slug: "tencent-cloud",
    companySize: "large",
    industryTags: ["云计算", "科技"],
    officialCareerUrl: "https://careers.tencent.com",
    campusCareerUrl: "https://join.qq.com",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "金山办公",
    slug: "kingsoft-office",
    companySize: "medium",
    industryTags: ["软件", "办公"],
    officialCareerUrl: "https://www.wps.cn/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "金山云",
    slug: "ksyun",
    companySize: "medium",
    industryTags: ["云计算", "科技"],
    officialCareerUrl: "https://www.ksyun.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "飞书",
    slug: "feishu",
    companySize: "large",
    industryTags: ["软件", "企业服务"],
    officialCareerUrl: "https://jobs.bytedance.com",
    campusCareerUrl: "https://jobs.bytedance.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "钉钉",
    slug: "dingtalk",
    companySize: "large",
    industryTags: ["软件", "企业服务"],
    officialCareerUrl: "https://talent.alibaba.com",
    campusCareerUrl: "https://talent.alibaba.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "用友网络",
    slug: "yonyou",
    companySize: "large",
    industryTags: ["软件", "企业服务"],
    officialCareerUrl: "https://www.yonyou.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "金蝶",
    slug: "kingdee",
    companySize: "medium",
    industryTags: ["软件", "企业服务"],
    officialCareerUrl: "https://www.kingdee.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "明源云",
    slug: "mysoft",
    companySize: "medium",
    industryTags: ["软件", "房地产科技"],
    officialCareerUrl: null, // TODO: 确认招聘页面地址
    campusCareerUrl: null,
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  八、电商
  // ================================================================
  {
    name: "唯品会",
    slug: "vip",
    companySize: "large",
    industryTags: ["互联网", "电商"],
    officialCareerUrl: "https://careers.vip.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "得物",
    slug: "dewu",
    companySize: "medium",
    industryTags: ["互联网", "电商", "潮流"],
    officialCareerUrl: "https://www.dewu.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Shopee（中国）",
    slug: "shopee-cn",
    companySize: "large",
    industryTags: ["互联网", "电商", "跨境"],
    officialCareerUrl: "https://careers.shopee.cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "SHEIN",
    slug: "shein",
    companySize: "large",
    industryTags: ["电商", "跨境", "快时尚"],
    officialCareerUrl: "https://careers.shein.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Temu",
    slug: "temu",
    companySize: "large",
    industryTags: ["电商", "跨境"],
    officialCareerUrl: "https://careers.pinduoduo.com",
    campusCareerUrl: "https://careers.pinduoduo.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  九、外企中国区
  // ================================================================
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
  {
    name: "Meta中国",
    slug: "meta-cn",
    companySize: "large",
    industryTags: ["科技", "社交", "AI"],
    officialCareerUrl: "https://www.metacareers.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "英伟达中国",
    slug: "nvidia-cn",
    companySize: "large",
    industryTags: ["科技", "芯片", "AI"],
    officialCareerUrl: "https://www.nvidia.cn/about-nvidia/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "英特尔中国",
    slug: "intel-cn",
    companySize: "large",
    industryTags: ["科技", "芯片"],
    officialCareerUrl: "https://www.intel.cn/content/www/cn/zh/jobs/jobs-at-intel.html",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "高通中国",
    slug: "qualcomm-cn",
    companySize: "large",
    industryTags: ["科技", "芯片", "通信"],
    officialCareerUrl: "https://www.qualcomm.cn/company/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "AMD中国",
    slug: "amd-cn",
    companySize: "large",
    industryTags: ["科技", "芯片"],
    officialCareerUrl: "https://www.amd.com/zh-hans/corporate/careers.html",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "SAP中国",
    slug: "sap-cn",
    companySize: "large",
    industryTags: ["软件", "企业服务"],
    officialCareerUrl: "https://www.sap.cn/about/careers.html",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Oracle中国",
    slug: "oracle-cn",
    companySize: "large",
    industryTags: ["软件", "云计算"],
    officialCareerUrl: "https://www.oracle.com/cn/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "IBM中国",
    slug: "ibm-cn",
    companySize: "large",
    industryTags: ["科技", "云计算", "AI"],
    officialCareerUrl: "https://www.ibm.com/cn-zh/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Airbnb中国",
    slug: "airbnb-cn",
    companySize: "medium",
    industryTags: ["互联网", "旅游"],
    officialCareerUrl: "https://careers.airbnb.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "PayPal中国",
    slug: "paypal-cn",
    companySize: "large",
    industryTags: ["金融科技"],
    officialCareerUrl: "https://careers.pypl.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Stripe中国",
    slug: "stripe-cn",
    companySize: "medium",
    industryTags: ["金融科技"],
    officialCareerUrl: "https://stripe.com/jobs",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十、金融科技
  // ================================================================
  {
    name: "微众银行",
    slug: "webank",
    companySize: "medium",
    industryTags: ["金融科技"],
    officialCareerUrl: "https://www.webank.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "网商银行",
    slug: "mybank",
    companySize: "medium",
    industryTags: ["金融科技"],
    officialCareerUrl: "https://talent.antgroup.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "度小满金融",
    slug: "duxiaoman",
    companySize: "medium",
    industryTags: ["金融科技"],
    officialCareerUrl: "https://www.duxiaoman.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "京东科技",
    slug: "jdt",
    companySize: "large",
    industryTags: ["金融科技", "科技"],
    officialCareerUrl: "https://zhaopin.jd.com",
    campusCareerUrl: "https://campus.jd.com",
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十一、芯片 / 半导体
  // ================================================================
  {
    name: "寒武纪",
    slug: "cambricon",
    companySize: "medium",
    industryTags: ["芯片", "AI"],
    officialCareerUrl: "https://www.cambricon.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "壁仞科技",
    slug: "biren",
    companySize: "small",
    industryTags: ["芯片", "AI"],
    officialCareerUrl: "https://www.birentech.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "摩尔线程",
    slug: "mthreads",
    companySize: "small",
    industryTags: ["芯片", "GPU"],
    officialCareerUrl: "https://www.mthreads.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "紫光展锐",
    slug: "unisoc",
    companySize: "medium",
    industryTags: ["芯片", "通信"],
    officialCareerUrl: "https://www.unisoc.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十二、安全 / 网络安全
  // ================================================================
  {
    name: "360",
    slug: "360",
    companySize: "large",
    industryTags: ["互联网", "安全"],
    officialCareerUrl: "https://hr.360.cn",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "奇安信",
    slug: "qianxin",
    companySize: "medium",
    industryTags: ["安全", "科技"],
    officialCareerUrl: "https://www.qianxin.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "深信服",
    slug: "sangfor",
    companySize: "medium",
    industryTags: ["安全", "云计算"],
    officialCareerUrl: "https://hr.sangfor.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十三、社交 / 内容平台
  // ================================================================
  {
    name: "Soul",
    slug: "soul",
    companySize: "medium",
    industryTags: ["互联网", "社交"],
    officialCareerUrl: "https://www.soulapp.cn/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "陌陌",
    slug: "momo",
    companySize: "medium",
    industryTags: ["互联网", "社交"],
    officialCareerUrl: "https://www.immomo.com/hr",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "虎牙直播",
    slug: "huya",
    companySize: "medium",
    industryTags: ["互联网", "直播"],
    officialCareerUrl: "https://www.huya.com/about/join",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "斗鱼",
    slug: "douyu",
    companySize: "medium",
    industryTags: ["互联网", "直播"],
    officialCareerUrl: "https://www.douyu.com/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "喜马拉雅",
    slug: "ximalaya",
    companySize: "medium",
    industryTags: ["互联网", "音频"],
    officialCareerUrl: "https://www.ximalaya.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十四、教育科技
  // ================================================================
  {
    name: "猿辅导",
    slug: "yuanfudao",
    companySize: "medium",
    industryTags: ["教育", "科技"],
    officialCareerUrl: "https://hr.yuanfudao.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "作业帮",
    slug: "zuoyebang",
    companySize: "medium",
    industryTags: ["教育", "科技"],
    officialCareerUrl: "https://www.zuoyebang.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十五、物流科技
  // ================================================================
  {
    name: "顺丰科技",
    slug: "sf-tech",
    companySize: "large",
    industryTags: ["物流", "科技"],
    officialCareerUrl: "https://careers.sf-express.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "菜鸟网络",
    slug: "cainiao",
    companySize: "large",
    industryTags: ["物流", "科技"],
    officialCareerUrl: "https://talent.alibaba.com",
    campusCareerUrl: "https://talent.alibaba.com/campus",
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十六、机器人 / 智能制造
  // ================================================================
  {
    name: "宇树科技",
    slug: "unitree",
    companySize: "small",
    industryTags: ["机器人", "AI"],
    officialCareerUrl: "https://www.unitree.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "优必选",
    slug: "ubtech",
    companySize: "medium",
    industryTags: ["机器人", "AI"],
    officialCareerUrl: "https://www.ubtrobot.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "追觅科技",
    slug: "dreame",
    companySize: "medium",
    industryTags: ["机器人", "智能硬件"],
    officialCareerUrl: "https://www.dreame.tech/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "石头科技",
    slug: "roborock",
    companySize: "medium",
    industryTags: ["机器人", "智能硬件"],
    officialCareerUrl: "https://www.roborock.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },

  // ================================================================
  //  十七、其他互联网/科技公司
  // ================================================================
  {
    name: "美图",
    slug: "meitu",
    companySize: "medium",
    industryTags: ["互联网", "图片"],
    officialCareerUrl: "https://www.meitu.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "同花顺",
    slug: "10jqka",
    companySize: "medium",
    industryTags: ["金融科技", "软件"],
    officialCareerUrl: "https://www.10jqka.com.cn/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "涂鸦智能",
    slug: "tuya",
    companySize: "medium",
    industryTags: ["IoT", "智能硬件"],
    officialCareerUrl: "https://www.tuya.com/cn/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "声网Agora",
    slug: "agora",
    companySize: "medium",
    industryTags: ["云计算", "音视频"],
    officialCareerUrl: "https://www.agora.io/cn/about-us/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "七牛云",
    slug: "qiniu",
    companySize: "medium",
    industryTags: ["云计算"],
    officialCareerUrl: "https://career.qiniu.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "PingCAP",
    slug: "pingcap",
    companySize: "small",
    industryTags: ["数据库", "开源"],
    officialCareerUrl: "https://careers.pingcap.com",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "Zilliz",
    slug: "zilliz",
    companySize: "small",
    industryTags: ["数据库", "AI", "开源"],
    officialCareerUrl: "https://zilliz.com/careers",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "思谋科技",
    slug: "smartmore",
    companySize: "small",
    industryTags: ["AI", "智能制造"],
    officialCareerUrl: "https://www.smartmore.com/joinus",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "影石创新",
    slug: "insta360",
    companySize: "medium",
    industryTags: ["科技", "硬件", "影像"],
    officialCareerUrl: "https://www.insta360.com/about/career",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
  {
    name: "BOSS直聘",
    slug: "zhipin",
    companySize: "medium",
    industryTags: ["互联网", "招聘"],
    officialCareerUrl: "https://www.zhipin.com/gongsi",
    campusCareerUrl: null, // TODO: 确认校招页面地址
    crawlEnabled: false,
    crawlAdapterId: null,
  },
];
