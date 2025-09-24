
import { ComparisonSection } from '@/sections/ComparisonSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { FinalCTASection } from '@/sections/FinalCTASection'

export default function ComparePage() {
  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--primary-color)',
      }}
    >
      <ComparisonSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  )
}