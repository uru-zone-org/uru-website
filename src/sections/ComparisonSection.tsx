// src/sections/ComparisonSection.tsx
import { Section } from '@/components/Section'
import ComparisonTable from '@/components/ComparisonTable'

export function ComparisonSection() {
  return (
    <Section id="compare">
      <div className="panel max-w-5xl mx-auto">
        <div className="space-y-2">
          <h2>uru.zone vs the rest</h2>
          <h3 className="text-white/70">strength-first. real-time. adaptive.</h3>
        </div>

        <div className="mt-8">
          <ComparisonTable />
        </div>
      </div>
    </Section>
  )
}
