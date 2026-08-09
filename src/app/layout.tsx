import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { brand } from "@/data/brand";
import { getAvailableMedia } from "@/lib/mediaInventory";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Dressing Generations Since ${brand.since}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Ananthula Kedari Family Shopping Mall, Warangal — pattu sarees, wedding wardrobes, women's, men's and kids' fashion since 1951.",
  keywords: [
    "pattu sarees Warangal",
    "Kanchipuram sarees Warangal",
    "bridal sarees Warangal",
    "wedding shopping Warangal",
    "family shopping mall Warangal",
  ],
  openGraph: {
    title: `${brand.name} — Since ${brand.since}`,
    description: "Pattu · Wedding · Women · Men · Kids — Warangal, Telangana.",
    type: "website",
    locale: "en_IN",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: brand.fullName,
  description:
    "Family fashion destination in Warangal since 1951 — pattu sarees, wedding wear, women's, men's and kids' clothing.",
  telephone: brand.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "8-11 12, Jayaprakash Narayan Road, Chowrasta, Sherpura",
    addressLocality: "Warangal",
    addressRegion: "Telangana",
    postalCode: "506002",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const availableMedia = getAvailableMedia();
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* photo inventory — lets MediaSlot skip requests for absent files */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__AK_MEDIA__=${JSON.stringify(availableMedia)}`,
          }}
        />
        <MotionProvider />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
