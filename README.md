This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment

このプロジェクトは GitHub Actions を使用して自動デプロイが設定されています。

### GitHub Pages での公開

1. GitHubリポジトリの設定で、GitHub Pagesを有効にしてください
2. Source を "GitHub Actions" に設定してください
3. `main` ブランチにプッシュすると自動的にデプロイされます

リポジトリが組織アカウントやユーザーページでない場合は、`next.config.ts` の `basePath` と `assetPrefix` のコメントアウトを外して、適切なリポジトリ名を設定してください。

### Vercel での公開

Vercelでの公開を選択する場合：

1. GitHub Secrets に以下を設定してください：
   - `VERCEL_TOKEN`: Vercelアカウントトークン
   - `ORG_ID`: VercelのOrganization ID
   - `PROJECT_ID`: VercelのProject ID

2. `.github/workflows/deploy.yml` を無効化し、`.github/workflows/vercel-deploy.yml` を使用してください

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
