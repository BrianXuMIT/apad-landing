import React from "react";

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

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-[16px] border border-[#B39BFF] bg-white px-4 py-2 text-xs text-[#5A5D72] sm:gap-3 sm:px-5 sm:text-sm">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.77095 5.30554C8.75916 5.27412 8.73438 5.24934 8.70297 5.23755L6.97679 4.59024C6.87626 4.55254 6.87626 4.41026 6.97679 4.37256L8.70297 3.72525C8.73438 3.71346 8.75916 3.68868 8.77095 3.65727L9.41826 1.93109C9.45596 1.83056 9.59824 1.83056 9.63594 1.93109L10.2833 3.65727C10.295 3.68868 10.3198 3.71346 10.3512 3.72525L12.0774 4.37256C12.1779 4.41026 12.1779 4.55254 12.0774 4.59024L10.3512 5.23755C10.3198 5.24934 10.295 5.27412 10.2833 5.30554L9.63594 7.03171C9.59824 7.13225 9.45596 7.13225 9.41826 7.03171L8.77095 5.30554ZM4.63473 9.44175C4.62295 9.41222 4.59953 9.3888 4.57003 9.37702L2.31511 8.47505C2.2182 8.43628 2.2182 8.2991 2.31511 8.26033L4.57003 7.35836C4.59953 7.34658 4.62295 7.32316 4.63473 7.29367L5.5367 5.03874C5.57547 4.94184 5.71265 4.94184 5.75142 5.03874L6.65339 7.29367C6.66517 7.32316 6.68859 7.34658 6.71809 7.35836L8.97301 8.26033C9.06992 8.2991 9.06992 8.43628 8.97301 8.47505L6.71809 9.37702C6.68859 9.3888 6.66517 9.41222 6.65339 9.44175L5.75142 11.6966C5.71265 11.7935 5.57547 11.7935 5.5367 11.6966L4.63473 9.44175Z"
          fill="#111216"
        />
      </svg>
      <span className="font-kanit">Insights on the Future of Hiring</span>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#8C45FF]/35 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-[24%] h-[320px] w-[320px] rounded-full bg-[#A14DFF]/30 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <Badge />
          <h2 className="mt-6 font-kanit text-4xl font-medium text-[#111216]">
            Blog
          </h2>
          <p className="mt-4 text-center font-kanit text-sm text-[#1F2430] sm:text-base">
            Deep drive into AI interviews, technical screening, and modern
            hiring strategies
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:gap-y-14">
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
              <h3 className="mt-4 font-kanit text-[24px] font-light leading-[1.35] text-[#151925] ">
                {post.title}
              </h3>
              <p className="mt-3 font-kanit text-[16px] font-light leading-[1.45] text-[#2B2E3A]">
                {post.description}
              </p>
              <div className="mt-auto pt-6">
                <ArrowButton />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
