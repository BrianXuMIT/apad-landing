import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ComparisonMatrix from "@/components/sections/ComparisonMatrix";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why APADCode",
  description:
    "See why hiring teams choose APADCode with a clear comparison matrix and a practical technical hiring evaluation framework.",
  alternates: {
    canonical: "/why-apadcode",
  },
  openGraph: {
    url: absoluteUrl("/why-apadcode"),
    title: `Why APADCode | ${siteConfig.name}`,
    description:
      "See why hiring teams choose APADCode with a clear comparison matrix and a practical technical hiring evaluation framework.",
  },
};

export default function WhyApadcodePage() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <JsonLd
        data={buildWebPageSchema({
          name: "Why APADCode",
          path: "/why-apadcode",
          description:
            "See why hiring teams choose APADCode with a clear comparison matrix and a practical technical hiring evaluation framework.",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why APADCode", path: "/why-apadcode" },
        ])}
      />
      <div className="pointer-events-none absolute left-[-160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/24 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-170px] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#2A9CE8]/18 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <article className="overflow-hidden rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-7 lg:p-10">
          <h1 className="font-kanit text-[34px] leading-[1.08] tracking-[-0.015em] text-[#171B27] sm:text-[46px] lg:text-[56px]">
            Why APADCode
          </h1>
          <p className="mt-4 max-w-[980px] font-kanit text-[18px] leading-[1.5] text-[#353B4A] sm:text-[21px] lg:text-[24px]">
            APADCode combines interview depth, consistent evaluation, and
            scalable delivery so hiring teams can make better technical
            decisions with less operational overhead.
          </p>

          <ComparisonMatrix
            title="Comparison at a glance"
            description="Feature-by-feature comparison across common technical screening approaches."
          />

          <TestimonialsGrid className="mt-10" id="client-feedback" />

          <div className="mt-10 rounded-[22px] border border-[#D9CBFB]/75 bg-white/82 p-5 sm:p-6">
            <h2 className="font-kanit text-[28px] leading-[1.1] text-[#171B27] sm:text-[34px]">
              Ready to evaluate candidates with stronger signal?
            </h2>
            <p className="mt-2 font-kanit text-[17px] leading-[1.55] text-[#303649] sm:text-[19px]">
              Request a demo to review role-specific interview flows and see how
              APADCode fits your hiring process.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-[48px] items-center rounded-[14px] bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] px-6 font-kanit text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(117,83,255,0.32)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Demo
              </Link>
              <Link
                href="#client-feedback"
                className="inline-flex h-[48px] items-center rounded-[14px] border border-[#CBB8F5] bg-white px-6 font-kanit text-[15px] font-medium text-[#2D3244] transition-colors hover:border-[#B99FF0]"
              >
                Read Client Feedback
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
