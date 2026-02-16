"use client";

import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

type ReadMoreLinkProps = {
  href: string;
  label?: string;
};

export default function ReadMoreLink({
  href,
  label = "Read More",
}: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex h-[46px] items-center gap-2 rounded-full border border-[#D7DBEA] bg-white px-4 font-kanit shadow-[0_6px_16px_rgba(33,42,66,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9C2DD] hover:shadow-[0_10px_22px_rgba(33,42,66,0.12)]"
      aria-label={label}
    >
      <span className="text-[16px] font-medium leading-none tracking-[-0.005em] text-[#252A39]">
        {label}
      </span>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D6DCEE] bg-[#F7F9FF] text-[#3A415A] transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-[#BEC8E2] group-hover:bg-[#EEF3FF]">
        <ArrowRightIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
      </span>
    </Link>
  );
}

