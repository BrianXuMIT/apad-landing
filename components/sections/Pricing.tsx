"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionLayout from "./SectionLayout";
import {
  BillingCycle,
  PricingFeature,
  PricingPlan,
  enterprisePlan,
  pricingFeatures,
  pricingPlans,
} from "@/lib/pricing-plans";

const salesButtonClass =
  "inline-flex h-[38px] items-center justify-center rounded-[10px] border border-[#8AA7D8] bg-white/84 px-4 font-kanit text-[14px] text-[#24446E] transition-colors hover:border-[#6A90CF] hover:text-[#193A64]";

type PlanCardProps = {
  plan: PricingPlan;
  billing: BillingCycle;
};

function PlanCard({ plan, billing }: PlanCardProps) {
  const isAnnual = billing === "annual";
  const activeBillingValue = isAnnual ? plan.annualBilling : plan.monthlyBilling;
  const alternateBillingValue = isAnnual ? plan.monthlyBilling : plan.annualBilling;
  const activeIncluded = isAnnual
    ? plan.includedInterviewsAnnual
    : plan.includedInterviewsMonthly;

  return (
    <article
      className={`relative h-full overflow-hidden rounded-[24px] border p-4 sm:p-5 ${
        plan.highlighted
          ? "border-[#A8C0EA] bg-[linear-gradient(156deg,#FFFFFF_0%,#F2F7FF_58%,#F4F1FF_100%)] shadow-[0_20px_34px_rgba(47,81,146,0.14)]"
          : "border-[#D6CCF4] bg-[linear-gradient(156deg,#FFFFFF_0%,#FBF6FF_58%,#F6FAFF_100%)] shadow-[0_16px_28px_rgba(88,70,150,0.12)]"
      }`}
    >
      <div
        className={`pointer-events-none absolute left-4 top-0 h-16 w-24 rounded-b-[20px] blur-[24px] ${
          plan.highlighted ? "bg-[#4A8DE6]/28" : "bg-[#7E4FE4]/22"
        }`}
      />

      <div className="relative z-[1] flex h-full flex-col">
        <div className="min-h-[102px] sm:min-h-[114px]">
          <h3 className="font-kanit text-[26px] font-medium tracking-[-0.01em] text-[#141C2D] sm:text-[30px]">
            {plan.name}
          </h3>
          <p className="mt-1.5 font-kanit text-[14px] leading-[1.4] text-[#3B4460] sm:text-[15px]">
            {plan.bestFor}
          </p>
        </div>

        <div className="mt-4 min-h-[126px] rounded-[16px] border border-white/75 bg-white/70 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
          <p className="font-kanit text-[11px] uppercase tracking-[0.1em] text-[#64739A]">
            {isAnnual ? "Annual Billing" : "Monthly Billing"}
          </p>
          <p className="mt-1 bg-[linear-gradient(100deg,#14263F_0%,#325A9B_62%,#5A45AF_100%)] bg-clip-text font-kanit text-[30px] font-medium leading-[1.05] tracking-[-0.01em] text-transparent sm:text-[36px]">
            {activeBillingValue}
          </p>
          <p className="mt-1.5 font-kanit text-[12px] text-[#5B6888] sm:text-[13px]">
            {isAnnual ? "Monthly reference" : "Annual option (save ~20%)"}: {alternateBillingValue}
          </p>
        </div>

        <div className="mt-3 flex min-h-[148px] flex-col">
          <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-[#D8E1F4] bg-white/74 px-3.5 py-2.5">
              <dt className="font-kanit text-[10px] uppercase tracking-[0.1em] text-[#697696]">
                Included
              </dt>
              <dd className="mt-1 font-kanit text-[14px] leading-[1.25] text-[#1C263B] sm:text-[15px]">
                {activeIncluded}
              </dd>
            </div>
            <div className="rounded-[12px] border border-[#D8E1F4] bg-white/74 px-3.5 py-2.5">
              <dt className="font-kanit text-[10px] uppercase tracking-[0.1em] text-[#697696]">
                Additional
              </dt>
              <dd className="mt-1 font-kanit text-[14px] leading-[1.25] text-[#1C263B] sm:text-[15px]">
                {plan.additionalInterviews}
              </dd>
            </div>
          </dl>

          <div className="mt-auto pt-3">
            <Link
              href="/contact"
              className={salesButtonClass}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function EnterpriseCard() {
  return (
    <article className="relative h-full overflow-hidden rounded-[24px] border border-[#95B0DE] bg-[linear-gradient(140deg,#FDFEFF_0%,#F2F7FF_50%,#EEF3FF_100%)] p-4 shadow-[0_22px_36px_rgba(34,64,116,0.18)] sm:p-5">
      <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#5A90E8]/20 blur-[28px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-32 rounded-bl-[24px] bg-[linear-gradient(135deg,rgba(88,132,214,0.22)_0%,rgba(88,132,214,0)_100%)]" />

      <div className="relative z-[1] flex h-full flex-col">
        <div className="min-h-[102px] sm:min-h-[114px]">
          <h3 className="font-kanit text-[26px] font-medium tracking-[-0.01em] text-[#1B3155] sm:text-[30px]">
            Enterprise
          </h3>
          <p className="mt-1.5 font-kanit text-[14px] leading-[1.4] text-[#243E67] sm:text-[15px]">
            Custom deployment for advanced hiring workflows, integrations, and compliance requirements.
          </p>
        </div>

        <div className="mt-4 min-h-[126px] rounded-[16px] border border-[#C5D4F0] bg-white/72 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]">
          <p className="font-kanit text-[11px] uppercase tracking-[0.1em] text-[#4D6490]">
            Pricing
          </p>
          <p className="mt-1 font-kanit text-[30px] font-medium leading-[1.05] tracking-[-0.01em] text-[#2A4B79] sm:text-[36px]">
            Custom
          </p>
          <p className="mt-1.5 font-kanit text-[12px] text-[#536A93] sm:text-[13px]">
            Contracted around volume, integrations, and compliance scope.
          </p>
        </div>

        <div className="mt-3 flex min-h-[148px] flex-col">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-[#C5D4F0] bg-white/74 px-3.5 py-2.5">
              <p className="font-kanit text-[10px] uppercase tracking-[0.1em] text-[#5C739C]">
                Scope
              </p>
              <p className="mt-1 font-kanit text-[14px] leading-[1.25] text-[#223A60] sm:text-[15px]">
                Custom interview volume with API and ATS integrations.
              </p>
            </div>
            <div className="rounded-[12px] border border-[#C5D4F0] bg-white/74 px-3.5 py-2.5">
              <p className="font-kanit text-[10px] uppercase tracking-[0.1em] text-[#5C739C]">
                Support
              </p>
              <p className="mt-1 font-kanit text-[14px] leading-[1.25] text-[#223A60] sm:text-[15px]">
                Dedicated support with security and compliance guidance.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-3">
            <Link
              href={enterprisePlan.ctaHref}
              className={salesButtonClass}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

type FeatureTooltipProps = {
  feature: PricingFeature;
  activeTooltipId: string | null;
  setActiveTooltipId: React.Dispatch<React.SetStateAction<string | null>>;
};

function FeatureTooltip({
  feature,
  activeTooltipId,
  setActiveTooltipId,
}: FeatureTooltipProps) {
  const isOpen = activeTooltipId === feature.id;

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        aria-label={`${feature.name} details`}
        aria-expanded={isOpen}
        onMouseEnter={() => setActiveTooltipId(feature.id)}
        onMouseLeave={() => setActiveTooltipId((prev) => (prev === feature.id ? null : prev))}
        onFocus={() => setActiveTooltipId(feature.id)}
        onBlur={() => setActiveTooltipId((prev) => (prev === feature.id ? null : prev))}
        onClick={() =>
          setActiveTooltipId((prev) => (prev === feature.id ? null : feature.id))
        }
        className="ml-1.5 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#A9B8D8] bg-white/88 font-kanit text-[10px] font-medium text-[#2C456D] transition-colors hover:border-[#7E98CA] hover:text-[#15345F]"
      >
        ?
      </button>

      <div
        role="tooltip"
        className={`pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-30 w-[min(90vw,360px)] -translate-x-1/2 rounded-[12px] border border-[#CBD8EF] bg-[linear-gradient(162deg,#FFFFFF_0%,#F7FAFF_100%)] px-3.5 py-3 shadow-[0_16px_28px_rgba(26,43,78,0.16)] transition-all duration-150 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        <p className="font-kanit text-[12px] leading-[1.4] text-[#24344F] sm:text-[13px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function InclusionMark({ value }: { value: "check" | "dash" | "custom" }) {
  if (value === "custom") {
    return (
      <span className="inline-flex min-w-[48px] items-center justify-center rounded-full px-1.5 py-0.5 font-kanit text-[10px] uppercase tracking-[0.08em] text-[#2E5A96] sm:min-w-[64px] sm:text-[12px]">
        Custom
      </span>
    );
  }

  return (
    <span className="inline-flex h-6 min-w-[48px] items-center justify-center rounded-full px-1.5 sm:min-w-[64px]">
      {value === "check" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-5 w-5 text-[#1567D8]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10.5l3.6 3.7L16 5.8" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-[#8A90A3]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        >
          <path d="M5 10h10" />
        </svg>
      )}
    </span>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const corePlanName =
    pricingPlans.find((plan) => plan.key === "core")?.name ?? "Core Infrastructure";
  const intelligencePlanName =
    pricingPlans.find((plan) => plan.key === "intelligence")?.name ?? "Intelligence";
  const compareGridCols =
    "grid-cols-[minmax(0,1.08fr)_minmax(88px,0.9fr)_minmax(88px,0.9fr)_minmax(96px,0.95fr)] md:grid-cols-[minmax(0,1.16fr)_minmax(170px,1fr)_minmax(170px,1fr)_minmax(170px,1fr)] lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,1fr)_minmax(220px,1fr)_minmax(220px,1fr)]";

  return (
    <SectionLayout
      sectionId="pricing"
      badgeText="Structured Pricing"
      title="Pricing"
      description="Choose the deployment depth that matches your hiring infrastructure stage."
      decorations={
        <>
          <div className="pointer-events-none absolute left-[12%] top-[30%] h-[240px] w-[240px] rounded-full bg-[#7A4BE6]/20 blur-[105px]" />
          <div className="pointer-events-none absolute right-[8%] top-[38%] h-[260px] w-[260px] rounded-full bg-[#4A8FE8]/18 blur-[108px]" />
        </>
      }
    >
      <div className="mt-8 flex justify-center lg:mt-10">
        <div className="inline-flex items-center gap-3 rounded-[16px] border border-[#D5DCEF] bg-white/70 px-3 py-2 shadow-[0_10px_20px_rgba(74,89,126,0.10)] sm:gap-4 sm:px-4 sm:py-2.5">
          <span
            className={`font-kanit text-[15px] transition-colors sm:text-[18px] ${
              billing === "monthly" ? "text-[#24324E]" : "text-[#6F7891]"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            aria-label="Toggle billing cycle"
            aria-pressed={billing === "annual"}
            onClick={() =>
              setBilling((prev) => (prev === "monthly" ? "annual" : "monthly"))
            }
            className="relative h-[30px] w-[64px] rounded-full bg-[linear-gradient(98deg,#6C4EDD_0%,#2D8CE8_100%)] p-[3px]"
          >
            <span
              className={`absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
                billing === "annual" ? "translate-x-[34px]" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`font-kanit text-[15px] transition-colors sm:text-[18px] ${
              billing === "annual" ? "text-[#24324E]" : "text-[#6F7891]"
            }`}
          >
            Annual
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.key} plan={plan} billing={billing} />
        ))}
        <EnterpriseCard />
      </div>

      <section className="relative mt-8 overflow-visible lg:mt-10">
        <div className="border-b border-[#DEE6F4] bg-white px-4 py-4 text-center sm:px-5 sm:py-5">
          <h3 className="mt-1 font-kanit text-[24px] font-medium leading-[1.05] tracking-[-0.012em] text-[#1A2A45] sm:text-[32px]">
            Compare Price Plans
          </h3>
          <div className="mx-auto mt-2 h-[2px] w-20 rounded-full bg-[#A4BEE7] sm:w-24" />
        </div>

        <div className="sticky top-[74px] z-30 border-b border-[#DCE5F4] sm:top-[92px]">
          <div className={`grid text-center ${compareGridCols}`}>
            <div className="bg-white px-3 py-2.5 text-left font-kanit text-[13px] font-medium uppercase tracking-[0.09em] text-[#3F5888] sm:px-5 sm:text-[20px]">
              Feature
            </div>
            <div className="bg-[#F1F7FF] px-1.5 py-2.5 font-kanit text-[14px] font-medium leading-[1.05] tracking-[-0.01em] text-[#25477A] sm:text-[26px]">
              {corePlanName}
            </div>
            <div className="bg-[#F3F0FF] px-1.5 py-2.5 font-kanit text-[14px] font-medium leading-[1.05] tracking-[-0.01em] text-[#25477A] sm:text-[26px]">
              {intelligencePlanName}
            </div>
            <div className="bg-[#EFFFF8] px-1.5 py-2.5 font-kanit text-[14px] font-medium leading-[1.05] tracking-[-0.01em] text-[#25477A] sm:text-[26px]">
              {enterprisePlan.title}
            </div>
          </div>
        </div>

        <div className={`grid text-center ${compareGridCols}`}>
          {pricingFeatures.map((feature) => (
            <React.Fragment key={feature.id}>
              <div className="border-b border-[#E4EBF8] bg-white px-3 py-2 text-left sm:px-5">
                <div className="flex items-start">
                  <p className="font-kanit text-[14px] leading-[1.22] text-[#1F2F4B] sm:text-[17px]">
                    {feature.shortName}
                  </p>
                  <FeatureTooltip
                    feature={feature}
                    activeTooltipId={activeTooltipId}
                    setActiveTooltipId={setActiveTooltipId}
                  />
                </div>
              </div>

              <div className="border-b border-[#E4EBF8] bg-[#F1F7FF] px-1 py-2">
                <InclusionMark value={feature.core ? "check" : "dash"} />
              </div>
              <div className="border-b border-[#E4EBF8] bg-[#F3F0FF] px-1 py-2">
                <InclusionMark value={feature.intelligence ? "check" : "dash"} />
              </div>
              <div className="border-b border-[#E4EBF8] bg-[#EFFFF8] px-1 py-2">
                <InclusionMark value="custom" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
}
