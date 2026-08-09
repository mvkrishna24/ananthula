"use client";

import { useEffect, useState } from "react";
import { brand } from "@/data/brand";

/**
 * Persistent mobile conversion bar — Call / WhatsApp / Directions.
 * Appears after the visitor scrolls past the hero; never covers the footer
 * conversation actions thanks to safe-area padding and small height.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Quick contact"
      className={`on-dark fixed inset-x-3 bottom-3 z-40 transition-all duration-500 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-ivory/15 overflow-hidden rounded-sm border border-zari/40 bg-ink/92 text-ivory shadow-2xl backdrop-blur-md">
        <a
          href={brand.phoneHref}
          className="eyebrow flex min-h-12 items-center justify-center !text-[0.62rem]"
        >
          Call
        </a>
        <a
          href={brand.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow flex min-h-12 items-center justify-center !text-[0.62rem] text-zari-bright"
        >
          WhatsApp
        </a>
        <a
          href={brand.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow flex min-h-12 items-center justify-center !text-[0.62rem]"
        >
          Directions
        </a>
      </div>
    </nav>
  );
}
