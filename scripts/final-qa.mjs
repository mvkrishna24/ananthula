import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const OUT = process.env.OUT ?? "/tmp/claude-0/-home-user-ananthula/72005e1b-d880-56e7-ab94-dfcc760e76f8/scratchpad/final-qa";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});
const issues = [];

const shootSection = async (page, id, name) => {
  const el = await page.$(`[aria-labelledby='${id}']`);
  if (!el) {
    issues.push(`missing section ${id}`);
    return;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await el.screenshot({ path: `${OUT}/${name}.png` });
};

// ---- desktop pass -------------------------------------------------
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("console", (m) => m.type() === "error" && issues.push("console: " + m.text()));
  page.on("pageerror", (e) => issues.push("pageerror: " + e.message));

  // demo=1 replay check, twice
  for (let run = 1; run <= 2; run++) {
    await page.goto("http://localhost:3100/?demo=1", { waitUntil: "commit" });
    await page.waitForTimeout(1800);
    const introVisible = await page.$("[data-intro-cover]");
    if (!introVisible) issues.push(`demo=1 run ${run}: intro did not replay`);
    if (run === 1) await page.screenshot({ path: `${OUT}/00-intro-demo-mode.png` });
    await page.waitForTimeout(3200);
  }
  const atTop = await page.evaluate(() => window.scrollY < 4);
  if (!atTop) issues.push("demo=1: page not at top after intro");

  await page.screenshot({ path: `${OUT}/01-hero-after-intro.png` });
  await page.evaluate(() =>
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed")),
  );
  await shootSection(page, "legacy-heading", "02-heritage");
  await shootSection(page, "pattu-heading", "03-pattu");
  await shootSection(page, "family-heading", "04-family");
  await shootSection(page, "wedding-heading", "05-wedding");
  await shootSection(page, "festival-heading", "06-festival");
  await shootSection(page, "arrivals-heading", "07-arrivals");
  await shootSection(page, "store-heading", "08-store");

  // fullscreen navigation
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.click("button[aria-controls='fullscreen-menu']");
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/11-fullscreen-menu.png` });
  await page.keyboard.press("Escape");

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  if (overflow > 1) issues.push(`desktop horizontal overflow: ${overflow}px`);
  await page.close();
}

// ---- width sweep --------------------------------------------------
for (const [w, h] of [[1280, 800], [1024, 768], [768, 1024], [430, 932], [390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, isMobile: w < 500 });
  page.on("console", (m) => m.type() === "error" && issues.push(`[${w}] console: ` + m.text()));
  page.on("pageerror", (e) => issues.push(`[${w}] pageerror: ` + e.message));
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4600);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  if (overflow > 1) issues.push(`[${w}] horizontal overflow: ${overflow}px`);
  await page.close();
}

// ---- mobile hero + mobile wedding --------------------------------
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4600);
  await page.screenshot({ path: `${OUT}/09-mobile-hero.png` });
  await page.evaluate(() =>
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed")),
  );
  await shootSection(page, "wedding-heading", "10-mobile-wedding");
  await page.close();
}

// ---- reduced motion ----------------------------------------------
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const done = await page.$eval("html", (el) => el.hasAttribute("data-intro-done"));
  if (!done) issues.push("reduced-motion: intro did not auto-complete");
  const heroText = await page.textContent("h1");
  if (!heroText?.includes("Ananthula")) issues.push("reduced-motion: hero text missing");
  await ctx.close();
}

await browser.close();
console.log(issues.length ? "ISSUES:\n" + issues.join("\n") : "ALL CLEAN");
