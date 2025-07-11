import React from "react";

export default function HomePage() {
  return (
    <section className="flex items-center justify-center h-[60vh] px-8 max-w-3xl mx-auto">
      <div className="space-y-4 text-center">
        <blockquote className="typography-body leading-tight">
          “URU.zone brings together
          <br />wearables, software, and sensory design
          <br />transforming workouts into
          <br />intelligent, data-driven experiences.”
        </blockquote>
        <p className="typography-body">The technology is ready.</p>
        <p className="typography-body">URU.Wear soft launch begins early 2026.</p>
        <p className="typography-body">Join the Zone.</p>
      </div>
    </section>
  );
}
