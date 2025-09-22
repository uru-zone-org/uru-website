// src/sections/AppProductSection.tsx
import ProductSlideshow from '@/components/ProductSlideshow'
import { Section } from '@/components/Section'

export function AppProductSection() {
  return (
    <Section>
        <ProductSlideshow
            images={['/images/App 1.png', '/images/App 2.png','/images/App 3.png','/images/App 4.png']}
            title="uru.app"
            description="plan, lift, recover — ai coaching and progress in one place."
            ctaText="see uru.app"
            ctaHref="#demo"
        />
    </Section>
  )
}
