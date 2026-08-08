import type { CSSProperties, ReactNode } from "react";
import { textiles, type TextileName, type TextileSpec } from "@/data/textiles";

/**
 * TextilePanel — the demo's visual material.
 *
 * Draws a silk surface entirely in CSS gradients + inline SVG:
 *   1. silk base with a directional sheen and drape folds
 *   2. woven warp/weft thread grid
 *   3. a traditional border band (temple reku / kattam / pallu stripes /
 *      rudraksha / paisley buttas) in zari
 *   4. film grain
 *
 * Server-rendered, zero network requests, zero layout shift. When client
 * photography arrives this component is swapped per-slot for an <Image>.
 */

type Props = {
  textile: TextileName;
  className?: string;
  /** Extra per-instance namespace when the same textile repeats on a page. */
  idSuffix?: string;
  children?: ReactNode;
  /** Dim the surface for text overlays, 0–1. */
  scrim?: number;
  ariaLabel?: string;
};

function silkBackground(spec: TextileSpec): string {
  const [dark, mid, light] = spec.silk;
  const angle = spec.sheenAngle ?? 125;
  return [
    // principal sheen — one broad silk highlight travelling across the panel
    `linear-gradient(${angle}deg, ${dark} 0%, ${mid} 34%, ${light} 50%, ${mid} 63%, ${dark} 100%)`,
  ].join(",");
}

function foldOverlay(spec: TextileSpec): string {
  const angle = (spec.sheenAngle ?? 125) - 90;
  return [
    // soft drape folds
    `repeating-linear-gradient(${angle}deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0.14) 90px, rgba(0,0,0,0) 200px, rgba(255,255,255,0.05) 290px, rgba(0,0,0,0) 380px)`,
    // corner light
    `radial-gradient(120% 90% at 18% 8%, rgba(255,255,255,0.10), rgba(255,255,255,0) 55%)`,
    `radial-gradient(130% 100% at 85% 95%, rgba(0,0,0,0.28), rgba(0,0,0,0) 60%)`,
  ].join(",");
}

function MotifBand({ spec, uid }: { spec: TextileSpec; uid: string }) {
  if (spec.motif === "none") return null;
  const z = spec.zari;
  const pid = `m-${uid}`;

  let tile: ReactNode = null;
  let tileW = 48;
  let tileH = 48;
  let bandH = 56;

  switch (spec.motif) {
    case "temple":
      tileW = 44;
      tileH = 40;
      bandH = 64;
      tile = (
        <g fill={z}>
          <path d="M0 40 L22 6 L44 40 Z" opacity="0.92" />
          <circle cx="22" cy="26" r="2.4" fill={spec.silk[0]} />
        </g>
      );
      break;
    case "checks":
      tileW = 56;
      tileH = 56;
      bandH = 92;
      tile = (
        <g stroke={z} strokeWidth="1.6" opacity="0.85">
          <line x1="0" y1="0" x2="56" y2="0" />
          <line x1="0" y1="0" x2="0" y2="56" />
          <circle cx="28" cy="28" r="2" fill={z} stroke="none" opacity="0.9" />
        </g>
      );
      break;
    case "stripes":
      tileW = 8;
      tileH = 46;
      bandH = 82;
      tile = (
        <g fill={z}>
          <rect x="0" y="0" width="8" height="2.5" opacity="0.95" />
          <rect x="0" y="8" width="8" height="1.2" opacity="0.7" />
          <rect x="0" y="15" width="8" height="4.5" opacity="0.95" />
          <rect x="0" y="26" width="8" height="1.2" opacity="0.7" />
          <rect x="0" y="33" width="8" height="2.5" opacity="0.9" />
        </g>
      );
      break;
    case "rudraksha":
      tileW = 40;
      tileH = 40;
      bandH = 60;
      tile = (
        <g fill={z}>
          <path d="M20 6 L32 20 L20 34 L8 20 Z" opacity="0.9" />
          <circle cx="20" cy="20" r="3" fill={spec.silk[0]} />
        </g>
      );
      break;
    case "paisley":
      tileW = 72;
      tileH = 64;
      bandH = 70;
      tile = (
        <g
          fill="none"
          stroke={z}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        >
          <path d="M36 12 C50 14 54 30 46 42 C40 51 28 52 24 44 C21 37 27 31 33 33 C38 35 38 41 34 42" />
          <circle cx="36" cy="26" r="2.2" fill={z} stroke="none" />
        </g>
      );
      break;
  }

  const edge = spec.border ?? "bottom";
  const vertical = edge === "left" || edge === "right";
  const pos: CSSProperties = vertical
    ? {
        [edge]: 0,
        top: 0,
        bottom: 0,
        width: bandH,
      }
    : {
        [edge]: 0,
        left: 0,
        right: 0,
        height: bandH,
      };

  return (
    <div aria-hidden className="absolute" style={pos}>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <pattern
            id={pid}
            width={tileW}
            height={tileH}
            patternUnits="userSpaceOnUse"
            patternTransform={vertical ? "rotate(90)" : undefined}
          >
            {tile}
          </pattern>
        </defs>
        {/* band ground + selvedge rules */}
        <rect width="100%" height="100%" fill={spec.silk[0]} opacity="0.55" />
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
        {vertical ? (
          <>
            <rect
              x={edge === "left" ? bandH - 2 : 0}
              width="1.5"
              height="100%"
              fill={z}
              opacity="0.9"
            />
            <rect
              x={edge === "left" ? bandH - 7 : 5}
              width="0.75"
              height="100%"
              fill={z}
              opacity="0.55"
            />
          </>
        ) : (
          <>
            <rect
              y={edge === "bottom" ? 0 : bandH - 2}
              width="100%"
              height="1.5"
              fill={z}
              opacity="0.9"
            />
            <rect
              y={edge === "bottom" ? 5 : bandH - 7}
              width="100%"
              height="0.75"
              fill={z}
              opacity="0.55"
            />
          </>
        )}
      </svg>
    </div>
  );
}

export function TextilePanel({
  textile,
  className = "",
  idSuffix = "",
  children,
  scrim = 0,
  ariaLabel,
}: Props) {
  const spec = textiles[textile];
  const uid = `${spec.id}${idSuffix}`;
  const wid = `w-${uid}`;

  return (
    <div
      className={`relative overflow-hidden grain ${className}`}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      {/* 1 — silk base */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: silkBackground(spec) }}
      />
      {/* 2 — drape folds + corner light */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: foldOverlay(spec) }}
      />
      {/* 3 — woven threads */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        style={{ opacity: (spec.weaveStrength ?? 0.5) * 0.32 }}
        role="presentation"
      >
        <defs>
          <pattern
            id={wid}
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 2.5 H5 M2.5 0 V5"
              stroke={spec.zari}
              strokeWidth="0.5"
              opacity="0.85"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${wid})`} />
      </svg>
      {/* 4 — border motif band */}
      <MotifBand spec={spec} uid={uid} />
      {/* 5 — optional scrim for legible overlays */}
      {scrim > 0 && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(10,8,7,${Math.min(
              scrim + 0.25,
              0.85,
            )}), rgba(10,8,7,${scrim * 0.35}) 55%, rgba(10,8,7,${
              scrim * 0.55
            }))`,
          }}
        />
      )}
      {children != null && (
        <div className="relative z-[1] h-full w-full">{children}</div>
      )}
    </div>
  );
}
