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
  const starGradientId = React.useId();
  const starShineId = React.useId();

  return (
    <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center lg:h-7 lg:w-7">
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(122,74,255,0.28)_0%,rgba(122,74,255,0)_72%)] blur-[2px]" />
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="relative z-10 h-5 w-5 lg:h-6 lg:w-6"
        fill="none"
      >
        <defs>
          <linearGradient
            id={starGradientId}
            x1="3"
            y1="3"
            x2="21"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#A978FF" />
            <stop offset="1" stopColor="#18B8F8" />
          </linearGradient>
          <radialGradient
            id={starShineId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8 7) rotate(35) scale(7)"
          >
            <stop stopColor="white" stopOpacity="0.85" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M12 2.5c.45 0 .85.3.96.74l1.36 5.17c.05.2.21.36.41.41l5.17 1.36a1 1 0 0 1 0 1.92l-5.17 1.36a.6.6 0 0 0-.41.41l-1.36 5.17a1 1 0 0 1-1.92 0l-1.36-5.17a.6.6 0 0 0-.41-.41L3.1 12.1a1 1 0 0 1 0-1.92l5.17-1.36a.6.6 0 0 0 .41-.41l1.36-5.17A1 1 0 0 1 12 2.5Z"
          fill={`url(#${starGradientId})`}
        />
        <path
          d="M12 2.5c.45 0 .85.3.96.74l1.36 5.17c.05.2.21.36.41.41l5.17 1.36a1 1 0 0 1 0 1.92l-5.17 1.36a.6.6 0 0 0-.41.41l-1.36 5.17a1 1 0 0 1-1.92 0l-1.36-5.17a.6.6 0 0 0-.41-.41L3.1 12.1a1 1 0 0 1 0-1.92l5.17-1.36a.6.6 0 0 0 .41-.41l1.36-5.17A1 1 0 0 1 12 2.5Z"
          fill={`url(#${starShineId})`}
          opacity="0.5"
        />
      </svg>
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
            {firstBlockPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 py-3.5 lg:py-4">
                <SparkleMarker />
                <span className="font-kanit text-[16px] leading-[1.52] text-[#2A2E3F] sm:text-[17px] lg:text-[21px] lg:leading-[1.5]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[420px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]" />
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961039/Bluecyborgtoydanceswithfuturisticjoygeneratedbyai1_vjw9eb.png"
            alt="Futuristic APADCode robot"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 justify-between gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="justify-self-start relative order-2 mx-auto w-full max-w-[300px] md:order-1 lg:max-w-[420px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]" />
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770961062/91359885_ul767n.png"
            alt="APADCode assistant robot"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </div>

        <div className="order-1 justify-self-end md:order-2">
          <h3 className="text-center font-kanit text-[28px] leading-[1.14] tracking-[-0.01em] text-[#171A25] sm:text-[32px] lg:text-left lg:text-[40px]">
            APADCode removes the{" "}
            <span className="bg-[linear-gradient(96deg,#6F3FE2_0%,#1393E9_100%)] bg-clip-text text-transparent">
              Compromise
            </span>
          </h3>
          <ul className="mt-7 divide-y divide-[#DCCEFF]/55 border-y border-[#DCCEFF]/45">
            {secondBlockPoints.map((point) => (
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
