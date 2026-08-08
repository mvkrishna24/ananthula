"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const SEEN_KEY = "ak-intro-seen";

/**
 * The cinematic 1951 opening.
 *
 * WARANGAL → 1951 → a zari thread draws → "A LEGACY WAS WOVEN." → hero.
 * ~3s on first visit, skipped on return visits, absent for reduced motion,
 * dismissible with click / key / scroll. Marks <html data-intro-done> so the
 * hero choreographs its own entrance off the same clock.
 */
export function IntroSequence() {
  // Rendered active on the server so the first paint is the intro cover,
  // never a flash of the hero. A <noscript> rule hides it without JS.
  const [active, setActive] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const playRef = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* storage unavailable — treat as unseen */
    }

    if (prefersReducedMotion() || seen) {
      // skip the sequence on the next frame (async — no cascading render)
      const raf = requestAnimationFrame(() => {
        if (doneRef.current) return;
        doneRef.current = true;
        root.setAttribute("data-intro-done", "");
        setActive(false);
      });
      return () => cancelAnimationFrame(raf);
    }

    playRef.current = true;
  }, []);

  useEffect(() => {
    if (!active || !playRef.current || !rootRef.current) return;

    const { gsap } = getGsap();
    const root = document.documentElement;
    const el = rootRef.current;
    const q = gsap.utils.selector(el);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      // marked here (not on mount) so a StrictMode remount still plays
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      root.setAttribute("data-intro-done", "");
      gsap.to(el, {
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => setActive(false),
      });
    };

    const tl = gsap.timeline({ onComplete: finish });
    tl.fromTo(
      q("[data-intro='city']"),
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" },
    )
      .fromTo(
        q("[data-intro='year']"),
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "+=0.15",
      )
      .fromTo(
        q("[data-intro='thread']"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: "power4.inOut" },
        "-=0.25",
      )
      .fromTo(
        q("[data-intro='line']"),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35",
      )
      .to({}, { duration: 0.75 });

    const skip = () => {
      tl.kill();
      finish();
    };
    el.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });

    return () => {
      tl.kill();
      el.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <noscript>
        <style>{`[data-intro-cover]{display:none}`}</style>
      </noscript>
    <div
      ref={rootRef}
      aria-hidden
      data-intro-cover
      className="grain fixed inset-0 z-[80] flex items-center justify-center bg-[#0c0b09] text-ivory"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <p
          data-intro="city"
          className="eyebrow !tracking-[0.5em] text-ivory/70 opacity-0"
        >
          Warangal
        </p>
        <p
          data-intro="year"
          className="font-display text-[clamp(4.5rem,16vw,10rem)] leading-none text-ivory opacity-0"
        >
          1951
        </p>
        <div
          data-intro="thread"
          className="h-px w-[min(20rem,60vw)] origin-left scale-x-0 bg-gradient-to-r from-transparent via-zari-bright to-transparent"
        />
        <p
          data-intro="line"
          className="eyebrow !tracking-[0.34em] text-zari-bright opacity-0"
        >
          A legacy was woven.
        </p>
      </div>
    </div>
    </>
  );
}
