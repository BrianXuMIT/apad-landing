"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBorderCard from "../ui/AnimatedBorderCard";
import { introBlocks } from "@/lib/intro-content";

export default function Intro() {
  const [activeBlock, setActiveBlock] = useState(introBlocks[0].id);
  const active = useMemo(
    () => introBlocks.find((block) => block.id === activeBlock) ?? introBlocks[0],
    [activeBlock],
  );

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-[84px] overflow-hidden bg-transparent px-4 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-1 py-6 sm:px-3 lg:px-8">

        <div className="mx-auto mt-8 grid w-full max-w-[860px] grid-cols-2 gap-2 md:max-w-[1240px] md:grid-cols-4 lg:mt-10 lg:gap-4">
          {introBlocks.map((block) => {
            const isActive = block.id === active.id;
            return (
              <button
                key={block.id}
                type="button"
                onClick={() => setActiveBlock(block.id)}
                className="block h-full w-full min-w-0 text-left"
                aria-pressed={isActive}
              >
                <AnimatedBorderCard
                  className={`h-full w-full rounded-[16px] transition-all duration-300 lg:min-h-[210px] lg:rounded-[20px] ${
                    isActive
                      ? "shadow-[0_0_0_2px_rgba(140,69,255,0.65),0_0_28px_rgba(140,69,255,0.35),0_0_40px_rgba(120,88,255,0.20)] scale-[1.02]"
                      : "shadow-[0_0_0_1px_rgba(134,98,255,0.16),0_0_14px_rgba(120,88,255,0.10)] hover:shadow-[0_0_0_1px_rgba(140,69,255,0.30),0_0_20px_rgba(120,88,255,0.18)]"
                  }`}
                  innerClassName={`flex h-full flex-col rounded-[15px] px-3 py-3 sm:px-4 sm:py-4 lg:rounded-[19px] lg:px-5 lg:py-5 ${
                    isActive
                      ? "bg-[linear-gradient(160deg,#FFFFFF_0%,#F0E8FF_50%,#E8DFFF_100%)]"
                      : "bg-[linear-gradient(160deg,#FFFFFF,#F9F6FF)]"
                  }`}
                >
                  <div>
                    <h3 className={`font-kanit text-[clamp(16px,1.65vw,26px)] leading-[1.25] transition-colors duration-300 ${
                      isActive 
                        ? "text-[#6B2FD6] font-semibold" 
                        : "text-[#262732]"
                    }`}>
                      {block.heading}
                    </h3>
                    <p className={`mt-3 hidden font-kanit text-[18px] leading-[1.42] transition-colors duration-300 lg:block ${
                      isActive 
                        ? "text-[#4A2A7A]" 
                        : "text-[#454857]"
                    }`}>
                      {block.blurb}
                    </p>
                  </div>
                </AnimatedBorderCard>
              </button>
            );
          })}
        </div>

        <AnimatedBorderCard
          className="relative mx-auto mt-4 w-full max-w-[1240px] rounded-[24px] shadow-[0_14px_30px_rgba(130,102,174,0.10)] lg:mt-6"
          innerClassName="relative overflow-hidden rounded-[23px] bg-[linear-gradient(140deg,#FFFFFF_0%,#F9F3FF_56%,#F0F2FF_100%)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-[1] grid grid-cols-1 gap-8 px-6 py-7 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:px-10 lg:py-9"
            >
              <div className="max-w-[640px]">
                <h3 className="font-kanit text-[44px] font-medium leading-[1.2] text-[#1F2130]">
                  {active.detailTitle}
                </h3>
                <p className="mt-4 font-kanit text-[20px] leading-[1.5] text-[#303447]">
                  {active.detailCopy[0]}
                </p>
                <p className="mt-4 font-kanit text-[20px] leading-[1.5] text-[#303447]">
                  {active.detailCopy[1]}
                </p>
              </div>

              <div className="relative flex min-h-[250px] flex-col justify-center gap-5 pb-1 lg:min-h-[300px]">
                {active.signals.map((signal, idx) => (
                  <div
                    key={signal}
                    className="relative max-w-[360px] lg:max-w-[400px]"
                  >
                    <div className="inline-flex h-[48px] items-center rounded-full border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.76),rgba(245,239,255,0.72))] px-6 font-kanit text-[18px] text-[#363A4A] shadow-[0_8px_18px_rgba(255,255,255,0.26)] backdrop-blur-sm lg:h-[52px] lg:text-[20px]">
                      {signal}
                    </div>
                    <span className="pointer-events-none absolute right-[-92px] top-1/2 hidden h-[2px] w-[80px] -translate-y-1/2 bg-[linear-gradient(to_right,rgba(255,255,255,0.68),rgba(255,255,255,0.18))] lg:block" />
                    <span className="pointer-events-none absolute right-[-98px] top-1/2 hidden h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] lg:block" />
                    {idx < active.signals.length - 1 ? (
                      <span className="pointer-events-none absolute -bottom-5 left-7 hidden h-3 w-[1px] bg-white/35 lg:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedBorderCard>
      </div>
    </section>
  );
}
