import { imageMaps } from "@/lib/image_maps";
import type { BlogPost } from "@/lib/blog-posts";
import { SUPPORT_EMAIL } from "@/lib/links";
import { pricingFeatures, pricingPlans } from "@/lib/pricing-plans";

export const siteConfig = {
  name: "APADCode",
  legalName: "APADCode, Inc.",
  url: "https://www.apadcode.com",
  defaultTitle: "APADCode | AI-Powered Live Coding Interviews",
  description:
    "APADCode is an AI-powered live coding interview platform that evaluates how candidates think, communicate, and solve problems in real time.",
  ogImage: "https://www.apadcode.com/og.svg",
  logoUrl: imageMaps.brand.logo,
  defaultLocale: "en_US",
  contactEmail: SUPPORT_EMAIL,
  supportEmail: SUPPORT_EMAIL,
  contactPhone: "+1 857 429 3177",
  hqAddress: {
    streetAddress: "8080 Westpark Drive null 53791",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77063",
    addressCountry: "US",
  },
} as const;

export type FaqEntry = {
  question: string;
  answer: string;
};

type PricingOfferSchema = {
  "@type": "Offer";
  name: string;
  price: string;
  priceCurrency: "USD";
  availability: "https://schema.org/InStock";
  url: string;
  category: string;
  description: string;
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export function toIsoDate(dateLabel: string): string {
  const date = new Date(dateLabel);
  if (!Number.isNaN(date.getTime())) {
    return date.toISOString();
  }

  return new Date().toISOString();
}

export function buildOrganizationSchema() {
  const contactPoint: Array<Record<string, unknown>> = [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contactEmail,
      areaServed: "US",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.supportEmail,
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ];

  if (siteConfig.contactPhone) {
    contactPoint.forEach((point) => {
      point.telephone = siteConfig.contactPhone;
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    email: siteConfig.supportEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.hqAddress.streetAddress,
      addressLocality: siteConfig.hqAddress.addressLocality,
      addressRegion: siteConfig.hqAddress.addressRegion,
      postalCode: siteConfig.hqAddress.postalCode,
      addressCountry: siteConfig.hqAddress.addressCountry,
    },
    contactPoint,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };
}

export function buildSoftwareApplicationSchema() {
  const pricedPlans: PricingOfferSchema[] = [];
  for (const plan of pricingPlans) {
    const monthlyMatch = plan.monthlyBilling
      .replace(/,/g, "")
      .match(/\$([0-9]+(?:\.[0-9]+)?)/);

    if (monthlyMatch) {
      pricedPlans.push({
        "@type": "Offer",
        name: `${plan.name} (Monthly)`,
        price: monthlyMatch[1],
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/price#pricing"),
        category: "Monthly subscription",
        description: `${plan.bestFor}. ${plan.includedInterviewsMonthly}. Additional interviews: ${plan.additionalInterviews}.`,
      });
    }
  }

  const monthlyPrices = pricedPlans
    .map((offer) => Number(offer.price))
    .filter((price) => Number.isFinite(price));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers:
      pricedPlans.length > 0 && monthlyPrices.length > 0
        ? {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: String(Math.min(...monthlyPrices)),
            highPrice: String(Math.max(...monthlyPrices)),
            offerCount: String(pricedPlans.length),
            url: absoluteUrl("/price#pricing"),
            offers: pricedPlans,
          }
        : {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: absoluteUrl("/contact"),
          },
  };
}

export function buildPricingOfferCatalogSchema() {
  const offers: PricingOfferSchema[] = pricingPlans.flatMap((plan) => {
    const monthlyMatch = plan.monthlyBilling
      .replace(/,/g, "")
      .match(/\$([0-9]+(?:\.[0-9]+)?)/);
    const annualMatch = plan.annualBilling
      .replace(/,/g, "")
      .match(/\$([0-9]+(?:\.[0-9]+)?)/);

    const monthlyOffer = monthlyMatch
      ? {
          "@type": "Offer",
          name: `${plan.name} (Monthly)`,
          price: monthlyMatch[1],
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          category: "Monthly subscription",
          url: absoluteUrl("/price#pricing"),
          description: `${plan.bestFor}. Includes ${plan.includedInterviewsMonthly}. Additional interviews: ${plan.additionalInterviews}.`,
        }
      : null;

    const annualOffer = annualMatch
      ? {
          "@type": "Offer",
          name: `${plan.name} (Annual)`,
          price: annualMatch[1],
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          category: "Annual subscription",
          url: absoluteUrl("/price#pricing"),
          description: `${plan.bestFor}. Includes ${plan.includedInterviewsAnnual}. Additional interviews: ${plan.additionalInterviews}.`,
        }
      : null;

    return [monthlyOffer, annualOffer].filter(
      (offer): offer is PricingOfferSchema => Boolean(offer)
    );
  });

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "APADCode Pricing",
    url: absoluteUrl("/price#pricing"),
    itemListElement: offers,
  };
}

export function buildPricingFeaturesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "APADCode Pricing Feature Comparison",
    url: absoluteUrl("/price#pricing"),
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: pricingFeatures.length,
    itemListElement: pricingFeatures.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.name,
      description: feature.description,
    })),
  };
}

export function buildFaqPageSchema(items: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildContactPageSchema() {
  const mainEntity: Record<string, unknown> = {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.supportEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.hqAddress.streetAddress,
      addressLocality: siteConfig.hqAddress.addressLocality,
      addressRegion: siteConfig.hqAddress.addressRegion,
      postalCode: siteConfig.hqAddress.postalCode,
      addressCountry: siteConfig.hqAddress.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        areaServed: "US",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        areaServed: "US",
        availableLanguage: ["en"],
      },
    ],
  };

  if (siteConfig.contactPhone) {
    (mainEntity.contactPoint as Array<Record<string, unknown>>).forEach(
      (point) => {
        point.telephone = siteConfig.contactPhone;
      }
    );
  }

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact APADCode",
    url: absoluteUrl("/contact"),
    description:
      "Request a demo or schedule a meeting to learn how APADCode improves technical hiring.",
    about: mainEntity,
    mainEntity,
  };
}

export function buildWebPageSchema({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: absoluteUrl(path),
    description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [post.image],
    datePublished: post.publishedAtISO,
    dateModified: post.updatedAtISO ?? post.publishedAtISO,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
  };
}
