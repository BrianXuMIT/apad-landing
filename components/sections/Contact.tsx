import React from "react";

const speakerImageUrl =
  "https://res.cloudinary.com/dxboqivs9/image/upload/v1771026880/New_Project_8_folxvk.png";

export default function Contact() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mx-auto w-full px-6 sm:px-16">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] px-8 pt-8 sm:px-10 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="pointer-events-none absolute -right-24 top-10 h-[280px] w-[280px] rounded-full bg-[#A86BFF]/35 blur-[110px]" />
          <div className="pointer-events-none absolute right-32 bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[#5B6DFF]/20 blur-[120px]" />

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="relative z-[2] max-w-[470px]">
              <h2 className="font-kanit text-3xl font-medium leading-[1.2] text-white sm:text-4xl lg:text-5xl">
                Ready to Revolutionize Your Hiring?
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

                <button
                  type="button"
                  className="mt-2 inline-flex h-[48px] items-center justify-center rounded-[16px] bg-white px-6 font-kanit text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] transition-all duration-300 hover:scale-[1.02] sm:h-[52px] sm:text-[28px] lg:h-[56px] lg:px-7 lg:text-[34px]"
                >
                  Request Demo
                </button>
              </form>
            </div>

            <div className="relative z-[2] mx-auto mt-4 w-full max-w-[640px] self-end lg:mt-0">
              <img
                src={speakerImageUrl}
                alt="Interview specialist"
                className="mx-auto h-auto w-full max-w-[460px] object-contain sm:max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
