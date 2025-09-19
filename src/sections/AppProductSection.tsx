// src/sections/AppProductSection.tsx
import ProductSlideshow from '@/components/ProductSlideshow'

export function AppProductSection() {
  return (
    <section id="app" className="relative h-screen min-h-screen max-h-screen overflow-hidden border-y" style={{ borderColor: 'var(--greyscale-5)' }}>
      <ProductSlideshow
        images={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
        title="uru.app"
        description="plan, lift, recover — ai coaching and progress in one place."
        ctaText="see uru.app"
        ctaHref="#demo"
      />
    </section>
  )
}
