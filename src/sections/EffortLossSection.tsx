// src/sections/EffortLossSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

export function EffortLossSection() {
  return (
    <Section fullHeight>
      <SectionHeader 
        title="effort loss: knowing when to stop" 
        subtitle="tempo slows as you fatigue. we track it in real time."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="low slowdown"
          description="low fatigue, high output — ideal for speed and recovery."
        />
        <Card 
          title="high slowdown"
          description="higher fatigue — effective for muscle growth and endurance."
        />
        <Card 
          title="smart stop"
          description="thresholds end sets at the right time — progress without overtraining."
        />
      </div>
    </Section>
  )
}