import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Cloudflare Pages: 开发环境初始化 OpenNext
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
