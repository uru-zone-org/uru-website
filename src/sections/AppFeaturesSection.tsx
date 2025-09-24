// src/sections/AppFeaturesSection.tsx
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'

export function AppFeaturesSection() {
  return (
<Section 
  backgroundType="radial" 
  backgroundColor="var(--greyscale-5)"
  fadeIntensity="medium"
>
              <SectionHeader 
                title="App Features" 
                subtitle="lala"
              />
       <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="live coaching"
          description="real-time cues, green / yellow / red guidance, adaptive sets."
        featured={true}
        />
        <Card 
          title="tracking & insights"
          description="reps, tempo, load, and uru.score — trends that actually help."
        />
        <Card 
          title="recovery & readiness"
          description="see fatigue, plan the next session, avoid burnout."
        />
      </div>
    </Section>
  )
}