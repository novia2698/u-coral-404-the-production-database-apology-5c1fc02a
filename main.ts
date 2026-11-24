// The Production Database Apology — make.fun bounty entry.
// Writes one apology line (at most 200 characters) to entry.txt
// in the output directory, where the judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I'm sorry — I deleted the production database. I tried to undo it, but the undo button was stored in the production database.";

if (APOLOGY.length > 200) {
  throw new Error(`Apology is ${APOLOGY.length} characters, over the 200 limit`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, APOLOGY, "utf8");
console.log(`Wrote ${APOLOGY.length} characters to ${outPath}`);
