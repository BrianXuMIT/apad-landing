"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { FaEnvelope } from "react-icons/fa6";
import SectionLayout from "./SectionLayout";
import { testimonials } from "@/lib/why-apadcode-content";

const earlyValidationStats = [
  {
    metric: "2",
    label: "Production Design Partners",
    proof: "Replacing first-round technical interviews",
    accent: "#8C45FF",
    glow: "rgba(140,69,255,0.18)",
  },
  {
    metric: "70+",
    label: "Live Interviews Conducted",
    proof: "Executed as first-round replacements in active backend hiring",
    accent: "#4F74F6",
    glow: "rgba(79,116,246,0.16)",
  },
  {
    metric: "8-12",
    label: "Structured Cognitive Signals",
    proof: "Automatically extracted per interview session",
    accent: "#0AAFF9",
    glow: "rgba(10,175,249,0.16)",
  },
  {
    metric: "Feature Store",
    label: "Active",
    proof: "Normalized behavioral data accumulating across interviews",
    context: "Outcome correlation in progress",
    accent: "#6C7290",
    glow: "rgba(108,114,144,0.14)",
  },
] as const;

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const active = testimonials[activeIndex];

  const supporting = useMemo(
    () => testimonials.filter((_, index) => index !== activeIndex).slice(0, 2),
    [activeIndex],
  );

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goTo = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 30000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <SectionLayout
      sectionId="testimonials"
      sectionClassName="overflow-x-hidden"
      badgeText="Real Client Feedback"
      title="Testimonials"
      description="Engineering teams replacing first-round interviews with structured cognitive evaluation."
      decorations={
        <>
          <div className="pointer-events-none absolute left-1/2 top-[18%] h-[320px] w-[150vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.18)_0%,rgba(140,69,255,0.08)_34%,rgba(140,69,255,0)_74%)] blur-[88px]" />
          <div className="pointer-events-none absolute left-1/2 bottom-[16%] h-[320px] w-[150vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(42,156,232,0.16)_0%,rgba(42,156,232,0.07)_36%,rgba(42,156,232,0)_76%)] blur-[90px]" />
        </>
      }
    >
      <div className="relative mx-auto mt-10 w-full max-w-[1320px] overflow-visible lg:mt-12">
        <div className="relative min-h-[560px] px-2 py-6 sm:px-4 sm:py-8 lg:min-h-[620px] lg:px-6">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,69,255,0.20)_0%,rgba(140,69,255,0.09)_38%,rgba(140,69,255,0)_76%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(10,175,249,0.16)_0%,rgba(10,175,249,0.06)_40%,rgba(10,175,249,0)_78%)]" />

          <AnimatePresence initial={false} mode="sync">
            {supporting.map((item, index) => (
              <motion.article
                key={`${item.name}-${activeIndex}-${index}`}
                initial={{
                  opacity: 0,
                  x: direction * 80,
                  scale: 0.97,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: -direction * 80,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`hidden lg:block absolute z-[1] max-w-[320px] overflow-hidden border border-white/58 bg-white/78 px-5 py-5 shadow-[0_14px_30px_rgba(83,66,144,0.14)] ${
                  index === 0
                    ? "left-[2%] top-[16%] -rotate-[5deg] rounded-[52%_48%_56%_44%/54%_46%_54%_46%]"
                    : "right-[6%] top-[58%] rotate-[4deg] rounded-[46%_54%_44%_56%/48%_52%_48%_52%]"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-start gap-2.5 text-left">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(140deg,#8C45FF_0%,#0AAFF9_100%)] font-kanit text-[12px] font-medium text-white">
                      {item.avatarInitials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-kanit text-[13px] font-medium leading-[1.15] text-[#1E2436]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-kanit text-[11px] leading-[1.1] text-[#59607A]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mx-auto mt-2 max-w-[210px] text-center font-kanit text-[10px] leading-[1.25] text-[#454B63]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    “{item.quote}”
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          <AnimatePresence initial={false} mode="wait">
            <motion.article
              key={activeIndex}
              initial={{
                opacity: 0,
                x: direction * 110,
                scale: 0.96,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: -direction * 110,
                scale: 1.03,
              }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center overflow-hidden rounded-[44%_56%_48%_52%/50%_46%_54%_50%] border border-[#D8CCFD]/78 bg-[linear-gradient(136deg,#FFFFFF_0%,#F7F1FF_52%,#ECF7FF_100%)] px-7 py-10 text-center shadow-[0_22px_44px_rgba(93,76,160,0.18)] sm:px-10 sm:py-14 lg:py-16"
            >
              <div className="pointer-events-none absolute -left-10 top-12 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(140,69,255,0.25)_0%,rgba(140,69,255,0)_72%)]" />
              <div className="pointer-events-none absolute -right-10 bottom-14 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(42,156,232,0.24)_0%,rgba(42,156,232,0)_72%)]" />

              <div className="flex flex-col items-center">
                <p className="font-kanit text-[52px] leading-[0.68] text-[#8C45FF]/28">“</p>
                <p className="mt-2 max-w-[760px] font-kanit text-[15px] leading-[1.45] text-[#1E2436] sm:text-[16px] lg:text-[17px]">
                  {active.quote}
                </p>

                <div className="mt-8 flex items-start gap-3 text-left">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(140deg,#8C45FF_0%,#0AAFF9_100%)] font-kanit text-[15px] font-medium text-white">
                    {active.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-kanit text-[16px] font-medium text-[#171B27]">
                        {active.name}
                      </p>
                      <a
                        href={`mailto:${active.contactEmail}`}
                        aria-label={`Email ${active.name}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#CDBCF8]/90 bg-white text-[#593EAE] transition-colors duration-300 hover:text-[#7E4EFF]"
                      >
                        <FaEnvelope className="h-2.5 w-2.5" />
                      </a>
                    </div>
                    <p className="font-kanit text-[14px] text-[#4E566F]">
                      <span>{active.role}, </span>
                      <a
                        href={active.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[#A9B2CD] underline-offset-2 transition-colors hover:text-[#2B3F86]"
                      >
                        {active.company}
                      </a>
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 font-kanit text-[13px] text-[#5C6481]">
                      <MapPin className="h-3.5 w-3.5" />
                      {active.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CDBCF8]/85 bg-white/86 text-[#4F3AA0] shadow-[0_6px_14px_rgba(89,72,152,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B89EF3]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {testimonials.map((item, index) => (
                  <button
                    key={`${item.name}-${index}`}
                    type="button"
                    aria-label={`View testimonial ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-9 bg-[linear-gradient(96deg,#8C45FF_0%,#0AAFF9_100%)]"
                        : "w-2.5 bg-[#CCBDF2]"
                    }`}
                  />
                ))}

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CDBCF8]/85 bg-white/86 text-[#4F3AA0] shadow-[0_6px_14px_rgba(89,72,152,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B89EF3]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <section className="relative mt-5 overflow-hidden rounded-[28px] border border-[#C7D5EC]/85 bg-[linear-gradient(152deg,#FEFFFF_0%,#F4F8FF_46%,#F7F4FF_100%)] shadow-[0_22px_46px_rgba(29,47,88,0.10)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(90deg,rgba(140,69,255,0)_0%,rgba(140,69,255,0.36)_48%,rgba(140,69,255,0)_100%)]" />
          <div className="flex flex-col items-center justify-between gap-3 border-b border-[#DDE6F6] px-5 py-4 sm:flex-row sm:px-6">
            <p className="font-kanit text-[11px] uppercase tracking-[0.12em] text-[#566382]">
              Early Production Validation
            </p>
            <motion.span
              aria-label="First 3 Months"
              className="relative inline-flex items-center overflow-hidden rounded-full border border-[#AFC0E8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F6FF_100%)] px-5 py-1.5 font-kanit text-[12px] uppercase tracking-[0.11em] text-[#334C80]"
              animate={{
                scale: [1, 1.045, 1],
                boxShadow: [
                  "0 0 0 rgba(88,120,214,0)",
                  "0 0 0 7px rgba(88,120,214,0.14)",
                  "0 0 0 rgba(88,120,214,0)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="pointer-events-none absolute inset-y-0 left-[-45%] w-[35%] bg-white/85 blur-[1px]"
                animate={{ x: ["0%", "380%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">First 3 Months</span>
            </motion.span>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-5">
            {earlyValidationStats.map((item) => (
              <article
                key={`${item.metric}-${item.label}`}
                className="relative overflow-hidden rounded-[20px_20px_14px_20px] border border-[#D3DEEF] bg-[linear-gradient(175deg,#FFFFFF_0%,#FAFCFF_100%)] px-5 py-6 sm:px-6 sm:py-7"
                style={{ boxShadow: `inset 0 3px 0 ${item.accent}` }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
                  style={{ backgroundColor: item.glow }}
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 rounded-tl-[14px] border-l border-t border-[#E2E9F7] bg-[#F8FBFF]" />
                <p
                  className={`font-kanit leading-[0.92] tracking-[-0.026em] bg-[linear-gradient(160deg,#1D2A45_0%,#2C4975_54%,#5C7298_100%)] bg-clip-text text-transparent ${
                    /\d/.test(item.metric)
                      ? "text-[56px] sm:text-[64px] lg:text-[72px]"
                      : "text-[40px] sm:text-[46px] lg:text-[52px]"
                  }`}
                >
                  {item.metric}
                </p>
                <p className="mt-2 font-kanit text-[16px] uppercase tracking-[0.08em] text-[#314264] sm:text-[18px]">
                  {item.label}
                </p>
                <p className="mt-3 max-w-[420px] font-kanit text-[16px] leading-[1.34] text-[#2D3B56] sm:text-[17px]">
                  {item.proof}
                </p>
                {"context" in item ? (
                  <p className="mt-2 font-kanit text-[14px] leading-[1.34] text-[#5F6E8C] sm:text-[15px]">
                    {item.context}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
