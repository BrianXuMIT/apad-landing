import React from "react";

export default function Intro() {
  return (
    <section className="relative w-full overflow-visible bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-[#8C45FF]/35 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1440px]  px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[1114px] lg:px-16 lg:py-20">
        <h2 className="mx-auto max-w-[980px] text-center font-kanit text-[36px] font-medium leading-[1.35] text-[#111] sm:text-[34px] lg:text-[48px]">
          APADCode is an AI-driven interview platform enabling faster, deeper,
          and more consistent technical pre-screening.
        </h2>

        <div className="mx-auto mt-8 grid w-full max-w-[1204px] grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-4 sm:gap-5 lg:mt-14 lg:gap-10">
          <div className="h-[130px] rounded-[24px] bg-[#D9D9D9] sm:h-[180px] lg:h-[244px] lg:rounded-[40px]" />
          <div className="h-[130px] rounded-[24px] bg-[#D9D9D9] sm:h-[180px] lg:h-[244px] lg:rounded-[40px]" />
          <div className="h-[130px] rounded-[24px] bg-[#D9D9D9] sm:h-[180px] lg:h-[244px] lg:rounded-[40px]" />
          <div className="h-[130px] rounded-[24px] bg-[#D9D9D9] sm:h-[180px] lg:h-[244px] lg:rounded-[40px]" />
        </div>

        <div className="mx-auto mt-4 h-[280px] w-full max-w-[1204px] rounded-[24px] bg-[#D9D9D9] sm:mt-6 sm:h-[360px] lg:mt-10 lg:h-[524px] lg:rounded-[40px]" />
      </div>
    </section>
  );
}
