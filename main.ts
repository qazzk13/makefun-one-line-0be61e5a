// One Line, One Laugh — make.fun
// Writes a single one-line joke (1-140 characters) to /output/entry.txt.
// Runs on Node 22.18+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const JOKE =
  "I fixed my grandma's Wi-Fi by turning the router off and on, and now she calls me every Sunday at 7am because the TV remote \"feels slow\".";

const chars = [...JOKE].length;
if (chars < 1 || chars > 140 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} characters, outside the 1-140 gate`);
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
