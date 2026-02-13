import React from "react";

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-[20px] border border-[#4CA9FF] bg-white px-6 py-3 lg:rounded-[24px] lg:px-8 lg:py-3">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12.5299 7.57934C12.5131 7.53445 12.4777 7.49904 12.4328 7.48219L9.96542 6.55697C9.8218 6.50311 9.8218 6.29993 9.96542 6.24606L12.4328 5.32084C12.4777 5.304 12.5131 5.2686 12.5299 5.22371L13.4552 2.75632C13.5091 2.6127 13.7122 2.6127 13.7661 2.75632L14.6913 5.22371C14.7082 5.2686 14.7436 5.304 14.7885 5.32084L17.2558 6.24606C17.3995 6.29993 17.3995 6.50311 17.2558 6.55697L14.7885 7.48219C14.7436 7.49904 14.7082 7.53445 14.6913 7.57934L13.7661 10.0467C13.7122 10.1903 13.5091 10.1903 13.4552 10.0467L12.5299 7.57934ZM6.6211 13.4882C6.60425 13.446 6.57081 13.4126 6.52867 13.3957L3.30736 12.1072C3.16887 12.0518 3.16887 11.8558 3.30736 11.8004L6.52867 10.5118C6.57081 10.495 6.60425 10.4616 6.6211 10.4194L7.90964 7.19808C7.96503 7.05959 8.16103 7.05959 8.21642 7.19808L9.50496 10.4194C9.52181 10.4616 9.55525 10.495 9.59739 10.5118L12.8187 11.8004C12.9572 11.8558 12.9572 12.0518 12.8187 12.1072L9.59739 13.3957C9.55525 13.4126 9.52181 13.446 9.50496 13.4882L8.21642 16.7095C8.16103 16.848 7.96503 16.848 7.90964 16.7095L6.6211 13.4882Z"
          fill="#111216"
        />
      </svg>
      <span className="font-kanit text-sm font-light text-[#2A2D38] lg:text-base">
        {text}
      </span>
    </div>
  );
}

function Label({ text, className }: { text: string; className: string }) {
  return (
    <span
      className={`absolute z-10 inline-flex whitespace-nowrap rounded-[26px] border border-[#7A49E8] bg-[#C8C8C8]/95 px-4 py-2 font-kanit text-sm font-normal leading-none text-[#1B1E26] shadow-[0_2px_0_rgba(0,0,0,0.08)] lg:rounded-[34px] lg:px-7 lg:py-3 lg:text-[30px] ${className}`}
    >
      {text}
    </span>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-[6px] font-kanit text-[40px] leading-none text-[#111216]">
        ✦
      </span>
      <div>
        <h3 className="font-kanit text-[40px] leading-[1.18] font-normal text-[#262932]">
          {title}
        </h3>
        <p className="mt-3 font-kanit text-[24px] leading-[1.42] text-[#2F3240]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyTeamsChoose() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-[-140px] top-[22%] h-[380px] w-[380px] rounded-full bg-[#9D4DFF]/30 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-130px] bottom-[9%] h-[330px] w-[330px] rounded-full bg-[#9A4DFF]/30 blur-[115px]" />

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto">
          <SectionBadge text="Human-level evaluation, delivered by AI" />
        </div>

        <h2 className="mt-12 text-center font-kanit text-[38px] font-medium text-[#111216] sm:text-[48px] lg:mt-14 lg:text-[66px]">
          Why Teams Choose APADCode
        </h2>
        <p className="mx-auto mt-10 max-w-[980px] text-center font-kanit text-base leading-relaxed text-[#2E3240] sm:text-lg lg:mt-12 lg:text-[22px]">
          Everything hiring teams need to interview better, faster, and fairer
          without trade-offs.
        </p>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="space-y-11">
            <Feature
              title="Human-like depth, at machine scale"
              description="Conduct thousands of interviews without interviewer fatigue."
            />
            <Feature
              title="Faster, smarter pre-screening"
              description="Spend human time only on candidates who truly deserve it."
            />
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770979507/Subtract_rdoylk.png"
              alt="AI robot with interview panels"
              className="w-full rounded-[22px] object-cover"
            />
            <Label
              text="Real-Time Evaluation"
              className="left-[-6%] top-[8%]"
            />
            <Label text="AI Scale" className="right-[-8%] top-[35%]" />
            <Label text="Bias free" className="right-[-4%] bottom-[12%]" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[620px] lg:order-1">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770979516/Subtract_1_ubgq3k.png"
              alt="AI robot with skill signals"
              className="w-full rounded-[22px] object-cover"
            />
            <Label text="Human Depth" className="left-[-4%] top-[16%]" />
            <Label
              text="Smart Shortlisting"
              className="left-[58%] top-[-2%] -translate-x-1/2"
            />
            <Label
              text="True Skill Signals"
              className="left-[58%] bottom-[8%] -translate-x-1/2"
            />
          </div>

          <div className="space-y-11 lg:order-2">
            <Feature
              title="Consistent & unbiased evaluation"
              description="Every candidate is assessed with the same depth and fairness."
            />
            <Feature
              title="Designed for real-world hiring"
              description="Not puzzles. Not trick questions. Real skills that matter on the job."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
