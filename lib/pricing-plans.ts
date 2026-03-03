export type BillingCycle = "monthly" | "annual";

export type PricingPlan = {
  key: "core" | "intelligence";
  name: string;
  bestFor: string;
  monthlyBilling: string;
  annualBilling: string;
  includedInterviewsMonthly: string;
  includedInterviewsAnnual: string;
  additionalInterviews: string;
  highlighted?: boolean;
};

export type PricingFeature = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: PricingFeatureCategory;
  core: boolean;
  intelligence: boolean;
};

export const pricingFeatureCategories = [
  { id: "foundation", label: "Foundation" },
  { id: "signal-extraction", label: "Signal Extraction" },
  { id: "intelligence-governance", label: "Intelligence & Governance" },
] as const;

export type PricingFeatureCategory = (typeof pricingFeatureCategories)[number]["id"];

export const pricingPlans: PricingPlan[] = [
  {
    key: "core",
    name: "Core Infrastructure",
    bestFor: "Teams replacing first-round technical interviews",
    monthlyBilling: "$199 / month",
    annualBilling: "$1,788 / year",
    includedInterviewsMonthly: "12 interviews per month",
    includedInterviewsAnnual: "180 interviews per year (pooled usage)",
    additionalInterviews: "$15 per interview",
  },
  {
    key: "intelligence",
    name: "Intelligence",
    bestFor: "Organizations building structured engineering hiring intelligence",
    monthlyBilling: "$499 / month",
    annualBilling: "$4,788 / year",
    includedInterviewsMonthly: "50 interviews per month",
    includedInterviewsAnnual: "600 interviews per year (pooled usage)",
    additionalInterviews: "$12 per interview",
    highlighted: true,
  },
];

export const pricingFeatures: PricingFeature[] = [
  {
    id: "human-in-loop",
    name: "Human-in-the-Loop Decision Support",
    shortName: "Human-in-the-Loop Support",
    description:
      "APADCode provides structured evaluation and decision support while final hiring decisions remain fully under human control, ensuring regulatory alignment, transparency, and responsible AI usage.",
    category: "foundation",
    core: true,
    intelligence: true,
  },
  {
    id: "ai-live-coding",
    name: "AI-Conducted Live Coding Interview",
    shortName: "AI Live Coding Interview",
    description:
      "Fully structured first-round technical interview conducted by AI, guiding candidates through clarification, approach discussion, coding, and wrap-up without requiring engineer involvement.",
    category: "foundation",
    core: true,
    intelligence: true,
  },
  {
    id: "adaptive-follow-up",
    name: "Adaptive Follow-Up Questions",
    shortName: "Adaptive Follow-Ups",
    description:
      "Real-time probing of candidate reasoning including trade-offs, complexity analysis, optimization opportunities, and edge-case discussion based on live responses.",
    category: "foundation",
    core: true,
    intelligence: true,
  },
  {
    id: "coding-environment",
    name: "Built-in Coding Environment",
    shortName: "Built-in Coding Workspace",
    description:
      "Browser-based coding workspace with structured interaction logging, revision tracking, and seamless execution flow requiring no installation.",
    category: "foundation",
    core: true,
    intelligence: true,
  },
  {
    id: "interview-replay",
    name: "Full Interview Replay",
    shortName: "Full Interview Replay",
    description:
      "Complete transcript, timestamped interaction history, and code evolution timeline enabling hiring teams to review reasoning progression and implementation decisions.",
    category: "foundation",
    core: true,
    intelligence: true,
  },
  {
    id: "reasoning-breakdown",
    name: "Structured Reasoning Breakdown",
    shortName: "Reasoning Breakdown",
    description:
      "Post-interview evaluation explaining how the candidate approached the problem, including strategy timing, complexity awareness, and iteration behavior.",
    category: "signal-extraction",
    core: true,
    intelligence: true,
  },
  {
    id: "core-signals",
    name: "Core Cognitive Signals (8-12 Metrics)",
    shortName: "Core Cognitive Signals",
    description:
      "Extraction of measurable reasoning behaviors such as strategy identification latency, naive solution rejection timing, clarification depth, hint reliance, probe alignment, and revision patterns.",
    category: "signal-extraction",
    core: true,
    intelligence: true,
  },
  {
    id: "cheating-safeguards",
    name: "AI-Assisted Cheating Safeguards",
    shortName: "Cheating Safeguards",
    description:
      "Detection of suspicious timing patterns, external AI-style responses, structured inconsistencies, and behavioral anomalies suggesting potential misuse of external assistance.",
    category: "signal-extraction",
    core: true,
    intelligence: true,
  },
  {
    id: "expanded-signals",
    name: "Expanded Cognitive Signals (15-20+ Metrics)",
    shortName: "Expanded Cognitive Signals",
    description:
      "Deeper behavioral modeling including alternative strategy evaluation, disruption recovery patterns, cognitive stability tracking, and advanced signal extraction.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "composite-scoring",
    name: "Composite Feature-Based Scoring",
    shortName: "Composite Feature Scoring",
    description:
      "Evaluation score derived from structured measurable reasoning signals rather than summary-based grading, designed for higher consistency and long-term predictive improvement.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "anomaly-detection",
    name: "Advanced Behavioral Anomaly Detection",
    shortName: "Advanced Anomaly Detection",
    description:
      "High-confidence AI misuse detection using cross-signal inconsistency modeling and longitudinal deviation analysis.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "benchmarking",
    name: "Company-Level Benchmarking",
    shortName: "Company Benchmarking",
    description:
      "Internal percentile ranking and candidate distribution insights based on accumulated interview data within the organization.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "role-calibration",
    name: "Role Calibration Controls",
    shortName: "Role Calibration Controls",
    description:
      "Ability to adjust evaluation emphasis based on role type and company-specific hiring standards.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "bias-monitoring",
    name: "Bias Monitoring Summary",
    shortName: "Bias Monitoring Summary",
    description:
      "Transparent evaluation logic with structured reasoning factors supporting compliance-sensitive hiring environments.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
  {
    id: "priority-support",
    name: "Priority Support",
    shortName: "Priority Support",
    description:
      "Priority response routing and support coordination for production hiring operations.",
    category: "intelligence-governance",
    core: false,
    intelligence: true,
  },
];

export const enterprisePlan = {
  title: "Enterprise",
  description:
    "Custom interview volume, API access, ATS integrations, advanced security requirements, dedicated support, and tailored compliance documentation available upon request.",
  ctaLabel: "Contact Sales",
  ctaHref: "/contact",
};
