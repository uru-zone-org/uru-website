// src/sections/AppProductSection.tsx
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'
import ProductSlideshow from '@/components/ProductSlideshow'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'

export function AppProductSection() {
  return (
    <div className="relative">
      {/* ProductSlideshow as full background */}
      <ProductSlideshow
        media={['/images/App 1.png', '/images/App 2.png', '/images/App 3.png', '/images/App 4.png']}
        title=""
        description=""
        ctaText=""
        ctaHref=""
      />
      
      <div className="relative z-20">
        <Section>
          <div className="mb-16">
            <SectionHeader 
              title="Product Demo" 
              subtitle="Experience the app in action"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="max-w-lg" style={{ color: 'var(--greyscale-3)' }}>
                plan, lift, recover, ai coaching and progress in one place.
              </p>
              <p className="max-w-lg" style={{ color: 'var(--greyscale-3)' }}>
                track every workout, optimize every set, achieve every goal.
              </p>

              <div className="h-32 md:h-48"></div>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <Button variant="primary" href="#demo">
                  see uru.app
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="secondary" href="#features">
                  learn more
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}