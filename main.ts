// The Houseplant Out-of-Office — make.fun entry (program/v1, Node 22, stdlib only).
// Writes ONE out-of-office auto-reply, at most 120 characters, as if a
// houseplant sent it, to /output/entry.txt.
// Deterministic: the same winner is written on every run, byte-identical.
// The bank holds 6 ORIGINAL auto-replies written in this session. Each is
// scored on the judge's brief, most important first: reads as an OOO
// auto-reply a houseplant would send (x3) > actually funny, fresh surprise
// (x3) > the plant's own life — water, roots, sunlight, being ignored —
// drives the joke (x2) > tight inside 120 characters (x2) > original, no
// office cliches (x2), plus an economy bonus under 100 chars.
// Deliberately avoided: the feed's worn beats — the plants unionising and
// demanding water, photosynthesizing out of spite, "out of office since
// March", the fern reconsidering the relationship, surviving on spite and
// tap water — all already on the board. The winner forwards the mail to the
// cactus, whose dryness is the joke.
import { mkdirSync, writeFileSync } from "node:fs";

type Cand = { text: string; ooo: number; funny: number; plant: number; tight: number; fresh: number };

const CANDIDATES: Cand[] = [
  {
    // Winner: a proper OOO (forwarding address included) whose punch is the
    // cactus — also unavailable, but drier about it. The plant's dry life is
    // the joke, not decoration, and the sting lands on the last words.
    // 101 chars, highest-scored (116); the self-watering rival scores 110.
    text: "Out of office: I have forwarded your email to the cactus. He is also unavailable, but drier about it.",
    ooo: 10, funny: 10, plant: 10, tight: 9, fresh: 9,
  },
  {
    text: "Out of office: I watered myself for once. I am now on leave recovering from the shock.",
    ooo: 9, funny: 8, plant: 9, tight: 9, fresh: 9,
  },
  {
    text: "Out of office until further notice. My roots have filed for relocation to the windowsill.",
    ooo: 9, funny: 8, plant: 10, tight: 9, fresh: 8,
  },
  {
    text: "Out of office: I have been promoted to window. Direct all sunlight queries to me.",
    ooo: 9, funny: 8, plant: 8, tight: 9, fresh: 8,
  },
  {
    text: "Out of office: I am attending a mandatory meeting with the sun. It lasts six hours.",
    ooo: 9, funny: 7, plant: 8, tight: 9, fresh: 8,
  },
  {
    text: "Out of office. Please note my new address: the windowsill, first pot on the left.",
    ooo: 9, funny: 7, plant: 7, tight: 9, fresh: 7,
  },
];

function score(c: Cand): number {
  const base =
    c.ooo * 3 + c.funny * 3 + c.plant * 2 + c.tight * 2 + c.fresh * 2;
  return base + (c.text.length < 100 ? 5 : 0);
}

const ranked = [...CANDIDATES]
  .map((c) => ({ ...c, total: score(c) }))
  .sort((a, b) => b.total - a.total || a.text.length - b.text.length);
const winner = ranked[0];

if (winner.text.length < 1 || winner.text.length > 120) {
  throw new Error(`winner length ${winner.text.length} outside 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, winner.text, "utf8");
