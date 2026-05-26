import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./v0.module.css";

const WORKFLOW_PHASES = [
  {
    phase: "01",
    name: "Design",
    v0: {
      headline: "Visual design mode",
      detail: "Figma import, design systems, live preview - design to code in seconds",
    },
    prodvo: {
      headline: "Plan before you code",
      detail: "Structured task plans with dependencies, effort estimates, and team alignment",
    },
    v0Leads: true,
  },
  {
    phase: "02",
    name: "Build",
    v0: {
      headline: "Chat-driven generation",
      detail: "Conversational prompts with sequential code generation",
    },
    prodvo: {
      headline: "Parallel execution",
      detail: "Frontend, backend, QA, integrations - running simultaneously",
    },
    v0Leads: false,
  },
  {
    phase: "03",
    name: "Review",
    v0: {
      headline: "GitHub auto-branching",
      detail: "Automatic branches and commits with PR workflow",
    },
    prodvo: {
      headline: "Checkpoint gates",
      detail: "Team approval workflows with clear diffs before deployment",
    },
    v0Leads: false,
  },
  {
    phase: "04",
    name: "Ship",
    v0: {
      headline: "Vercel deployment",
      detail: "One-click deploy to Vercel's edge network - Vercel only",
    },
    prodvo: {
      headline: "Deploy + rollback",
      detail: "One-click deploy with automatic snapshots and instant rollback",
    },
    v0Leads: false,
  },
];

const STRENGTH_AREAS = [
  {
    area: "Visual design tools",
    winner: "v0",
    v0: "Design mode, Figma import, design system builder, live preview",
    prodvo: "Standard component libraries",
    detail: "v0 is built for designers who want to see and edit visually",
  },
  {
    area: "Planning & structure",
    winner: "Prodvo",
    v0: "Jump straight to prompting",
    prodvo: "Task plans with dependencies, effort estimates, team coordination",
    detail: "Prodvo prevents false starts with upfront structure",
  },
  {
    area: "Execution speed",
    winner: "Prodvo",
    v0: "Sequential chat-based generation",
    prodvo: "Parallel agents - 3.1× faster than sequential",
    detail: "Prodvo runs frontend, backend, QA simultaneously",
  },
  {
    area: "Safety & rollback",
    winner: "Prodvo",
    v0: "Git history only - no built-in rollback UI",
    prodvo: "Checkpoint snapshots with one-click rollback",
    detail: "Prodvo lets you undo bad deploys instantly",
  },
  {
    area: "Deployment flexibility",
    winner: "Prodvo",
    v0: "Vercel-only deployment",
    prodvo: "Deploy anywhere with rollback-ready states",
    detail: "Prodvo doesn't lock you into one platform",
  },
  {
    area: "Mobile building",
    winner: "v0",
    v0: "Full iOS app for building on the go",
    prodvo: "Web-only workspace",
    detail: "v0 lets you build from your phone",
  },
];

const TEAM_SCALING = [
  { size: "Solo", prodvo: 99, v0: 30, note: "v0 is 3× cheaper for individuals" },
  { size: "3 users", prodvo: 249, v0: 90, note: "v0 still 2.7× cheaper" },
  { size: "5 users", prodvo: 249, v0: 150, note: "Gap narrows to 1.6×" },
  { size: "8 users", prodvo: 249, v0: 240, note: "Nearly equal - Prodvo adds safety" },
  { size: "10 users", prodvo: 249, v0: 300, note: "Prodvo wins by $51/mo" },
  { size: "20 users", prodvo: 249, v0: 600, note: "Prodvo saves $351/mo" },
];

const SCENARIOS = [
  {
    scenario: "Rapid UI prototype",
    time: { v0: "15 min", prodvo: "45 min" },
    winner: "v0",
    why: "Design mode and Figma import make visual iteration instant",
  },
  {
    scenario: "Full-stack MVP",
    time: { v0: "2–3 days", prodvo: "1 day" },
    winner: "Prodvo",
    why: "Parallel execution + planning prevents rework",
  },
  {
    scenario: "Team feature sprint",
    time: { v0: "1 week", prodvo: "2–3 days" },
    winner: "Prodvo",
    why: "Coordination timeline keeps PM, eng, QA aligned",
  },
  {
    scenario: "Emergency hotfix",
    time: { v0: "Risky", prodvo: "Safe" },
    winner: "Prodvo",
    why: "Checkpoint rollback if the fix breaks something else",
  },
];

export default function CompareV0Page() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>Prodvo vs v0</h1>
          <p className={styles.heroSub}>
            v0 turns Figma into code in seconds. Prodvo turns ideas into 
            production-ready products with planning, parallel execution, and 
            rollback safety. Different tools for different stages.
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

        {/* Dual-path visual */}
        <div className={styles.dualVisual}>
          <div className={styles.pathCard}>
            <div className={styles.pathHeader}>
              <span className={styles.pathLabel}>v0 path</span>
            </div>
            <div className={styles.pathSteps}>
              <span className={styles.pathStep}>Design</span>
              <span className={styles.pathArrow}>→</span>
              <span className={styles.pathStep}>Code</span>
              <span className={styles.pathArrow}>→</span>
              <span className={styles.pathStep}>Deploy</span>
            </div>
            <span className={styles.pathNote}>Fast to prototype</span>
          </div>
          <div className={styles.pathDivider}>
            <span>vs</span>
          </div>
          <div className={`${styles.pathCard} ${styles.pathCardHighlight}`}>
            <div className={styles.pathHeader}>
              <span className={styles.pathLabel}>Prodvo path</span>
            </div>
            <div className={styles.pathSteps}>
              <span className={styles.pathStep}>Plan</span>
              <span className={styles.pathArrow}>→</span>
              <span className={styles.pathStep}>Build</span>
              <span className={styles.pathArrow}>→</span>
              <span className={styles.pathStep}>Review</span>
              <span className={styles.pathArrow}>→</span>
              <span className={styles.pathStep}>Ship</span>
            </div>
            <span className={styles.pathNote}>Safe to production</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WORKFLOW PHASES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="workflow">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Workflow</span>
            <h2 className={styles.sectionTitle}>Different strengths at each phase</h2>
            <p className={styles.sectionSub}>
              v0 excels at the design-to-code transition. Prodvo excels at 
              the planning-to-production journey.
            </p>
          </div>

          <div className={styles.workflowTimeline}>
            {WORKFLOW_PHASES.map((item, idx) => (
              <div key={item.phase} className={styles.workflowItem}>
                <div className={styles.workflowMarker}>
                  <span className={styles.workflowPhase}>{item.phase}</span>
                  {idx < WORKFLOW_PHASES.length - 1 && <div className={styles.workflowLine} />}
                </div>
                <div className={styles.workflowContent}>
                  <h3 className={styles.workflowName}>{item.name}</h3>
                  <div className={styles.workflowCompare}>
                    <div className={`${styles.workflowBox} ${item.v0Leads ? styles.leads : ""}`}>
                      <span className={styles.workflowBrand}>v0</span>
                      <strong>{item.v0.headline}</strong>
                      <p>{item.v0.detail}</p>
                      {item.v0Leads && <span className={styles.leadsBadge}>v0 leads</span>}
                    </div>
                    <div className={`${styles.workflowBox} ${!item.v0Leads ? styles.leads : ""}`}>
                      <span className={styles.workflowBrand}>Prodvo</span>
                      <strong>{item.prodvo.headline}</strong>
                      <p>{item.prodvo.detail}</p>
                      {!item.v0Leads && <span className={styles.leadsBadgeProdvo}>Prodvo leads</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STRENGTH AREAS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Capabilities</span>
            <h2 className={styles.sectionTitle}>Where each platform excels</h2>
            <p className={styles.sectionSub}>
              An honest breakdown - v0 wins on design tooling, Prodvo wins on 
              workflow and safety.
            </p>
          </div>

          <div className={styles.strengthGrid}>
            {STRENGTH_AREAS.map((item) => (
              <div
                key={item.area}
                className={`${styles.strengthCard} ${item.winner === "Prodvo" ? styles.prodvoWins : styles.v0Wins}`}
              >
                <div className={styles.strengthHeader}>
                  <h3>{item.area}</h3>
                  <span className={item.winner === "Prodvo" ? styles.winnerTagProdvo : styles.winnerTagV0}>
                    {item.winner}
                  </span>
                </div>
                <div className={styles.strengthBody}>
                  <div className={styles.strengthRow}>
                    <span className={styles.strengthLabel}>v0</span>
                    <span>{item.v0}</span>
                  </div>
                  <div className={styles.strengthRow}>
                    <span className={styles.strengthLabel}>Prodvo</span>
                    <span>{item.prodvo}</span>
                  </div>
                </div>
                <p className={styles.strengthDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SCENARIOS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Real scenarios</span>
            <h2 className={styles.sectionTitle}>Time-to-ship comparison</h2>
            <p className={styles.sectionSub}>
              How long does each task actually take? It depends on what you're building.
            </p>
          </div>

          <div className={styles.scenarioGrid}>
            {SCENARIOS.map((item) => (
              <div 
                key={item.scenario} 
                className={`${styles.scenarioCard} ${item.winner === "Prodvo" ? styles.scenarioProdvo : styles.scenarioV0}`}
              >
                <h3 className={styles.scenarioTitle}>{item.scenario}</h3>
                <div className={styles.scenarioTimes}>
                  <div className={styles.scenarioTime}>
                    <span className={styles.timeLabel}>v0</span>
                    <span className={styles.timeValue}>{item.time.v0}</span>
                  </div>
                  <div className={styles.scenarioTime}>
                    <span className={styles.timeLabel}>Prodvo</span>
                    <span className={styles.timeValue}>{item.time.prodvo}</span>
                  </div>
                </div>
                <div className={styles.scenarioWinner}>
                  <span className={item.winner === "Prodvo" ? styles.winnerProdvo : styles.winnerV0}>
                    {item.winner} wins
                  </span>
                </div>
                <p className={styles.scenarioWhy}>{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM SCALING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Team economics</span>
            <h2 className={styles.sectionTitle}>How pricing scales</h2>
            <p className={styles.sectionSub}>
              v0 charges $30/user/month. Prodvo's Scale tier is $249/month flat. 
              The math crosses over at 8 users.
            </p>
          </div>

          <div className={styles.scalingChart}>
            {TEAM_SCALING.map((row) => {
              const maxCost = 600;
              const prodvoWidth = (row.prodvo / maxCost) * 100;
              const v0Width = (row.v0 / maxCost) * 100;
              const winner = row.prodvo < row.v0 ? "Prodvo" : row.v0 < row.prodvo ? "v0" : "tie";
              return (
                <div key={row.size} className={styles.scalingRow}>
                  <div className={styles.scalingSize}>{row.size}</div>
                  <div className={styles.scalingBars}>
                    <div className={styles.barGroup}>
                      <div 
                        className={`${styles.bar} ${styles.barProdvo} ${winner === "Prodvo" ? styles.barWinner : ""}`}
                        style={{ width: `${prodvoWidth}%` }}
                      >
                        <span>${row.prodvo}</span>
                      </div>
                      <span className={styles.barLabel}>Prodvo</span>
                    </div>
                    <div className={styles.barGroup}>
                      <div 
                        className={`${styles.bar} ${styles.barV0} ${winner === "v0" ? styles.barWinner : ""}`}
                        style={{ width: `${v0Width}%` }}
                      >
                        <span>${row.v0}</span>
                      </div>
                      <span className={styles.barLabel}>v0</span>
                    </div>
                  </div>
                  <div className={styles.scalingNote}>{row.note}</div>
                </div>
              );
            })}
          </div>

          <p className={styles.scalingInsight}>
            For solo work and small teams, v0 is more economical. At 8+ users, 
            Prodvo's flat pricing wins - and you get planning workflows, 
            checkpoints, and rollback included.
          </p>
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
              v0 and Prodvo are complementary tools. Many teams use v0 for rapid 
              prototypes and design exploration, then switch to Prodvo when they 
              need team coordination, safety rails, and production confidence.
            </p>
            <div className={styles.bottomGrid}>
              <div className={styles.bottomCard}>
                <h3>Choose v0 if...</h3>
                <ul>
                  <li>You're a designer who wants visual editing</li>
                  <li>You need Figma-to-code in seconds</li>
                  <li>You're prototyping before committing to a direction</li>
                  <li>You want to build from your phone</li>
                  <li>You're deploying exclusively to Vercel</li>
                </ul>
              </div>
              <div className={`${styles.bottomCard} ${styles.bottomCardHighlight}`}>
                <h3>Choose Prodvo if...</h3>
                <ul>
                  <li>You need planning before coding starts</li>
                  <li>You want 3.1× faster parallel execution</li>
                  <li>Rollback safety matters for production</li>
                  <li>Your team needs a coordination timeline</li>
                  <li>You're at 8+ users and want flat pricing</li>
                </ul>
              </div>
            </div>
            <div className={styles.bottomStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3.1×</span>
                <span className={styles.statLabel}>faster with parallel agents</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>1-click</span>
                <span className={styles.statLabel}>rollback when things break</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>$351</span>
                <span className={styles.statLabel}>saved/mo at 20 users</span>
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
              <h2>Ready for production-grade workflows?</h2>
              <p>
                Start your first Prodvo workspace and see why teams choose 
                planning + safety over prompts alone.
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
