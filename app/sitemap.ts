import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { absoluteUrl, toIsoDate } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(toIsoDate(post.publishedAt)),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

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
    ...blogEntries,
  ];
}
