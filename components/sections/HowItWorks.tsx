import React from "react";
import SectionLayout from "./SectionLayout";

type FeatureItem = {
  title: string;
  description: string;
  icon: "live" | "ai" | "insights" | "skills";
};

function FeatureIcon({ type }: { type: FeatureItem["icon"] }) {
  const gradientId = React.useId();
  const aiPaint0 = React.useId();
  const aiPaint1 = React.useId();
  const aiPaint2 = React.useId();

  if (type === "ai") {
    return (
      <svg
        width="88"
        height="92"
        viewBox="0 0 129 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M46.4977 2.9586C45.5406 0.517656 42.7776 -0.699837 40.4066 0.419323C31.7747 4.4937 24.0445 10.2863 17.698 17.4599C10.301 25.8209 4.99525 35.8189 2.21745 46.6312C-0.560359 57.4435 -0.730825 68.7609 1.72008 79.6519C4.17098 90.543 9.17317 100.696 16.315 109.276C23.4568 117.856 32.534 124.618 42.7996 129.004C53.0652 133.39 64.2257 135.276 75.3625 134.506C86.4994 133.736 97.2941 130.332 106.858 124.575C115.064 119.635 122.163 113.084 127.736 105.335C129.267 103.207 128.571 100.268 126.344 98.8844C124.118 97.5003 121.205 98.1964 119.652 100.309C114.888 106.789 108.879 112.276 101.962 116.441C93.6856 121.422 84.3446 124.368 74.7077 125.034C65.0707 125.7 55.4133 124.068 46.5302 120.273C37.6471 116.477 29.7924 110.627 23.6124 103.202C17.4324 95.7776 13.1039 86.9917 10.9831 77.5674C8.86224 68.1431 9.00975 58.3499 11.4135 48.9938C13.8172 39.6377 18.4083 30.9861 24.8091 23.7511C30.1592 17.7038 36.6456 12.7907 43.8827 9.28144C46.2419 8.13749 47.4548 5.39954 46.4977 2.9586Z"
          fill="#D9D9D9"
        />
        <path
          d="M46.4977 2.9586C45.5406 0.517656 42.7776 -0.699837 40.4066 0.419323C31.7747 4.4937 24.0445 10.2863 17.698 17.4599C10.301 25.8209 4.99525 35.8189 2.21745 46.6312C-0.560359 57.4435 -0.730825 68.7609 1.72008 79.6519C4.17098 90.543 9.17317 100.696 16.315 109.276C23.4568 117.856 32.534 124.618 42.7996 129.004C53.0652 133.39 64.2257 135.276 75.3625 134.506C86.4994 133.736 97.2941 130.332 106.858 124.575C115.064 119.635 122.163 113.084 127.736 105.335C129.267 103.207 128.571 100.268 126.344 98.8844C124.118 97.5003 121.205 98.1964 119.652 100.309C114.888 106.789 108.879 112.276 101.962 116.441C93.6856 121.422 84.3446 124.368 74.7077 125.034C65.0707 125.7 55.4133 124.068 46.5302 120.273C37.6471 116.477 29.7924 110.627 23.6124 103.202C17.4324 95.7776 13.1039 86.9917 10.9831 77.5674C8.86224 68.1431 9.00975 58.3499 11.4135 48.9938C13.8172 39.6377 18.4083 30.9861 24.8091 23.7511C30.1592 17.7038 36.6456 12.7907 43.8827 9.28144C46.2419 8.13749 47.4548 5.39954 46.4977 2.9586Z"
          fill={`url(#${aiPaint0})`}
        />
        <path
          d="M73.3772 37.9238C72.1309 41.784 72.1556 45.9421 73.4476 49.7872C74.7397 53.6323 77.2309 56.9616 80.5553 59.2859C83.8797 61.6102 87.862 62.807 91.917 62.7003C95.9719 62.5937 99.8858 61.1893 103.083 58.6934V90.4238H38.9138V37.9238H73.3772ZM71.0001 78.7572H91.4167V72.9238H71.0001V78.7572ZM50.3384 57.3751L57.1284 64.1738L50.3384 70.9726L54.4655 75.0938L65.3738 64.1738L54.4626 53.2538L50.3384 57.3751Z"
          fill="black"
        />
        <path
          d="M73.3772 37.9238C72.1309 41.784 72.1556 45.9421 73.4476 49.7872C74.7397 53.6323 77.2309 56.9616 80.5553 59.2859C83.8797 61.6102 87.862 62.807 91.917 62.7003C95.9719 62.5937 99.8858 61.1893 103.083 58.6934V90.4238H38.9138V37.9238H73.3772ZM71.0001 78.7572H91.4167V72.9238H71.0001V78.7572ZM50.3384 57.3751L57.1284 64.1738L50.3384 70.9726L54.4655 75.0938L65.3738 64.1738L54.4626 53.2538L50.3384 57.3751Z"
          fill={`url(#${aiPaint1})`}
        />
        <path
          d="M95.6604 39.5108L105.067 43.7574L95.6604 48.0012L91.4166 57.4074L87.1699 48.0012L77.7666 43.7574L87.1699 39.5108L91.4166 30.1074L95.6604 39.5108Z"
          fill="black"
        />
        <path
          d="M95.6604 39.5108L105.067 43.7574L95.6604 48.0012L91.4166 57.4074L87.1699 48.0012L77.7666 43.7574L87.1699 39.5108L91.4166 30.1074L95.6604 39.5108Z"
          fill={`url(#${aiPaint2})`}
        />
        <defs>
          <linearGradient
            id={aiPaint0}
            x1="0"
            y1="64.1738"
            x2="141"
            y2="64.1738"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
          <linearGradient
            id={aiPaint1}
            x1="38.9138"
            y1="64.1738"
            x2="103.083"
            y2="64.1738"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
          <linearGradient
            id={aiPaint2}
            x1="77.7666"
            y1="43.7574"
            x2="105.067"
            y2="43.7574"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="88"
      height="92"
      viewBox="0 0 129 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="64.1738"
          x2="141"
          y2="64.1738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C45FF" />
          <stop offset="1" stopColor="#0AAFF9" />
        </linearGradient>
      </defs>

      <path
        d="M46.4977 2.9586C45.5406 0.517656 42.7776 -0.699837 40.4066 0.419323C31.7747 4.4937 24.0445 10.2863 17.698 17.4599C10.301 25.8209 4.99525 35.8189 2.21745 46.6312C-0.560359 57.4435 -0.730825 68.7609 1.72008 79.6519C4.17098 90.543 9.17317 100.696 16.315 109.276C23.4568 117.856 32.534 124.618 42.7996 129.004C53.0652 133.39 64.2257 135.276 75.3625 134.506C86.4993 133.736 97.2941 130.332 106.858 124.575C115.064 119.635 122.163 113.084 127.736 105.335C129.267 103.207 128.571 100.268 126.344 98.8844C124.118 97.5003 121.205 98.1964 119.652 100.309C114.888 106.789 108.879 112.276 101.962 116.441C93.6856 121.422 84.3446 124.368 74.7077 125.034C65.0707 125.7 55.4133 124.068 46.5302 120.273C37.6471 116.477 29.7924 110.627 23.6124 103.202C17.4324 95.7776 13.1039 86.9917 10.9831 77.5674C8.86224 68.1431 9.00975 58.3499 11.4135 48.9938C13.8172 39.6377 18.4083 30.9861 24.8091 23.7511C30.1592 17.7038 36.6456 12.7907 43.8827 9.28144C46.2419 8.13749 47.4548 5.39954 46.4977 2.9586Z"
        fill={`url(#${gradientId})`}
      />

      {type === "live" ? (
        <g fill={`url(#${gradientId})`}>
          <circle cx="57" cy="58" r="9" />
          <circle cx="76" cy="61" r="7.5" />
          <path d="M41 84c0-8.3 6.7-15 15-15h2c8.3 0 15 6.7 15 15v5H41v-5Z" />
          <path d="M69 84c0-5.9 4.8-10.7 10.8-10.7h1.8c4.7 0 9 3 10.5 7.5L94 86H69v-2Z" />
          <path d="M88.8 44.2 92 50.7l7 .9-5 4.8 1.1 7-6.3-3.5-6.4 3.5 1.2-7-5.1-4.8 7-.9 3.3-6.5Z" />
        </g>
      ) : null}

      {type === "insights" ? (
        <>
          <path
            d="M35 92.5 53.5 69l20 22.5L88.8 74l11.2 10.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="35" cy="92.5" r="6.5" fill={`url(#${gradientId})`} />
          <circle cx="53.5" cy="69" r="6.5" fill={`url(#${gradientId})`} />
          <circle cx="73.5" cy="91.5" r="6.5" fill={`url(#${gradientId})`} />
          <circle cx="88.8" cy="74" r="6.5" fill={`url(#${gradientId})`} />
          <path
            d="M35.6 47.2 37.7 51.5l4.8.7-3.4 3.3.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.4-3.3 4.8-.7 2.2-4.3Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M58.4 36.5 61 42l5.9.9-4.2 4 1 5.9-5.3-2.9-5.3 2.9 1-5.9-4.3-4 6-.9 2.6-5.5Z"
            fill={`url(#${gradientId})`}
          />
        </>
      ) : null}

      {type === "skills" ? (
        <g fill={`url(#${gradientId})`}>
          <rect x="41" y="64" width="15" height="28" />
          <rect x="63" y="52" width="15" height="40" />
          <rect x="85" y="40" width="15" height="52" />
        </g>
      ) : null}
    </svg>
  );
}

const features: FeatureItem[] = [
  {
    title: "Live Coding Environment",
    description:
      "Candidates solve real problems in an executable coding sandbox just like a real interview.",
    icon: "live",
  },
  {
    title: "AI-Led Interview Flow",
    description:
      "APAD Code asks follow-up questions, explores alternatives, and adapts difficulty based on responses.",
    icon: "ai",
  },
  {
    title: "Actionable Insights",
    description:
      "Hiring teams receive structured insights not just pass/fail scores.",
    icon: "insights",
  },
  {
    title: "In-Depth Skill Evaluation",
    description:
      "Beyond correctness, it evaluates: Problem-solving approach, code quality, debugging mindset, communication clarity.",
    icon: "skills",
  },
];

export default function HowItWorks() {
  return (
    <SectionLayout
      badgeText="Human-level insight. AI-level scale."
      title="How It Works"
      description="Log-in. design skill-based tests, and let AI handle the rest-custom topics, question difficulty, timers, and result tracking - all in one place."
      decorations={
        <>
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />
        </>
      }
    >
      <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {features.map((item) => (
          <article
            key={item.title}
            className="mx-auto flex max-w-[620px] flex-col items-center text-center sm:flex-row sm:items-center sm:gap-5 sm:text-left"
          >
            <FeatureIcon type={item.icon} />
            <div className="mt-6 sm:mt-0">
              <h3 className="font-kanit text-[24px] leading-[1.1] text-[#272A32] lg:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[#2B2E3A] lg:text-[24px]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[980px] pt-6 sm:mt-16">
        <div className="pointer-events-none absolute left-1/2 top-[54%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]" />
        <div className="pointer-events-none absolute left-1/2 top-[54%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]" />
        <img
          src="https://res.cloudinary.com/dxboqivs9/image/upload/v1771004044/New_Project_2_s0muve.png"
          alt="Candidate engaging in AI interview"
          className="relative z-[2] mx-auto h-auto w-full max-w-[760px] object-contain"
        />
      </div>
    </SectionLayout>
  );
}
