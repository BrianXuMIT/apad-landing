export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 290,
    description: "Best for: Pre-screening technical candidates efficiently",
    features: [
      "AI-powered live coding interviews",
      "Real-time code execution sandbox",
      "Automated scoring & feedback",
      "Standard question library",
      "Candidate performance report",
      "Email support",
    ],
    highlighted: true,
  },
  {
    name: "Growth",
    monthly: 79,
    yearly: 790,
    description: "Best for: Scaling hiring without interviewer fatigue.",
    features: [
      "Custom interview workflows",
      "Role-based question sets",
      "Communication & reasoning evaluation",
      "Anti-cheating & monitoring tools",
      "Team collaboration dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthly: 119,
    yearly: 1190,
    description: "Best for: Large organizations hiring scale.",
    features: [
      "Unlimited parallel interviews",
      "Advanced AI evaluation models",
      "ATS integration",
      "Custom scoring frameworks",
      "Dedicated account manager",
      "SLA & Security compliance",
    ],
  },
];

