"use client";

import React, { useMemo, useState } from "react";
import SectionLayout from "./SectionLayout";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 290,
    description: "Best for: Pre-screening technical candidates efficiently",
    features: [
      "AI-powered live coding interviews",
      "Real-time code execution sandbox",
      "Automated scoring & feedback",
      "Standard question library",
      "Candidate performance report",
      "Email support",
    ],
    highlighted: true,
  },
  {
    name: "Growth",
    monthly: 79,
    yearly: 790,
    description: "Best for: Scaling hiring without interviewer fatigue.",
    features: [
      "Custom interview workflows",
      "Role-based question sets",
      "Communication & reasoning evaluation",
      "Anti-cheating & monitoring tools",
      "Team collaboration dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthly: 119,
    yearly: 1190,
    description: "Best for: Large organizations hiring scale.",
    features: [
      "Unlimited parallel interviews",
      "Advanced AI evaluation models",
      "ATS integration",
      "Custom scoring frameworks",
      "Dedicated account manager",
      "SLA & Security compliance",
    ],
  },
];

function PlanCard({
  plan,
  billing,
  priceSuffix,
}: {
  plan: Plan;
  billing: BillingCycle;
  priceSuffix: string;
}) {
  const price = billing === "monthly" ? plan.monthly : plan.yearly;

  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-[22px] p-[1px] shadow-[0_0_0_1px_rgba(134,98,255,0.20),0_0_18px_rgba(120,88,255,0.16)]">
      <div className="pointer-events-none absolute inset-0 [will-change:transform] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,#8C45FF,#7560FF,#2DA8FF,#7560FF,#8C45FF)] opacity-90" />
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-[#D14BFF]/28 opacity-0 blur-[32px] transition-opacity duration-500 ease-out group-hover:opacity-100" />

      <div
        className={`relative z-[1] flex h-full min-h-[520px] flex-col rounded-[19px] p-7 transition-all duration-500 ease-out
    ${"bg-white shadow-[inset_0_0_0_1px_rgba(45,168,255,0.22)] hover:bg-[#F6F1FF] hover:shadow-[inset_0_0_0_1px_rgba(140,69,255,0.30)]"}`}
      >
        <h3 className="font-kanit text-[42px] font-light text-[#111216]">
          {plan.name}
        </h3>

        <ul className="mt-7 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-kanit text-[18px] text-[#1E2330]"
            >
              <span className="text-[20px] leading-none">✦</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <div className="flex items-start gap-1 font-kanit">
            <span
              key={`${plan.name}-${billing}`}
              className="text-[40px] leading-none text-[#111216] transition-all duration-300"
            >
              ${price}
            </span>
            <span className="pt-3 text-[14px] text-[#32374A]">
              {priceSuffix}
            </span>
          </div>
          <p className="mt-2 font-kanit text-sm text-[#2D3140]">
            {plan.description}
          </p>

          <button
            type="button"
            className="group/button relative mt-7 inline-flex h-[56px] w-[170px] items-center justify-center rounded-[20px] border border-[#8C45FF] overflow-hidden transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)] px-4 py-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] opacity-0 transition-opacity duration-300 ease-out group-hover/button:opacity-100" />

            <span className="relative z-10 text-[20px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] transition-colors duration-300 group-hover/button:text-white">
              Purchase
            </span>
          </button>
        </div>
      </div>
    </article>
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
      badgeText="Simple Pricing, Serious Impact."
      title="Explore Our Plans"
      description="Scale your interviews without scaling your interviewers."
      decorations={
        <div className="pointer-events-none absolute left-1/2 top-[53%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#9C4EFF]/28 blur-[120px]" />
      }
    >
          <div className="mt-10 inline-flex items-center gap-4 rounded-[18px] bg-[#F0EEF2] px-4 py-2.5">
            <span
              className={`font-kanit text-[22px] transition-colors ${
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
                setBilling((prev) =>
                  prev === "monthly" ? "yearly" : "monthly",
                )
              }
              className="relative h-[34px] w-[74px] rounded-full bg-gradient-to-r from-[#8C45FF] to-[#0AAFF9] p-[3px] shadow-[0_6px_16px_rgba(114,93,255,0.35)]"
            >
              <span
                className={`absolute top-[3px] h-7 w-7 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.22)] transition-transform duration-300 ${
                  billing === "yearly" ? "translate-x-0" : "-translate-x-7"
                }`}
              />
            </button>
            <span
              className={`font-kanit text-[22px] transition-colors ${
                billing === "yearly" ? "text-[#2B3552]" : "text-[#6E7388]"
              }`}
            >
              Yearly
            </span>
          </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
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
    </SectionLayout>
  );
}
