"use client";

import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import GlowImage from "@/components/ui/GlowImage";
import { faqItems } from "@/lib/faq-items";
import { imageMaps } from "@/lib/image_maps";

export default function Questionnaire() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <SectionLayout
      sectionId="assessments"
      badgeText="Smart answers to common questions"
      title="Your frequently asked questions"
      decorations={
        <>
          <div className="pointer-events-none absolute right-[-120px] top-[36%] h-[380px] w-[380px] rounded-full bg-[#A14DFF]/35 blur-[120px]" />
          <div className="pointer-events-none absolute left-[-120px] bottom-[12%] h-[300px] w-[300px] rounded-full bg-[#8C45FF]/20 blur-[110px]" />
        </>
      }
    >
      <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
        <div className="rounded-[8px] bg-transparent lg:min-h-[640px]">
          {faqItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.question}
                className="border-b border-[#1A1D25]/30 pb-4"
              >
                <div className="rounded-[4px] border border-transparent bg-transparent px-0 transition-colors duration-200">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev === index ? null : index))
                    }
                    className="flex w-full items-center justify-between gap-6 px-0 py-5 text-left"
                    aria-expanded={isActive}
                  >
                    <span className="font-kanit text-[24px] font-light leading-[1.25] text-[#111216] lg:text-[24px]">
                      {item.question}
                    </span>
                    <span className="font-kanit text-[40px] leading-none text-[#111216]">
                      {isActive ? "-" : "+"}
                    </span>
                  </button>
                </div>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                    isActive
                      ? "mt-2 grid-rows-[1fr] opacity-100"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 font-kanit text-[15px] font-light leading-[1.6] text-[#2C313F]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <GlowImage
          src={imageMaps.sections.faq.visual}
          alt="APADCode FAQ visual"
          containerClassName="mx-auto hidden w-full max-w-[520px] pt-6 sm:pt-8 lg:mx-0 lg:block lg:justify-self-end lg:self-center lg:pt-0"
          imageClassName="relative z-[2] ml-auto w-full max-w-[470px] object-contain"
          primaryGlowClassName="pointer-events-none absolute left-1/2 top-[56%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]"
          secondaryGlowClassName="pointer-events-none absolute left-1/2 top-[56%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]"
        />
      </div>
    </SectionLayout>
  );
}
