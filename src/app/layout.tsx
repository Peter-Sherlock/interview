import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "校招实习导航 - 互联网校招实习岗位聚合",
  description:
    "一站式查看互联网大厂、AI公司、游戏公司等校招实习岗位信息，支持按城市、公司规模筛选，助你高效找到暑期实习和日常实习机会。",
  keywords: [
    "校招", "实习", "暑期实习", "互联网实习", "大厂实习",
    "校园招聘", "应届生", "实习生", "字节跳动实习", "腾讯实习",
  ],
  openGraph: {
    title: "校招实习导航",
    description: "互联网校招实习岗位聚合导航",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
