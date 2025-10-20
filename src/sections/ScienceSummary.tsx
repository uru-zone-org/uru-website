// src/sections/ScienceSummarySection.tsx
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { ChevronRight } from 'lucide-react'

export function ScienceSummary() {
  return (
    <Section id="science-summary">
      <div className="panel max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2>built on real training data</h2>
          <h3 className="text-white/70">from signal to decision—no guesswork</h3>

          <div className="grid md:grid-cols-3 gap-6 text-white/80 text-left">
            <div>
              <p className="font-transducer-medium uppercase mb-2">measure</p>
              <p>Velocity, tempo, and ROM captured rep-by-rep from URU Wear.</p>
            </div>
            <div>
              <p className="font-transducer-medium uppercase mb-2">analyze</p>
              <p>Effort loss (bar speed drop) and movement quality detected in real time.</p>
            </div>
            <div>
              <p className="font-transducer-medium uppercase mb-2">adapt</p>
              <p>Coaching cues and set targets adjust to your readiness and goals.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="#demo">
              see the data in action
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" href="#contact">
              request a technical brief
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
