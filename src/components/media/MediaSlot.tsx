"use client";

import Image from "next/image";
import {
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { TextilePanel } from "@/components/textile/TextilePanel";
import {
  media,
  type MediaSlotName,
  type MediaSlotSpec,
} from "@/data/media";

declare global {
  interface Window {
    /** Injected by the root layout: every file present under public/images. */
    __AK_MEDIA__?: string[];
  }
}

/**
 * Existence check with zero network traffic: the server layout injects the
 * real public/images inventory, so absent photographs never trigger a
 * request (and never print console errors during a client presentation).
 * Exposed through useSyncExternalStore so SSR renders "absent" and the
 * client corrects it at hydration without a cascading effect.
 */
const noopSubscribe = () => () => {};

function useMediaAvailable(src: string): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () =>
      Array.isArray(window.__AK_MEDIA__) && window.__AK_MEDIA__.includes(src),
    () => false,
  );
}

/**
 * MediaSlot — every photographic surface in the site.
 *
 * Layers, bottom to top:
 *   1. textile artwork (always rendered — the graceful fallback and the
 *      loading state, so a missing file can never break a composition)
 *   2. the real photograph, cross-fading in when it loads
 *   3. optional scrim for text legibility
 *   4. overlay content
 *
 * Drop the file listed in data/media.ts into /public and the slot shows it
 * on the next refresh. No grey boxes, no broken-image icons, no CLS.
 */

type Props = {
  slot: MediaSlotName;
  className?: string;
  /** Namespaces repeated textile SVG defs on one page. */
  idSuffix?: string;
  /** 0–1 darkening for overlaid text. */
  scrim?: number;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
  /** Extra style on the media layers (e.g. object-position hints). */
  imageClassName?: string;
};

export function MediaSlot({
  slot,
  className = "",
  idSuffix = "",
  scrim = 0,
  sizes = "100vw",
  priority = false,
  children,
  imageClassName = "",
}: Props) {
  const spec: MediaSlotSpec = media[slot];
  const available = useMediaAvailable(spec.src);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showPhoto = available && !errored;
  const photoReady = showPhoto && loaded;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1 — textile fallback / loading ground.
             When the photograph is absent, the fallback must NOT announce the
             photo's alt text — a screen reader would be told about a
             photograph that does not exist. The artwork describes itself;
             `spec.alt` renders only on the real <Image>. */}
      <div aria-hidden={photoReady} className="absolute inset-0">
        <TextilePanel
          textile={spec.textile}
          idSuffix={`ms-${slot}${idSuffix}`}
          className="h-full w-full"
          ariaLabel={photoReady ? undefined : "Silk textile artwork"}
        />
      </div>

      {/* 2 — the photograph (mounted only once the file is known to exist).
             Per-asset art direction comes from the manifest: --media-pos
             (desktop) and --media-pos-m (mobile) drive object-position via
             the .media-photo rule in globals.css. */}
      {showPhoto && (
        <Image
          src={spec.src}
          alt={spec.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`media-photo object-cover transition-opacity duration-700 ease-[var(--ease-editorial)] ${
            photoReady ? "opacity-100" : "opacity-0"
          } ${imageClassName}`}
          style={
            {
              "--media-pos": spec.position ?? "50% 50%",
              "--media-pos-m": spec.mobilePosition ?? spec.position ?? "50% 50%",
            } as CSSProperties
          }
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}

      {/* 3 — scrim */}
      {scrim > 0 && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={
            {
              background: `linear-gradient(to top, rgba(10,8,7,${Math.min(
                scrim + 0.25,
                0.85,
              )}), rgba(10,8,7,${scrim * 0.35}) 55%, rgba(10,8,7,${
                scrim * 0.55
              }))`,
            } as CSSProperties
          }
        />
      )}

      {/* 4 — overlay content */}
      {children != null && (
        <div className="relative z-[1] h-full w-full">{children}</div>
      )}
    </div>
  );
}
