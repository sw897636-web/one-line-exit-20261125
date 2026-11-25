# Candidates — The One-Line Exit

Scored 1–5 on the RULES judge criteria, most important first:
1. Funny one-line resignation letter (joke lands in the line)
2. Surprise (unexpected turn, not a cliché quit reason)
3. Fits the form (one line, no padding, no grievance list, sendable)
4. Specific voice (recognizable job / workplace / person)
5. Quotable / stays with the reader

## C1 — Librarian (check-out pun)
> I resign effective immediately: after ten years shelving other people's stories, I've decided to finally check out my own — please forward my last paycheck to the overdue bin.
- Funny 4 / Surprise 3 / Form 4 / Voice 5 / Quotable 3 — total 19
- Note: "check out" pun is solid and the job is specific, but the overdue-bin tail is a second joke that dilutes the punchline.

## C2 — IT helpdesk (password "escape")
> I hereby resign: after resetting 4,000 passwords for people who never said thanks, I finally remembered my own — it was "escape" — and I'm using it.
- Funny 5 / Surprise 5 / Form 5 / Voice 5 / Quotable 5 — total 25
- Note: one clean turn, punchline lands on the last word, specific job, instantly repeatable. Best candidate.

## C3 — Night-shift security guard (warehouse talks back)
> I resign: I spent four years guarding an empty warehouse at 3 a.m., and last night the warehouse finally told me to get a life, so I am.
- Funny 3 / Surprise 4 / Form 4 / Voice 5 / Quotable 3 — total 19
- Note: good voice, but the joke needs a beat of explanation (a warehouse talking) and the ending is soft.

## C4 — Accountant (audit of my own life)
> I resign effective today: after a decade balancing everyone else's books, I ran the numbers on my own life and the audit came back "insufficient joy."
- Funny 4 / Surprise 4 / Form 5 / Voice 4 / Quotable 4 — total 21
- Note: clean and specific, but "audit came back" is a familiar structure; the punchline phrase is good but not startling.

## C5 — Teacher (divide by zero)
> I resign: after twelve years teaching fractions to thirty kids at once, I've decided to divide my time by zero and see what happens.
- Funny 3 / Surprise 3 / Form 4 / Voice 5 / Quotable 3 — total 18
- Note: "divide by zero" is a known internet trope; the surprise is blunted because the reader sees it coming.

## C6 — Plumber (pulling the plug)
> I resign: after a decade unclogging other people's drains, I finally realized my career was going down one, so I'm pulling the plug.
- Funny 4 / Surprise 3 / Form 5 / Voice 5 / Quotable 4 — total 21
- Note: tidy and sendable, but "going down the drain" + "pulling the plug" is two drain clichés stacked; the turn is expected.

## C7 — Barista (misspelling names)
> I resign: after five years spelling strangers' names wrong on purpose, I've decided to misspell my own on the door of a bakery that doesn't exist yet.
- Funny 4 / Surprise 4 / Form 4 / Voice 5 / Quotable 4 — total 21
- Note: charming voice, but the ending wanders — "a bakery that doesn't exist yet" is a second idea competing with the first.

## C8 — Meteorologist (forecasting my own future)
> I resign: after ten years predicting rain with 40% accuracy, I've decided to forecast my own future instead — currently sunny, with a 100% chance of leaving.
- Funny 3 / Surprise 3 / Form 4 / Voice 5 / Quotable 3 — total 18
- Note: the weather-forecast frame is cute, but the punchline ("100% chance of leaving") restates the resignation instead of surprising.

## Winner: C2 (IT helpdesk, 25/25)
Single joke, single turn, punchline on the final word ("it"), specific job, no padding, no grievance list, reads like a real sendable letter.

## Iteration on C2 (v2)
Weaknesses to fix in v2: "for people who never said thanks" is a small grievance that slightly pads the line and leans toward complaint; the em-dash aside ("it was 'escape'") is doing the work, but the setup could be tighter and the final beat ("and I'm using it") could land harder. The count also needs to reach the 120–140 target band.

v2 draft:
> I hereby resign: after six years resetting strangers' passwords, I finally remembered my own — it was "escape" — so I'm pressing it, effective immediately.

- Drops the grievance ("never said thanks"), tightens the setup ("six years resetting strangers' passwords"), and the ending now plays on the key itself ("pressing it") plus a formal sign-off beat ("effective immediately") that makes it read like a real letter.
- Character count to be verified with python before finalizing; target 120–140.

## Count check (python len(), 2026-11-25)
- C2 v1: 148 chars — OVER the 140 hard cap, rejected.
- C2 v2: 155 chars — OVER the 140 hard cap, rejected.
- Variant A (trimmed v1, "six years resetting strangers' passwords", ends "and I'm using it."): 130 chars, 1 line.
- Variant B (v2 with "I resign" opener): 148 chars — over.
- Variant C (v1 trimmed to "after resetting 4,000 passwords", ends "and I'm using it, effective immediately."): 138 chars, 1 line.
- Variant D (v2 ending "so I'm pressing it now."): 136 chars, 1 line.

## Final pick: Variant C — 138 chars, 1 line
> I hereby resign: after resetting 4,000 passwords, I finally remembered my own — it was "escape" — and I'm using it, effective immediately.

Why C over A/D: keeps the concrete "4,000" (specific voice, criterion 4), drops the grievance, and the formal close "effective immediately" makes it read like a real sendable letter (criterion 3) while the punchline still lands on "escape" / "using it". D's "pressing it now" is a good second beat on the key, but C's ending has the letter-form snap and stays inside the 120–140 target band.
