import React from "react";
import SectionLayout from "./SectionLayout";

const firstBlockPoints = [
  "You either choose slow, human-led interviews or fast but surface-level tests.",
  "Candidate experience and scoring vary based on interviewer bias and mood.",
  "Focuses mainly on correct answers, not how candidates think and decide.",
  "Requires scheduling, interviewer time, and repeated evaluations.",
  "Misses communication skills, reasoning process, and real-world problem solving.",
];

const secondBlockPoints = [
  "Combines human-like interview depth with automated, scalable execution.",
  "Candidates explain, reason, and adapt while coding, just like a real interview.",
  "Measures problem-solving path, decision-making, and communication ability, not only final output.",
  "No scheduling, no interviewer fatigue. AI handles it end-to-end.",
  "Code quality, reasoning, clarity, confidence, and behavioral cues in one session.",
];

function SparkleMarker() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#111216] lg:h-7 lg:w-7"
      fill="currentColor"
    >
      <path d="M12 2.5c.45 0 .85.3.96.74l1.36 5.17c.05.2.21.36.41.41l5.17 1.36a1 1 0 0 1 0 1.92l-5.17 1.36a.6.6 0 0 0-.41.41l-1.36 5.17a1 1 0 0 1-1.92 0l-1.36-5.17a.6.6 0 0 0-.41-.41L3.1 12.1a1 1 0 0 1 0-1.92l5.17-1.36a.6.6 0 0 0 .41-.41l1.36-5.17A1 1 0 0 1 12 2.5Z" />
    </svg>
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
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10 min-[1100px]:grid-cols-[1.08fr_0.92fr] min-[1100px]:gap-12">
        <div>
          <h3 className="font-kanit text-center text-[24px] leading-tight text-[#111216] lg:text-[36px] lg:text-left mt-6 lg:mt-14">
            Traditional hiring forces a trade-off,
          </h3>
          <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#2A2D3E] sm:text-base">
            {firstBlockPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="mt-[6px] font-kanit text-[40px] leading-none text-[#111216]">
                  ✦
                </span>
                <span className="font-kanit text-[16px] leading-[1.45] lg:text-[24px] lg:leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] min-[1100px]:max-w-[420px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]" />
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961039/Bluecyborgtoydanceswithfuturisticjoygeneratedbyai1_vjw9eb.png"
            alt="Futuristic APADCode robot"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 justify-between gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 min-[1100px]:mt-16 min-[1100px]:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="justify-self-start relative order-2 mx-auto w-full max-w-[300px] md:order-1 min-[1100px]:max-w-[420px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]" />
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961062/91359885_ul767n.png"
            alt="APADCode assistant robot"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </div>

        <div className="justify-self-end order-1 md:order-2">
          <h3 className="font-kanit text-center text-[24px] leading-tight text-[#111216] lg:text-[36px] lg:text-left">
            APADCode removes the compromise
          </h3>
          <ul className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#2A2D3E] lg:text-[24px]">
            {secondBlockPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="mt-[6px] font-kanit text-[40px] leading-none text-[#111216]">
                  ✦
                </span>
                <span className="font-kanit text-[16px] leading-[1.45] lg:text-[24px] lg:leading-[1.5]">
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
