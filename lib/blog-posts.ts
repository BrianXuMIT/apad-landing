import { imageMaps } from "@/lib/image_maps";

export const siteUrl = "https://www.apadcode.com";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-traditional-live-coding-interviews-dont-scale",
    title: "Why Traditional Live Coding Interviews Don't Scale",
    description:
      "Human interviews offer depth but become slow, expensive, and inconsistent at scale. Here is why companies are rethinking them.",
    metaDescription:
      "Learn why traditional live coding interviews create hiring bottlenecks at scale and how AI-supported interview flows improve consistency and throughput.",
    image: imageMaps.blog.traditionalScale,
    publishedAt: "February 14, 2026",
    readTime: "4 min read",
    content: [
      "Live coding interviews were designed for depth, but they rely heavily on limited interviewer capacity. As hiring volume grows, scheduling overhead and interviewer fatigue quickly become bottlenecks.",
      "Even experienced interviewers can vary in questioning style, depth, and scoring calibration. That creates uneven candidate experiences and makes it harder for teams to compare signals fairly across a pipeline.",
      "Modern hiring teams are shifting toward structured AI-supported interview flows that preserve technical depth while removing coordination drag. The result is faster pre-screening, more consistent scoring, and better use of senior engineering time.",
    ],
  },
  {
    slug: "coding-tests-vs-real-interviews-whats-missing",
    title: "Coding Tests vs Real Interviews: What's Missing?",
    description:
      "Automated assessments filter candidates fast, but often miss reasoning, communication and real-world thinking.",
    metaDescription:
      "Explore the gap between coding tests and real interviews, and why modern hiring requires evaluating reasoning, communication, and engineering judgment.",
    image: imageMaps.blog.codingTestsVsInterviews,
    publishedAt: "February 14, 2026",
    readTime: "5 min read",
    content: [
      "Coding tests are excellent at quickly filtering for syntax fluency and baseline problem solving. But a final score alone rarely explains how a candidate reached the answer or whether they can communicate tradeoffs under pressure.",
      "In real interview settings, teams care about reasoning quality, debugging approach, and collaboration clarity. Those dimensions are often underrepresented in fixed-format assessments.",
      "A stronger process combines automated scale with interview-like dialogue. Candidates should explain decisions, respond to follow-up prompts, and show practical judgment in context.",
    ],
  },
  {
    slug: "how-ai-is-transforming-technical-hiring",
    title: "How AI Is Transforming Technical Hiring",
    description:
      "AI powered live interviews combine depth and scalability - rephrasing how modern teams evaluates engineers.",
    metaDescription:
      "See how AI-powered live interviews are transforming technical hiring with adaptive questioning, scalable execution, and structured decision-ready insights.",
    image: imageMaps.blog.aiTransformingHiring,
    publishedAt: "February 14, 2026",
    readTime: "4 min read",
    content: [
      "AI is changing technical hiring by making interview depth programmable. Instead of static question sets, systems can adapt follow-ups based on candidate responses and solution paths.",
      "This approach improves both throughput and signal quality. Teams can evaluate more candidates without sacrificing consistency, while still capturing communication style and engineering judgment.",
      "The most effective implementations pair adaptive interviews with structured summaries, so hiring teams can make decisions quickly with evidence they can align on.",
    ],
  },
  {
    slug: "reducing-interview-fatigue-without-compromising-quality",
    title: "Reducing Interview Fatigue Without Compromising Quality",
    description:
      "Discover how companies cut interview hours while maintaining high hiring standards.",
    metaDescription:
      "Understand practical strategies for reducing interviewer fatigue while maintaining high quality signals and fairness in engineering hiring.",
    image: imageMaps.blog.reducingInterviewFatigue,
    publishedAt: "February 14, 2026",
    readTime: "3 min read",
    content: [
      "Interview fatigue appears when a small group of engineers repeatedly conducts high-stakes evaluations. Over time, consistency declines and candidate experience can become uneven.",
      "Teams are reducing fatigue by moving repetitive screening tasks into automated interview workflows while reserving human interviews for high-context final rounds.",
      "This layered process improves focus for interviewers, shortens time-to-hire, and keeps quality bars high across the funnel.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
