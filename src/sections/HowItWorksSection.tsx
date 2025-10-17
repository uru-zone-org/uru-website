// src/sections/HowItWorksSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2>how it works</h2>
        <h3 className="text-white/70">plug in. lift. adapt in real time.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="track every rep"
          description="form, tempo, range of motion, load, reps, and sets live."
        />
        <Card
          title="ai-powered coaching"
          description="real-time technique cues with set-by-set adjustments to break plateaus."
          featured
        />
        <Card
          title="adaptable systems"
          description="choose programs that fit your goals and evolve as you progress."
        />
      </div>
    </Section>
  )
}
