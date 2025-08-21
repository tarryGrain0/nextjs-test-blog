// lib/posts.ts

import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
};

export type Post = PostMeta & {
    contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content");

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || realSlug,
        date: data.date || "",
        contentHtml: content, // 簡単のため、Markdownのままにします
    };
}

export function getAllPosts(): PostMeta[] {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((file) => file.endsWith(".md"))
            .map((fileName) => {
                const slug = fileName.replace(/\.md$/, "");
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const { data } = matter(fileContents);
                return {
                    slug,
                    title: data.title || slug,
                    date: data.date || "",
                };
            });
    } catch (error) {
        console.error("Error in getAllPosts:", error);
        return [];
    }
}
