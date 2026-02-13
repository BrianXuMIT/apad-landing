"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is APAD Code and how does it work?",
    answer:
      "APAD Code is an AI-powered technical assessment platform designed to help teams evaluate real-world software engineering skills with accuracy and consistency. Instead of focusing only on language syntax or puzzle-style problems, APAD Code simulates practical development scenarios that reflect how engineers actually work.",
  },
  {
    question: "Who can benefit from using APAD Code?",
    answer:
      "Recruiters, hiring managers, and engineering teams can all benefit by reducing interview load while still evaluating problem-solving depth, communication, and implementation quality.",
  },
  {
    question: "How does APAD Code compare to other code test platforms?",
    answer:
      "APAD Code focuses on realistic interview behavior, adaptive questioning, and structured insights rather than static pass/fail coding tasks alone.",
  },
  {
    question:
      "What happens if a challenge is cancelled or expires before the candidate starts the challenge?",
    answer:
      "Challenges can be reset or re-issued so candidates can continue the hiring process with a valid assessment window.",
  },
  {
    question: "Why are coding assessments an essential hiring tool?",
    answer:
      "They help teams evaluate practical engineering ability early, improve consistency, and make better hiring decisions with less bias and less interviewer fatigue.",
  },
];

function SectionBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-[18px] border border-[#56B4FF] bg-white px-5 py-2.5">
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
      <span className="font-kanit text-sm font-light text-[#444857]">
        Smart answers to common questions
      </span>
    </div>
  );
}

export default function Questionaire() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute right-[-120px] top-[36%] h-[380px] w-[380px] rounded-full bg-[#A14DFF]/35 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-120px] bottom-[12%] h-[300px] w-[300px] rounded-full bg-[#8C45FF]/20 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <SectionBadge />
          <h2 className="mt-7 text-center font-kanit text-[48px] font-medium text-[#111216] ">
            Your frequently asked questions
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[8px] bg-white">
            {faqItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.question}
                  className="border-b border-[#1A1D25]/35"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev === index ? -1 : index))
                    }
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isActive}
                  >
                    <span className="font-kanit text-[27px] font-light leading-[1.25] text-[#111216]">
                      {item.question}
                    </span>
                    <span className="font-kanit text-[40px] leading-none text-[#111216]">
                      {isActive ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 font-kanit text-[15px] font-light leading-[1.6] text-[#2C313F]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="relative mx-auto w-full max-w-[520px] pt-8 lg:pt-16">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770987343/Image23_hxww7q.png"
              alt="APADCode robot assistant"
              className="relative z-[2] mx-auto w-full max-w-[470px] object-contain"
            />
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770987342/Image24_aqk4k1.png"
              alt="Question symbol"
              className="absolute right-1 top-0 z-[3] w-[130px] object-contain sm:w-[150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
