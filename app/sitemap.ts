import type { MetadataRoute } from "next";
import { getBlogPostPreviews } from "@/lib/blog-posts";
import { solutionLandingPages } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPostPreviews();
  const staticResourcePaths = [
    "/site-map",
    "/blog",
    "/solutions",
    "/why-apadcode",
    ...solutionLandingPages.map((page) => page.path),
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAtISO ?? post.publishedAtISO),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticResourceEntries: MetadataRoute.Sitemap = staticResourcePaths.map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...staticResourceEntries,
    ...blogEntries,
  ];
}
