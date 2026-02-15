import React from "react";
import SectionLayout from "./SectionLayout";

type Tone = "violet" | "cyan";

const scaleFeatures = [
  {
    title: "Human-like depth, at machine scale",
    description: "Conduct thousands of interviews without interviewer fatigue.",
  },
  {
    title: "Faster, smarter pre-screening",
    description: "Spend human time only on candidates who truly deserve it.",
  },
];

const qualityFeatures = [
  {
    title: "Consistent & unbiased evaluation",
    description: "Every candidate is assessed with the same depth and fairness.",
  },
  {
    title: "Designed for real-world hiring",
    description: "Not puzzles. Not trick questions. Real skills that matter on the job.",
  },
];

function Feature({
  title,
  description,
  tone = "violet",
}: {
  title: string;
  description: string;
  tone?: Tone;
}) {
  const iconClass =
    tone === "violet"
      ? "bg-[radial-gradient(circle_at_28%_24%,#FFFFFF_0%,#DCC9FF_34%,#8655F5_100%)] shadow-[0_8px_20px_rgba(126,83,232,0.38)]"
      : "bg-[radial-gradient(circle_at_28%_24%,#FFFFFF_0%,#CBEFFF_34%,#2EABEA_100%)] shadow-[0_8px_20px_rgba(56,159,230,0.30)]";
  const railClass =
    tone === "violet"
      ? "bg-[linear-gradient(180deg,rgba(146,90,255,0.26)_0%,rgba(146,90,255,0.58)_50%,rgba(120,79,232,0.26)_100%)]"
      : "bg-[linear-gradient(180deg,rgba(47,173,234,0.24)_0%,rgba(47,173,234,0.56)_50%,rgba(35,139,197,0.24)_100%)]";

  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-[#D9CCFF]/55 bg-[linear-gradient(130deg,rgba(255,255,255,0.72)_0%,rgba(245,239,255,0.58)_56%,rgba(236,245,255,0.58)_100%)] px-5 py-5 shadow-[0_10px_20px_rgba(111,90,180,0.10)] backdrop-blur-[1.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(111,90,180,0.16)] sm:px-6">
      <span
        className={`pointer-events-none absolute left-0 top-4 h-[calc(100%-2rem)] w-[3px] rounded-full ${railClass}`}
      />
      <div className="relative flex items-start gap-4">
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] text-[18px] leading-none text-white ${iconClass}`}
        >
          ✦
        </span>
        <div>
          <h3 className="font-kanit text-[21px] leading-[1.2] tracking-[-0.005em] text-[#242837] lg:text-[25px]">
            {title}
          </h3>
          <p className="mt-2.5 font-kanit text-[15px] leading-[1.5] text-[#303447] lg:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function FeaturePanel({
  heading,
  tone = "violet",
  items,
}: {
  heading: string;
  tone?: Tone;
  items: Array<{ title: string; description: string }>;
}) {
  const borderClass =
    tone === "violet" ? "border-[#DACBFF]/70" : "border-[#BFE6FB]/75";
  const headingClass =
    tone === "violet"
      ? "bg-[linear-gradient(95deg,#2B2F46_0%,#6E3FE6_92%)]"
      : "bg-[linear-gradient(95deg,#24344A_0%,#1989D8_92%)]";
  const chipClass =
    tone === "violet"
      ? "border-[#D4C2FF]/75 bg-[linear-gradient(128deg,rgba(255,255,255,0.72)_0%,rgba(239,226,255,0.66)_100%)] text-[#5E45A3]"
      : "border-[#BEE6FD]/80 bg-[linear-gradient(128deg,rgba(255,255,255,0.72)_0%,rgba(226,244,255,0.68)_100%)] text-[#2A6B9C]";

  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border ${borderClass} bg-[linear-gradient(140deg,rgba(255,255,255,0.58)_0%,rgba(247,241,255,0.42)_55%,rgba(236,246,255,0.40)_100%)] p-5 shadow-[0_12px_32px_rgba(101,78,177,0.11)] backdrop-blur-[2px] sm:p-7 lg:p-8`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(158,112,255,0.52)_28%,rgba(74,175,243,0.54)_72%,rgba(255,255,255,0)_100%)]" />
      <span
        className={`inline-flex rounded-full border px-3.5 py-1 font-kanit text-[11px] uppercase tracking-[0.1em] ${chipClass}`}
      >
        Team Benefit
      </span>
      <h3
        className={`mt-4 inline-block bg-clip-text font-kanit text-[27px] leading-[1.12] tracking-[-0.01em] text-transparent sm:text-[30px] lg:text-[36px] ${headingClass}`}
      >
        {heading}
      </h3>
      <div className="mt-5 space-y-3.5 lg:mt-6 lg:space-y-4">
        {items.map((item) => (
          <Feature
            key={item.title}
            title={item.title}
            description={item.description}
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}

function VisualPanel({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[clamp(260px,74vw,650px)]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/76 blur-[108px] lg:h-[390px] lg:w-[390px] lg:blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/52 blur-[150px] lg:h-[590px] lg:w-[590px] lg:blur-[175px]" />
      <img
        src={src}
        alt={alt}
        className="relative z-[1] w-full rounded-[22px] object-cover"
      />
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
          <div className="pointer-events-none absolute right-[-150px] top-[20%] h-[390px] w-[390px] rounded-full bg-[#9D4DFF]/26 blur-[124px]" />
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[340px] w-[340px] rounded-full bg-[#329EE8]/18 blur-[118px]" />
        </>
      }
    >
      <div className="mt-8 grid grid-cols-1 items-center gap-8 md:mt-12 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <FeaturePanel
            heading="Scale without sacrificing depth"
            tone="violet"
            items={scaleFeatures}
          />
        </div>
        <div className="order-1 lg:order-2">
          <VisualPanel
            src="https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192571/feature_image_01_zziu4i.png"
            alt="AI robot with interview panels"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="order-1">
          <VisualPanel
            src="https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192572/feature_image_02_fabi5l.png"
            alt="AI robot with skill signals"
          />
        </div>
        <div className="order-2">
          <FeaturePanel
            heading="Decision quality teams can trust"
            tone="cyan"
            items={qualityFeatures}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
