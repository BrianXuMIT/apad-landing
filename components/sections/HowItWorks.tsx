import React from "react";
import SectionLayout from "./SectionLayout";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconShell({ children }: { children: React.ReactNode }) {
  const ringGradientId = React.useId();

  return (
    <div className="relative h-[76px] w-[76px] shrink-0">
      <svg
        viewBox="0 0 76 76"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={ringGradientId} x1="3" y1="38" x2="73" y2="38">
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
        <path
          d="M42 6.5C28.3 4.6 14.9 13.2 11.2 26.6C7.4 40 14.3 54.2 27.2 59.2C40 64.2 54.6 58.5 60.8 46.1"
          stroke={`url(#${ringGradientId})`}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

const features: FeatureItem[] = [
  {
    title: "Live Coding Environment",
    description:
      "Candidates solve real problems in an executable coding sandbox just like a real interview.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="iconGradientA" x1="0" y1="19" x2="38" y2="19">
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
        <path
          d="M14.4 19.5c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8-5.8 2.6-5.8 5.8 2.6 5.8 5.8 5.8Zm11.6-1.9c2.3 0 4.1-1.8 4.1-4.1S28.3 9.4 26 9.4s-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1Zm0 1.9c-1.7 0-3.6.5-4.8 1.4 1.8 1.3 2.9 3.3 2.9 5.5v1h8.8v-1c0-3.8-3.4-6.9-6.9-6.9Zm-11.6 1.9C9.2 21.4 4 25.2 4 29.9v1.6h20.8v-1.6c0-4.7-5.2-8.5-10.4-8.5Z"
          fill="url(#iconGradientA)"
        />
      </svg>
    ),
  },
  {
    title: "AI-Led Interview Flow",
    description:
      "APAD Code asks follow-up questions, explores alternatives, and adapts difficulty based on responses.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="iconGradientB" x1="0" y1="19" x2="38" y2="19">
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
        <path
          d="M5 6h19c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H13l-6 6V10c0-2.2 1.8-4 4-4Zm24 5 4 2.1 4-2.1-4-2.1-4 2.1Zm8 3.8-4 2.1-4-2.1V23c0 .7.4 1.4 1.1 1.7l2.1 1.1c.5.3 1.1.3 1.6 0l2.1-1.1c.7-.3 1.1-1 1.1-1.7v-8.2Zm-20.4 8.2 5.2-5.2-2.1-2.1-3.1 3.1-1.4-1.4-2.1 2.1 3.5 3.5Z"
          fill="url(#iconGradientB)"
        />
      </svg>
    ),
  },
  {
    title: "Actionable Insights",
    description:
      "Hiring teams receive structured insights not just pass/fail scores.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="iconGradientC" x1="0" y1="19" x2="38" y2="19">
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
        <path
          d="m7 27 7.3-7.2 4.6 4.6L29.7 14l2.3 2.3-13.1 13-4.6-4.6L9.3 29 7 27Zm3.6-12.8 1.9-3.8 3.8-1.9-3.8-1.9-1.9-3.8-1.9 3.8L4.9 8.5l3.8 1.9 1.9 3.8Zm19.2 0 1.2-2.4 2.4-1.2-2.4-1.2-1.2-2.4-1.2 2.4-2.4 1.2 2.4 1.2 1.2 2.4Z"
          fill="url(#iconGradientC)"
        />
      </svg>
    ),
  },
  {
    title: "In-Depth Skill Evaluation",
    description:
      "Beyond correctness, it evaluates: Problem-solving approach, code quality, debugging mindset, communication clarity.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="iconGradientD" x1="0" y1="19" x2="38" y2="19">
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
        <path
          d="M4 31V18h7v13H4Zm11 0V9h7v22h-7Zm11 0V4h8v27h-8Z"
          fill="url(#iconGradientD)"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionLayout
      badgeText="Human-level insight. AI-level scale."
      title="How It Works"
      description="Log-in. design skill-based tests, and let AI handle the rest-custom topics, question difficulty, timers, and result tracking - all in one place."
      decorations={
        <>
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />
        </>
      }
    >
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {features.map((item) => (
          <article key={item.title} className="flex items-start gap-4 sm:gap-5">
            <IconShell>{item.icon}</IconShell>
            <div>
              <h3 className="font-kanit text-[32px] leading-[1.1] text-[#272A32]">
                {item.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-[#2B2E3A]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[980px] pt-6 sm:mt-16">
        <img
          src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770964008/WhatsappImage20260207At1508021_x0hyqp.png"
          alt="Candidate engaging in AI interview"
          className="relative z-[2] mx-auto h-auto w-full max-w-[760px] object-contain"
        />

        <div className="absolute inset-0 z-[3] hidden sm:block">
          <span className="absolute left-[2%] bottom-[8%] rounded-[30px] border border-[#2B4A69] bg-[#BAAA93]/95 px-7 py-3 font-kanit text-[22px] font-normal text-[#111216]">
            Startups to enterprises
          </span>
          <span className="absolute left-[12%] bottom-[27%] rounded-[30px] border border-[#2B4A69] bg-[#BAAA93]/95 px-7 py-3 font-kanit text-[22px] font-normal text-[#111216]">
            High-volume hiring
          </span>
          <span className="absolute right-[6%] bottom-[16%] rounded-[30px] border border-[#2B4A69] bg-[#BAAA93]/95 px-7 py-3 font-kanit text-[22px] font-normal text-[#111216]">
            Remote &amp; global teams
          </span>
        </div>

        <div className="relative z-[3] mt-6 flex flex-wrap justify-center gap-3 text-sm sm:hidden">
          <span className="rounded-[22px] border border-[#2B4A69] bg-[#BAAA93]/95 px-4 py-2 text-[#111216]">
            Startups to enterprises
          </span>
          <span className="rounded-[22px] border border-[#2B4A69] bg-[#BAAA93]/95 px-4 py-2 text-[#111216]">
            High-volume hiring
          </span>
          <span className="rounded-[22px] border border-[#2B4A69] bg-[#BAAA93]/95 px-4 py-2 text-[#111216]">
            Remote &amp; global teams
          </span>
        </div>
      </div>
    </SectionLayout>
  );
}
