import React from "react";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { imageMaps } from "@/lib/image_maps";

const Hero = () => {
  return (
    <section className="relative z-10 flex min-h-screen w-full items-center overflow-hidden px-4 pb-12 pt-24 font-kanit sm:px-6 sm:pt-[124px] lg:px-12 lg:pb-16 lg:pt-[146px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url('${imageMaps.sections.hero.background}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8C45FF]/22 bg-white/70 px-4 py-2 shadow-[0_8px_18px_rgba(114,87,182,0.14)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] shadow-[0_0_0_3px_rgba(251,191,36,0.28)]" />
            <span className="bg-[linear-gradient(92deg,#3A3F53_0%,#6544A8_100%)] bg-clip-text text-[13px] font-medium tracking-[0.04em] text-transparent sm:text-[14px]">
              Cognitive Evaluation Infrastructure
            </span>
          </div>

          <h1 className="mt-6 max-w-[760px] text-[36px] font-medium leading-[1.1] tracking-[-0.01em] text-[#171A25] sm:text-[50px] lg:text-[62px]">
            Build{" "}
            <span className="bg-[linear-gradient(98deg,#5B38C9_0%,#0F89E5_100%)] bg-clip-text text-transparent">
            Structured Engineering
            </span>{" "}
            Intelligence
          </h1>
          <p className="mt-5 max-w-[690px] text-[18px] leading-[1.62] text-[#34394C] sm:text-[20px] lg:text-[23px]">
            <span className="bg-[linear-gradient(95deg,#5F3CCF_0%,#198DE8_100%)] bg-clip-text font-semibold text-transparent">
              APADCode{" "}
            </span>{" "}
            replaces first-round technical interviews while transforming interaction into structured cognitive signals — creating measurable, defensible evaluation infrastructure.
          </p>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 lg:mt-10 lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-[16px] border border-white/35 bg-[linear-gradient(98deg,#7D49EF_0%,#298DEA_100%)] px-7 font-kanit text-[17px] font-medium tracking-[0.01em] text-white shadow-[0_12px_28px_rgba(99,73,220,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-[1.03] hover:shadow-[0_18px_34px_rgba(99,73,220,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C45FF]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-[58px] sm:px-9 sm:text-[18px] lg:h-[62px] lg:px-10 lg:text-[20px]"
            >
              <span>Request Demo</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
            </Link>
          </div>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="rounded-[14px] border border-white/75 bg-[linear-gradient(120deg,#FFFFFF_0%,#F8F2FF_64%,#F1F7FF_100%)] px-4 py-3 shadow-[0_9px_20px_rgba(77,63,123,0.12)]">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#6C7290]">
                Interview Quality
              </p>
              <p className="mt-1 text-[22px] font-medium leading-none text-[#1D2131]">
                97% consistency
              </p>
            </div>
            <div className="rounded-[14px] border border-white/75 bg-[linear-gradient(120deg,#FFFFFF_0%,#F8F2FF_64%,#F1F7FF_100%)] px-4 py-3 shadow-[0_9px_20px_rgba(77,63,123,0.12)]">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#6C7290]">
                Decision Speed
              </p>
              <p className="mt-1 text-[22px] font-medium leading-none text-[#1D2131]">
                3x faster hiring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
