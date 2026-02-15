import React from "react";
import AnimatedBorderButton from "../ui/AnimatedBorderButton";

const speakerImageUrl =
  "https://res.cloudinary.com/dxboqivs9/image/upload/v1771026880/New_Project_8_folxvk.png";

export default function Contact() {
  return (
    <section className="w-full lg:p-16 sm:pb-20 p-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] px-8 py-8 sm:px-10 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="pointer-events-none absolute -right-24 top-10 h-[280px] w-[280px] rounded-full bg-[#A86BFF]/35 blur-[110px]" />
          <div className="pointer-events-none absolute right-32 bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[#5B6DFF]/20 blur-[120px]" />

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="relative z-[2] max-w-[470px]">
              <h2 className="font-kanit text-3xl font-medium leading-[1.2] text-white sm:text-4xl lg:text-5xl">
                <span className="block">Ready to Revolutionize Hiring?</span>
              </h2>
              <p className="mt-5 font-kanit text-sm leading-relaxed text-[#EEE8FF] sm:text-base lg:text-lg">
                Elevate your hiring process with APAD code&apos;s AI-powered
                interview platform. Join the future of hiring and unlock a new
                level of efficiency, fairness, and insights.
              </p>

              <form className="mt-7 space-y-4">
                <div>
                  <label className="font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="font-kanit text-lg text-white sm:text-[22px] lg:text-[28px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
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

            <div className="relative -bottom-[24px] z-[2] mx-auto mt-4 w-full max-w-[640px] self-end lg:mt-0">
              <img
                src={speakerImageUrl}
                alt="Interview specialist"
                className="mx-auto h-auto w-full max-w-[460px] object-contain sm:max-w-[500px] lg:max-w-[560px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
