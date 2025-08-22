// pages/posts/[slug].tsx
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostSlugs, getPostBySlug, Post } from "../../lib/posts";
import Header from "../../components/Header";

type Props = { post: Post };

export default function PostPage({ post }: Props) {
    return (
        <>
            <Header />
            <Head>
                <title>{post.title} | My Markdown Blog</title>
                <meta name="description" content={post.title} />
            </Head>

            <main className="container">
                <article>
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <small>{new Date(post.date).toLocaleDateString()}</small>
                        {post.author && (
                            <div className="author-info">
                                {post.avatar && (
                                    <img
                                        src={post.avatar}
                                        alt={post.author}
                                        className="author-avatar"
                                    />
                                )}
                                <span className="author-name">執筆者: {post.author}</span>
                            </div>
                        )}
                    </div>
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
