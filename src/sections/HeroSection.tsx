// src/sections/HeroSection.tsx
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'

export function HeroSection() {
  return (
  <Section>
    <SectionHeader 
    title="ai coaching + a wearable for lifters" 
    subtitle="strength, reinvented"
    />
      <div className="grid md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="text-xl max-w-lg mb-8" style={{ color: 'var(--greyscale-3)' }}>
            every rep measured. every set optimised. velocity-based training inside. 
            built for progress, not burnout.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="primary" href="#buy">
              get uru.wear
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" href="#demo">
              watch demo
            </Button>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 text-xs" style={{ borderColor: 'var(--greyscale-4)', color: 'var(--greyscale-3)' }}>
            built in reykjavík
          </div>
        </div>
        {/* Add second column content here if needed */}
      </div>
    </Section>
  )
}