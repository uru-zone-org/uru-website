"use client";

import Link from "next/link";
import "../../styles/feedback.css";

export default function ScoreboardLanding() {
  return (
    <div className="page-shell page-light">
      <section className="app-card">
        <header className="page-header">
          <p className="eyebrow">URUzone Beta</p>
          <h1>Beta Interface</h1>
          <p className="intro">Select a mode to enter the beta environment.</p>
        </header>

        <section className="section">
          <div className="section-heading">
            <h2>Choose your role</h2>
            <p>Each page reflects a different layer of the beta system.</p>
          </div>

          <div className="card-grid card-grid-3">
            <Link href="/scoreboard/trainer" className="option-card link-card">
              <h3>Trainer</h3>
              <p>Log set outcomes, coaching interpretation, and next-set validation.</p>
            </Link>
            <Link href="/scoreboard/user" className="option-card link-card">
              <h3>User</h3>
              <p>Complete a private session review based on experience and clarity.</p>
            </Link>
            <Link href="/scoreboard/dashboard" className="option-card link-card">
              <h3>Scoreboard</h3>
              <p>Review metrics across trainers, users, devices, and exercises.</p>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
