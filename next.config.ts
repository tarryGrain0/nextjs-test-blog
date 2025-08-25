import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pagesのベースパスを設定（リポジトリ名に合わせて調整してください）
  // basePath: '/nextjs-test-blog',
  // assetPrefix: '/nextjs-test-blog/',
};

export default nextConfig;
