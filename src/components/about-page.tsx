import Link from "next/link";
import { APP_DOMAIN } from "@/lib/config";
import { SiteShell } from "@/components/site-shell";
import { AboutRevealEffect } from "@/components/about-reveal-effect";

const TIMELINE = [
  { date: "Apr 2024", event: "Prodvo founded", detail: "Started building the planning-first AI workspace to solve the coordination gap in AI-assisted development." },
  { date: "Late 2024", event: "Seed round closed", detail: "Raised seed funding to build the core engineering team and platform architecture." },
  { date: "Early 2025", event: "Beta launch", detail: "Early adopter agencies and solo founders began using parallel execution and checkpoint rollback." },
  { date: "Q3 2025", event: "Public launch", detail: "Publicly launched with thousands of active users building real production software." },
  { date: "Q1 2026", event: "Team tier launch", detail: "Shipping team collaboration, GitHub Marketplace listing, and expanded user base." },
  { date: "Q3 2026", event: "Enterprise + SOC 2", detail: "Enterprise tier with self-hosted option and SOC 2 Type II certification." },
  { date: "2027", event: "Platform expansion", detail: "VS Code extension, Slack integration, international expansion, and plugin ecosystem." },
] as const;

const MOATS = [
  { title: "Proprietary planning algorithm", detail: "18 months of R&D on task decomposition and dependency mapping. No competitor has a planning phase." },
  { title: "Multi-agent orchestration", detail: "Patent-pending parallel execution system that runs 3 to 5 specialized agents simultaneously." },
  { title: "Checkpoint architecture", detail: "Efficient state serialization enabling instant rollbacks. Every task completion creates a recoverable snapshot." },
] as const;

const GTM_PHASES = [
  { phase: "Phase 1", title: "Developer-led growth", status: "Current", items: ["Free tier drives adoption", "Community building (Discord: 4,200+ members)", "Content marketing and Product Hunt launches"] },
  { phase: "Phase 2", title: "Team expansion", status: "Q3 2026", items: ["Self-serve team upgrades", "Agency partnership program", "GitHub Marketplace listing"] },
  { phase: "Phase 3", title: "Enterprise", status: "Q4 2026", items: ["Outbound sales team", "SOC 2 Type II certification", "Self-hosted deployment option"] },
] as const;

export function AboutPage() {
  return (
    <SiteShell>
      <AboutRevealEffect />

      <section className="page-hero">
        <div className="container">
          <span className="about-eyebrow animate-fade-up">About Prodvo</span>
          <h1 className="section-title animate-fade-up-1" style={{ maxWidth: "820px" }}>
            The AI workspace that <span style={{ color: "var(--fire-orange)" }}>plans before it builds.</span>
          </h1>
          <p className="section-subtitle animate-fade-up-2" style={{ maxWidth: "54rem" }}>
            Founded in April 2024 to solve the coordination gap in AI-assisted development.
            Prodvo is publicly launched, post-revenue, and growing fast.
          </p>
          <ul className="page-hero-meta animate-fade-up-3">
            <li>Founded April 2024</li>
            <li>Post-revenue</li>
            <li>Publicly launched</li>
          </ul>
        </div>
      </section>

      <section className="section" id="mission">
        <div className="container">
          <div className="section-label">
            <code>[ 01 / 05 ]</code>
            <span>Mission &amp; vision</span>
          </div>
          <h2 className="section-title">Why we exist</h2>
          <p className="section-subtitle" style={{ maxWidth: "48rem" }}>
            Every AI coding tool on the market jumps straight to code. We asked: what if the tool thought first?
          </p>

          <div className="about-mission-grid reveal">
            <div className="about-mission-card">
              <h3>Mission</h3>
              <p>Enable teams to ship production-grade software at prototype speed through AI-assisted planning, parallel execution, and checkpoint-based safety.</p>
            </div>
            <div className="about-mission-card">
              <h3>Vision</h3>
              <p>Make software delivery predictable and reversible - where teams ship with confidence because every change is planned, tracked, and rollback-ready.</p>
            </div>
          </div>

          <div className="about-origin-stream reveal delay-1">
            <article className="about-origin-card">
              <div className="about-origin-label">The problem</div>
              <h3>AI coding tools are fast. They are not safe.</h3>
              <p>Developers adopted AI coding assistants en masse, but every tool shares a fundamental flaw: they jump straight from prompt to code with no planning, no coordination, and no recovery path when things go wrong.</p>
            </article>
            <article className="about-origin-card">
              <div className="about-origin-label">Our answer</div>
              <h3>Build the workspace that thinks before it codes</h3>
              <p>Prodvo introduces a planning layer before any code is generated. Requirements are decomposed into dependency-mapped task graphs, executed by specialized agents in parallel, gated at checkpoints, and deployed with rollback confidence.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="timeline">
        <div className="container">
          <div className="section-label">
            <code>[ 02 / 05 ]</code>
            <span>Timeline</span>
          </div>
          <h2 className="section-title">From founding to public launch and beyond</h2>
          <p className="section-subtitle">
            Key milestones in Prodvo&rsquo;s development journey.
          </p>

          <div className="about-timeline reveal">
            {TIMELINE.map((item, i) => (
              <div className={`about-timeline-item${i >= TIMELINE.length - 2 ? " about-timeline-future" : ""}`} key={item.date}>
                <div className="about-timeline-marker" />
                <div className="about-timeline-content">
                  <span className="about-timeline-date">{item.date}</span>
                  <h3>{item.event}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="moats">
        <div className="container">
          <div className="section-label">
            <code>[ 03 / 05 ]</code>
            <span>What makes us different</span>
          </div>
          <h2 className="section-title">Built on 18 months of focused R&amp;D</h2>
          <p className="section-subtitle">
            Three technical moats that no competitor has replicated.
          </p>

          <div className="about-moats-grid reveal">
            {MOATS.map((moat, i) => (
              <article className="about-moat-card" key={moat.title}>
                <span className="about-moat-num">{`0${i + 1}`}</span>
                <h3>{moat.title}</h3>
                <p>{moat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="growth">
        <div className="container">
          <div className="section-label">
            <code>[ 04 / 05 ]</code>
            <span>How we grow</span>
          </div>
          <h2 className="section-title">Developer-first, then teams, then enterprise</h2>
          <p className="section-subtitle">
            A deliberate go-to-market strategy built on organic adoption and product-led growth.
          </p>

          <div className="about-gtm-rail reveal">
            {GTM_PHASES.map((phase) => (
              <div className="about-gtm-card" key={phase.phase}>
                <div className="about-gtm-header">
                  <span className="about-gtm-phase">{phase.phase}</span>
                  <span className="about-gtm-status">{phase.status}</span>
                </div>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <div className="section-label">
            <code>[ 05 / 05 ]</code>
            <span>Team</span>
          </div>
          <h2 className="section-title">The people behind Prodvo</h2>
          <p className="section-subtitle">
            A small, focused team with deep experience in distributed systems, developer tooling, and AI - building the future of software delivery.
          </p>

        </div>

        <div className="container">
          <div className="about-team-hiring reveal">
            <div className="about-hiring-content">
              <h3>We&rsquo;re hiring</h3>
              <p>Join a team that&rsquo;s redefining how software gets built. We&rsquo;re looking for engineers, designers, and product thinkers who want to shape the future of AI-assisted development.</p>
            </div>
            <div className="about-hiring-actions">
              <a href={`mailto:career@${APP_DOMAIN}`} className="btn btn-primary">Get in touch</a>
              <a href={`mailto:career@${APP_DOMAIN}`} className="about-hiring-email">{`career@${APP_DOMAIN}`}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-cta-frame reveal">
            <div>
              <h2>Ready to build with structure?</h2>
              <p>Start your first project with Prodvo and experience planning-first AI development.</p>
            </div>
            <div className="about-cta-actions">
              <Link className="btn btn-primary" href="/pricing">Start building</Link>
              <Link className="btn btn-secondary" href="/product">Explore the platform</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
