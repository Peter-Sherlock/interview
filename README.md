# 校招实习导航

互联网校招实习岗位聚合导航网站，面向国内本科生和研究生，集中展示暑期实习和日常实习岗位。

## 技术栈

- **框架**: Next.js (App Router) + TypeScript
- **样式**: Tailwind CSS v4
- **数据库**: PostgreSQL + Prisma ORM
- **部署**: Vercel
- **定时任务**: Vercel Cron

## 项目结构

```
├── prisma/
│   └── schema.prisma          # 数据库模型定义
├── scripts/
│   ├── seed.ts                # 种子数据导入脚本
│   ├── run-crawlers.ts        # 手动运行抓取
│   └── update-status.ts       # 批量更新岗位状态
├── seed/
│   └── companies.ts           # 公司种子数据
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── cron/route.ts  # 定时抓取入口
│   │   │   └── jobs/
│   │   │       ├── route.ts   # 岗位查询 API
│   │   │       └── cities/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx           # 首页
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── ui/                # 基础 UI 组件
│   │   ├── filter-bar.tsx     # 筛选栏
│   │   ├── footer.tsx
│   │   ├── job-card.tsx       # 岗位卡片
│   │   ├── job-list.tsx       # 岗位列表 (客户端)
│   │   └── pagination.tsx
│   └── lib/
│       ├── crawlers/
│       │   ├── adapters/      # 各公司抓取适配器
│       │   │   ├── generic.ts
│       │   │   └── bytedance.ts
│       │   ├── base.ts        # 适配器基类
│       │   ├── registry.ts    # 适配器注册中心
│       │   └── runner.ts      # 抓取运行器
│       ├── db.ts              # Prisma 客户端
│       ├── queries.ts         # 数据查询函数
│       ├── types.ts           # 类型定义 + Zod schema
│       └── utils.ts           # 工具函数
└── vercel.json                # Vercel Cron 配置
```

## 本地开发

### 前置要求

- Node.js 18+
- PostgreSQL 数据库 (本地或 Supabase)

### 步骤

1. **克隆项目并安装依赖**

```bash
git clone <repo-url>
cd interview
npm install
```

2. **配置环境变量**

```bash
cp .env.example .env
# 编辑 .env，填写你的 PostgreSQL 连接字符串
```

3. **初始化数据库**

```bash
# 推送 schema 到数据库
npm run db:push

# 导入公司种子数据
npm run db:seed
```

4. **启动开发服务器**

```bash
npm run dev
```

访问 http://localhost:3000

### 其他命令

```bash
# 手动运行抓取
npm run crawl

# 更新岗位状态 (根据截止时间)
npm run update-status

# 打开 Prisma Studio (数据库可视化)
npm run db:studio
```

## 部署到 Vercel

1. 在 [Supabase](https://supabase.com) 创建免费 PostgreSQL 数据库
2. 将项目推送到 GitHub
3. 在 [Vercel](https://vercel.com) 导入项目
4. 配置环境变量:
   - `DATABASE_URL`: Supabase 数据库连接字符串
   - `CRON_SECRET`: 自定义密钥
   - `NEXT_PUBLIC_SITE_URL`: 站点域名
5. 部署后运行种子数据: 在 Vercel 终端或本地执行 `npm run db:seed`

Vercel Cron 会每天 08:00 UTC 自动运行抓取任务 (见 `vercel.json`)。

## 扩展抓取器

1. 在 `src/lib/crawlers/adapters/` 下创建新文件
2. 继承 `BaseCrawlerAdapter` 基类
3. 在 `src/lib/crawlers/registry.ts` 中注册
4. 在 `seed/companies.ts` 中设置对应公司的 `crawlEnabled: true` 和 `crawlAdapterId`

## 后续优化建议

- [ ] 添加更多公司的定制抓取适配器
- [ ] 使用 Playwright 处理 SPA 页面抓取
- [ ] 添加 RSS 订阅功能
- [ ] 添加微信小程序版
- [ ] 添加岗位变更通知 (邮件/webhook)
- [ ] 引入 Redis 缓存热门查询
- [ ] 添加数据统计面板
