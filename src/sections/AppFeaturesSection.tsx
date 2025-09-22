// src/sections/AppFeaturesSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function AppFeaturesSection() {
  return (
    <Section>
      <div>
        <Card 
          title="live coaching"
          description="real-time cues, green / yellow / red guidance, adaptive sets."
        />
        <Card 
          title="tracking & insights"
          description="reps, tempo, load, and uru.score — trends that actually help."
        />
        <Card 
          title="recovery & readiness"
          description="see fatigue, plan the next session, avoid burnout."
        />
      </div>
    </Section>
  )
}