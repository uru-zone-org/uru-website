// src/sections/AppProductSection.tsx
import ProductSlideshow from '@/components/ProductSlideshow'
import { Section } from '@/components/Section'

export function AppProductSection() {
  return (
    <Section>
        <ProductSlideshow
            images={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
            title="uru.app"
            description="plan, lift, recover — ai coaching and progress in one place."
            ctaText="see uru.app"
            ctaHref="#demo"
        />
    </Section>
  )
}
