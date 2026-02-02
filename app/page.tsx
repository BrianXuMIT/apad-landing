import Hero from '@/components/Hero'
import VisualExplanation from '@/components/VisualExplanation'
import ProblemSection from '@/components/ProblemSection'
import ValuePillars from '@/components/ValuePillars'
import WhyItMatters from '@/components/WhyItMatters'
import VisionSection from '@/components/VisionSection'
import ClosingSection from '@/components/ClosingSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is APADCode?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'APADCode is a live, AI-led coding interview platform that evaluates how candidates think, communicate, and reason during live coding interviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the live AI interviewer work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The AI interviewer explains problems, listens to candidates in real time, and adapts follow-up questions while they code in a live editor.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do hiring teams receive after an interview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hiring teams receive a richer signal of reasoning, communication, and code quality, not just pass/fail results.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main id="main-content" className="min-h-screen">
        <Navigation />
        <Hero />
        <VisualExplanation />
        <ProblemSection />
        <ValuePillars />
        <WhyItMatters />
        <VisionSection />
        {/* <ClosingSection /> */}
        <Footer />
      </main>
    </>
  )
}
