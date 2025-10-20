// src/sections/AppSlideSection.tsx
import { Section } from '@/components/Section'

export function ProductSection() {
  return (
    <Section id="app-slide" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight uppercase">
            uru.app
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium leading-snug uppercase">
            plan, lift, recover — ai coaching and progress in one place
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-4 text-base sm:text-lg text-white/80 leading-relaxed">
          <p>Track every workout. Optimize every set. Achieve every goal.</p>
          <p>Green / yellow / red cues and smart rest detection keep you in the perfect training zone.</p>
          <p>Reps, tempo, load, and uru.score—all visualized cleanly, so progress feels obvious.</p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <div>
            <h4 className="text-xl font-medium text-white uppercase">real-time coaching</h4>
            <p className="text-white/70 mt-2">Push when ready, stop when it matters.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white uppercase">tracking & insights</h4>
            <p className="text-white/70 mt-2">Velocity, tempo, uru.score — data that drives results.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white uppercase">recovery & readiness</h4>
            <p className="text-white/70 mt-2">Know when to rest, and how to come back stronger.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
