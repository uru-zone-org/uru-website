// src/sections/ComparisonSection.tsx
import { Section } from '@/components/Section'
import { Check, X, HelpCircle } from 'lucide-react'

type FeatureStatus = boolean | 'maybe'

interface Feature {
  name: string
  uruzone: FeatureStatus
  smartwatch: FeatureStatus
  fitnessTracker: FeatureStatus
}

function StatusIcon({ status }: { status: FeatureStatus }) {
  if (status === true) {
    return <Check className="w-5 h-5" style={{ color: 'var(--accent)', opacity: 0.9 }} />
  }
  if (status === 'maybe') {
    return <HelpCircle className="w-5 h-5" style={{ color: 'var(--status-info)' }} />
  }
  return <X className="w-5 h-5" style={{ color: 'var(--dumbell-30)' }} />
}

const features: Feature[] = [
  {
    name: 'strength-specific metrics',
    uruzone: true,
    smartwatch: false,
    fitnessTracker: false
  },
  {
    name: 'real-time ai coaching',
    uruzone: true,
    smartwatch: false,
    fitnessTracker: false
  },
  {
    name: 'adaptive training plans',
    uruzone: true,
    smartwatch: 'maybe' as const,
    fitnessTracker: false
  },
  {
    name: 'form & tempo tracking',
    uruzone: true,
    smartwatch: false,
    fitnessTracker: false
  },
  {
    name: 'time / velocity based',
    uruzone: true,
    smartwatch: false,
    fitnessTracker: false
  }
]

export function ComparisonSection() {
  return (
    <Section id="compare">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <h2>uru.zone vs the rest</h2>
        </div>

        <div className="mt-8">
          <div className="surface-table p-6 transition-all duration-500 hover:scale-[1.01]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="text-left px-6 py-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                      feature
                    </th>
                    <th className="text-left px-6 py-4 font-medium" style={{ color: 'var(--accent)', opacity: 0.9 }}>
                      uru.zone
                    </th>
                    <th className="text-left px-6 py-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                      smartwatch
                    </th>
                    <th className="text-left px-6 py-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                      fitness tracker
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      style={{
                        borderBottom: index !== features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
                      }}
                    >
                      <td className="px-6 py-4" style={{ color: 'var(--text-secondary)' }}>
                        {feature.name}
                      </td>
                      <td className="px-6 py-4">
                        <StatusIcon status={feature.uruzone} />
                      </td>
                      <td className="px-6 py-4">
                        <StatusIcon status={feature.smartwatch} />
                      </td>
                      <td className="px-6 py-4">
                        <StatusIcon status={feature.fitnessTracker} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
