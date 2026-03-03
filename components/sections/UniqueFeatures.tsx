import React from "react";
import SectionLayout from "./SectionLayout";
import SparkleStarIcon from "@/assets/icons/SparkleStarIcon";
import {
  uniqueFeaturesCompromisePoints,
  uniqueFeaturesTradeoffPoints,
} from "@/lib/unique-features-content";

function SparkleMarker() {
  return (
    <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center lg:h-7 lg:w-7">
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(122,74,255,0.28)_0%,rgba(122,74,255,0)_72%)] blur-[2px]" />
      <SparkleStarIcon className="relative z-10 h-5 w-5 lg:h-6 lg:w-6" />
    </span>
  );
}

export default function UniqueFeatures() {
  return (
    <SectionLayout
      sectionId="ai-interviewer"
      badgeText="Real interviews. Real thinking"
      title="The Missing Layer in Technical Hiring"
      description="Most screening tools measure output. APADCode models engineering reasoning."
      decorations={<></>}
    >
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-[24px] border border-[#DCCEFF]/52 bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F2FF_100%)] p-6 shadow-[0_14px_30px_rgba(88,73,145,0.08)] sm:p-8">
          <h3 className="text-center font-kanit text-[28px] leading-[1.14] tracking-[-0.01em] text-[#171A25] sm:text-[32px] lg:text-left lg:text-[38px]">
            Output-Based Screening
          </h3>
          <ul className="mt-7 divide-y divide-[#DCCEFF]/55 border-y border-[#DCCEFF]/45">
            {uniqueFeaturesTradeoffPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 py-3.5 lg:py-4">
                <SparkleMarker />
                <span className="font-kanit text-[16px] leading-[1.52] text-[#2A2E3F] sm:text-[17px] lg:text-[21px] lg:leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] border border-[#DCCEFF]/52 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_100%)] p-6 shadow-[0_14px_30px_rgba(56,106,156,0.08)] sm:p-8">
          <h3 className="text-center font-kanit text-[28px] leading-[1.14] tracking-[-0.01em] text-[#171A25] sm:text-[32px] lg:text-left lg:text-[38px]">
            Structured Cognitive Evaluation
          </h3>
          <ul className="mt-7 divide-y divide-[#DCCEFF]/55 border-y border-[#DCCEFF]/45">
            {uniqueFeaturesCompromisePoints.map((point) => (
              <li key={point} className="flex items-center gap-3 py-3.5 lg:py-4">
                <SparkleMarker />
                <span className="font-kanit text-[16px] leading-[1.52] text-[#232739] sm:text-[17px] lg:text-[21px] lg:leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
