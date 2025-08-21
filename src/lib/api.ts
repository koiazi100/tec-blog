import { Post } from "@/interfaces/post";
import fs from "fs/promises";  // promises APIを使う
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  return fs.readdir(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getPostsByTag(tag: string, fields: string[] = []): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  const filtered = posts.filter((post) =>
    Array.isArray(post.tags) ? post.tags.includes(tag) : false
  );

  return filtered.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap((post) => post.tags || []);
  const uniqueTags = Array.from(new Set(tags));
  return uniqueTags.sort();
}