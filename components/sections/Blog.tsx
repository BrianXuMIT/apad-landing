import React from "react";
import SectionLayout from "./SectionLayout";

type BlogPost = {
  title: string;
  description: string;
  image: string;
  hovered?: boolean;
};

const posts: BlogPost[] = [
  {
    title: "Why Traditional Live Coding Interview Don't Scale",
    description:
      "Human interviews offer depth but become slow, expensive, and inconsistent at scale. Here is why companies are rethinking them.",
    image:
      "https://res.cloudinary.com/dxboqivs9/image/upload/v1770982380/Image51_vjsg8n.png",
    hovered: true,
  },
  {
    title: "Coding Tests vs Real Interviews: What's missing?",
    description:
      "Automated assessments filter candidates fast, but often missing reasoning, communication and real-world thinking.",
    image:
      "https://res.cloudinary.com/dxboqivs9/image/upload/v1770982394/Image48_yqtejv.png",
  },
  {
    title: "How AI Is Transforming Technical Hiring",
    description:
      "AI powered live interviews combine depth and scalability - rephrasing how modern teams evaluates engineers.",
    image:
      "https://res.cloudinary.com/dxboqivs9/image/upload/v1770982396/Image50_jtixd0.png",
  },
  {
    title: "Reducing Interview Fatigue Without Compromising Quality",
    description:
      "Discover how companies cut interview hours while maintaining high hiring standards.",
    image:
      "https://res.cloudinary.com/dxboqivs9/image/upload/v1770982395/Image49_ijv3jd.png",
  },
];

function ArrowIcon({ active }: { active?: boolean }) {
  const gradientId = React.useId();

  return (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[49px] w-[49px] shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.1428 45.3806C45.7423 45.3453 45.3722 45.1525 45.1138 44.8445C44.8553 44.5365 44.7297 44.1385 44.7645 43.738L46.3154 26.0117L21.2272 47.0632C20.9189 47.3218 20.5206 47.4474 20.1197 47.4124C19.7189 47.3773 19.3484 47.1844 19.0897 46.8762C18.8311 46.568 18.7055 46.1696 18.7406 45.7688C18.7756 45.3679 18.9685 44.9974 19.2767 44.7388L44.3649 23.6873L26.6386 22.1364C26.4352 22.1259 26.2359 22.0744 26.0528 21.9851C25.8696 21.8959 25.7063 21.7706 25.5726 21.6169C25.4389 21.4631 25.3376 21.2841 25.2746 21.0903C25.2116 20.8965 25.1883 20.6921 25.2061 20.4891C25.2238 20.2861 25.2823 20.0888 25.378 19.9089C25.4736 19.7291 25.6046 19.5703 25.7629 19.4421C25.9213 19.3139 26.1038 19.2189 26.2997 19.1628C26.4956 19.1067 26.7007 19.0906 26.9029 19.1156L48.2771 20.9856C48.6776 21.0208 49.0477 21.2137 49.3061 21.5216C49.5646 21.8296 49.6902 22.2276 49.6554 22.6281L47.7854 44.0023C47.7501 44.4028 47.5573 44.7729 47.2493 45.0313C46.9413 45.2898 46.5433 45.4154 46.1428 45.3806Z"
        fill={active ? "white" : `url(#${gradientId})`}
      />
      {!active && (
        <defs>
          <linearGradient
            id={gradientId}
            x1="49.2935"
            y1="21.5066"
            x2="19.0772"
            y2="46.8612"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C45FF" />
            <stop offset="1" stopColor="#0AAFF9" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}

function ArrowButton({ active }: { active?: boolean }) {
  return (
    <button
      className={[
        "group/arrow flex h-[84px] w-[84px] items-center justify-center rounded-[42px] p-2 transition-all duration-200 active:scale-95",
        active
          ? "bg-gradient-to-r from-[#8C45FF] to-[#0AAFF9] shadow-[0_8px_22px_rgba(123,73,232,0.35)]"
          : "border border-[#8C45FF] bg-transparent hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#0AAFF9] hover:shadow-[0_8px_22px_rgba(123,73,232,0.30)]",
      ].join(" ")}
      aria-label="Read article"
      type="button"
    >
      {active ? (
        <ArrowIcon active />
      ) : (
        <>
          <span className="group-hover/arrow:hidden">
            <ArrowIcon />
          </span>
          <span className="hidden group-hover/arrow:block">
            <ArrowIcon active />
          </span>
        </>
      )}
    </button>
  );
}

export default function Blog() {
  return (
    <SectionLayout
      badgeText="Insights on the Future of Hiring"
      title="Blog"
      description="Deep drive into AI interviews, technical screening, and modern hiring strategies"
      decorations={
        <>
          <div className="pointer-events-none absolute left-[-130px] bottom-[10%] h-[320px] w-[320px] rounded-full bg-[#7A3BFF]/28 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-130px] top-[28%] h-[340px] w-[340px] rounded-full bg-[#A14DFF]/30 blur-[120px]" />
        </>
      }
    >
      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:gap-y-14 items-stretch">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex h-full max-w-[480px] flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full rounded-tr-[32px] object-cover"
            />
            <div className="flex flex-col flex-1 shadow-[0_0_0_1px_rgba(134,98,255,0.20),0_0_18px_rgba(120,88,255,0.16)] rounded-b-[48px] p-6">
              <h3 className="mt-4 font-kanit text-[24px] font-light leading-[1.35] text-[#151925] ">
                {post.title}
              </h3>
              <p className="mt-3 font-kanit text-[16px] font-light leading-[1.45] text-[#2B2E3A]">
                {post.description}
              </p>
              <div className="mt-auto pt-6">
                <ArrowButton />
              </div>
              {/*  */}
            </div>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
