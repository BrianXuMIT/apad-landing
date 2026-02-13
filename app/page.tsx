import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import UniqueFeatures from "@/components/sections/UniqueFeatures";
import WhyTeamsChoose from "@/components/sections/WhyTeamsChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import Blog from "@/components/sections/Blog";
import Pricing from "@/components/sections/Pricing";
import Questionaire from "@/components/sections/Questionaire";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";


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
      <Questionaire />
      <Contact />
      <Footer />
    </>
  );
}
