// src/app/page.tsx
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

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

export default function HomePage() {
  return (
    <div 
      className="min-h-screen w-full" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--primary-color)',
        width: '100%',
        minWidth: '100%'
      }}
    >
      <Header>
        <Logo />
        <Nav />
      </Header>

      <main className="w-full" style={{ width: '100%' }}>
        <HeroSection />
        <WearProductSection />
        <HowItWorksSection />
        <EffortLossSection />
        <AppProductSection />
        <AppFeaturesSection />
        <UruScoreSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}