// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts, PostMeta } from "../lib/posts";
import Header from "../components/Header";

type Props = { posts: PostMeta[] };

export default function Home({ posts }: Props) {
  return (
    <>
      <Header />
      <Head>
        <title>My Markdown Blog</title>
        <meta name="description" content="Simple SSG Markdown blog" />
      </Head>

      <main className="container">
        <h1>記事一覧</h1>
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.slug} className="post-item">
              <div className="post-header">
                <h2>
                  <Link href={`/posts/${p.slug}/`}>{p.title}</Link>
                </h2>
                <div className="post-info">
                  <small>{new Date(p.date).toLocaleDateString()}</small>
                  {p.author && (
                    <div className="post-author">
                      {p.avatar && (
                        <img 
                          src={p.avatar} 
                          alt={p.author}
                          className="post-author-avatar"
                        />
                      )}
                      <span className="post-author-name">{p.author}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};
