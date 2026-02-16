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
import { getBlogPostPreviews } from "@/lib/blog-posts";
import { getFaqItems } from "@/lib/faqs";
import {
  absoluteUrl,
  buildFaqPageSchema,
  buildOrganizationSchema,
  buildSoftwareApplicationSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
  siteConfig,
} from "@/lib/seo";

export const revalidate = 900;
export const fetchCache = "force-cache";

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

const baseHomeSchemas = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "APADCode Home",
    path: "/",
    description: siteConfig.description,
  }),
  buildSoftwareApplicationSchema(),
];

export default async function Home() {
  const [blogPosts, faqItems] = await Promise.all([
    getBlogPostPreviews(),
    getFaqItems(),
  ]);

  const homeSchemas =
    faqItems.length > 0
      ? [
          ...baseHomeSchemas,
          buildFaqPageSchema(
            faqItems.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))
          ),
        ]
      : baseHomeSchemas;

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
      <Blog posts={blogPosts} />
      <Pricing />
      <Questionnaire faqItems={faqItems} />
      <Contact />
    </>
  );
}
