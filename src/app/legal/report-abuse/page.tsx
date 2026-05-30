import { SiteShell } from "@/components/site-shell";
import { APP_DOMAIN, APP_NAME } from "@/lib/config";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function ReportAbusePage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Report Abuse</h1>
          <p className={styles.heroSub}>
            Use this page to report suspected abuse, security issues, policy violations, or misuse
            of the {APP_NAME} platform.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Response target:</strong> Initial review within 24 hours for critical reports
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="Report abuse contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#what-to-report">1. What to Report</a>
              </li>
              <li>
                <a href="#submit">2. Submit an Abuse Report</a>
              </li>
              <li>
                <a href="#expectations">3. What Happens Next</a>
              </li>
              <li>
                <a href="#false-reports">4. False or Bad-Faith Reports</a>
              </li>
              <li>
                <a href="#appeals">5. Appeals and Follow-up</a>
              </li>
              <li>
                <a href="#contacts">6. Direct Contacts</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="what-to-report">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>What to Report</h2>
            <div className={styles.sectionContent}>
              <p>
                You may use this process to report content or behavior that appears unlawful,
                harmful, abusive, or in breach of {APP_NAME} policies.
              </p>
              <ul>
                <li>Security vulnerabilities, account compromise, or unauthorized access attempts.</li>
                <li>Malicious code distribution or exploit delivery through workspace activity.</li>
                <li>Copyright, trademark, or other intellectual property infringement claims.</li>
                <li>Harassment, threats, or harmful content shared through the service.</li>
                <li>Impersonation, fraud, or deceptive usage patterns.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="submit">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Submit an Abuse Report</h2>
            <div className={styles.sectionContent}>
              <p>
                Include as much detail as possible so our trust and security team can investigate
                quickly. High-quality reports include reproducible steps, timestamps, and affected
                workspace or account identifiers.
              </p>
              <div className={styles.reportForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="reporter-name">
                      Your name
                    </label>
                    <input
                      className={styles.formInput}
                      id="reporter-name"
                      name="reporter-name"
                      type="text"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="reporter-email">
                      Email
                    </label>
                    <input
                      className={styles.formInput}
                      id="reporter-email"
                      name="reporter-email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="abuse-type">
                    Abuse category
                  </label>
                  <select className={styles.formSelect} id="abuse-type" name="abuse-type" defaultValue="">
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="security">Security vulnerability</option>
                    <option value="malware">Malware or malicious code</option>
                    <option value="ip">Copyright or IP violation</option>
                    <option value="harassment">Harassment or harmful content</option>
                    <option value="account">Account compromise</option>
                    <option value="other">Other policy violation</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="workspace-id">
                      Workspace or account ID
                    </label>
                    <input
                      className={styles.formInput}
                      id="workspace-id"
                      name="workspace-id"
                      type="text"
                      placeholder="ws_12345"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="incident-time">
                      Incident date/time
                    </label>
                    <input
                      className={styles.formInput}
                      id="incident-time"
                      name="incident-time"
                      type="text"
                      placeholder="2026-04-02 08:10 UTC"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="abuse-details">
                    Detailed report
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    id="abuse-details"
                    name="abuse-details"
                    placeholder="Describe what happened, how it can be reproduced, and who is affected."
                  />
                  <p className={styles.formHint}>
                    Do not include unnecessary sensitive personal data. Include only what is
                    required for investigation.
                  </p>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="evidence-link">
                    Evidence link (optional)
                  </label>
                  <input
                    className={styles.formInput}
                    id="evidence-link"
                    name="evidence-link"
                    type="url"
                    placeholder="https://..."
                  />
                </div>

                <div className={styles.reportActions}>
                  <p className={styles.reportNote}>
                    For immediate security issues, email{" "}
                    <a href={`mailto:security@${APP_DOMAIN}`}>{`security@${APP_DOMAIN}`}</a>.
                  </p>
                  <button className="btn btn-primary" type="button">
                    Submit report
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} id="expectations">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>What Happens Next</h2>
            <div className={styles.sectionContent}>
              <ol>
                <li>We triage report severity and confirm receipt where possible.</li>
                <li>We investigate logs, metadata, and affected systems.</li>
                <li>We may request additional details from the reporter.</li>
                <li>We take remediation actions, including account restrictions if needed.</li>
                <li>We communicate outcome and any required follow-up steps.</li>
              </ol>
              <p>
                Investigation timelines vary based on report complexity, impacted systems, and
                legal requirements.
              </p>
            </div>
          </section>

          <section className={styles.section} id="false-reports">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>False or Bad-Faith Reports</h2>
            <div className={styles.sectionContent}>
              <p>
                Submitting intentionally false, malicious, or misleading reports may itself be
                treated as abuse under {APP_NAME} policies.
              </p>
              <div className={`${styles.callout} ${styles.calloutImportant}`}>
                <p>
                  Abuse reporting channels are for good-faith safety and compliance use. Do not use
                  them to disrupt competitors, harass users, or submit fabricated claims.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="appeals">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Appeals and Follow-up</h2>
            <div className={styles.sectionContent}>
              <p>
                If you are directly impacted by an enforcement decision and believe it was made in
                error, you may request review by replying to the case communication thread or
                contacting legal support.
              </p>
              <ul>
                <li>Include case references, supporting context, and any corrective actions taken.</li>
                <li>
                  We evaluate appeals using available evidence, platform policy, and applicable law.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="contacts">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>Direct Contacts</h2>
            <div className={styles.sectionContent}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Trust and safety</span>
                <p>
                  <strong>Security:</strong>{" "}
                  <a href={`mailto:security@${APP_DOMAIN}`}>{`security@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Legal:</strong> <a href={`mailto:legal@${APP_DOMAIN}`}>{`legal@${APP_DOMAIN}`}</a>
                </p>
                <p>
                  <strong>Support:</strong>{" "}
                  <a href={`mailto:support@${APP_DOMAIN}`}>{`support@${APP_DOMAIN}`}</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/report-abuse" />
        </div>
      </article>
    </SiteShell>
  );
}
