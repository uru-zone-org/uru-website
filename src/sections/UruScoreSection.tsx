// src/sections/UruScoreSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

export function UruScoreSection() {
  return (
    <Section>
      <SectionHeader 
        title="uru.score" 
        subtitle="one number to see your day."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <Card title="what it shows">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span>•</span>
              <span>how much you lifted</span>
            </div>
            <div className="flex gap-3">
              <span>•</span>
              <span>how well you moved</span>
            </div>
            <div className="flex gap-3">
              <span>•</span>
              <span>how it compares to your past</span>
            </div>
          </div>
        </Card>
        <Card title="quick glance">
          <div className="h-40 border border-dashed rounded-xl flex items-center justify-center" style={{ borderColor: 'var(--greyscale-4)', color: 'var(--greyscale-3)' }}>
            mini chart / gauge
          </div>
        </Card>
        <Card 
          title="auto logging"
          description="every rep, set, and session saved. no taps needed."
        />
      </div>
    </Section>
  )
}