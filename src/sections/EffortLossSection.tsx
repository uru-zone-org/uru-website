// src/sections/EffortLossSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function EffortLossSection() {
  return (
    <Section id="effort-loss">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2>effort loss: knowing when to stop</h2>
        <h3 className="text-white/70">
          tempo slows as you fatigue. we track it in real time.
        </h3>
      </div>

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
          featured
        />
      </div>
    </Section>
  )
}
