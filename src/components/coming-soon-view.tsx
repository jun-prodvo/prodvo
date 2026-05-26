import Link from "next/link";
import styles from "@/app/legal/legal.module.css";

type ComingSoonViewProps = {
  label: string;
  title: string;
  description: string;
};

export function ComingSoonView({ label, title, description }: ComingSoonViewProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>{label}</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSub}>{description}</p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <section className={styles.section}>
            <span className={styles.sectionNumber}>Status</span>
            <h2 className={styles.sectionTitle}>Coming Soon</h2>
            <div className={styles.sectionContent}>
              <p>
                We are currently preparing this page content. Please check back soon for the full
                version.
              </p>
              <p>
                In the meantime, <Link href="/pricing">view pricing</Link> or{" "}
                <Link href="/faq">read FAQ</Link>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
