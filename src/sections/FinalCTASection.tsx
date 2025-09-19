// src/sections/FinalCTASection.tsx
import { ChevronRight } from 'lucide-react'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'

export function FinalCTASection() {
  return (
    <Section>
      <SectionHeader 
        title="join the strength revolution" 
        subtitle="rep by rep. set by set."
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card 
          title="the market gap"
          description="strength has been under-served by tech. uru.zone changes that."
        />
        <Card 
          title="the first wearable for strength"
          description="uru.wear tracks form, tempo, and load — built for lifters, not runners."
        />
        <Card 
          title="the first ai strength coach"
          description="real-time feedback adapts your training on the fly."
        />
        <Card 
          title="the first strength ecosystem"
          description="wear + app + coaching = every rep measured, every set optimised."
        />
        <Card 
          title="velocity based training, by default"
          description="train by velocity, not ego — right zone, fewer wasted reps, safer gains."
        />
        <Card 
          title="inclusive by design"
          description="from youth athletes to pros to rehab — uru adapts, scales, and supports everyone."
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary" href="#">
          get uru.wear
          <ChevronRight className="w-4 h-4" />
        </Button>
        <Button variant="secondary" href="#">
          request a demo
        </Button>
      </div>
    </Section>
  )
}