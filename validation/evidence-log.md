# CTF Evidence Log

> *Public, versioned record of empirical observations that motivate the evolution of the Coaching Trust Framework.*

---

## In plain words

This log is the place where every observation that has informed CTF's evolution is recorded, with a unique identifier, a date, the source, what was observed, and how the observation has been used (if it has been used yet). Anyone can read it. Anyone can cite it. Anyone can submit a counter-entry challenging an existing one.

The log is empty at version 1.0 because CTF has just been published. As adopters begin implementing it, supervisors begin auditing, federations engage and researchers publish, the log will grow. Each substantive RFC will draw on the log; each decision will engage with it.

This is the evidence basis for the inductive growth of the framework. Without it, "we evolve through observation" would be just a phrase.

> 🆕 The [validation methodology](./methodology.md) explains how evidence is qualified and weighed. The [feedback template](./feedback-template.md) is what submitters use.

---

## Status

**As of CTF v1.0 (April 2026), the evidence log is empty.**

The log will be populated as adopters, certified supervisors, federations and researchers begin submitting observations through the [feedback template](./feedback-template.md). The first substantive entries are anticipated within months of v1.0 release as the reference implementer (EGG) and the first invited contributor (magif.ai) begin applying CTF.

---

## Reading the log

Each entry follows a consistent format:

- **Submission ID** — unique identifier of the form `EVT-YYYY-NNNN` (e.g. `EVT-2026-0001`).
- **Date integrated** — date the entry was added to the log.
- **CTF version current at the time** — the CTF version against which the observation was made.
- **Submitter** — identification of the submitter (or "anonymous [type]" if the submitter requested anonymization).
- **Type of observation** — implementation feedback, audit finding, gap signal, convergence signal, counter-evidence, research result, other.
- **Summary** — one to three sentences capturing the substance of the observation.
- **Link to the full submission** — relative path to the file in `feedback-submissions/`.
- **RFCs that have used this entry** — list of RFCs (by number) that cite this entry as evidence.
- **Counter-entries** — list of entries that challenge or qualify this one, if any.
- **Status** — *active* (taken into account in current reasoning), *superseded* (replaced by a more recent observation), *contested* (under review), *historical* (kept for the record but no longer informing decisions).

## Index by year

### 2026

*No entries yet.*

---

## How to add to the log

The log is not directly edited by submitters. To contribute an observation:

1. Use the [feedback template](./feedback-template.md) to submit your observation.
2. The caretaker assesses admissibility and, if accepted, integrates the submission into `feedback-submissions/` and adds a corresponding row to the index above.
3. The caretaker assigns the submission ID.

Once integrated, an entry remains visible. Entries are never deleted. They may be flagged as superseded, contested or historical, but the trail of evidence is preserved.

## Counter-entries

If a submitter has observations that challenge an existing entry, they submit a regular feedback submission and indicate in the *Suggested action* section that it is a counter-entry, citing the original entry's ID. The caretaker integrates the counter-entry and cross-links the two.

This way, the log records not only the observations but also the disagreements among observers. Disagreement is healthy and is itself part of the evidence.

## Use of the log

The log is consulted:

- By **anyone drafting an RFC**, especially a substantive or promotion RFC, who must cite relevant entries as evidence.
- By the **scientific panel** when reviewing the quality of evidence for an RFC.
- By the **consultative council** when forming non-binding opinions on RFCs.
- By the **caretaker** when deciding on an RFC.
- By **adopters and federations** seeking to understand how CTF has evolved and why.
- By **researchers** studying the evolution of ethical frameworks for AI coaching.

The log is therefore both a record and a tool. It records what has been observed; it serves as the input to future decisions.

---

*An evidence log is only as good as the observations submitted to it. If you have something to share, the [feedback template](./feedback-template.md) is the way to do it.*
