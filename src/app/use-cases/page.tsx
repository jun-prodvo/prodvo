"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type Persona = {
  label: string;
  word: string;
  sub: string;
  cta: string;
};

type ShipRow = {
  label: string;
  sub: string;
  withWidth: string;
  withoutWidth: string;
  withValue: string;
  withoutValue: string;
};

type CapabilityValue = "check" | "dot";

type CapabilityRow = {
  capability: string;
  values: [
    CapabilityValue,
    CapabilityValue,
    CapabilityValue,
    CapabilityValue,
    CapabilityValue,
  ];
};

const PERSONAS: readonly Persona[] = [
  {
    label: "Solo Founders",
    word: "founders",
    sub: "You have one shot to validate fast. Prodvo gets you from idea to live product in a weekend - auth, database, and deploy included.",
    cta: "Build your MVP today",
  },
  {
    label: "Agencies",
    word: "agencies",
    sub: "Client deadlines don't care about your setup time. Prodvo means less config, faster handoffs, and more margin per project.",
    cta: "See how agencies use it",
  },
  {
    label: "Non-Technical Founders",
    word: "non-devs",
    sub: "You don't need to hire a developer. Describe what you want to build and Prodvo builds it - no technical background required.",
    cta: "Build without coding",
  },
  {
    label: "Internal Tools Teams",
    word: "teams",
    sub: "Internal tools shouldn't take 3 sprints. Prodvo lets your team ship ops tooling fast, without blocking your core product roadmap.",
    cta: "See internal tool use cases",
  },
  {
    label: "Hackathon Builders",
    word: "hackers",
    sub: "48 hours. One idea. Prodvo gets you to a working demo in hours, not days. Stop fighting infra. Start winning.",
    cta: "Hackathon mode",
  },
];

const SHIP_ROWS: readonly ShipRow[] = [
  {
    label: "Solo Founders",
    sub: "MVP to first user",
    withWidth: "12%",
    withoutWidth: "100%",
    withValue: "2 days",
    withoutValue: "3 wks",
  },
  {
    label: "Agencies",
    sub: "First feature to client",
    withWidth: "6%",
    withoutWidth: "85%",
    withValue: "2 hrs",
    withoutValue: "1 wk",
  },
  {
    label: "Non-Technical",
    sub: "Idea to working product",
    withWidth: "9%",
    withoutWidth: "100%",
    withValue: "1 day",
    withoutValue: "infinite",
  },
  {
    label: "Internal Tools",
    sub: "Request to live tool",
    withWidth: "8%",
    withoutWidth: "90%",
    withValue: "3 days",
    withoutValue: "9 wks",
  },
  {
    label: "Hackathon",
    sub: "Zero to working demo",
    withWidth: "30%",
    withoutWidth: "100%",
    withValue: "30 min",
    withoutValue: "12 hrs",
  },
];

const CAPABILITY_ROWS: readonly CapabilityRow[] = [
  {
    capability: "AI code generation",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    capability: "Zero-config auth",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    capability: "Postgres database",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    capability: "1-click deploy",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    capability: "Client preview environments",
    values: ["dot", "check", "dot", "check", "dot"],
  },
  {
    capability: "RBAC / role permissions",
    values: ["dot", "check", "dot", "check", "dot"],
  },
  {
    capability: "Natural language editing",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    capability: "Team collaboration",
    values: ["dot", "check", "dot", "check", "check"],
  },
  {
    capability: "Rapid iteration mode",
    values: ["check", "dot", "check", "dot", "check"],
  },
];

const CLOCK_START_SECONDS = 47 * 60 + 32;

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames
    .filter(Boolean)
    .map((className) => styles[className as string])
    .join(" ");
}

export default function UseCasesPage() {
  const [selectedPersona, setSelectedPersona] = useState(0);
  const [contentPersona, setContentPersona] = useState(0);
  const [wordCurrent, setWordCurrent] = useState(PERSONAS[0].word);
  const [wordPrevious, setWordPrevious] = useState<string | null>(null);
  const [wordEntering, setWordEntering] = useState(false);
  const [swapWidth, setSwapWidth] = useState<number>();
  const [subVisible, setSubVisible] = useState(true);
  const [clockSeconds, setClockSeconds] = useState(CLOCK_START_SECONDS);

  const subTimeoutRef = useRef<number | null>(null);
  const wordTimeoutRef = useRef<number | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

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
    const interval = window.setInterval(() => {
      setClockSeconds((prev) => {
        if (prev <= 0) return CLOCK_START_SECONDS;
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!measureRef.current) return;
    measureRef.current.textContent = wordCurrent;
    setSwapWidth(measureRef.current.offsetWidth);
  }, [wordCurrent]);

  useEffect(() => {
    return () => {
      if (subTimeoutRef.current) window.clearTimeout(subTimeoutRef.current);
      if (wordTimeoutRef.current) window.clearTimeout(wordTimeoutRef.current);
    };
  }, []);

  const clockText = useMemo(() => {
    const minutes = Math.floor(clockSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (clockSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [clockSeconds]);

  const activePersona = PERSONAS[contentPersona];

  const handlePersonaSwitch = (index: number) => {
    if (index === selectedPersona) return;

    const nextPersona = PERSONAS[index];

    setSelectedPersona(index);
    setWordPrevious(wordCurrent);
    setWordCurrent(nextPersona.word);
    setWordEntering(true);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setWordEntering(false);
      });
    });

    if (wordTimeoutRef.current) window.clearTimeout(wordTimeoutRef.current);
    wordTimeoutRef.current = window.setTimeout(() => {
      setWordPrevious(null);
    }, 400);

    setSubVisible(false);
    if (subTimeoutRef.current) window.clearTimeout(subTimeoutRef.current);
    subTimeoutRef.current = window.setTimeout(() => {
      setContentPersona(index);
      setSubVisible(true);
    }, 200);
  };

  return (
    <SiteShell>
      <div className={cx("page")}>
        <section className={cx("hero")}>
          <div className={cx("container")}>
            <div className={cx("hero-inner")}>
              <div className={cx("hero-eyebrow")}>Use Cases</div>

              <h1 className={cx("hero-statement")}>
                <span className={cx("static-line")}>Built for how</span>
                <span className={cx("static-line")}>
                  <span
                    className={cx("swap-wrap")}
                    aria-live="polite"
                    style={swapWidth ? { width: `${swapWidth}px` } : undefined}
                  >
                    {wordPrevious ? (
                      <span className={cx("swap-word", "exit")}>{wordPrevious}</span>
                    ) : null}
                    <span
                      className={cx(
                        "swap-word",
                        wordEntering ? "enter" : "active",
                      )}
                    >
                      {wordCurrent}
                    </span>
                  </span>{" "}
                  actually work.
                </span>
              </h1>

              <span
                ref={measureRef}
                className={cx("swap-measure")}
                aria-hidden="true"
              />

              <div
                className={cx("persona-tabs")}
                role="tablist"
                aria-label="Select your role"
              >
                {PERSONAS.map((persona, index) => (
                  <button
                    key={persona.label}
                    className={cx(
                      "persona-tab",
                      selectedPersona === index && "active",
                    )}
                    role="tab"
                    aria-selected={selectedPersona === index}
                    type="button"
                    onClick={() => handlePersonaSwitch(index)}
                  >
                    {persona.label}
                  </button>
                ))}
              </div>

              <div className={cx("hero-sub-wrap")}>
                <p
                  className={cx("hero-sub")}
                  style={{ opacity: subVisible ? 1 : 0 }}
                >
                  {activePersona.sub}
                </p>
              </div>

              <div className={cx("hero-ctas")}>
                <Link href="/pricing" className={cx("btn-primary-lg")}>
                  {activePersona.cta}
                </Link>
                <a href="#solo" className={cx("btn-outline-lg")}>
                  Explore use cases ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("seg-solo")} id="solo">
          <div className={cx("container")}>
            <div className={cx("seg-solo-inner")}>
              <div className={cx("seg-solo-left", "reveal")}>
                <div className={cx("seg-number-label")}>time-to-ship</div>
                <div className={cx("seg-big-stat")}>
                  48<sub>hrs</sub>
                </div>
                <div className={cx("seg-stat-caption")}>
                  From first prompt to a fully-deployed product that is ready for
                  real users
                </div>
              </div>

              <div className={cx("seg-solo-right")}>
                <div className={cx("seg-persona-badge", "reveal")}>
                  Solo Founders &amp; Indie Hackers
                </div>
                <h2 className={cx("section-title", "reveal", "d1")}>
                  Stop rebuilding the same boilerplate. Start validating the idea.
                </h2>
                <p className={cx("section-sub", "reveal", "d2", "solo-sub")}>
                  Every solo founder burns the same 2 weeks on setup: auth,
                  database, deployment pipelines. That is 2 weeks not talking to
                  users. Prodvo removes the setup entirely so you can spend every
                  hour on what actually matters - finding product-market fit.
                </p>

                <ul className={cx("proof-list", "reveal", "d3")}>
                  <li>
                    <span className={cx("proof-num")}>01</span>
                    <span className={cx("proof-text")}>
                      <strong>Ship before you lose momentum</strong>
                      Describe your product. Prodvo scaffolds the full codebase -
                      backend, frontend, database schema - in under 5 minutes.
                    </span>
                  </li>
                  <li>
                    <span className={cx("proof-num")}>02</span>
                    <span className={cx("proof-text")}>
                      <strong>Iterate without a co-founder</strong>
                      Change the pricing model. Add a new feature. Pivot the core
                      flow. Say it, and Prodvo builds it. No PR reviews needed.
                    </span>
                  </li>
                  <li>
                    <span className={cx("proof-num")}>03</span>
                    <span className={cx("proof-text")}>
                      <strong>One subscription replaces five</strong>
                      Vercel, Supabase, Auth0, Resend, GitHub CI - all replaced.
                      One monthly bill instead of five, and one less thing to
                      context-switch between.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("seg-agency")} id="agencies">
          <div className={cx("container")}>
            <div className={cx("seg-agency-header")}>
              <div>
                <div className={cx("eyebrow", "reveal")}>Agencies &amp; Freelancers</div>
                <h2 className={cx("section-title", "reveal", "d1")}>
                  More projects. Same team.
                  <br />
                  Better margins.
                </h2>
              </div>
              <div>
                <p className={cx("section-sub", "reveal", "d2")}>
                  Every hour your developers spend on boilerplate is an hour you
                  are not billing for. Prodvo compresses setup time to near-zero so
                  your team works on the parts clients actually pay for.
                </p>
              </div>
            </div>

            <div className={cx("ba-track", "reveal")}>
              <div className={cx("ba-col", "before")}>
                <div className={cx("ba-head")}>Before Prodvo</div>
                <div className={cx("ba-items")}>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>-</span>
                    <span className={cx("ba-item-text")}>
                      Day 1-3: environment setup, repo scaffolding, CI/CD pipeline
                      configuration
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>-</span>
                    <span className={cx("ba-item-text")}>
                      Day 4-6: integrate auth provider, configure database, wire API
                      layer
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>-</span>
                    <span className={cx("ba-item-text")}>
                      Day 7+: start building actual client-facing features
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>-</span>
                    <span className={cx("ba-item-text")}>
                      Scope creep hits - extend timeline - erode margin
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>-</span>
                    <span className={cx("ba-item-text")}>
                      Handoff requires documentation of 5+ separate service configs
                    </span>
                  </div>
                </div>
                <div className={cx("ba-time-badge")}>
                  <div className={cx("ba-time-num")}>7+</div>
                  <div className={cx("ba-time-label")}>
                    days before first real feature ships
                  </div>
                </div>
              </div>

              <div className={cx("ba-divider")}>
                <div className={cx("ba-divider-label")}>vs.</div>
              </div>

              <div className={cx("ba-col", "after")}>
                <div className={cx("ba-head")}>With Prodvo</div>
                <div className={cx("ba-items")}>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>✓</span>
                    <span className={cx("ba-item-text")}>
                      Day 1, hour 1: full project environment live - auth, DB,
                      deploy, CI all configured
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>✓</span>
                    <span className={cx("ba-item-text")}>
                      Day 1 afternoon: start building client features immediately
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>✓</span>
                    <span className={cx("ba-item-text")}>
                      Scope changes handled via conversation - no sprint replanning
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>✓</span>
                    <span className={cx("ba-item-text")}>
                      Client previews on every push - no extra deployment config
                    </span>
                  </div>
                  <div className={cx("ba-item")}>
                    <span className={cx("ba-item-marker")}>✓</span>
                    <span className={cx("ba-item-text")}>
                      Handoff is clean: one platform, one login, full export anytime
                    </span>
                  </div>
                </div>
                <div className={cx("ba-time-badge")}>
                  <div className={cx("ba-time-num")}>2h</div>
                  <div className={cx("ba-time-label")}>
                    to first client-facing feature shipped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("seg-nontechnical")} id="nontechnical">
          <div className={cx("container")}>
            <div className={cx("eyebrow", "reveal")}>Non-Technical Founders</div>

            <div className={cx("pull-quote-wrap", "reveal", "d1")}>
              <p className={cx("pull-quote")}>
                &quot;You do not need to learn to code.
                <br />
                You need to <em>build</em> - and those
                <br />
                are two very different things.&quot;
              </p>
            </div>

            <div className={cx("nontechnical-content")}>
              <div className={cx("nontechnical-grid")}>
                <div>
                  <p className={cx("section-sub", "reveal", "nontechnical-sub")}>
                    Most AI tools for non-technical founders still require you to
                    understand deployment, environment variables, and database
                    migrations. Prodvo abstracts all of it. You describe your
                    product in plain language. Prodvo handles the technical execution
                    end-to-end - including the parts you do not even know exist yet.
                  </p>
                  <Link
                    href="/pricing"
                    className={cx("btn-primary-lg", "reveal", "d1", "nontechnical-cta")}
                  >
                    Try it without coding
                  </Link>
                </div>
                <div>
                  <p className={cx("section-sub", "reveal", "d1", "nontechnical-sub")}>
                    You are not outsourcing the thinking. You are offloading the
                    implementation. Prodvo lets you stay in the product decisions -
                    what it does, for whom, and how - while it handles the database
                    schemas, API routes, and deployment pipelines that would otherwise
                    require hiring a developer.
                  </p>
                  <p className={cx("section-sub", "reveal", "d2")}>
                    <strong className={cx("nontechnical-strong")}>
                      No developer needed. No technical co-founder required.
                    </strong>{" "}
                    Just a product idea and the clarity to describe it.
                  </p>
                </div>
              </div>
            </div>

            <div className={cx("proof-grid-3", "reveal")}>
              <div className={cx("proof-cell")}>
                <div className={cx("proof-cell-num")}>
                  0<span>hrs</span>
                </div>
                <div className={cx("proof-cell-title")}>Time spent on setup</div>
                <div className={cx("proof-cell-desc")}>
                  Prodvo handles every technical configuration automatically. You
                  never see an env file.
                </div>
              </div>
              <div className={cx("proof-cell")}>
                <div className={cx("proof-cell-num")}>
                  1<span>day</span>
                </div>
                <div className={cx("proof-cell-title")}>
                  From idea to testable MVP
                </div>
                <div className={cx("proof-cell-desc")}>
                  Describe your product. Prodvo builds it. Share the link with real
                  users before lunch.
                </div>
              </div>
              <div className={cx("proof-cell")}>
                <div className={cx("proof-cell-num")}>5x</div>
                <div className={cx("proof-cell-title")}>
                  Cheaper than hiring a dev
                </div>
                <div className={cx("proof-cell-desc")}>
                  A freelance developer costs $3-8K to build what Prodvo ships in
                  days, for the cost of a subscription.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("seg-internal")} id="internal">
          <div className={cx("container")}>
            <div className={cx("seg-internal-inner")}>
              <div>
                <div className={cx("day-timeline", "reveal")}>
                  <div className={cx("day-timeline-head")}>
                    A typical internal tools request - without Prodvo
                  </div>
                  <div className={cx("day-row")}>
                    <div className={cx("day-time")}>Wk 1</div>
                    <div className={cx("day-content")}>
                      <div className={cx("day-task")}>
                        Ticket filed, backlog prioritized
                      </div>
                      <div className={cx("day-detail")}>
                        Engineering reviews scope, estimates 3 sprints
                      </div>
                    </div>
                  </div>
                  <div className={cx("day-row")}>
                    <div className={cx("day-time")}>Wk 3</div>
                    <div className={cx("day-content")}>
                      <div className={cx("day-task")}>Development starts</div>
                      <div className={cx("day-detail")}>
                        Dev assigned, environment configured, API integration begins
                      </div>
                    </div>
                  </div>
                  <div className={cx("day-row")}>
                    <div className={cx("day-time")}>Wk 5</div>
                    <div className={cx("day-content")}>
                      <div className={cx("day-task")}>First internal review</div>
                      <div className={cx("day-detail")}>
                        Ops team reviews, requests 12 changes
                      </div>
                    </div>
                  </div>
                  <div className={cx("day-row")}>
                    <div className={cx("day-time")}>Wk 7</div>
                    <div className={cx("day-content")}>
                      <div className={cx("day-task")}>
                        Revisions, testing, staging deploy
                      </div>
                      <div className={cx("day-detail")}>
                        QA cycle, security review, approval chain
                      </div>
                    </div>
                  </div>
                  <div className={cx("day-row", "highlight")}>
                    <div className={cx("day-time")}>Wk 9</div>
                    <div className={cx("day-content")}>
                      <div className={cx("day-task")}>Finally live</div>
                      <div className={cx("day-detail")}>
                        9 weeks. One internal tool. The ops team already wants 3
                        more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={cx("eyebrow", "reveal")}>Internal Tools Teams</div>
                <h2 className={cx("section-title", "reveal", "d1", "internal-title")}>
                  Your backlog is killing your ops team&apos;s velocity.
                </h2>
                <p className={cx("section-sub", "reveal", "d2", "section-sub-zero")}>
                  Internal tools should not compete with your product roadmap for
                  engineering time. Prodvo lets you build and ship ops dashboards,
                  admin panels, and workflow automations independently - without
                  touching the core product codebase.
                </p>

                <div className={cx("benefit-list")}>
                  <div className={cx("benefit-item", "reveal", "d1")}>
                    <div className={cx("benefit-title")}>
                      Ship internal tools in days, not sprints
                    </div>
                    <div className={cx("benefit-desc")}>
                      Describe the dashboard, the data model, the permissions.
                      Prodvo builds it. Your engineers stay focused on core product.
                    </div>
                    <span className={cx("metric-chip")}>3 days avg. vs 9 weeks</span>
                  </div>
                  <div className={cx("benefit-item", "reveal", "d2")}>
                    <div className={cx("benefit-title")}>
                      Non-technical ops can make small changes
                    </div>
                    <div className={cx("benefit-desc")}>
                      When the ops team wants a new filter or an export button, they
                      can ask Prodvo directly. No ticket required.
                    </div>
                    <span className={cx("metric-chip")}>
                      Zero engineering tickets for minor changes
                    </span>
                  </div>
                  <div className={cx("benefit-item", "reveal", "d3")}>
                    <div className={cx("benefit-title")}>
                      One platform, all your internal tooling
                    </div>
                    <div className={cx("benefit-desc")}>
                      Every internal tool lives in one place, with shared auth, one
                      database, and consistent access controls.
                    </div>
                    <span className={cx("metric-chip")}>
                      Unified RBAC across all tools
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("seg-hackathon")} id="hackathon">
          <div className={cx("container")}>
            <div className={cx("seg-hackathon-inner")}>
              <div>
                <div className={cx("eyebrow", "reveal")}>Hackathon Builders</div>
                <h2 className={cx("section-title", "reveal", "d1", "hackathon-title")}>
                  48 hours. The clock is running.
                </h2>
                <p className={cx("section-sub", "reveal", "d2", "section-sub-zero")}>
                  Most hackathon teams waste the first 8-12 hours on setup. Prodvo
                  compresses that to under 30 minutes so you spend 47.5 hours
                  building - and 30 minutes winning.
                </p>

                <div className={cx("build-strip", "reveal", "d2")}>
                  <div className={cx("build-strip-head")}>
                    <span>Task</span>
                    <span>Time allocation (48hr hackathon)</span>
                  </div>
                  <div className={cx("build-row")}>
                    <span className={cx("build-label")}>Environment</span>
                    <div className={cx("build-bar-track")}>
                      <div className={cx("build-bar", "type-setup")}>.</div>
                    </div>
                  </div>
                  <div className={cx("build-row")}>
                    <span className={cx("build-label")}>Database</span>
                    <div className={cx("build-bar-track")}>
                      <div className={cx("build-bar", "type-db")}>DB</div>
                    </div>
                  </div>
                  <div className={cx("build-row")}>
                    <span className={cx("build-label")}>Auth</span>
                    <div className={cx("build-bar-track")}>
                      <div className={cx("build-bar", "type-auth")}>Auth</div>
                    </div>
                  </div>
                  <div className={cx("build-row")}>
                    <span className={cx("build-label")}>Features</span>
                    <div className={cx("build-bar-track")}>
                      <div className={cx("build-bar", "type-feature")}>
                        Your actual product
                      </div>
                    </div>
                  </div>
                  <div className={cx("build-row")}>
                    <span className={cx("build-label")}>Deploy</span>
                    <div className={cx("build-bar-track")}>
                      <div className={cx("build-bar", "type-deploy")}>↑</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("clock-block", "reveal", "d1")}>
                <div className={cx("clock-head")}>Prodvo hackathon timeline</div>
                <div className={cx("clock-body")}>
                  <div className={cx("clock-display")}>{clockText}</div>
                  <div className={cx("clock-sub")}>hours left to build features</div>
                  <div className={cx("clock-tasks")}>
                    <div className={cx("clock-task", "done")}>
                      <span className={cx("clock-task-name")}>Environment setup</span>
                      <span className={cx("clock-task-time")}>:04 min</span>
                    </div>
                    <div className={cx("clock-task", "done")}>
                      <span className={cx("clock-task-name")}>Auth configured</span>
                      <span className={cx("clock-task-time")}>:08 min</span>
                    </div>
                    <div className={cx("clock-task", "done")}>
                      <span className={cx("clock-task-name")}>Database ready</span>
                      <span className={cx("clock-task-time")}>:12 min</span>
                    </div>
                    <div className={cx("clock-task", "done")}>
                      <span className={cx("clock-task-name")}>First deploy live</span>
                      <span className={cx("clock-task-time")}>:16 min</span>
                    </div>
                    <div className={cx("clock-task", "active-task")}>
                      <span className={cx("clock-task-name")}>
                        Building your actual idea...
                      </span>
                      <span className={cx("clock-task-time")}>now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cx("ship-time")} id="comparison">
          <div className={cx("container")}>
            <div className={cx("ship-time-header")}>
              <div>
                <div className={cx("eyebrow", "reveal")}>Time-to-ship</div>
                <h2 className={cx("section-title", "reveal", "d1")}>
                  How fast is Prodvo,
                  <br />
                  really?
                </h2>
              </div>
              <div>
                <p className={cx("section-sub", "reveal", "d1", "ship-sub")}>
                  Time from zero to a deployed, usable product - per persona, with
                  and without Prodvo. Based on reported ship times from users across
                  each segment.
                </p>
                <div className={cx("ship-legend", "reveal", "d2", "ship-legend-top")}>
                  <div className={cx("ship-legend-item")}>
                    <div className={cx("ship-legend-dot", "legend-with")}></div>
                    With Prodvo
                  </div>
                  <div className={cx("ship-legend-item")}>
                    <div className={cx("ship-legend-dot", "legend-without")}></div>
                    Traditional stack
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("ship-bars", "reveal")}>
              {SHIP_ROWS.map((row) => (
                <div className={cx("ship-bar-row")} key={row.label}>
                  <div>
                    <div className={cx("ship-bar-label")}>{row.label}</div>
                    <span className={cx("ship-bar-sub")}>{row.sub}</span>
                  </div>
                  <div>
                    <div className={cx("ship-bar-track")}>
                      <div
                        className={cx("ship-bar-fill")}
                        style={{ width: row.withWidth }}
                      ></div>
                    </div>
                    <div className={cx("ship-bar-track", "bar-top-gap")}>
                      <div
                        className={cx("ship-bar-fill", "without-fill")}
                        style={{ width: row.withoutWidth }}
                      ></div>
                    </div>
                  </div>
                  <div className={cx("ship-bar-num")}>
                    {row.withValue} <em>vs {row.withoutValue}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={cx("capability")}>
          <div className={cx("container")}>
            <div className={cx("cap-header")}>
              <div className={cx("eyebrow", "reveal")}>What you get</div>
              <h2 className={cx("section-title", "reveal", "d1", "cap-title")}>
                Every capability,
                <br />
                mapped to your role.
              </h2>
              <p className={cx("section-sub", "reveal", "d2", "cap-sub")}>
                Prodvo is one platform. But how you use it depends on who you are.
                Here is what each persona actually leans on.
              </p>
            </div>

            <div className={cx("cap-table-wrap", "reveal")}>
              <table className={cx("cap-table")}>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Solo Founders</th>
                    <th className={cx("highlight-col")}>Agencies</th>
                    <th>Non-Technical</th>
                    <th>Internal Tools</th>
                    <th>Hackathon</th>
                  </tr>
                </thead>
                <tbody>
                  {CAPABILITY_ROWS.map((row) => (
                    <tr key={row.capability}>
                      <td>{row.capability}</td>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.capability}-${index}`}
                          className={index === 1 ? cx("highlight-col") : undefined}
                        >
                          {value === "check" ? (
                            <div className={cx("cap-check")}>✓</div>
                          ) : (
                            <div className={cx("cap-dot")}></div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Whoever you are, Prodvo ships it.</h2>
              <p>
                No setup. No configuration. No waiting on infrastructure. Describe
                your product and start building in the next 2 minutes.
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
