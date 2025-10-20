// src/app/page.tsx
import { HeroSection } from '@/sections/HeroSection'
import { WearProductSection } from '@/sections/WearProductSection'
import { HowItWorksSection } from '@/sections/HowItWorksSection'
import { EffortLossSection } from '@/sections/EffortLossSection'
import { AppProductSection } from '@/sections/AppProductSection'
import { AppFeaturesSection } from '@/sections/AppFeaturesSection'
import { UruScoreSection } from '@/sections/UruScoreSection'
import { ComparisonSection } from '@/sections/ComparisonSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { FinalCTASection } from '@/sections/FinalCTASection'
import { ScienceIntro } from '@/sections/ScienceInto'
import { ScienceSummary } from '@/sections/ScienceSummary'
import { VideoSection } from '@/sections/VideoSection'


export default function HomePage() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--primary-color)',
      }}
    >
      <HeroSection />
      <VideoSection />


      {/* Product */}
      <section id="product" className="scroll-mt-24">
        <AppProductSection />
        <AppFeaturesSection />
        <WearProductSection />
      </section>

      {/* Science */}
      <section id="science" className="scroll-mt-24">
        <ScienceIntro />
        <UruScoreSection />
        <ScienceSummary />
      </section>

      {/* Mission */}
      <section id="mission" className="scroll-mt-24">
        <EffortLossSection />
        <HowItWorksSection />
      </section>

      {/* Compare */}
      <section id="compare" className="scroll-mt-24">
        <ComparisonSection />
        <TestimonialsSection />
      </section>

      {/* Demo / CTA */}
      <section id="demo" className="scroll-mt-24">
        <FinalCTASection />
      </section>
    </div>
  )
}
