// src/sections/HeroSection.tsx
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--greyscale-3)' }}>
              strength, reinvented
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6">
              ai coaching + a wearable for lifters
            </h1>
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
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-dashed rounded-full text-xs" style={{ borderColor: 'var(--greyscale-4)', color: 'var(--greyscale-3)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--greyscale-3)' }}></div>
              built in reykjavík
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}