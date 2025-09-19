import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import ProductSlideshow from '@/components/ProductSlideshow'
import ComparisonTable from '@/components/ComparisonTable'
import TestimonialGrid from '@/components/TestimonialGrid'
import '@/styles/homepage.css'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--primary-color)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--background-color)', borderColor: 'var(--greyscale-5)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="homepage-header text-sm" style={{ color: 'var(--background-color)' }}>U</span>
              </div>
              <span className="homepage-header text-lg tracking-tight">uru.zone</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#wear" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--greyscale-3)' }}>
                .wear
              </a>
              <a href="#app" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--greyscale-3)' }}>
                .app
              </a>
              <a href="#compare" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--greyscale-3)' }}>
                compare
              </a>
              <a 
                href="#demo" 
                className="btn-secondary inline-flex items-center gap-1 px-4 py-2 border rounded-full text-sm transition-colors"
              >
                request demo
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <div className="hero-eyebrow text-xs mb-4">
                  strength, reinvented
                </div>
                <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl leading-none mb-6">
                  ai coaching + a wearable for lifters.
                </h1>
                <p className="hero-description text-xl max-w-lg mb-8">
                  every rep measured. every set optimised. velocity-based training inside. 
                  built for progress, not burnout.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a 
                    href="#buy" 
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors"
                  >
                    get uru.wear
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="#demo" 
                    className="btn-secondary inline-flex items-center gap-2 px-6 py-3 border rounded-full transition-colors"
                  >
                    watch demo
                  </a>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 border border-dashed rounded-full text-xs" style={{ borderColor: 'var(--greyscale-4)', color: 'var(--greyscale-3)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--greyscale-3)' }}></div>
                  built in reykjavík
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero - URU.wear */}
        <section id="wear" className="relative h-screen border-y" style={{ borderColor: 'var(--greyscale-5)' }}>
          <ProductSlideshow
            images={[
              '/images/URU_Wear.png',
              '/images/URU_Wear_Wrist.png'
            ]}
            title="uru.wear"
            description="the first wearable made for strength. tracks form, tempo, and load in real time."
            ctaText="get uru.wear"
            ctaHref="#buy"
          />
        </section>

        {/* How it Works */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="section-headline text-3xl md:text-5xl">how it works</h2>
              <p className="section-subhead">plug in. lift. adapt in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">track every rep</h3>
                <p className="card-description">
                  form & posture, tempo & motion, load / reps / sets — all live.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">ai-powered coaching</h3>
                <p className="card-description">
                  technique cues, set-by-set adjustments, plateaus smashed.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">adaptable systems</h3>
                <p className="card-description">
                  choose programs that fit your goal. evolve as you progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections using the same pattern... */}
        {/* I'll show a few more sections to demonstrate the pattern */}

        {/* Effort Loss */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="section-headline text-3xl md:text-5xl">effort loss: knowing when to stop</h2>
              <p className="section-subhead">tempo slows as you fatigue. we track it in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">low slowdown</h3>
                <p className="card-description">
                  low fatigue, high output — ideal for speed and recovery.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">high slowdown</h3>
                <p className="card-description">
                  higher fatigue — effective for muscle growth and endurance.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="card-title text-xl md:text-2xl mb-4">smart stop</h3>
                <p className="card-description">
                  thresholds end sets at the right time — progress without overtraining.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="footer-text flex flex-wrap items-center justify-between gap-4 text-sm">
              <div>
                © {new Date().getFullYear()} uru.zone — made for lifters. built in reykjavík.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-80">privacy</a>
                <a href="#" className="hover:opacity-80">terms</a>
                <a href="#" className="hover:opacity-80">support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}