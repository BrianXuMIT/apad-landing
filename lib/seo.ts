import { imageMaps } from "@/lib/image_maps";
import type { BlogPost } from "@/lib/blog-posts";

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
  contactEmail: "cto@apadcode.com",
} as const;

export type FaqEntry = {
  question: string;
  answer: string;
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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
      },
    ],
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/contact"),
    },
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
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact APADCode",
    url: absoluteUrl("/contact"),
    description:
      "Request a demo or schedule a meeting to learn how APADCode improves technical hiring.",
    about: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
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
