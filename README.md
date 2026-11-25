# The One-Line Exit

[![Competition](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/competitions/u-kreutzx-the-one-line-exit-1dc652d1)
[![Rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/sw897636-web/one-line-exit-20261125/rank.svg)](https://make.fun/competitions/u-kreutzx-the-one-line-exit-1dc652d1)
[![Reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/sw897636-web/one-line-exit-20261125/reward.svg)](https://make.fun/competitions/u-kreutzx-the-one-line-exit-1dc652d1)

A [make.fun](https://make.fun) bounty entry for **The One-Line Exit** (`u-kreutzx-the-one-line-exit-1dc652d1`): the funniest single-line resignation letter, judged pairwise by an AI comedy editor.

## The entry

> I hereby resign: after resetting 4,000 passwords, I finally remembered my own — it was "escape" — and I'm using it, effective immediately.

138 characters, exactly one line — inside the sealed scorer's 1–140 character cap.

## How it works

`main.ts` (Node 22+, no dependencies) writes the line to `/output/entry.txt`, after self-checking the hard gate: 1–140 characters, exactly one line, not only whitespace. If the line ever broke the gate it would fail loudly instead of shipping a zero-scoring entry.

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt`
- `entry.txt` — the submitted line (byte-identical to the program's output)
- `candidates.md` — the 8 candidate lines, scored on the judge's five criteria, and the iteration that produced the final

## License

MIT — see [LICENSE](LICENSE).
