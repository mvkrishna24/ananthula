import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const OUT = process.env.OUT ?? "/tmp/claude-0/-home-user-ananthula/72005e1b-d880-56e7-ab94-dfcc760e76f8/scratchpad/shots";
mkdirSync(OUT, { recursive: true });

const widths = JSON.parse(process.env.WIDTHS ?? "[[1440,900],[390,844]]");
const routes = JSON.parse(process.env.ROUTES ?? '["/"]');
const FULL = process.env.FULL !== "0";

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});

const errors = [];
for (const [w, h] of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
    isMobile: w < 500,
  });
  const page = await ctx.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${w}] console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[${w}] pageerror: ${err.message}`));

  for (const route of routes) {
    await page.goto(`http://localhost:3100${route}`, { waitUntil: "networkidle" });
    // let the intro play out + reveals settle
    await page.waitForTimeout(route === "/" ? 4500 : 1200);
    // force all reveals for full-page shots
    await page.evaluate(() =>
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed")),
    );
    await page.waitForTimeout(400);
    const name = route === "/" ? "home" : route.replaceAll("/", "_").slice(1);
    await page.screenshot({ path: `${OUT}/${name}-${w}.png`, fullPage: FULL });
    // horizontal overflow check
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 1) errors.push(`[${w}] ${route} horizontal overflow: ${overflow}px`);
  }
  await ctx.close();
}
await browser.close();
console.log(errors.length ? "ISSUES:\n" + errors.join("\n") : "CLEAN");
