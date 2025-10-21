// src/app/page.tsx
import { HeroSection } from '@/sections/HeroSection'
import { EffortLossSection } from '@/sections/EffortLossSection'
import { ComparisonSection } from '@/sections/ComparisonSection'
import { VideoSection } from '@/sections/VideoSection'
import { ProductSection } from '@/sections/ProductSection'
import { ScienceSection } from '@/sections/ScienceSection'
import { GapSection } from '@/sections/GapSection'



export default function HomePage() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--primary-color)',
      }}
    >
      <HeroSection />

      {/* Product */}
      <section id="product" className="scroll-mt-24">
        <ProductSection />
      </section>


      {/* Video */}
      <section id="video" className="scroll-mt-24">
        <VideoSection />
      </section>

      {/* Science */}
      <section id="science" className="scroll-mt-24">
        <ScienceSection />
      </section>

      {/* Compare*/}
      <section id="compare" className="scroll-mt-24">
        <ComparisonSection />
      </section> 

      {/* Gap */}
      <section id="gap" className="scroll-mt-24">
        <GapSection />
      </section> 
{/* 
      {/* Demo / CTA */}
      {/* <section id="demo" className="scroll-mt-24">
        <FinalCTASection />
      </section> */} 
    </div>
  )
}
