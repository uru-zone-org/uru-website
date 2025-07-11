"use client";

import React, { useState } from "react";

const content = [
  {
    title: "URU.zone",
    subtitle: "Strength Training, Reinvented.",
    body: [
      "URU.zone is a next-gen fitness platform combining wearables, software, and real-time coaching.",
      "Our URU.Wear system turns every rep into meaningful data - tracking form, weight, tempo, and performance with precision"
    ],
    closing: "Workout! - feedback, flow, and results,"
  },
  {
    title: "Why URU?",
    body: [
      "Built for Strength",
      "Tracks over 200 strength exercises with high-resolution motion sensing—designed specifically for resistance training.",
      "Real-Time Intelligence",
      "Adaptive coaching. Haptic feedback. LED form cues.",
      "Train smarter, not harder.",
      "A Training App That Trains You",
      "Your digital coach evolves with you, delivering data-driven recommendations and personalised progress plans.",
      "Scalable by Design",
      "From wearables to subscription-based X-Packs, URU.zone is a full-stack ecosystem built to grow."
    ]
  },
  {
    title: "The Opportunity",
    quote: "“Exercise is the most potent longevity drug in our arsenal.” — Dr. Peter Attia, M.D.",
    body: "Strength training is underserved by fitness tech, URU.zone fills this gap, delivering real-time, precision insights where others offer estimates"
  },
  {
    title: "The URU.system",
    subtitle: "A Multi-Level, Science-Driven Model for Strength & Group Training",
    body: [
      "The URU.system is a performance-based methodology developed over 13 years of applied coaching and grounded in modern exercise science",
      "It blends structure, physiology, and progression, training clients with the precision and intent of athletic programming, tailored to all fitness levels"
    ]
  },
  {
    title: "What Makes the URU.system Different?",
    body: [
      "Every session is built for progress, not just effort",
      "Core structure includes Daily Undulating Periodisation (DUP), 3 Levels from Beginner to Advanced, 4 Rotating Session Types per Week, 200+ Scientifically Structured Workouts",
      "Backed by physiology: mTOR activation for hypertrophy & strength, AMPK activation for fat oxidation & endurance, neuromuscular potentiation for power & speed, self-efficacy development for consistency & retention"
    ]
  },
  {
    title: "Built for URU.Wear",
    body: [
      "The URU.system was designed to be tracked, and URU.Wear does exactly that",
      "Core sensor is the URU.Tag, a high-frequency motion sensor that attaches to the back of the hand via the URU.Glove, designed for comfort, precision, and seamless tracking during strength training",
      "It tracks time-under-tension, rest periods, and tempo, analyses each rep with eccentric and concentric timing, provides real-time feedback via LED, haptics, and app",
      "Adaptive coaching and fatigue monitoring, URU.score gamifies progress rewarding consistency, effort, and form, and sessions can be re-tested, refined, and compared over time"
    ]
  },
  {
    title: "Who It’s For",
    body: [
      "Individuals looking for structured, measurable strength training",
      "Personal trainers delivering 1-on-1 or small group coaching",
      "Gyms and studios seeking plug-and-play programming",
      "Performance centres aiming for science-backed, trackable progress",
      "Digital fitness platforms needing scalable, intelligent training systems"
    ]
  },
  {
    title: "The Team",
    body: [
      "From deep tech and design to health science and business, URU.zone is built by experts",
      "Haukur Hafsteinsson - Embedded software specialist", 
      "Sveinn Hrinrik Guðmundsson – Founder/CEO and deep-tech inventor",
      "Garðar Eyjólfsson – Creative Director and storyteller",
      "Sigríður B. Matthíasdóttir – Software Developer, UI/UX and designer",
      "Helgi Jónas Guðfinnson – Health scientist, S&C coach, osteopath",
      "Kolbeinn Björnsson - Business development",
      "Guðmundur Kárason – Legal & business advisor, plus a growing network of specialists across sport, tech, and design"
    ]
  },
  {
    title: "Ready to Move Into the Future?",
    body: [
      "We’re building the next generation of strength training and expanding the URU.zone ecosystem into a complete suite of intelligent fitness tools",
      "URU.zone is not just a concept, it’s real, it’s built, and it’s launching",
      "The technology is ready, the system is alive, and the future of strength training is in motion",
      "Soft launch of URU.Wear begins in early 2026, app development, product optimisation, beta testing, go-to-market",
      "Join us, invest, collaborate, grow with us, join the Zone"
    ]
  },
];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSection = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1);
  };

  const nextSection = () => {
    if (currentIndex < content.length - 1) setCurrentIndex(i => i + 1);
  };

  const { title, subtitle, quote, body, closing } = content[currentIndex];

  return (
    <section className="flex flex-col h-screen">
      {/* Fixed header */}
      <header className="flex-none px-8 py-6">
        {currentIndex === 0
          ? <h1 className="typography-h1">{title}</h1>
          : <h2 className="typography-h2">{title}</h2>
        }
        {subtitle && <h3 className="typography-h3">{subtitle}</h3>}
      </header>

      {/* Scrollable content */}
      <main className="flex-grow overflow-y-auto px-8 py-6">
        {quote && <blockquote className="typography-body mb-4">{quote}</blockquote>}
        {Array.isArray(body)
          ? body.map((line, i) => (
              <p key={i} className="typography-body mb-2">{line}</p>
            ))
          : <p className="typography-body mb-2">{body}</p>
        }
        {closing && <p className="typography-body mt-4">{closing}</p>}
      </main>

      {/* Fixed footer */}
      <footer className="flex-none flex justify-between items-center px-8 py-4">
        <button
          onClick={prevSection}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded shadow disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {content.length}
        </span>
        <button
          onClick={nextSection}
          disabled={currentIndex === content.length - 1}
          className="px-4 py-2 rounded shadow disabled:opacity-50"
        >
          Next →
        </button>
      </footer>
    </section>
  );
}
