import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://www.apadcode.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'APADCode - Live AI Coding Interviews',
    template: '%s | APADCode',
  },
  description:
    'A live, AI-led coding interview platform for B2B hiring. Evaluate how candidates think, communicate, and reason—not just whether their code passes tests.',
  applicationName: 'APADCode',
  creator: 'APADCode',
  publisher: 'APADCode',
  keywords: [
    'live coding interview',
    'AI interviewer',
    'technical interviews',
    'coding assessment',
    'developer hiring',
    'B2B SaaS recruiting',
    'candidate evaluation',
    'code interview platform',
  ],
  icons: {
    icon: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'APADCode - Live AI Coding Interviews',
    description:
      'A live, AI-led coding interview platform that evaluates how candidates think, communicate, and reason—not just whether their code passes tests.',
    siteName: 'APADCode',
    locale: 'en_US',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'APADCode',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APADCode - Live AI Coding Interviews',
    description:
      'A live, AI-led coding interview platform that evaluates how candidates think, communicate, and reason—not just whether their code passes tests.',
    images: ['/og.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'APADCode',
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'APADCode',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'APADCode - Live AI Coding Interviews',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#software`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#software`,
        name: 'APADCode',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: siteUrl,
        description:
          'A live, AI-led coding interview platform that evaluates how candidates think, communicate, and reason—not just whether their code passes tests.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
