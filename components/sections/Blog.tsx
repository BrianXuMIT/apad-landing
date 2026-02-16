"use client";

import React, { useEffect, useMemo, useState } from "react";
import SectionLayout from "./SectionLayout";
import AnimatedBorderCard from "../ui/AnimatedBorderCard";
import type { BlogPostPreview } from "@/lib/blog-posts";
import ReadMoreLink from "@/components/ui/ReadMoreLink";

type BlogProps = {
  posts: BlogPostPreview[];
};

export default function Blog({ posts }: BlogProps) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(posts.length / itemsPerView)),
    [itemsPerView, posts.length],
  );

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const cardGap = 24;
  const hasPosts = posts.length > 0;

  return (
    <SectionLayout
      sectionId="blogs"
      badgeText="Insights on the Future of Hiring"
      title="Blog"
      description="Deep drive into AI interviews, technical screening, and modern hiring strategies"
      decorations={
        <>
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />
        </>
      }
    >
      <div className="mx-auto mt-12 w-full max-w-[1280px] lg:mt-14">
        {hasPosts ? (
          <>
            <div className="overflow-hidden px-1 pb-2">
              <div
                className="grid auto-cols-[100%] grid-flow-col gap-6 transition-transform duration-500 ease-out"
                style={{
                  gridAutoColumns: `calc((100% - ${(itemsPerView - 1) * cardGap}px) / ${itemsPerView})`,
                  transform: `translateX(calc(-${page} * (100% + ${cardGap}px)))`,
                }}
              >
                {posts.map((post) => (
                  <AnimatedBorderCard
                    key={post.slug}
                    className="w-full rounded-[34px]"
                    innerClassName="flex h-full flex-col overflow-hidden rounded-[33px] bg-white"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="h-[210px] w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col px-5 pt-5 pb-7">
                      <h3 className="font-kanit text-[22px] font-light leading-[1.25] text-[#151925]">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 font-kanit text-[15px] font-light leading-[1.45] text-[#2B2E3A]">
                        {post.description}
                      </p>
                      <div className="mt-auto pt-4">
                        <ReadMoreLink href={`/blog/${post.slug}`} />
                      </div>
                    </div>
                  </AnimatedBorderCard>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => canPrev && setPage((prev) => prev - 1)}
                disabled={!canPrev}
                aria-label="Previous blogs"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8C45FF]/35 bg-white text-[#5D46F9] shadow-[0_6px_14px_rgba(109,86,255,0.18)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true" className="text-[22px] leading-none">
                  ‹
                </span>
              </button>

              <p className="min-w-[74px] text-center font-kanit text-[16px] text-[#2B2E3A]">
                {page + 1} / {totalPages}
              </p>

              <button
                type="button"
                onClick={() => canNext && setPage((prev) => prev + 1)}
                disabled={!canNext}
                aria-label="Next blogs"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8C45FF]/35 bg-white text-[#5D46F9] shadow-[0_6px_14px_rgba(109,86,255,0.18)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true" className="text-[22px] leading-none">
                  ›
                </span>
              </button>
            </div>
          </>
        ) : (
          <AnimatedBorderCard
            className="mx-auto w-full max-w-[880px] rounded-[32px]"
            innerClassName="rounded-[31px] bg-[linear-gradient(136deg,rgba(255,255,255,0.94)_0%,rgba(247,241,255,0.88)_54%,rgba(237,247,255,0.88)_100%)] px-8 py-14 text-center"
          >
            <h3 className="font-kanit text-[30px] leading-[1.1] tracking-[-0.01em] text-[#171B27] sm:text-[36px]">
              No Blogs
            </h3>
            <p className="mx-auto mt-3 max-w-[560px] font-kanit text-[16px] leading-[1.5] text-[#45495C] sm:text-[18px]">
              No blog posts are available right now. Please check back soon.
            </p>
          </AnimatedBorderCard>
        )}
      </div>
    </SectionLayout>
  );
}
