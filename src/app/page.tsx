import Image from "next/image";
import { ProgressIndicator } from "@/components/ProgressIndicator";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "problem", label: "Problem" },
  { id: "metric", label: "VQΔ" },
  { id: "product", label: "Product" },
  { id: "detail", label: "Detail" },
  { id: "system", label: "System" },
  { id: "category", label: "Category" },
  { id: "closing", label: "Access" },
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
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dlj4vq4rk/image/upload/v1761045523/URU_Wear_inbk0k.png')",
          }}
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
            </h1>
            <p className="uru-copy">
              Until now. Real-time biomechanical intelligence for strength
              training.
            </p>
            <div className="uru-actions">
              <a className="uru-btn uru-btn-primary" href="#metric">
                Discover URU
              </a>
              <a className="uru-btn uru-btn-secondary" href="#product">
                See the system
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem ── */}
      <section className="uru-section" id="problem">
        <div
          className="uru-bg"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dlj4vq4rk/image/upload/v1761045522/URU_Wear_Wrist_vtzlyl.png')",
          }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content right">
          <div className="uru-panel">
            <div className="uru-chip">The blind spot</div>
            <h2 className="uru-title">
              Weight and reps
              <br />
              are not the whole story.
            </h2>
            <p className="uru-copy">
              Strength training still tracks output. But performance depends on
              something deeper: how you move.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Metric (VQΔ) ── */}
      <section className="uru-section" id="metric">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/URU_Wear.png')" }}
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
            <p className="uru-copy">
              The first real-time measurement of movement quality in strength
              training.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Product ── */}
      <section className="uru-section" id="product">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/URU_Wear_Wrist.png')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content right">
          <div className="uru-panel">
            <div className="uru-chip">The product</div>
            <h2 className="uru-title">
              A small wearable.
              <br />A new intelligence layer.
            </h2>
            <p className="uru-copy">
              URU Tag captures high-frequency movement data in real time. URU
              App turns every repetition into a signal.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Detail ── */}
      <section className="uru-section" id="detail">
        <div
          className="uru-bg"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dlj4vq4rk/image/upload/v1761045523/URU_Wear_inbk0k.png')",
          }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">Built for strength</div>
            <h2 className="uru-title">
              High-frequency capture.
              <br />
              On-device processing.
            </h2>
            <p className="uru-copy">
              Exercise-specific biomechanics. Portable. Real-time. No cameras.
              No fixed machines.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. System (dark, no background image) ── */}
      <section className="uru-section uru-section-dark" id="system">
        <div className="uru-grid" />

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
                <div className="uru-card-text">How you move</div>
              </div>
              <div className="uru-card">
                <div className="uru-card-label">URU Score</div>
                <div className="uru-card-text">How strong you are</div>
              </div>
              <div className="uru-card">
                <div className="uru-card-label">URUΔ</div>
                <div className="uru-card-text">How you improve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Category ── */}
      <section className="uru-section" id="category">
        <div
          className="uru-bg"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dlj4vq4rk/image/upload/v1761045522/URU_Wear_Wrist_vtzlyl.png')",
          }}
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

      {/* ── 8. Closing / CTA ── */}
      <section className="uru-section" id="closing">
        <div
          className="uru-bg"
          style={{ backgroundImage: "url('/images/URU_Wear.png')" }}
        />
        <div className="uru-overlay" />
        <div className="uru-grid" />
        <div className="uru-fog" />

        <div className="uru-content">
          <div className="uru-panel">
            <div className="uru-chip">The standard</div>
            <h2 className="uru-title">
              Strength is becoming foundational.
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
