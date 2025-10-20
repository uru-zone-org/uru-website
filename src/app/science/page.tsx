
import { ScienceIntro } from '@/sections/ScienceInto'
import { ScienceSummary } from '@/sections/ScienceSummary'
import { UruScoreSection } from '@/sections/UruScoreSection'

export default function WearPage() {
  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--primary-color)',
      }}
    >
      <ScienceIntro />
      <UruScoreSection />
      <ScienceSummary />
    </div>
  )
}