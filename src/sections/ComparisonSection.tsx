// src/sections/ComparisonSection.tsx
import { Section } from '@/components/Section'
import { SectionCard } from '@/cards/SectionCard'
import ComparisonTable from '@/components/ComparisonTable'

export function ComparisonSection() {
  return (
    <Section id="compare">
      <SectionCard
        title="uru.zone vs the rest"
        subtitle="strength-first. real-time. adaptive."
      >
        <ComparisonTable />
      </SectionCard>
    </Section>
  )
}
