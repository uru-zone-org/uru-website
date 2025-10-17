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

export default function WearPage() {
  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--primary-color)',
      }}
    >
      <WearProductSection />
      <HowItWorksSection /> 
    </div>
  )
}