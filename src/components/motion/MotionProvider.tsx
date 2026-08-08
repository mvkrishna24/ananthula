"use client";

import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Site-wide motion runtime.
 *
 * 1. Arms the CSS reveal system (html[data-reveal-ready]) and drives it with
 *    a single IntersectionObserver — CSS does the animating, JS only flips a
 *    class. Content is fully visible without JS.
 * 2. Smooth-scrolls with Lenis on fine-pointer, motion-tolerant devices only,
 *    kept in sync with ScrollTrigger.
 */
export function MotionProvider() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const root = document.documentElement;
    root.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((el) => observer.observe(el));
    };
    observeAll();

    // catch client-side navigations / late content
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
      root.removeAttribute("data-reveal-ready");
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const finePointer = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    ).matches;
    if (!finePointer) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const { gsap, ScrollTrigger } = getGsap();
      const lenis = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
