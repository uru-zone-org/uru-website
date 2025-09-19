// src/sections/WearProductSection.tsx
import ProductSlideshow from '@/components/ProductSlideshow'

export function WearProductSection() {
  return (
    <section id="wear" className="relative h-screen min-h-screen max-h-screen overflow-hidden">
      <ProductSlideshow
        images={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
        title="uru.wear"
        description="the first wearable made for strength."
        ctaText="get uru.wear"
        ctaHref="#buy"
      />
    </section>
  )
}