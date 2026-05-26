"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./replit.module.css";

const WORKFLOW_COMPARISON = [
  {
    stage: "Planning",
    prodvo: "Structured task plans with effort estimates from plain language",
    replit: "Jump straight to prompts - no planning phase",
    winner: "prodvo",
  },
  {
    stage: "Execution",
    prodvo: "Parallel agents for frontend, backend, QA, and integrations",
    replit: "Sequential builds - one thing at a time",
    winner: "prodvo",
  },
  {
    stage: "Visibility",
    prodvo: "Live progress tracking with blockers and confidence scores",
    replit: "Basic build status only",
    winner: "prodvo",
  },
  {
    stage: "Safety",
    prodvo: "Checkpoints, rollback snapshots, and approval gates",
    replit: "No built-in rollback or approval workflows",
    winner: "prodvo",
  },
  {
    stage: "Deployment",
    prodvo: "One-click deploy with rollback-ready states",
    replit: "One-click deploy - but no rollback safety net",
    winner: "tie",
  },
];

const FEATURE_MATRIX = [
  { feature: "Natural language → working app", prodvo: true, replit: true },
  { feature: "Structured planning workspace", prodvo: true, replit: false },
  { feature: "Parallel agent execution", prodvo: true, replit: true },
  { feature: "Checkpoint & rollback", prodvo: true, replit: false },
  { feature: "Approval workflows", prodvo: true, replit: false },
  { feature: "Built-in preview environments", prodvo: true, replit: true },
  { feature: "Zero-config database", prodvo: true, replit: true },
  { feature: "Zero-config auth", prodvo: true, replit: true },
  { feature: "Git integration", prodvo: true, replit: true },
  { feature: "Team coordination timeline", prodvo: true, replit: false },
  { feature: "Audit trails", prodvo: true, replit: false },
  { feature: "Mobile app for building", prodvo: false, replit: true },
  { feature: "Video/slides generation", prodvo: false, replit: true },
];

const PRICING_COMPARISON = [
  {
    tier: "Free / Starter",
    prodvo: { price: "$29/mo", features: "1 workspace, lite runs, preview, git sync" },
    replit: { price: "Free", features: "Daily credits, Lite build only, 1 app (30-day limit), badge" },
  },
  {
    tier: "Growth / Core",
    prodvo: { price: "$99/mo", features: "Parallel agents, autonomous mode, checkpoints, rollback, custom domains" },
    replit: { price: "~$25/mo", features: "Full build, unlimited apps, third-party connectors, badge removal" },
  },
  {
    tier: "Scale / Teams",
    prodvo: { price: "$249/mo", features: "Advanced access, dedicated capacity, priority support, governance" },
    replit: { price: "Custom", features: "Advanced controls, support" },
  },
];

const MVP_SCENARIOS = [
  {
    scenario: "Solo founder building MVP",
    prodvo: "2 days",
    replit: "1–2 weeks",
    notes: "Prodvo's planning + parallel execution compresses timeline",
  },
  {
    scenario: "Agency delivering client feature",
    prodvo: "2 hours",
    replit: "1–2 days",
    notes: "Reusable workspace templates + scoped automation",
  },
  {
    scenario: "Hackathon working demo",
    prodvo: "30 minutes",
    replit: "2–4 hours",
    notes: "Structured planning prevents false starts",
  },
];

export default function CompareReplitPage() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>
            Prodvo vs Replit
          </h1>
          <p className={styles.heroSub}>
            Both platforms turn prompts into apps. The difference is what happens 
            between the prompt and production - planning, parallel execution, and 
            safety rails that keep teams shipping with confidence.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Try Prodvo free
            </Link>
            <Link href="#comparison" className="btn btn-secondary">
              See the comparison
            </Link>
          </div>
        </div>

        {/* Split visual metaphor */}
        <div className={styles.splitVisual}>
          <div className={styles.splitLeft}>
            <span className={styles.splitLabel}>Without planning</span>
            <div className={styles.fragmentedBlocks}>
              <span className={styles.block} style={{ animationDelay: "0s" }} />
              <span className={styles.block} style={{ animationDelay: "0.2s" }} />
              <span className={styles.block} style={{ animationDelay: "0.4s" }} />
              <span className={styles.block} style={{ animationDelay: "0.1s" }} />
              <span className={styles.block} style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
          <div className={styles.splitDivider} />
          <div className={styles.splitRight}>
            <span className={styles.splitLabel}>With Prodvo</span>
            <div className={styles.unifiedBlocks}>
              <span className={styles.uniBlock} />
              <span className={styles.uniBlock} />
              <span className={styles.uniBlock} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WORKFLOW COMPARISON
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="comparison">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Workflow</span>
            <h2 className={styles.sectionTitle}>The real difference is in the workflow</h2>
            <p className={styles.sectionSub}>
              Replit gets you from prompt to app. Prodvo gets you from idea to 
              production-ready product with the planning and safety layers teams need.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {WORKFLOW_COMPARISON.map((row) => (
              <div key={row.stage} className={styles.workflowRow}>
                <div className={styles.workflowStage}>{row.stage}</div>
                <div className={`${styles.workflowCell} ${row.winner === "prodvo" ? styles.winner : ""}`}>
                  <span className={styles.platformTag}>Prodvo</span>
                  <p>{row.prodvo}</p>
                </div>
                <div className={`${styles.workflowCell} ${row.winner === "replit" ? styles.winner : ""}`}>
                  <span className={styles.platformTag}>Replit</span>
                  <p>{row.replit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURE MATRIX
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Features</span>
            <h2 className={styles.sectionTitle}>Feature-by-feature breakdown</h2>
            <p className={styles.sectionSub}>
              Where each platform excels - and where Prodvo fills the gaps that 
              matter for production teams.
            </p>
          </div>

          <div className={styles.matrixWrap}>
            <table className={styles.matrix}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Prodvo</th>
                  <th>Replit</th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_MATRIX.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>
                      {row.prodvo ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>-</span>
                      )}
                    </td>
                    <td>
                      {row.replit ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRICING COMPARISON
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Pricing</span>
            <h2 className={styles.sectionTitle}>Transparent pricing, no credit math</h2>
            <p className={styles.sectionSub}>
              Replit uses a credit system that can get confusing. Prodvo has 
              predictable plans with everything included.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {PRICING_COMPARISON.map((tier) => (
              <div key={tier.tier} className={styles.pricingRow}>
                <div className={styles.pricingTier}>{tier.tier}</div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>Prodvo</span>
                  <span className={styles.pricingPrice}>{tier.prodvo.price}</span>
                  <p className={styles.pricingFeatures}>{tier.prodvo.features}</p>
                </div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>Replit</span>
                  <span className={styles.pricingPrice}>{tier.replit.price}</span>
                  <p className={styles.pricingFeatures}>{tier.replit.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MVP TIMELINE SCENARIOS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Real scenarios</span>
            <h2 className={styles.sectionTitle}>Time-to-ship comparison</h2>
            <p className={styles.sectionSub}>
              How long does it actually take to go from idea to working product?
            </p>
          </div>

          <div className={styles.scenarioGrid}>
            {MVP_SCENARIOS.map((item) => (
              <div key={item.scenario} className={styles.scenarioCard}>
                <h3 className={styles.scenarioTitle}>{item.scenario}</h3>
                <div className={styles.scenarioTimes}>
                  <div className={styles.scenarioTime}>
                    <span className={styles.timeLabel}>Prodvo</span>
                    <span className={styles.timeValue}>{item.prodvo}</span>
                  </div>
                  <div className={styles.scenarioTime}>
                    <span className={styles.timeLabel}>Replit</span>
                    <span className={styles.timeValue}>{item.replit}</span>
                  </div>
                </div>
                <p className={styles.scenarioNotes}>{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BOTTOM LINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottomLine}>
            <h2 className={styles.bottomTitle}>The bottom line</h2>
            <p className={styles.bottomBody}>
              Replit is great for exploration and learning - it has a mobile app, 
              generates videos, and has a large community. But when you need to 
              ship production software with a team, Prodvo's planning workflow, 
              parallel execution, and safety rails make the difference between 
              "it works on my machine" and "it's live and rollback-ready."
            </p>
            <div className={styles.bottomStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3.1×</span>
                <span className={styles.statLabel}>faster with parallel agents</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>0</span>
                <span className={styles.statLabel}>credit math required</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>1-click</span>
                <span className={styles.statLabel}>rollback when things break</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Ready to ship with confidence?</h2>
              <p>
                Start your first Prodvo workspace and see why teams choose 
                planning + execution over prompt-and-pray.
              </p>
              <Link className="btn" href="/pricing">
                Start free trial
              </Link>
            </div>
            <div className="globe" aria-hidden="true">
              <span className="globe-dot a" />
              <span className="globe-dot b" />
              <span className="globe-dot c" />
              <span className="globe-dot d" />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
