"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GOOGLE_SCRIPT_URL,
  uniqueCount,
  includesIC,
  avgField,
  pctField,
  groupBy,
  type TrainerRow,
  type UserRow,
} from "../_components";
import { useAuth } from "../_auth-provider";
import "../../../styles/feedback.css";

type SummaryTab = "trainer" | "user" | "device" | "exercise";

export default function DashboardPage() {
  const role = useAuth();
  const [trainerRows, setTrainerRows] = useState<TrainerRow[]>([]);
  const [userRows, setUserRows] = useState<UserRow[]>([]);
  const [activeTab, setActiveTab] = useState<SummaryTab>("trainer");
  const [message, setMessage] = useState("Loading scoreboard...");

  const [dateRange, setDateRange] = useState("");
  const [trainerFilter, setTrainerFilter] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [deviceFilter, setDeviceFilter] = useState("");
  const [exerciseFilter, setExerciseFilter] = useState("");

  useEffect(() => {
    refreshScoreboard();
  }, []);

  async function refreshScoreboard() {
    setMessage("Refreshing scoreboard...");
    try {
      const callbackName = `googleSheetsCallback_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
      const query = new URLSearchParams({ callback: callbackName, action: "scoreboard" }).toString();

      const response = await new Promise<{ trainerRows?: TrainerRow[]; trainer_logs?: TrainerRow[]; userRows?: UserRow[]; user_reviews?: UserRow[] }>((resolve, reject) => {
        (window as unknown as Record<string, unknown>)[callbackName] = (res: Record<string, unknown>) => {
          delete (window as unknown as Record<string, unknown>)[callbackName];
          script.remove();
          if (res && (res as { success?: boolean }).success === false) {
            reject(new Error((res as { error?: string }).error || "Request failed"));
            return;
          }
          resolve(res as { trainerRows?: TrainerRow[]; trainer_logs?: TrainerRow[]; userRows?: UserRow[]; user_reviews?: UserRow[] });
        };

        const script = document.createElement("script");
        script.src = `${GOOGLE_SCRIPT_URL}?${query}&t=${Date.now()}`;
        script.onerror = () => {
          delete (window as unknown as Record<string, unknown>)[callbackName];
          script.remove();
          reject(new Error("Failed to connect to Google Sheets"));
        };
        document.body.appendChild(script);
      });

      setTrainerRows(
        Array.isArray(response?.trainerRows) ? response.trainerRows
          : Array.isArray(response?.trainer_logs) ? response.trainer_logs : []
      );
      setUserRows(
        Array.isArray(response?.userRows) ? response.userRows
          : Array.isArray(response?.user_reviews) ? response.user_reviews : []
      );
      setMessage(`Scoreboard refreshed at ${new Date().toLocaleString()}.`);
    } catch {
      setMessage("Failed to load scoreboard data from Google Sheets.");
    }
  }

  const filteredTrainer = trainerRows.filter((r) =>
    (!trainerFilter || includesIC(r.trainer_id, trainerFilter)) &&
    (!userFilter || includesIC(r.user_id, userFilter)) &&
    (!deviceFilter || includesIC(r.device_id, deviceFilter)) &&
    (!exerciseFilter || includesIC(r.exercise, exerciseFilter))
  );

  const filteredUser = userRows.filter((r) =>
    (!trainerFilter || includesIC(r.trainer_id, trainerFilter)) &&
    (!userFilter || includesIC(r.user_id, userFilter)) &&
    (!deviceFilter || includesIC(r.primary_device_id, deviceFilter))
  );

  function renderSummaryContent() {
    if (activeTab === "trainer") {
      const grouped = groupBy(filteredTrainer, "trainer_id");
      const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
      if (!entries.length) return <p>No data available for this view.</p>;
      return entries.map(([key, rows]) => (
        <div key={key} className="summary-block">
          <strong>{key || "Unknown trainer"}</strong><br />
          Sets logged: {rows.length}<br />
          Capture success: {pctField(rows, "capture_success")}<br />
          Coaching value: {avgField(rows, "coaching_value")}<br />
          Behavior change: {pctField(rows, "behavior_change")}<br />
          Would recommend: {pctField(rows, "would_recommend")}
        </div>
      ));
    }
    if (activeTab === "user") {
      const grouped = groupBy(filteredUser, "user_id");
      const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
      if (!entries.length) return <p>No data available for this view.</p>;
      return entries.map(([key, rows]) => (
        <div key={key} className="summary-block">
          <strong>{key || "Unknown user"}</strong><br />
          Reviews logged: {rows.length}<br />
          Q1–Q5 avg: {avgField(rows, "immediate_perceived_score")}<br />
          Session value: {avgField(rows, "session_value_score")}<br />
          Private review rate: {pctField(rows, "private_review")}<br />
          Would recommend: {pctField(rows, "would_recommend")}
        </div>
      ));
    }
    if (activeTab === "device") {
      const grouped = groupBy(filteredTrainer, "device_id");
      const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
      if (!entries.length) return <p>No data available for this view.</p>;
      return entries.map(([key, rows]) => (
        <div key={key} className="summary-block">
          <strong>{key || "Unknown device"}</strong><br />
          Sets logged: {rows.length}<br />
          Capture success: {pctField(rows, "capture_success")}<br />
          Technical issues: {pctField(rows, "technical_issue")}<br />
          Coaching value: {avgField(rows, "coaching_value")}
        </div>
      ));
    }
    // exercise
    const grouped = groupBy(filteredTrainer, "exercise");
    const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
    if (!entries.length) return <p>No data available for this view.</p>;
    return entries.map(([key, rows]) => (
      <div key={key} className="summary-block">
        <strong>{key || "Unknown exercise"}</strong><br />
        Sets logged: {rows.length}<br />
        Capture success: {pctField(rows, "capture_success")}<br />
        Coaching value: {avgField(rows, "coaching_value")}<br />
        Revealed something new: {pctField(rows, "revealed_something_new")}
      </div>
    ));
  }

  function exportScoreboard() {
    const payload = {
      filters: { dateRange, trainer: trainerFilter, user: userFilter, device: deviceFilter, exercise: exerciseFilter },
      activeSummaryTab: activeTab,
      trainerRows: filteredTrainer,
      userRows: filteredUser,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `uruzone_scoreboard_${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Scoreboard exported.");
  }

  return (
    <div className="page-shell page-light">
      <section className="app-card theme-light">
        <header className="page-header">
          {role === "scoreboard" && <Link href="/scoreboard" className="back-btn">&larr; Back</Link>}
          <p className="eyebrow">URUzone Beta</p>
          <h1>Beta Scoreboard</h1>
          <p className="intro">Review operational, perception, and validation metrics across trainers, users, devices, and exercises.</p>
        </header>

        {/* Filters */}
        <section className="section">
          <div className="section-heading">
            <h2>Filters</h2>
            <p>Adjust the view to compare performance across the beta.</p>
          </div>
          <div className="form-grid form-grid-2">
            <div className="field"><label>Date range</label><input type="text" placeholder="e.g. Jan 1 — Jan 31" value={dateRange} onChange={(e) => setDateRange(e.target.value)} /></div>
            <div className="field"><label>Trainer</label><input type="text" placeholder="All trainers" value={trainerFilter} onChange={(e) => setTrainerFilter(e.target.value)} /></div>
            <div className="field"><label>User / tester</label><input type="text" placeholder="All users" value={userFilter} onChange={(e) => setUserFilter(e.target.value)} /></div>
            <div className="field"><label>Device</label><input type="text" placeholder="All devices" value={deviceFilter} onChange={(e) => setDeviceFilter(e.target.value)} /></div>
            <div className="field"><label>Exercise</label><input type="text" placeholder="All exercises" value={exerciseFilter} onChange={(e) => setExerciseFilter(e.target.value)} /></div>
          </div>
        </section>

        {/* Headline metrics */}
        <section className="section">
          <div className="section-heading">
            <h2>Headline metrics</h2>
            <p>Top-level indicators for beta activity, quality, and value.</p>
          </div>
          <div className="summary-grid summary-grid-4">
            <article className="summary-card"><span className="summary-label">Trainers active</span><strong>{uniqueCount(filteredTrainer, "trainer_id")}</strong><small>Unique trainers logging sets</small></article>
            <article className="summary-card"><span className="summary-label">Users tested</span><strong>{uniqueCount(filteredUser, "user_id")}</strong><small>Unique users in completed sessions</small></article>
            <article className="summary-card"><span className="summary-label">Devices used</span><strong>{uniqueCount(filteredTrainer, "device_id")}</strong><small>Unique devices recorded</small></article>
            <article className="summary-card"><span className="summary-label">Total analyzed sets</span><strong>{filteredTrainer.length}</strong><small>All logged trainer set rows</small></article>
          </div>
        </section>

        {/* Core metrics */}
        <section className="section">
          <div className="section-heading">
            <h2>Core metrics</h2>
            <p>Operational quality and coaching usefulness across the beta.</p>
          </div>
          <div className="summary-grid summary-grid-3">
            <article className="summary-card"><span className="summary-label">Successful session rate</span><strong>{pctField(filteredTrainer, "capture_success")}</strong><small>Setup successful × data captured</small></article>
            <article className="summary-card"><span className="summary-label">Technical issue rate</span><strong>{pctField(filteredTrainer, "technical_issue")}</strong><small>Sets affected by technical issues</small></article>
            <article className="summary-card"><span className="summary-label">Q6 helps coaching avg</span><strong>{avgField(filteredTrainer, "coaching_value")}</strong><small>Average coaching value from trainer logging</small></article>
            <article className="summary-card"><span className="summary-label">% revealed something new</span><strong>{pctField(filteredTrainer, "revealed_something_new")}</strong><small>Sets where the system surfaced new insight</small></article>
            <article className="summary-card"><span className="summary-label">% behavior change</span><strong>{pctField(filteredTrainer, "behavior_change")}</strong><small>Sets where feedback changed the next decision</small></article>
          </div>
        </section>

        {/* User perception metrics */}
        <section className="section">
          <div className="section-heading">
            <h2>User perception metrics</h2>
            <p>Private end-of-session ratings across the five user questions.</p>
          </div>
          <div className="summary-grid summary-grid-5">
            <article className="summary-card"><span className="summary-label">Q1 average</span><strong>{avgField(filteredUser, "q1_reflection_accuracy")}</strong><small>Feedback made sense</small></article>
            <article className="summary-card"><span className="summary-label">Q2 average</span><strong>{avgField(filteredUser, "q2_trust")}</strong><small>Believable</small></article>
            <article className="summary-card"><span className="summary-label">Q3 average</span><strong>{avgField(filteredUser, "q3_training_impact")}</strong><small>Would help training</small></article>
            <article className="summary-card"><span className="summary-label">Q4 average</span><strong>{avgField(filteredUser, "q4_integration")}</strong><small>Frictionless to train with</small></article>
            <article className="summary-card"><span className="summary-label">Q5 average</span><strong>{avgField(filteredUser, "q5_awareness")}</strong><small>Fun / motivational</small></article>
          </div>
        </section>

        {/* Bias-controlled beta metrics */}
        <section className="section">
          <div className="section-heading">
            <h2>Bias-controlled beta metrics</h2>
            <p>Metrics that connect trainer-side data and private user-side review.</p>
          </div>
          <div className="summary-grid summary-grid-3">
            <article className="summary-card"><span className="summary-label">Session reviews logged</span><strong>{filteredUser.length}</strong><small>Completed private session reviews</small></article>
            <article className="summary-card"><span className="summary-label">Immediate perceived score</span><strong>{avgField(filteredUser, "immediate_perceived_score")}</strong><small>Average of Q1–Q5</small></article>
            <article className="summary-card"><span className="summary-label">Session value score</span><strong>{avgField(filteredUser, "session_value_score")}</strong><small>Average of value, reuse, and confidence</small></article>
            <article className="summary-card"><span className="summary-label">Observed change score</span><strong>{avgField(filteredTrainer, "observed_change_score")}</strong><small>Average of confirmed, revealed, and changed decision</small></article>
            <article className="summary-card"><span className="summary-label">Private entry rate</span><strong>{pctField(filteredUser, "private_review")}</strong><small>Reviews completed privately</small></article>
            <article className="summary-card"><span className="summary-label">Next-set validation rate</span><strong>{pctField(filteredTrainer, "validated_next_set")}</strong><small>Effect validated on the next set</small></article>
            <article className="summary-card"><span className="summary-label">Trainer would recommend</span><strong>{pctField(filteredTrainer, "would_recommend")}</strong><small>Trainers who would recommend URU</small></article>
            <article className="summary-card"><span className="summary-label">User would recommend</span><strong>{pctField(filteredUser, "would_recommend")}</strong><small>Users who would recommend URU</small></article>
          </div>
        </section>

        {/* Dimension summaries */}
        <section className="section">
          <div className="section-heading">
            <h2>Dimension summaries</h2>
            <p>Compare performance by trainer, user, device, and exercise.</p>
          </div>
          <div className="tab-row">
            {(["trainer", "user", "device", "exercise"] as SummaryTab[]).map((tab) => (
              <button key={tab} type="button" className={`tab-btn${activeTab === tab ? " active" : ""}`} onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)} summary
              </button>
            ))}
          </div>
          <div className="table-card top-gap">
            <div className="table-placeholder">
              <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} summary</h3>
              {renderSummaryContent()}
            </div>
          </div>
        </section>

        {/* Insights & exceptions */}
        <section className="section">
          <div className="section-heading">
            <h2>Insights and exceptions</h2>
            <p>Use this section to surface patterns that need attention.</p>
          </div>
          <div className="card-grid card-grid-3">
            <article className="option-card"><h3>Low capture success</h3><p>Highlight devices, trainers, or exercises with weaker operational performance.</p></article>
            <article className="option-card"><h3>Low trust or clarity</h3><p>Highlight sessions or dimensions where user confidence is lower than expected.</p></article>
            <article className="option-card"><h3>High coaching value</h3><p>Highlight where the system is most clearly changing decisions and validating well.</p></article>
          </div>
        </section>

        {/* Actions */}
        <section className="section action-row">
          <button type="button" className="primary-btn" onClick={refreshScoreboard}>Refresh scoreboard</button>
          <button type="button" className="secondary-btn" onClick={exportScoreboard}>Export</button>
          <button type="button" className="ghost-btn" onClick={() => { setDateRange(""); setTrainerFilter(""); setUserFilter(""); setDeviceFilter(""); setExerciseFilter(""); setMessage("Filters reset."); }}>Reset filters</button>
        </section>

        {message && <div className="page-message">{message}</div>}
      </section>
    </div>
  );
}
