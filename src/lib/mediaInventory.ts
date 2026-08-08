import "server-only";
import { readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-side inventory of every file under public/images.
 *
 * The root layout injects this list into the page so MediaSlot knows —
 * without a single network probe — which photographs exist. Missing slots
 * therefore produce zero failed requests and a spotless console.
 *
 * Dev: re-read on every request, so dropped-in files appear on refresh.
 * Production: baked at build time (re-run `next build` after adding files).
 */
export function getAvailableMedia(): string[] {
  const root = join(process.cwd(), "public");
  const dir = join(root, "images");
  try {
    return readdirSync(dir, { recursive: true, withFileTypes: true })
      .filter((e) => e.isFile() && !e.name.startsWith("."))
      .map((e) =>
        join(e.parentPath, e.name).slice(root.length).replaceAll("\\", "/"),
      );
  } catch {
    return [];
  }
}
