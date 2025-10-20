// src/sections/AppProductSection.tsx
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { ChevronRight } from 'lucide-react'

export function AppProductSection() {
  return (
    <div className="relative">
      <BackgroundMedia
        media={[
          '/images/App 1.png',
          '/images/App 2.png',
          '/images/App 3.png',
          '/images/App 4.png',
        ]}
      />

      <div className="relative z-20">
        <Section fullHeight className="flex items-end justify-start">
          <div className="max-w-xl">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight uppercase">
                uru.app
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium leading-snug uppercase">
                experience the app in action
              </h3>
            </div>

            {/* Text */}
            <div className="space-y-4 mt-6">
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                plan, lift, recover — ai coaching and progress in one place.
              </p>
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                track every workout, optimize every set, achieve every goal.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
