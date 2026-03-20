import Image from "next/image";
import { ProgressIndicator } from "@/components/ProgressIndicator";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "category", label: "Category" },
  { id: "problem", label: "Problem" },
  { id: "system", label: "System" },
  { id: "metric", label: "Metric" },
  { id: "detail", label: "Detail" },
  { id: "product", label: "Product" },
  { id: "closing", label: "Closing" },
];

export default function HomePage() {
  return (
    <div className="uru-shell" id="uruShell">
      {/* ── Header ── */}
      <header className="uru-header">
        <div className="uru-logo">
          <Image
            src="/svg/URU_logo.svg"
            alt="URU"
            width={64}
            height={20}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <nav className="uru-nav">
          <a href="#metric">VQΔ</a>
          <a href="#product">Product</a>
          <a href="#system">System</a>
          <a href="#closing">Access</a>
        </nav>
      </header>

      {/* ── Progress ── */}
      <ProgressIndicator sections={sections} />

      {/* ── 1. Hero ── */}
      <section className="uru-section" id="hero">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/1.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">URU</div>
            <h1 className="uru-title">
              Cardio became data.
              <br />
              Strength didn&apos;t.
              <br />
              <span className="uru-title-accent">Until now.</span>
            </h1>
            <p className="uru-copy">Real-time intelligence for strength.</p>
            <div className="uru-actions">
              <a className="uru-btn uru-btn-primary" href="#metric">
                Discover URU
              </a>
              <a className="uru-btn uru-btn-secondary" href="#system">
                See the system
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Category ── */}
      <section className="uru-section" id="category">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/2.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content right">
          <div className="uru-panel">
            <div className="uru-chip">A new category</div>
            <h2 className="uru-title">
              Biomechanics.
              <br />
              Not biometrics.
            </h2>
            <p className="uru-copy">
              Wearables measure heart rate, sleep, and recovery. URU measures
              movement quality, rep by rep.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Problem ── */}
      <section className="uru-section" id="problem">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/3.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">The blind spot</div>
            <h2 className="uru-title">
              Weight and reps
              <br />
              are not the whole story.
            </h2>
            <p className="uru-copy">
              Strength still measures output. Performance depends on how you
              move.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. System ── */}
      <section className="uru-section uru-section-dark" id="system">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/4.jpg')" }}
        />
        <div className="uru-grid" />
        <div className="uru-fog" />
        <div className="uru-crosshair">
          <div className="uru-crosshair-h" />
          <div className="uru-crosshair-v" />
        </div>

        <div className="uru-content">
          <div className="uru-panel uru-panel-wide">
            <div className="uru-chip">The system</div>
            <h2 className="uru-title">
              Strength needs
              <br />a language.
            </h2>

            <div className="uru-cards">
              <div className="uru-card">
                <div className="uru-card-label">VQΔ</div>
                <div className="uru-card-text">Movement</div>
              </div>
              <div className="uru-card">
                <div className="uru-card-label">URU Score</div>
                <div className="uru-card-text">Strength</div>
              </div>
              <div className="uru-card">
                <div className="uru-card-label">URUΔ</div>
                <div className="uru-card-text">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Metric (VQΔ) ── */}
      <section className="uru-section" id="metric">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/5.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />
        <div className="uru-accent-line" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">The missing metric</div>
            <h2 className="uru-title">
              VQΔ
              <br />
              Movement quality, measured.
            </h2>
            <p className="uru-copy">The missing metric in strength.</p>
          </div>
        </div>
      </section>

      {/* ── 6. Detail ── */}
      <section className="uru-section" id="detail">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/6.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">Built for strength</div>
            <h2 className="uru-title">
              Real-time capture.
              <br />
              On-device intelligence.
            </h2>
            <p className="uru-copy">
              Exercise-specific biomechanics. Portable. Real-time. No cameras.
              No fixed systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Product ── */}
      <section className="uru-section" id="product">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/7.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content right">
          <div className="uru-panel">
            <div className="uru-chip">The product</div>
            <h2 className="uru-title">
              A new intelligence layer.
              <br />
              Built into something small.
            </h2>
            <p className="uru-copy">
              URU Tag captures high-frequency movement in real time. URU App
              turns every repetition into a signal.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Closing / CTA ── */}
      <section className="uru-section" id="closing">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/8.jpg')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">The standard</div>
            <h2 className="uru-title">
              Strength is foundational.
              <br />
              Measurement is inevitable.
            </h2>
            <p className="uru-copy">
              URU is building the global standard for strength intelligence.
            </p>
            <div className="uru-actions">
              <a className="uru-btn uru-btn-primary" href="#">
                Join early access
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
