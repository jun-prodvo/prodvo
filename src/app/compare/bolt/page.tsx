"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./bolt.module.css";

const AGENT_INTELLIGENCE = [
  {
    capability: "Architectural decisions",
    prodvo: "Agents make real architectural choices based on project context",
    bolt: "Prompt-to-code generation - architecture emerges from prompts",
    prodvoAdvantage: true,
  },
  {
    capability: "Planning phase",
    prodvo: "Structured task plans with dependencies and effort estimates",
    bolt: "No planning - jump straight to generation",
    prodvoAdvantage: true,
  },
  {
    capability: "Parallel execution",
    prodvo: "Frontend, backend, QA, integrations run simultaneously",
    bolt: "Sequential generation with multiple AI models",
    prodvoAdvantage: true,
  },
  {
    capability: "Scoped automation",
    prodvo: "Limit runs to specific files/tasks for controlled changes",
    bolt: "Full project regeneration on each prompt",
    prodvoAdvantage: true,
  },
  {
    capability: "Rollback & recovery",
    prodvo: "One-click rollback to any checkpoint with full audit trail",
    bolt: "No built-in rollback - manual recovery only",
    prodvoAdvantage: true,
  },
  {
    capability: "Design system support",
    prodvo: "Standard component libraries",
    bolt: "Porsche, Material UI, Chakra, Shadcn, custom brand systems",
    prodvoAdvantage: false,
  },
];

const INFRASTRUCTURE = [
  { feature: "Built-in hosting", prodvo: "Yes", bolt: "Yes (Bolt Cloud)" },
  { feature: "Built-in database", prodvo: "Postgres included", bolt: "Unlimited databases" },
  { feature: "Built-in auth", prodvo: "Zero-config auth", bolt: "Yes" },
  { feature: "Custom domains", prodvo: "Growth tier+", bolt: "Pro tier+" },
  { feature: "SEO features", prodvo: "Standard", bolt: "SEO boosting (Pro)" },
  { feature: "Preview environments", prodvo: "Yes", bolt: "Yes" },
  { feature: "Rollback capability", prodvo: "One-click rollback", bolt: "No" },
  { feature: "Checkpoint snapshots", prodvo: "Automatic", bolt: "No" },
  { feature: "AI image editing", prodvo: "No", bolt: "Yes (Pro)" },
];

const PRICING_TIERS = [
  {
    tier: "Free",
    prodvo: {
      price: "-",
      allocation: "No free tier",
      notes: "14-day trial available",
    },
    bolt: {
      price: "$0",
      allocation: "1M tokens/month",
      notes: "300K daily limit, Bolt branding",
    },
  },
  {
    tier: "Pro / Growth",
    prodvo: {
      price: "$99/mo",
      allocation: "Parallel agents, autonomous mode",
      notes: "Checkpoints, rollback, custom domains",
    },
    bolt: {
      price: "$25/mo",
      allocation: "10M tokens/month",
      notes: "No daily limit, no branding, custom domains",
    },
  },
  {
    tier: "Teams / Scale",
    prodvo: {
      price: "$249/mo",
      allocation: "Dedicated capacity",
      notes: "Advanced access, governance, priority support",
    },
    bolt: {
      price: "$30/mo per member",
      allocation: "Token rollover",
      notes: "Admin controls, private NPM, design system knowledge",
    },
  },
];

const TEAM_ECONOMICS = [
  { teamSize: "Solo", prodvoMonthly: "$99", boltMonthly: "$25", savings: "Bolt" },
  { teamSize: "3-person team", prodvoMonthly: "$249", boltMonthly: "$90", savings: "Bolt" },
  { teamSize: "5-person team", prodvoMonthly: "$249", boltMonthly: "$150", savings: "Prodvo" },
  { teamSize: "10-person team", prodvoMonthly: "$249", boltMonthly: "$300", savings: "Prodvo" },
  { teamSize: "20-person team", prodvoMonthly: "$249", boltMonthly: "$600", savings: "Prodvo" },
];

const BEYOND_PROMPTS = [
  {
    title: "Plan before you prompt",
    description: "Convert requirements into ordered task plans. Know what you're building before the first line of code.",
  },
  {
    title: "Parallel, not sequential",
    description: "Run frontend, backend, QA, and integrations simultaneously. 3.1× faster than sequential prompts.",
  },
  {
    title: "Checkpoints, not prayers",
    description: "Automatic snapshots before major changes. One-click rollback when things break.",
  },
  {
    title: "Team coordination built-in",
    description: "Single timeline for PM, eng, and QA. No status chasing across tools.",
  },
];

export default function CompareBoltPage() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>
            Prodvo vs Bolt
          </h1>
          <p className={styles.heroSub}>
            Bolt calls itself the "#1 professional vibe coding tool." Prodvo goes beyond 
            vibe coding - with planning workflows, parallel execution, and safety rails 
            that turn prompts into production-ready products.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Try Prodvo free
            </Link>
            <Link href="#intelligence" className="btn btn-secondary">
              Compare agent intelligence
            </Link>
          </div>
        </div>

        {/* Depth visual */}
        <div className={styles.depthVisual}>
          <div className={styles.depthStack}>
            <div className={styles.depthLayer} style={{ "--delay": "0" } as React.CSSProperties}>
              <span>Prompts</span>
            </div>
            <div className={styles.depthLayer} style={{ "--delay": "1" } as React.CSSProperties}>
              <span>Planning</span>
            </div>
            <div className={styles.depthLayer} style={{ "--delay": "2" } as React.CSSProperties}>
              <span>Execution</span>
            </div>
            <div className={styles.depthLayer} style={{ "--delay": "3" } as React.CSSProperties}>
              <span>Safety</span>
            </div>
          </div>
          <div className={styles.depthArrow}>
            <span>Prodvo goes deeper</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BEYOND VIBE CODING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Philosophy</span>
            <h2 className={styles.sectionTitle}>Beyond vibe coding</h2>
            <p className={styles.sectionSub}>
              Bolt optimizes prompt-to-app speed. Prodvo optimizes idea-to-production 
              quality with the structure teams need.
            </p>
          </div>

          <div className={styles.beyondGrid}>
            {BEYOND_PROMPTS.map((item) => (
              <div key={item.title} className={styles.beyondCard}>
                <h3 className={styles.beyondTitle}>{item.title}</h3>
                <p className={styles.beyondDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AGENT INTELLIGENCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="intelligence">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Intelligence</span>
            <h2 className={styles.sectionTitle}>Agent intelligence comparison</h2>
            <p className={styles.sectionSub}>
              Both platforms use AI. The difference is what the AI actually does - 
              prompt parsing vs. architectural reasoning.
            </p>
          </div>

          <div className={styles.intelligenceGrid}>
            {AGENT_INTELLIGENCE.map((item) => (
              <div 
                key={item.capability} 
                className={`${styles.intelligenceCard} ${item.prodvoAdvantage ? styles.prodvoWins : styles.boltWins}`}
              >
                <h3 className={styles.intelligenceCapability}>{item.capability}</h3>
                <div className={styles.intelligenceComparison}>
                  <div className={styles.intelligenceItem}>
                    <span className={styles.intelligenceBrand}>Prodvo</span>
                    <p>{item.prodvo}</p>
                  </div>
                  <div className={styles.intelligenceItem}>
                    <span className={styles.intelligenceBrand}>Bolt</span>
                    <p>{item.bolt}</p>
                  </div>
                </div>
                {item.prodvoAdvantage && (
                  <span className={styles.advantageBadge}>Prodvo advantage</span>
                )}
                {!item.prodvoAdvantage && (
                  <span className={styles.advantageBadgeBolt}>Bolt advantage</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INFRASTRUCTURE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Infrastructure</span>
            <h2 className={styles.sectionTitle}>Built-in infrastructure comparison</h2>
            <p className={styles.sectionSub}>
              Both platforms include hosting, database, and auth. The difference is 
              what happens when things go wrong.
            </p>
          </div>

          <div className={styles.matrixWrap}>
            <table className={styles.matrix}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Prodvo</th>
                  <th>Bolt</th>
                </tr>
              </thead>
              <tbody>
                {INFRASTRUCTURE.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.prodvo}</td>
                    <td>{row.bolt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRICING TRANSPARENCY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Pricing</span>
            <h2 className={styles.sectionTitle}>Pricing model comparison</h2>
            <p className={styles.sectionSub}>
              Bolt uses tokens. Prodvo uses flat tiers. Here's how they compare.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {PRICING_TIERS.map((tier) => (
              <div key={tier.tier} className={styles.pricingRow}>
                <div className={styles.pricingTier}>{tier.tier}</div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>Prodvo</span>
                  <span className={styles.pricingPrice}>{tier.prodvo.price}</span>
                  <span className={styles.pricingAllocation}>{tier.prodvo.allocation}</span>
                  <p className={styles.pricingNotes}>{tier.prodvo.notes}</p>
                </div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>Bolt</span>
                  <span className={styles.pricingPrice}>{tier.bolt.price}</span>
                  <span className={styles.pricingAllocation}>{tier.bolt.allocation}</span>
                  <p className={styles.pricingNotes}>{tier.bolt.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM ECONOMICS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Team economics</span>
            <h2 className={styles.sectionTitle}>How pricing scales with team size</h2>
            <p className={styles.sectionSub}>
              Bolt charges per-member. Prodvo's Scale tier covers your whole team. 
              Here's the math.
            </p>
          </div>

          <div className={styles.economicsWrap}>
            <table className={styles.economicsTable}>
              <thead>
                <tr>
                  <th>Team size</th>
                  <th>Prodvo</th>
                  <th>Bolt Teams</th>
                  <th>Better value</th>
                </tr>
              </thead>
              <tbody>
                {TEAM_ECONOMICS.map((row) => (
                  <tr key={row.teamSize}>
                    <td>{row.teamSize}</td>
                    <td>{row.prodvoMonthly}/mo</td>
                    <td>{row.boltMonthly}/mo</td>
                    <td>
                      <span className={row.savings === "Prodvo" ? styles.savingsProdvo : styles.savingsBolt}>
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.economicsNote}>
            At 5+ team members, Prodvo's flat pricing becomes more economical than 
            Bolt's per-member model - and you get planning workflows, checkpoints, 
            and rollback included.
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
            <p className={styles.bottomSub}>
              Bolt excels at rapid prototyping with generous free tokens. Prodvo excels at 
              turning those prototypes into production-ready products with team workflows.
            </p>
            <div className={styles.bottomGrid}>
              <div className={styles.bottomCard}>
                <div className={styles.bottomCardHeader}>
                  <span className={styles.bottomBrand}>Bolt</span>
                  <span className={styles.bottomTag}>Best for prototyping</span>
                </div>
                <ul className={styles.bottomList}>
                  <li>Design system support (Porsche, Material UI, Shadcn)</li>
                  <li>Generous free tier (1M tokens/month)</li>
                  <li>SEO boosting features</li>
                  <li>Token-based pay-as-you-go</li>
                </ul>
              </div>
              <div className={`${styles.bottomCard} ${styles.bottomCardHighlight}`}>
                <div className={styles.bottomCardHeader}>
                  <span className={styles.bottomBrand}>Prodvo</span>
                  <span className={styles.bottomTagHighlight}>Best for production</span>
                </div>
                <ul className={styles.bottomList}>
                  <li>Full workflow: plan → build → review → ship</li>
                  <li>Rollback safety + checkpoint snapshots</li>
                  <li>Parallel execution (3.1× faster)</li>
                  <li>Flat pricing at 5+ team members</li>
                  <li>Team coordination timeline</li>
                </ul>
              </div>
            </div>
            <p className={styles.bottomVerdict}>
              Start with Bolt for quick experiments. Switch to Prodvo when 
              you need to ship reliably with a team.
            </p>
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
              <h2>Ready to go beyond vibe coding?</h2>
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
