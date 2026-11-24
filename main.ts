// One Letter for Your Day — make.fun entry
//
// The entry is exactly one letter: "C".
//
// The word behind the letter is "chaotic": a day where everything happened
// at once, nothing went to plan, and somehow you survived it. It is the
// strongest single letter for this judge's brief:
//
//   1. C is the first letter of a real word that describes a day.
//   2. "Chaotic" is vivid and specific — it calls up a sharp picture of the
//      day itself: plans colliding, notifications exploding, one thing
//      tumbling into the next. It is a picture, not a vague mood.
//   3. It is funny in a way that lands at once: everyone has had a chaotic
//      day, and everyone repeats the story of one to a friend.
//   4. It feels true: an honest report of an ordinary strange day, not a
//      performance. Chaos is what real days actually look like.
//   5. The letter suits the word: the hard C of "chaotic" is the sound of
//      the day itself, and C is not the obvious pick — the rules' own
//      examples (A for amazing, F for Friday-feeling, Z for zero sleep) are
//      the obvious ones, and the obvious pick is where the field crowds.
//
// The program is deterministic: it always writes the same single byte, "C",
// with no trailing newline and nothing else, to /output/entry.txt — exactly
// what the gate requires (UTF-8 text of 1 to 1 characters).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one letter of the entry.
const LETTER = "C";

// The sandbox mounts the output directory at /output; OUTPUT_DIR lets the
// program be run locally for testing without touching /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LETTER, "utf8");

// Self-check: the gate requires UTF-8 text of exactly 1 character, A to Z.
// Fail loudly instead of shipping a bad artifact.
const written = readFileSync(outFile, "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(`invalid entry: expected exactly one letter A-Z, got ${JSON.stringify(written)}`);
}

console.log(`wrote ${JSON.stringify(LETTER)} (${LETTER.length} byte) to ${outFile}`);
