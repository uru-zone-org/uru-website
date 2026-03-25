"use client";

import { useState, useEffect, useCallback } from "react";
import "../../styles/feedback.css";

/* ─── Scale question config ─── */
const PERCEPTION_QUESTIONS = [
  {
    id: "Feedback made sense",
    label: "Q1. Feedback made sense",
    low: "Completely confusing",
    mid: "Partly clear",
    high: "Fully clear",
  },
  {
    id: "Believable",
    label: "Q2. Believable",
    low: "Unrealistic",
    mid: "Unsure",
    high: "Very believable",
  },
  {
    id: "Would help training",
    label: "Q3. Would help training",
    low: "Not useful",
    mid: "Somewhat useful",
    high: "Very useful",
  },
  {
    id: "Frictionless to train with",
    label: "Q4. Frictionless to train with",
    low: "Clunky / frustrating",
    mid: "Mixed or acceptable",
    high: "Very smooth and easy",
  },
  {
    id: "Fun motivational",
    label: "Q5. Fun / motivational",
    low: "Not at all",
    mid: "Neutral",
    high: "Very fun or motivating",
  },
];

const VALUE_QUESTIONS = [
  {
    id: "Overall session value",
    label: "Overall session value",
    low: "Low value",
    mid: "Moderate value",
    high: "High value",
  },
  {
    id: "Would use again",
    label: "Would use again",
    low: "Definitely not",
    mid: "Maybe",
    high: "Definitely yes",
  },
  {
    id: "Confidence to apply again",
    label: "Confidence to apply again",
    low: "Not confident",
    mid: "Somewhat confident",
    high: "Very confident",
  },
];

/* ─── Types ─── */
type ScaleValues = Record<string, number | null>;

/* ─── Password Gate ─── */
function PasswordGate({ onAuthenticated }: { onAuthenticated: () => void }) {
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
        onAuthenticated();
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
        <h1>Session Review</h1>
        <p>Enter the password to access the feedback form.</p>
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

/* ─── Scale Question Component ─── */
function ScaleQuestion({
  id,
  label,
  low,
  mid,
  high,
  value,
  invalid,
  onChange,
}: {
  id: string;
  label: string;
  low: string;
  mid: string;
  high: string;
  value: number | null;
  invalid: boolean;
  onChange: (id: string, val: number) => void;
}) {
  return (
    <div className="fb-question-card">
      <div className="fb-question-head">
        <h3>{label}</h3>
        <span className="fb-selected-value">
          {value ? `Selected: ${value}/5` : "Not rated"}
        </span>
      </div>
      <div className={`fb-scale-group${invalid ? " invalid" : ""}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`fb-scale-btn${value === n ? " active" : ""}`}
            onClick={() => onChange(id, n)}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="fb-scale-labels">
        <span>{low}</span>
        <span>{mid}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}

/* ─── Main Feedback Form ─── */
function FeedbackForm() {
  const [trainerId, setTrainerId] = useState("");
  const [userId, setUserId] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [primaryDeviceId, setPrimaryDeviceId] = useState("");
  const [setsInSession, setSetsInSession] = useState("");

  const [scales, setScales] = useState<ScaleValues>({});

  const [biggestFriction, setBiggestFriction] = useState("");
  const [mostUsefulFeedback, setMostUsefulFeedback] = useState("");
  const [sessionReviewNotes, setSessionReviewNotes] = useState("");
  const [sessionReviewPrivate, setSessionReviewPrivate] = useState(false);

  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState<{ text: string; type: "error" | "success" } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Set default date
  useEffect(() => {
    setReviewDate(new Date().toISOString().split("T")[0]);
    loadDraft();
  }, []);

  function handleScaleChange(id: string, val: number) {
    setScales((prev) => ({ ...prev, [id]: val }));
    setInvalidFields((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  const allScaleIds = [...PERCEPTION_QUESTIONS, ...VALUE_QUESTIONS].map((q) => q.id);

  const perceptionAvg = useCallback(() => {
    const vals = PERCEPTION_QUESTIONS.map((q) => scales[q.id]).filter(
      (v): v is number => v != null && v > 0
    );
    if (vals.length !== PERCEPTION_QUESTIONS.length) return null;
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  }, [scales]);

  const valueAvg = useCallback(() => {
    const vals = VALUE_QUESTIONS.map((q) => scales[q.id]).filter(
      (v): v is number => v != null && v > 0
    );
    if (vals.length !== VALUE_QUESTIONS.length) return null;
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  }, [scales]);

  function validate(): boolean {
    const invalid = new Set<string>();

    if (!trainerId.trim()) invalid.add("trainerId");
    if (!userId.trim()) invalid.add("userId");
    if (!reviewDate) invalid.add("reviewDate");
    if (!primaryDeviceId.trim()) invalid.add("primaryDeviceId");
    if (!setsInSession || Number(setsInSession) < 1) invalid.add("setsInSession");

    for (const id of allScaleIds) {
      if (!scales[id]) invalid.add(id);
    }

    setInvalidFields(invalid);
    if (invalid.size > 0) {
      setMessage({ text: "Please complete all required fields before submitting.", type: "error" });
      return false;
    }
    return true;
  }

  function getPayload() {
    return {
      "Trainer ID": trainerId.trim(),
      "User ID": userId.trim(),
      "Date": reviewDate,
      "Primary Device": primaryDeviceId.trim(),
      "Sets in Session": Number(setsInSession),
      ...Object.fromEntries(allScaleIds.map((id) => [id, scales[id] ?? null])),
      "Biggest friction": biggestFriction.trim(),
      "Most useful feedback": mostUsefulFeedback.trim(),
      "Optional notes": sessionReviewNotes.trim(),
      "Completed privately": sessionReviewPrivate ? "Yes" : "No",
      "Perception avg": perceptionAvg() ? Number(perceptionAvg()) : null,
      "Value avg": valueAvg() ? Number(valueAvg()) : null,
      "Submitted at": new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }

  function saveDraft() {
    try {
      localStorage.setItem("uruzonePrivateReviewDraft", JSON.stringify(getPayload()));
      setMessage({ text: "Draft saved on this device.", type: "success" });
    } catch {
      setMessage({ text: "Failed to save draft.", type: "error" });
    }
  }

  function loadDraft() {
    try {
      const raw = localStorage.getItem("uruzonePrivateReviewDraft");
      if (!raw) return;
      const draft = JSON.parse(raw);
      if (draft["Trainer ID"]) setTrainerId(draft["Trainer ID"]);
      if (draft["User ID"]) setUserId(draft["User ID"]);
      if (draft["Date"]) setReviewDate(draft["Date"]);
      if (draft["Primary Device"]) setPrimaryDeviceId(draft["Primary Device"]);
      if (draft["Sets in Session"]) setSetsInSession(String(draft["Sets in Session"]));
      if (draft["Biggest friction"]) setBiggestFriction(draft["Biggest friction"]);
      if (draft["Most useful feedback"]) setMostUsefulFeedback(draft["Most useful feedback"]);
      if (draft["Optional notes"]) setSessionReviewNotes(draft["Optional notes"]);
      if (draft["Completed privately"] === "Yes") setSessionReviewPrivate(true);

      const scaleUpdates: ScaleValues = {};
      for (const id of allScaleIds) {
        if (draft[id]) scaleUpdates[id] = draft[id];
      }
      setScales(scaleUpdates);
    } catch {
      // ignore corrupt draft
    }
  }

  function resetForm() {
    setTrainerId("");
    setUserId("");
    setReviewDate(new Date().toISOString().split("T")[0]);
    setPrimaryDeviceId("");
    setSetsInSession("");
    setScales({});
    setBiggestFriction("");
    setMostUsefulFeedback("");
    setSessionReviewNotes("");
    setSessionReviewPrivate(false);
    setInvalidFields(new Set());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!validate()) return;

    setSubmitting(true);
    const payload = getPayload();

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      localStorage.removeItem("uruzonePrivateReviewDraft");
      setMessage({ text: "Review submitted successfully!", type: "success" });
      resetForm();
    } catch (err) {
      setMessage({
        text: err instanceof Error ? err.message : "Submission failed. Try again.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="feedback-shell">
      <section className="review-card">
        <header className="page-header">
          <p className="eyebrow">URUzone Beta</p>
          <h1>Private Session Review</h1>
          <p className="intro">
            Please complete this review on your own. Your answers help us
            understand how useful and usable the session feedback felt.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          {/* Session details */}
          <section className="fb-section">
            <div className="section-heading">
              <h2>Session details</h2>
              <p>Basic metadata for this completed session.</p>
            </div>
            <div className="fb-form-grid">
              <div className="fb-field">
                <label htmlFor="trainerId">Trainer ID</label>
                <input
                  id="trainerId"
                  type="text"
                  required
                  placeholder="e.g. TR-01"
                  value={trainerId}
                  onChange={(e) => { setTrainerId(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("trainerId"); return n; }); }}
                  className={invalidFields.has("trainerId") ? "invalid" : ""}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="userId">User ID</label>
                <input
                  id="userId"
                  type="text"
                  required
                  placeholder="e.g. US-12"
                  value={userId}
                  onChange={(e) => { setUserId(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("userId"); return n; }); }}
                  className={invalidFields.has("userId") ? "invalid" : ""}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="reviewDate">Date</label>
                <input
                  id="reviewDate"
                  type="date"
                  required
                  value={reviewDate}
                  onChange={(e) => setReviewDate(e.target.value)}
                  className={invalidFields.has("reviewDate") ? "invalid" : ""}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="primaryDeviceId">Primary Device</label>
                <input
                  id="primaryDeviceId"
                  type="text"
                  required
                  placeholder="e.g. DEV-03"
                  value={primaryDeviceId}
                  onChange={(e) => { setPrimaryDeviceId(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("primaryDeviceId"); return n; }); }}
                  className={invalidFields.has("primaryDeviceId") ? "invalid" : ""}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="setsInSession">Sets in Session</label>
                <input
                  id="setsInSession"
                  type="number"
                  min="1"
                  step="1"
                  required
                  placeholder="e.g. 6"
                  value={setsInSession}
                  onChange={(e) => { setSetsInSession(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("setsInSession"); return n; }); }}
                  className={invalidFields.has("setsInSession") ? "invalid" : ""}
                />
              </div>
            </div>
          </section>

          {/* Perception */}
          <section className="fb-section">
            <div className="section-heading">
              <h2>Perception of the feedback</h2>
              <p>Rate each item from 1 to 5.</p>
            </div>
            <div className="fb-question-list">
              {PERCEPTION_QUESTIONS.map((q) => (
                <ScaleQuestion
                  key={q.id}
                  {...q}
                  value={scales[q.id] ?? null}
                  invalid={invalidFields.has(q.id)}
                  onChange={handleScaleChange}
                />
              ))}
            </div>
          </section>

          {/* Session value */}
          <section className="fb-section">
            <div className="section-heading">
              <h2>Session value</h2>
              <p>End-of-session value capture.</p>
            </div>
            <div className="fb-question-list">
              {VALUE_QUESTIONS.map((q) => (
                <ScaleQuestion
                  key={q.id}
                  {...q}
                  value={scales[q.id] ?? null}
                  invalid={invalidFields.has(q.id)}
                  onChange={handleScaleChange}
                />
              ))}
            </div>
          </section>

          {/* Open feedback */}
          <section className="fb-section">
            <div className="section-heading">
              <h2>Open feedback</h2>
              <p>Optional detail to help interpretation.</p>
            </div>
            <div className="fb-form-grid single-column">
              <div className="fb-field">
                <label htmlFor="biggestFriction">Biggest friction</label>
                <textarea
                  id="biggestFriction"
                  rows={4}
                  placeholder="What felt hardest, clunky, or frustrating?"
                  value={biggestFriction}
                  onChange={(e) => setBiggestFriction(e.target.value)}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="mostUsefulFeedback">Most useful feedback</label>
                <textarea
                  id="mostUsefulFeedback"
                  rows={4}
                  placeholder="What cue, signal, or insight helped most?"
                  value={mostUsefulFeedback}
                  onChange={(e) => setMostUsefulFeedback(e.target.value)}
                />
              </div>
              <div className="fb-field">
                <label htmlFor="sessionReviewNotes">Optional notes</label>
                <textarea
                  id="sessionReviewNotes"
                  rows={4}
                  placeholder="Anything else you'd like to add?"
                  value={sessionReviewNotes}
                  onChange={(e) => setSessionReviewNotes(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Live summary */}
          <section className="fb-section">
            <div className="section-heading">
              <h2>Live summary</h2>
              <p>These helper scores are calculated automatically.</p>
            </div>
            <div className="fb-score-cards">
              <article className="fb-score-card">
                <span className="fb-score-label">Immediate Perceived Score</span>
                <strong>{perceptionAvg() ?? "—"}</strong>
                <small>Average of Q1–Q5</small>
              </article>
              <article className="fb-score-card">
                <span className="fb-score-label">Session Value Score</span>
                <strong>{valueAvg() ?? "—"}</strong>
                <small>Average of overall value, reuse, and confidence</small>
              </article>
            </div>
          </section>

          {/* Privacy checkbox */}
          <section className="fb-section">
            <label className="fb-checkbox-row">
              <input
                type="checkbox"
                checked={sessionReviewPrivate}
                onChange={(e) => setSessionReviewPrivate(e.target.checked)}
              />
              <span>I completed this review privately.</span>
            </label>
          </section>

          {/* Actions */}
          <div className="fb-action-row">
            <button type="submit" className="fb-primary-btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit review"}
            </button>
            <button type="button" className="fb-secondary-btn" onClick={saveDraft}>
              Save draft
            </button>
          </div>

          {message && (
            <div className={`fb-form-message ${message.type}`} aria-live="polite">
              {message.text}
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

/* ─── Page (with auth gate) ─── */
export default function FeedbackPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if already authenticated via cookie
    fetch("/api/feedback/auth", { method: "GET" })
      .then((res) => setAuthenticated(res.ok))
      .catch(() => setAuthenticated(false));
  }, []);

  if (authenticated === null) {
    // Loading state
    return (
      <div className="feedback-gate">
        <div className="gate-card">
          <p className="eyebrow">URUzone Beta</p>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return <PasswordGate onAuthenticated={() => setAuthenticated(true)} />;
  }

  return <FeedbackForm />;
}
