import Link from "next/link";
import styles from "@/app/legal/legal.module.css";

type LegalLinksProps = {
  current?: string;
  title?: string;
};

const LEGAL_LINKS = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/commercial", label: "Commercial Agreement" },
  { href: "/legal/dpa", label: "Data Processing Agreement" },
  { href: "/legal/report-abuse", label: "Report Abuse" },
] as const;

export function LegalLinks({ current, title = "Other Legal Documents" }: LegalLinksProps) {
  return (
    <nav className={styles.legalNav} aria-label="Legal navigation">
      <h3 className={styles.legalNavTitle}>{title}</h3>
      <ul className={styles.legalNavList}>
        {LEGAL_LINKS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={item.href === current ? styles.legalNavCurrent : undefined}
              aria-current={item.href === current ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
