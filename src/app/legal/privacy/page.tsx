import Link from "next/link";
import { APP_DOMAIN, APP_NAME } from "@/lib/config";
import { SiteShell } from "@/components/site-shell";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>
            This Privacy Policy explains what data {APP_NAME} processes, how and why it is
            processed, and what rights users and customers have over their personal data.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Effective date:</strong> April 2, 2026
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="Privacy policy contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#scope">1. Scope and Relationship to Other Terms</a>
              </li>
              <li>
                <a href="#controller">2. Controller and Contact Details</a>
              </li>
              <li>
                <a href="#data-we-collect">3. Data We Collect</a>
              </li>
              <li>
                <a href="#sources">4. Data Sources and Required Fields</a>
              </li>
              <li>
                <a href="#purposes-bases">5. Purposes and Legal Bases</a>
              </li>
              <li>
                <a href="#cookies">6. Cookies and Similar Technologies</a>
              </li>
              <li>
                <a href="#sharing">7. Recipients and Subprocessors</a>
              </li>
              <li>
                <a href="#international">8. International Data Transfers</a>
              </li>
              <li>
                <a href="#security">9. Security Controls</a>
              </li>
              <li>
                <a href="#retention">10. Retention and Deletion</a>
              </li>
              <li>
                <a href="#children">11. Children and Minors</a>
              </li>
              <li>
                <a href="#rights">12. Your Privacy Rights</a>
              </li>
              <li>
                <a href="#exercise-rights">13. How to Exercise Rights and File Complaints</a>
              </li>
              <li>
                <a href="#automated-decisions">14. Automated Processing and Profiling</a>
              </li>
              <li>
                <a href="#updates">15. Policy Updates</a>
              </li>
              <li>
                <a href="#contact">16. Contact</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="scope">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>Scope and Relationship to Other Terms</h2>
            <div className={styles.sectionContent}>
              <p>
                This policy applies to personal data processed by {APP_NAME} across the public website,
                legal pages, product experiences, APIs, customer support, and related operational
                workflows.
              </p>
              <p>
                This Privacy Policy should be read with the{" "}
                <Link href="/legal/terms">Terms of Service</Link>,{" "}
                <Link href="/legal/commercial">Commercial Agreement</Link>, and{" "}
                <Link href="/legal/dpa">Data Processing Agreement</Link>.
              </p>
              <p>
                Where a signed enterprise agreement or DPA sets specific processing terms, that
                agreement governs for the covered customer relationship.
              </p>
            </div>
          </section>

          <section className={styles.section} id="controller">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Controller and Contact Details</h2>
            <div className={styles.sectionContent}>
              <p>
                For the processing described in this policy, {APP_NAME} acts as the data controller
                for account, billing, support, security, and product operations data.
              </p>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Controller contact</span>
                <p>
                  <strong>Privacy:</strong>{" "}
                  <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Legal:</strong> <a href={`mailto:legal@${APP_DOMAIN}`}>{`legal@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Security:</strong>{" "}
                  <a href={`mailto:security@${APP_DOMAIN}`}>{`security@${APP_DOMAIN}`}</a>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="data-we-collect">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>Data We Collect</h2>
            <div className={styles.sectionContent}>
              <p>
                Depending on how you use {APP_NAME}, we may process the following categories of
                personal data:
              </p>
              <ul>
                <li>
                  <strong>Identity and account data:</strong> name, work email, organization,
                  workspace membership, role, plan tier, and account preferences.
                </li>
                <li>
                  <strong>Authentication and access data:</strong> login events, session metadata,
                  IP address, device and browser characteristics, and security events.
                </li>
                <li>
                  <strong>Workspace and run metadata:</strong> run history, checkpoints, approval
                  events, rollback events, audit trail entries, and operational status metadata.
                </li>
                <li>
                  <strong>Integration metadata:</strong> repository connection settings, integration
                  scopes, OAuth authorization metadata, and related administrative configuration.
                </li>
                <li>
                  <strong>Billing and commercial data:</strong> subscription status, invoices,
                  transaction references, and finance-related support interactions.
                </li>
                <li>
                  <strong>Support and communication data:</strong> support tickets, messages, legal
                  inquiries, abuse reports, and attached evidence.
                </li>
                <li>
                  <strong>Telemetry and diagnostics:</strong> product usage events, performance
                  traces, reliability metrics, and anti-abuse signals.
                </li>
              </ul>
              <div className={`${styles.callout} ${styles.calloutImportant}`}>
                <p>
                  Consistent with statements on product pages, customer project content is not used
                  to train foundation models. Source code typically remains in connected customer
                  repositories, while {APP_NAME} processes operational metadata needed to deliver the
                  service.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="sources">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>Data Sources and Required Fields</h2>
            <div className={styles.sectionContent}>
              <p>We collect personal data from multiple sources:</p>
              <ul>
                <li>
                  <strong>Directly from you:</strong> account creation, workspace setup, support
                  requests, legal contacts, and abuse reports.
                </li>
                <li>
                  <strong>From your organization administrators:</strong> seat assignment, role
                  grants, and workspace management actions.
                </li>
                <li>
                  <strong>From connected services:</strong> authentication and integration metadata
                  from providers you authorize.
                </li>
                <li>
                  <strong>Automatically from product use:</strong> logs, diagnostics, and run
                  metadata generated as part of normal platform operation.
                </li>
              </ul>
              <p>
                Some fields are required to create and secure an account, process billing, or
                provide contractual services. Optional fields can usually be skipped, but this may
                reduce feature completeness or support responsiveness.
              </p>
            </div>
          </section>

          <section className={styles.section} id="purposes-bases">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Purposes and Legal Bases</h2>
            <div className={styles.sectionContent}>
              <p>{APP_NAME} processes personal data for the following purposes:</p>
              <ul>
                <li>
                  <strong>Service delivery and account administration</strong> (contract
                  performance).
                </li>
                <li>
                  <strong>Run execution, checkpointing, rollback, and auditability</strong>
                  (contract performance and legitimate interests in reliable operations).
                </li>
                <li>
                  <strong>Security monitoring, abuse prevention, and incident response</strong>
                  (legitimate interests and legal obligations where applicable).
                </li>
                <li>
                  <strong>Billing, invoicing, and financial compliance</strong> (contract
                  performance and legal obligations).
                </li>
                <li>
                  <strong>Support, legal handling, and dispute management</strong> (contract
                  performance, legitimate interests, and legal obligations).
                </li>
                <li>
                  <strong>Product improvement and reliability analytics</strong> (legitimate
                  interests, and consent where legally required).
                </li>
                <li>
                  <strong>Marketing communications and optional updates</strong> (consent or
                  legitimate interests, depending on jurisdiction and communication type).
                </li>
              </ul>
              <p>
                Where consent is the legal basis, you may withdraw consent at any time without
                affecting prior lawful processing.
              </p>
            </div>
          </section>

          <section className={styles.section} id="cookies">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>Cookies and Similar Technologies</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} may use cookies, local storage, and similar technologies to support session
                continuity, security, preferences, analytics, and service performance.
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary technologies:</strong> required for core platform
                  functionality such as authentication, security, and session continuity.
                </li>
                <li>
                  <strong>Optional analytics or performance technologies:</strong> enabled and
                  operated according to local consent requirements.
                </li>
              </ul>
              <p>
                Where law requires consent for non-essential cookies or trackers, users can manage
                preferences and refuse optional categories. Consent choices may be refreshed after
                legally relevant periods.
              </p>
            </div>
          </section>

          <section className={styles.section} id="sharing">
            <span className={styles.sectionNumber}>Section 7</span>
            <h2 className={styles.sectionTitle}>Recipients and Subprocessors</h2>
            <div className={styles.sectionContent}>
              <p>
                We share data only where needed to operate {APP_NAME}, meet contractual commitments, or
                comply with legal obligations.
              </p>
              <ul>
                <li>
                  <strong>Infrastructure providers</strong> for hosting, compute, networking, and
                  storage.
                </li>
                <li>
                  <strong>Security and observability providers</strong> for monitoring, abuse
                  prevention, and reliability.
                </li>
                <li>
                  <strong>Billing and payment providers</strong> for subscription and invoice
                  operations.
                </li>
                <li>
                  <strong>Communication providers</strong> for transactional email and support
                  workflows.
                </li>
                <li>
                  <strong>Integration providers</strong> that you explicitly connect to your
                  workspace.
                </li>
                <li>
                  <strong>Authorities or advisors</strong> where required for legal, regulatory, or
                  enforcement reasons.
                </li>
              </ul>
              <p>
                We do not sell personal data. We require subprocessors to process data under
                documented instructions and appropriate confidentiality and security terms.
              </p>
            </div>
          </section>

          <section className={styles.section} id="international">
            <span className={styles.sectionNumber}>Section 8</span>
            <h2 className={styles.sectionTitle}>International Data Transfers</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} and its service providers may process data in jurisdictions outside your
                country. Where applicable law requires safeguards for international transfers, we
                use recognized mechanisms such as contractual safeguards and supplementary controls.
              </p>
              <p>
                Additional transfer information can be requested through{" "}
                <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a>.
              </p>
            </div>
          </section>

          <section className={styles.section} id="security">
            <span className={styles.sectionNumber}>Section 9</span>
            <h2 className={styles.sectionTitle}>Security Controls</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} applies layered administrative, technical, and organizational security
                controls designed to protect confidentiality, integrity, and availability.
              </p>
              <ul>
                <li>Encryption in transit and at rest for relevant service data.</li>
                <li>Access control layers, including role-based controls on qualifying plans.</li>
                <li>Auditability features such as run metadata and checkpoint trails.</li>
                <li>Security monitoring and incident response procedures.</li>
              </ul>
              <p>
                While no system can guarantee absolute security, we continuously review and improve
                controls to address evolving risk profiles.
              </p>
              <p>
                Security issues can be reported to{" "}
                <a href={`mailto:security@${APP_DOMAIN}`}>{`security@${APP_DOMAIN}`}</a>.
              </p>
            </div>
          </section>

          <section className={styles.section} id="retention">
            <span className={styles.sectionNumber}>Section 10</span>
            <h2 className={styles.sectionTitle}>Retention and Deletion</h2>
            <div className={styles.sectionContent}>
              <p>
                We retain personal data only as long as required for the purpose it was collected,
                to satisfy contractual and legal obligations, and to protect service and customer
                security.
              </p>
              <ul>
                <li>
                  <strong>Account and workspace records:</strong> retained for active service
                  delivery and post-termination legal or security requirements.
                </li>
                <li>
                  <strong>Operational logs and checkpoint metadata:</strong> currently described in
                  product materials as a 90-day default, with custom options available for eligible
                  enterprise customers.
                </li>
                <li>
                  <strong>Billing and invoice records:</strong> retained according to legal and
                  accounting obligations.
                </li>
                <li>
                  <strong>Support and abuse-report evidence:</strong> retained according to
                  investigation, legal, and security needs.
                </li>
              </ul>
              <p>
                At the end of applicable retention windows, data is deleted, de-identified, or
                archived under restricted legal-hold conditions.
              </p>
            </div>
          </section>

          <section className={styles.section} id="children">
            <span className={styles.sectionNumber}>Section 11</span>
            <h2 className={styles.sectionTitle}>Children and Minors</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} is designed for professional and organizational use. It is not intended for
                use by children under the age required by applicable data protection laws.
              </p>
              <p>
                If you believe a minor has provided personal data in violation of this policy,
                contact <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a> so we can review
                and take appropriate action.
              </p>
            </div>
          </section>

          <section className={styles.section} id="rights">
            <span className={styles.sectionNumber}>Section 12</span>
            <h2 className={styles.sectionTitle}>Your Privacy Rights</h2>
            <div className={styles.sectionContent}>
              <p>Subject to local law, you may have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal data.</li>
                <li>Correct inaccurate or incomplete personal data.</li>
                <li>Request deletion of personal data under applicable conditions.</li>
                <li>Restrict or object to certain processing activities.</li>
                <li>Receive portable data where portability applies.</li>
                <li>Withdraw consent where consent is the legal basis.</li>
                <li>
                  Object to direct marketing communications and related profiling where applicable.
                </li>
              </ul>
              <p>
                Some rights may be limited where processing is required for legal obligations,
                security needs, fraud prevention, or legal defense.
              </p>
            </div>
          </section>

          <section className={styles.section} id="exercise-rights">
            <span className={styles.sectionNumber}>Section 13</span>
            <h2 className={styles.sectionTitle}>
              How to Exercise Rights and File Complaints
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Rights requests can be submitted to{" "}
                <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a>. To protect account
                security, we may request verification before releasing or changing protected data.
              </p>
              <p>
                We aim to respond within applicable legal deadlines. Complex requests may require
                additional time where permitted by law.
              </p>
              <p>
                You may also lodge a complaint with your local supervisory authority, including the
                CNIL in France or another competent authority in your jurisdiction.
              </p>
            </div>
          </section>

          <section className={styles.section} id="automated-decisions">
            <span className={styles.sectionNumber}>Section 14</span>
            <h2 className={styles.sectionTitle}>Automated Processing and Profiling</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} uses automated systems to support run orchestration, product reliability,
                abuse detection, and operational prioritization.
              </p>
              <p>
                We do not intentionally use solely automated decision-making that produces legal
                effects on individuals without appropriate human review and legal basis.
              </p>
            </div>
          </section>

          <section className={styles.section} id="updates">
            <span className={styles.sectionNumber}>Section 15</span>
            <h2 className={styles.sectionTitle}>Policy Updates</h2>
            <div className={styles.sectionContent}>
              <p>
                We may update this Privacy Policy when laws, product functionality, integrations, or
                operational practices change.
              </p>
              <p>
                Material updates are posted on this page with a revised effective date. Where
                required, additional notice channels may be used.
              </p>
            </div>
          </section>

          <section className={styles.section} id="contact">
            <span className={styles.sectionNumber}>Section 16</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.sectionContent}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Privacy and legal channels</span>
                <p>
                  <strong>Privacy requests:</strong>{" "}
                  <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>General support:</strong>{" "}
                  <a href={`mailto:support@${APP_DOMAIN}`}>{`support@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Security reports:</strong>{" "}
                  <a href={`mailto:security@${APP_DOMAIN}`}>{`security@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Commercial and legal matters:</strong>{" "}
                  <a href={`mailto:legal@${APP_DOMAIN}`}>{`legal@${APP_DOMAIN}`}</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/privacy" />
        </div>
      </article>
    </SiteShell>
  );
}
