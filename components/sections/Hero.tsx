import React from "react";

const Hero = () => {
  return (
    <section className="relative z-10 flex min-h-screen w-full items-center overflow-visible font-kanit ">
      {/* --- Background Blur Circles --- */}
      {/* Large Purple Glow behind images */}
      {/* Subtle Blue Glow bottom left */}
      <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#3B82F6]/10 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-40 right-[8%] h-[420px] w-[420px] rounded-full bg-[#A855F7]/45 blur-[150px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        {/* --- Left Content: Precise Typography --- */}
        <div className="z-10 flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <p className="w-full max-w-[650px] bg-[linear-gradient(97deg,#000_4.98%,#8C45FF_63.11%)] bg-clip-text text-[40px] leading-[1.14] text-transparent [text-stroke:1px_black] [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] sm:text-[52px] lg:text-[68px]">
            AI-powered Interactive Coding Evaluation
          </p>
          <p className="h-auto w-full max-w-[656px] leading-[1.55] text-[#000] text-[24px] lg:text-[32px]">
            World’s first AI system designed to conduct human-like live coding
            interviews without interviewers.
          </p>
          <button className="w-fit rounded-[18px] border border-[#8C45FF] bg-gradient-to-r from-[#8C45FF] to-[#0AAFF9] px-9 py-3 text-[22px] font-medium text-white shadow-xl shadow-purple-200 transition-all hover:opacity-90 active:scale-95 lg:px-10 lg:py-2.5 lg:text-[25px]">
            Request Demo
          </button>
        </div>

        {/* --- Right Content: Image Stack with Connector --- */}
        <div className="relative mx-auto h-[380px] w-full max-w-[620px] sm:h-[500px] lg:h-[650px]">
          <div className="absolute right-[-12%] top-[14%] h-[500px] w-[500px] rounded-full bg-[#A855F788] blur-[130px]" />
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1771003668/New_Project_1_in65ne.png"
            alt="APADCode interview visual"
            className="relative z-10 mx-auto h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
