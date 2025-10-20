// src/sections/AppSlideSection.tsx
import { Section } from '@/components/Section'

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
            Wear, app, and tag working as one — real-time coaching, precision tracking, effortless flow.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
          {/* URU WEAR */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium text-white uppercase tracking-wide">URU Wear</h3>
              <span className="text-xs text-white/50 uppercase">Next-generation wearable</span>
            </div>
            <p className="mt-3 text-white/80">
              Gesture control, haptic feedback, and motion tracking in a lightweight, washable form.
            </p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>Ergonomic, minimalist design for focus & clarity</li>
              <li>Strap and glove versions for different lifts</li>
              <li>Performance-driven, durable materials</li>
            </ul>
          </div>

          {/* URU APP */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium text-white uppercase tracking-wide">URU App</h3>
              <span className="text-xs text-white/50 uppercase">Adaptive motion intelligence</span>
            </div>
            <p className="mt-3 text-white/80">
              Strength-specific AI that adapts load, pacing, and recovery in real time.
            </p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>Real-time visuals for progress, tempo, and rhythm</li>
              <li>Minimalist interface that keeps you in the zone</li>
              <li>Auto-coaching for sets, rests, and progression</li>
            </ul>
          </div>

          {/* URU TAG */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium text-white uppercase tracking-wide">URU Tag</h3>
              <span className="text-xs text-white/50 uppercase">Precision tracking core</span>
            </div>
            <p className="mt-3 text-white/80">
              A compact, precision-engineered module that powers measurement and feedback.
            </p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>Multi-sensor IMU (200 Hz, full 3D motion)</li>
              <li>LED and haptic cues for on-rep guidance</li>
              <li>Seamless mobile app integration</li>
            </ul>
          </div>
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
