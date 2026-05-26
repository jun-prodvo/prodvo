"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./product-page.module.css";

type TimelineStep = {
  title: string;
  description: string;
  delay?: "d1" | "d2" | "d3" | "d4";
};

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

type PricingFeature = {
  label: string;
  off?: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  context: string;
  cta: string;
  tone: "outline" | "fill";
  popular?: boolean;
  features: readonly PricingFeature[];
};

const TIMELINE_STEPS: readonly TimelineStep[] = [
  {
    title: "Describe your product",
    description:
      "Type what you want to build in plain language. \"A task manager with team invites and Stripe billing.\" That's enough. Prodvo gets it.",
  },
  {
    title: "Watch it build",
    description:
      "The AI agent scaffolds the codebase, wires auth, creates your database schema, and builds the UI live in your browser.",
    delay: "d1",
  },
  {
    title: "Iterate by talking",
    description:
      "\"Change the dashboard layout.\" \"Add CSV export.\" \"Make it mobile-friendly.\" The agent evolves what's there, not restart.",
    delay: "d2",
  },
  {
    title: "Ship with one click",
    description:
      "Hit deploy. Your app goes live on a custom domain with SSL, CDN, and zero configuration.",
    delay: "d3",
  },
];

const TESTIMONIALS: readonly Testimonial[] = [
  {
    initials: "AR",
    name: "Arif Rahman",
    role: "Founder, Trackly · Jakarta",
    quote:
      '"I launched my SaaS in a weekend. Not a prototype - an actual product, with auth, billing, and a dashboard."',
  },
  {
    initials: "MS",
    name: "Maya S.",
    role: "Indie developer · Singapore",
    quote:
      '"The AI actually understands what I\'m building. It\'s not just autocomplete - it makes real decisions."',
  },
  {
    initials: "KT",
    name: "Kevin T.",
    role: "Full-stack engineer · Bangkok",
    quote:
      '"Replaced my stack with Prodvo. Way cheaper. Way less config. Way more speed."',
  },
  {
    initials: "DP",
    name: "Dian P.",
    role: "CTO, Kopilot.ai",
    quote:
      '"My co-founder isn\'t technical. Now she can make product changes herself. That alone is worth it."',
  },
  {
    initials: "JL",
    name: "James L.",
    role: "Solo founder · Kuala Lumpur",
    quote:
      '"I\'ve tried other tools. Prodvo is the first one that understood the complexity of what I was building."',
  },
  {
    initials: "RK",
    name: "Riza K.",
    role: "Product engineer · Jakarta",
    quote:
      '"Shipped v1 of our internal tool in 3 days. Normally that\'s a 3-week project."',
  },
];

const HOMEPAGE_PRICING: readonly PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "per month · billed monthly",
    context: "Best for: pilots and first production workflows",
    cta: "Start free",
    tone: "outline",
    features: [
      { label: "1 active workspace" },
      { label: "Lite agent runs" },
      { label: "Built-in preview" },
      { label: "Git sync and history" },
    ],
  },
  {
    name: "Growth",
    price: "$99",
    period: "per month · billed monthly",
    context: "Best for: startup product + engineering teams",
    cta: "Start trial",
    tone: "fill",
    popular: true,
    features: [
      { label: "Parallel agents" },
      { label: "Autonomous build mode" },
      { label: "Checkpoints and rollback" },
      { label: "Custom domains and deploys" },
    ],
  },
  {
    name: "Scale",
    price: "$249",
    period: "per month · billed monthly",
    context: "Best for: multi-team organizations",
    cta: "Talk to sales",
    tone: "outline",
    features: [
      { label: "Advanced access controls" },
      { label: "Dedicated capacity lane" },
      { label: "Priority support" },
      { label: "Usage governance controls" },
    ],
  },
];

function cn(...classNames: string[]) {
  return classNames.map((name) => styles[name]).join(" ");
}

export default function ProductPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timelineItems = Array.from(
      document.querySelectorAll<HTMLElement>(`.${styles["tl-item"]}`),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index ?? 0);
            setActiveTimeline(idx);
          }
        });
      },
      { threshold: 0.6 },
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActive = () => {
      const cards = cardRefs.current.filter((card): card is HTMLDivElement => card !== null);
      if (!cards.length) return;

      const left = track.scrollLeft;
      let closest = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - left);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveTestimonial(closest);
    };

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (event: MouseEvent) => {
      isDown = true;
      track.classList.add(styles.grabbing);
      startX = event.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      track.classList.remove(styles.grabbing);
    };

    const onMouseUp = () => {
      isDown = false;
      track.classList.remove(styles.grabbing);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener("scroll", updateActive, { passive: true });
    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mouseleave", onMouseLeave);
    track.addEventListener("mouseup", onMouseUp);
    track.addEventListener("mousemove", onMouseMove);

    return () => {
      track.removeEventListener("scroll", updateActive);
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mouseleave", onMouseLeave);
      track.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const scrollToTestimonial = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  return (
    <SiteShell>
      <div className={styles["product-page"]}>
        <section className={styles.hero}>
        <div className="container">
          <div className={styles["hero-inner"]}>
            <div>
              <div className={styles["hero-kicker"]}>Now in Early Access</div>
              <h1 className={styles["hero-h1"]}>
                Stop <span className={styles["word-cross"]}>stitching</span>
                <br />
                tools together.
                <br />
                <span className={styles["word-orange"]}>Just build.</span>
              </h1>
              <p className={styles["hero-sub"]}>
                Prodvo is the AI coding agent with everything built in: code editor,
                database, auth, storage, and deployment. Describe what you want and ship
                it today.
              </p>
              <div className={styles["hero-ctas"]}>
                <Link href="/pricing" className={styles["btn-hero-primary"]}>
                  Start building free →
                </Link>
                <a href="#how" className={styles["btn-hero-secondary"]}>
                  See how it works
                </a>
              </div>
              <div className={styles["hero-proof"]}>
                <span className={styles["hero-proof-item"]}>No credit card</span>
                <span className={styles["hero-proof-sep"]}>·</span>
                <span className={styles["hero-proof-item"]}>Deploy in under 2 min</span>
                <span className={styles["hero-proof-sep"]}>·</span>
                <span className={styles["hero-proof-item"]}>Free tier included</span>
              </div>
            </div>

            <div className={styles["hero-visual"]}>
              <div className={styles.terminal}>
                <div className={styles["terminal-bar"]}>
                  <div className={cn("t-dot", "r")} />
                  <div className={cn("t-dot", "y")} />
                  <div className={cn("t-dot", "g")} />
                  <span className={styles["t-file"]}>prodvo - ai agent · workspace</span>
                </div>
                <div className={styles["terminal-body"]}>
                  <div className={styles.tl}>
                    <span className={styles.tp}>you →</span>
                    <span className={styles.tc}>
                      build a SaaS with auth, Postgres, and a dashboard
                    </span>
                  </div>
                  <div className={styles.td} />
                  <div className={styles.tl}>
                    <span className={styles.to}>✦ Analyzing requirements...</span>
                  </div>
                  <div className={styles.tl}>
                    <span className={styles.ts}>✓ Auth configured (email + OAuth)</span>
                  </div>
                  <div className={styles.tl}>
                    <span className={styles.ts}>✓ Postgres database ready</span>
                  </div>
                  <div className={styles.tl}>
                    <span className={styles.ts}>✓ Dashboard UI generated</span>
                  </div>
                  <div className={styles.tl}>
                    <span className={styles.ts}>✓ API routes wired</span>
                  </div>
                  <div className={styles.td} />
                  <div className={styles.tl}>
                    <span className={styles.to}>🚀 Live at&nbsp;</span>
                    <span className={styles.tc}>prodvo.studio/your-project</span>
                  </div>
                  <div className={styles.td} />
                  <div className={styles.tl}>
                    <span className={styles.tp}>you →</span>
                    <span className={styles["t-cursor"]} />
                  </div>
                </div>
              </div>
              <div className={styles["hero-float-tag"]}>
                <div>
                  <div className={styles["hft-num"]}>
                    37<em>s</em>
                  </div>
                  <div className={styles["hft-label"]}>avg. time to first deploy</div>
                </div>
              </div>
              <div className={styles["hero-float-badge"]}>AI-Powered</div>
            </div>
          </div>
        </div>
        </section>

        <section className={styles.contrast}>
        <div className="container">
          <div className={styles["contrast-inner"]}>
            <div>
              <div className={cn("contrast-col-head", "bad")}>The old way - 6 tools</div>
              <div className={styles["contrast-list"]}>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>VS Code + plugins</span>
                  <span className={styles["ci-tag"]}>editor</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Auth0 / Clerk</span>
                  <span className={styles["ci-tag"]}>auth</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Supabase / Neon</span>
                  <span className={styles["ci-tag"]}>database</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Vercel / Railway</span>
                  <span className={styles["ci-tag"]}>deploy</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Resend / Postmark</span>
                  <span className={styles["ci-tag"]}>email</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>GitHub + CI/CD</span>
                  <span className={styles["ci-tag"]}>version control</span>
                </div>
              </div>
            </div>

            <div className={styles["contrast-mid"]}>
              <div className={styles["contrast-line"]} />
              <div className={styles["contrast-vs"]}>vs</div>
              <div className={styles["contrast-line"]} />
            </div>

            <div>
              <div className={cn("contrast-col-head", "good")}>With Prodvo - 1 tool</div>
              <div className={cn("contrast-list", "prodvo")}>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>AI Code Editor</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Auth - zero config</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Postgres Database</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Instant Deploy</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Transactional Email</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
                <div className={styles["contrast-item"]}>
                  <span className={styles["ci-name"]}>Git + Version Control</span>
                  <span className={styles["ci-tag"]}>built-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className={styles.features} id="features">
        <div className="container">
          <div className={cn("features-head", "reveal")}>
            <div className={styles["sec-eyebrow"]}>What you get</div>
            <h2 className={styles["sec-title"]}>
              Every tool you need.
              <br />
              Zero setup required.
            </h2>
            <p className={styles["sec-sub"]}>
              From first prompt to live product. Prodvo handles the infra so you
              focus entirely on your idea.
            </p>
          </div>

          <div className={styles.bento}>
            <div className={cn("bc", "s7", "surf-warm", "reveal", "d1")}>
              <div className={styles["bc-tag"]}>Core</div>
              <div className={styles["bc-title"]}>
                AI that writes, fixes,
                <br />
                and ships - on its own
              </div>
              <p className={styles["bc-desc"]}>
                Prodvo's agent understands your intent, not just your syntax. It
                builds full features, catches its own bugs, and iterates until
                it's done right.
              </p>
              <div className={styles["bc-code"]}>
                <div>
                  <span className={styles.cc}>// just describe what you want</span>
                </div>
                <div>
                  <span className={styles.ck}>const</span>
                  <span className={styles.cd}> feature = </span>
                  <span className={styles.ck}>await</span> prodvo.
                  <span className={styles.cf}>build</span>(
                  <span className={styles.cs}>"add Stripe billing"</span>)
                </div>
                <div>
                  <span className={styles.cc}>// agent writes, tests, deploys</span>
                </div>
                <div>
                  <span className={styles.ck}>await</span> feature.
                  <span className={styles.cf}>deploy</span>()
                </div>
              </div>
            </div>

            <div className={cn("bc", "s5", "reveal", "d2")}>
              <div className={styles["bc-tag"]}>Database</div>
              <div className={styles["bc-title-xl"]}>∞ DB</div>
              <div className={styles["bc-title"]}>Postgres. Instant.</div>
              <p className={styles["bc-desc"]}>
                Full Postgres provisioned in seconds. Schema migrations, query
                editor, backups - zero configuration.
              </p>
              <ul className={styles["bc-check"]}>
                <li>Auto-generated schema from your data model</li>
                <li>Visual query browser included</li>
                <li>Daily backups + point-in-time restore</li>
              </ul>
            </div>

            <div className={cn("bc", "s8", "surf-cool", "reveal", "d1")}>
              <div className={styles["bc-tag"]}>Deploy</div>
              <div className={styles["bc-title-xl"]}>1-click</div>
              <div className={styles["bc-title"]}>To production. Right now.</div>
              <p className={styles["bc-desc"]}>
                Your project goes live the moment it's ready. Custom domain, SSL,
                CDN - handled automatically.
              </p>
              <ul className={styles["bc-check"]}>
                <li>Custom domain with automatic SSL</li>
                <li>Global CDN, edge-optimized delivery</li>
                <li>Preview environments per branch</li>
              </ul>
            </div>

            <div className={cn("bc", "s4", "reveal", "d2")}>
              <div className={styles["bc-tag"]}>Auth</div>
              <div className={styles["bc-title"]}>Auth that just works</div>
              <p className={styles["bc-desc"]}>
                Email, magic links, Google, GitHub OAuth - wired automatically.
                Sessions, roles, middleware - all handled.
              </p>
              <div className={styles["bc-pills"]}>
                <span className={styles["bc-pill"]}>Email</span>
                <span className={styles["bc-pill"]}>Magic Link</span>
                <span className={styles["bc-pill"]}>Google</span>
                <span className={styles["bc-pill"]}>GitHub</span>
                <span className={styles["bc-pill"]}>SSO</span>
                <span className={styles["bc-pill"]}>RBAC</span>
              </div>
            </div>

            <div className={cn("bc", "s12", "surf-cool", "reveal")}>
              <div className={styles["bc-tag"]}>Everything else</div>
              <div className={styles["bc-hstrip"]}>
                <div className={styles["bc-hcol"]}>
                  <div className={styles["bc-hcol-num"]}>S3</div>
                  <div className={styles["bc-hcol-label"]}>File Storage</div>
                  <div className={styles["bc-hcol-desc"]}>
                    S3-compatible, with image transforms and CDN delivery.
                  </div>
                </div>
                <div className={styles["bc-hcol"]}>
                  <div className={styles["bc-hcol-num"]}>WS</div>
                  <div className={styles["bc-hcol-label"]}>Real-time APIs</div>
                  <div className={styles["bc-hcol-desc"]}>
                    WebSocket subscriptions and REST auto-generated from your schema.
                  </div>
                </div>
                <div className={styles["bc-hcol"]}>
                  <div className={styles["bc-hcol-num"]}>TX</div>
                  <div className={styles["bc-hcol-label"]}>Transactional Email</div>
                  <div className={styles["bc-hcol-desc"]}>
                    Templates, logs, and delivery tracking built in.
                  </div>
                </div>
                <div className={styles["bc-hcol"]}>
                  <div className={styles["bc-hcol-num"]}>AN</div>
                  <div className={styles["bc-hcol-label"]}>Analytics</div>
                  <div className={styles["bc-hcol-desc"]}>
                    Track users and events without third-party scripts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className={styles.how} id="how">
        <div className="container">
          <div className={styles["how-inner"]}>
            <div className={styles["how-sticky"]}>
              <div className={cn("sec-eyebrow", "reveal")}>The process</div>
              <h2 className={cn("sec-title", "reveal", "d1")}>
                From idea to live product
                <br />
                in minutes
              </h2>
              <p className={cn("sec-sub", "reveal", "d2")}>
                No configuration. No DevOps rabbit holes. Describe what you're
                building - Prodvo handles everything else.
              </p>
            </div>

            <div className={styles.timeline}>
              {TIMELINE_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  data-index={index}
                  className={cn(
                    "tl-item",
                    index === activeTimeline ? "active" : "",
                    "reveal",
                    step.delay ?? "",
                  )}
                >
                  <div className={styles["tl-left"]}>
                    <div className={styles["tl-num"]}>{`0${index + 1}`}</div>
                    <div className={styles["tl-connector"]} />
                  </div>
                  <div className={styles["tl-body"]}>
                    <div className={styles["tl-title"]}>{step.title}</div>
                    <p className={styles["tl-desc"]}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <section className={styles.stack} id="stack">
        <div className="container">
          <div className={styles["stack-inner"]}>
            <div>
              <div className={cn("sec-eyebrow", "reveal")}>Under the hood</div>
              <h2 className={cn("sec-title", "reveal", "d1")}>
                Built on tech
                <br />
                you already trust
              </h2>
              <p className={cn("sec-sub", "reveal", "d2")}>
                Prodvo uses battle-tested open-source tools and industry-standard
                platforms. You can always export, migrate, or self-host.
              </p>
              <Link href="/docs" className={cn("btn-hero-secondary", "reveal", "d3")}>
                Read the architecture docs →
              </Link>
            </div>

            <div className={styles["stack-cats"]}>
              <div className={cn("stack-cat", "reveal", "d1")}>
                <div className={styles["stack-cat-head"]}>Language & Frameworks</div>
                <div className={styles["stack-cat-pills"]}>
                  <span className={styles.scp}>TypeScript</span>
                  <span className={styles.scp}>Next.js</span>
                  <span className={styles.scp}>React</span>
                  <span className={styles.scp}>Node.js</span>
                  <span className={styles.scp}>Python</span>
                </div>
              </div>
              <div className={cn("stack-cat", "reveal", "d2")}>
                <div className={styles["stack-cat-head"]}>Database & Storage</div>
                <div className={styles["stack-cat-pills"]}>
                  <span className={styles.scp}>PostgreSQL</span>
                  <span className={styles.scp}>Prisma ORM</span>
                  <span className={styles.scp}>Redis</span>
                  <span className={styles.scp}>S3-compatible</span>
                </div>
              </div>
              <div className={cn("stack-cat", "reveal", "d3")}>
                <div className={styles["stack-cat-head"]}>Auth & Security</div>
                <div className={styles["stack-cat-pills"]}>
                  <span className={styles.scp}>JWT / Sessions</span>
                  <span className={styles.scp}>OAuth 2.0</span>
                  <span className={styles.scp}>RBAC</span>
                  <span className={styles.scp}>Row-level Security</span>
                </div>
              </div>
              <div className={cn("stack-cat", "reveal", "d4")}>
                <div className={styles["stack-cat-head"]}>Infrastructure</div>
                <div className={styles["stack-cat-pills"]}>
                  <span className={styles.scp}>Docker</span>
                  <span className={styles.scp}>Kubernetes</span>
                  <span className={styles.scp}>Cloudflare CDN</span>
                  <span className={styles.scp}>Auto-scaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className={styles.testi}>
        <div className="container">
          <div className={cn("testi-head", "reveal")}>
            <div className={styles["sec-eyebrow"]}>What builders say</div>
            <h2 className={styles["sec-title"]}>They shipped. Fast.</h2>
          </div>
        </div>

        <div className={styles["testi-track-wrap"]}>
          <div className={styles["testi-track"]} ref={trackRef} id="testiTrack">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={styles["testi-card"]}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <p className={styles["testi-card-text"]}>{item.quote}</p>
                <div className={styles["testi-footer"]}>
                  <div className={styles["testi-avatar"]}>{item.initials}</div>
                  <div>
                    <div className={styles["testi-name"]}>{item.name}</div>
                    <div className={styles["testi-role"]}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={styles["testi-nav"]}>
            {TESTIMONIALS.map((item, index) => (
              <button
                key={`${item.initials}-${index}`}
                type="button"
                className={cn("testi-dot", index === activeTestimonial ? "active" : "")}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => scrollToTestimonial(index)}
              />
            ))}
          </div>
        </div>
        </section>

        <section className={styles.pricing} id="pricing">
        <div className="container">
          <div className={cn("pricing-head", "reveal")}>
            <div className={styles["sec-eyebrow"]}>Pricing</div>
            <h2 className={styles["sec-title"]}>
              Pay for what you use.
              <br />
              Nothing else.
            </h2>
            <p className={styles["sec-sub"]}>Updated to match homepage pricing.</p>
          </div>

          <div className={styles["pricing-grid"]}>
            {HOMEPAGE_PRICING.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "pc",
                  plan.popular ? "pop" : "",
                  "reveal",
                  index === 0 ? "d1" : index === 1 ? "d2" : "d3",
                )}
              >
                {plan.popular ? <div className={styles["pop-badge"]}>Most Popular</div> : null}
                <div className={styles["pc-plan"]}>{plan.name}</div>
                <div className={styles["pc-price"]}>{plan.price}</div>
                <div className={styles["pc-period"]}>{plan.period}</div>
                <div className={styles["pc-context"]}>{plan.context}</div>
                <div className={styles["pc-div"]} />
                <ul className={styles["pc-list"]}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={feature.off ? styles.off : undefined}
                    >
                      {feature.label}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={cn("btn-pc", plan.tone === "fill" ? "fill" : "outline")}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className={cn("pricing-note", "reveal")}>
            Need more? <Link href="/pricing">Talk to us about Enterprise</Link> - custom
            compute, SLA guarantees, and white-glove onboarding.
          </p>
        </div>
        </section>
      </div>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Your next product starts right now.</h2>
              <p>
                Stop planning your stack. Stop configuring tools. Describe what you
                want to build and ship it today.
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
