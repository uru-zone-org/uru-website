import { ChevronRight } from 'lucide-react'
import ProductSlideshow from '@/components/ProductSlideshow'
import ComparisonTable from '@/components/ComparisonTable'
import TestimonialGrid from '@/components/TestimonialGrid'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--primary-color)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--background-color)', borderColor: 'var(--greyscale-5)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--background-color)' }}>U</span>
              </div>
              <span className="text-lg tracking-tight font-bold">uru.zone</span>
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
                className="btn-secondary inline-flex items-center gap-1 px-4 py-2 border rounded-full transition-colors"
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
                <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--greyscale-3)' }}>
                  strength, reinvented
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6">
                  ai coaching + a wearable for lifters
                </h1>
                <p className="text-xl max-w-lg mb-8" style={{ color: 'var(--greyscale-3)' }}>
                  every rep measured. every set optimised. velocity-based training inside. 
                  built for progress, not burnout.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a 
                    href="#buy" 
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full"
                  >
                    get uru.wear
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="#demo" 
                    className="btn-secondary inline-flex items-center gap-2 px-6 py-3 border rounded-full"
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
        <section id="wear" className="relative h-screen">
          <ProductSlideshow
            images={['/images/URU_Wear.png', '/images/URU_Wear_Wrist.png']}
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
              <h2 className="text-3xl md:text-5xl">how it works</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>plug in. lift. adapt in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">track every rep</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  form & posture, tempo & motion, load / reps / sets — all live.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">ai-powered coaching</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  technique cues, set-by-set adjustments, plateaus smashed.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">adaptable systems</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  choose programs that fit your goal. evolve as you progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Effort Loss */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl">effort loss: knowing when to stop</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>tempo slows as you fatigue. we track it in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">low slowdown</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  low fatigue, high output — ideal for speed and recovery.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">high slowdown</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  higher fatigue — effective for muscle growth and endurance.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">smart stop</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  thresholds end sets at the right time — progress without overtraining.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero - URU.app */}
        <section id="app" className="relative h-screen border-y" style={{ borderColor: 'var(--greyscale-5)' }}>
          <ProductSlideshow
            images={[
              '/images/URU-app-1.png',
              '/images/URU-app-2.png',
              '/images/URU-app-3.png'
            ]}
            title="uru.app"
            description="plan, lift, recover — ai coaching and progress in one place."
            ctaText="see uru.app"
            ctaHref="#demo"
          />
        </section>

        {/* App Features */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">live coaching</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  real-time cues, green / yellow / red guidance, adaptive sets.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">tracking & insights</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  reps, tempo, load, and uru.score — trends that actually help.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">recovery & readiness</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  see fatigue, plan the next session, avoid burnout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* URU.score */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl">uru.score</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>one number to see your day.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">what it shows</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span>•</span>
                    <span>how much you lifted</span>
                  </div>
                  <div className="flex gap-3">
                    <span>•</span>
                    <span>how well you moved</span>
                  </div>
                  <div className="flex gap-3">
                    <span>•</span>
                    <span>how it compares to your past</span>
                  </div>
                </div>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">quick glance</h3>
                <div className="h-40 border border-dashed rounded-xl flex items-center justify-center" style={{ borderColor: 'var(--greyscale-4)', color: 'var(--greyscale-3)' }}>
                  mini chart / gauge
                </div>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">auto logging</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  every rep, set, and session saved. no taps needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="compare" className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl">uru.zone vs the rest</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>strength-first. real-time. adaptive.</p>
            </div>
            
            <ComparisonTable />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl">what users are saying</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>real lifters. real progress.</p>
            </div>
            
            <TestimonialGrid />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl">join the strength revolution</h2>
              <p style={{ color: 'var(--greyscale-3)' }}>rep by rep. set by set.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">the market gap</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  strength has been under-served by tech. uru.zone changes that.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">the first wearable for strength</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  uru.wear tracks form, tempo, and load — built for lifters, not runners.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">the first ai strength coach</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  real-time feedback adapts your training on the fly.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">the first strength ecosystem</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  wear + app + coaching = every rep measured, every set optimised.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">velocity based training, by default</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  train by velocity, not ego — right zone, fewer wasted reps, safer gains.
                </p>
              </div>
              <div className="panel rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl mb-4">inclusive by design</h3>
                <p style={{ color: 'var(--greyscale-3)' }}>
                  from youth athletes to pros to rehab — uru adapts, scales, and supports everyone.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                id="buy"
                href="#" 
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full"
              >
                get uru.wear
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                id="demo"
                href="#" 
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 border rounded-full"
              >
                request a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: 'var(--greyscale-5)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: 'var(--greyscale-3)' }}>
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
    </div>
  )
}