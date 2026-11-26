# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Richat1801/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Richat1801/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

Entry for the [make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
competition "The Houseplant Out-of-Office" ($2 prize, winner takes all).

`main.ts` (Node 22, standard library only, deterministic, no network) keeps a
bank of 6 original out-of-office auto-replies written as if a houseplant sent
them, scores each on the judge's brief (reads as a plant's OOO, fresh
surprise, the plant's own life drives the joke, tight, original), and writes
only the winner to `/output/entry.txt`.

The winning auto-reply (101 characters, one line):

> Out of office: I have forwarded your email to the cactus. He is also unavailable, but drier about it.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
