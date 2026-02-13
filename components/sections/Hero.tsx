import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white font-kanit overflow-hidden flex items-center pt-24">
      {/* --- Background Blur Circles --- */}
      {/* Large Purple Glow behind images */}
      {/* Subtle Blue Glow bottom left */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
        {/* --- Left Content: Precise Typography --- */}
        <div className="z-10 flex flex-col gap-8">
          <p className="font-kanit text-[68px] bg-clip-text text-transparent bg-[linear-gradient(97deg,#000_4.98%,#8C45FF_63.11%)] [text-stroke:1px_black] [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] w-[650px]">
            AI-powered Interactive Coding Evaluation
          </p>
          <p className="text-[#000] font-kanit text-2xl leading-[1.55em] w-full h-[91px]">
            APAD Code is an AI-powered live coding interviewer that evaluates
            candidates like a human—without needing one.
          </p>
          <br />
          <button className="w-fit gap-[21px] px-10 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-xl shadow-xl shadow-purple-200 hover:opacity-90 transition-all active:scale-95">
            Request Demo
          </button>
        </div>

        {/* --- Right Content: Image Stack with Connector --- */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center lg:justify-end pr-4">
          <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[#A855F788] rounded-full blur-[140px] z-1" />

          {/* TOP CARD (Interviewer) */}
          <div className="absolute w-3/4 z-10 -top-[12.5%] left-[18%]">
            <div className="relative p-2">
              <img
                src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946785/Subtract_fqfk4a.png"
                alt="AI Interviewer"
                className="w-full h-full object-cover"
              />
              {/* AI's Question Pill */}
              <div className="absolute top-3 left-[55%] bg-[#D8B4FE]/90 backdrop-blur-sm border-2 border-[#A855F7] px-6 py-2.5 rounded-[20px] shadow-lg text-center">
                <span className="text-black font-thin text-[24px]">
                  AI's Question
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM CARD (Candidate + L-Border) */}
          <div className="absolute bottom-4 top-1/2 left-1/2 w-[50.00%] z-20">
            <div className="relative p-2">
              <img
                src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946785/Subtract_1_yfk00w.png"
                alt="Candidate"
                className="object-cover"
              />

              {/* Best AI Tool Pill */}
              <div className="absolute -top-7 left-[45%] -right-[5%] bg-[#D8B4FE]/90 backdrop-blur-sm border-2 border-[#A855F7] px-6 py-2.5 rounded-[20px] shadow-lg">
                <span className="text-black font-thin text-[24px]">
                  Best AI Tool
                </span>
              </div>

              {/* Your Journey Pill */}
              <div className="absolute top-[38%] -left-20 bg-[#D8B4FE]/90 backdrop-blur-sm border-2 border-[#A855F7] px-6 py-2.5 rounded-[20px] shadow-lg">
                <span className="font-kanit text-black font-thin text-[24px]">
                  Your Journey
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
