"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SectionLayout from "./SectionLayout";
import AnimatedBorderCard from "../ui/AnimatedBorderCard";
import { blogPosts } from "@/lib/blog-posts";

type BlogPost = {
  title: string;
  description: string;
  image: string;
  hovered?: boolean;
};

const posts: BlogPost[] = [
  {
    title: "Why Traditional Live Coding Interview Don't Scale",
    description:
      "Human interviews offer depth but become slow, expensive, and inconsistent at scale. Here is why companies are rethinking them.",
    image:
      "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192572/blog_image_01_tkecv0.png",
    hovered: true,
  },
  {
    title: "Coding Tests vs Real Interviews: What's missing?",
    description:
      "Automated assessments filter candidates fast, but often missing reasoning, communication and real-world thinking.",
    image:
      "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192578/blog_image_02_a3pzdu.png",
  },
  {
    title: "How AI Is Transforming Technical Hiring",
    description:
      "AI powered live interviews combine depth and scalability - rephrasing how modern teams evaluates engineers.",
    image:
      "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192571/blog_image_03_cdm2vv.png",
  },
  {
    title: "Reducing Interview Fatigue Without Compromising Quality",
    description:
      "Discover how companies cut interview hours while maintaining high hiring standards.",
    image:
      "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192572/blog_image_04_niqcx1.png",
  },
];

function ReadMoreButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-[46px] items-center gap-2 rounded-full border border-[#D7DBEA] bg-white px-4 font-kanit shadow-[0_6px_16px_rgba(33,42,66,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9C2DD] hover:shadow-[0_10px_22px_rgba(33,42,66,0.12)]"
      aria-label="Read article"
    >
      <span className="text-[16px] font-medium leading-none tracking-[-0.005em] text-[#252A39]">
        Read More
      </span>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D6DCEE] bg-[#F7F9FF] text-[#3A415A] transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-[#BEC8E2] group-hover:bg-[#EEF3FF]">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
        >
          <path
            d="M4 10h11M11 4l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

export default function Blog() {
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
    () => Math.max(1, Math.ceil(blogPosts.length / itemsPerView)),
    [itemsPerView],
  );

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const cardGap = 24;

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
        <div className="overflow-hidden px-1 pb-2">
          <div
            className="grid auto-cols-[100%] grid-flow-col gap-6 transition-transform duration-500 ease-out"
            style={{
              gridAutoColumns: `calc((100% - ${(itemsPerView - 1) * cardGap}px) / ${itemsPerView})`,
              transform: `translateX(calc(-${page} * (100% + ${cardGap}px)))`,
            }}
          >
            {blogPosts.map((post) => (
              <AnimatedBorderCard
                key={post.slug}
                className="w-full rounded-[34px]"
                innerClassName="flex h-full flex-col overflow-hidden rounded-[33px] bg-white"
              >
                <img
                  src={post.image}
                  alt={post.title}
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
                    <ReadMoreButton href={`/blog/${post.slug}`} />
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
      </div>
    </SectionLayout>
  );
}
