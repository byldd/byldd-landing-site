import posts from "./blog-data.json";

export type BlogBlock = { type: "p" | "h" | "list"; text?: string; items?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: number;
  blocks: BlogBlock[];
};

export const blogPosts = posts as BlogPost[];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
