import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const OUT = "/tmp/claude-0/-home-user-ananthula/72005e1b-d880-56e7-ab94-dfcc760e76f8/scratchpad/sections";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});

for (const [w, h, tag] of [[1440, 900, "d"], [390, 844, "m"]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4200);
  await page.evaluate(() => {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
  });
  await page.waitForTimeout(600);
  const sections = await page.$$("main > section, main section[aria-labelledby]");
  let i = 0;
  for (const s of sections) {
    i++;
    const id = await s.getAttribute("aria-labelledby");
    const name = id ? id.replace("-heading", "") : `s${i}`;
    try {
      await s.scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      await s.screenshot({ path: `${OUT}/${String(i).padStart(2, "0")}-${name}-${tag}.png` });
    } catch (e) {
      console.log(`skip ${name}: ${e.message.split("\n")[0]}`);
    }
  }
  await page.close();
}
await browser.close();
console.log("done");
