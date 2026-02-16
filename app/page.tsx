import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import UniqueFeatures from "@/components/sections/UniqueFeatures";
import WhyTeamsChoose from "@/components/sections/WhyTeamsChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import Blog from "@/components/sections/Blog";
import Pricing from "@/components/sections/Pricing";
import Questionnaire from "@/components/sections/Questionnaire";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/faq-items";
import {
  absoluteUrl,
  buildFaqPageSchema,
  buildOrganizationSchema,
  buildSoftwareApplicationSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI-Powered Live Coding Interviews",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
};

const homeSchemas = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "APADCode Home",
    path: "/",
    description: siteConfig.description,
  }),
  buildSoftwareApplicationSchema(),
  buildFaqPageSchema(
    faqItems.map((item) => ({ question: item.question, answer: item.answer }))
  ),
];

export default function Home() {
  return (
    <>
      {homeSchemas.map((schema, index) => (
        <JsonLd key={`home-schema-${index}`} data={schema} />
      ))}
      <Hero />
      <Intro />
      <UniqueFeatures />
      <HowItWorks />
      <WhyTeamsChoose />
      <Blog />
      <Pricing />
      <Questionnaire />
      <Contact />
    </>
  );
}
