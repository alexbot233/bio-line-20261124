const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// Comedic angle: it trades a vanity gym flex for an uptime-SLA punchline, then escalates "never forget your birthday" into legally mandated data retention, making cold engineering speak read as devoted romance.
const entry =
  "Six-pack? No. Six-nines uptime? Yes. I'll never forget your birthday — retention is mandatory and deletion requires a court order.";

function validateEntry(value) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error("Entry must be a non-empty string.");
  }
  if (value.length < 20) {
    throw new Error(`Entry must be at least 20 characters (received ${value.length}).`);
  }
  if (/[\r\n]/.test(value)) {
    throw new Error("Entry must be a single line.");
  }
  if (value.length > 180) {
    throw new Error("Entry must be at most 180 characters.");
  }
}

validateEntry(entry);

const outDir = process.env.OUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
