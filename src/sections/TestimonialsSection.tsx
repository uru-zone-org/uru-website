// src/sections/TestimonialsSection.tsx
import { Section } from '@/components/Section'
import TestimonialGrid from '@/components/TestimonialGrid'

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2>what users are saying</h2>
        <h3 className="text-white/70">real lifters. real progress.</h3>
      </div>

      <TestimonialGrid />
    </Section>
  )
}
