// src/sections/HeroSection.tsx
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import ProductSlideshow from '@/components/ProductSlideshow'

export function HeroSection() {
  return (
    <div className="relative">
      {/* ProductSlideshow as full background */}
      <ProductSlideshow
        media={['/images/URU_Wear.png']}
        title=""
        description=""
        ctaText=""
        ctaHref=""
      />
      
      <div className="relative z-20">
        <Section>
          <div className="mb-16">
            <SectionHeader 
              title="a wearable for lifters, ai coaching" 
              subtitle="strength, reinvented"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="max-w-lg" style={{ color: 'var(--greyscale-3)' }}>
                every rep measured. every set optimised. 
              </p>
                            <p className="max-w-lg" style={{ color: 'var(--greyscale-3)' }}>
                velocity-based training inside. 
                built for progress, not burnout.
              </p>

              <div className="h-32 md:h-48"></div>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <Button variant="primary" href="#buy">
                  get uru.wear
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="secondary" href="#demo">
                  watch demo
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}