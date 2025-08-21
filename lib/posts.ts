// lib/posts.ts

import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
};

const postsDirectory = path.join(process.cwd(), "content");

export function getAllPosts(): PostMeta[] {
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
}
