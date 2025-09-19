// src/sections/HowItWorksSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

export function HowItWorksSection() {
  return (
    <Section fullHeight>
      <SectionHeader 
        title="how it works" 
        subtitle="plug in. lift. adapt in real time."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="track every rep"
          description="form & posture, tempo & motion, load / reps / sets — all live."
        />
        <Card 
          title="ai-powered coaching"
          description="technique cues, set-by-set adjustments, plateaus smashed."
        />
        <Card 
          title="adaptable systems"
          description="choose programs that fit your goal. evolve as you progress."
        />
      </div>
    </Section>
  )
}