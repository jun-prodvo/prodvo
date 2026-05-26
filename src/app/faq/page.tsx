"use client";
import { APP_DOMAIN } from "@/lib/config";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./faq.module.css";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const faqListRef = useRef<HTMLDivElement>(null);

  // Re-run reveal animation when filters change
  useEffect(() => {
    if (!faqListRef.current) return;
    const revealEls = Array.from(faqListRef.current.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    
    // Reset visibility first
    revealEls.forEach((el) => el.classList.remove(styles.isVisible));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: "all", label: "All questions" },
    { id: "getting-started", label: "Getting Started" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing & Billing" },
    { id: "security", label: "Security" },
    { id: "technical", label: "Technical" },
  ];

  const faqs = [
    // Getting Started
    {
      category: "getting-started",
      question: "How do I get started with Prodvo?",
      answer: `Start by creating a free account-no credit card required. Once you're in, create your first workspace and connect your Git repository. From there, describe what you want to build in plain language, and Prodvo will generate a structured plan. Review and approve the plan, then watch agents execute while you maintain oversight at checkpoints.`,
    },
    {
      category: "getting-started",
      question: "How long does it take to see results?",
      answer: `Most teams run their first production workflow within an hour of signing up. Meaningful impact-reduced coordination overhead, faster cycle times-typically shows up within one sprint of active use.`,
    },
    {
      category: "getting-started",
      question: "Do I need to change my existing workflow?",
      answer: `No. Prodvo layers on top of your existing Git-based workflow. Your repositories, branches, and CI/CD pipelines stay the same. Prodvo adds visibility, coordination, and checkpoint controls without replacing what works.`,
    },
    {
      category: "getting-started",
      question: "What permissions does Prodvo need to access my repository?",
      answer: `Prodvo requires read/write access to the repositories you want to use. For GitHub, we use GitHub Apps with granular permissions. You can limit access to specific repositories rather than your entire organization.`,
    },
    {
      category: "getting-started",
      question: "Can I use Prodvo with private repositories?",
      answer: `Absolutely. Prodvo works with both public and private repositories. Your code remains private and secure-we never share or expose your source code to other users or third parties.`,
    },
    {
      category: "getting-started",
      question: "Is there a learning curve?",
      answer: `Minimal. If you're familiar with Git and pull requests, you already understand the core concepts. Most users are productive within their first session. We also provide interactive tutorials and documentation to help you get the most out of Prodvo.`,
    },
    {
      category: "getting-started",
      question: "Can I invite my team members?",
      answer: `Yes. All plans support team collaboration. Add team members from your workspace settings, assign roles (admin, member, viewer), and collaborate on workflows together. Each team member gets their own activity feed and notifications.`,
    },

    // Features
    {
      category: "features",
      question: "What are 'parallel agents' and how do they work?",
      answer: `Parallel agents are specialized AI workers that can execute different parts of a task simultaneously. For example, one agent handles frontend code while another works on the API and a third writes tests-all operating from the same intent lock but in isolated branches. They coordinate through shared context and merge at checkpoints.`,
    },
    {
      category: "features",
      question: "How do checkpoints work?",
      answer: `Checkpoints are human review gates you define in your workflow. When agents reach a checkpoint, they pause and present their work-code changes, test results, quality signals-for your approval. You can approve to continue, request revisions, or rollback to a previous checkpoint.`,
    },
    {
      category: "features",
      question: "Can I rollback if something goes wrong?",
      answer: `Yes. Every checkpoint creates a snapshot of your entire state-code, config, environment. If anything goes wrong after approval, you can rollback to any previous checkpoint with one click. Full state restoration, no manual cleanup required.`,
    },
    {
      category: "features",
      question: "What languages and frameworks are supported?",
      answer: `Prodvo supports TypeScript, JavaScript, Python, Go, Rust, Ruby, and Java. For frameworks, we work well with React, Next.js, Vue, Svelte, Django, FastAPI, Rails, and most modern web stacks. We're constantly expanding coverage based on user needs.`,
    },
    {
      category: "features",
      question: "Can I customize the agent behavior?",
      answer: `Yes. You can define custom instructions, set coding standards, specify preferred patterns, and configure how agents handle edge cases. These preferences persist across your workspace and can be overridden per project or workflow.`,
    },
    {
      category: "features",
      question: "How does the intent lock prevent conflicts?",
      answer: `The intent lock ensures only one workflow modifies a given scope at a time. When you start a workflow, Prodvo locks the relevant files and paths. Other workflows can read but not write until the lock is released-preventing merge conflicts and coordination chaos.`,
    },
    {
      category: "features",
      question: "Can I run multiple workflows simultaneously?",
      answer: `Yes, as long as they don't overlap in scope. You can have one agent working on the authentication module while another handles the payment integration. If there's potential overlap, Prodvo warns you before starting and suggests sequencing.`,
    },
    {
      category: "features",
      question: "Does Prodvo write tests automatically?",
      answer: `Yes. Agents can generate unit tests, integration tests, and end-to-end tests based on your codebase patterns. You can configure test coverage requirements as checkpoint conditions-workflows won't proceed until tests pass.`,
    },
    {
      category: "features",
      question: "Can I see what the agents are doing in real time?",
      answer: `Yes. The live execution view shows exactly what each agent is working on, including code diffs, thought process, and progress. You can pause, redirect, or stop agents at any time if something looks off.`,
    },
    {
      category: "features",
      question: "What happens if the agent gets stuck?",
      answer: `Agents are designed to recognize when they're stuck and will pause rather than produce poor output. You'll be notified and can provide guidance, clarify requirements, or take manual control. Agents learn from these interventions to improve over time.`,
    },

    // Pricing
    {
      category: "pricing",
      question: "Is there a free trial?",
      answer: `Yes. All plans include a 14-day free trial with full access to features. No credit card required to start. If you need more time to evaluate, contact us and we can extend your trial.`,
    },
    {
      category: "pricing",
      question: "Can I change plans later?",
      answer: `Absolutely. Upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle, and we prorate any differences. Workflows and data remain intact across plan changes.`,
    },
    {
      category: "pricing",
      question: "What happens when I hit my run limits?",
      answer: `On Starter, you'll see warnings at 80% of your monthly limit. At 100%, you can't start new runs until the next billing cycle or until you upgrade. Growth and Scale plans have unlimited runs.`,
    },
    {
      category: "pricing",
      question: "Do you offer annual billing discounts?",
      answer: `Yes. Annual billing saves you 20% compared to monthly payments. You can switch between monthly and annual billing from your account settings at any time.`,
    },
    {
      category: "pricing",
      question: "Is there a discount for startups or non-profits?",
      answer: `Yes. We offer 50% off for early-stage startups (pre-Series A) and verified non-profit organizations. Contact our sales team with proof of eligibility to apply.`,
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer: `We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for annual Enterprise plans. Invoicing is available for Scale plan customers.`,
    },
    {
      category: "pricing",
      question: "Can I get a refund if Prodvo isn't right for me?",
      answer: `We offer a 30-day money-back guarantee for new customers. If Prodvo doesn't meet your needs within the first 30 days of a paid subscription, contact support for a full refund.`,
    },
    {
      category: "pricing",
      question: "How are seats counted?",
      answer: `Seats are counted by unique users who can create and run workflows. Viewers who only need read access to results don't count toward your seat limit. You can manage seats from your workspace settings.`,
    },

    // Security
    {
      category: "security",
      question: "Where is my code stored?",
      answer: `Your code stays in your Git repository. Prodvo reads from and writes to your repos during execution but doesn't permanently store your source code. Execution logs and checkpoint metadata are stored securely in our SOC 2 compliant infrastructure.`,
    },
    {
      category: "security",
      question: "Is Prodvo SOC 2 compliant?",
      answer: `Yes. We maintain SOC 2 Type II certification. Enterprise customers on the Scale plan also get access to detailed audit logs, SAML SSO, and can request our full security documentation.`,
    },
    {
      category: "security",
      question: "Can agents access sensitive credentials?",
      answer: `Agents only access what you explicitly grant through environment variables and secrets. You control the scope of access, and all credential handling follows security best practices. Sensitive values are never logged or stored in plain text.`,
    },
    {
      category: "security",
      question: "Is data encrypted in transit and at rest?",
      answer: `Yes. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. This includes execution logs, checkpoint metadata, and any temporary data generated during workflow runs.`,
    },
    {
      category: "security",
      question: "Do you have a bug bounty program?",
      answer: `Yes. We run a responsible disclosure program for security researchers. If you discover a vulnerability, please report it to security@${APP_DOMAIN}. We respond within 24 hours and offer rewards for valid findings.`,
    },
    {
      category: "security",
      question: "Can I use Prodvo in a regulated industry (healthcare, finance)?",
      answer: `Yes. Our Scale plan includes features required for regulated industries: audit logs, access controls, data residency options, and BAA agreements for HIPAA compliance. Contact our enterprise team for specific compliance requirements.`,
    },
    {
      category: "security",
      question: "How do you handle data retention?",
      answer: `Execution logs and checkpoint data are retained for 90 days by default. Enterprise customers can configure custom retention policies. You can also manually delete workflow data at any time from your dashboard.`,
    },
    {
      category: "security",
      question: "Can I restrict access by IP address?",
      answer: `Yes. Scale plan customers can configure IP allowlists to restrict dashboard and API access to specific IP ranges. This is commonly used for teams with VPN or office-only access requirements.`,
    },

    // Technical
    {
      category: "technical",
      question: "How does Prodvo integrate with my CI/CD pipeline?",
      answer: `Prodvo works alongside your existing CI/CD. When agents complete work and you approve at a checkpoint, the changes are committed to your branch and trigger your normal CI pipeline. We don't replace your pipeline-we orchestrate what feeds into it.`,
    },
    {
      category: "technical",
      question: "Can I self-host Prodvo?",
      answer: `Enterprise customers on Scale plans can discuss self-hosted deployment options. Most teams use our cloud-hosted version, which offers the best balance of performance, security, and maintenance simplicity.`,
    },
    {
      category: "technical",
      question: "What if an agent makes a mistake?",
      answer: `Checkpoints are your safety net. Agents pause at defined gates, so you review all changes before they proceed. If you spot an issue, request revisions or rollback. The system is designed so no irreversible change happens without your explicit approval.`,
    },
    {
      category: "technical",
      question: "Is there an API for programmatic access?",
      answer: `Yes. Our REST API lets you trigger workflows, query status, retrieve results, and manage workspaces programmatically. API documentation is available in the docs, and all plans include API access.`,
    },
    {
      category: "technical",
      question: "Can I trigger workflows from GitHub Actions or other CI tools?",
      answer: `Yes. We provide GitHub Actions, GitLab CI templates, and webhook endpoints for triggering Prodvo workflows from your existing automation. This enables patterns like "run Prodvo on every PR" or "auto-fix failing tests."`,
    },
    {
      category: "technical",
      question: "How does Prodvo handle merge conflicts?",
      answer: `The intent lock system prevents most conflicts by serializing overlapping changes. When conflicts do occur (e.g., external commits), Prodvo detects them early and pauses for human resolution rather than attempting automatic merges that might lose work.`,
    },
    {
      category: "technical",
      question: "What's the latency for agent execution?",
      answer: `Agent startup is typically under 3 seconds. Execution speed depends on task complexity-simple changes complete in seconds, while larger features may take minutes. You can monitor progress in real time and see estimated completion times.`,
    },
    {
      category: "technical",
      question: "Does Prodvo support monorepos?",
      answer: `Yes. Prodvo handles monorepos well, including proper scoping of intent locks to specific packages or directories. We support common monorepo tools like Nx, Turborepo, and Lerna out of the box.`,
    },
    {
      category: "technical",
      question: "Can I use Prodvo with GitLab or Bitbucket?",
      answer: `Yes. While GitHub has the deepest integration, we also support GitLab and Bitbucket. Connect your repositories through OAuth, and Prodvo handles the rest. Feature parity is maintained across all supported platforms.`,
    },
    {
      category: "technical",
      question: "How do I debug issues with agent output?",
      answer: `Every execution includes detailed logs showing agent reasoning, code changes, and decision points. You can inspect these logs in the dashboard or export them for offline analysis. Our support team can also help diagnose complex issues.`,
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>FAQ</span>
          <h1 className={styles.heroTitle}>
            Questions?
            <br />
            <em>We&apos;ve got answers.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Everything you need to know about Prodvo, from getting started 
            to enterprise security. Can&apos;t find what you&apos;re looking for? Reach out.
          </p>
          
          {/* Search */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ CONTENT - Two-column with sidebar filters
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          {/* Sidebar */}
          <aside className={styles.faqSidebar}>
            <h3>Categories</h3>
            <nav className={styles.categoryNav}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  <span className={styles.categoryCount}>
                    {cat.id === "all" 
                      ? faqs.length 
                      : faqs.filter(f => f.category === cat.id).length}
                  </span>
                </button>
              ))}
            </nav>
            
            <div className={styles.sidebarCta}>
              <h4>Still have questions?</h4>
              <p>Our team is here to help.</p>
              <Link className="btn btn-secondary" href="/docs">Contact support</Link>
            </div>
          </aside>
          
          {/* FAQ List */}
          <div className={styles.faqList} ref={faqListRef}>
            {filteredFaqs.length === 0 ? (
              <div className={styles.noResults}>
                <p>No questions match your search.</p>
                <button 
                  type="button" 
                  className={styles.clearBtn}
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, i) => (
                <article key={faq.question} className={`${styles.faqItem} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className={styles.faqCategoryTag}>
                    {categories.find(c => c.id === faq.category)?.label}
                  </div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          QUICK LINKS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.linksSection}>
        <div className={styles.linksInner}>
          <div className={styles.linksHeader}>
            <span className={styles.sectionLabel}>Resources</span>
            <h2 className={styles.sectionTitle}>Need more detail?</h2>
          </div>
          
          <div className={styles.linksGrid}>
            <Link href="/docs" className={styles.linkCard}>
              <div>
                <h3>Documentation</h3>
                <p>Detailed guides and API references</p>
              </div>
            </Link>
            <Link href="/workflow" className={styles.linkCard}>
              <div>
                <h3>Workflow Guide</h3>
                <p>See how the execution flow works</p>
              </div>
            </Link>
            <Link href="/use-cases" className={styles.linkCard}>
              <div>
                <h3>Use Cases</h3>
                <p>Real examples from teams like yours</p>
              </div>
            </Link>
            <Link href="/pricing" className={styles.linkCard}>
              <div>
                <h3>Pricing</h3>
                <p>Plans and feature comparison</p>
              </div>
            </Link>
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
              <h2>Ready to try Prodvo?</h2>
              <p>
                Start your free trial and see the answers in action.
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
