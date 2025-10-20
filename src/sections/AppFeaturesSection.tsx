// src/sections/AppFeaturesSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function AppFeaturesSection() {
  return (
    <Section id="features">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2>Features</h2>
        <h3 className="text-white/70">what you get, right out of the box</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="real-time coaching"
          description="Green / yellow / red cues and set adjustments—push when ready, stop when it matters."
          featured
        />
        <Card
          title="tracking & insights"
          description="Reps, tempo, load, velocity, and uru.score—clean visuals and trends that actually help."
        />
        <Card
          title="recovery & readiness"
          description="Fatigue signals and smart suggestions so tomorrow’s plan fits how you feel today."
        />
      </div>
    </Section>
  )
}
