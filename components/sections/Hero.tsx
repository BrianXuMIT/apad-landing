import React from "react";
import AnimatedBorderButton from "../ui/AnimatedBorderButton";

const Hero = () => {
  return (
    <section className="relative z-10 mb-10 flex min-h-screen w-full items-center overflow-visible font-kanit px-4 pt-16 sm:px-6 sm:pt-[100px] lg:mb-16 lg:px-12">
      {/* --- Background Blur Circles --- */}
      {/* Large Purple Glow behind images */}
      {/* Subtle Blue Glow bottom left */}
      {/* <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#3B82F6]/10 blur-[120px] -z-10" /> */}
      {/* <div className="pointer-events-none absolute -bottom-40 right-[8%] h-[420px] w-[420px] rounded-full bg-[#A855F7]/45 blur-[150px]" /> */}

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* --- Left Content: Precise Typography --- */}
        <div className="z-10 flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <p className="w-full max-w-[650px] bg-[linear-gradient(97deg,#000_4.98%,#8C45FF_63.11%)] bg-clip-text text-[40px] leading-[1.14] text-transparent [text-stroke:1px_black] [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] sm:text-[52px] lg:text-[68px]">
            AI-powered Interactive Coding Evaluation
          </p>
          <p className="h-auto w-full max-w-[656px] leading-[1.55] text-[#000] text-[24px] lg:text-[32px]">
            World’s first AI system designed to conduct human-like live coding
            interviews without interviewers.
          </p>
          <AnimatedBorderButton
            className="mt-0 w-fit overflow-visible rounded-[20px] p-0 shadow-[0_12px_28px_rgba(109,86,255,0.28),0_0_14px_rgba(45,168,255,0.14)] transition-all duration-300 hover:shadow-[0_18px_38px_rgba(109,86,255,0.42),0_0_28px_rgba(45,168,255,0.30)] [&>span:nth-child(1)]:hidden [&>span:nth-child(2)]:hidden lg:mt-16"
            innerClassName="h-[56px] rounded-[19px] border border-[#8C45FF]/55 px-8 font-kanit text-[20px] font-medium tracking-[0.01em] transition-all duration-300 hover:brightness-105 lg:h-[60px] lg:px-10 lg:text-[24px]"
          >
            Request Demo
          </AnimatedBorderButton>
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
