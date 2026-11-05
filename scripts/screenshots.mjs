// Refreshes the "live preview" images of featured projects from their live URLs.
// Usage: npm run screenshots   (needs a local Chrome or Edge; set CHROME_PATH to override)
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const targets = [
  { file: "quicksell.png", url: "https://quicksell.intechsolution.bd" },
  { file: "distressedprodata.png", url: "https://distressedprodata.com" },
];

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

for (const { file, url } of targets) {
  const out = resolve("src/assets/projects", file);
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars",
    "--window-size=1440,900", "--virtual-time-budget=10000",
    `--screenshot=${out}`, url,
  ], { stdio: "ignore" });
  console.log(`captured ${url} -> ${out}`);
}
