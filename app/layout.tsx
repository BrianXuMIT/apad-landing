import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"], // Added weights for headers
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | APADCode",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AI coding interview platform",
    "technical hiring",
    "live coding interviews",
    "engineering assessment",
    "AI interviewer",
    "developer screening",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.defaultLocale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "APADCode AI-powered live coding interview platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.GTM_ID;

  return (
    <html lang="en" className={`${kanit.variable}`}>
      <body className="bg-white font-kanit antialiased">
        {gtmId ? (
          <>
            <Script id="gtm-init" strategy="beforeInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        <a
          href="#main-content"
          className="sr-only z-[999] rounded-md bg-white px-3 py-2 text-sm text-[#111216] focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
