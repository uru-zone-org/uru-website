// src/sections/ScienceSlideSection.tsx
import { Section } from '@/components/Section'

export function ScienceSection() {
  return (
    <Section id="science" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight">
            The Intelligence Engine
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Precision motion sensing meets adaptive AI — built for strength.
          </p>
        </div>

        {/* 3 Core Areas */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {/* Motion Intelligence */}
          <div className="panel">
            <p className="font-transducer-medium uppercase text-white/80 mb-2">Motion Intelligence</p>
            <p className="text-white/80">
              Tracks every rep and set, time under tension, and movement quality — rep by rep, frame by frame.
            </p>
          </div>

          {/* Hardware Core */}
          <div className="panel">
            <p className="font-transducer-medium uppercase text-white/80 mb-2">Hardware Core</p>
            <p className="text-white/80">
              Custom PCB with high-frequency IMU (200 Hz) captures 3D motion for over 200 exercises with real-time precision.
            </p>
          </div>

          {/* Adaptive Coaching */}
          <div className="panel">
            <p className="font-transducer-medium uppercase text-white/80 mb-2">Adaptive Coaching</p>
            <p className="text-white/80">
              AI analyzes effort, fatigue, and tempo — adjusting cues, load, and pacing instantly.
            </p>
          </div>
        </div>

        {/* uru.score mini */}
        <div className="text-left max-w-3xl mx-auto space-y-4">
          <h3 className="text-base sm:text-lg text-white/80">
            uru.score — your daily strength index
          </h3>
          <p className="text-white/70 leading-relaxed">
            One number showing how much you lifted, how well you moved, and how today compares to your best.
          </p>
        </div>
      </div>
    </Section>
  )
}
