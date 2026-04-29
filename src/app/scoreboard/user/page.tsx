"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  GOOGLE_SCRIPT_URL,
  USER_PERCEPTION_QUESTIONS,
  USER_VALUE_QUESTIONS,
  ScaleQuestion,
  type ScaleValues,
} from "../_components";
import { useAuth } from "../_auth-provider";
import "../../../styles/feedback.css";

export default function UserPage() {
  const role = useAuth();
  const [trainerId, setTrainerId] = useState("");
  const [userId, setUserId] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [setsInSession, setSetsInSession] = useState("");

  const [scales, setScales] = useState<ScaleValues>({});
  const [biggestFriction, setBiggestFriction] = useState("");
  const [mostUsefulFeedback, setMostUsefulFeedback] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");
  const [privateReview, setPrivateReview] = useState(false);
  const [wouldRecommend, setWouldRecommend] = useState<string | null>(null);

  const [gender, setGender] = useState("");
  const [bodyweight, setBodyweight] = useState("");
  const [age, setAge] = useState("");

  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setReviewDate(new Date().toISOString().split("T")[0]);
    loadDraft();
  }, []);

  function handleScaleChange(id: string, val: number) {
    setScales((prev) => ({ ...prev, [id]: val }));
    setInvalidFields((prev) => { const n = new Set(prev); n.delete(id); return n; });
  }

  const allScaleIds = [...USER_PERCEPTION_QUESTIONS, ...USER_VALUE_QUESTIONS].map((q) => q.id);

  const perceptionAvg = useCallback(() => {
    const vals = USER_PERCEPTION_QUESTIONS.map((q) => scales[q.id]).filter((v): v is number => v != null);
    if (vals.length !== USER_PERCEPTION_QUESTIONS.length) return null;
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  }, [scales]);

  const valueAvg = useCallback(() => {
    const vals = USER_VALUE_QUESTIONS.map((q) => scales[q.id]).filter((v): v is number => v != null);
    if (vals.length !== USER_VALUE_QUESTIONS.length) return null;
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  }, [scales]);

  function collectPayload() {
    return {
      sheet: "User_Review",
      timestamp: new Date().toISOString(),
      trainer_id: trainerId.trim(),
      user_id: userId.trim(),
      date: reviewDate,
      sets_in_session: setsInSession,
      q1_reflection_accuracy: scales["q1ReflectionAccuracy"] ?? null,
      q2_trust: scales["q2Trust"] ?? null,
      q3_training_impact: scales["q3TrainingImpact"] ?? null,
      q4_integration: scales["q4Integration"] ?? null,
      q5_awareness: scales["q5Awareness"] ?? null,
      overall_session_value: scales["overallSessionValue"] ?? null,
      would_use_again: scales["wouldUseAgain"] ?? null,
      gender: gender.trim(),
      bodyweight: bodyweight !== "" ? Number(bodyweight) : null,
      age: age !== "" ? Number(age) : null,
      biggest_friction: biggestFriction.trim(),
      most_useful_feedback: mostUsefulFeedback.trim(),
      session_notes: sessionNotes.trim(),
      private_review: privateReview ? 1 : 0,
      would_recommend: wouldRecommend,
      immediate_perceived_score: perceptionAvg() ? Number(perceptionAvg()) : null,
      session_value_score: valueAvg() ? Number(valueAvg()) : null,
    };
  }

  function validate(): boolean {
    const inv = new Set<string>();
    if (!reviewDate) inv.add("reviewDate");
    if (!setsInSession || Number(setsInSession) < 1) inv.add("setsInSession");
    for (const id of allScaleIds) {
      if (!scales[id]) inv.add(id);
    }
    setInvalidFields(inv);
    if (inv.size > 0) {
      setMessage("Please complete all required fields before submitting.");
      return false;
    }
    return true;
  }

  function saveDraft() {
    localStorage.setItem("uruzoneUserDraft", JSON.stringify(collectPayload()));
    setMessage("Draft saved on this device.");
  }

  function loadDraft() {
    try {
      const raw = localStorage.getItem("uruzoneUserDraft");
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.trainer_id) setTrainerId(d.trainer_id);
      if (d.user_id) setUserId(d.user_id);
      if (d.date) setReviewDate(d.date);
      if (d.sets_in_session) setSetsInSession(d.sets_in_session);
      if (d.gender) setGender(d.gender);
      if (d.bodyweight !== null && d.bodyweight !== undefined) setBodyweight(String(d.bodyweight));
      if (d.age !== null && d.age !== undefined) setAge(String(d.age));
      if (d.biggest_friction) setBiggestFriction(d.biggest_friction);
      if (d.most_useful_feedback) setMostUsefulFeedback(d.most_useful_feedback);
      if (d.session_notes) setSessionNotes(d.session_notes);
      if (d.private_review === 1) setPrivateReview(true);
      if (d.would_recommend !== null && d.would_recommend !== undefined) setWouldRecommend(String(d.would_recommend));

      const su: ScaleValues = {};
      if (d.q1_reflection_accuracy) su["q1ReflectionAccuracy"] = d.q1_reflection_accuracy;
      if (d.q2_trust) su["q2Trust"] = d.q2_trust;
      if (d.q3_training_impact) su["q3TrainingImpact"] = d.q3_training_impact;
      if (d.q4_integration) su["q4Integration"] = d.q4_integration;
      if (d.q5_awareness) su["q5Awareness"] = d.q5_awareness;
      if (d.overall_session_value) su["overallSessionValue"] = d.overall_session_value;
      if (d.would_use_again) su["wouldUseAgain"] = d.would_use_again;
      setScales(su);
      setMessage("Draft loaded.");
    } catch {
      // ignore
    }
  }

  function resetForm() {
    setTrainerId(""); setUserId("");
    setReviewDate(new Date().toISOString().split("T")[0]);
    setSetsInSession("");
    setScales({}); setBiggestFriction("");
    setMostUsefulFeedback(""); setSessionNotes("");
    setGender(""); setBodyweight(""); setAge("");
    setPrivateReview(false); setWouldRecommend(null); setInvalidFields(new Set());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;
    setSubmitting(true);
    setMessage("Recording session...");
    const payload = collectPayload();

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, _type: "user" }),
      }).catch(() => {});

      localStorage.removeItem("uruzoneUserDraft");
      setMessage("Session recorded to Google Sheets.");
      resetForm();
    } catch {
      setMessage("Failed to save. Check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page-shell page-light">
      <section className="app-card theme-light">
        <header className="page-header">
          {role === "scoreboard" && <Link href="/scoreboard" className="back-btn">&larr; Back</Link>}
          <p className="eyebrow">URUzone Beta</p>
          <h1>Session Evaluation</h1>
          <p className="intro">Complete this privately after the session. Your input helps us understand how clearly the system reflected your performance.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          {/* Session context */}
          <section className="section">
            <div className="section-heading">
              <h2>Session context</h2>
              <p>Basic information for this completed session.</p>
            </div>
            <div className="form-grid form-grid-2">
              <div className="field" style={{ display: "none" }}><label>Trainer ID</label><input type="text" placeholder="e.g. TR-01" value={trainerId} onChange={(e) => { setTrainerId(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("trainerId"); return n; }); }} className={invalidFields.has("trainerId") ? "invalid" : ""} /></div>
              <div className="field" style={{ display: "none" }}><label>User ID</label><input type="text" placeholder="e.g. US-12" value={userId} onChange={(e) => { setUserId(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("userId"); return n; }); }} className={invalidFields.has("userId") ? "invalid" : ""} /></div>
              <div className="field">
                <label>Gender</label>
                <div className="chip-group">
                  {["Male", "Female", "Other"].map((opt) => (
                    <label key={opt} className="chip-option">
                      <input type="radio" name="gender" checked={gender === opt.toLowerCase()} onChange={() => setGender(opt.toLowerCase())} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="field"><label>Bodyweight (kg)</label><input type="number" min="0" step="0.5" placeholder="e.g. 80" value={bodyweight} onChange={(e) => setBodyweight(e.target.value)} /></div>
              <div className="field"><label>Age</label><input type="number" min="1" step="1" placeholder="e.g. 28" value={age} onChange={(e) => setAge(e.target.value)} /></div>
              <div className="field"><label>Date<span className="req">*</span></label><input type="date" value={reviewDate} onChange={(e) => setReviewDate(e.target.value)} className={invalidFields.has("reviewDate") ? "invalid" : ""} /></div>
              <div className="field"><label>Sets in session<span className="req">*</span></label><input type="number" min="1" step="1" placeholder="e.g. 6" value={setsInSession} onChange={(e) => { setSetsInSession(e.target.value); setInvalidFields((p) => { const n = new Set(p); n.delete("setsInSession"); return n; }); }} className={invalidFields.has("setsInSession") ? "invalid" : ""} /></div>
            </div>
          </section>

          {/* How the session felt */}
          <section className="section">
            <div className="section-heading">
              <h2>How the session felt</h2>
              <p>Rate how accurately and naturally the system fit into your training.</p>
            </div>
            <div className="question-list">
              {USER_PERCEPTION_QUESTIONS.map((q) => (
                <ScaleQuestion key={q.id} {...q} value={scales[q.id] ?? null} invalid={invalidFields.has(q.id)} onChange={handleScaleChange} required />
              ))}
            </div>
          </section>

          {/* Session value */}
          <section className="section">
            <div className="section-heading">
              <h2>Session value</h2>
              <p>Rate the overall value of this session and whether you would use this again.</p>
            </div>
            <div className="question-list">
              {USER_VALUE_QUESTIONS.map((q) => (
                <ScaleQuestion key={q.id} {...q} value={scales[q.id] ?? null} invalid={invalidFields.has(q.id)} onChange={handleScaleChange} required />
              ))}
            </div>
          </section>

          {/* Additional context */}
          <section className="section">
            <div className="section-heading">
              <h2>Additional context</h2>
              <p>Optional details that help explain the session ratings.</p>
            </div>
            <div className="form-grid form-grid-1">
              <div className="field"><label>Biggest friction</label><textarea rows={4} placeholder="What felt clunky, unclear, or hard to use?" value={biggestFriction} onChange={(e) => setBiggestFriction(e.target.value)} /></div>
              <div className="field"><label>Most useful feedback</label><textarea rows={4} placeholder="What signal, cue, or insight helped most?" value={mostUsefulFeedback} onChange={(e) => setMostUsefulFeedback(e.target.value)} /></div>
              <div className="field"><label>Session notes</label><textarea rows={4} placeholder="Anything else you want to add?" value={sessionNotes} onChange={(e) => setSessionNotes(e.target.value)} /></div>
            </div>
          </section>

          {/* Summary */}
          <section className="section">
            <div className="section-heading">
              <h2>Session summary</h2>
              <p>Live helper summary for this completed review.</p>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <span className="summary-label">Immediate perceived score</span>
                <strong>{perceptionAvg() ?? "—"}</strong>
                <small>Average of the five core experience questions</small>
              </article>
              <article className="summary-card">
                <span className="summary-label">Session value score</span>
                <strong>{valueAvg() ?? "—"}</strong>
                <small>Average of value, reuse intent, and confidence</small>
              </article>
            </div>
          </section>

          {/* Would recommend */}
          <section className="section">
            <div className="section-heading">
              <h2>Would you recommend this to a friend?</h2>
            </div>
            <div className="option-card">
              <div className="inline-options" style={{ marginTop: 0 }}>
                <label><input type="radio" name="wouldRecommend" checked={wouldRecommend === "1"} onChange={() => setWouldRecommend("1")} /> Yes</label>
                <label><input type="radio" name="wouldRecommend" checked={wouldRecommend === "0"} onChange={() => setWouldRecommend("0")} /> No</label>
              </div>
            </div>
          </section>

          {/* Privacy confirmation */}
          <section className="section">
            <div className="section-heading">
              <h2>Privacy confirmation</h2>
              <p>This review should be completed privately by the user.</p>
            </div>
            <label className="checkbox-row">
              <input type="checkbox" checked={privateReview} onChange={(e) => setPrivateReview(e.target.checked)} />
              <span>I completed this review privately.</span>
            </label>
          </section>

          {/* Actions */}
          <section className="section action-row">
            <button type="submit" className="primary-btn" disabled={submitting}>{submitting ? "Recording..." : "Record session"}</button>
            <button type="button" className="secondary-btn" onClick={saveDraft}>Save draft</button>
            <button type="button" className="ghost-btn" onClick={() => { localStorage.removeItem("uruzoneUserDraft"); resetForm(); setMessage("Form reset."); }}>Reset</button>
          </section>

          {message && <div className="page-message">{message}</div>}
        </form>
      </section>
    </div>
  );
}
