import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { getBlogPostPreviews } from "@/lib/blog-posts";
import { solutionLandingPages } from "@/lib/seo-pages";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/lib/seo";

export const revalidate = 900;
export const fetchCache = "force-cache";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description:
    "Explore all APADCode pages including solutions, why APADCode, contact, and blog resources.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/site-map",
  },
  openGraph: {
    url: absoluteUrl("/site-map"),
    title: "APADCode Sitemap",
    description:
      "Explore all APADCode pages including solutions, why APADCode, contact, and blog resources.",
  },
};

export default async function HtmlSitemapPage() {
  const blogPosts = await getBlogPostPreviews();

  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <JsonLd
        data={buildWebPageSchema({
          name: "APADCode Sitemap",
          path: "/site-map",
          description:
            "Explore all APADCode pages including solutions, why APADCode, contact, and blog resources.",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/site-map" },
        ])}
      />
      <div className="pointer-events-none absolute left-[-160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/24 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-170px] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#2A9CE8]/18 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-12">
        <article className="overflow-hidden rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-7 lg:p-10">
          <h1 className="font-kanit text-[32px] leading-[1.08] tracking-[-0.015em] text-[#171B27] sm:text-[40px] lg:text-[50px]">
            APADCode HTML Sitemap
          </h1>
          <p className="mt-4 max-w-[860px] font-kanit text-[18px] leading-[1.45] text-[#353B4A] lg:text-[22px]">
            Navigate all key product, why APADCode, and blog resources from one page.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <section>
              <h2 className="font-kanit text-[24px] leading-[1.2] text-[#1B1F2D] lg:text-[28px]">
                Core pages
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Contact", href: "/contact" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Why APADCode", href: "/why-apadcode" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-kanit text-[16px] text-[#2A3044] underline decoration-[#BDA6F2] underline-offset-4 hover:text-[#121728]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-kanit text-[24px] leading-[1.2] text-[#1B1F2D] lg:text-[28px]">
                Solution pages
              </h2>
              <ul className="mt-3 space-y-2">
                {solutionLandingPages.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="font-kanit text-[16px] text-[#2A3044] underline decoration-[#BDA6F2] underline-offset-4 hover:text-[#121728]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-kanit text-[24px] leading-[1.2] text-[#1B1F2D] lg:text-[28px]">
                Blog posts
              </h2>
              <ul className="mt-3 space-y-2">
                {blogPosts.length > 0 ? (
                  blogPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-kanit text-[16px] text-[#2A3044] underline decoration-[#BDA6F2] underline-offset-4 hover:text-[#121728]"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="font-kanit text-[16px] text-[#2A3044]">
                    No blog posts available.
                  </li>
                )}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
