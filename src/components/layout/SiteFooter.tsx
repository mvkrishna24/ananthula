import Link from "next/link";
import { brand } from "@/data/brand";

const footerLinks = [
  { label: "Legacy", href: "/legacy" },
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Kids", href: "/collections/kids" },
  { label: "Pattu & Sarees", href: "/collections/pattu" },
  { label: "Wedding", href: "/collections/wedding" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Stores", href: "/stores" },
];

export function SiteFooter() {
  return (
    <footer className="on-dark grain relative overflow-hidden bg-ink text-ivory">
      {/* the zari thread completes its journey */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zari to-transparent"
      />
      <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <p className="eyebrow text-zari-bright">
          1951 → Today
        </p>
        <p className="font-display mt-6 text-[clamp(2.6rem,9vw,8.5rem)] uppercase leading-[0.95] tracking-[0.02em]">
          Ananthula
          <br />
          Kedari
        </p>
        <p className="eyebrow mt-4 opacity-70">Since {brand.since} · {brand.city}, Telangana</p>

        <div className="mt-14 grid gap-12 border-t border-ivory/10 pt-10 md:grid-cols-[1fr_auto]">
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-4">
              {footerLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3 text-sm text-ivory/70">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ivory"
            >
              WhatsApp the store
            </a>
            <a href={brand.phoneHref} className="transition-colors hover:text-ivory">
              {brand.phone}
            </a>
            <a
              href={brand.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ivory"
            >
              JPN Road, Chowrasta, Warangal
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-[0.72rem] text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p>Concept demonstration — content pending owner confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
