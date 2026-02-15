import React from "react";
import AnimatedBorderButton from "../ui/AnimatedBorderButton";

const speakerImageUrl =
  "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192572/footer_woman_image_ijpdcu.png";

export default function Contact() {
  return (
    <section className="w-full p-4 sm:px-6 sm:pb-20 lg:px-10 lg:py-16 overflow-y-hidden overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative rounded-[24px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] px-6 pt-7 sm:px-10 sm:pt-10 lg:px-12 lg:pt-11 lg:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-stretch">
            <div className="relative z-[2] max-w-[560px] lg:pr-6">
              <h2 className="font-kanit text-3xl font-medium leading-[1.2] text-white sm:text-4xl lg:text-5xl">
                <span className="block">Ready to Revolutionize Hiring?</span>
              </h2>
              <p className="mt-5 font-kanit text-sm leading-relaxed text-[#EEE8FF] sm:text-base lg:text-lg">
                Elevate your hiring process with APAD code&apos;s AI-powered
                interview platform. Join the future of hiring and unlock a new
                level of efficiency, fairness, and insights.
              </p>

              <form className="mt-7 max-w-[520px] space-y-4">
                <div>
                  <label className="select-none font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 transition-all duration-300 hover:border-white/55 hover:bg-[#D6B8FF]/55 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_20px_rgba(196,169,255,0.28)] focus:outline-none focus:border-white/70 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.42),0_0_22px_rgba(196,169,255,0.34)]"
                  />
                </div>
                <div>
                  <label className="select-none font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 transition-all duration-300 hover:border-white/55 hover:bg-[#D6B8FF]/55 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_20px_rgba(196,169,255,0.28)] focus:outline-none focus:border-white/70 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.42),0_0_22px_rgba(196,169,255,0.34)]"
                  />
                </div>
                <div>
                  <label className="select-none font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 transition-all duration-300 hover:border-white/55 hover:bg-[#D6B8FF]/55 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_20px_rgba(196,169,255,0.28)] focus:outline-none focus:border-white/70 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.42),0_0_22px_rgba(196,169,255,0.34)]"
                  />
                </div>

                <div className="pb-12">
                  <AnimatedBorderButton
                    variant="neon"
                    className="mt-3 rounded-[16px]"
                    innerClassName="h-[46px] rounded-[15px] px-5 font-kanit text-[16px] font-medium tracking-[0.01em] text-white transition-all duration-300 hover:opacity-100 sm:h-[48px] sm:px-6 sm:text-[17px] lg:h-[52px] lg:px-7 lg:text-[20px]"
                  >
                    Request Demo
                  </AnimatedBorderButton>
                </div>
              </form>
            </div>

            <div className="relative z-[2] mx-auto mt-2 w-full max-w-[700px] self-end lg:mt-0">
              <div className="relative h-[340px] sm:h-[410px] lg:h-[440px]">
                <img
                  src={speakerImageUrl}
                  alt="Interview specialist"
                  className="absolute bottom-0 right-[-20px] h-[122%] w-auto max-w-none object-contain sm:right-[-34px] sm:h-[128%] lg:right-[-68px] lg:h-[172%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
