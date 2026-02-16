import React from "react";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import CalendarOutlineIcon from "@/assets/icons/CalendarOutlineIcon";
import ContactActionButton from "@/components/ui/ContactActionButton";
import { imageMaps } from "@/lib/image_maps";

export default function Contact() {
  return (
    <section className="relative isolate z-[40] mt-8 w-full overflow-visible p-4 sm:mt-10 sm:px-6 sm:pb-20 lg:mt-44 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-visible rounded-[24px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] pl-6 pr-10 pt-7 sm:pl-10 sm:pr-14 sm:pt-10 lg:px-12 lg:pt-11 lg:pb-0">
          <img
            src={imageMaps.sections.contact.specialist}
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
                  <ContactActionButton
                    variant="primary"
                    icon={<ArrowRightIcon className="h-4 w-4 shrink-0" strokeWidth={1.7} />}
                  >
                    Request Demo
                  </ContactActionButton>
                  <ContactActionButton
                    variant="secondary"
                    icon={<CalendarOutlineIcon className="h-4 w-4 shrink-0" />}
                  >
                    Schedule a Meeting
                  </ContactActionButton>
                </div>
              </form>
            </div>

            <div className="relative z-[20] mx-auto mt-2 hidden w-full max-w-[700px] md:mt-0 md:block md:h-full md:self-stretch md:justify-self-end">
              <img
                src={imageMaps.sections.contact.specialist}
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
