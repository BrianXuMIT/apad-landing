export type HowItWorksFeature = {
  title: string;
  description: string;
  outcome: string;
  icon: "live" | "ai" | "insights" | "skills";
};

export const howItWorksFeatures: HowItWorksFeature[] = [
  {
    title: "Live Interview Orchestration",
    description:
      "The Interview Control Engine conducts structured, adaptive technical interviews in real time.",
    outcome: "Captures high-fidelity interaction data — not static answers.",
    icon: "live",
  },
  {
    title: "Structured Interaction Logging",
    description:
      "Every probe, response, revision, and timing event is logged as structured data.",
    outcome: "Creates analyzable behavioral traces.",
    icon: "ai",
  },
  {
    title: "Cognitive Feature Extraction",
    description:
      "The Cognitive Intelligence Engine transforms raw logs into measurable reasoning features.",
    outcome: "Converts interviews into structured feature vectors.",
    icon: "insights",
  },
  {
    title: "Composite Modeling & Calibration",
    description:
      "Feature vectors are normalized, scored, and benchmarked across roles and teams.",
    outcome: "Enables scalable, defensible evaluation infrastructure.",
    icon: "skills",
  },
];

