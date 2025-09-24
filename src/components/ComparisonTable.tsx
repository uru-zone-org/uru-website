import { Check, X, HelpCircle } from 'lucide-react'

type FeatureStatus = boolean | 'maybe'

interface Feature {
  name: string
  uruzone: FeatureStatus
  smartwatch: FeatureStatus
  fitnessTracker: FeatureStatus
}

export default function ComparisonTable() {
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

  const StatusIcon = ({ status }: { status: FeatureStatus }) => {
    if (status === true) {
      return <Check className="w-5 h-5" style={{ color: 'var(--yellow)', opacity: 0.9 }} />
    }
    if (status === 'maybe') {
      return <HelpCircle className="w-5 h-5" style={{ color: 'var(--blue)' }} />
    }
    return <X className="w-5 h-5" style={{ color: ' var(--greyscale-1)' }} />
  }

  return (
    <div 
      className="rounded-2xl p-6 transition-all duration-500 hover:scale-[1.01]"
      style={{ 
        background: 'linear-gradient(135deg, black 0%, var(--greyscale-6) 50%, black 100%)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <th className="text-left px-6 py-4 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                feature
              </th>
              <th className="text-left px-6 py-4 font-medium" style={{ color: 'var(--yellow)', opacity: 0.9 }}>
                uru.zone
              </th>
              <th className="text-left px-6 py-4 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                smartwatch
              </th>
              <th className="text-left px-6 py-4 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
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
                <td className="px-6 py-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
  )
}