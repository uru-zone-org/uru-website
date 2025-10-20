// src/sections/ScienceIntroSection.tsx
import { Section } from '@/components/Section'

export function ScienceIntro() {
  return (
    <Section id="science-intro">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2>The Intelligence Engine</h2>
        <h3 className="text-white/70">how URU measures, learns, and optimizes strength</h3>
        <p className="text-white/80">
          URU combines precision motion sensing with on-device analysis and adaptive coaching.
          We capture velocity, tempo, and range of motion; detect fatigue as it happens; then
          adjust sets and suggestions in real time.
        </p>
        <p className="text-white/60">
          The result is a feedback loop that turns every rep into a better decision for the next one.
        </p>
      </div>
    </Section>
  )
}
