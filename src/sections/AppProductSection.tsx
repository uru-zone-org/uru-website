// src/sections/AppProductSection.tsx
import { BackgroundMedia } from '@/components/BackgroundMedia'
import { Section } from '@/components/Section'
import { SectionCard } from '@/cards/SectionCard'

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
          <SectionCard
            title="Product Demo"
            subtitle="Experience the app in action"
            text={[
              'plan, lift, recover, ai coaching and progress in one place.',
              'track every workout, optimize every set, achieve every goal.'
            ]}
            primaryAction={{ label: 'see uru.app', href: '#demo' }}
            secondaryAction={{ label: 'learn more', href: '#features' }}
            className="max-w-xl"
          />
        </Section>
      </div>
    </div>
  )
}
