// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // `next export` を有効化（完全静的サイト）
    trailingSlash: true,       // 末尾スラッシュでGH Pagesの相対パス崩れを回避
    images: { unoptimized: true }, // 画像最適化を無効（export時の制約回避）
    // GitHub Pages でサブパス配下に配置する場合は basePath/assetPrefix を利用
    basePath: '/nextjs-test-blog',
    // assetPrefix: '/your-repo-name/',
};
module.exports = nextConfig;
