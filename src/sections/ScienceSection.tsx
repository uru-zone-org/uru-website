// src/sections/ScienceSlideSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function ScienceSection() {
  return (
    <Section id="science" className="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        {/* Title */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <h2>Built on Movement Science</h2>
          <h3 className="text-white/70">
            Accurate motion sensing and data-driven feedback designed for strength training
          </h3>
        </div>

        {/* 3 Core Areas */}
        <div className="grid md:grid-cols-3 gap-6 text-left justify-center">
          <Card title="Precision Motion Tracking">
            <p className="text-white/80">
              High-frequency IMU sensor captures full 3D movement. Detecting speed, control, and intensity across 200+ exercises
            </p>
          </Card>

          <Card title="Custom PCB Architecture">
            <p className="text-white/80">
              Proprietary hardware built for fast, energy-efficient data capture and wireless communication
            </p>
          </Card>

          <Card title="AI-Driven Coaching">
            <p className="text-white/80">
              Machine-learning models analyze form, effort, and fatigue to adapt load, pacing, and recovery in real time
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
