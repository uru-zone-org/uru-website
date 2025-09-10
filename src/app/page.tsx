import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import ProductSlideshow from '@/components/ProductSlideshow'
import ComparisonTable from '@/components/ComparisonTable'
import TestimonialGrid from '@/components/TestimonialGrid'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-zinc-100 rounded-sm flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-lg tracking-tight">uru.zone</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#wear" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                .wear
              </a>
              <a href="#app" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                .app
              </a>
              <a href="#compare" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                compare
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center gap-1 px-4 py-2 border border-zinc-700 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition-colors"
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
                <div className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
                  strength, reinvented
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 lowercase">
                  ai coaching + a wearable for lifters.
                </h1>
                <p className="text-xl text-zinc-400 max-w-lg mb-8">
                  every rep measured. every set optimised. velocity-based training inside. 
                  built for progress, not burnout.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a 
                    href="#buy" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                  >
                    get uru.wear
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="#demo" 
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                  >
                    watch demo
                  </a>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 border border-dashed border-zinc-700 rounded-full text-xs text-zinc-500">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  built in reykjavík
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero - URU.wear */}
        <section id="wear" className="relative h-screen border-y border-zinc-800">
          <ProductSlideshow
            images={[
              '/images/URU_Wristband.png',
              '/images/URU_Wristband-2.png',
              '/images/URU_Wristband-3.png'
            ]}
            title="uru.wear"
            description="the first wearable made for strength. tracks form, tempo, and load in real time."
            ctaText="get uru.wear"
            ctaHref="#buy"
          />
        </section>

        {/* How it Works */}
        <section className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">how it works</h2>
              <p className="text-zinc-400">plug in. lift. adapt in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">track every rep</h3>
                <p className="text-zinc-400">
                  form & posture, tempo & motion, load / reps / sets — all live.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">ai-powered coaching</h3>
                <p className="text-zinc-400">
                  technique cues, set-by-set adjustments, plateaus smashed.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">adaptable systems</h3>
                <p className="text-zinc-400">
                  choose programs that fit your goal. evolve as you progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Effort Loss */}
        <section className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">effort loss: knowing when to stop</h2>
              <p className="text-zinc-400">tempo slows as you fatigue. we track it in real time.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">low slowdown</h3>
                <p className="text-zinc-400">
                  low fatigue, high output — ideal for speed and recovery.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">high slowdown</h3>
                <p className="text-zinc-400">
                  higher fatigue — effective for muscle growth and endurance.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">smart stop</h3>
                <p className="text-zinc-400">
                  thresholds end sets at the right time — progress without overtraining.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero - URU.app */}
        <section id="app" className="relative h-screen border-y border-zinc-800">
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
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">live coaching</h3>
                <p className="text-zinc-400">
                  real-time cues, green / yellow / red guidance, adaptive sets.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">tracking & insights</h3>
                <p className="text-zinc-400">
                  reps, tempo, load, and uru.score — trends that actually help.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">recovery & readiness</h3>
                <p className="text-zinc-400">
                  see fatigue, plan the next session, avoid burnout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* URU.score */}
        <section className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">uru.score</h2>
              <p className="text-zinc-400">one number to see your day.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">what it shows</h3>
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
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">quick glance</h3>
                <div className="h-40 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center text-zinc-500">
                  mini chart / gauge
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">auto logging</h3>
                <p className="text-zinc-400">
                  every rep, set, and session saved. no taps needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="compare" className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">uru.zone vs the rest</h2>
              <p className="text-zinc-400">strength-first. real-time. adaptive.</p>
            </div>
            
            <ComparisonTable />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">what users are saying</h2>
              <p className="text-zinc-400">real lifters. real progress.</p>
            </div>
            
            <TestimonialGrid />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-bold lowercase">join the strength revolution</h2>
              <p className="text-zinc-400">rep by rep. set by set.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">the market gap</h3>
                <p className="text-zinc-400">
                  strength has been under-served by tech. uru.zone changes that.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">the first wearable for strength</h3>
                <p className="text-zinc-400">
                  uru.wear tracks form, tempo, and load — built for lifters, not runners.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">the first ai strength coach</h3>
                <p className="text-zinc-400">
                  real-time feedback adapts your training on the fly.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">the first strength ecosystem</h3>
                <p className="text-zinc-400">
                  wear + app + coaching = every rep measured, every set optimised.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">velocity based training, by default</h3>
                <p className="text-zinc-400">
                  train by velocity, not ego — right zone, fewer wasted reps, safer gains.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 lowercase">inclusive by design</h3>
                <p className="text-zinc-400">
                  from youth athletes to pros to rehab — uru adapts, scales, and supports everyone.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                id="buy"
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors"
              >
                get uru.wear
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                id="demo"
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                request a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
            <div>
              © {new Date().getFullYear()} uru.zone — made for lifters. built in reykjavík.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300">privacy</a>
              <a href="#" className="hover:text-zinc-300">terms</a>
              <a href="#" className="hover:text-zinc-300">support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}