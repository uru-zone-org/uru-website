// src/sections/FinalCTASection.tsx
import { ChevronRight } from 'lucide-react'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'

export function FinalCTASection() {
  return (
    <Section id="join">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2>ready to train smarter?</h2>
        <h3 className="text-white/70">every rep measured. every set optimized.</h3>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {/* <Button variant="primary" href="#buy">
            get uru.wear
            <ChevronRight className="w-4 h-4" />
          </Button> */}
          <Button variant="secondary" href="#demo">
            Join Waitlist
          </Button>
        </div>
      </div>
    </Section>
  )
}
