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
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VisualExplanation />
      <ProblemSection />
      <ValuePillars />
      <WhyItMatters />
      <VisionSection />
      <ClosingSection />
      <Footer />
    </main>
  )
}

