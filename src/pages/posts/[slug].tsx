// pages/posts/[slug].tsx
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostSlugs, getPostBySlug, Post } from "../../lib/posts";

type Props = { post: Post };

export default function PostPage({ post }: Props) {
    return (
        <>
            <Head>
                <title>{post.title} | My Markdown Blog</title>
                <meta name="description" content={post.title} />
            </Head>

            <main className="container">
                <article>
                    <h1>{post.title}</h1>
                    <small>{new Date(post.date).toLocaleDateString()}</small>
                    <div
                        className="markdown-body"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </article>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getPostSlugs().map((s: string) => s.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug: string) => ({ params: { slug } })),
        fallback: false, // 全て事前生成
    };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const slug = ctx.params?.slug as string;
    const post = getPostBySlug(slug);
    return { props: { post } };
};
