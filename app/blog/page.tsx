import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import BlogCarousel from "@/components/blog/BlogCarousel";
import founderImage from "@/assets/images/Kenneth.jpg";
import { getBlogPostPreviews } from "@/lib/blog-posts";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  siteConfig,
} from "@/lib/seo";

const founder = {
  name: "Kenneth Bulaon",
  role: "Founder & CEO",
  image: founderImage.src,
  imageAlt: "Kenneth Bulaon, Founder and CEO of APADCode",
};

const manifesto = [
  "Technical hiring should evaluate real engineering thinking, not pattern memorization.",
  "Interview quality should stay consistent regardless of interviewer availability.",
  "Decisions should be backed by evidence, not fragmented notes or intuition alone.",
];

export const revalidate = 900;
export const fetchCache = "force-cache";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read APADCode insights on AI coding interviews, technical screening strategy, and engineering hiring best practices.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: absoluteUrl("/blog"),
    title: `Blog | ${siteConfig.name}`,
    description:
      "Read APADCode insights on AI coding interviews, technical screening strategy, and engineering hiring best practices.",
  },
};

export default async function BlogIndexPage() {
  const posts = await getBlogPostPreviews();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "APADCode Blog Posts",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.title,
    })),
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <JsonLd
        data={buildWebPageSchema({
          name: "APADCode Blog",
          path: "/blog",
          description:
            "Read APADCode insights on AI coding interviews, technical screening strategy, and engineering hiring best practices.",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={itemListSchema} />

      <div className="pointer-events-none absolute left-[-180px] top-[-60px] h-[360px] w-[360px] rounded-full bg-[#67B8F8]/14 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-160px] top-[22%] h-[340px] w-[340px] rounded-full bg-[#B66BFF]/16 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-[-180px] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#8E65FF]/14 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <header className="overflow-hidden rounded-[28px] border border-[#D8DCE8] bg-[#FCFCFD] shadow-[0_18px_34px_rgba(29,35,56,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-[#E6E9F2] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="font-kanit text-[12px] uppercase tracking-[0.11em] text-[#5A6077]">
                APADCODE JOURNAL
              </p>
              <h1 className="mt-3 font-kanit text-[40px] leading-[0.95] tracking-[-0.03em] text-[#151925] sm:text-[58px] lg:text-[82px]">
                OUR <span className="text-[#474E67]">STORY</span>
              </h1>
              <p className="mt-4 max-w-[720px] font-kanit text-[18px] leading-[1.58] text-[#303648] sm:text-[21px]">
                APADCode was built to make technical hiring more truthful. This
                page is where we share our operating principles, product thinking,
                and field learnings from real hiring teams.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Interview Intelligence", "Hiring Systems", "Signal Quality"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#D5DBEB] bg-white px-3 py-1 font-kanit text-[12px] uppercase tracking-[0.08em] text-[#4E556E]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <aside className="bg-[linear-gradient(160deg,#F8F9FD_0%,#F2F1FF_52%,#EEF6FF_100%)] p-6 sm:p-8">
              <p className="font-kanit text-[12px] uppercase tracking-[0.11em] text-[#5A6077]">
                From the Founder
              </p>
              <p className="mt-3 font-kanit text-[17px] leading-[1.58] text-[#2D3346] sm:text-[19px]">
                We are building the decision layer for technical hiring. Not a
                bigger test bank, but a better way to evaluate how engineers
                think, communicate, and solve under real constraints.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-[14px] border border-[#DDE2F0] bg-white/90 p-3">
                  <img
                    src={founder.image}
                    alt={founder.imageAlt}
                    className="h-[58px] w-[58px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-kanit text-[18px] leading-[1.1] text-[#171C2A]">
                      {founder.name}
                    </p>
                    <p className="font-kanit text-[12px] uppercase tracking-[0.09em] text-[#59607A]">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section className="mt-8 rounded-[24px] border border-[#D8DCE8] bg-white p-6 shadow-[0_14px_28px_rgba(32,40,67,0.08)] sm:p-8">
          <h2 className="font-kanit text-[30px] leading-[1.02] tracking-[-0.02em] text-[#151A27] sm:text-[40px]">
            What We Believe
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {manifesto.map((item, index) => (
              <article
                key={item}
                className="rounded-[16px] border border-[#DEE3F1] bg-[#FAFBFF] p-4"
              >
                <p className="font-kanit text-[12px] uppercase tracking-[0.1em] text-[#5C647F]">
                  Principle {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-kanit text-[17px] leading-[1.55] text-[#2A3145]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#D8DCE8] bg-white p-5 shadow-[0_14px_28px_rgba(32,40,67,0.08)] sm:p-7">
          <h2 className="font-kanit text-[30px] leading-[1.02] tracking-[-0.02em] text-[#151A27] sm:text-[40px]">
            Blogs
          </h2>
          <div className="mt-5">
            <BlogCarousel posts={posts} />
          </div>
        </section>
      </div>
    </section>
  );
}
