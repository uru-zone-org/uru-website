type TeamMember = {
  id: string
  name: string
  role: string
  images: [string, string] // [default, hover]
}

const TEAM: TeamMember[] = [
  {
    id: 'sveinn',
    name: 'Sveinn H. Guðmundsson',
    role: 'CEO / CTO & Founder',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'kolbeinn',
    name: 'Kolbeinn Björnsson',
    role: 'Business Development',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'fridrik',
    name: 'Friðrik Kárason',
    role: 'AI/ML Advisor',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'gardar',
    name: 'Garðar Eyjólfsson',
    role: 'Creative Director',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'gudmundur',
    name: 'Guðmundur Kárason',
    role: 'Legal Advisor',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'helgi',
    name: 'Helgi Jónas Guðfinnsson',
    role: 'Osteopath & Strength Specialist',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'haukur',
    name: 'Haukur Hafsteinsson',
    role: 'Embedded Systems Specialist',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
  {
    id: 'sigga',
    name: 'Sigríður Birna Matthíasdóttir',
    role: 'Software Developer',
    images: ['/placeholder-blue.png', '/placeholder-yellow.png'],
  },
]

export default function TeamPage() {
  return (
    <div
      className="w-full py-20"
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--primary-color)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          The Team
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center w-[250px]"
            >
              <div className="relative w-[250px] h-[300px] rounded-xl overflow-hidden cursor-pointer group">
                {/* Base (image 1 placeholder) */}
                <div className="absolute inset-0 bg-[var(--gray)] transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>

                {/* Hover (image 2 placeholder) */}
                <div className="absolute inset-0 bg-[var(--default)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>

              <h3 className="mt-4 text-lg font-medium text-center">
                {member.name}
              </h3>
              <p className="text-sm text-center opacity-70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
