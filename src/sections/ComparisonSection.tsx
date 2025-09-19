// src/sections/ComparisonSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import ComparisonTable from '@/components/ComparisonTable'

export function ComparisonSection() {
  return (
    <Section id="compare">
      <SectionHeader 
        title="uru.zone vs the rest" 
        subtitle="strength-first. real-time. adaptive."
      />
      <ComparisonTable />
    </Section>
  )
}