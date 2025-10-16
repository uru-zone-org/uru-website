// src/sections/HeroSection.tsx
import { ChevronRight, Activity, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export function HeroSection() {
  return (
    <Section 
      media={['/images/URU_Wear.png']}
      fullHeight
      fadeIntensity="strong"
      overlayOpacity={0.4}
    >
      {/* Main Hero Content */}
      <div className="flex flex-col justify-center min-h-[calc(100vh-160px)]">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-yellow-500/90 uppercase tracking-wider">
              Now Available
            </span>
          </span>
        </div>

        {/* Main Headlines */}
        <div className="space-y-6 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold 
            bg-gradient-to-r from-white via-white to-gray-400 
            bg-clip-text text-transparent leading-tight animate-fade-in-up">
            strength,<br/>
            <span className="text-yellow-500">reinvented</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl animate-fade-in-up animation-delay-200">
            AI coaching meets velocity-based training. 
            Every rep measured. Every set optimized.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/5 backdrop-blur-sm border border-white/10">
            <Activity className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Real-time Feedback</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/5 backdrop-blur-sm border border-white/10">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Velocity Tracking</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/5 backdrop-blur-sm border border-white/10">
            <TrendingUp className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Progressive Overload</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animation-delay-600">
          <Button 
            variant="primary" 
            href="#buy"
            className="group px-8 py-4 text-lg bg-yellow-500 hover:bg-yellow-400 
              text-black font-semibold rounded-full transition-all duration-300 
              hover:scale-105 hover:shadow-[0_20px_40px_rgba(234,179,8,0.3)]"
          >
            Get URU.wear
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="secondary" 
            href="#demo"
            className="px-8 py-4 text-lg border-2 border-white/20 hover:border-white/40 
              text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 
              hover:bg-white/10 hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-6 animate-fade-in-up animation-delay-800">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br 
                from-gray-600 to-gray-700 border-2 border-black" />
            ))}
          </div>
          <p className="text-sm text-gray-400">
            <span className="text-white font-semibold">500+</span> athletes already training smarter
          </p>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-bounce animation-delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 
          flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll-down"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 
        bg-yellow-500/20 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 
        bg-blue-500/20 rounded-full blur-3xl opacity-10 animate-pulse-slow animation-delay-2000" />
    </Section>
  )
}

// Add these to your global CSS file:
/*
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { 
    opacity: 0; 
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.2; }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-scroll-down {
  animation: scroll-down 1.5s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-800 { animation-delay: 800ms; }
.animation-delay-1000 { animation-delay: 1000ms; }
.animation-delay-2000 { animation-delay: 2000ms; }
*/