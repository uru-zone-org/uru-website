"use client";

import React from "react";

const content = [
  {
    title: "URU_Zone",
    subtitle: "Strength training meets intelligent motion.",
    body: "Welcome to URU_Space — a new ecosystem of performance tools that combine data precision with gestural communication. We build tech that listens to your body in motion — and responds.",
    highlights: ["URU_Space"],
  },
  {
    title: "What is URU_Wear?",
    body: [
      "URU_Wear is our first product line, designed to make strength training smarter, sharper, and more intuitive. It combines:",
      "URU_Tag – A 400Hz motion sensor that reads movement arcs, resistance, and form.",
      "URU_Glove – Ergonomic, breathable gloves with a seamless design.",
      "URU_App – A digital interface that speaks through gesture.",
      "This is performance tech that feels as good as it performs.",
    ],
    highlights: ["URU_Wear", "URU_Tag", "URU_Glove", "URU_App"],
  },
  {
    title: "Speak with Motion",
    body: [
      "Data is only half the story. URU adds motion language.",
      "Our system communicates through visual gradients, haptic pulses, and LED signals — so you can adjust your form mid-set without looking at a screen.",
    ],
    list: [
      { label: "Data Mode", description: "Metrics, charts, progression logs" },
      { label: "Gestural Mode", description: "Colours, pulses, and flow-based feedback" },
    ],
    closing: "URU lets you feel how you’re moving — and move better.",
  },
  {
    title: "The URU_App",
    body: [
      "Your body. Your coach. Your feedback loop.",
      "The URU_App captures every rep and responds with real-time coaching:",
    ],
    list: [
      "Tracks reps, sets, range of motion, resistance",
      "Detects fatigue and adjusts intensity",
      "Offers adaptive training plans powered by X-Packs — goal-based subscriptions for strength, mobility, or endurance",
    ],
  },
  {
    title: "The URU_Tag",
    body: [
      "A new sensor for a new kind of training.",
      "URU_Tag reads movement at 400Hz, syncing seamlessly with your glove and app.",
    ],
    list: [
      "Tracks form quality",
      "Time under tension",
      "Movement efficiency",
    ],
    closing: "Then gives instant feedback — visually and physically. No distractions. Just full-body awareness.",
  },
  {
    title: "Launching Soon",
    body: [
      "Beta drops in Iceland. Join the waitlist and help shape the future of strength training.",
    ],
    cta: "Get Early Access",
  },
];

// Highlight helper using your typography-h3 class for inline yellow emphasis
function highlightText(text: string, highlights: string[]) {
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'));
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="typography-h3">{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center px-4 py-20 space-y-20 max-w-4xl mx-auto">
      {content.map((section, idx) => (
        <article key={idx} className="space-y-6 w-full">
          {section.title && (
            idx === 0 ? (
              <h1 className="typography-h1">{section.title}</h1>
            ) : (
              <div className="typography-h2">{section.title}</div>
            )
          )}
          {section.subtitle && (
            <p className="typography-sub">{section.subtitle}</p>
          )}
          {typeof section.body === "string" && (
            <p className="typography-body">
              {section.highlights ? highlightText(section.body, section.highlights) : section.body}
            </p>
          )}
          {Array.isArray(section.body) &&
            section.body.map((para, i) => (
              <p key={i} className="typography-body">
                {section.highlights ? highlightText(para, section.highlights) : para}
              </p>
            ))}
          {section.list && (
            <ul className="typography-body space-y-1 pl-4 list-disc list-inside">
              {section.list.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    <span className="font-bold">{item.label}</span> – {item.description}
                  </li>
                )
              )}
            </ul>
          )}
          {section.closing && (
            <p className="typography-body">{section.closing}</p>
          )}
          {section.cta && (
            <a href="#" className="typography-sub block mt-4 hover:underline">
              {section.cta}
            </a>
          )}
        </article>
      ))}
    </section>
  );
}
