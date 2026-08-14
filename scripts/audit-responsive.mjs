#!/usr/bin/env node
/**
 * Responsive / mobile-viewport audit with a Lighthouse-style score.
 *
 * Usage:
 *   node scripts/audit-responsive.mjs            # spawns `next start` (requires a prior build)
 *   AUDIT_URL=http://127.0.0.1:3000 node scripts/audit-responsive.mjs
 *   CHROME_PATH=/path/to/chrome node scripts/audit-responsive.mjs
 *
 * Fails (exit 1) when: any horizontal overflow exists, the viewport meta is
 * missing/incorrect on any page, or the overall score drops below 80/100.
 */
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import puppeteer from 'puppeteer-core';

const PAGES = ['/', '/about', '/projects', '/security-research', '/journey', '/build-log', '/blog', '/notes', '/contact'];

const VIEWPORTS = [
  ['fold', 280, 653],
  ['se', 320, 568],
  ['phone', 390, 844],
  ['tablet', 768, 1024],
  ['laptop', 1440, 900],
  ['hd', 1920, 1080],
  ['ultra', 2560, 1080],
];

// ---------------------------------------------------------------- helpers

function findChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  return candidates.find((p) => existsSync(p));
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.xml': 'text/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

async function startServer() {
  if (process.env.AUDIT_URL) return { base: process.env.AUDIT_URL.replace(/\/$/, ''), close: () => {} };

  // The site builds with `output: export`, so serve the static `out/` directory.
  const outDir = normalize(join(process.cwd(), 'out'));
  if (!existsSync(outDir)) {
    throw new Error('No out/ directory found - run `npm run build` first (output: export).');
  }
  const port = 3456;
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      let pathname = decodeURIComponent(url.pathname);
      if (pathname.endsWith('/')) pathname += 'index.html';
      let filePath = normalize(join(outDir, pathname));
      if (!filePath.startsWith(outDir)) {
        res.writeHead(403);
        return res.end('forbidden');
      }
      let data = null;
      try {
        data = await readFile(filePath);
      } catch {
        // directory-style route -> try <path>/index.html and <path>.html
        const candidates = [join(outDir, pathname, 'index.html'), outDir + pathname + '.html'];
        for (const c of candidates) {
          if (existsSync(c)) {
            data = await readFile(c);
            filePath = c;
            break;
          }
        }
      }
      if (!data) {
        res.writeHead(404);
        return res.end('not found');
      }
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('server error');
    }
  });
  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${port}`;
  return { base, close: () => server.close() };
}

async function waitFor(browser, page, predicate, timeout = 12000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await predicate()) return true;
    await new Promise((r) => setTimeout(r, 250));
  }
  return false;
}

// ---------------------------------------------------------------- audit

const results = {
  viewportMeta: { pass: 0, fail: 0, pages: [] },
  overflow: { total: 0, failures: 0, details: [] },
  tapTargets: { small: 0, pages: [] },
  pageErrors: { errors: 0, pages: [] },
  typography: { tiny: 0 },
  sitemap: { ok: false, urls: 0, detail: '' },
  robots: { ok: false, detail: '' },
  hiddenContent: { total: 0, pages: [] },
};

async function auditPage(browser, base, path) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  // viewport meta + typography + tap targets at phone width
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(base + path, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await waitFor(browser, page, () => true);

  const meta = await page.evaluate(() => {
    const m = document.querySelector('meta[name="viewport"]');
    return m ? m.getAttribute('content') : null;
  });
  if (meta && meta.includes('width=device-width')) results.viewportMeta.pass++;
  else {
    results.viewportMeta.fail++;
    results.viewportMeta.pages.push(path);
  }

  const { smallTargets, tinyText } = await page.evaluate(() => {
    let small = 0;
    document.querySelectorAll('button, a').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && (r.width < 24 || r.height < 24) && el.textContent.trim()) small++;
    });
    let tiny = 0;
    document.querySelectorAll('p, span, a, button, li, h1, h2, h3').forEach((el) => {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 10 && el.textContent.trim().length > 3) tiny++;
    });
    return { smallTargets: small, tinyText: tiny };
  });
  results.tapTargets.small += smallTargets;
  if (smallTargets) results.tapTargets.pages.push(`${path}:${smallTargets}`);
  results.typography.tiny += tinyText;

  // Scroll-reveal check: pages below the fold (whileInView etc.) must actually
  // become visible once scrolled into view - otherwise content is permanently hidden.
  const hiddenAfterScroll = await page.evaluate(async () => {
    const docH = document.documentElement.scrollHeight;
    const vh = window.innerHeight;
    for (let y = 0; y < docH; y += vh) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    await new Promise((r) => setTimeout(r, 600));
    window.scrollTo(0, 0);
    let n = 0;
    document.querySelectorAll('*').forEach((el) => {
      const s = getComputedStyle(el);
      if ((s.opacity === '0' || s.visibility === 'hidden') && el.textContent.trim().length > 3) n++;
    });
    return n;
  });
  results.hiddenContent.total += hiddenAfterScroll;
  if (hiddenAfterScroll) results.hiddenContent.pages.push(`${path}:${hiddenAfterScroll}`);

  // overflow across viewports
  for (const [name, w, h] of VIEWPORTS) {
    await page.setViewport({ width: w, height: h });
    await page.goto(base + path, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 800));
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    if (sw > w + 1) {
      results.overflow.failures++;
      results.overflow.details.push(`${path} @ ${name} (${w}px): scrollWidth=${sw}`);
    }
    results.overflow.total++;
  }

  results.pageErrors.errors += errors.length;
  if (errors.length) results.pageErrors.pages.push(`${path}: ${errors[0].slice(0, 80)}`);
  await page.close();
}

// ---------------------------------------------------------------- score

function score() {
  const vp = results.viewportMeta.pass === PAGES.length ? 20 : 0;
  const ov = results.overflow.failures === 0 ? 30 : Math.max(0, 30 - results.overflow.failures * 10);
  const tap = results.tapTargets.small === 0 ? 20 : Math.max(0, 20 - results.tapTargets.small * 2);
  const err =
    results.pageErrors.errors === 0 ? 15 : Math.max(0, 15 - results.pageErrors.errors * 5 - results.hiddenContent.total * 3);
  const seo = (results.sitemap.ok ? 8 : 0) + (results.robots.ok ? 7 : 0);
  return { vp, ov, tap, err, seo, total: vp + ov + tap + err + seo };
}

// ---------------------------------------------------------------- main

const chrome = findChrome();
if (!chrome) {
  console.error('✗ No Chrome/Chromium found. Set CHROME_PATH to your browser binary.');
  process.exit(1);
}

const { base, close } = await startServer();
console.log(`Auditing ${base} across ${PAGES.length} pages × ${VIEWPORTS.length} viewports...\n`);

const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--no-sandbox'] });

try {
  // sitemap + robots
  try {
    const sm = await fetch(`${base}/sitemap.xml`);
    const xml = await sm.text();
    results.sitemap.ok = sm.ok && (xml.match(/<url>/g) || []).length >= 8 && xml.includes('/security-research');
    results.sitemap.urls = (xml.match(/<url>/g) || []).length;
    results.sitemap.detail = sm.ok ? `${results.sitemap.urls} URLs` : `HTTP ${sm.status}`;
  } catch (e) {
    results.sitemap.detail = e.message;
  }
  try {
    const rb = await fetch(`${base}/robots.txt`);
    const txt = await rb.text();
    results.robots.ok = rb.ok && txt.toLowerCase().includes('sitemap:');
    results.robots.detail = rb.ok ? 'sitemap referenced' : `HTTP ${rb.status}`;
  } catch (e) {
    results.robots.detail = e.message;
  }

  for (const path of PAGES) await auditPage(browser, base, path);
} finally {
  await browser.close();
  close();
}

const s = score();
console.log('┌──────────────────────────────────┬───────┬────────────────────────────────────┐');
console.log('│ Category                         │ Score │ Detail                             │');
console.log('├──────────────────────────────────┼───────┼────────────────────────────────────┤');
console.log(
  `│ Viewport meta (all pages)          │  ${String(s.vp).padStart(2)}/20  │ ${results.viewportMeta.fail ? 'MISSING on ' + results.viewportMeta.pages.join(', ') : `ok (${results.viewportMeta.pass}/${PAGES.length} pages)`}`
);
console.log(
  `│ Responsive (no overflow)           │  ${String(s.ov).padStart(2)}/30  │ ${results.overflow.failures} failure(s) across ${results.overflow.total} checks`
);
console.log(
  `│ Tap targets (>=24px)               │  ${String(s.tap).padStart(2)}/20  │ ${results.tapTargets.small} small target(s)${results.tapTargets.pages.length ? ' ' + results.tapTargets.pages.join(', ') : ''}`
);
console.log(
  `│ Runtime health (no page errors)    │  ${String(s.err).padStart(2)}/15  │ ${results.pageErrors.errors} error(s)${results.pageErrors.pages.length ? ' ' + results.pageErrors.pages.join(', ') : ''}${results.hiddenContent.total ? ' · ' + results.hiddenContent.total + ' hidden text node(s) ' + results.hiddenContent.pages.join(', ') : ''}`
);
console.log(
  `│ Sitemap + robots                   │  ${String(s.seo).padStart(2)}/15  │ sitemap: ${results.sitemap.detail} · robots: ${results.robots.detail}`
);
console.log('├──────────────────────────────────┼───────┼────────────────────────────────────┤');
console.log(`│ TOTAL                            │  ${String(s.total).padStart(2)}/100 │                                    │`);
console.log('└──────────────────────────────────┴───────┴────────────────────────────────────┘');

for (const d of results.overflow.details) console.error(`  ✗ overflow: ${d}`);

const fail = results.overflow.failures > 0 || results.viewportMeta.fail > 0 || s.total < 80;
if (fail) {
  console.error('\n✗ AUDIT FAILED');
  process.exit(1);
}
console.log('\n✓ AUDIT PASSED');
