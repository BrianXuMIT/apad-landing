import Link from "next/link";
import type { SeoLandingPage as SeoLandingPageType } from "@/lib/seo-pages";

type LinkItem = {
  label: string;
  href: string;
};

type SeoLandingPageProps = {
  page: SeoLandingPageType;
  relatedLinks: LinkItem[];
};

export default function SeoLandingPage({
  page,
  relatedLinks,
}: SeoLandingPageProps) {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-24 pt-28 sm:pb-28 sm:pt-32">
      <div className="pointer-events-none absolute left-[-160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/24 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-170px] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#2A9CE8]/18 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-12">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-full border border-[#C9B4FF]/70 bg-white/80 px-4 py-2 font-kanit text-[15px] text-[#373B4B] shadow-[0_8px_18px_rgba(96,76,164,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A787FF]/80 hover:bg-white"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M16 10H5M9 5l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Solutions
        </Link>

        <article className="mt-6 overflow-hidden rounded-[28px] border border-[#DACBFF]/62 bg-[linear-gradient(136deg,rgba(255,255,255,0.92)_0%,rgba(247,241,255,0.86)_54%,rgba(237,247,255,0.86)_100%)] p-5 shadow-[0_14px_30px_rgba(94,74,167,0.14)] sm:p-7 lg:p-10">
          <p className="font-kanit text-[13px] uppercase tracking-[0.1em] text-[#665A93]">
            APADCode Resource
          </p>

          <h1 className="mt-3 font-kanit text-[32px] leading-[1.08] tracking-[-0.015em] text-[#171B27] sm:text-[40px] lg:text-[50px]">
            {page.h1}
          </h1>

          <p className="mt-4 max-w-[860px] font-kanit text-[18px] leading-[1.45] text-[#353B4A] lg:text-[22px]">
            {page.intro}
          </p>

          <div className="mt-8 space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-kanit text-[24px] leading-[1.15] tracking-[-0.01em] text-[#1B1F2D] lg:text-[31px]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-kanit text-[17px] leading-[1.65] text-[#202635] lg:text-[20px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 font-kanit text-[16px] leading-[1.55] text-[#242B3D] lg:text-[18px]"
                      >
                        <span className="mt-[7px] inline-flex h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(96deg,#6F3FE2_0%,#1393E9_100%)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[20px] border border-[#D8CBF8]/70 bg-white/72 p-5 sm:p-6">
            <h2 className="font-kanit text-[24px] leading-[1.2] text-[#1B1F2D] lg:text-[28px]">
              Related resources
            </h2>
            <nav className="mt-4 flex flex-wrap gap-3" aria-label="Related resources">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[#D3C5F6] bg-white px-4 py-2 font-kanit text-[14px] text-[#31374B] transition-colors hover:border-[#BDA4F3] hover:text-[#1B1F2D]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 rounded-[20px] border border-[#D8CBF8]/70 bg-white/72 p-5 sm:p-6">
            <h2 className="font-kanit text-[24px] leading-[1.2] text-[#1B1F2D] lg:text-[28px]">
              Ready to evaluate candidates with better signal?
            </h2>
            <p className="mt-2 font-kanit text-[16px] leading-[1.55] text-[#2D3446] lg:text-[18px]">
              Request a demo to see how APADCode supports consistent technical
              screening and faster hiring decisions.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-[46px] items-center rounded-[14px] bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] px-5 font-kanit text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(117,83,255,0.32)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Demo
              </Link>
              <Link
                href="/site-map"
                className="inline-flex h-[46px] items-center rounded-[14px] border border-[#CBB8F5] bg-white px-5 font-kanit text-[15px] font-medium text-[#2D3244] transition-colors hover:border-[#B99FF0]"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
