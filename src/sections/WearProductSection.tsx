// src/sections/WearProductSection.tsx
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Section } from '@/components/Section'
import { SectionCard } from '@/cards/SectionCard'

export function WearProductSection() {
  return (
    <div className="relative">
      <BackgroundMedia media={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']} />
      
      <div className="relative z-20">
        <Section>
          <SectionCard
            title="uru.wear"
            subtitle="the first wearable made for strength"
            text={[
              'precision velocity tracking meets intelligent coaching.',
              'built for serious lifters who demand data-driven progress.'
            ]}
            primaryAction={{ label: 'get uru.wear', href: '#buy' }}
            secondaryAction={{ label: 'learn more', href: '#demo' }}
            className="max-w-xl"
          />
        </Section>
      </div>
    </div>
  )
}
