// src/sections/AppSlideSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function ProductSection() {
  return (
    <Section id="app-slide" className="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
                {/* Title */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <h2> URU Strength Ecosystem</h2>
          <h3 className="text-white/70">
             Wear, tag and app - built to work as one for intelligent strength training
          </h3>
        </div>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 justify-center">
          {/* URU Wear */}
          <Card title="URU.wear" description="Ergonomic garment for secure attachment">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU.wear</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Glove or wristband options</li>
              <li>Uses velcro to hold the tag</li>
              <li>Lightweight, washable, and built for movement</li>
            </ul>
          </Card>
          {/* URU Tag */}
          <Card title="URU.tag" description="URU.tag turns movement into measurable progress">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU.tag</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>LED and vibration cues for instant feedback</li>
              <li>Tracks reps, sets, form quality, and time under tension</li>
              <li>Connects seamlessly with the URU.app</li>
            </ul>
          </Card>

          {/* URU App */}
          <Card title="URU.app" description="Your performance dashboard and coach">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU.app</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Shows all training data - reps, sets, intensity and URU.score</li>
              <li>Gives real-time feedback on form and intensity</li>
              <li>Adapts training to your effort and recovery</li>
            </ul>
          </Card>

        </div>
      </div>
    </Section>
  )
}
