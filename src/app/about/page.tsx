"use client";

import React from "react";

const content = [
  {
    title: "URU_Zone",
    subtitle: "Strength training meets intelligent motion.",
    body: "Welcome to URU_Space, a new ecosystem of performance tools that combine data precision with gestural communication. We build tech that listens to your body in motion and responds.",
  },
  {
    title: "What is URU_Wear?",
    body: [
      "URU_Wear is our first product line, designed to make strength training smarter, sharper, and more intuitive. It combines:",
      "URU_Tag : A 400Hz motion sensor that reads movement arcs, resistance, and form.",
      "URU_Glove : Ergonomic, breathable gloves with a seamless design.",
      "URU_App : A digital interface that speaks through gesture.",
      "This is performance tech that feels as good as it performs.",
    ],
  },
  {
    title: "Speak with Motion",
    body: [
      "Data is only half the story. URU adds motion language.",
      "Our system communicates through visual gradients, haptic pulses, and LED signals, so you can adjust your form mid-set without looking at a screen.",
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
      "Offers adaptive training plans powered by X-Packs, goal-based subscriptions for strength, mobility, or endurance",
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

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center px-4 py-20 space-y-20 max-w-4xl mx-auto">
      {content.map((section, idx) => (
        <article key={idx} className="space-y-2 w-full">
          {section.title && (
            idx === 0 ? (
              <h1 className="typography-h1">{section.title}</h1>
            ) : (
              <h2 className="typography-h2">{section.title}</h2>
            )
          )}

          {section.subtitle && (
            <h2 className="typography-h2">{section.subtitle}</h2>
          )}

          {typeof section.body === "string" && (
            <p className="typography-body">{section.body}</p>
          )}
          {Array.isArray(section.body) &&
            section.body.map((para, i) => (
              <p key={i} className="typography-body">{para}</p>
            ))}

          {section.list &&
            section.list.map((item, i) =>
              typeof item === "string" ? (
                <p key={i} className="typography-body">{item}</p>
              ) : (
                <p key={i} className="typography-body">
                  {item.label} — {item.description}
                </p>
              )
            )}

          {section.closing && (
            <p className="typography-body">{section.closing}</p>
          )}

          {section.cta && (
            <a href="#" className="typography-body block mt-4 hover:underline">
              {section.cta}
            </a>
          )}
        </article>
      ))}
    </section>
  );
}
