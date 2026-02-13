import React from "react";

const Hero = () => {
  return (
    <section className="relative z-10 flex min-h-screen w-full items-center overflow-visible pt-24 font-kanit">
      {/* --- Background Blur Circles --- */}
      {/* Large Purple Glow behind images */}
      {/* Subtle Blue Glow bottom left */}
      <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#3B82F6]/10 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-40 right-[8%] h-[420px] w-[420px] rounded-full bg-[#A855F7]/45 blur-[150px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        {/* --- Left Content: Precise Typography --- */}
        <div className="z-10 flex flex-col gap-8">
          <p className="w-full max-w-[650px] bg-[linear-gradient(97deg,#000_4.98%,#8C45FF_63.11%)] bg-clip-text text-[44px] text-transparent [text-stroke:1px_black] [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] sm:text-[56px] lg:text-[68px]">
            AI-powered Interactive Coding Evaluation
          </p>
          <p className="h-auto w-full text-xl leading-[1.55em] text-[#000] sm:text-2xl">
            APAD Code is an AI-powered live coding interviewer that evaluates
            candidates like a human—without needing one.
          </p>
          <button className="w-fit gap-[21px] px-10 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-xl shadow-xl shadow-purple-200 hover:opacity-90 transition-all active:scale-95">
            Request Demo
          </button>
        </div>

        {/* --- Right Content: Image Stack with Connector --- */}
        <div className="relative mx-auto h-[470px] w-full max-w-[620px] sm:h-[560px] lg:h-[650px]">
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
