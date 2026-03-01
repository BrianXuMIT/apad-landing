export type ComparisonTone = "positive" | "neutral" | "negative";

export type ComparisonCompany = {
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
};

export type ComparisonCell = {
  value: string;
  tone: ComparisonTone;
};

export type ComparisonRow = {
  feature: string;
  values: Record<string, ComparisonCell>;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  avatarInitials: string;
  contactEmail: string;
};

export const comparisonCompanies: ComparisonCompany[] = [
  {
    id: "apadcode",
    name: "APADCode",
    description: "AI-led technical interviewing",
    highlighted: true,
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    description: "Coding tests and interview tools",
  },
  {
    id: "codesignal",
    name: "CodeSignal",
    description: "Assessments and signal benchmarks",
  },
  {
    id: "coderpad",
    name: "CoderPad",
    description: "Live coding environment",
  },
  {
    id: "hirevue",
    name: "HireVue",
    description: "Video interview intelligence",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Live Coding",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "✅", tone: "positive" },
      codesignal: { value: "✅", tone: "positive" },
      coderpad: { value: "✅", tone: "positive" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
  {
    feature: "Adaptive AI Probing",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "Limited", tone: "neutral" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "Limited", tone: "neutral" },
    },
  },
  {
    feature: "Structured Stage Control",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
  {
    feature: "Outcome-Based Scoring",
    values: {
      apadcode: { value: "Secondary", tone: "neutral" },
      hackerrank: { value: "✅", tone: "positive" },
      codesignal: { value: "✅", tone: "positive" },
      coderpad: { value: "Limited", tone: "neutral" },
      hirevue: { value: "Limited", tone: "neutral" },
    },
  },
  {
    feature: "LLM Rubric Scoring",
    values: {
      apadcode: { value: "Transitional", tone: "neutral" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "Limited", tone: "neutral" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "✅", tone: "positive" },
    },
  },
  {
    feature: "Structured Cognitive Feature Extraction",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
  {
    feature: "Feature Vector Output",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
  {
    feature: "Behavioral Quantification",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "Limited", tone: "neutral" },
    },
  },
  {
    feature: "Predictive Modeling (Roadmap)",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "Limited", tone: "neutral" },
    },
  },
  {
    feature: "Human-in-the-loop Required",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "N/A", tone: "neutral" },
      codesignal: { value: "N/A", tone: "neutral" },
      coderpad: { value: "N/A", tone: "neutral" },
      hirevue: { value: "Limited", tone: "neutral" },
    },
  },
  {
    feature: "Explainable Feature-Level Metrics",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
  {
    feature: "Compounding Cognitive Dataset",
    values: {
      apadcode: { value: "✅", tone: "positive" },
      hackerrank: { value: "❌", tone: "negative" },
      codesignal: { value: "❌", tone: "negative" },
      coderpad: { value: "❌", tone: "negative" },
      hirevue: { value: "❌", tone: "negative" },
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We’ve been partnering with APADCode for the past few months. What stood out wasn’t just the coding itself, but how the interview actually flows. You get to see how candidates think, rather than just blindly trusting what they submit. We also very liked the detailed dashboard and the post-interview breakdown. After running it in parallel with our traditional human first rounds for number of candidates, we decided to move several key stacks over to APADCode for initial screening. Of course, it doesn’t replace our full interview process or final rounds, but it gives us much stronger signal before that stage. Looking forward to building more with the team",
    name: "Joseph Mitch",
    role: "CTO",
    company: "KeY2Moon",
    companyUrl: "https://key2moon.com/",
    location: "Austin, Texas, US",
    avatarInitials: "JM",
    contactEmail: "joseph@key2moon.com",
  },
  {
    quote:
      "With traditional non-human pre-screening tools, the lack of explainability and poor depth meant our engineers (like myself) still had to stay heavily involved in early interviews anyway. After running a thorough a/b on our side with them, we all came to the same conclusion that apadcode can absolutely replace the first-round candidate tech screening. Let's hope it is going to dramatically reduce our engineers' interview load and overall hiring costs & time.",
    name: "Robin Caballero",
    role: "Senior Engineer",
    company: "KeY2Moon",
    companyUrl: "https://key2moon.com/",
    location: "Manila, Philippines",
    avatarInitials: "RC",
    contactEmail: "robinc@key2moon.com",
  },
  {
    quote:
      "Smart. Forward-thinking. Extremely fast execution. We’ve really enjoyed working with the APADCode team, and we’re confident they’re building something that could shape the future of technical hiring. Excited to be part of this journey.",
    name: "James Wilson",
    role: "CEO",
    company: "Webpoint Solutions",
    companyUrl: "https://webpoint.io/",
    location: "Covington, Georgia, US",
    avatarInitials: "JW",
    contactEmail: "james.wilson@webpointsolutions.com",
  },
];
