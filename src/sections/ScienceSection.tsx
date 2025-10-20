// src/sections/ScienceSlideSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function ScienceSection() {
  return (
    <Section id="science" className="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        {/* Title */}
        <div className="space-y-2 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight">
            Built on Movement Science
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Accurate motion sensing and data-driven feedback designed for strength training.
          </p>
        </div>

        {/* 3 Core Areas */}
        <div className="grid md:grid-cols-3 gap-6 text-left justify-center">
          <Card title="Motion Tracking">
            <p className="text-white/80">
              Measures every rep and set to capture rhythm, control, and consistency in your training.
            </p>
          </Card>

          <Card title="Hardware Core">
            <p className="text-white/80">
              High-frequency motion sensors record real 3D movement with precision across all major lifts.
            </p>
          </Card>

          <Card title="Smart Guidance">
            <p className="text-white/80">
              Uses performance patterns to suggest pacing, rest, and progression. Keeping training balanced and focused.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
