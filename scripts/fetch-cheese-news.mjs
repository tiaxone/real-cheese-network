// Pulls real cheese/dairy industry headlines from RSS and queues the new
// ones for satire. Deterministic and dependency-light on purpose — the
// creative rewrite into Real Cheese Network's voice happens in a separate
// step (the scheduled Claude task), not here.
import Parser from "rss-parser";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const QUEUE_PATH = path.join(DATA_DIR, "news-queue.json");
const SEEN_PATH = path.join(DATA_DIR, "seen-links.json");

const FEEDS = [
  "https://news.google.com/rss/search?q=cheese&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=dairy%20industry&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=artisan%20cheese&hl=en-US&gl=US&ceid=US:en",
];

const MAX_SEEN = 500;
const MAX_ITEM_AGE_DAYS = 7;
const MAX_QUEUE_SIZE = 30;

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf-8"));
  } catch {
    return fallback;
  }
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });

  const seen = new Set(await readJson(SEEN_PATH, []));
  const cutoff = Date.now() - MAX_ITEM_AGE_DAYS * 24 * 60 * 60 * 1000;

  // Drop stale queue entries that were never picked up for satire.
  let queue = (await readJson(QUEUE_PATH, [])).filter(
    (item) => new Date(item.queuedAt).getTime() >= cutoff
  );
  const queuedLinks = new Set(queue.map((item) => item.link));

  const parser = new Parser({ timeout: 10_000 });

  let found = 0;
  for (const feedUrl of FEEDS) {
    let feed;
    try {
      feed = await parser.parseURL(feedUrl);
    } catch (err) {
      console.error(`Skipping feed (fetch failed): ${feedUrl}\n  ${err.message}`);
      continue;
    }

    for (const item of feed.items ?? []) {
      const link = item.link?.trim();
      const title = item.title?.trim();
      if (!link || !title) continue;
      if (seen.has(link) || queuedLinks.has(link)) continue;

      const pubDate = item.pubDate ? new Date(item.pubDate) : null;
      if (pubDate && pubDate.getTime() < cutoff) continue;

      queue.push({
        title,
        link,
        summary: (item.contentSnippet || item.content || "").trim().slice(0, 500),
        source: item.creator || feed.title || "Unknown",
        pubDate: pubDate ? pubDate.toISOString() : null,
        queuedAt: new Date().toISOString(),
      });
      queuedLinks.add(link);
      seen.add(link);
      found++;
    }
  }

  // Trim seen-links so the file doesn't grow forever.
  const seenTrimmed = Array.from(seen).slice(-MAX_SEEN);

  // Cap the queue too — keep the most recent items if it's grown too large.
  if (queue.length > MAX_QUEUE_SIZE) {
    queue = queue.slice(-MAX_QUEUE_SIZE);
  }

  await writeFile(QUEUE_PATH, JSON.stringify(queue, null, 2) + "\n");
  await writeFile(SEEN_PATH, JSON.stringify(seenTrimmed, null, 2) + "\n");

  console.log(`Queued ${found} new item(s). Queue now has ${queue.length} pending.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
