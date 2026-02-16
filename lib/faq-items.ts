export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
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

