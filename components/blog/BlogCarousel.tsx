"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPostPreview } from "@/lib/blog-posts";

type BlogCarouselProps = {
  posts: BlogPostPreview[];
};

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1160) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 720) {
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
    [itemsPerView, posts.length]
  );

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const cardGap = 20;

  if (posts.length === 0) {
    return (
      <div className="rounded-[18px] border border-[#E0E5F2] bg-[#FAFBFF] px-5 py-6">
        <p className="font-kanit text-[22px] leading-[1.3] text-[#161B28]">
          No blog posts are available right now.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="grid auto-cols-[100%] grid-flow-col gap-5 transition-transform duration-500 ease-out"
          style={{
            gridAutoColumns: `calc((100% - ${(itemsPerView - 1) * cardGap}px) / ${itemsPerView})`,
            transform: `translateX(calc(-${page} * (100% + ${cardGap}px)))`,
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[16px] border border-[#E0E5F2] bg-[#FAFBFF]"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-[220px] w-full object-cover"
                />
              </Link>
              <div className="p-5">
                <p className="font-kanit text-[11px] uppercase tracking-[0.09em] text-[#616A86]">
                  <time dateTime={post.publishedAtISO}>{post.publishedAt}</time> ·{" "}
                  {post.readTime}
                </p>
                <h3 className="mt-2 font-kanit text-[24px] leading-[1.12] text-[#171C2A]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#323A53]">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 font-kanit text-[16px] leading-[1.5] text-[#31384C]">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group mt-3 inline-flex items-center gap-2 rounded-full border border-[#C8D1E8] bg-white px-4 py-2 font-kanit text-[13px] font-medium text-[#20283E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#AAB8DE] hover:shadow-[0_10px_20px_rgba(56,73,130,0.12)]"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => canPrev && setPage((prev) => prev - 1)}
          disabled={!canPrev}
          aria-label="Previous blogs"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8D1E8] bg-white text-[#2D3551] shadow-[0_8px_16px_rgba(56,73,130,0.12)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span aria-hidden="true" className="text-[22px] leading-none">
            ‹
          </span>
        </button>

        <p className="min-w-[74px] text-center font-kanit text-[15px] text-[#2B2E3A]">
          {page + 1} / {totalPages}
        </p>

        <button
          type="button"
          onClick={() => canNext && setPage((prev) => prev + 1)}
          disabled={!canNext}
          aria-label="Next blogs"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8D1E8] bg-white text-[#2D3551] shadow-[0_8px_16px_rgba(56,73,130,0.12)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span aria-hidden="true" className="text-[22px] leading-none">
            ›
          </span>
        </button>
      </div>
    </>
  );
}

