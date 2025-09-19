// src/sections/TestimonialsSection.tsx
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import TestimonialGrid from '@/components/TestimonialGrid'

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader 
        title="what users are saying" 
        subtitle="real lifters. real progress."
      />
      <TestimonialGrid />
    </Section>
  )
}