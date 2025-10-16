import { Section } from '@/components/Section'
import { SectionCard } from '@/cards/SectionCard'
import { BackgroundMedia } from '@/components/BackgroundMedia'

export function HeroSection() {
  return (
    <div className="relative">
      <BackgroundMedia media={['/images/URU_Wear.png']} />

      <div className="relative z-20">
        <Section fullHeight>
          <SectionCard
            title="a wearable for lifters, ai coaching"
            subtitle="strength, reinvented"
            text={[
              'every rep measured. every set optimised.',
              'velocity-based training inside. built for progress, not burnout.'
            ]}
            primaryAction={{ label: 'get uru.wear', href: '#buy' }}
            secondaryAction={{ label: 'watch demo', href: '#demo' }}
            className="max-w-xl"
          />
        </Section>
      </div>
    </div>
  )
}
