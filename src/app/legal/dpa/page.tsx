import { SiteShell } from "@/components/site-shell";
import { APP_DOMAIN, APP_NAME } from "@/lib/config";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function DpaPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Data Processing Agreement (DPA)</h1>
          <p className={styles.heroSub}>
            This DPA governs processing of personal data by {APP_NAME} when acting as processor on
            behalf of customers using the platform.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Effective date:</strong> April 2, 2026
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="DPA contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#roles">1. Roles and Scope</a>
              </li>
              <li>
                <a href="#instructions">2. Processing Instructions</a>
              </li>
              <li>
                <a href="#security">3. Security Measures</a>
              </li>
              <li>
                <a href="#subprocessors">4. Subprocessors</a>
              </li>
              <li>
                <a href="#customer-obligations">5. Customer Instructions and Obligations</a>
              </li>
              <li>
                <a href="#transfers">6. International Transfers</a>
              </li>
              <li>
                <a href="#assistance">7. Data Subject Assistance</a>
              </li>
              <li>
                <a href="#incidents">8. Security Incident Notice</a>
              </li>
              <li>
                <a href="#deletion">9. Return and Deletion</a>
              </li>
              <li>
                <a href="#audit">10. Audit and Information Rights</a>
              </li>
              <li>
                <a href="#records">11. Records and Cooperation</a>
              </li>
              <li>
                <a href="#liability">12. Liability and Precedence</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="roles">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>Roles and Scope</h2>
            <div className={styles.sectionContent}>
              <p>
                Customer is the controller (or business) and {APP_NAME} is the processor (or service
                provider) for personal data submitted to the platform under the main service
                agreement.
              </p>
              <p>
                This DPA applies to personal data processed in connection with workspace operation,
                workflow execution, metadata logging, and support activity.
              </p>
            </div>
          </section>

          <section className={styles.section} id="instructions">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Processing Instructions</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} processes personal data only on documented instructions from customer,
                including instructions communicated through product configuration, API requests, and
                support tickets.
              </p>
              <p>
                If {APP_NAME} believes an instruction violates applicable data protection law, {APP_NAME}
                will notify customer unless prohibited by law.
              </p>
            </div>
          </section>

          <section className={styles.section} id="security">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>Security Measures</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} implements technical and organizational safeguards appropriate to risk,
                including access controls, encryption safeguards, environment segregation, and
                incident response procedures.
              </p>
              <p>
                Security controls may evolve, provided overall protection is not materially reduced.
              </p>
            </div>
          </section>

          <section className={styles.section} id="subprocessors">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>Subprocessors</h2>
            <div className={styles.sectionContent}>
              <p>
                Customer authorizes {APP_NAME} to use subprocessors for infrastructure, support, and
                operational delivery, subject to written agreements imposing data protection
                obligations materially equivalent to this DPA.
              </p>
              <p>
                {APP_NAME} remains responsible for subprocessors&apos; performance of data protection
                obligations.
              </p>
            </div>
          </section>

          <section className={styles.section} id="customer-obligations">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Customer Instructions and Obligations</h2>
            <div className={styles.sectionContent}>
              <p>
                Customer is responsible for determining a lawful basis for processing and for
                ensuring that instructions provided to {APP_NAME} are lawful, documented, and aligned
                with applicable data protection law.
              </p>
              <ul>
                <li>
                  Customer remains responsible for data quality, accuracy, and permitted collection.
                </li>
                <li>
                  Customer should avoid sending special category or highly regulated data unless
                  expressly covered by written terms.
                </li>
                <li>
                  Customer must configure workspace access using least-privilege principles.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="transfers">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>International Transfers</h2>
            <div className={styles.sectionContent}>
              <p>
                Where personal data is transferred internationally, {APP_NAME} will use recognized legal
                transfer mechanisms required by applicable law.
              </p>
            </div>
          </section>

          <section className={styles.section} id="assistance">
            <span className={styles.sectionNumber}>Section 7</span>
            <h2 className={styles.sectionTitle}>Data Subject Assistance</h2>
            <div className={styles.sectionContent}>
              <p>
                Taking into account the nature of processing, {APP_NAME} will provide reasonable
                assistance to customer for handling data subject rights requests and regulatory
                obligations.
              </p>
              <ul>
                <li>Assistance may include search, export, correction, restriction, or deletion support.</li>
                <li>
                  Customer remains responsible for evaluating request validity and issuing final
                  responses to data subjects unless required otherwise by law.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="incidents">
            <span className={styles.sectionNumber}>Section 8</span>
            <h2 className={styles.sectionTitle}>Security Incident Notice</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} will notify customer without undue delay after confirming a security incident
                affecting customer personal data and provide available details necessary for
                customer legal compliance.
              </p>
              <p>
                Notification includes known incident scope, likely impact, and remediation steps in
                progress, subject to legal and security constraints.
              </p>
            </div>
          </section>

          <section className={styles.section} id="deletion">
            <span className={styles.sectionNumber}>Section 9</span>
            <h2 className={styles.sectionTitle}>Return and Deletion</h2>
            <div className={styles.sectionContent}>
              <p>
                Upon termination of services, {APP_NAME} will return or delete customer personal data
                according to contractual terms and lawful retention obligations.
              </p>
              <p>
                Customer may request deletion workflows and account closure through approved support
                channels.
              </p>
            </div>
          </section>

          <section className={styles.section} id="audit">
            <span className={styles.sectionNumber}>Section 10</span>
            <h2 className={styles.sectionTitle}>Audit and Information Rights</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} will make available information reasonably necessary to demonstrate
                compliance with this DPA, including security documentation appropriate to the
                customer plan and legal requirements.
              </p>
              <p>
                Where contractually available, audits may be performed under confidentiality and
                security safeguards.
              </p>
            </div>
          </section>

          <section className={styles.section} id="records">
            <span className={styles.sectionNumber}>Section 11</span>
            <h2 className={styles.sectionTitle}>Records and Cooperation</h2>
            <div className={styles.sectionContent}>
              <p>
                {APP_NAME} maintains processor records required by applicable law and cooperates with
                supervisory authority inquiries to the extent legally required.
              </p>
              <p>
                Customer and {APP_NAME} will coordinate in good faith where regulatory communications,
                complaints, or investigations involve customer personal data processed under this DPA.
              </p>
            </div>
          </section>

          <section className={styles.section} id="liability">
            <span className={styles.sectionNumber}>Section 12</span>
            <h2 className={styles.sectionTitle}>Liability and Precedence</h2>
            <div className={styles.sectionContent}>
              <p>
                Liability under this DPA is subject to the allocation and caps in the applicable
                master service or commercial agreement, unless prohibited by law.
              </p>
              <p>
                If this DPA conflicts with the main agreement on data protection issues, this DPA
                prevails for those issues.
              </p>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Data protection contact</span>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:privacy@${APP_DOMAIN}`}>{`privacy@${APP_DOMAIN}`}</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/dpa" />
        </div>
      </article>
    </SiteShell>
  );
}
