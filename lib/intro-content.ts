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
    id: "replacement",
    heading: "Replace first-round interviews",
    blurb:
      "Conduct live, adaptive technical interviews without scheduling human screeners or sacrificing depth.",
    detailTitle: "One interview. Structured evaluation.",
    detailCopy: [
      "APADCode replaces fragmented phone screens with a single AI-led session that captures coding ability, reasoning process, and communication in one structured flow.",
      "Hiring teams receive decision-ready summaries and structured signals without adding coordination overhead to their workflow.",
    ],
    signals: ["Live Orchestration", "Structured Capture", "Decision-Ready Output"],
  },
  {
    id: "cognitive-signals",
    heading: "Extract structured cognitive signals",
    blurb:
      "Transform live interview interaction into measurable reasoning features not just outcome-based scores.",
    detailTitle: "From conversation to feature vectors.",
    detailCopy: [
      "Each session generates structured metrics such as strategy identification latency, constraint awareness, complexity reasoning, and iteration behavior.",
      "These signals create a behavioral profile that goes beyond code correctness and surface-level rubric grading.",
    ],
    signals: ["Strategy Modeling", "Complexity Awareness", "Iteration Behavior"],
  },
  {
    id: "architecture",
    heading: "Two-engine evaluation architecture",
    blurb:
      "Separate real-time interview control from asynchronous cognitive intelligence modeling.",
    detailTitle: "Execution layer. Intelligence layer.",
    detailCopy: [
      "The Interview Control Engine manages live interaction and adaptive probing, while the Cognitive Intelligence Engine processes structured logs into behavioral feature vectors.",
      "This separation ensures scalable performance, transparent evaluation logic, and long-term defensibility.",
    ],
    signals: ["Interview Control Engine", "Cognitive Intelligence Engine", "Structured Feature Store"],
  },
  {
    id: "compounding",
    heading: "Compounding evaluation intelligence",
    blurb:
      "Structured behavioral data accumulates over time, strengthening signal quality and calibration.",
    detailTitle: "Data that improves with scale.",
    detailCopy: [
      "As interview volume grows, feature distributions stabilize and enable benchmarking, calibration, and emerging predictive correlations.",
      "APADCode becomes not just an interview tool, but a continuously improving evaluation intelligence infrastructure.",
    ],
    signals: ["Benchmarking Potential", "Signal Calibration", "Predictive Modeling"],
  },
];

