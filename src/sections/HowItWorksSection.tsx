// src/sections/HowItWorksSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

export function HowItWorksSection() {
  return (
    <Section>
      <SectionHeader 
        title="how it works" 
        subtitle="plug in. lift. adapt in real time."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="track every rep"
          description="form, tempo, range of motion, load, reps, and sets live."
        />
        <Card 
          title="ai-powered coaching"
          description="real-time technique cues with set-by-set adjustments to break plateaus."
          featured={true}
        />
        <Card 
          title="adaptable systems"
          description="choose programs that fit your goals and evolve as you progress."
        />
      </div>
    </Section>
  )
}
