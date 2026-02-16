import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildContactPageSchema,
  buildWebPageSchema,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo or schedule a meeting to see how APADCode improves technical hiring quality and speed.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: `Contact | ${siteConfig.name}`,
    description:
      "Request a demo or schedule a meeting with APADCode.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <JsonLd data={buildContactPageSchema()} />
      <JsonLd
        data={buildWebPageSchema({
          name: "Contact APADCode",
          path: "/contact",
          description:
            "Request a demo or schedule a meeting to see how APADCode improves technical hiring.",
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <h1 className="sr-only">Contact APADCode</h1>
      <Contact />
    </div>
  );
}
