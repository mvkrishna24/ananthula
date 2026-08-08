"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { brand } from "@/data/brand";

const sareeSubNav = [
  { label: "Kanchipuram Pattu", href: "/collections/pattu#kanchi-kanchipuram-pattu" },
  { label: "Pure Pattu", href: "/collections/pattu#pure-pattu" },
  { label: "Bridal", href: "/collections/pattu#bridal-pattu" },
  { label: "Designer & Fancy", href: "/collections/pattu#designer-fancy" },
];

const primaryNav = [
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Sarees", href: "/collections/pattu", children: sareeSubNav },
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Kids", href: "/collections/kids" },
  { label: "Wedding", href: "/collections/wedding" },
  { label: "Festivals", href: "/#festivals" },
  { label: "Our Story", href: "/legacy" },
  { label: "Stores", href: "/stores" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll + keyboard handling while menu is open
  useEffect(() => {
    if (!open) return;
    const menuButton = menuButtonRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      menuButton?.focus();
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled && !open;

  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          transparent
            ? "on-dark bg-transparent text-ivory"
            : "border-b border-ink/10 bg-rice/92 text-ink backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label={`${brand.name} — home`}
          >
            <span className="font-display text-[1.05rem] tracking-[0.14em] uppercase sm:text-[1.2rem]">
              {brand.name}
            </span>
            <span className="eyebrow mt-1 !text-[0.56rem] opacity-70">
              Since {brand.since} · {brand.city}
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 xl:flex"
          >
            {primaryNav.slice(0, 6).map((item) =>
              item.children ? (
                <div key={item.label} className="group/dd relative">
                  <Link
                    href={item.href}
                    className="link-underline !pb-1 !text-[0.68rem]"
                    aria-haspopup="true"
                  >
                    {item.label}
                  </Link>
                  {/* dropdown — hover and keyboard (focus-within) friendly */}
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within/dd:visible group-focus-within/dd:opacity-100 group-hover/dd:visible group-hover/dd:opacity-100">
                    <div className="w-56 border border-ink/10 bg-rice p-2 text-ink shadow-[0_24px_50px_-24px_rgba(17,17,15,0.35)]">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[0.8rem] text-ink/75 transition-colors hover:bg-ivory hover:text-ink focus-visible:bg-ivory focus-visible:text-ink"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="link-underline !pb-1 !text-[0.68rem]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hidden !pb-1 !text-[0.68rem] md:inline-flex"
            >
              WhatsApp
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="fullscreen-menu"
              className="eyebrow flex min-h-11 items-center gap-3 !text-[0.68rem]"
            >
              <span className="hidden sm:inline">Menu</span>
              <span aria-hidden className="flex w-7 flex-col gap-[7px]">
                <span className="h-px w-full bg-current transition-transform duration-300" />
                <span className="h-px w-full bg-current transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu */}
      <div
        id="fullscreen-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`on-dark fixed inset-0 z-[60] bg-charcoal text-ivory transition-[opacity,visibility] duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grain relative flex h-full flex-col overflow-y-auto">
          <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
            <span className="font-display text-[1.05rem] uppercase tracking-[0.14em] sm:text-[1.2rem]">
              {brand.name}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={toggle}
              className="eyebrow flex min-h-11 items-center gap-3 !text-[0.68rem]"
            >
              Close
              <span aria-hidden className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav
            aria-label="Fullscreen"
            className="mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 pb-16 sm:px-8 lg:px-12"
          >
            <ol className="grid gap-x-16 gap-y-2 md:grid-cols-2">
              {primaryNav.map((item, i) => (
                <li
                  key={item.href + item.label}
                  className="border-b border-ivory/10"
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline gap-5 py-3 md:py-4"
                  >
                    <span className="eyebrow !text-[0.6rem] text-zari-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[clamp(1.7rem,4.2vw,3.2rem)] leading-tight transition-transform duration-500 group-hover:translate-x-3 group-focus-visible:translate-x-3">
                      {item.label}
                    </span>
                  </Link>
                  {item.children && (
                    <div className="flex flex-wrap gap-x-6 gap-y-1 pb-4 pl-12">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={close}
                          className="text-[0.82rem] text-ivory/60 transition-colors hover:text-zari-bright focus-visible:text-zari-bright"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Chat on WhatsApp
              </a>
              <a href={brand.phoneHref} className="link-underline">
                Call the Store
              </a>
              <p className="eyebrow !text-[0.6rem] opacity-60">
                Dressing generations since {brand.since}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
