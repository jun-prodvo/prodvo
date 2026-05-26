"use client";

import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { useEffect, useMemo, useState } from "react";

// Small to medium companies with their domains for logo.dev API
const COMPANY_LOGOS = [
  { name: "Linear", domain: "linear.app" },
  { name: "Raycast", domain: "raycast.com" },
  { name: "Supabase", domain: "supabase.com" },
  { name: "Resend", domain: "resend.com" },
  { name: "Clerk", domain: "clerk.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Railway", domain: "railway.app" },
  { name: "Render", domain: "render.com" },
  { name: "Planetscale", domain: "planetscale.com" },
  { name: "Neon", domain: "neon.tech" },
  { name: "Deno", domain: "deno.com" },
  { name: "Prisma", domain: "prisma.io" },
];

// Logo.dev API token (publishable key is safe for client-side)
const LOGO_DEV_TOKEN = "pk_EKCWZiLBSsesSje0RloK4A";

const PLATFORM_LOOP = [
  {
    step: "01",
    title: "Plan with shared context",
    detail: "Capture goals, acceptance criteria, and constraints before execution starts.",
  },
  {
    step: "02",
    title: "Build in parallel lanes",
    detail: "Frontend, backend, QA, and release work move together instead of serial handoffs.",
  },
  {
    step: "03",
    title: "Review with checkpoints",
    detail: "Gate risky changes behind approval points with clear diffs and status.",
  },
  {
    step: "04",
    title: "Ship and iterate safely",
    detail: "Deploy with rollback-ready snapshots and reuse what worked in the next cycle.",
  },
] as const;

const PLATFORM_CAPABILITIES = [
  {
    title: "Planning workspace",
    badge: "Plan mode",
    copy: "Turn plain-language requirements into structured implementation plans your team can review.",
  },
  {
    title: "Execution visibility",
    badge: "Live tracking",
    copy: "Track active runs, blockers, and completion confidence without separate status docs.",
  },
  {
    title: "Scoped automation",
    badge: "Control",
    copy: "Limit runs to specific files and tasks so automation stays aligned with engineering intent.",
  },
  {
    title: "Quality gates",
    badge: "Safety",
    copy: "Use checkpoints and rollback states to keep delivery speed high without risky merges.",
  },
] as const;

const COMPETITOR_ROWS = [
  { name: "Planning", score: 97, tone: "you" },
  { name: "Execution", score: 93, tone: "peer" },
  { name: "QA", score: 89, tone: "peer" },
  { name: "Release", score: 85, tone: "light" },
  { name: "Observability", score: 81, tone: "light" },
] as const;

const USE_CASES = [
  {
    title: "Internal tools in days",
    copy: "Generate CRUD dashboards, approval workflows, and role-based access quickly with agent checkpoints.",
    metric: "2-5 days to first release",
    fit: "Ops and platform teams",
    output: "Permissioned internal workflow in production",
  },
  {
    title: "Product feature delivery",
    copy: "Break large initiatives into scoped tasks and run frontend, API, and QA work in parallel agents.",
    metric: "3.1x parallel throughput",
    fit: "Product and engineering squads",
    output: "Customer-facing release with QA coverage",
  },
  {
    title: "Client implementation pods",
    copy: "Agencies can spin up isolated workspaces per client while sharing templates and reusable workflows.",
    metric: "Template reuse across teams",
    fit: "Agencies and services teams",
    output: "Repeatable client delivery playbook",
  },
  {
    title: "MVPs and experiments",
    copy: "Go from idea to deployed prototype with built-in previews and one-click rollback if direction changes.",
    metric: "From prompt to demo in hours",
    fit: "Founders and innovation teams",
    output: "Validated prototype with rollback safety",
  },
] as const;

const WORKFLOW_STEPS = [
  {
    title: "Scope in plan mode",
    description:
      "Prompt Prodvo with goals, constraints, and acceptance criteria. Review the implementation plan before build starts.",
    deliverable: "Deliverable: ordered task plan + effort estimate",
  },
  {
    title: "Execute with parallel agents",
    description:
      "Run specialized streams for UI, backend, tests, and integrations. Each task remains visible with progress and checkpoints.",
    deliverable: "Deliverable: merged implementation + checkpoint timeline",
  },
  {
    title: "Ship safely",
    description:
      "Preview changes, run quality checks, and deploy from the same workspace. Roll back instantly if needed.",
    deliverable: "Deliverable: production deployment + rollback confidence",
  },
];

type PricingPlan = {
  name: string;
  subtitle: string;
  audience: string;
  price: string;
  billing: string;
  cta: string;
  tone: "primary" | "secondary";
  features: readonly string[];
  popular?: boolean;
};

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    name: "Starter",
    subtitle: "For solo builders and early teams.",
    audience: "Best for: pilots and first production workflows",
    price: "$29",
    billing: "/month",
    cta: "Start free",
    tone: "secondary",
    features: [
      "1 active workspace",
      "Lite agent runs",
      "Built-in preview",
      "Git sync and history",
    ],
  },
  {
    name: "Growth",
    subtitle: "For teams shipping customer-facing products.",
    audience: "Best for: startup product + engineering teams",
    price: "$99",
    billing: "/month",
    cta: "Start trial",
    tone: "primary",
    popular: true,
    features: [
      "Parallel agents",
      "Autonomous build mode",
      "Checkpoints and rollback",
      "Custom domains and deploys",
    ],
  },
  {
    name: "Scale",
    subtitle: "For orgs running multiple teams and services.",
    audience: "Best for: multi-team organizations",
    price: "$249",
    billing: "/month",
    cta: "Talk to sales",
    tone: "secondary",
    features: [
      "Advanced access controls",
      "Dedicated capacity lane",
      "Priority support",
      "Usage governance controls",
    ],
  },
];

const TEAM_TESTIMONIALS = [
  {
    name: "Marina Solis",
    role: "VP Product",
    company: "Helio Labs",
    quote:
      "We used to spend hours syncing between PM, engineering, and QA before each release. With Prodvo, everyone sees one execution timeline and we ship with fewer surprises.",
    proof:
      "After onboarding two squads, release planning moved from fragmented docs into one decision flow with clear ownership.",
    metric: "-52% handoff delay",
  },
  {
    name: "Derek Kim",
    role: "Engineering Director",
    company: "Nordpath",
    quote:
      "The biggest shift was confidence. Engineers are no longer guessing what changed in upstream scope because the run history is always visible.",
    proof:
      "Prodvo replaced status chasing with checkpointed execution, so cross-functional teams spend more time shipping than coordinating.",
    metric: "-37% coordination overhead",
  },
  {
    name: "Alicia Romero",
    role: "Head of Delivery",
    company: "Brightforge",
    quote:
      "We run client launches in parallel workspaces now. Every implementation follows the same quality gates without slowing down custom work.",
    proof:
      "Template reuse plus scoped automation let us standardize delivery while keeping each client stream isolated and auditable.",
    metric: "3.1x parallel throughput",
  },
  {
    name: "Theo Jensen",
    role: "CTO",
    company: "Launchgrid",
    quote:
      "Rollbacks used to be chaotic. Now we deploy with explicit checkpoints, so recovery is controlled and fast when priorities shift.",
    proof:
      "Release reviews are shorter because every risk gate is visible in one timeline from planning through deployment.",
    metric: "96% delivery confidence",
  },
] as const;

type FaqItem = {
  topic: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    topic: "Adoption",
    question: "How long does adoption usually take for an existing team?",
    answer:
      "Most teams complete a working pilot in one sprint. Start with one real project, baseline outcomes, then scale to additional squads once quality gates are in place.",
  },
  {
    topic: "Control",
    question: "Can we control what the agent is allowed to change?",
    answer:
      "Yes. Runs can be scoped by files, tasks, and checkpoints. Sensitive areas can require explicit review before merge.",
  },
  {
    topic: "Stack fit",
    question: "How does Prodvo fit with GitHub and CI/CD pipelines?",
    answer:
      "Prodvo works with branch-based Git workflows, pull requests, and existing CI gates. You adopt it as an execution layer, not a replacement for your stack.",
  },
  {
    topic: "Reliability",
    question: "What happens if an agent run introduces regressions?",
    answer:
      "Checkpoint each critical stage. If a run fails quality thresholds, revert to a known-good snapshot, adjust scope, and rerun with full history retained.",
  },
  {
    topic: "Governance",
    question: "Do we get usage visibility by team and project?",
    answer:
      "Yes. Workspace and run-level reporting shows throughput, quality signals, and execution health by team and project.",
  },
  {
    topic: "Security",
    question: "Can Prodvo support security and compliance reviews?",
    answer:
      "Yes. Teams can enforce review checkpoints, retain audit trails, and export execution artifacts for internal security and compliance workflows.",
  },
];

const BUILD_TAG = "prodvo-live-18";

export function ProdvoLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0]));
  const marqueeItems = useMemo(() => [...COMPANY_LOGOS, ...COMPANY_LOGOS], []);
  const activeTestimonialItem =
    TEAM_TESTIMONIALS[activeTestimonial] ?? TEAM_TESTIMONIALS[0];
  
  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    let observer: IntersectionObserver | null = null;

    const revealAll = () => {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    };

    const setupObserver = () => {
      if (!("IntersectionObserver" in window)) {
        revealAll();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );

      revealEls.forEach((el) => observer?.observe(el));
    };

    const updateMotionPreference = () => {
      document.body.dataset.reduceMotion = mediaQuery.matches ? "true" : "false";
      if (mediaQuery.matches) {
        observer?.disconnect();
        observer = null;
        revealAll();
        return;
      }
      observer?.disconnect();
      observer = null;
      setupObserver();
    };

    updateMotionPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      observer?.disconnect();
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  return (
    <SiteShell>
        <section className="hero">
          <div className="container">
            <p className="hero-badge animate-fade-up">
              All-in-one coding agent workspace
            </p>

            <h1 className="animate-fade-up-1">
              Build software with prompts.
              <br />
              <span>Ship with confidence in one workspace.</span>
            </h1>

            <p className="animate-fade-up-2">
              Prodvo combines planning, coding, preview, deployment, and team
              coordination in one environment. Turn ideas into production-ready
              outcomes without context switching between fragmented tools.
            </p>

            <div className="hero-actions animate-fade-up-3">
              <a className="btn btn-primary" href="#pricing">
                Start building
              </a>
              <a className="btn btn-secondary" href="#workflow">
                See workflow
              </a>
            </div>

            <div className="hero-proof animate-fade-up-3">
              <span className="hero-proof-item">{BUILD_TAG}</span>
              <span className="hero-proof-item">No local setup required</span>
              <span className="hero-proof-item">Parallel task execution</span>
              <span className="hero-proof-item">Checkpoint-based rollback</span>
            </div>
          </div>
        </section>

        <section className="social-proof" aria-label="Social proof">
          <p className="proof-label">
            Trusted by <strong>3,200+</strong>
            <br />
            builders and product teams
          </p>
          <div className="marquee-window">
            <div 
              className="marquee-track"
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {marqueeItems.map((company, index) => (
                <span className="proof-item" key={`${company.domain}-${index}`} data-name={company.name}>
                  <Image
                    src={`https://img.logo.dev/${company.domain}?token=${LOGO_DEV_TOKEN}&format=png&greyscale=true&size=80`}
                    alt={`${company.name} logo`}
                    width={80}
                    height={80}
                    className="proof-logo"
                    unoptimized
                  />
                  <span className="proof-name">{company.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head-row">
              <div>
                <div className="section-label">
                  <code>[ 01 / 06 ]</code>
                  <span>Platform</span>
                </div>
                <h2 className="section-title">
                  What Prodvo gives your team, out of the box
                </h2>
                <p className="section-subtitle">
                  A complete delivery loop designed for production teams. Every
                  run starts with shared scope, moves through parallel execution,
                  and ships with quality gates and rollback confidence.
                </p>
              </div>
              <a className="section-link" href="#workflow">
                See delivery flow
              </a>
            </div>

            <div className="platform-loop reveal">
              {PLATFORM_LOOP.map((item, index) => (
                <article
                  className={`loop-item reveal${
                    index === 1 ? " delay-1" : index >= 2 ? " delay-2" : ""
                  }`}
                  key={item.title}
                >
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="capability-grid reveal">
              {PLATFORM_CAPABILITIES.map((item, index) => (
                <article
                  className={`capability-card reveal${
                    index === 1 ? " delay-1" : index >= 2 ? " delay-2" : ""
                  }`}
                  key={item.title}
                >
                  <div className="capability-top">
                    <h3>{item.title}</h3>
                    <span className="mini-chip">{item.badge}</span>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <article className="platform-insight reveal">
              <div className="platform-insight-head">
                <h3>Execution confidence across the full delivery lifecycle</h3>
                <p>
                  Prodvo keeps each stage measurable, so teams can move faster
                  without losing review quality or release control.
                </p>
              </div>
              <div className="competitor-grid">
                {COMPETITOR_ROWS.map((row) => (
                  <div key={row.name} className={`compare-card compare-card-${row.tone}`}>
                    <div className="compare-name">{row.name}</div>
                    <div className="compare-bar">
                      <span style={{ width: `${row.score}%` }} />
                    </div>
                    <div className="compare-score">{row.score}% confidence</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="use-cases">
          <div className="container">
            <div className="section-head-row">
              <div>
                <div className="section-label">
                  <code>[ 02 / 06 ]</code>
                  <span>Use cases</span>
                </div>
                <h2 className="section-title">
                  Built for teams that need to ship, not just demo
                </h2>
                <p className="section-subtitle">
                  From internal tooling to customer-facing features, Prodvo keeps
                  your team moving with clear ownership and execution clarity.
                </p>
              </div>
            </div>

            <div className="usecase-reel reveal">
              {USE_CASES.map((item, index) => (
                <article className="usecase-scene" key={item.title}>
                  <div className="usecase-scene-head">
                    <span className="usecase-scene-num">{`0${index + 1}`}</span>
                    <span className="usecase-scene-badge">{item.metric}</span>
                  </div>
                  <h3 className="usecase-scene-title">{item.title}</h3>
                  <p className="usecase-scene-copy">{item.copy}</p>
                  <div className="usecase-scene-footer">
                    <div className="usecase-scene-tag">
                      <span>Fit</span>
                      <strong>{item.fit}</strong>
                    </div>
                    <div className="usecase-scene-tag">
                      <span>Output</span>
                      <strong>{item.output}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="container">
            <div className="section-label">
              <code>[ 03 / 06 ]</code>
              <span>Workflow</span>
            </div>
            <h2 className="section-title">How teams ship with Prodvo</h2>
            <p className="section-subtitle">
              Structured execution from scope to deploy, with every step visible
              and recoverable.
            </p>

            <div className="steps-grid reveal">
              {WORKFLOW_STEPS.map((step, index) => (
                <article
                  className={`step-card reveal${
                    index === 1 ? " delay-1" : index === 2 ? " delay-2" : ""
                  }`}
                  key={step.title}
                >
                  <span>{`0${index + 1}`}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p className="workflow-deliverable">{step.deliverable}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head-row">
              <div>
                <div className="section-label">
                  <code>[ 04 / 06 ]</code>
                  <span>Pricing</span>
                </div>
                <h2 className="section-title">Predictable plans for every team</h2>
                <p className="section-subtitle">
                  Start lean, scale into autonomous and multi-agent delivery
                  without rebuilding your workflow stack.
                </p>
              </div>
              <a className="section-link" href="#faq">
                Questions about plans?
              </a>
            </div>

            <div className="pricing-grid reveal">
              {PRICING_PLANS.map((plan, index) => (
                <article
                  className={`price-card reveal${
                    index === 1 ? " delay-1" : index === 2 ? " delay-2" : ""
                  }${plan.popular ? " popular" : ""}`}
                  key={plan.name}
                >
                  {plan.popular ? (
                    <span className="price-badge">Popular</span>
                  ) : null}
                  <h3>{plan.name}</h3>
                  <p>{plan.subtitle}</p>
                  <p className="price-audience">{plan.audience}</p>
                  <div className="price-value">
                    <strong>{plan.price}</strong>
                    <span>{plan.billing}</span>
                  </div>
                  <ul className="feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="card-action-wrap">
                    <a
                      className={`btn card-action ${
                        plan.tone === "primary" ? "btn-primary" : "btn-secondary"
                      }`}
                      href="#"
                    >
                      {plan.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="container">
            <div className="section-label">
              <code>[ 05 / 06 ]</code>
              <span>Results</span>
            </div>
            <h2 className="section-title">
              Teams ship faster with less coordination overhead
            </h2>
            <p className="section-subtitle">
              One clean execution flow replaces fragmented coordination. Teams
              align faster, move with clearer ownership, and release with
              fewer handoff surprises.
            </p>

            <div className="results-focus reveal">
              <article className="results-spotlight">
                <div className="results-spotlight-top">
                  <strong>{activeTestimonialItem.metric}</strong>
                  <span>{activeTestimonialItem.company}</span>
                </div>
                <p className="results-spotlight-quote">{activeTestimonialItem.quote}</p>
                <p className="results-spotlight-proof">{activeTestimonialItem.proof}</p>
                <footer className="results-spotlight-author">
                  <em>{activeTestimonialItem.name}</em>
                  <small>{activeTestimonialItem.role}</small>
                </footer>
              </article>

              <div className="results-selector" aria-label="Select testimonial">
                {TEAM_TESTIMONIALS.map((item, index) => (
                  <button
                    type="button"
                    key={item.name}
                    className={`results-selector-item${
                      activeTestimonial === index ? " active" : ""
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <span>{item.company}</span>
                    <strong>{item.metric}</strong>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-label">
              <code>[ 06 / 06 ]</code>
              <span>FAQ</span>
            </div>
            <h2 className="section-title">Answers for teams evaluating Prodvo</h2>
            <p className="section-subtitle">
              The practical details that matter before rollout: onboarding,
              quality controls, governance, and stack compatibility.
            </p>

            <div className="faq-accordion reveal">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = expandedFaqs.has(index);
                return (
                  <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                    <button
                      type="button"
                      className="faq-trigger"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${index}`}
                    >
                      <span className="faq-topic">{item.topic}</span>
                      <span className="faq-question">{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="faq-content"
                      id={`faq-content-${index}`}
                      role="region"
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner reveal">
              <div className="cta-copy">
                <h2>Ready to build with an all-in-one code agent?</h2>
                <p>
                  Start your first Prodvo workspace and go from prompt to
                  deployed product with planning, execution, and rollback in one
                  flow.
                </p>
                <a className="btn" href="#pricing">
                  Start free trial
                </a>
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
