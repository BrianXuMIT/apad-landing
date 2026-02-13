"use client";

import React, { useMemo, useState } from "react";

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

function SparkBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-[16px] border border-[#53B4FF] bg-white px-5 py-2.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.77095 5.30554C8.75916 5.27412 8.73438 5.24934 8.70297 5.23755L6.97679 4.59024C6.87626 4.55254 6.87626 4.41026 6.97679 4.37256L8.70297 3.72525C8.73438 3.71346 8.75916 3.68868 8.77095 3.65727L9.41826 1.93109C9.45596 1.83056 9.59824 1.83056 9.63594 1.93109L10.2833 3.65727C10.295 3.68868 10.3198 3.71346 10.3512 3.72525L12.0774 4.37256C12.1779 4.41026 12.1779 4.55254 12.0774 4.59024L10.3512 5.23755C10.3198 5.24934 10.295 5.27412 10.2833 5.30554L9.63594 7.03171C9.59824 7.13225 9.45596 7.13225 9.41826 7.03171L8.77095 5.30554ZM4.63473 9.44175C4.62295 9.41222 4.59953 9.3888 4.57003 9.37702L2.31511 8.47505C2.2182 8.43628 2.2182 8.2991 2.31511 8.26033L4.57003 7.35836C4.59953 7.34658 4.62295 7.32316 4.63473 7.29367L5.5367 5.03874C5.57547 4.94184 5.71265 4.94184 5.75142 5.03874L6.65339 7.29367C6.66517 7.32316 6.68859 7.34658 6.71809 7.35836L8.97301 8.26033C9.06992 8.2991 9.06992 8.43628 8.97301 8.47505L6.71809 9.37702C6.68859 9.3888 6.66517 9.41222 6.65339 9.44175L5.75142 11.6966C5.71265 11.7935 5.57547 11.7935 5.5367 11.6966L4.63473 9.44175Z"
          fill="#111216"
        />
      </svg>
      <span className="font-kanit text-sm font-light text-[#404352]">
        Simple Pricing, Serious Impact.
      </span>
    </div>
  );
}

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
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[53%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#9C4EFF]/28 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <SparkBadge />
          <h2 className="mt-6 text-center font-kanit text-4xl font-medium text-[#111216] sm:text-5xl">
            Explore Our Plans
          </h2>
          <p className="mt-4 text-center font-kanit text-base text-[#1F2430] sm:text-xl">
            Scale your interviews without scaling your interviewers.
          </p>

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
      </div>
    </section>
  );
}
