// src/sections/AppFeaturesSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function AppFeaturesSection() {
  return (
    <Section id="features">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2>App Features</h2>
        <h3 className="text-white/70">lala</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="live coaching"
          description="real-time cues, green / yellow / red guidance, adaptive sets."
          featured
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
