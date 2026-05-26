"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { APP_NAME, APP_LOGO_PREFIX } from "@/lib/config";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/workflow", label: "Workflow" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerLogoRef = useRef<HTMLDivElement>(null);
  const footerLogoRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  // Handle scroll state and logo collapse/expand
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
      
      // Collapse/expand header logo based on scroll
      if (headerLogoRef.current) {
        if (isScrolled) {
          headerLogoRef.current.classList.remove("expanded");
        } else {
          headerLogoRef.current.classList.add("expanded");
        }
      }
    };
    
    // Initial call after a brief delay to allow mount animation
    const timer = setTimeout(onScroll, 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Expand logos on mount with animation
  useEffect(() => {
    // Header logo - start with morph animation (collapse then expand)
    if (headerLogoRef.current) {
      // Ensure no transition initially for instant collapse
      const wordWrap = headerLogoRef.current.querySelector(".logo-word-wrap") as HTMLElement;
      const word = headerLogoRef.current.querySelector(".logo-word") as HTMLElement;
      
      if (wordWrap && word) {
        // Disable transitions
        wordWrap.style.transition = "none";
        word.style.transition = "none";
        
        // Force collapsed state
        headerLogoRef.current.classList.remove("expanded");
        
        // Re-enable transitions after next frame and expand
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            wordWrap.style.transition = "";
            word.style.transition = "";
            headerLogoRef.current?.classList.add("expanded");
          });
        });
      }
    }
    
    // Footer logo - same animation with slight delay
    if (footerLogoRef.current) {
      const wordWrap = footerLogoRef.current.querySelector(".logo-word-wrap") as HTMLElement;
      const word = footerLogoRef.current.querySelector(".logo-word") as HTMLElement;
      
      if (wordWrap && word) {
        wordWrap.style.transition = "none";
        word.style.transition = "none";
        footerLogoRef.current.classList.remove("expanded");
        
        setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              wordWrap.style.transition = "";
              word.style.transition = "";
              footerLogoRef.current?.classList.add("expanded");
            });
          });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement-wrap">
        <div className="container">
          <p className="announcement">
            {APP_NAME} is now live — start building your product today.
            <Link href="/pricing"> Get started free</Link>
          </p>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? " scrolled" : ""}${mobileOpen ? " mobile-open" : ""}`}
      >
        <div className="container nav-row">
          <Link className="brand" href="/">
            <div className="prodvo-logo sz-nav" ref={headerLogoRef}>
              <span className="logo-prefix">{APP_LOGO_PREFIX}</span>
              <div className="logo-word-wrap"><span className="logo-word">{APP_NAME}</span></div>
              <span className="logo-dot">.</span>
            </div>
          </Link>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="btn btn-header" href="/pricing">
              Start now
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={mobileOpen}
              aria-controls="mobile-panel"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>

        <div id="mobile-panel" className="mobile-panel" role="menu">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="brand" href="/">
                <div className="prodvo-logo sz-xs" ref={footerLogoRef}>
                  <span className="logo-prefix">{APP_LOGO_PREFIX}</span>
                  <div className="logo-word-wrap"><span className="logo-word">{APP_NAME}</span></div>
                  <span className="logo-dot">.</span>
                </div>
              </Link>
              <p>
                AI coding agent workspace for teams that want speed, control, and
                production-grade outcomes in one place.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <Link href="/product">Platform</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/use-cases">Use cases</Link>
                </li>
                <li>
                  <Link href="/workflow">Workflow</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-col-no-label">
              <ul>
                <li>
                  <Link href="/compare/bolt">{APP_NAME} vs Bolt</Link>
                </li>
                <li>
                  <Link href="/compare/lovable">{APP_NAME} vs Lovable</Link>
                </li>
                <li>
                  <Link href="/compare/replit">{APP_NAME} vs Replit</Link>
                </li>
                <li>
                  <Link href="/compare/v0">{APP_NAME} vs v0</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/docs">Docs</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/legal/commercial">Commercial Agreement</Link>
                </li>
                <li>
                  <Link href="/legal/dpa">Data Processing Agreement</Link>
                </li>
                <li>
                  <Link href="/legal/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/legal/report-abuse">Report Abuse</Link>
                </li>
                <li>
                  <Link href="/legal/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">Copyright {year} {APP_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
