// src/sections/HeroSection.tsx
import { Section } from '@/components/Section'
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Button } from '@/components/Button'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative full-bleed">
      <BackgroundMedia media={['/images/URU_Wear.png']} />

      <div className="relative z-20">
        <Section fullHeight className="flex items-end justify-start">
          <div className="content-wrap max-w-3xl space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight uppercase">
                Strength, Reinvented
              </h1>
              <p className="mt-3 text-lg text-white/80">
                A wearable for lifters.AI coaching built for progress.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              {/* <Button variant="primary" href="/#product">
                Get URU.Wear
                <ChevronRight className="w-4 h-4" />
              </Button> */}
              <Button variant="secondary" href="#demo">
                  watch demo
                </Button>

                    </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
