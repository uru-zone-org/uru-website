"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GOOGLE_SCRIPT_URL,
  DECISION_CHANGE_OPTIONS,
  avg,
  ScaleQuestion,
} from "../_components";
import { useAuth } from "../_auth-provider";
import "../../../styles/feedback.css";

export default function TrainerPage() {
  const role = useAuth();
  const [trainerId, setTrainerId] = useState("");
  const [userId, setUserId] = useState("");
  const [sessionNumber, setSessionNumber] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [exercise, setExercise] = useState("");
  const [loadKg, setLoadKg] = useState("");
  const [reps, setReps] = useState("");

  const [setupSuccessful, setSetupSuccessful] = useState<string | null>(null);
  const [dataCaptured, setDataCaptured] = useState<string | null>(null);
  const [technicalIssue, setTechnicalIssue] = useState<string | null>(null);
  const [issueCategory, setIssueCategory] = useState("");

  const [confirmedObservation, setConfirmedObservation] = useState(false);
  const [revealedSomethingNew, setRevealedSomethingNew] = useState(false);
  const [behaviorChange, setBehaviorChange] = useState(false);
  const [decisionChanges, setDecisionChanges] = useState<Set<string>>(new Set());

  const [coachingValue, setCoachingValue] = useState<number | null>(null);
  const [validatedNextSet, setValidatedNextSet] = useState<string | null>(null);
  const [wouldRecommend, setWouldRecommend] = useState<string | null>(null);

  const [quickScript, setQuickScript] = useState("");
  const [trainerNotes, setTrainerNotes] = useState("");

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setSessionDate(new Date().toISOString().split("T")[0]);
    loadDraft();
  }, []);

  const captureSuccess = setupSuccessful !== null && dataCaptured !== null
    ? Number(setupSuccessful) * Number(dataCaptured)
    : null;

  const observedChangeScore = avg([
    confirmedObservation ? 1 : 0,
    revealedSomethingNew ? 1 : 0,
    behaviorChange ? 1 : 0,
  ]);

  function toggleDecision(val: string) {
    setDecisionChanges((prev) => {
      const next = new Set(prev);
      if (next.has(val)) next.delete(val);
      else next.add(val);
      return next;
    });
  }

  function collectPayload() {
    return {
      sheet: "Trainer_Log",
      timestamp: new Date().toISOString(),
      trainer_id: trainerId.trim(),
      user_id: userId.trim(),
      session_number: sessionNumber,
      date: sessionDate,
      device_id: deviceId.trim(),
      exercise: exercise.trim(),
      load_kg: loadKg,
      reps,
      setup_successful: setupSuccessful,
      data_captured: dataCaptured,
      technical_issue: technicalIssue,
      issue_category: issueCategory.trim(),
      confirmed_observation: confirmedObservation ? 1 : 0,
      revealed_something_new: revealedSomethingNew ? 1 : 0,
      behavior_change: behaviorChange ? 1 : 0,
      decision_change: [...decisionChanges].join(", "),
      coaching_value: coachingValue,
      validated_next_set: validatedNextSet,
      would_recommend: wouldRecommend,
      capture_success: captureSuccess,
      observed_change_score: observedChangeScore ? Number(observedChangeScore) : null,
      quick_script: quickScript.trim(),
      trainer_notes: trainerNotes.trim(),
    };
  }

  function validate() {
    const missing: string[] = [];
    if (!sessionNumber) missing.push("Session number");
    if (!sessionDate) missing.push("Date");
    if (!deviceId.trim()) missing.push("Device ID");
    if (!exercise.trim()) missing.push("Exercise");
    if (loadKg === "") missing.push("Load");
    if (!reps) missing.push("Reps");
    if (setupSuccessful === null) missing.push("Setup successful");
    if (dataCaptured === null) missing.push("Data captured");
    if (technicalIssue === null) missing.push("Technical issue");
    if (coachingValue === null) missing.push("Coaching value");
    if (validatedNextSet === null) missing.push("Next-set validation");
    return missing;
  }

  function saveDraft() {
    localStorage.setItem("uruzoneTrainerDraft", JSON.stringify(collectPayload()));
    setMessage("Draft saved on this device.");
  }

  function loadDraft() {
    try {
      const raw = localStorage.getItem("uruzoneTrainerDraft");
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.trainer_id) setTrainerId(d.trainer_id);
      if (d.user_id) setUserId(d.user_id);
      if (d.session_number) setSessionNumber(d.session_number);
      if (d.date) setSessionDate(d.date);
      if (d.device_id) setDeviceId(d.device_id);
      if (d.exercise) setExercise(d.exercise);
      if (d.load_kg) setLoadKg(d.load_kg);
      if (d.reps) setReps(d.reps);
      if (d.setup_successful !== null && d.setup_successful !== undefined) setSetupSuccessful(String(d.setup_successful));
      if (d.data_captured !== null && d.data_captured !== undefined) setDataCaptured(String(d.data_captured));
      if (d.technical_issue !== null && d.technical_issue !== undefined) setTechnicalIssue(String(d.technical_issue));
      if (d.issue_category) setIssueCategory(d.issue_category);
      if (d.confirmed_observation === 1) setConfirmedObservation(true);
      if (d.revealed_something_new === 1) setRevealedSomethingNew(true);
      if (d.behavior_change === 1) setBehaviorChange(true);
      if (d.decision_change) {
        setDecisionChanges(new Set(d.decision_change.split(",").map((v: string) => v.trim()).filter(Boolean)));
      }
      if (d.coaching_value !== null && d.coaching_value !== undefined) setCoachingValue(Number(d.coaching_value));
      if (d.validated_next_set !== null && d.validated_next_set !== undefined) setValidatedNextSet(String(d.validated_next_set));
      if (d.would_recommend !== null && d.would_recommend !== undefined) setWouldRecommend(String(d.would_recommend));
      if (d.quick_script) setQuickScript(d.quick_script);
      if (d.trainer_notes) setTrainerNotes(d.trainer_notes);
      setMessage("Draft loaded.");
    } catch {
      // ignore
    }
  }

  function resetForm() {
    setTrainerId(""); setUserId(""); setSessionNumber("");
    setSessionDate(new Date().toISOString().split("T")[0]);
    setDeviceId(""); setExercise(""); setLoadKg(""); setReps("");
    setSetupSuccessful(null); setDataCaptured(null); setTechnicalIssue(null);
    setIssueCategory(""); setConfirmedObservation(false);
    setRevealedSomethingNew(false); setBehaviorChange(false);
    setDecisionChanges(new Set()); setCoachingValue(null);
    setValidatedNextSet(null); setWouldRecommend(null); setQuickScript(""); setTrainerNotes("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const missing = validate();
    if (missing.length > 0) {
      setMessage(`Please complete: ${missing.join(", ")}`);
      return;
    }
    setSubmitting(true);
    setMessage("Recording set...");
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
        body: JSON.stringify({ ...payload, _type: "trainer" }),
      }).catch(() => {});

      localStorage.removeItem("uruzoneTrainerDraft");
      setMessage("Set recorded to Google Sheets.");
      resetForm();
    } catch {
      setMessage("Failed to save. Check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page-shell page-trainer">
      <section className="app-card theme-dark">
        <header className="page-header">
          {role === "scoreboard" && <Link href="/scoreboard" className="back-btn">&larr; Back</Link>}
          <p className="eyebrow">URUzone Beta</p>
          <h1>Trainer Set Analysis</h1>
          <p className="intro">Record the set outcome, coaching interpretation, and next-set validation.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          {/* Set context */}
          <section className="section">
            <div className="section-heading">
              <h2>Set context</h2>
              <p>Basic information for the analyzed set.</p>
            </div>
            <div className="form-grid form-grid-2">
              <div className="field" style={{ display: "none" }}><label>Trainer ID</label><input type="text" placeholder="e.g. TR-01" value={trainerId} onChange={(e) => setTrainerId(e.target.value)} /></div>
              <div className="field" style={{ display: "none" }}><label>User ID</label><input type="text" placeholder="e.g. US-12" value={userId} onChange={(e) => setUserId(e.target.value)} /></div>
              <div className="field"><label>Session number<span className="req">*</span></label><input type="number" min="1" step="1" placeholder="e.g. 3" value={sessionNumber} onChange={(e) => setSessionNumber(e.target.value)} /></div>
              <div className="field"><label>Date<span className="req">*</span></label><input type="date" value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} /></div>
              <div className="field"><label>Device ID<span className="req">*</span></label><input type="text" placeholder="e.g. DEV-03" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} /></div>
              <div className="field"><label>Exercise<span className="req">*</span></label><input type="text" placeholder="e.g. Squat" value={exercise} onChange={(e) => setExercise(e.target.value)} /></div>
              <div className="field"><label>Load (kg)<span className="req">*</span></label><input type="number" min="0" step="1" placeholder="e.g. 80" value={loadKg} onChange={(e) => setLoadKg(e.target.value)} /></div>
              <div className="field"><label>Reps<span className="req">*</span></label><input type="number" min="1" step="1" placeholder="e.g. 6" value={reps} onChange={(e) => setReps(e.target.value)} /></div>
            </div>
          </section>

          {/* Capture status */}
          <section className="section">
            <div className="section-heading">
              <h2>Capture status</h2>
              <p>Record whether the setup and capture worked for this set.</p>
            </div>
            <div className="card-grid card-grid-3">
              <article className="option-card">
                <h3>Setup successful<span className="req">*</span></h3>
                <p>Did setup work well enough to run the set?</p>
                <div className="inline-options">
                  <label><input type="radio" name="setupSuccessful" checked={setupSuccessful === "1"} onChange={() => setSetupSuccessful("1")} /> Yes</label>
                  <label><input type="radio" name="setupSuccessful" checked={setupSuccessful === "0"} onChange={() => setSetupSuccessful("0")} /> No</label>
                </div>
              </article>
              <article className="option-card">
                <h3>Data captured<span className="req">*</span></h3>
                <p>Was usable set data captured?</p>
                <div className="inline-options">
                  <label><input type="radio" name="dataCaptured" checked={dataCaptured === "1"} onChange={() => setDataCaptured("1")} /> Yes</label>
                  <label><input type="radio" name="dataCaptured" checked={dataCaptured === "0"} onChange={() => setDataCaptured("0")} /> No</label>
                </div>
              </article>
              <article className="option-card">
                <h3>Technical issue<span className="req">*</span></h3>
                <p>Did a hardware, software, or workflow issue affect the set?</p>
                <div className="inline-options">
                  <label><input type="radio" name="technicalIssue" checked={technicalIssue === "1"} onChange={() => setTechnicalIssue("1")} /> Yes</label>
                  <label><input type="radio" name="technicalIssue" checked={technicalIssue === "0"} onChange={() => setTechnicalIssue("0")} /> No</label>
                </div>
              </article>
            </div>
            <div className="form-grid form-grid-1 top-gap">
              <div className="field"><label>Issue category</label><input type="text" placeholder="e.g. hardware, algorithm output" value={issueCategory} onChange={(e) => setIssueCategory(e.target.value)} /></div>
            </div>
          </section>

          {/* Coaching interpretation */}
          <section className="section">
            <div className="section-heading">
              <h2>Coaching interpretation</h2>
              <p>Record what the system meant in practice for the trainer.</p>
            </div>
            <div className="card-grid card-grid-3">
              <article className="option-card">
                <h3>Confirmed</h3>
                <p>The system confirmed something I already saw.</p>
                <label className="checkbox-row"><input type="checkbox" checked={confirmedObservation} onChange={(e) => setConfirmedObservation(e.target.checked)} /><span>Confirmed coach observation</span></label>
              </article>
              <article className="option-card">
                <h3>Revealed</h3>
                <p>The system surfaced something I did not notice before.</p>
                <label className="checkbox-row"><input type="checkbox" checked={revealedSomethingNew} onChange={(e) => setRevealedSomethingNew(e.target.checked)} /><span>Revealed something new</span></label>
              </article>
              <article className="option-card">
                <h3>Changed decision</h3>
                <p>The feedback changed what I did next.</p>
                <label className="checkbox-row"><input type="checkbox" checked={behaviorChange} onChange={(e) => setBehaviorChange(e.target.checked)} /><span>Behavior changed</span></label>
              </article>
            </div>
          </section>

          {/* Decision change */}
          <section className="section">
            <div className="section-heading">
              <h2>Decision change</h2>
              <p>What changed because of the signal?</p>
            </div>
            <div className="chip-group">
              {DECISION_CHANGE_OPTIONS.map((opt) => (
                <label key={opt.value} className="chip-option">
                  <input type="checkbox" checked={decisionChanges.has(opt.value)} onChange={() => toggleDecision(opt.value)} />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Coaching value */}
          <section className="section">
            <div className="section-heading">
              <h2>Coaching value</h2>
              <p>Rate how useful this was for the coaching decision.</p>
            </div>
            <ScaleQuestion
              id="coachingValue"
              label="Did this improve your decision?"
              text=""
              low="No value"
              mid="Useful"
              high="Very valuable"
              value={coachingValue}
              invalid={false}
              onChange={(_, val) => setCoachingValue(val)}
              required
            />
          </section>

          {/* Next-set validation */}
          <section className="section">
            <div className="section-heading">
              <h2>Next-set validation<span className="req">*</span></h2>
              <p>Was the effect validated on the next set?</p>
            </div>
            <div className="option-card">
              <div className="inline-options" style={{ marginTop: 0 }}>
                <label><input type="radio" name="validatedNextSet" checked={validatedNextSet === "1"} onChange={() => setValidatedNextSet("1")} /> Yes</label>
                <label><input type="radio" name="validatedNextSet" checked={validatedNextSet === "0"} onChange={() => setValidatedNextSet("0")} /> No</label>
              </div>
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

          {/* Notes */}
          <section className="section">
            <div className="section-heading">
              <h2>Notes</h2>
              <p>Optional context for follow-up, phrasing, or exceptions.</p>
            </div>
            <div className="form-grid form-grid-1">
              <div className="field"><label>Quick script</label><textarea rows={3} placeholder="Short phrasing used by the trainer" value={quickScript} onChange={(e) => setQuickScript(e.target.value)} /></div>
              <div className="field"><label>Trainer notes</label><textarea rows={4} placeholder="Context, exceptions, or follow-up" value={trainerNotes} onChange={(e) => setTrainerNotes(e.target.value)} /></div>
            </div>
          </section>

          {/* Summary */}
          <section className="section">
            <div className="section-heading">
              <h2>Set summary</h2>
              <p>Live helper summary for this logged set.</p>
            </div>
            <div className="summary-grid">
              <article className="summary-card">
                <span className="summary-label">Capture success</span>
                <strong>{captureSuccess !== null ? captureSuccess : "—"}</strong>
                <small>Setup successful × data captured</small>
              </article>
              <article className="summary-card">
                <span className="summary-label">Observed change score</span>
                <strong>{observedChangeScore ?? "—"}</strong>
                <small>Average of confirmed, revealed, and changed decision</small>
              </article>
            </div>
          </section>

          {/* Actions */}
          <section className="section action-row">
            <button type="submit" className="primary-btn" disabled={submitting}>{submitting ? "Recording..." : "Record set"}</button>
            <button type="button" className="secondary-btn" onClick={saveDraft}>Save draft</button>
            <button type="button" className="ghost-btn" onClick={() => { localStorage.removeItem("uruzoneTrainerDraft"); resetForm(); setMessage("Form reset."); }}>Reset</button>
          </section>

          {message && <div className="page-message">{message}</div>}
        </form>
      </section>
    </div>
  );
}
