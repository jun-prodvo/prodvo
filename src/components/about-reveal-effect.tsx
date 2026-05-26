"use client";

import { useEffect } from "react";

export function AboutRevealEffect() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    let observer: IntersectionObserver | null = null;

    const revealAll = () => {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    };

    const setupObserver = () => {
      if (!("IntersectionObserver" in window)) {
        revealAll();
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );
      revealEls.forEach((el) => observer?.observe(el));
    };

    if (mediaQuery.matches) {
      revealAll();
    } else {
      setupObserver();
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}
