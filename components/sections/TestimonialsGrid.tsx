"use client";

import { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/lib/why-apadcode-content";
import { MapPin } from "lucide-react";
import { FaEnvelope } from "react-icons/fa6";

type TestimonialsGridProps = {
  className?: string;
  id?: string;
};

export default function TestimonialsGrid({
  className = "",
  id,
}: TestimonialsGridProps) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1140) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 700) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(testimonials.length / itemsPerView)),
    [itemsPerView]
  );

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const cardGap = 20;

  return (
    <section id={id} className={`relative ${className}`.trim()}>
      <div className="flex flex-col gap-2">
        <p className="font-kanit text-[12px] uppercase tracking-[0.11em] text-[#615B84]">
          Client Feedback
        </p>
        <h2 className="font-kanit text-[30px] leading-[1.08] tracking-[-0.012em] text-[#171B27] sm:text-[36px] lg:text-[44px]">
          What Clients Say About APADCode
        </h2>
        <p className="max-w-[920px] font-kanit text-[17px] leading-[1.5] text-[#353B4A] sm:text-[19px] lg:text-[21px]">
          Practical feedback from teams using APADCode in technical hiring workflows.
        </p>
      </div>

      {testimonials.length > 0 ? (
        <div className="mt-7">
          <div className="overflow-hidden">
            <div
              className="grid auto-cols-[100%] grid-flow-col gap-5 transition-transform duration-500 ease-out"
              style={{
                gridAutoColumns: `calc((100% - ${(itemsPerView - 1) * cardGap}px) / ${itemsPerView})`,
                transform: `translateX(calc(-${page} * (100% + ${cardGap}px)))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={`${testimonial.name}-${testimonial.company}`}
                  className="h-full rounded-[18px] border border-[#D8CFFC] bg-white/76 p-5"
                >
                  <p className="font-kanit text-[32px] leading-[0.8] text-[#8C45FF]/38">
                    "
                  </p>
                  <p className="mt-2 font-kanit text-[14px] leading-[1.5] text-[#242A3B]">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-5 flex items-start gap-3">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(140deg,#8C45FF_0%,#0AAFF9_100%)] font-kanit text-[14px] font-medium text-white">
                      {testimonial.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-kanit text-[16px] font-medium text-[#171B27]">
                          {testimonial.name}
                        </p>
                        <a
                          href={`mailto:${testimonial.contactEmail}`}
                          aria-label={`Email ${testimonial.name}`}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#CDBCF8]/90 bg-white text-[#593EAE] transition-colors duration-300 hover:text-[#7E4EFF]"
                        >
                          <FaEnvelope className="h-2.5 w-2.5" />
                        </a>
                      </div>
                      <p className="font-kanit text-[14px] text-[#545C72]">
                        <span>{testimonial.role}, </span>
                        <a
                          href={testimonial.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-[#A9B2CD] underline-offset-2 transition-colors hover:text-[#2B3F86]"
                        >
                          {testimonial.company}
                        </a>
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 font-kanit text-[13px] text-[#5D6480]">
                        <MapPin className="h-3.5 w-3.5" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {totalPages > 1 ? (
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => canPrev && setPage((prev) => prev - 1)}
                disabled={!canPrev}
                aria-label="Previous testimonials"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8C45FF]/35 bg-white text-[#5D46F9] shadow-[0_6px_14px_rgba(109,86,255,0.18)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true" className="text-[22px] leading-none">
                  ‹
                </span>
              </button>

              <p className="min-w-[74px] text-center font-kanit text-[16px] text-[#2B2E3A]">
                {page + 1} / {totalPages}
              </p>

              <button
                type="button"
                onClick={() => canNext && setPage((prev) => prev + 1)}
                disabled={!canNext}
                aria-label="Next testimonials"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8C45FF]/35 bg-white text-[#5D46F9] shadow-[0_6px_14px_rgba(109,86,255,0.18)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true" className="text-[22px] leading-none">
                  ›
                </span>
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="mt-7 rounded-[16px] border border-[#D8CFFC] bg-white/76 p-5">
          <p className="font-kanit text-[16px] text-[#242A3B]">
            No client testimonials available yet.
          </p>
        </div>
      )}
    </section>
  );
}
