import { Section } from '@/components/Section'
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Button } from '@/components/Button'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative">
      <BackgroundMedia media={['/images/URU_Wear.png']} />

      <div className="relative z-20">
        <Section fullHeight className="flex items-end justify-start">
          <div className=" max-w-xl">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight uppercase">
                a wearable for lifters, ai coaching
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium leading-snug uppercase">
                strength, reinvented
              </h3>
            </div>

            <div className="space-y-4 mt-6">
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                every rep measured. every set optimised.
              </p>
              <p className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed">
                velocity-based training inside. built for progress, not burnout.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 mt-6">
              <Button variant="primary" href="#buy">
                get uru.wear
                <ChevronRight className="w-4 h-4" />
              </Button>
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
