"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./pricing.module.css";

type BillingCycle = "monthly" | "annual";
type CapabilityTone = "normal" | "none" | "pro";

type CapabilityCell = {
  width: string;
  value: string;
  tone?: CapabilityTone;
};

type CapabilityRow = {
  name: string;
  detail: string;
  cells: readonly [CapabilityCell, CapabilityCell, CapabilityCell];
};

type CapabilityGroup = {
  title: string;
  rows: readonly CapabilityRow[];
};

const TOOL_COSTS: ReadonlyArray<{ tool: string; cost: string }> = [
  { tool: "Vercel Pro", cost: "$20/mo" },
  { tool: "Supabase Pro", cost: "$25/mo" },
  { tool: "Auth0 Essentials", cost: "$23/mo" },
  { tool: "Resend Pro", cost: "$20/mo" },
  { tool: "GitHub Actions", cost: "$16/mo" },
];

const STARTER_LIMITS: ReadonlyArray<{ name: string; value: string }> = [
  { name: "Projects", value: "3" },
  { name: "Database storage", value: "500 MB" },
  { name: "Compute", value: "Shared" },
  { name: "Deploy bandwidth", value: "5 GB/mo" },
  { name: "AI prompts", value: "100/mo" },
  { name: "Team members", value: "-" },
];

const PRO_USAGE: ReadonlyArray<{ name: string; value: string; width: string }> = [
  { name: "Projects", value: "Unlimited", width: "100%" },
  { name: "Database storage", value: "10 GB", width: "60%" },
  { name: "AI prompts", value: "Unlimited", width: "100%" },
  { name: "Deploy bandwidth", value: "100 GB/mo", width: "75%" },
];

const PRO_LIMITS: ReadonlyArray<{ name: string; value: string }> = [
  { name: "Compute", value: "Dedicated" },
  { name: "Custom domains", value: "Unlimited" },
  { name: "Support", value: "Email · 24h SLA" },
];

const TEAM_LIMITS: ReadonlyArray<{ name: string; value: string }> = [
  { name: "Everything in Pro", value: "Included" },
  { name: "Database storage", value: "50 GB" },
  { name: "SSO + RBAC", value: "Included" },
  { name: "Preview environments", value: "Per branch" },
  { name: "Support", value: "Dedicated channel" },
  { name: "Audit logs", value: "90 days" },
];

const CAPABILITY_GROUPS: readonly CapabilityGroup[] = [
  {
    title: "Core platform",
    rows: [
      {
        name: "AI code generation",
        detail: "Prompts per month",
        cells: [
          { width: "15%", value: "100" },
          { width: "100%", value: "Unlimited", tone: "pro" },
          { width: "100%", value: "Unlimited", tone: "pro" },
        ],
      },
      {
        name: "Projects",
        detail: "Simultaneous active",
        cells: [
          { width: "20%", value: "3" },
          { width: "100%", value: "Unlimited", tone: "pro" },
          { width: "100%", value: "Unlimited", tone: "pro" },
        ],
      },
      {
        name: "Compute",
        detail: "Instance type",
        cells: [
          { width: "30%", value: "Shared" },
          { width: "75%", value: "Dedicated", tone: "pro" },
          { width: "100%", value: "Dedicated+", tone: "pro" },
        ],
      },
    ],
  },
  {
    title: "Database",
    rows: [
      {
        name: "Postgres storage",
        detail: "Persistent database size",
        cells: [
          { width: "5%", value: "500 MB" },
          { width: "20%", value: "10 GB", tone: "pro" },
          { width: "100%", value: "50 GB", tone: "pro" },
        ],
      },
      {
        name: "Backups",
        detail: "Automated + point-in-time",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "60%", value: "Daily · 7d", tone: "pro" },
          { width: "100%", value: "Hourly · 30d", tone: "pro" },
        ],
      },
      {
        name: "Read replicas",
        detail: "Geographic distribution",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "0%", value: "-", tone: "none" },
          { width: "100%", value: "Up to 3", tone: "pro" },
        ],
      },
    ],
  },
  {
    title: "Deploy and infrastructure",
    rows: [
      {
        name: "Bandwidth",
        detail: "Monthly outbound",
        cells: [
          { width: "5%", value: "5 GB" },
          { width: "75%", value: "100 GB", tone: "pro" },
          { width: "100%", value: "500 GB", tone: "pro" },
        ],
      },
      {
        name: "Custom domains",
        detail: "SSL auto-renew included",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "100%", value: "Unlimited", tone: "pro" },
          { width: "100%", value: "Unlimited", tone: "pro" },
        ],
      },
      {
        name: "Preview environments",
        detail: "Branch-based live previews",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "60%", value: "3 active", tone: "pro" },
          { width: "100%", value: "Unlimited", tone: "pro" },
        ],
      },
    ],
  },
  {
    title: "Team and security",
    rows: [
      {
        name: "Team members",
        detail: "Collaborators per workspace",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "0%", value: "-", tone: "none" },
          { width: "100%", value: "Up to 5", tone: "pro" },
        ],
      },
      {
        name: "SSO + RBAC",
        detail: "Role-based access control",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "0%", value: "-", tone: "none" },
          { width: "100%", value: "Full RBAC", tone: "pro" },
        ],
      },
      {
        name: "Audit logs",
        detail: "Access and change history",
        cells: [
          { width: "0%", value: "-", tone: "none" },
          { width: "30%", value: "7 days", tone: "pro" },
          { width: "100%", value: "90 days", tone: "pro" },
        ],
      },
    ],
  },
];

const STACK_COSTS: ReadonlyArray<{ tool: string; cost: string }> = [
  { tool: "Vercel Pro", cost: "$20" },
  { tool: "Supabase Pro", cost: "$25" },
  { tool: "Clerk / Auth0", cost: "$23" },
  { tool: "Resend Pro", cost: "$20" },
  { tool: "GitHub Actions (CI)", cost: "$16" },
  { tool: "Sentry (monitoring)", cost: "$26" },
];

const ENTERPRISE_SPEC_ROWS: readonly [readonly string[], readonly string[]] = [
  ["Custom SLA", "99.99% uptime", "SOC 2 Type II"],
  ["Org-wide SSO", "Dedicated infrastructure", "Custom contracts"],
];

const FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question:
      "Can I replace Vercel, Supabase, and Auth0 with only Prodvo?",
    answer:
      "Yes. Prodvo includes auth, Postgres, deployment, and transactional email in one stack. Teams can remove multiple separate subscriptions and run from a single operational surface.",
  },
  {
    question: "What happens when free-plan limits are reached?",
    answer:
      "Live projects keep running. You only pause new project creation or extra prompts until the cycle resets, or you can upgrade instantly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Monthly plans can be canceled at any point. Annual plans remain active through the paid term with no hidden penalties.",
  },
  {
    question: "Can I export my project and host elsewhere?",
    answer:
      "Yes. Projects stay standard and portable. Export codebase, schema, and environment configuration whenever needed.",
  },
  {
    question: "Does the AI agent train on my project data?",
    answer:
      "No. Workspace data remains isolated and encrypted. Project content is not used for model training.",
  },
  {
    question: "How does annual discounting work?",
    answer:
      "Annual billing applies a 20% discount to paid plans. Pro drops to $23/month equivalent and Team to $79/month equivalent.",
  },
];

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function getFillClass(tone: CapabilityTone | undefined): string {
  if (tone === "none") return styles.capBarFillMuted;
  return styles.capBarFill;
}

function getValueClass(tone: CapabilityTone | undefined): string {
  if (tone === "none") return styles.capValNone;
  if (tone === "pro") return styles.capValPro;
  return styles.capVal;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

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
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isAnnual = billingCycle === "annual";
  const proPrice = isAnnual ? 23 : 29;
  const teamPrice = isAnnual ? 79 : 99;
  const proPeriodText = isAnnual
    ? "per month · billed annually ($276/yr)"
    : "per month · billed monthly";
  const teamPeriodText = isAnnual
    ? "per month · billed annually ($948/yr)"
    : "per month · billed monthly";
  const teamPerSeatText = isAnnual
    ? "= $15.80 / seat / month"
    : "= $19.80 / seat / month";

  return (
    <SiteShell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroLeft}>
                <div className={styles.heroEyebrow}>Pricing</div>
                <h1 className={styles.heroTitle}>
                  Less than what you are
                  <br />
                  already <span className={styles.accent}>paying for.</span>
                </h1>
                <p className={styles.heroSub}>
                  Add up monthly spend across deployment, database, auth,
                  transactional email, and CI. Prodvo replaces that stack with one
                  subscription.
                </p>
                <div className={styles.heroCtas}>
                  <a href="#plans" className={styles.btnPrimaryLg}>
                    See the plans
                  </a>
                  <a href="#math" className={styles.btnOutlineLg}>
                    Run the math
                  </a>
                </div>
              </div>

              <div className={cx(styles.costContrast, styles.reveal)}>
                <div className={styles.ccHead}>What most builders pay monthly</div>
                {TOOL_COSTS.map((row) => (
                  <div key={row.tool} className={styles.ccRow}>
                    <span className={styles.ccTool}>{row.tool}</span>
                    <span className={cx(styles.ccCost, styles.ccCostCrossed)}>
                      {row.cost}
                    </span>
                  </div>
                ))}
                <div className={styles.ccTotalRow}>
                  <span className={styles.ccTotalLabel}>Total (5 tools)</span>
                  <span className={styles.ccTotalNum}>$104/mo</span>
                </div>
                <div className={styles.ccProdvoRow}>
                  <span className={styles.ccProdvoLabel}>
                    Prodvo Pro - all of the above
                  </span>
                  <span className={styles.ccProdvoNum}>$29/mo</span>
                </div>
                <div className={styles.ccSaving}>You save $75/mo · $900/yr</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.plansSection} id="plans">
          <div className={styles.container}>
            <div className={styles.billingToggleWrap} role="group" aria-label="Billing period">
              <button
                type="button"
                className={cx(styles.btLabel, !isAnnual && styles.btLabelActive)}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>

              <button
                type="button"
                className={cx(styles.toggleTrack, isAnnual && styles.toggleTrackAnnual)}
                role="switch"
                aria-checked={isAnnual}
                aria-label="Toggle annual billing"
                onClick={() =>
                  setBillingCycle((prev) =>
                    prev === "monthly" ? "annual" : "monthly",
                  )
                }
              >
                <span className={styles.toggleThumb} />
              </button>

              <button
                type="button"
                className={cx(styles.btLabel, isAnnual && styles.btLabelActive)}
                onClick={() => setBillingCycle("annual")}
              >
                Annual
              </button>

              <span className={cx(styles.saveBadge, isAnnual && styles.saveBadgeVisible)}>
                Save 20%
              </span>
            </div>

            <div className={styles.plansGrid}>
              <article className={cx(styles.planStarter, styles.reveal)}>
                <div className={styles.planTier}>Starter</div>
                <div className={styles.planPriceBlock}>
                  <div className={styles.planPrice}>
                    <sup>$</sup>
                    <span className={styles.planPriceValue}>0</span>
                  </div>
                  <div className={styles.planPricePeriod}>
                    Free forever · no credit card needed
                  </div>
                </div>
                <div className={styles.planTagline}>
                  &quot;I want to test it quickly and build something small.&quot;
                </div>
                <div className={styles.planLimits}>
                  {STARTER_LIMITS.map((item) => (
                    <div key={item.name} className={styles.planLimit}>
                      <span className={styles.plName}>{item.name}</span>
                      <span className={styles.plVal}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/sign-up" className={cx(styles.btnPlan, styles.btnPlanOutline)}>
                  Get started free
                </Link>
              </article>

              <article className={cx(styles.planPro, styles.reveal)}>
                <div className={styles.proBadge}>Most Popular</div>
                <div className={styles.planTier}>Pro</div>
                <div className={styles.planPriceBlock}>
                  <div className={styles.planPrice}>
                    <sup>$</sup>
                    <span className={styles.planPriceValue}>{proPrice}</span>
                  </div>
                  <div className={styles.planProPeriod}>{proPeriodText}</div>
                </div>
                <div className={styles.planTagline}>
                  &quot;I am building real product and need reliability at speed.&quot;
                </div>

                <div className={styles.usageBars}>
                  {PRO_USAGE.map((item) => (
                    <div key={item.name} className={styles.usageRow}>
                      <div className={styles.usageHead}>
                        <span className={styles.usageName}>{item.name}</span>
                        <span className={styles.usageValue}>{item.value}</span>
                      </div>
                      <div className={styles.usageTrack}>
                        <div className={styles.usageFill} style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.planLimits}>
                  {PRO_LIMITS.map((item) => (
                    <div key={item.name} className={styles.planLimit}>
                      <span className={styles.plName}>{item.name}</span>
                      <span className={styles.plVal}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <Link href="/sign-in" className={cx(styles.btnPlan, styles.btnPlanFill)}>
                  Start Pro
                </Link>
              </article>

              <article className={cx(styles.planTeam, styles.reveal)}>
                <div className={styles.planTier}>Team</div>
                <div className={styles.teamSeats}>
                  <div className={styles.seatsTrack}>
                    <span className={cx(styles.seatDot, styles.seatDotFilled)} />
                    <span className={cx(styles.seatDot, styles.seatDotFilled)} />
                    <span className={cx(styles.seatDot, styles.seatDotFilled)} />
                    <span className={cx(styles.seatDot, styles.seatDotFilled)} />
                    <span className={cx(styles.seatDot, styles.seatDotFilled)} />
                  </div>
                  <span className={styles.teamSeatsLabel}>Up to 5 members</span>
                </div>

                <div className={styles.planPriceBlock}>
                  <div className={styles.planPrice}>
                    <sup>$</sup>
                    <span className={styles.planPriceValue}>{teamPrice}</span>
                  </div>
                  <div className={styles.planPricePeriod}>{teamPeriodText}</div>
                  <div className={styles.teamPerSeat}>{teamPerSeatText}</div>
                </div>

                <div className={styles.planTagline}>
                  &quot;We ship together and need collaboration at scale.&quot;
                </div>

                <div className={styles.planLimits}>
                  {TEAM_LIMITS.map((item) => (
                    <div key={item.name} className={styles.planLimit}>
                      <span className={styles.plName}>{item.name}</span>
                      <span className={styles.plVal}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <Link href="/sign-in" className={cx(styles.btnPlan, styles.btnPlanOutline)}>
                  Start team trial
                </Link>
              </article>
            </div>

            <p className={styles.plansHint}>
              Need more? <a href="#enterprise">Talk to us about Enterprise</a>
            </p>
          </div>
        </section>

        <section className={styles.capabilitySection}>
          <div className={styles.container}>
            <div className={styles.capHeader}>
              <div>
                <div className={cx(styles.capHeaderEyebrow, styles.reveal)}>What is included</div>
                <h2 className={cx(styles.sectionTitle, styles.reveal)}>
                  Every plan,
                  <br />
                  mapped in full.
                </h2>
              </div>
              <p className={cx(styles.sectionSub, styles.reveal)}>
                A direct capability breakdown so teams can choose from real
                operating limits, not vague feature checklists.
              </p>
            </div>

            <div className={cx(styles.capPlanHeads, styles.reveal)}>
              <div className={styles.cphSpacer} />
              <div className={cx(styles.cphLabel, styles.cphStarter)}>Starter</div>
              <div className={cx(styles.cphLabel, styles.cphPro)}>Pro</div>
              <div className={cx(styles.cphLabel, styles.cphTeam)}>Team</div>
            </div>

            {CAPABILITY_GROUPS.map((group) => (
              <div key={group.title} className={cx(styles.capGroup, styles.reveal)}>
                <div className={styles.capGroupTitle}>{group.title}</div>
                <div className={styles.capRows}>
                  {group.rows.map((row) => (
                    <div key={row.name} className={styles.capRow}>
                      <div className={styles.capName}>
                        {row.name}
                        <span className={styles.capDetail}>{row.detail}</span>
                      </div>
                      {row.cells.map((cell, cellIndex) => (
                        <div key={`${row.name}-${cellIndex}`} className={styles.capCell}>
                          <div className={styles.capBarTrack}>
                            <div
                              className={getFillClass(cell.tone)}
                              style={{ width: cell.width }}
                            />
                          </div>
                          <span className={getValueClass(cell.tone)}>{cell.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.roiSection} id="math">
          <div className={styles.container}>
            <div className={styles.roiInner}>
              <div className={styles.roiLeft}>
                <h2 className={cx(styles.roiHeadline, styles.reveal)}>
                  The math is
                  <br />
                  <span className={styles.accent}>not close.</span>
                </h2>
                <p className={cx(styles.roiSub, styles.reveal)}>
                  Most builders pay for separate tools that Prodvo unifies. When you
                  compare complete monthly spend, the difference is immediate.
                </p>
              </div>

              <div className={cx(styles.roiRight, styles.reveal)}>
                <div className={styles.roiStackHead}>
                  <span>Tool</span>
                  <span>Monthly cost</span>
                </div>
                <div className={styles.roiStackRows}>
                  {STACK_COSTS.map((row) => (
                    <div key={row.tool} className={styles.roiStackRow}>
                      <span className={styles.rsrTool}>{row.tool}</span>
                      <span className={styles.rsrCost}>{row.cost}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.roiRunning}>
                  <span className={styles.roiRunningLabel}>5-tool total</span>
                  <div>
                    <div className={styles.roiRunningOld}>$130/mo</div>
                    <div className={styles.roiRunningNew}>Prodvo Pro: $29/mo</div>
                  </div>
                </div>

                <div className={styles.roiSavingBlock}>
                  <div>
                    <div className={styles.rsbText}>Annual savings switching to Prodvo</div>
                    <div className={styles.rsbSub}>vs. standard indie SaaS stack</div>
                  </div>
                  <div>
                    <div className={styles.rsbNum}>$1,212</div>
                    <div className={styles.rsbSub}>per year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.enterpriseSection} id="enterprise">
          <div className={styles.container}>
            <div className={cx(styles.enterpriseInner, styles.reveal)}>
              <div className={styles.enterpriseLeft}>
                <div className={styles.esMono}>Enterprise</div>
                <h2 className={styles.esTitle}>
                  Built for teams that cannot afford downtime.
                </h2>
                <p className={styles.esSub}>
                  Custom compute, dedicated infrastructure, SLA-backed reliability,
                  and onboarding support for organizations operating at scale.
                </p>
              </div>

              <div className={styles.enterpriseRight}>
                {ENTERPRISE_SPEC_ROWS.map((row, index) => (
                  <div key={`spec-row-${index}`} className={styles.specRow}>
                    {row.map((pill) => (
                      <span key={pill} className={styles.specPill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                ))}
                <Link href="/sign-in" className={styles.enterpriseCta}>
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={cx(styles.faqHeader, styles.reveal)}>
              <div className={styles.capHeaderEyebrow}>Common questions</div>
              <h2 className={styles.sectionTitle}>
                Everything you
                <br />
                need to know.
              </h2>
            </div>

            <div className={styles.faqGrid}>
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className={cx(styles.faqItem, styles.reveal)}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
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
              <h2>Build more. Pay less.</h2>
              <p>
                Start free with no credit card. Upgrade only when team velocity
                and workload justify it.
              </p>
              <Link className="btn" href="/sign-up">
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
