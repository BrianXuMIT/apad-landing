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

export default function UniqueFeatures() {
  return (
    <SectionLayout
      badgeText="+ Real interviews. Real thinking. Zero compromise."
      title="What Makes APADCode Different"
      description="Not just a test, Not just an interview."
      decorations={
        <>
          <div className="pointer-events-none absolute right-[-120px] top-[24%] h-[380px] w-[380px] rounded-full bg-[#9B4BFF]/35 blur-[120px]" />
          <div className="pointer-events-none absolute left-[-120px] bottom-[20%] h-[360px] w-[360px] rounded-full bg-[#8C45FF]/34 blur-[125px]" />
        </>
      }
    >
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <h3 className="font-kanit text-[30px] leading-tight text-[#111216] sm:text-[36px]">
              Traditional hiring forces a trade-off,
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#2A2D3E] sm:text-base">
              {firstBlockPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[3px] text-base font-semibold text-[#111216]">
                    +
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-[420px]">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961062/91359885_ul767n.png"
              alt="Futuristic APADCode robot"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[420px] lg:order-1">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961039/Bluecyborgtoydanceswithfuturisticjoygeneratedbyai1_vjw9eb.png"
              alt="APADCode assistant robot"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="lg:order-2">
            <h3 className="font-kanit text-[30px] leading-tight text-[#111216] sm:text-[36px]">
              APADCode removes the compromise
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#2A2D3E] sm:text-base">
              {secondBlockPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[3px] text-base font-semibold text-[#111216]">
                    +
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </SectionLayout>
  );
}
