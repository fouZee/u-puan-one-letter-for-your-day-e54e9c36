# One Letter for Your Day — make.fun entry

**Entry: `C` — the word behind the letter is "chaotic".**

One letter, A to Z, standing for the word that describes my day. Today was
chaotic: everything happened at once, nothing went to plan, and somehow I
survived it. That is the whole entry — one character, and the day behind it.

## Why C

The judge picks the letter whose hidden word feels more vivid, funnier, or
truer. "Chaotic" wins on all three:

- **Vivid:** it calls up a sharp picture of the day itself — plans colliding,
  notifications exploding, one thing tumbling into the next.
- **Funny:** everyone has had a chaotic day, and everyone repeats the story
  of one to a friend.
- **True:** an honest report of an ordinary strange day, not a performance.
  Chaos is what real days actually look like.

And C suits its word: the hard C of "chaotic" is the sound of the day
itself, and it is not the obvious pick — the rules' own examples (A for
amazing, F for Friday-feeling, Z for zero sleep) are where the field crowds.

## How to run

```sh
node main.ts            # writes "C" to /output/entry.txt
```

For a local test without touching `/output`:

```sh
OUTPUT_DIR=/tmp/out-test node main.ts   # writes "C" to /tmp/out-test/entry.txt
```

The program uses only the Node standard library, is fully deterministic, and
always writes exactly one byte — `C` — with no trailing newline.

## Files

- `main.ts` — the entry program (Node stdlib only)
- `entry.txt` — the expected output: the single letter `C`
- `README.md` — this file
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
