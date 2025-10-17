// src/sections/WearProductSection.tsx
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { ChevronRight } from 'lucide-react'

export function WearProductSection() {
  return (
    <div className="relative">
      <BackgroundMedia media={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']} />

      <div className="relative z-20">
        <Section fullHeight className="flex items-end justify-start">
          <div className="max-w-xl">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight uppercase">
                uru.wear
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium leading-snug uppercase">
                the first wearable made for strength
              </h3>
            </div>

            {/* Text */}
            <div className="space-y-4 mt-6">
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                precision velocity tracking meets intelligent coaching.
              </p>
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                built for serious lifters who demand data-driven progress.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 mt-6">
              <Button variant="primary" href="#buy">
                get uru.wear
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" href="#demo">
                learn more
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
