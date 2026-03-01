import type { Metadata } from "next";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import solutionsStackOne from "@/assets/images/solutions-stack-1.png";
import solutionsStackTwo from "@/assets/images/solutions-stack-2.png";
import solutionsStackThree from "@/assets/images/solutions-stack-3.webp";
import AnimatedBorderCard from "@/components/ui/AnimatedBorderCard";
import JsonLd from "@/components/seo/JsonLd";
import { imageMaps } from "@/lib/image_maps";
import { solutionLandingPages } from "@/lib/seo-pages";
import { absoluteUrl, buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover APADCode solutions for AI coding interviews, technical screening automation, and decision-ready engineering hiring workflows.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    url: absoluteUrl("/solutions"),
    title: "APADCode Solutions",
    description:
      "Discover APADCode solutions for AI coding interviews, technical screening automation, and decision-ready engineering hiring workflows.",
  },
};

export default function SolutionsIndexPage() {
  const solutionHighlights = solutionLandingPages.map((page) => {
    const firstParagraph = page.sections[0]?.paragraphs[0] ?? page.intro;
    return {
      ...page,
      summary: firstParagraph,
    };
  });

  const impactSignals = [
    { label: "Interview consistency", value: "97%" },
    { label: "Decision speed", value: "3x faster" },
    { label: "Screening quality", value: "Role-aligned" },
  ];

  const executionFlow = [
    {
      title: "Design your screening strategy",
      description:
        "Map role expectations to interview signal dimensions: reasoning, communication, and code quality.",
    },
    {
      title: "Run adaptive AI-led interviews",
      description:
        "Candidates complete live coding sessions with dynamic follow-up depth and practical scenario exploration.",
    },
    {
      title: "Decide with evidence",
      description:
        "Recruiting and engineering review structured summaries and align on next steps faster.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <JsonLd
        data={buildWebPageSchema({
          name: "APADCode Solutions",
          path: "/solutions",
          description:
            "Discover APADCode solutions for AI coding interviews, technical screening automation, and decision-ready engineering hiring workflows.",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
      <div className="pointer-events-none absolute left-[-160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/24 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-170px] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#2A9CE8]/18 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <article className="overflow-hidden rounded-[30px] border border-[#DACBFF]/62 bg-[linear-gradient(132deg,rgba(255,255,255,0.95)_0%,rgba(246,240,255,0.90)_53%,rgba(235,246,255,0.90)_100%)] p-5 shadow-[0_18px_34px_rgba(94,74,167,0.18)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-[#D8C8FF]/80 bg-white/85 px-3.5 py-1 font-kanit text-[12px] uppercase tracking-[0.08em] text-[#5F4E95]">
                Solutions
              </span>
              <h1 className="mt-4 font-kanit text-[34px] leading-[1.06] tracking-[-0.015em] text-[#171B27] sm:text-[46px] lg:text-[58px]">
                Technical Hiring
                <span className="block bg-[linear-gradient(96deg,#6F3FE2_0%,#1393E9_100%)] bg-clip-text text-transparent">
                  Designed to Win
                </span>
              </h1>
              <p className="mt-4 max-w-[760px] font-kanit text-[18px] leading-[1.52] text-[#343A4C] sm:text-[21px]">
                APADCode solutions are built for high-signal technical screening:
                adaptive live interviews, consistent evaluation standards, and
                decision-ready evidence for every hiring team.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center gap-2 rounded-[14px] bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] px-6 font-kanit text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(117,83,255,0.32)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Demo
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/why-apadcode"
                  className="inline-flex h-[48px] items-center rounded-[14px] border border-[#CBB8F5] bg-white px-6 font-kanit text-[15px] font-medium text-[#2D3244] transition-colors hover:border-[#B99FF0]"
                >
                  Why APADCode
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/40 blur-[110px] sm:h-[380px] sm:w-[380px]" />
              <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[420px]">
                <div className="absolute left-3 top-12 w-[72%] rotate-[-6deg] overflow-hidden rounded-[20px] border border-[#DFD3FF]/70 bg-white p-2 shadow-[0_12px_26px_rgba(95,74,165,0.14)] sm:left-2 sm:top-10 sm:w-[66%]">
                  <img
                    src={imageMaps.sections.uniqueFeatures.tradeoffRobot}
                    alt="APADCode platform experience visual"
                    className="h-[170px] w-full rounded-[14px] bg-white object-cover sm:h-[190px]"
                  />
                </div>

                <div className="absolute right-4 top-[28px] z-[3] w-[72%] rotate-[4deg] overflow-hidden rounded-[20px] border border-[#DFD3FF]/74 bg-white/90 p-2 shadow-[0_14px_30px_rgba(95,74,165,0.18)] sm:right-1 sm:top-6 sm:w-[68%]">
                  <img
                    src={solutionsStackOne.src}
                    alt="APADCode live coding interview visual"
                    className="h-[180px] w-full rounded-[14px] object-cover sm:h-[205px]"
                  />
                </div>

                <div className="absolute bottom-2 left-1/2 z-[4] w-[82%] -translate-x-1/2 rotate-[-2deg] overflow-hidden rounded-[22px] border border-[#DFD3FF]/76 bg-white p-2 shadow-[0_18px_34px_rgba(95,74,165,0.20)] sm:bottom-0 sm:w-[76%]">
                  <img
                    src={solutionsStackThree.src}
                    alt="APADCode hiring insights visual"
                    className="h-[190px] w-full rounded-[15px] object-cover sm:h-[215px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {impactSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-[16px] border border-[#E1D7FB] bg-white/88 px-4 py-4"
              >
                <p className="font-kanit text-[12px] uppercase tracking-[0.09em] text-[#5D5781]">
                  {signal.label}
                </p>
                <p className="mt-1 font-kanit text-[24px] leading-[1.05] text-[#171B27] sm:text-[28px]">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>
        </article>

        <section className="mt-9 rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-8">
          <h2 className="font-kanit text-[30px] leading-[1.06] tracking-[-0.01em] text-[#171B27] sm:text-[38px] lg:text-[46px]">
            Explore Solution Tracks
          </h2>
          <p className="mt-3 max-w-[900px] font-kanit text-[17px] leading-[1.56] text-[#343A4C] sm:text-[20px]">
            Choose the APADCode solution path that matches your hiring maturity,
            interview volume, and decision quality goals.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {solutionHighlights.map((page) => (
              <AnimatedBorderCard
                key={page.path}
                hoverOnly
                className="h-full rounded-[20px]"
                innerClassName="h-full rounded-[19px] border border-[#DFD3FF]/72 bg-white p-5 shadow-[0_10px_22px_rgba(95,74,165,0.12)] transition-all duration-300 group-hover:shadow-[0_14px_28px_rgba(95,74,165,0.18)]"
              >
                <h3 className="font-kanit text-[25px] leading-[1.15] text-[#171B27]">
                  {page.title}
                </h3>
                <p className="mt-2 font-kanit text-[16px] leading-[1.56] text-[#31374B]">
                  {page.summary}
                </p>
                <Link
                  href={page.path}
                  className="group/cta relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#CDBAF5] bg-white px-4 py-2 font-kanit text-[14px] font-medium text-[#292F43] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B99FF0] hover:shadow-[0_10px_20px_rgba(123,96,214,0.18)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_56%)] opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100" />
                  <span className="relative">View solution</span>
                  <ArrowRightIcon className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </Link>
              </AnimatedBorderCard>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-8">
          <h2 className="font-kanit text-[30px] leading-[1.06] tracking-[-0.01em] text-[#171B27] sm:text-[38px] lg:text-[46px]">
            How Teams Execute With APADCode
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {executionFlow.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[20px] border border-[#DFD3FF]/72 bg-white/88 p-5 shadow-[0_10px_22px_rgba(95,74,165,0.12)]"
              >
                <p className="font-kanit text-[12px] uppercase tracking-[0.09em] text-[#5D5781]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-kanit text-[22px] leading-[1.2] text-[#171B27]">
                  {step.title}
                </h3>
                <p className="mt-2 font-kanit text-[16px] leading-[1.56] text-[#31374B]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(96deg,#7B43EC_0%,#2A8FE8_100%)] p-6 shadow-[0_16px_32px_rgba(94,74,167,0.24)] sm:p-8">
          <h2 className="font-kanit text-[30px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[38px] lg:text-[46px]">
            Build a stronger technical hiring engine
          </h2>
          <p className="mt-3 max-w-[900px] font-kanit text-[17px] leading-[1.55] text-[#ECF1FF] sm:text-[20px]">
            Book a tailored walkthrough and map APADCode solutions to your role
            types, interview process, and hiring velocity targets.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-[48px] items-center gap-2 rounded-[14px] bg-white px-6 font-kanit text-[15px] font-medium text-[#2A2E41] transition-all duration-300 hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/why-apadcode"
              className="inline-flex h-[48px] items-center rounded-[14px] border border-white/65 bg-white/10 px-6 font-kanit text-[15px] font-medium text-white transition-colors hover:bg-white/20"
            >
              Why APADCode?
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
