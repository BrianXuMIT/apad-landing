import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import Questionnaire from "@/components/sections/Questionnaire";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqItems } from "@/lib/faqs";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPricingFeaturesItemListSchema,
  buildPricingOfferCatalogSchema,
  buildWebPageSchema,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Review APADCode pricing plans and compare included capabilities for production hiring workflows.",
  alternates: {
    canonical: "/price",
  },
  openGraph: {
    url: absoluteUrl("/price"),
    title: `Pricing | ${siteConfig.name}`,
    description:
      "Review APADCode pricing plans and compare included capabilities for production hiring workflows.",
  },
};

export default async function PricePage() {
  const faqItems = await getFaqItems();

  const pageSchemas = [
    buildWebPageSchema({
      name: "APADCode Pricing",
      path: "/price",
      description:
        "Review APADCode pricing plans and compare included capabilities for production hiring workflows.",
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/price" },
    ]),
    buildPricingOfferCatalogSchema(),
    buildPricingFeaturesItemListSchema(),
    ...(faqItems.length > 0
      ? [
          buildFaqPageSchema(
            faqItems.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))
          ),
        ]
      : []),
  ];

  return (
    <div className="pb-24 pt-0 sm:pb-32 sm:pt-2">
      {pageSchemas.map((schema, index) => (
        <JsonLd key={`price-schema-${index}`} data={schema} />
      ))}
      <h1 className="sr-only">APADCode Pricing</h1>
      <Pricing />
      <Questionnaire faqItems={faqItems} />
    </div>
  );
}
