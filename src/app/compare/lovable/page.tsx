"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./lovable.module.css";

const WORKFLOW_TIMELINE = [
  {
    step: "01",
    title: "Plan",
    prodvo: {
      headline: "Structured task breakdown",
      detail: "Convert requirements into ordered tasks with effort estimates and dependencies",
    },
    lovable: {
      headline: "Jump to prompts",
      detail: "No planning phase - start prompting immediately",
    },
  },
  {
    step: "02",
    title: "Build",
    prodvo: {
      headline: "Parallel agent execution",
      detail: "UI, backend, tests, and integrations run simultaneously with live visibility",
    },
    lovable: {
      headline: "Sequential generation",
      detail: "Template library with one-at-a-time generation",
    },
  },
  {
    step: "03",
    title: "Review",
    prodvo: {
      headline: "Checkpoint gates",
      detail: "Clear diffs, team approvals, and rollback-ready states before deployment",
    },
    lovable: {
      headline: "GitHub PR workflow",
      detail: "Bring your own review process via GitHub sync",
    },
  },
  {
    step: "04",
    title: "Ship",
    prodvo: {
      headline: "One-click deploy + rollback",
      detail: "Deploy with automatic snapshots and audit trail for instant recovery",
    },
    lovable: {
      headline: "Deploy only",
      detail: "Custom domains supported, but no rollback safety net",
    },
  },
];

const SAFETY_FEATURES = [
  {
    title: "Rollback capability",
    prodvo: "One-click rollback to any checkpoint snapshot",
    lovable: "No built-in rollback - rely on Git history",
    prodvoWins: true,
  },
  {
    title: "Approval gates",
    prodvo: "Gate risky changes behind team approval workflows",
    lovable: "No approval workflow - direct deploy",
    prodvoWins: true,
  },
  {
    title: "Audit trails",
    prodvo: "Full execution history with timestamps and diffs",
    lovable: "Standard Git commit history only",
    prodvoWins: true,
  },
  {
    title: "Checkpoint snapshots",
    prodvo: "Automatic checkpoints before major changes",
    lovable: "Manual Git commits required",
    prodvoWins: true,
  },
  {
    title: "Scoped execution",
    prodvo: "Limit agent runs to specific files or tasks",
    lovable: "Full project regeneration on changes",
    prodvoWins: true,
  },
  {
    title: "Compliance certs",
    prodvo: "Audit trails + governance controls",
    lovable: "SOC 2 Type II, ISO 27001, GDPR",
    prodvoWins: false,
  },
];

const TEAM_FEATURES = [
  {
    feature: "Planning workspace",
    description: "Convert requirements into ordered task plans",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Parallel execution",
    description: "Run frontend, backend, QA simultaneously",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Live progress tracking",
    description: "See blockers and completion confidence in real-time",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Single coordination view",
    description: "PM, eng, and QA in one timeline",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "GitHub sync",
    description: "Push code to your repository",
    prodvo: true,
    lovable: true,
  },
  {
    feature: "Team workspaces",
    description: "Shared collaboration spaces",
    prodvo: true,
    lovable: true,
  },
];

const ENTERPRISE_FEATURES = [
  { feature: "SOC 2 Type II", prodvo: "Via audit trails", lovable: "Certified", lovableWins: true },
  { feature: "ISO 27001", prodvo: "Roadmap", lovable: "Certified", lovableWins: true },
  { feature: "GDPR compliance", prodvo: "Yes", lovable: "Yes", lovableWins: false },
  { feature: "SSO / SAML", prodvo: "Scale tier", lovable: "Business tier", lovableWins: false },
  { feature: "Audit logs", prodvo: "All tiers", lovable: "Enterprise only", lovableWins: false },
  { feature: "Role-based access", prodvo: "Scale tier", lovable: "Business tier", lovableWins: false },
];

export default function CompareLovablePage() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>
            Prodvo <span className={styles.vs}>vs</span> Lovable
          </h1>
          <p className={styles.heroSub}>
            Both promise production-ready output. The difference is what happens 
            when something goes wrong - and how you prevent it in the first place.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Try Prodvo free
            </Link>
            <Link href="#workflow" className="btn btn-secondary">
              See the difference
            </Link>
          </div>
        </div>

        {/* Visual element */}
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            <div className={styles.visualHeader}>
              <span className={styles.visualDot} />
              <span className={styles.visualDot} />
              <span className={styles.visualDot} />
            </div>
            <div className={styles.visualContent}>
              <div className={styles.visualLine} style={{ width: "80%" }} />
              <div className={styles.visualLine} style={{ width: "65%" }} />
              <div className={styles.visualCheckpoint}>
                <span className={styles.checkpointIcon}>✓</span>
                <span>Checkpoint saved</span>
              </div>
              <div className={styles.visualLine} style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WORKFLOW TIMELINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="workflow">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Workflow</span>
            <h2 className={styles.sectionTitle}>From idea to production</h2>
            <p className={styles.sectionSub}>
              Lovable generates apps. Prodvo manages the journey from planning through safe deployment.
            </p>
          </div>

          <div className={styles.timeline}>
            {WORKFLOW_TIMELINE.map((item, idx) => (
              <div key={item.step} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.timelineStep}>{item.step}</span>
                  {idx < WORKFLOW_TIMELINE.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <div className={styles.timelineCompare}>
                    <div className={styles.timelineBox}>
                      <span className={styles.timelineBrand}>Prodvo</span>
                      <strong>{item.prodvo.headline}</strong>
                      <p>{item.prodvo.detail}</p>
                    </div>
                    <div className={styles.timelineBox}>
                      <span className={styles.timelineBrand}>Lovable</span>
                      <strong>{item.lovable.headline}</strong>
                      <p>{item.lovable.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SAFETY FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt} id="safety">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Safety</span>
            <h2 className={styles.sectionTitle}>Production-grade means rollback-ready</h2>
            <p className={styles.sectionSub}>
              Lovable emphasizes certifications. Prodvo adds the operational safety 
              that prevents bad deploys from becoming incidents.
            </p>
          </div>

          <div className={styles.safetyGrid}>
            {SAFETY_FEATURES.map((item) => (
              <div 
                key={item.title} 
                className={`${styles.safetyCard} ${item.prodvoWins ? styles.prodvoWins : ""}`}
              >
                <div className={styles.safetyHeader}>
                  <h3>{item.title}</h3>
                  {item.prodvoWins && <span className={styles.winTag}>Prodvo</span>}
                  {!item.prodvoWins && <span className={styles.winTagAlt}>Lovable</span>}
                </div>
                <div className={styles.safetyBody}>
                  <div className={styles.safetyRow}>
                    <span className={styles.rowLabel}>Prodvo</span>
                    <span>{item.prodvo}</span>
                  </div>
                  <div className={styles.safetyRow}>
                    <span className={styles.rowLabel}>Lovable</span>
                    <span>{item.lovable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM COORDINATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Teams</span>
            <h2 className={styles.sectionTitle}>Built for coordination, not just generation</h2>
            <p className={styles.sectionSub}>
              Code generation is table stakes. The real challenge is keeping teams aligned 
              through planning, execution, and review.
            </p>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureHeader}>
              <span>Feature</span>
              <span>Prodvo</span>
              <span>Lovable</span>
            </div>
            {TEAM_FEATURES.map((item) => (
              <div key={item.feature} className={styles.featureRow}>
                <div className={styles.featureInfo}>
                  <strong>{item.feature}</strong>
                  <span>{item.description}</span>
                </div>
                <span className={item.prodvo ? styles.checkYes : styles.checkNo}>
                  {item.prodvo ? "✓" : "-"}
                </span>
                <span className={item.lovable ? styles.checkYes : styles.checkNo}>
                  {item.lovable ? "✓" : "-"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ENTERPRISE COMPARISON
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Enterprise</span>
            <h2 className={styles.sectionTitle}>Enterprise readiness</h2>
            <p className={styles.sectionSub}>
              Lovable leads on certifications. Prodvo leads on operational controls.
            </p>
          </div>

          <div className={styles.enterpriseGrid}>
            {ENTERPRISE_FEATURES.map((item) => (
              <div 
                key={item.feature} 
                className={`${styles.enterpriseCard} ${item.lovableWins ? styles.lovableWins : ""}`}
              >
                <h4>{item.feature}</h4>
                <div className={styles.enterpriseCompare}>
                  <div>
                    <span className={styles.brandSmall}>Prodvo</span>
                    <span className={styles.enterpriseValue}>{item.prodvo}</span>
                  </div>
                  <div>
                    <span className={styles.brandSmall}>Lovable</span>
                    <span className={styles.enterpriseValue}>{item.lovable}</span>
                  </div>
                </div>
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
            <div className={styles.bottomGrid}>
              <div className={styles.bottomCard}>
                <h3>Choose Lovable if...</h3>
                <ul>
                  <li>SOC 2 / ISO 27001 certification is a hard requirement today</li>
                  <li>You need GitHub-first workflow with full code ownership</li>
                  <li>You're a solo builder who doesn't need team coordination</li>
                </ul>
              </div>
              <div className={`${styles.bottomCard} ${styles.bottomCardHighlight}`}>
                <h3>Choose Prodvo if...</h3>
                <ul>
                  <li>You need planning → execution → review → ship in one place</li>
                  <li>Rollback safety and approval gates matter for your team</li>
                  <li>You want parallel execution, not sequential prompts</li>
                  <li>Team coordination is as important as code generation</li>
                </ul>
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
              <h2>Production-grade means rollback-ready</h2>
              <p>
                Start your first Prodvo workspace and see why teams choose 
                safety rails over certifications alone.
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
