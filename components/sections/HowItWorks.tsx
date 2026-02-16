"use client";

import React from "react";
import SectionLayout from "./SectionLayout";
import HowItWorksAiIcon from "@/assets/icons/how-it-works/HowItWorksAiIcon";
import HowItWorksInsightsIcon from "@/assets/icons/how-it-works/HowItWorksInsightsIcon";
import HowItWorksLiveIcon from "@/assets/icons/how-it-works/HowItWorksLiveIcon";
import HowItWorksSkillsIcon from "@/assets/icons/how-it-works/HowItWorksSkillsIcon";
import GlowImage from "@/components/ui/GlowImage";
import {
  HowItWorksFeature,
  howItWorksFeatures,
} from "@/lib/how-it-works-content";
import { imageMaps } from "@/lib/image_maps";

type HowItWorksIconProps = {
  className?: string;
};

const howItWorksIconMap: Record<
  HowItWorksFeature["icon"],
  React.ComponentType<HowItWorksIconProps>
> = {
  live: HowItWorksLiveIcon,
  ai: HowItWorksAiIcon,
  insights: HowItWorksInsightsIcon,
  skills: HowItWorksSkillsIcon,
};

export default function HowItWorks() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const floatingWrapRef = React.useRef<HTMLDivElement>(null);
  const floatingImageRef = React.useRef<HTMLDivElement>(null);
  const [floatingHeight, setFloatingHeight] = React.useState(560);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    sectionRef.current = document.getElementById(
      "how-it-works",
    ) as HTMLElement | null;

    const mq = window.matchMedia("(min-width: 1024px)");
    const startTop = 96;
    const bottomOffset = 16;
    let rafId = 0;

    const updatePosition = () => {
      rafId = 0;
      const section = sectionRef.current;
      const floatingWrap = floatingWrapRef.current;
      const floatingImage = floatingImageRef.current;
      if (!section || !floatingWrap || !floatingImage) return;

      if (!mq.matches) {
        floatingWrap.style.transform = `translate3d(-50%, ${startTop}px, 0)`;
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const sectionTopInDoc = window.scrollY + sectionRect.top;
      const sectionHeight = sectionRect.height;
      const imageHeight = floatingImage.offsetHeight;
      setFloatingHeight((prev) =>
        Math.abs(prev - imageHeight) > 1 ? imageHeight : prev,
      );

      const pinnedTopInSection =
        window.scrollY +
        window.innerHeight -
        imageHeight -
        bottomOffset -
        sectionTopInDoc;
      const endTop = Math.max(startTop, sectionHeight - imageHeight - 8);
      const nextTop = Math.min(
        endTop,
        Math.max(startTop, pinnedTopInSection),
      );

      floatingWrap.style.transform = `translate3d(-50%, ${nextTop.toFixed(2)}px, 0)`;
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updatePosition);
    };

    const onMediaChange = () => requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mq.addEventListener("change", onMediaChange);

    const imageEl = floatingImageRef.current?.querySelector("img");
    imageEl?.addEventListener("load", requestUpdate);
    requestUpdate();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mq.removeEventListener("change", onMediaChange);
      imageEl?.removeEventListener("load", requestUpdate);
    };
  }, []);

  return (
    <SectionLayout
      sectionId="how-it-works"
      badgeText="Human-level insight. AI-level scale."
      title="How It Works"
      description="Log in, design skill-based tests, and let AI handle the rest: custom topics, adaptive difficulty, timers, and result tracking in one place."
      decorations={
        <>
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div
              ref={floatingWrapRef}
              className="absolute left-1/2 top-0 z-[1] w-full max-w-[680px] will-change-transform"
              style={{ transform: "translate3d(-50%, 96px, 0)" }}
            >
              <div ref={floatingImageRef} className="relative">
                <div className="pointer-events-none absolute left-1/2 top-[54%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/80 blur-[125px]" />
                <div className="pointer-events-none absolute left-1/2 top-[54%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/58 blur-[165px]" />
                <img
                  src={imageMaps.sections.howItWorks.floatingDesktop}
                  alt="Candidate engaging in AI interview"
                  className="relative z-[1] mx-auto h-auto w-full max-w-[620px] object-contain lg:max-h-[35rem]"
                />
              </div>
            </div>
          </div>
        </>
      }
    >
      <div className="relative mx-auto mt-10 w-full max-w-[1280px] lg:mt-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[1px] w-[66%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,rgba(167,124,255,0)_0%,rgba(167,124,255,0.42)_18%,rgba(105,189,255,0.40)_82%,rgba(105,189,255,0)_100%)] lg:block" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[56%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,rgba(167,124,255,0)_0%,rgba(167,124,255,0.36)_22%,rgba(105,189,255,0.34)_78%,rgba(105,189,255,0)_100%)] lg:block" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-7">
          {howItWorksFeatures.map((item, idx) => {
            const FeatureIcon = howItWorksIconMap[item.icon];

            return (
              <article
                key={item.title}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="group relative z-10 mx-auto flex h-full w-full max-w-[660px] flex-col rounded-[24px] border border-[#D9CBFF]/45 bg-[linear-gradient(130deg,rgba(255,255,255,0.82)_0%,rgba(247,241,255,0.74)_56%,rgba(238,247,255,0.70)_100%)] px-6 py-7 text-left shadow-[0_10px_24px_rgba(116,88,188,0.12)] backdrop-blur-[1.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(116,88,188,0.18)] animate-fade-in sm:px-7 lg:px-8 lg:py-8"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(120%_120%_at_85%_0%,rgba(158,104,255,0.14)_0%,rgba(158,104,255,0)_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start gap-4">
                  <FeatureIcon />
                  <div className="min-w-0 pt-0.5">
                    <span className="inline-flex rounded-full border border-[#C9B3FF]/65 bg-white/72 px-3 py-1 font-kanit text-[10px] font-medium uppercase tracking-[0.1em] text-[#6A5A96]">
                      Step {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-kanit text-[22px] leading-[1.2] tracking-[-0.006em] text-[#252838] lg:text-[27px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="relative z-10 mt-4 font-kanit text-[15px] leading-[1.58] text-[#2D3142] lg:text-[17px]">
                  {item.description}
                </p>

                <div className="relative z-10 mt-5 border-t border-[#D8CBF8]/70 pt-3">
                  <p className="font-kanit text-[11px] uppercase tracking-[0.09em] text-[#6A5A96]">
                    Why It Matters
                  </p>
                  <p className="mt-1 font-kanit text-[14px] leading-[1.5] text-[#2B3042] lg:text-[15px]">
                    {item.outcome}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{ height: `${floatingHeight + 24}px` }}
      />

      <GlowImage
        src={imageMaps.sections.howItWorks.floatingMobile}
        alt="Candidate engaging in AI interview"
        containerClassName="mx-auto mt-14 w-full max-w-[900px] pt-6 sm:mt-16 lg:hidden"
        imageClassName="relative z-[2] mx-auto h-auto w-full max-w-[620px] object-contain"
        primaryGlowClassName="pointer-events-none absolute left-1/2 top-[54%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]"
        secondaryGlowClassName="pointer-events-none absolute left-1/2 top-[54%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]"
      />
    </SectionLayout>
  );
}
