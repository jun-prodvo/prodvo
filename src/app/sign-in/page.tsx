"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import styles from "../auth-pages.module.css";

export default function SignInPage() {
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleSignInSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignInError("User not found or credentials is wrong.");
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
            New to Prodvo? <Link href="/sign-up">Request invitation access</Link>
          </p>
        </div>

        <div className={styles.authGrid}>
          <section className={styles.infoPanel}>
            <span className={styles.eyebrow}>Account access</span>
            <h1 className={styles.title}>Sign in and continue shipping</h1>
            <p className={styles.subtitle}>
              Return to your active workspace, checkpoints, and deployment workflows with your
              organization credentials.
            </p>
            <ul className={styles.featureList}>
              <li>Resume active run sessions and environment previews.</li>
              <li>Review checkpoint history and release progress.</li>
              <li>Manage plan usage and team access settings.</li>
            </ul>
          </section>

          <section className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Welcome back</h2>
            <p className={styles.panelSub}>Use your workspace credentials to continue.</p>

            <form className={styles.authForm} onSubmit={handleSignInSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="signin-email">
                  Work email
                </label>
                <input
                  className={styles.input}
                  id="signin-email"
                  name="signin-email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="signin-password">
                  Password
                </label>
                <input
                  className={styles.input}
                  id="signin-password"
                  name="signin-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>

              <button className={styles.primaryButton} type="submit">
                Sign in
              </button>
              {signInError ? (
                <p
                  className={`${styles.formFeedback} ${styles.formFeedbackError}`}
                  role="alert"
                  aria-live="assertive"
                >
                  {signInError}
                </p>
              ) : null}
            </form>

            <p className={styles.helper}>
              Need access first? <Link href="/sign-up">Open invitation request</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
