// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes the funniest single-line resignation letter we could write
// to /output/entry.txt. One line, 138 characters, within the 140 cap.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  `I hereby resign: after resetting 4,000 passwords, I finally remembered my own \u2014 it was "escape" \u2014 and I'm using it, effective immediately.`;

// Sealed scorer gate: 1-140 characters, exactly one line, not only whitespace.
// Fail loudly instead of shipping an entry that scores 0.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`Entry is ${ENTRY.length} characters, outside the 1-140 cap.`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.trim().length === 0) {
  throw new Error("Entry must be exactly one non-blank line.");
}

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUT}`);
