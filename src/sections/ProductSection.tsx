// src/sections/AppSlideSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function ProductSection() {
  return (
    <Section id="app-slide" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight uppercase tracking-wide">
            URU Strength Ecosystem
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl">
            Device, app, and tag working as one. Real-time coaching, precision tracking, effortless flow.
          </p>
        </div>

            {/* Three Pillars */}
            <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
            {/* URU Device */}
            <Card title="URU Device" description="Compact, precision-engineered module that powers measurement and feedback.">
                <div className="flex items-baseline justify-between mb-3">
                <h3 className="sr-only">URU Device</h3>
                </div>
                <ul className="space-y-2 text-white/80 text-sm">
                <li>Multi-sensor IMU (200 Hz, full 3D motion)</li>
                <li>LED and haptic cues for on-rep guidance</li>
                <li>Seamless mobile app integration</li>
                </ul>
            </Card>
            {/* URU APP */}
            <Card title="URU App" description="Strength-specific AI that adapts load, pacing, and recovery in real time.">
                <div className="flex items-baseline justify-between mb-3">
                <h3 className="sr-only">URU App</h3>
                </div>
                <ul className="space-y-2 text-white/80 text-sm">
                <li>Real-time visuals for progress, tempo, and rhythm</li>
                <li>Minimalist interface that keeps you in the zone</li>
                <li>Auto-coaching for sets, rests, and progression</li>
                </ul>
            </Card>
            {/* URU WEAR */}
            <Card title="URU Wear" description="Gesture control, haptics, and motion tracking in a lightweight, washable form.">
                <div className="flex items-baseline justify-between mb-3">
                <h3 className="sr-only">URU Wear</h3>
                </div>
                <ul className="space-y-2 text-white/80 text-sm">
                <li>Ergonomic, minimalist design for focus & clarity</li>
                <li>Strap and glove versions for different lifts</li>
                <li>Performance-driven, durable materials</li>
                </ul>
            </Card>


            </div>


        {/* Ecosystem Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-base sm:text-lg">
            The first strength ecosystem that unifies hardware, AI, and user experience into one seamless flow.
          </p>
        </div>
      </div>
    </Section>
  )
}
