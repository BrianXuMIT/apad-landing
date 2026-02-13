import React from "react";
import SectionLayout from "./SectionLayout";

function Label({ text, className }: { text: string; className: string }) {
  return (
    <span
      className={`absolute z-10 inline-flex whitespace-nowrap rounded-[26px] border border-[#7A49E8] bg-[#C8C8C8]/95 px-4 py-2 font-kanit text-sm font-normal leading-none text-[#1B1E26] shadow-[0_2px_0_rgba(0,0,0,0.08)] lg:rounded-[34px] lg:px-7 lg:py-3 lg:text-[30px] ${className}`}
    >
      {text}
    </span>
  );
}

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
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770979507/Subtract_rdoylk.png"
              alt="AI robot with interview panels"
              className="w-full rounded-[22px] object-cover"
            />
            <Label
              text="Real-Time Evaluation"
              className="left-[-6%] top-[8%]"
            />
            <Label text="AI Scale" className="right-[-8%] top-[35%]" />
            <Label text="Bias free" className="right-[-4%] bottom-[12%]" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[620px] lg:order-1">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770979516/Subtract_1_ubgq3k.png"
              alt="AI robot with skill signals"
              className="w-full rounded-[22px] object-cover"
            />
            <Label text="Human Depth" className="left-[-4%] top-[16%]" />
            <Label
              text="Smart Shortlisting"
              className="left-[58%] top-[-2%] -translate-x-1/2"
            />
            <Label
              text="True Skill Signals"
              className="left-[58%] bottom-[8%] -translate-x-1/2"
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
