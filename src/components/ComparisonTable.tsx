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
      return <Check className="w-5 h-5 text-yellow-400" />
    }
    if (status === 'maybe') {
      return <HelpCircle className="w-5 h-5 text-blue-400" />
    }
    return <X className="w-5 h-5 text-red-400" />
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left px-6 py-4 font-semibold text-zinc-100">feature</th>
              <th className="text-left px-6 py-4 font-semibold text-zinc-100">uru.zone</th>
              <th className="text-left px-6 py-4 font-semibold text-zinc-100">smartwatch</th>
              <th className="text-left px-6 py-4 font-semibold text-zinc-100">fitness tracker</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={feature.name}
                className={index !== features.length - 1 ? "border-b border-zinc-800" : ""}
              >
                <td className="px-6 py-4 text-zinc-300">{feature.name}</td>
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