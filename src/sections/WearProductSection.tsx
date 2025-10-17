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
        <Section>
          <div className="panel max-w-xl">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2>uru.wear</h2>
              <h3 className="text-white/70">the first wearable made for strength</h3>
            </div>

            {/* Text */}
            <div className="space-y-4 mt-6">
              <p>precision velocity tracking meets intelligent coaching.</p>
              <p>built for serious lifters who demand data-driven progress.</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-8">
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
