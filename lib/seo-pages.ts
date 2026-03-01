export type SeoPageSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoLandingPage = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: SeoPageSection[];
};

const solutionPageBase = "/solutions";

export const solutionLandingPages: SeoLandingPage[] = [
  {
    slug: "ai-coding-interview-platform",
    path: `${solutionPageBase}/ai-coding-interview-platform`,
    title: "AI Coding Interview Platform",
    metaDescription:
      "APADCode is an AI coding interview platform for structured live technical interviews with consistent scoring and decision-ready evidence.",
    h1: "AI Coding Interview Platform for Evidence-Based Hiring",
    intro:
      "APADCode helps hiring teams run live coding interviews with adaptive questioning, structured scoring, and clear decision evidence.",
    sections: [
      {
        heading: "Interview Depth Without Interviewer Bottlenecks",
        paragraphs: [
          "Traditional technical screening often creates scheduling pressure and inconsistent interview quality. APADCode delivers an AI-led interview flow that adapts to candidate responses while preserving a consistent evaluation framework.",
          "Teams can evaluate real-time reasoning, communication, and code quality without requiring every early-stage interview to be run manually by engineering staff.",
        ],
      },
      {
        heading: "Consistent Scoring Across Roles and Teams",
        paragraphs: [
          "Every candidate is assessed with the same rubric dimensions and evidence trail. This reduces evaluator drift and helps cross-functional hiring teams align faster on next-step decisions.",
        ],
        bullets: [
          "Live coding in an executable environment",
          "Adaptive technical follow-up questions",
          "Structured score outputs and written summaries",
          "Faster shortlist decisions with clearer signals",
        ],
      },
    ],
  },
  {
    slug: "technical-screening-automation",
    path: `${solutionPageBase}/technical-screening-automation`,
    title: "Technical Screening Automation",
    metaDescription:
      "Automate technical screening with APADCode using AI-led live coding interviews, consistent evaluation standards, and faster candidate shortlisting.",
    h1: "Technical Screening Automation for Modern Engineering Hiring",
    intro:
      "APADCode automates early technical interviews while preserving interview quality, candidate context, and evaluation consistency.",
    sections: [
      {
        heading: "Reduce Manual Screening Work",
        paragraphs: [
          "Recruiting teams frequently depend on time-consuming phone screens and fragmented coding tests. APADCode replaces this with one structured interview flow that captures both technical output and communication quality.",
          "By automating early-stage technical interviews, engineering teams can spend human interview time where it adds the most value.",
        ],
      },
      {
        heading: "Designed for Operational Hiring Efficiency",
        paragraphs: [
          "Automation only helps when outputs are reliable. APADCode combines standardized criteria with role-relevant prompts so teams receive comparable, reviewable candidate signals.",
        ],
        bullets: [
          "Consistent interview quality at scale",
          "Lower interviewer fatigue in high-volume hiring",
          "Faster handoff from recruiting to hiring managers",
          "Better decision speed with less scheduling overhead",
        ],
      },
    ],
  },
  {
    slug: "engineering-hiring-assessment",
    path: `${solutionPageBase}/engineering-hiring-assessment`,
    title: "Engineering Hiring Assessment",
    metaDescription:
      "APADCode provides engineering hiring assessment with live coding, reasoning analysis, communication signals, and actionable recommendations.",
    h1: "Engineering Hiring Assessment That Reflects Real Work",
    intro:
      "APADCode assesses engineering candidates through live, adaptive interviews that reveal how they solve problems, communicate, and make tradeoffs.",
    sections: [
      {
        heading: "Assess More Than Final Answers",
        paragraphs: [
          "Strong engineering hiring assessments capture approach, not just output. APADCode evaluates debugging behavior, design reasoning, and communication clarity during the interview process.",
          "This produces a more complete picture of on-the-job readiness than puzzle-only or static test formats.",
        ],
      },
      {
        heading: "Actionable Evidence for Hiring Decisions",
        paragraphs: [
          "Interview outputs are structured for decision meetings: what the candidate did well, where risks exist, and which signals drove recommendation confidence.",
        ],
        bullets: [
          "Problem-solving path visibility",
          "Communication and reasoning signal capture",
          "Rubric-aligned recommendations",
          "Faster and more defensible hiring decisions",
        ],
      },
    ],
  },
  {
    slug: "live-coding-interview-tool",
    path: `${solutionPageBase}/live-coding-interview-tool`,
    title: "Live Coding Interview Tool",
    metaDescription:
      "Use APADCode as a live coding interview tool with AI-led follow-ups, executable tasks, and structured technical hiring insights.",
    h1: "Live Coding Interview Tool Built for Hiring Teams",
    intro:
      "APADCode gives teams a live coding interview tool that combines realistic coding tasks with adaptive technical conversation and consistent scoring.",
    sections: [
      {
        heading: "Real-Time Interviews With Practical Signal",
        paragraphs: [
          "Candidates work in an executable coding environment while APADCode adapts interview depth based on responses. This reveals practical engineering behavior under realistic constraints.",
          "Teams gain visibility into code quality, decision-making, and communication instead of relying only on auto-graded correctness.",
        ],
      },
      {
        heading: "Operationally Ready for Growing Teams",
        paragraphs: [
          "As hiring volume grows, interview consistency becomes harder to maintain. APADCode keeps interview structure stable while scaling across roles and hiring pipelines.",
        ],
        bullets: [
          "Adaptive live coding flow",
          "Consistent criteria across candidates",
          "Structured summaries for faster review",
          "Improved candidate screening throughput",
        ],
      },
    ],
  },
];

export function getSolutionPageBySlug(slug: string): SeoLandingPage | null {
  return solutionLandingPages.find((page) => page.slug === slug) ?? null;
}
