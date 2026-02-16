import React from "react";

const speakerImageUrl =
  "https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192572/footer_woman_image_ijpdcu.png";

export default function Contact() {
  return (
    <section className="relative isolate z-[40] mt-8 w-full overflow-visible p-4 sm:mt-10 sm:px-6 sm:pb-20 lg:mt-44 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-visible rounded-[24px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] pl-6 pr-10 pt-7 sm:pl-10 sm:pr-14 sm:pt-10 lg:px-12 lg:pt-11 lg:pb-0">
          <img
            src={speakerImageUrl}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-5 z-[1] h-auto w-[67%] max-w-[190px] object-contain opacity-12 sm:right-8 sm:w-[35%] sm:max-w-[210px] md:hidden"
          />
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-6">
            <div className="relative z-[2] max-w-[560px] lg:pr-6">
              <h2 className="font-kanit text-3xl font-medium leading-[1.2] text-white sm:text-4xl lg:text-5xl">
                <span className="block">Ready to Revolutionize<br/>Your Hiring?</span>
              </h2>
              <p className="mt-4 font-kanit text-sm leading-relaxed text-[#EEE8FF] sm:text-base lg:text-lg">
                Elevate your hiring process with APADCode&apos;s AI-powered
                interview platform. Join the future of hiring and unlock a new
                level of efficiency, fairness, and insights.
              </p>

              <form className="mt-5 max-w-[540px] space-y-3.5">
                <div className="group flex items-center gap-3 border-b border-white/38 pb-2.5">
                  <label
                    htmlFor="contact-name"
                    className="w-[108px] shrink-0 select-none font-kanit text-[14px] font-medium text-white/95 sm:w-[112px] sm:text-[15px] lg:text-[16px]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    className="h-8 w-full border-0 bg-transparent p-0 font-kanit text-[14px] text-white placeholder:text-white/74 focus:outline-none"
                  />
                </div>
                <div className="group flex items-center gap-3 border-b border-white/38 pb-2.5">
                  <label
                    htmlFor="contact-email"
                    className="w-[108px] shrink-0 select-none font-kanit text-[14px] font-medium text-white/95 sm:w-[112px] sm:text-[15px] lg:text-[16px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Type your email address"
                    className="h-8 w-full border-0 bg-transparent p-0 font-kanit text-[14px] text-white placeholder:text-white/74 focus:outline-none"
                  />
                </div>
                <div className="group flex items-center gap-3 border-b border-white/38 pb-2.5">
                  <label
                    htmlFor="contact-phone"
                    className="w-[108px] shrink-0 select-none font-kanit text-[14px] font-medium text-white/95 sm:w-[112px] sm:text-[15px] lg:text-[16px]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    className="h-8 w-full border-0 bg-transparent p-0 font-kanit text-[14px] text-white placeholder:text-white/74 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pb-3 pt-1 max-[430px]:flex-col max-[430px]:items-stretch sm:pb-4">
                  <button
                    type="button"
                    className="inline-flex h-[42px] items-center gap-2 whitespace-nowrap rounded-[13px] border border-[#2B1B72] bg-[linear-gradient(145deg,#2A1A70_0%,#3A258A_100%)] px-4 font-kanit text-[13px] font-medium text-white shadow-[0_8px_16px_rgba(20,12,52,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3A2790] hover:shadow-[0_10px_20px_rgba(20,12,52,0.36)] max-[430px]:w-full max-[430px]:justify-center sm:h-[44px] sm:px-5 sm:text-[14px] lg:h-[46px] lg:text-[15px]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 shrink-0"
                    >
                      <path
                        d="M4 10h11M11 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Request Demo
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-[42px] items-center gap-2 whitespace-nowrap rounded-[13px] border border-white/85 bg-white px-4 font-kanit text-[13px] font-medium text-[#5D36CF] shadow-[0_8px_16px_rgba(40,24,95,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_10px_20px_rgba(40,24,95,0.26)] max-[430px]:w-full max-[430px]:justify-center sm:h-[44px] sm:px-5 sm:text-[14px] lg:h-[46px] lg:text-[15px]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 shrink-0"
                    >
                      <path
                        d="M6 2.75v2.5M14 2.75v2.5M3.5 8.25h13M5.5 4.75h9A1.75 1.75 0 0 1 16.25 6.5v8A1.75 1.75 0 0 1 14.5 16.25h-9A1.75 1.75 0 0 1 3.75 14.5v-8A1.75 1.75 0 0 1 5.5 4.75Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Schedule a Meeting
                  </button>
                </div>
              </form>
            </div>

            <div className="relative z-[20] mx-auto mt-2 hidden w-full max-w-[700px] md:mt-0 md:block md:h-full md:self-stretch md:justify-self-end">
              <img
                src={speakerImageUrl}
                alt="Interview specialist"
                className="pointer-events-none relative z-[30] ml-auto w-[88%] object-contain sm:w-[84%] md:absolute md:bottom-0 md:right-[-24px] md:h-[126%] md:w-auto md:max-w-none lg:right-[-54px] lg:h-[170%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
