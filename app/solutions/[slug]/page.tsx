import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import {
  getSolutionPageBySlug,
  solutionLandingPages,
} from "@/lib/seo-pages";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  siteConfig,
} from "@/lib/seo";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 900;
export const fetchCache = "force-cache";
export const dynamicParams = false;

export function generateStaticParams() {
  return solutionLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPageBySlug(slug);

  if (!page) {
    return {
      title: "Solutions | APADCode",
      description: siteConfig.description,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${page.title} | APADCode`,
    description: page.metaDescription,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      url: absoluteUrl(page.path),
      title: `${page.title} | APADCode`,
      description: page.metaDescription,
      type: "article",
      images: [{ url: siteConfig.ogImage, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | APADCode`,
      description: page.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const page = getSolutionPageBySlug(slug);
  if (!page) notFound();

  const relatedLinks = [
    ...solutionLandingPages
      .filter((item) => item.slug !== page.slug)
      .slice(0, 3)
      .map((item) => ({ label: item.title, href: item.path })),
    { label: "Why APADCode", href: "/why-apadcode" },
  ];

  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: page.title,
          path: page.path,
          description: page.metaDescription,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: page.title, path: page.path },
        ])}
      />
      <SeoLandingPage page={page} relatedLinks={relatedLinks} />
    </>
  );
}
