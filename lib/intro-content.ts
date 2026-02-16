export type IntroBlock = {
  id: string;
  heading: string;
  blurb: string;
  detailTitle: string;
  detailCopy: string[];
  signals: string[];
};

export const introBlocks: IntroBlock[] = [
  {
    id: "shortlist",
    heading: "Get to a shortlist faster",
    blurb:
      "Review the results and move candidates to the next step without scheduling another phone screen.",
    detailTitle: "One interview. Complete signal.",
    detailCopy: [
      "APADCode replaces fragmented technical screens with a single, AI-led interview that captures coding skill, reasoning depth, and communication all in one structured experience.",
      "Hiring teams get rich transcripts, decision summaries, and calibrated scores they can trust, without adding time to their schedule.",
    ],
    signals: ["Reasoning Depth", "Communication Clarity", "Code Quality"],
  },
  {
    id: "smarter",
    heading: "Run smarter interviews",
    blurb:
      "The expert-trained AI interviewer gathers the exact insights your hiring managers need so they can spend time going deep, not screening.",
    detailTitle: "Decisions with context, not guesswork.",
    detailCopy: [
      "Each session adapts in real time based on candidate responses, then captures clear evidence of skill progression and tradeoff thinking.",
      "Recruiters and hiring managers receive structured summaries that surface strengths, gaps, and recommendation confidence in minutes.",
    ],
    signals: ["Adaptive Follow-ups", "Evidence Trail", "Decision Confidence"],
  },
  {
    id: "problem-solving",
    heading: "Evaluate real problem-solving",
    blurb:
      "See how candidates think, communicate, and adapt in real time not just whether they reached the right answer.",
    detailTitle: "See how engineers actually solve.",
    detailCopy: [
      "Candidates work through realistic tasks while APADCode tracks strategy shifts, debugging patterns, and architecture decisions.",
      "You get a deeper read on practical ability, so interview outcomes map to on-the-job performance instead of puzzle memorization.",
    ],
    signals: ["Approach Quality", "Tradeoff Thinking", "Debugging Process"],
  },
  {
    id: "consistent",
    heading: "Consistent, bias-aware screening",
    blurb:
      "Every candidate gets the same high-quality interview experience, evaluated with consistent criteria across roles and teams.",
    detailTitle: "Fairness built into every session.",
    detailCopy: [
      "Standardized scoring frameworks and rubric-based analysis keep evaluations aligned across candidates, teams, and hiring cycles.",
      "Organizations reduce interviewer variability while maintaining transparency into how every recommendation was produced.",
    ],
    signals: ["Rubric Consistency", "Bias Controls", "Cross-team Alignment"],
  },
];

