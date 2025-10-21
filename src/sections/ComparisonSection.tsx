// src/sections/ComparisonSection.tsx
import { Section } from '@/components/Section'
import ComparisonTable from '@/components/ComparisonTable'

export function ComparisonSection() {
  return (
    <Section id="compare">
      <div className="max-w-5xl mx-auto">
                        {/* Title */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <h2> uru.zone vs the rest</h2>
        </div>

        <div className="mt-8">
          <ComparisonTable />
        </div>
      </div>

    </Section>
  )
}
