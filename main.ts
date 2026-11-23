// Entry is 107 characters, inside the 1-200 gate; punch lands on the last words.
// The Vacuum's Alibi — one line, 200 characters or fewer.
// Entry: a robot vacuum's deadpan excuse for missing a spot.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My sensors logged the crumb at 09:41, my schedule logged it as 'someone else's job', and my battery agreed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
