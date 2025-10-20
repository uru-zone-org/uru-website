// src/sections/ScienceSlideSection.tsx
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'

export function ScienceSection() {
  return (
    <Section id="science" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Title & subhead */}
        <div className="space-y-2">
          <h2>The Intelligence Engine</h2>
          <h3 className="text-white/70">
            how URU measures, learns, and optimizes strength
          </h3>
        </div>

        {/* Short explainer */}
        <div className="space-y-3 text-white/80 max-w-3xl mx-auto">
          <p>
            URU combines precision motion sensing with on-device analysis and adaptive coaching.
            We capture velocity, tempo, and range of motion; detect fatigue as it happens; then
            adjust sets and suggestions in real time.
          </p>
          <p className="text-white/60">
            The result is a feedback loop that turns every rep into a better decision for the next one.
          </p>
        </div>

        {/* Measure → Analyze → Adapt */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="panel">
            <p className="font-transducer-medium uppercase mb-2">measure</p>
            <p className="text-white/80">
              Velocity, tempo, and ROM captured rep-by-rep from URU Wear.
            </p>
          </div>
          <div className="panel">
            <p className="font-transducer-medium uppercase mb-2">analyze</p>
            <p className="text-white/80">
              Effort loss (bar speed drop) and movement quality detected in real time.
            </p>
          </div>
          <div className="panel">
            <p className="font-transducer-medium uppercase mb-2">adapt</p>
            <p className="text-white/80">
              Coaching cues and set targets adjust to your readiness and goals.
            </p>
          </div>
        </div>

        {/* uru.score mini */}
        <div className="pt-4">
          <h3 className="text-white/80">uru.score — one number to see your day</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
            <div className="panel">
              <p className="font-transducer-medium uppercase mb-2">what it shows</p>
              <div className="space-y-2 text-white/80">
                <div>how much you lifted</div>
                <div>how well you moved</div>
                <div>how it compares to your past</div>
              </div>
            </div>
            <div className="panel">
              <p className="font-transducer-medium uppercase mb-2">quick glance</p>
              <p className="text-white/80">mini chart / gauge</p>
            </div>
            <div className="panel">
              <p className="font-transducer-medium uppercase mb-2">auto logging</p>
              <p className="text-white/80">every rep, set, and session saved. no taps needed.</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="#demo">see the data in action</Button>
          <Button variant="secondary" href="#contact">request a technical brief</Button>
        </div>
      </div>
    </Section>
  )
}
