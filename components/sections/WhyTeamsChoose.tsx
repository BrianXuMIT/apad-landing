import React from "react";
import SectionLayout from "./SectionLayout";

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-[6px] font-kanit text-[40px] leading-none text-[#111216]">
        ✦
      </span>
      <div>
        <h3 className="font-kanit text-[40px] leading-[1.18] font-normal text-[#262932]">
          {title}
        </h3>
        <p className="mt-3 font-kanit text-[24px] leading-[1.42] text-[#2F3240]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyTeamsChoose() {
  return (
    <SectionLayout
      badgeText="Human-level evaluation, delivered by AI"
      title="Why Teams Choose APADCode"
      description="Everything hiring teams need to interview better, faster, and fairer without trade-offs."
      decorations={
        <>
          <div className="pointer-events-none absolute right-[-140px] top-[22%] h-[380px] w-[380px] rounded-full bg-[#9D4DFF]/30 blur-[120px]" />
          <div className="pointer-events-none absolute left-[-130px] bottom-[9%] h-[330px] w-[330px] rounded-full bg-[#9A4DFF]/30 blur-[115px]" />
        </>
      }
    >
        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="space-y-11">
            <Feature
              title="Human-like depth, at machine scale"
              description="Conduct thousands of interviews without interviewer fatigue."
            />
            <Feature
              title="Faster, smarter pre-screening"
              description="Spend human time only on candidates who truly deserve it."
            />
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1771004164/New_Project_3_ijix7k.png"
              alt="AI robot with interview panels"
              className="w-full rounded-[22px] object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[620px] lg:order-1">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1771004241/New_Project_4_gpukv2.png"
              alt="AI robot with skill signals"
              className="w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="space-y-11 lg:order-2">
            <Feature
              title="Consistent & unbiased evaluation"
              description="Every candidate is assessed with the same depth and fairness."
            />
            <Feature
              title="Designed for real-world hiring"
              description="Not puzzles. Not trick questions. Real skills that matter on the job."
            />
          </div>
        </div>
    </SectionLayout>
  );
}
