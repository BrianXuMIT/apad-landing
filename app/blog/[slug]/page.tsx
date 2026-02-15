import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, siteUrl } from "@/lib/blog-posts";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | APADCode",
      description: "APADCode blog post",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/blog/${post.slug}`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return {
    title: `${post.title} | APADCode Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${post.title} | APADCode Blog`,
      description: post.metaDescription,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | APADCode Blog`,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <div className="pointer-events-none absolute left-[-160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/24 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-170px] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#2A9CE8]/18 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-12">
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 rounded-full border border-[#C9B4FF]/70 bg-white/80 px-4 py-2 font-kanit text-[15px] text-[#373B4B] shadow-[0_8px_18px_rgba(96,76,164,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A787FF]/80 hover:bg-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="M16 10H5M9 5l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blogs
        </Link>

        <article className="mt-6 overflow-hidden rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-7 lg:p-10">
          <p className="font-kanit text-[13px] uppercase tracking-[0.1em] text-[#665A93]">
            {post.publishedAt} · {post.readTime}
          </p>

          <h1 className="mt-3 font-kanit text-[32px] leading-[1.08] tracking-[-0.015em] text-[#171B27] sm:text-[40px] lg:text-[50px]">
            {post.title}
          </h1>

          <p className="mt-4 max-w-[860px] font-kanit text-[18px] leading-[1.45] text-[#353B4A] lg:text-[22px]">
            {post.description}
          </p>

          <div className="mt-7 overflow-hidden rounded-[22px] border border-white/70">
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 space-y-5">
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="font-kanit text-[17px] leading-[1.65] text-[#202635] lg:text-[21px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
