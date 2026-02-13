"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLayout from "./SectionLayout";

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

export default function Questionaire() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <SectionLayout
      badgeText="Smart answers to common questions"
      title="Your frequently asked questions"
      decorations={
        <>
          <div className="pointer-events-none absolute right-[-120px] top-[36%] h-[380px] w-[380px] rounded-full bg-[#A14DFF]/35 blur-[120px]" />
          <div className="pointer-events-none absolute left-[-120px] bottom-[12%] h-[300px] w-[300px] rounded-full bg-[#8C45FF]/20 blur-[110px]" />
        </>
      }
    >
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
    </SectionLayout>
  );
}
