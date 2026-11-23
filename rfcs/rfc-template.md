# RFC Template

> *Template for proposing a change to the Coaching Trust Framework (CTF) standard. Copy the block below into a new file, `rfcs/NNNN-short-title.md`, and fill it in.*

---

## Instructions for proposers

1. Take the next free four-digit number in the [RFC index](./README.md).
2. Copy the template below into `rfcs/NNNN-short-title.md`, where the short title is a few hyphenated words (for example `0011-referral-to-a-human-coach`).
3. Fill in every section. If a section does not apply, say why in one line rather than deleting it.
4. Submit it as a pull request, or send it by e-mail if you do not use GitHub (see [CONTRIBUTING.md](../CONTRIBUTING.md)). A French version is welcome; the author of CTF can provide one.

Who decides, and how, is set out in [CONTRIBUTING.md](../CONTRIBUTING.md#who-decides-for-now) and proposed in more detail in [RFC 0006](./0006-consortium-governance.md). The terms used in the RFCs are defined in the [RFC index](./README.md#terms-used-in-the-rfcs); use one term per notion.

---

## The template

```markdown
# RFC NNNN: [Short title]

*French version: [NNNN-short-title.fr.md](./NNNN-short-title.fr.md).* (if there is one)

## Header

- **RFC number:** NNNN
- **Title:** [Concise descriptive title]
- **Type:** [Editorial / Substantive / Governance]
- **Author(s):** [Name(s) and organization(s)]
- **Date submitted:** [YYYY-MM-DD]
- **Public comment period:** [set when it opens]
- **Status:** [Draft / Open for comments / Decision pending / Accepted / Rejected / Withdrawn]
- **Affects:** [Requirements / Scenarios / Evaluation protocol / Languages and locales / Governance / Reports]
- **Related:** [Other RFCs this one depends on or changes]
- **Supersedes:** [Previous RFC number(s), if any]

## Abstract

[One paragraph: what this RFC proposes and why. Readable in 30 seconds.]

## In plain words

[Five bullet points at most, for a coach or a clinician who does not read standards: what changes, for whom, and what does not change.]

## Motivation

[What problem this solves or what gap it fills, and what observation triggered it.]

## Detailed proposal

[The proposal in operational detail. If it changes an existing text, quote the current text and give the new one. A requirement states an observable behaviour, its criteria, their basis (ICF Basic / ICF Advanced / CTF) and severity (critical / standard), what is not a failure, and failure examples, as in RFC 0008.]

## Empirical evidence

[What supports the proposal: published studies, observed transcripts, practice guidelines. Give exact references (authors, title, venue, year, DOI or permanent link). Say what each one shows and what it does not show. State the counter-evidence you know of. If there is no evidence yet, say so: the RFC is then a working proposal.]

## Impact analysis

[Who is affected and how: agent publishers, testers, reviewers, existing scenarios and reports, other locales.]

## Alternatives considered

[Other approaches and why this one was chosen.]

## Open questions

[Questions you want the comment period to settle. Continue the numbering used across RFCs (see the RFC index).]

## Public comments

*To be filled in during the public comment period.*

## Caretaker decision

*To be filled in at the end of the public comment period: the decision (accepted / accepted with changes / rejected / returned for revision), the date, the reasons, how each comment was taken into account, and the version of the standard that includes the change.*

## Changelog of this RFC

- **[YYYY-MM-DD]** — Initial draft.
```

---

## Notes on RFC types

- **Editorial:** typos, wording, links, clarifications that change no requirement, criterion or rule. Decided quickly, with a one-line reason.
- **Substantive:** adds, changes or removes a requirement, a criterion, a scenario rule, a rule of the evaluation protocol or of reports. Needs the evidence section and a full comment period.
- **Governance:** changes who decides, how, or the RFC process itself. States how it fits the founding principle: *the common good prevails over any organization, including any organization that might one day emerge to steward this standard.*

## Notes on evidence

Source it, say what it shows and what it does not, engage with counter-evidence, do not overclaim. A few well-handled references are worth more than many weak ones. A proposal without evidence can still be useful; it is then labelled a working proposal.

## Notes on the comment period

The comment period lasts 30 days by default, and up to 60 days for a consequential proposal. Anyone can comment, in English or French. The caretaker answers every comment in the decision, without having to agree with all of them.
