"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import styles from "../auth-pages.module.css";
import { APP_DOMAIN } from "@/lib/config";

export default function SignUpPage() {
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestSubmitted(true);
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authWrap}>
        <div className={styles.topBar}>
          <Link href="/" className="brand">
            <div className="prodvo-logo sz-nav expanded">
              <span className="logo-prefix">P/</span>
              <div className="logo-word-wrap"><span className="logo-word">Prodvo</span></div>
              <span className="logo-dot">.</span>
            </div>
          </Link>
          <p className={styles.topLink}>
            Already have access? <Link href="/sign-in">Sign in</Link>
          </p>
        </div>

        <div className={styles.authGrid}>
          <section className={styles.infoPanel}>
            <span className={styles.eyebrow}>Invitation only</span>
            <h1 className={styles.title}>Prodvo is in high demand right now</h1>
            <p className={styles.subtitle}>
              We are onboarding in controlled waves so every invited team receives a stable
              workspace, responsive support, and a smooth rollout experience.
            </p>
            <ul className={styles.featureList}>
              <li>Invitations are issued by the Prodvo team.</li>
              <li>Priority is given to active shipping teams.</li>
              <li>Selected teams receive guided setup support.</li>
            </ul>
          </section>

          <section className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Request invitation</h2>
            <p className={styles.panelSub}>
              Complete the form so our team can review your invitation request.
            </p>

            <form className={styles.authForm} onSubmit={handleRequestSubmit} noValidate>
              <fieldset className={styles.formFieldset}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="signup-name">
                    Full name
                  </label>
                  <input
                    className={styles.input}
                    id="signup-name"
                    name="signup-name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="signup-email">
                    Work email
                  </label>
                  <input
                    className={styles.input}
                    id="signup-email"
                    name="signup-email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="signup-company">
                    Company
                  </label>
                  <input
                    className={styles.input}
                    id="signup-company"
                    name="signup-company"
                    type="text"
                    placeholder="Company name"
                  />
                </div>

                <button className={styles.primaryButton} type="submit">
                  Submit invitation request
                </button>
                {requestSubmitted ? (
                  <p
                    className={`${styles.formFeedback} ${styles.formFeedbackSuccess}`}
                    role="status"
                    aria-live="polite"
                  >
                    Success. Our team will be in touch as soon as possible.
                  </p>
                ) : null}
              </fieldset>
            </form>

            <div className={styles.notice}>
              Need an invite? Contact <a href={`mailto:support@${APP_DOMAIN}`}>{`support@${APP_DOMAIN}`}</a>{" "}
              with your team context and expected usage.
            </div>

            <p className={styles.helper}>
              If your workspace is already provisioned, <Link href="/sign-in">sign in here</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
