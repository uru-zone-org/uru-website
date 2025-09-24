// src/sections/WearProductSection.tsx
import ProductSlideshow from '@/components/ProductSlideshow'
import { Section } from '@/components/Section'

export function WearProductSection() {
  return (
    <Section>
      <ProductSlideshow
        media={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
        title="uru.wear"
        description="the first wearable made for strength."
        ctaText="get uru.wear"
        ctaHref="#buy"
      />
    </Section>
  )
}