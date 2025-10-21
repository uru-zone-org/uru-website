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
             Device, app, and wear - built to work as one for intelligent strength training
          </h3>
        </div>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 justify-center">
          {/* URU Device */}
          <Card title="URU Device" description="Compact motion tracker that captures every movement in detail">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU Device</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>LED and vibration cues for instant feedback</li>
              <li>Tracks reps, sets, form quality, and time under tension</li>
              <li>Connects seamlessly with the URU App</li>
            </ul>
          </Card>

          {/* URU App */}
          <Card title="URU App" description="Your performance dashboard and coach">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU App</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Shows all training data: reps, sets, tempo, Uru Score</li>
              <li>Gives real-time guidance and form correction</li>
              <li>Adapts training to your effort and recovery</li>
            </ul>
          </Card>

          {/* URU Wear */}
          <Card title="URU Wear" description="Ergonomic garment for secure attachment">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU Wear</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Glove or wristband options</li>
              <li>Uses velcro to hold the device</li>
              <li>Lightweight, washable, and built for movement</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
