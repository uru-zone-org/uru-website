// src/sections/WearProductSection.tsx
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'
import ProductSlideshow from '@/components/ProductSlideshow'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'

export function WearProductSection() {
  return (
    <div className="relative">
      {/* ProductSlideshow as full background */}
      <ProductSlideshow
        media={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
        title=""
        description=""
        ctaText=""
        ctaHref=""
      />
      
      <div className="relative z-20">
        <Section>
          <div className="mb-16">
            <SectionHeader 
              title="uru.wear" 
              subtitle="the first wearable made for strength"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="max-w-lg mb-4" style={{ color: 'var(--greyscale-3)' }}>
                precision velocity tracking meets intelligent coaching.
              </p>
              <p className="max-w-lg" style={{ color: 'var(--greyscale-3)' }}>
                built for serious lifters who demand data-driven progress.
              </p>

              <div className="h-32 md:h-48"></div>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <Button variant="primary" href="#buy">
                  get uru.wear
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="secondary" href="#demo">
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