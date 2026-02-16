export type HowItWorksFeature = {
  title: string;
  description: string;
  outcome: string;
  icon: "live" | "ai" | "insights" | "skills";
};

export const howItWorksFeatures: HowItWorksFeature[] = [
  {
    title: "Live Coding Environment",
    description:
      "Candidates solve real problems in an executable coding sandbox just like a real interview.",
    outcome: "Evaluate practical coding behavior instead of puzzle memorization.",
    icon: "live",
  },
  {
    title: "AI-Led Interview Flow",
    description:
      "APAD Code asks follow-up questions, explores alternatives, and adapts difficulty based on responses.",
    outcome: "Conversations stay adaptive, role-relevant, and deeply technical.",
    icon: "ai",
  },
  {
    title: "Actionable Insights",
    description:
      "Hiring teams receive structured insights not just pass/fail scores.",
    outcome: "Teams get decision-ready evidence they can align on quickly.",
    icon: "insights",
  },
  {
    title: "In-Depth Skill Evaluation",
    description:
      "Beyond correctness, it evaluates: Problem-solving approach, code quality, debugging mindset, communication clarity.",
    outcome: "Final recommendations reflect real engineering readiness.",
    icon: "skills",
  },
];

