"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./workflow.module.css";

type PhaseKey = "start" | "build" | "iterate" | "deploy" | "maintain";
type DiffTone = "neutral" | "removed" | "added";
type DeployStatus = "done" | "running" | "queued";
type LogLevel = "ok" | "warn" | "info" | "issue";

const PHASE_ORDER: readonly PhaseKey[] = [
  "start",
  "build",
  "iterate",
  "deploy",
  "maintain",
];

const LOOP_PHASES: ReadonlyArray<{
  key: PhaseKey;
  number: string;
  name: string;
  description: string;
}> = [
  {
    key: "start",
    number: "01",
    name: "Start - Describe your product",
    description:
      "One prompt scaffolds the entire codebase, database, and auth layer.",
  },
  {
    key: "build",
    number: "02",
    name: "Build - Agent writes the code",
    description:
      "The AI agent executes each feature, tests it, and fixes issues in context.",
  },
  {
    key: "iterate",
    number: "03",
    name: "Iterate - Talk to change it",
    description:
      "Request changes in plain language. Prodvo applies them without breaking existing features.",
  },
  {
    key: "deploy",
    number: "04",
    name: "Deploy - One click to production",
    description:
      "SSL, CDN, custom domain, and previews per branch are handled for you.",
  },
  {
    key: "maintain",
    number: "05",
    name: "Maintain - Prodvo watches it",
    description:
      "Logs, errors, and performance metrics stay visible in one operating view.",
  },
];

const HERO_PROMPTS: readonly string[] = [
  '"Build a SaaS with user auth, a subscription dashboard, and Stripe billing."',
  '"Add a team invite system - each team can have up to 5 members."',
  '"Make the pricing page mobile-friendly and add a free tier."',
];

const HERO_RESPONSES: ReadonlyArray<{
  marker: string;
  title: string;
  detail: string;
}> = [
  {
    marker: "✓",
    title: "Project scaffolded",
    detail:
      "Next.js + TypeScript, Prisma ORM, and deployment wiring generated in seconds.",
  },
  {
    marker: "✓",
    title: "Auth configured",
    detail:
      "Email + OAuth flows, session middleware, and protected routes are connected.",
  },
  {
    marker: "✓",
    title: "Database ready",
    detail: "Schema generated, migrations run, and Postgres stays in sync.",
  },
  {
    marker: "✓",
    title: "Stripe integrated",
    detail:
      "Subscription logic, webhook handlers, and billing portal are wired end-to-end.",
  },
  {
    marker: "→",
    title: "Deployed to production",
    detail: "Live on your domain with SSL and edge distribution.",
  },
];

const BUILD_TURNS: ReadonlyArray<{
  fromUser: string;
  fromProdvo: string;
  chips: readonly string[];
}> = [
  {
    fromUser:
      "Add a client portal where clients can view invoices and download PDFs without signing in - just a magic link.",
    fromProdvo:
      "Built. Added portal_token on invoices, a magic-link generator, and a public route at /portal/[token]. PDF download reuses the export endpoint for a secure no-login flow.",
    chips: ["prisma migration", "2 new routes", "email template updated"],
  },
  {
    fromUser:
      "Invoice totals are wrong. Fix tax calculation and add subtotal + tax + total in the PDF.",
    fromProdvo:
      "Fixed. calculateTotal() now computes qty × unitPrice, then tax, and returns structured totals. Updated PDF template and recalculated existing invoice totals.",
    chips: ["bug fixed", "pdf layout updated", "migration recalculation"],
  },
  {
    fromUser:
      "Add recurring invoices with monthly or quarterly cycles and auto-generate the next invoice on due date.",
    fromProdvo:
      "Done. Added recurring_interval schema field, scheduled runner, generation utility, and dashboard toggles for recurrence control.",
    chips: ["schema updated", "scheduler created", "dashboard UI updated"],
  },
];

const DIFF_LINES: ReadonlyArray<{ tone: DiffTone; marker: string; code: string }> = [
  {
    tone: "neutral",
    marker: " ",
    code: "export function calculateTotal(items: LineItem[], taxRate: number) {",
  },
  {
    tone: "removed",
    marker: "-",
    code: "  const subtotal = items.reduce((s, i) => s + i.amount, 0)",
  },
  {
    tone: "removed",
    marker: "-",
    code: "  return subtotal * (1 + taxRate)",
  },
  {
    tone: "added",
    marker: "+",
    code: "  const subtotal = items.reduce((s, i) => s + (i.qty * i.unitPrice), 0)",
  },
  {
    tone: "added",
    marker: "+",
    code: "  const tax = parseFloat((subtotal * taxRate).toFixed(2))",
  },
  {
    tone: "added",
    marker: "+",
    code: "  return { subtotal, tax, total: subtotal + tax }",
  },
  { tone: "neutral", marker: " ", code: "}" },
  {
    tone: "neutral",
    marker: " ",
    code: "// PDF template - invoice-template.tsx",
  },
  {
    tone: "removed",
    marker: "-",
    code: "  <Total>{fmt(invoice.total)}</Total>",
  },
  {
    tone: "added",
    marker: "+",
    code: "  <Row label=\"Subtotal\" value={fmt(totals.subtotal)} />",
  },
  {
    tone: "added",
    marker: "+",
    code: "  <Row label=\"Tax ({rate}%)\" value={fmt(totals.tax)} />",
  },
  {
    tone: "added",
    marker: "+",
    code: "  <Total bold>{fmt(totals.total)}</Total>",
  },
];

const ITERATION_RESULTS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Root cause identified",
    body: "calculateTotal() summed line-item amounts without respecting quantity and tax breakdown.",
  },
  {
    title: "Fix applied + return type updated",
    body: "Function now returns subtotal, tax, and total. All callsites update in one pass.",
  },
  {
    title: "PDF template updated",
    body: "Subtotal, tax row, and bold final total now render in every exported invoice.",
  },
  {
    title: "Existing records handled",
    body: "Migration script recalculates historical invoices to preserve reporting accuracy.",
  },
];

const DEPLOY_STEPS: ReadonlyArray<{
  status: DeployStatus;
  name: string;
  detail: string;
  time: string;
}> = [
  {
    status: "done",
    name: "Build",
    detail: "Next.js production build completed with zero blocking errors.",
    time: "14s",
  },
  {
    status: "done",
    name: "Database migration",
    detail: "3 migrations applied in order with no conflicts.",
    time: "3s",
  },
  {
    status: "done",
    name: "Environment variables",
    detail: "Runtime keys synced and Stripe verification passed.",
    time: "1s",
  },
  {
    status: "running",
    name: "Edge propagation",
    detail: "Deploy assets propagating globally.",
    time: "12s…",
  },
  {
    status: "queued",
    name: "SSL certificate",
    detail: "Certificate issuance and renewal attached to domain.",
    time: "-",
  },
  {
    status: "queued",
    name: "Health checks",
    detail: "Smoke test suite executes against production URL.",
    time: "-",
  },
];

const DEPLOY_FEATURES: ReadonlyArray<{
  title: string;
  body: string;
  chip: string;
}> = [
  {
    title: "Custom domain + automatic SSL",
    body: "Connect domain once. HTTPS is configured and renewed without manual cert work.",
    chip: "zero config",
  },
  {
    title: "Global edge network",
    body: "Assets and routes are distributed globally for consistent low-latency delivery.",
    chip: "global edge",
  },
  {
    title: "Preview per branch",
    body: "Every branch can ship a live preview URL for internal review or stakeholder sign-off.",
    chip: "auto previews",
  },
  {
    title: "Atomic rollback",
    body: "If a release fails checks, traffic shifts back instantly to a healthy deploy.",
    chip: "instant rollback",
  },
];

const LOG_ROWS: ReadonlyArray<{
  time: string;
  level: LogLevel;
  message: string;
}> = [
  { time: "14:03:22", level: "ok", message: "GET /dashboard 200 · 38ms" },
  {
    time: "14:03:24",
    level: "ok",
    message: "POST /api/invoices · created invoice_019sk3 · 204ms",
  },
  {
    time: "14:03:29",
    level: "warn",
    message: "Stripe webhook retry #2 · invoice.payment_failed",
  },
  {
    time: "14:03:31",
    level: "ok",
    message: "Webhook processed · user notified via email · 112ms",
  },
  {
    time: "14:03:38",
    level: "info",
    message: "Recurring invoice scheduler triggered · 3 invoices queued",
  },
  {
    time: "14:03:39",
    level: "ok",
    message: "invoice_020 generated · magic link delivered · 89ms",
  },
  {
    time: "14:03:41",
    level: "issue",
    message: "PDF export timeout · auto retry started",
  },
  {
    time: "14:03:42",
    level: "ok",
    message: "PDF export retry succeeded · delivered in 1.8s",
  },
  {
    time: "14:03:45",
    level: "ok",
    message: "GET /portal/tok_9xk2p3 200 · public invoice view · 29ms",
  },
  {
    time: "14:03:48",
    level: "info",
    message: "Session created · user login via Google OAuth",
  },
];

const SPEED_CELLS: ReadonlyArray<{
  phase: string;
  time: string;
  unit: string;
  description: string;
}> = [
  {
    phase: "01 · Start",
    time: "43",
    unit: "seconds",
    description: "From prompt to full scaffolded and runnable project.",
  },
  {
    phase: "02 · Build",
    time: "~3",
    unit: "min per feature",
    description: "Average time from request to working committed code.",
  },
  {
    phase: "03 · Iterate",
    time: "<60",
    unit: "seconds",
    description: "Typical turnaround for safe in-context change requests.",
  },
  {
    phase: "04 · Deploy",
    time: "28",
    unit: "seconds",
    description: "Build, migrate, propagate, verify, and publish.",
  },
  {
    phase: "05 · Maintain",
    time: "0",
    unit: "manual work",
    description: "Observability and alerts run continuously by default.",
  },
];

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function getNextPhase(phase: PhaseKey): PhaseKey {
  const currentIndex = PHASE_ORDER.indexOf(phase);
  const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
  return PHASE_ORDER[nextIndex];
}

function getDeployStatusClass(status: DeployStatus): string {
  if (status === "done") return styles.deployDone;
  if (status === "running") return styles.deployRunning;
  return styles.deployQueued;
}

function getLogLevelClass(level: LogLevel): string {
  if (level === "ok") return styles.logOk;
  if (level === "warn") return styles.logWarn;
  if (level === "issue") return styles.logIssue;
  return styles.logInfo;
}

function getDiffToneClass(tone: DiffTone): string {
  if (tone === "added") return styles.diffAdded;
  if (tone === "removed") return styles.diffRemoved;
  return styles.diffNeutral;
}

export default function WorkflowPage() {
  const [activePhase, setActivePhase] = useState<PhaseKey>("start");
  const [manualPhaseSelection, setManualPhaseSelection] = useState(false);

  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(`.${styles.reveal}`),
    );

    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || manualPhaseSelection) return;

    const interval = window.setInterval(() => {
      setActivePhase((prev) => getNextPhase(prev));
    }, 2500);

    return () => window.clearInterval(interval);
  }, [manualPhaseSelection]);

  const handlePhaseSelection = (phase: PhaseKey) => {
    setActivePhase(phase);
    setManualPhaseSelection(true);
  };

  return (
    <SiteShell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroTop}>
              <div className={styles.heroEyebrow}>Workflow</div>
              <h1 className={styles.heroTitle}>
                Describe it.
                <br />
                Prodvo <span className={styles.accent}>builds it.</span>
                <br />
                You ship it.
              </h1>
              <p className={styles.heroSub}>
                Every product starts as a thought. Prodvo turns that thought into a
                running application through one tight loop of prompts, builds, and
                controlled iterations.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={cx(styles.heroColumn, styles.promptColumn)}>
                <div className={styles.heroLabel}>You say</div>
                {HERO_PROMPTS.map((prompt, index) => (
                  <div
                    key={prompt}
                    className={cx(
                      styles.promptLine,
                      index === 0 && styles.promptLineActive,
                    )}
                  >
                    {prompt}
                  </div>
                ))}
              </div>

              <div className={styles.heroDivider} aria-hidden="true">
                <span className={styles.heroDividerBadge}>→</span>
              </div>

              <div className={cx(styles.heroColumn, styles.responseColumn)}>
                <div className={styles.heroLabel}>Prodvo does</div>
                {HERO_RESPONSES.map((item) => (
                  <div key={item.title} className={styles.responseItem}>
                    <span className={styles.responseMarker}>{item.marker}</span>
                    <span className={styles.responseText}>
                      <strong className={styles.responseTitle}>{item.title}</strong>
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.loopSection} id="loop">
          <div className={styles.container}>
            <div className={styles.loopInner}>
              <div className={styles.loopText}>
                <div className={cx(styles.loopEyebrow, styles.reveal)}>
                  The workflow loop
                </div>
                <h2 className={cx(styles.loopTitle, styles.reveal)}>
                  Five phases.
                  <br />
                  One tight loop.
                  <br />
                  Infinite iterations.
                </h2>
                <p className={cx(styles.loopSub, styles.reveal)}>
                  Prodvo workflow is intentionally loop-first. You can re-enter any
                  phase at any time without losing what already works.
                </p>

                <div className={cx(styles.loopPhaseList, styles.reveal)}>
                  {LOOP_PHASES.map((phase) => (
                    <button
                      key={phase.key}
                      type="button"
                      className={cx(
                        styles.loopItem,
                        activePhase === phase.key && styles.loopItemActive,
                      )}
                      onClick={() => handlePhaseSelection(phase.key)}
                      aria-pressed={activePhase === phase.key}
                    >
                      <span className={styles.loopNum}>{phase.number}</span>
                      <span className={styles.loopBody}>
                        <span className={styles.loopName}>{phase.name}</span>
                        <span className={styles.loopDesc}>{phase.description}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={cx(styles.loopDiagram, styles.reveal)}>
                <div className={styles.orbitRing} />

                <svg className={styles.orbitSvg} viewBox="0 0 480 480" aria-hidden="true">
                  <line
                    className={cx(
                      styles.orbitLine,
                      activePhase === "start" && styles.orbitLineActive,
                    )}
                    x1="240"
                    y1="240"
                    x2="240"
                    y2="88"
                  />
                  <line
                    className={cx(
                      styles.orbitLine,
                      activePhase === "build" && styles.orbitLineActive,
                    )}
                    x1="240"
                    y1="240"
                    x2="384"
                    y2="208"
                  />
                  <line
                    className={cx(
                      styles.orbitLine,
                      activePhase === "iterate" && styles.orbitLineActive,
                    )}
                    x1="240"
                    y1="240"
                    x2="320"
                    y2="374"
                  />
                  <line
                    className={cx(
                      styles.orbitLine,
                      activePhase === "deploy" && styles.orbitLineActive,
                    )}
                    x1="240"
                    y1="240"
                    x2="160"
                    y2="374"
                  />
                  <line
                    className={cx(
                      styles.orbitLine,
                      activePhase === "maintain" && styles.orbitLineActive,
                    )}
                    x1="240"
                    y1="240"
                    x2="96"
                    y2="208"
                  />
                </svg>

                <div className={styles.orbitCore}>
                  <div className={styles.orbitCoreLabel}>Prodvo Agent</div>
                </div>

                <button
                  type="button"
                  className={cx(
                    styles.orbitNode,
                    styles.nodeStart,
                    activePhase === "start" && styles.orbitNodeActive,
                  )}
                  onClick={() => handlePhaseSelection("start")}
                  aria-label="Set active phase to start"
                >
                  <span className={styles.orbitNodeInner}>
                    <span className={styles.orbitNodeNum}>01</span>
                    <span className={styles.orbitNodeLabel}>Start</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cx(
                    styles.orbitNode,
                    styles.nodeBuild,
                    activePhase === "build" && styles.orbitNodeActive,
                  )}
                  onClick={() => handlePhaseSelection("build")}
                  aria-label="Set active phase to build"
                >
                  <span className={styles.orbitNodeInner}>
                    <span className={styles.orbitNodeNum}>02</span>
                    <span className={styles.orbitNodeLabel}>Build</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cx(
                    styles.orbitNode,
                    styles.nodeIterate,
                    activePhase === "iterate" && styles.orbitNodeActive,
                  )}
                  onClick={() => handlePhaseSelection("iterate")}
                  aria-label="Set active phase to iterate"
                >
                  <span className={styles.orbitNodeInner}>
                    <span className={styles.orbitNodeNum}>03</span>
                    <span className={styles.orbitNodeLabel}>Iterate</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cx(
                    styles.orbitNode,
                    styles.nodeDeploy,
                    activePhase === "deploy" && styles.orbitNodeActive,
                  )}
                  onClick={() => handlePhaseSelection("deploy")}
                  aria-label="Set active phase to deploy"
                >
                  <span className={styles.orbitNodeInner}>
                    <span className={styles.orbitNodeNum}>04</span>
                    <span className={styles.orbitNodeLabel}>Deploy</span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cx(
                    styles.orbitNode,
                    styles.nodeMaintain,
                    activePhase === "maintain" && styles.orbitNodeActive,
                  )}
                  onClick={() => handlePhaseSelection("maintain")}
                  aria-label="Set active phase to maintain"
                >
                  <span className={styles.orbitNodeInner}>
                    <span className={styles.orbitNodeNum}>05</span>
                    <span className={styles.orbitNodeLabel}>Maintain</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.phaseSection} id="start">
          <div className={styles.container}>
            <div className={cx(styles.phaseLabelRow, styles.reveal)}>
              <span className={styles.phaseNum}>Phase 01</span>
              <div className={styles.phaseDividerLine} />
            </div>
            <h2 className={cx(styles.phaseTitle, styles.reveal)}>
              Start - One prompt.
              <br />
              A full project, live.
            </h2>

            <div className={styles.startInner}>
              <div>
                <div className={cx(styles.promptComposer, styles.reveal)}>
                  <div className={styles.composerBar}>
                    <span className={styles.composerDot} />
                    <span className={styles.composerDot} />
                    <span className={styles.composerDot} />
                    <span className={styles.composerFile}>prodvo · new project</span>
                  </div>

                  <div className={styles.composerBody}>
                    <p className={styles.composerPrompt}>
                      Build a SaaS for tracking freelance invoices. Users sign up,
                      create clients, log invoices with line items, and mark them
                      paid. Export to PDF. Stripe for subscription billing.
                      <span className={styles.composerCursor} />
                    </p>

                    <div className={styles.composerMeta}>
                      <span className={styles.composerTag}>Next.js</span>
                      <span className={styles.composerTag}>Postgres</span>
                      <span className={styles.composerTag}>Stripe</span>
                      <span className={styles.composerTag}>Auth</span>
                      <button type="button" className={styles.composerSubmit}>
                        Build this
                      </button>
                    </div>
                  </div>
                </div>

                <div className={cx(styles.understandingCard, styles.reveal)}>
                  <div className={styles.understandingLabel}>
                    What Prodvo understands
                  </div>
                  <div className={styles.understandingList}>
                    <div className={styles.understandingItem}>
                      → <strong>Data model</strong> - users, clients, invoices, and
                      line items
                    </div>
                    <div className={styles.understandingItem}>
                      → <strong>Auth requirement</strong> - sign-up flow and protected
                      routes
                    </div>
                    <div className={styles.understandingItem}>
                      → <strong>Monetization</strong> - subscription billing with
                      Stripe
                    </div>
                    <div className={styles.understandingItem}>
                      → <strong>Export feature</strong> - PDF generation pipeline
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx(styles.scaffoldPanel, styles.reveal)}>
                <div className={styles.scaffoldBar}>Scaffold output - generated in 43s</div>
                <div className={styles.scaffoldBody}>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>app/</span>page.tsx
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeNew)}>new</span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>app/</span>dashboard/page.tsx
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeNew)}>new</span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>app/</span>invoices/[id]/page.tsx
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeNew)}>new</span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>lib/</span>auth.ts
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeConfigured)}>
                      configured
                    </span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>lib/</span>stripe.ts
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeConfigured)}>
                      configured
                    </span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>prisma/</span>schema.prisma
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeGenerated)}>
                      generated
                    </span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>api/</span>webhooks/stripe.ts
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeNew)}>new</span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>
                      <span className={styles.scaffoldPathDir}>api/</span>invoices/export.ts
                    </span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeNew)}>new</span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>.env.local</span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeConfigured)}>
                      configured
                    </span>
                  </div>
                  <div className={styles.scaffoldRow}>
                    <span className={styles.scaffoldPath}>next.config.ts</span>
                    <span className={cx(styles.scaffoldBadge, styles.badgeConfigured)}>
                      configured
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx(styles.phaseStats, styles.reveal)}>
              <article className={styles.phaseStat}>
                <div className={styles.phaseStatNumber}>43s</div>
                <div className={styles.phaseStatLabel}>Full scaffold time</div>
                <div className={styles.phaseStatDesc}>
                  Prompt submission to complete project structure and runnable app.
                </div>
              </article>
              <article className={styles.phaseStat}>
                <div className={styles.phaseStatNumber}>0</div>
                <div className={styles.phaseStatLabel}>Manual config files</div>
                <div className={styles.phaseStatDesc}>
                  Auth, database, and billing plumbing are prewired by default.
                </div>
              </article>
              <article className={styles.phaseStat}>
                <div className={styles.phaseStatNumber}>100%</div>
                <div className={styles.phaseStatLabel}>Prompt fidelity</div>
                <div className={styles.phaseStatDesc}>
                  Requested features map directly into generated application behavior.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.phaseSection} id="build">
          <div className={styles.container}>
            <div className={cx(styles.phaseLabelRow, styles.reveal)}>
              <span className={styles.phaseNum}>Phase 02</span>
              <div className={styles.phaseDividerLine} />
            </div>
            <h2 className={cx(styles.phaseTitle, styles.reveal)}>
              Build - The agent
              <br />
              codes while you watch.
            </h2>
            <p className={cx(styles.sectionSub, styles.reveal)}>
              You direct, Prodvo executes. Every message becomes a concrete
              implementation action with visible output.
            </p>

            <div className={styles.threadList}>
              {BUILD_TURNS.map((turn) => (
                <article key={turn.fromUser} className={cx(styles.threadTurn, styles.reveal)}>
                  <div className={styles.turnYou}>
                    <div className={styles.turnFrom}>You</div>
                    <p className={styles.turnMessage}>{turn.fromUser}</p>
                  </div>
                  <div className={styles.turnProdvo}>
                    <div className={styles.turnFrom}>Prodvo</div>
                    <p className={styles.turnMessage}>{turn.fromProdvo}</p>
                    <div className={styles.turnActions}>
                      {turn.chips.map((chip) => (
                        <span key={chip} className={styles.turnChip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.phaseSection} id="iterate">
          <div className={styles.container}>
            <div className={cx(styles.phaseLabelRow, styles.reveal)}>
              <span className={styles.phaseNum}>Phase 03</span>
              <div className={styles.phaseDividerLine} />
            </div>
            <h2 className={cx(styles.phaseTitle, styles.reveal)}>
              Iterate - Change anything.
              <br />
              Break nothing.
            </h2>
            <p className={cx(styles.sectionSub, styles.reveal)}>
              Prodvo keeps full context and updates the right layers without
              collateral regressions.
            </p>

            <div className={styles.iterateInner}>
              <div className={cx(styles.diffPanel, styles.reveal)}>
                <div className={styles.diffBar}>
                  <span className={styles.composerDot} />
                  <span className={styles.composerDot} />
                  <span className={styles.composerDot} />
                  <span className={styles.diffFile}>lib/invoices/calculate.ts</span>
                  <div className={styles.diffTabs}>
                    <span className={styles.diffTab}>before</span>
                    <span className={cx(styles.diffTab, styles.diffTabAfter)}>after</span>
                  </div>
                </div>

                <div className={styles.diffBody}>
                  {DIFF_LINES.map((line, index) => (
                    <div
                      key={`${line.marker}-${line.code}-${index}`}
                      className={cx(styles.diffLine, getDiffToneClass(line.tone))}
                    >
                      <span className={styles.diffMarker}>{line.marker}</span>
                      <code className={styles.diffCode}>{line.code}</code>
                    </div>
                  ))}
                  <div className={styles.diffSeparator} />
                </div>
              </div>

              <aside className={cx(styles.iterateAside, styles.reveal)}>
                <div className={styles.iterateRequest}>
                  <div className={styles.iterateRequestLabel}>Your request</div>
                  <p className={styles.iterateRequestText}>
                    {"\"Invoice totals are wrong. Fix tax calculation and add subtotal + tax + total in the PDF.\""}
                  </p>
                </div>

                <div className={styles.iterateResults}>
                  {ITERATION_RESULTS.map((item, index) => (
                    <div key={item.title} className={styles.iterateResult}>
                      <span className={styles.iterateResultMark}>
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className={styles.iterateResultText}>
                        <strong className={styles.iterateResultTitle}>{item.title}</strong>
                        {item.body}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.phaseSection} id="deploy">
          <div className={styles.container}>
            <div className={cx(styles.phaseLabelRow, styles.reveal)}>
              <span className={styles.phaseNum}>Phase 04</span>
              <div className={styles.phaseDividerLine} />
            </div>
            <h2 className={cx(styles.phaseTitle, styles.reveal)}>
              Deploy - Live in seconds.
              <br />
              No ops required.
            </h2>
            <p className={cx(styles.sectionSub, styles.reveal)}>
              One action moves from approved code to healthy production.
            </p>

            <div className={styles.deployInner}>
              <div className={cx(styles.deployBoard, styles.reveal)}>
                <div className={styles.deployBoardHead}>
                  <span className={styles.deployBoardTitle}>Deployment pipeline</span>
                  <span className={styles.deployBoardLive}>
                    <span className={styles.liveDot} />
                    Running
                  </span>
                </div>

                {DEPLOY_STEPS.map((step) => (
                  <div key={step.name} className={styles.deployStep}>
                    <span
                      className={cx(styles.deployStatus, getDeployStatusClass(step.status))}
                    >
                      {step.status === "done" ? "✓" : step.status === "running" ? "↻" : "○"}
                    </span>
                    <span className={styles.deployMeta}>
                      <strong className={styles.deployName}>{step.name}</strong>
                      <span className={styles.deployDetail}>{step.detail}</span>
                    </span>
                    <span
                      className={cx(
                        styles.deployTime,
                        step.status === "running" && styles.deployTimeActive,
                      )}
                    >
                      {step.time}
                    </span>
                  </div>
                ))}

                <div className={styles.deployUrl}>
                  <span className={styles.deployUrlLabel}>Live</span>
                  <span className={styles.deployUrlValue}>invoicetrack.prodvo.studio</span>
                </div>
              </div>

              <div className={styles.deployFeatures}>
                {DEPLOY_FEATURES.map((feature) => (
                  <article key={feature.title} className={cx(styles.deployFeature, styles.reveal)}>
                    <h3 className={styles.deployFeatureTitle}>{feature.title}</h3>
                    <p className={styles.deployFeatureDesc}>{feature.body}</p>
                    <span className={styles.deployFeatureChip}>{feature.chip}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.phaseSection} id="maintain">
          <div className={styles.container}>
            <div className={cx(styles.phaseLabelRow, styles.reveal)}>
              <span className={styles.phaseNum}>Phase 05</span>
              <div className={styles.phaseDividerLine} />
            </div>
            <h2 className={cx(styles.phaseTitle, styles.reveal)}>
              Maintain - Prodvo watches
              <br />
              so you do not have to.
            </h2>
            <p className={cx(styles.sectionSub, styles.reveal)}>
              Logs, reliability indicators, and performance stay visible in a
              single timeline.
            </p>

            <div className={styles.maintainInner}>
              <div className={cx(styles.logPanel, styles.reveal)}>
                <div className={styles.logHead}>
                  <span className={styles.logHeadTitle}>Live log stream · production</span>
                  <span className={styles.logHeadStatus}>
                    <span className={styles.liveDot} />
                    streaming
                  </span>
                </div>

                <div className={styles.logRows}>
                  {LOG_ROWS.map((row) => (
                    <div key={`${row.time}-${row.message}`} className={styles.logRow}>
                      <span className={styles.logTime}>{row.time}</span>
                      <span className={cx(styles.logLevel, getLogLevelClass(row.level))}>
                        {row.level.toUpperCase()}
                      </span>
                      <span className={styles.logMessage}>{row.message}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.metricsColumn}>
                <article className={cx(styles.metricCard, styles.reveal)}>
                  <div className={styles.metricLabel}>Avg. response time</div>
                  <div className={styles.metricValue}>
                    62<span className={styles.metricAccent}>ms</span>
                  </div>
                  <div className={styles.metricSub}>Last 24 hours · p50</div>
                  <div className={styles.metricSpark}>
                    <span className={styles.sparkBar} style={{ height: "40%" }} />
                    <span className={styles.sparkBar} style={{ height: "55%" }} />
                    <span className={styles.sparkBar} style={{ height: "50%" }} />
                    <span className={styles.sparkBar} style={{ height: "70%" }} />
                    <span className={styles.sparkBar} style={{ height: "45%" }} />
                    <span className={cx(styles.sparkBar, styles.sparkBarHigh)} style={{ height: "60%" }} />
                    <span className={styles.sparkBar} style={{ height: "52%" }} />
                  </div>
                </article>

                <article className={cx(styles.metricCard, styles.reveal)}>
                  <div className={styles.metricLabel}>Uptime</div>
                  <div className={styles.metricValue}>
                    99.<span className={styles.metricAccent}>98%</span>
                  </div>
                  <div className={styles.metricSub}>Last 30 days</div>
                </article>

                <article className={cx(styles.metricCard, styles.reveal)}>
                  <div className={styles.metricLabel}>Error rate</div>
                  <div className={styles.metricValue}>
                    0.<span className={styles.metricAccent}>04%</span>
                  </div>
                  <div className={styles.metricSub}>Auto-retried events resolved in flow</div>
                </article>

                <article className={cx(styles.metricCard, styles.reveal)}>
                  <div className={styles.metricLabel}>Active sessions</div>
                  <div className={styles.metricValue}>
                    218<span className={styles.metricAccent}>/hr</span>
                  </div>
                  <div className={styles.metricSub}>Peak: 340 at 11:00 UTC</div>
                  <div className={styles.metricSpark}>
                    <span className={styles.sparkBar} style={{ height: "30%" }} />
                    <span className={styles.sparkBar} style={{ height: "50%" }} />
                    <span className={cx(styles.sparkBar, styles.sparkBarHigh)} style={{ height: "100%" }} />
                    <span className={styles.sparkBar} style={{ height: "80%" }} />
                    <span className={styles.sparkBar} style={{ height: "64%" }} />
                    <span className={styles.sparkBar} style={{ height: "55%" }} />
                    <span className={styles.sparkBar} style={{ height: "60%" }} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.speedSection}>
          <div className={styles.container}>
            <div className={styles.speedHeader}>
              <div>
                <div className={cx(styles.speedEyebrow, styles.reveal)}>By the numbers</div>
                <h2 className={cx(styles.speedTitle, styles.reveal)}>
                  How fast is
                  <br />
                  each phase?
                </h2>
              </div>
              <p className={cx(styles.speedSub, styles.reveal)}>
                Average times across Prodvo teams. Complexity changes the depth,
                but the loop keeps the same predictable shape.
              </p>
            </div>

            <div className={cx(styles.speedGrid, styles.reveal)}>
              {SPEED_CELLS.map((cell) => (
                <article key={cell.phase} className={styles.speedCell}>
                  <div className={styles.speedPhase}>{cell.phase}</div>
                  <div className={styles.speedTime}>{cell.time}</div>
                  <div className={styles.speedUnit}>{cell.unit}</div>
                  <p className={styles.speedDesc}>{cell.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Prompt one. Ship everything.</h2>
              <p>
                Start with one request, iterate in context, and ship with full
                visibility across every phase.
              </p>
              <Link className="btn" href="/pricing">
                Start building free
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
