// src/sections/AppSlideSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function GapSection() {
  return (
    <Section id="app-slide" className="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
                {/* Title */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <h2> The Gap</h2>
          <h3 className="text-white/70">
          Strengh training has a data problem         
          </h3>
        </div>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 justify-center">
          {/* The Problem */}
          <Card title="The Problem" description="Fragmented Strength Tracking">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">Fragmented Strength Tracking</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Manual logs, inconsistent data, and delayed feedback leave athletes guessing</li>
              <li>Strength has no unified data model — only repetition counts and averages</li>

            </ul>
          </Card>
          {/* Why g */}
          <Card title="The Opportunity" description="Unmeasured Potential">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">Unmeasured Potential</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Cardio wearables dominate the market - yet less then 5% of connected devices measure strength
</li>
              <li>Millions train with no way to quantify effort, fatigue, or control
</li>
            </ul>
          </Card>

          {/* Why  */}
          <Card title="The Solution" description="URU.zone">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="sr-only">URU.zone
</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>The first adaptive strength ecosystem
</li>
              <li>Combining URU.wear, URU.tag, and the URU.app, it translates acceleration, force, and intensity into actionable performance insights - in real time
</li>
            </ul>
          </Card>

        </div>
      </div>
    </Section>
  )
}
