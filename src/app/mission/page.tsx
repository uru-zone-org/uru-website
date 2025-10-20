
import { ComparisonSection } from '@/sections/ComparisonSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { FinalCTASection } from '@/sections/FinalCTASection'
import { EffortLossSection } from '@/sections/EffortLossSection'

export default function MissionePage() {
  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--primary-color)',
      }}
    >
      <EffortLossSection />
    </div>
  )
}