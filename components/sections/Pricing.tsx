"use client";

import React, { useMemo, useState } from "react";
import SectionLayout from "./SectionLayout";
import AnimatedBorderCard from "../ui/AnimatedBorderCard";
import {
  BillingCycle,
  PricingPlan,
  pricingPlans,
} from "@/lib/pricing-plans";

function PlanCard({
  plan,
  billing,
  priceSuffix,
}: {
  plan: PricingPlan;
  billing: BillingCycle;
  priceSuffix: string;
}) {
  const price = billing === "monthly" ? plan.monthly : plan.yearly;

  return (
    <AnimatedBorderCard
      className="h-full w-full max-w-[400px] cursor-pointer"
      innerClassName={`flex min-h-[460px] flex-col p-6 transition-all duration-500 ease-out
    ${"bg-white shadow-[inset_0_0_0_1px_rgba(45,168,255,0.22)] hover:bg-[#F6F1FF] hover:shadow-[inset_0_0_0_1px_rgba(140,69,255,0.30)]"}`}
    >
      <h3 className="font-kanit text-[34px] font-light text-[#111216]">
        {plan.name}
      </h3>

      <ul className="mt-5 space-y-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 font-kanit text-[16px] text-[#1E2330]"
          >
            <span className="text-[18px] leading-none">✦</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <div className="flex items-start gap-1 font-kanit">
          <span
            key={`${plan.name}-${billing}`}
            className="text-[34px] leading-none text-[#111216] transition-all duration-300"
          >
            ${price}
          </span>
          <span className="pt-2.5 text-[13px] text-[#32374A]">
            {priceSuffix}
          </span>
        </div>
        <p className="mt-2 font-kanit text-sm text-[#2D3140]">
          {plan.description}
        </p>

        <button
          type="button"
          className="group/button relative mt-5 inline-flex h-[50px] w-[160px] items-center justify-center rounded-[18px] border border-[#8C45FF] overflow-hidden px-4 py-2 transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] opacity-0 transition-opacity duration-300 ease-out group-hover/button:opacity-100" />

          <span className="relative z-10 bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-[18px] font-medium text-transparent transition-colors duration-300 group-hover/button:text-white">
            Purchase
          </span>
        </button>
      </div>
    </AnimatedBorderCard>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const priceSuffix = useMemo(
    () => (billing === "monthly" ? "/month" : "/year"),
    [billing],
  );

  return (
    <SectionLayout
      sectionId="pricing"
      sectionClassName="min-h-screen"
      badgeText="Simple Pricing, Serious Impact."
      title="Explore Our Plans"
      description="Scale your interviews without scaling your interviewers."
      decorations={
        <div className="pointer-events-none absolute left-1/2 top-[53%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#9C4EFF]/28 blur-[120px]" />
      }
    >
      <div className="mt-6 md:mt-8 lg:mt-12 flex justify-center h-fit">
        <div className="inline-flex items-center gap-3 rounded-[18px] bg-[#F0EEF2] px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5">
          <span
            className={`font-kanit text-[16px] transition-colors sm:text-[22px] ${
              billing === "monthly" ? "text-[#2B3552]" : "text-[#6E7388]"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            aria-label="Toggle billing cycle"
            aria-pressed={billing === "yearly"}
            onClick={() =>
              setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"))
            }
            className="relative h-[30px] w-[66px] rounded-full bg-gradient-to-r from-[#8C45FF] to-[#0AAFF9] p-[3px] shadow-[0_6px_16px_rgba(114,93,255,0.35)] sm:h-[34px] sm:w-[74px]"
          >
            <span
              className={`absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.22)] transition-transform duration-300 sm:h-7 sm:w-7 ${
                billing === "yearly"
                  ? "translate-x-[36px] sm:translate-x-[40px]"
                  : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`font-kanit text-[16px] transition-colors sm:text-[22px] ${
              billing === "yearly" ? "text-[#2B3552]" : "text-[#6E7388]"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="relative mt-6 max-w-[1400px] md:mt-8 lg:mt-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[115px] lg:h-[420px] lg:w-[420px] lg:blur-[130px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[155px] lg:h-[620px] lg:w-[620px] lg:blur-[175px]" />
        <div className="relative z-[1] grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan) => {
            return (
              <PlanCard
                key={plan.name}
                plan={plan}
                billing={billing}
                priceSuffix={priceSuffix}
              />
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
}
