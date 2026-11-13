import type { MetadataRoute } from "next";
import { getPosts } from "@/modules/Blog/utils/blog";
import { services } from "@/utils/services";
import { allWhatWeBuildPaths } from "@/utils/what-we-build";
import { absoluteUrl } from "@/utils/seo";

// Rebuilt hourly so newly published blog posts appear without a deploy.
export const revalidate = 3600;

/** Indexable public pages. Campaign pages are noindex and deliberately left out. */
const staticPaths = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/faqs",
  "/contact",
  "/ai-for-small-businesses",
  "/terms",
  "/privacy",
  "/cookie-policy",
  "/service-terms-and-conditions",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({ url: absoluteUrl(path) })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`) })),
    ...allWhatWeBuildPaths().map((path) => ({ url: absoluteUrl(path) })),
  ];

  // Blog posts come from Payload. If the database is unreachable (e.g. a build
  // without DATABASE_URI), still serve the rest of the sitemap.
  try {
    // Cap the wait so an unreachable database cannot stall a build.
    const posts = await Promise.race([
      getPosts(),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timed out after 10s")), 10_000)),
    ]);
    entries.push(
      ...posts.map((p) => ({
        url: absoluteUrl(`/blog/${p.slug}`),
        lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
      })),
    );
  } catch (err) {
    console.error("[sitemap] could not load blog posts", err);
  }

  return entries;
}
