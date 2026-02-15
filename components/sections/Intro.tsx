"use client";

import React, { useMemo, useState } from "react";
import AnimatedBorderCard from "../ui/AnimatedBorderCard";
import AnimatedBorderButton from "../ui/AnimatedBorderButton";

type IntroBlock = {
  id: string;
  heading: string;
  blurb: string;
  detailTitle: string;
  detailCopy: string[];
  signals: string[];
};

const blocks: IntroBlock[] = [
  {
    id: "shortlist",
    heading: "Get to a shortlist faster",
    blurb:
      "Review the results and move candidates to the next step without scheduling another phone screen.",
    detailTitle: "One interview. Complete signal.",
    detailCopy: [
      "APADCode replaces fragmented technical screens with a single, AI-led interview that captures coding skill, reasoning depth, and communication all in one structured experience.",
      "Hiring teams get rich transcripts, decision summaries, and calibrated scores they can trust, without adding time to their schedule.",
    ],
    signals: ["Reasoning Depth", "Communication Clarity", "Code Quality"],
  },
  {
    id: "smarter",
    heading: "Run smarter interviews",
    blurb:
      "The expert-trained AI interviewer gathers the exact insights your hiring managers need so they can spend time going deep, not screening.",
    detailTitle: "Decisions with context, not guesswork.",
    detailCopy: [
      "Each session adapts in real time based on candidate responses, then captures clear evidence of skill progression and tradeoff thinking.",
      "Recruiters and hiring managers receive structured summaries that surface strengths, gaps, and recommendation confidence in minutes.",
    ],
    signals: ["Adaptive Follow-ups", "Evidence Trail", "Decision Confidence"],
  },
  {
    id: "problem-solving",
    heading: "Evaluate real problem-solving",
    blurb:
      "See how candidates think, communicate, and adapt in real time not just whether they reached the right answer.",
    detailTitle: "See how engineers actually solve.",
    detailCopy: [
      "Candidates work through realistic tasks while APADCode tracks strategy shifts, debugging patterns, and architecture decisions.",
      "You get a deeper read on practical ability, so interview outcomes map to on-the-job performance instead of puzzle memorization.",
    ],
    signals: ["Approach Quality", "Tradeoff Thinking", "Debugging Process"],
  },
  {
    id: "consistent",
    heading: "Consistent, bias-aware screening",
    blurb:
      "Every candidate gets the same high-quality interview experience, evaluated with consistent criteria across roles and teams.",
    detailTitle: "Fairness built into every session.",
    detailCopy: [
      "Standardized scoring frameworks and rubric-based analysis keep evaluations aligned across candidates, teams, and hiring cycles.",
      "Organizations reduce interviewer variability while maintaining transparency into how every recommendation was produced.",
    ],
    signals: ["Rubric Consistency", "Bias Controls", "Cross-team Alignment"],
  },
];

export default function Intro() {
  const [activeBlock, setActiveBlock] = useState(blocks[0].id);
  const active = useMemo(
    () => blocks.find((block) => block.id === activeBlock) ?? blocks[0],
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
          {blocks.map((block) => {
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
          <div className="relative z-[1] grid grid-cols-1 gap-8 px-6 py-7 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:px-10 lg:py-9">
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
          </div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
}
