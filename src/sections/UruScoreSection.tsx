// src/sections/UruScoreSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function UruScoreSection() {
  return (
    <Section id="uru-score">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2>uru.score</h2>
        <h3 className="text-white/70">one number to see your day.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card title="what it shows">
          <div className="space-y-3 text-white/80">
            <div>how much you lifted</div>
            <div>how well you moved</div>
            <div>how it compares to your past</div>
          </div>
        </Card>

        <Card title="quick glance">
          <div className="text-white/80">
            mini chart / gauge
          </div>
        </Card>

        <Card
          title="auto logging"
          description="every rep, set, and session saved. no taps needed."
          featured
        />
      </div>
    </Section>
  )
}
