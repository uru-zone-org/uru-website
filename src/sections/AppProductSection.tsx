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
        <Section>
          <div className="panel max-w-xl">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2>Product Demo</h2>
              <h3 className="text-white/70">Experience the app in action</h3>
            </div>

            {/* Text */}
            <div className="space-y-4 mt-6">
              <p>plan, lift, recover, ai coaching and progress in one place.</p>
              <p>track every workout, optimize every set, achieve every goal.</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-8">
              <Button variant="primary" href="#demo">
                see uru.app
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" href="#features">
                learn more
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
