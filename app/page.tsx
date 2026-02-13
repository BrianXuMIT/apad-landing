import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import UniqueFeatures from "@/components/sections/UniqueFeatures";
import WhyTeamsChoose from "@/components/sections/WhyTeamsChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import Blog from "@/components/sections/Blog";
import Pricing from "@/components/sections/Pricing";
// import SmartRecording from '@/components/sections/SmartRecording'
// import WhatSetUsApart from '@/components/sections/WhatSetUsApart'
// import HiringSolutions from '@/components/sections/HiringSolutions'
// import FAQ from '@/components/sections/FAQ'
// import RevolutionizeHiring from '@/components/sections/RevolutionizeHiring'
// import AndCloud from '@/components/sections/AndCloud'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <UniqueFeatures />
      <HowItWorks />
      <WhyTeamsChoose />
      <Blog />
      <Pricing />
      {/* <SmartRecording />
      <WhatSetUsApart />
      <HiringSolutions />
      <FAQ />
      <RevolutionizeHiring />
      <AndCloud /> */}
    </>
  );
}
