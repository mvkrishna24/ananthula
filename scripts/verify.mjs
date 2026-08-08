import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const OUT = "/tmp/claude-0/-home-user-ananthula/72005e1b-d880-56e7-ab94-dfcc760e76f8/scratchpad/verify";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});
const errors = [];

// 1 — intro sequence mid-play (fresh session)
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("console", (m) => m.type() === "error" && errors.push("console: " + m.text()));
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  await page.goto("http://localhost:3100/", { waitUntil: "commit" });
  await page.waitForTimeout(2100);
  await page.screenshot({ path: `${OUT}/intro-mid.png` });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${OUT}/hero-after-intro.png` });

  // 2 — fullscreen menu
  await page.click("button[aria-controls='fullscreen-menu']");
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/menu-open.png` });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);

  // 3 — occasion grid + family after fixes
  for (const [id, name] of [["occasion-heading", "occasion"], ["family-heading", "family"]]) {
    const el = await page.$(`[aria-labelledby='${id}']`);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(900);
    await el.screenshot({ path: `${OUT}/${name}-fixed.png` });
  }
  await page.close();
}

// 4 — reduced motion: intro must not block, content visible
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const introVisible = await page.$eval("html", (el) => el.hasAttribute("data-intro-done"));
  if (!introVisible) errors.push("reduced-motion: intro did not auto-complete");
  const heroText = await page.textContent("h1");
  if (!heroText?.includes("Dressing")) errors.push("reduced-motion: hero text missing");
  await page.screenshot({ path: `${OUT}/reduced-motion.png` });
  await ctx.close();
}

// 5 — mobile family panel after band fix
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4500);
  await page.evaluate(() =>
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed")),
  );
  const el = await page.$("[aria-labelledby='family-heading']");
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await el.screenshot({ path: `${OUT}/family-mobile-fixed.png` });
  await page.close();
}

await browser.close();
console.log(errors.length ? "ISSUES:\n" + errors.join("\n") : "CLEAN");
