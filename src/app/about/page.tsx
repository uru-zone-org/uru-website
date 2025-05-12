"use client";

export default function AboutPage() {
  return (
    <section className="flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl space-y-6">
        <h2 className="typography-h2">What is URU_space</h2>

        <p className="typography-body">
          URU_space is a wearable strength training system that includes a sensor URU_tag and a companion URU_app.
        </p>

        <p className="typography-body">
          The device attaches to specially designed wearables and uses precision motion tracking to detect your lifts in real-time.
        </p>

        <p className="typography-body">
          It counts your reps, analyses your form, and provides adaptive training feedback.
        </p>

        <p className="typography-body">
          The URU app learns from your movement and creates personalised lifting programs.
        </p>

        <p className="typography-body">
          Whether you're aiming to build strength, improve endurance, or perfect your form, URU adjusts with you, rep by rep.
        </p>

        <p className="typography-body">Touch is how you communicate.</p>
        <p className="typography-body">Light and vibration are how URU speaks back.</p>
      </div>
    </section>
  );
}
