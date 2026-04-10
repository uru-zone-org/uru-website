"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════════════════
   Constants & config
   ═══════════════════════════════════════════════════════════ */

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbznM9fTzwGMaF4kmDeAhfzq8A0puhkk756ZQKNVIJ2LqXVd4wodIKEWz9tHSHesJqGHAA/exec";

/* ─── User scale questions ─── */
export const USER_PERCEPTION_QUESTIONS = [
  { id: "q1ReflectionAccuracy", label: "Q1. Reflection accuracy", text: "Did the feedback reflect how you actually performed?", low: "Not at all", mid: "Partly", high: "Very clearly" },
  { id: "q2Trust", label: "Q2. Trust", text: "Did you trust this as an accurate measure of your movement?", low: "Did not trust it", mid: "Unsure", high: "Trusted it" },
  { id: "q3TrainingImpact", label: "Q3. Training impact", text: "Would you use this to guide how you train?", low: "Would not use it", mid: "Maybe", high: "Would use it" },
  { id: "q4Integration", label: "Q4. Integration", text: "Did this fit naturally into your training session?", low: "Clunky", mid: "Mixed", high: "Very natural" },
  { id: "q5Awareness", label: "Q5. Awareness", text: "Did this make you more aware of how you were moving?", low: "Not at all", mid: "Somewhat", high: "Much more aware" },
];

export const USER_VALUE_QUESTIONS = [
  { id: "overallSessionValue", label: "Overall session value", text: "How valuable was this session overall?", low: "Low", mid: "Moderate", high: "High" },
  { id: "wouldUseAgain", label: "Would use again", text: "Would you train with this again?", low: "Definitely not", mid: "Maybe", high: "Definitely yes" },
  { id: "confidenceToApplyAgain", label: "Confidence to apply again", text: "How confident are you that you could apply this again?", low: "Not confident", mid: "Somewhat", high: "Very confident" },
];

export const DECISION_CHANGE_OPTIONS = [
  { value: "cue", label: "Cue" },
  { value: "load", label: "Load" },
  { value: "rest", label: "Rest" },
  { value: "techniqueFocus", label: "Technique focus" },
  { value: "exerciseChoice", label: "Exercise choice" },
  { value: "noChange", label: "No change" },
];

/* ═══════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════ */

export type ScaleValues = Record<string, number | null>;

export interface TrainerRow {
  trainer_id: string; user_id: string; device_id: string; exercise: string;
  capture_success: number; technical_issue: number; coaching_value: number;
  revealed_something_new: number; behavior_change: number;
  confirmed_observation: number; validated_next_set: number;
  observed_change_score: number; would_recommend: number;
  [key: string]: string | number;
}

export interface UserRow {
  trainer_id: string; user_id: string; primary_device_id: string;
  q1_reflection_accuracy: number; q2_trust: number; q3_training_impact: number;
  q4_integration: number; q5_awareness: number;
  immediate_perceived_score: number; session_value_score: number;
  private_review: number; would_recommend: number;
  [key: string]: string | number;
}

/* ═══════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════ */

export function avg(values: (number | null | undefined)[]): string | null {
  const nums = values.filter((v): v is number => v != null);
  if (nums.length === 0) return null;
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
}

export function pct(values: (number | null | undefined)[]): string {
  const nums = values.filter((v): v is number => v != null);
  if (nums.length === 0) return "—";
  const a = nums.reduce((s, v) => s + v, 0) / nums.length;
  return `${(a * 100).toFixed(0)}%`;
}

export function uniqueCount<T>(items: T[], key: keyof T): number {
  const s = new Set(items.map((r) => String(r[key] || "").trim()).filter(Boolean));
  return s.size;
}

export function includesIC(value: string, query: string): boolean {
  return String(value || "").toLowerCase().includes(String(query || "").toLowerCase());
}

export function avgField(rows: Record<string, string | number>[], field: string): string {
  const vals = rows.map((r) => Number(r[field])).filter(Number.isFinite);
  if (!vals.length) return "—";
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
}

export function pctField(rows: Record<string, string | number>[], field: string): string {
  const vals = rows.map((r) => Number(r[field])).filter(Number.isFinite);
  if (!vals.length) return "—";
  return `${((vals.reduce((a, b) => a + b, 0) / vals.length) * 100).toFixed(0)}%`;
}

export function groupBy<T extends Record<string, string | number>>(rows: T[], field: string) {
  return rows.reduce<Record<string, T[]>>((acc, row) => {
    const key = String(row[field] || "").trim() || "Unknown";
    if (!acc[key]) acc[key] = [];
    acc[key].push(row);
    return acc;
  }, {});
}

/* ═══════════════════════════════════════════════════════════
   Password Gate
   ═══════════════════════════════════════════════════════════ */

export function PasswordGate({ onAuthenticated }: { onAuthenticated: (role: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/feedback/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await res.json();
        onAuthenticated(data.role || "scoreboard");
      } else {
        setError("Incorrect password.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="feedback-gate">
      <form className="gate-card" onSubmit={handleSubmit}>
        <p className="eyebrow">URUzone Beta</p>
        <h1>Beta Interface</h1>
        <p>Enter the password to access the beta environment.</p>
        {error && <p className="gate-error">{error}</p>}
        <input
          className="gate-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button className="fb-primary-btn" type="submit" disabled={loading} style={{ width: "100%" }}>
          {loading ? "Checking..." : "Enter"}
        </button>
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Scale Question component (shared by user & trainer)
   ═══════════════════════════════════════════════════════════ */

export function ScaleQuestion({
  id, label, text, low, mid, high, value, invalid, onChange, required,
}: {
  id: string; label: string; text: string;
  low: string; mid: string; high: string;
  value: number | null; invalid: boolean;
  onChange: (id: string, val: number) => void;
  required?: boolean;
}) {
  return (
    <article className="question-card">
      <div className="question-head">
        <h3>{label}{required && <span className="req">*</span>}</h3>
        <span className="selected-value">{value ? `${value}/5` : "1–5"}</span>
      </div>
      <p className="question-text">{text}</p>
      <div className={`scale-group${invalid ? " invalid" : ""}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="scale-option">
            <input
              type="radio"
              name={id}
              value={n}
              checked={value === n}
              onChange={() => onChange(id, n)}
            />
            <span>{n}</span>
          </label>
        ))}
      </div>
      <div className="scale-labels">
        <span>{low}</span>
        <span>{mid}</span>
        <span>{high}</span>
      </div>
    </article>
  );
}
