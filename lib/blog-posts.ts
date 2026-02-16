import { cache } from "react";
import { unstable_cache } from "next/cache";
import { fetchSupabasePublicRows, normalizeIsoDate } from "@/lib/supabase-rest";

type BlogPostBase = {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  publishedAt: string;
  publishedAtISO: string;
  updatedAtISO?: string;
  readTime: string;
};

export type BlogPostPreview = BlogPostBase;

export type BlogPost = BlogPostBase & {
  content: string[];
};

type BlogPostPreviewRow = {
  slug: string;
  title: string;
  description: string;
  meta_description: string;
  image_url: string;
  published_at: string;
  updated_at: string | null;
  read_time: string;
};

type BlogPostRow = BlogPostPreviewRow & {
  content: unknown;
};

const BLOG_REVALIDATE_SECONDS = 900;
const PREVIEW_SELECT =
  "slug,title,description,meta_description,image_url,published_at,updated_at,read_time";
const FULL_SELECT = `${PREVIEW_SELECT},content`;

function formatPublishedDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function normalizeContent(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((paragraph) => (typeof paragraph === "string" ? paragraph.trim() : ""))
    .filter(Boolean);
}

function mapRowToPreview(row: BlogPostPreviewRow): BlogPostPreview {
  const publishedAtISO = normalizeIsoDate(row.published_at);
  const updatedAtISO = normalizeIsoDate(row.updated_at ?? row.published_at);

  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    metaDescription: row.meta_description,
    image: row.image_url,
    publishedAt: formatPublishedDate(publishedAtISO),
    publishedAtISO,
    updatedAtISO,
    readTime: row.read_time,
  };
}

function mapRowToPost(row: BlogPostRow): BlogPost {
  return {
    ...mapRowToPreview(row),
    content: normalizeContent(row.content),
  };
}

const fetchBlogPreviewRows = unstable_cache(
  async (): Promise<BlogPostPreviewRow[]> => {
    return fetchSupabasePublicRows<BlogPostPreviewRow>({
      table: "blog_posts",
      query: {
        select: PREVIEW_SELECT,
        is_published: "eq.true",
        order: "published_at.desc",
      },
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
      tags: ["blog-posts"],
      errorLabel: "Failed to fetch blog previews",
    });
  },
  ["blog-posts-preview"],
  { revalidate: BLOG_REVALIDATE_SECONDS, tags: ["blog-posts"] }
);

const fetchBlogRowsWithContent = unstable_cache(
  async (): Promise<BlogPostRow[]> => {
    return fetchSupabasePublicRows<BlogPostRow>({
      table: "blog_posts",
      query: {
        select: FULL_SELECT,
        is_published: "eq.true",
        order: "published_at.desc",
      },
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
      tags: ["blog-posts"],
      errorLabel: "Failed to fetch blog posts with content",
    });
  },
  ["blog-posts-with-content"],
  { revalidate: BLOG_REVALIDATE_SECONDS, tags: ["blog-posts"] }
);

export const getBlogPostPreviews = cache(
  async (): Promise<BlogPostPreview[]> => {
    try {
      const rows = await fetchBlogPreviewRows();
      return rows.map(mapRowToPreview);
    } catch {
      return [];
    }
  }
);

const getBlogPostsBySlugMap = cache(async (): Promise<Map<string, BlogPost>> => {
  try {
    const rows = await fetchBlogRowsWithContent();
    return new Map(rows.map((row) => [row.slug, mapRowToPost(row)]));
  } catch {
    return new Map();
  }
});

export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    if (!slug) return null;

    try {
      const postsBySlug = await getBlogPostsBySlugMap();
      return postsBySlug.get(slug) ?? null;
    } catch {
      return null;
    }
  }
);

export const getBlogSlugs = cache(async (): Promise<string[]> => {
  try {
    const posts = await getBlogPostPreviews();
    return posts.map((post) => post.slug);
  } catch {
    return [];
  }
});
