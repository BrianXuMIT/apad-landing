import React from "react";
import SectionLayout from "./SectionLayout";
import SparkleStarIcon from "@/assets/icons/SparkleStarIcon";
import GlowImage from "@/components/ui/GlowImage";
import { imageMaps } from "@/lib/image_maps";
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
      title="What Makes APADCode Different"
      description="Not just a test, Not just an interview."
      decorations={<></>}
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="max-w-[740px]">
          <h3 className="mt-6 text-center font-kanit text-[28px] leading-[1.14] tracking-[-0.01em] text-[#171A25] sm:text-[32px] lg:mt-14 lg:text-left lg:text-[40px]">
            Traditional hiring forces a{" "}
            <span className="bg-[linear-gradient(96deg,#6F3FE2_0%,#1393E9_100%)] bg-clip-text text-transparent">
              Trade-off
            </span>
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

        <GlowImage
          src={imageMaps.sections.uniqueFeatures.tradeoffRobot}
          alt="Futuristic APADCode robot"
          containerClassName="mx-auto w-full max-w-[300px] lg:max-w-[420px]"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 justify-between gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <GlowImage
          src={imageMaps.sections.uniqueFeatures.compromiseRobot}
          alt="APADCode assistant robot"
          containerClassName="justify-self-start relative order-2 mx-auto w-full max-w-[300px] md:order-1 lg:max-w-[420px]"
        />

        <div className="order-1 justify-self-end md:order-2">
          <h3 className="text-center font-kanit text-[28px] leading-[1.14] tracking-[-0.01em] text-[#171A25] sm:text-[32px] lg:text-left lg:text-[40px]">
            APADCode removes the{" "}
            <span className="bg-[linear-gradient(96deg,#6F3FE2_0%,#1393E9_100%)] bg-clip-text text-transparent">
              Compromise
            </span>
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
