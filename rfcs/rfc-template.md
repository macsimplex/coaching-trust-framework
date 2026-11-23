# RFC Template

> *Template for proposing a change to the Coaching Trust Framework. Copy this file into a new RFC file (`rfcs/NNNN-short-title.md`) and fill it in.*

---

## Instructions for proposers

1. Choose the next available four-digit number (NNNN) for your RFC. Look at the existing files in `rfcs/` to find it.
2. Copy this template into `rfcs/NNNN-short-title.md`. The short title should be a few hyphenated words that summarize the proposal (e.g. `0001-clarify-anonymization-language` or `0042-promote-distress-handling-to-common-core`).
3. Fill in every section. Sections marked *(if substantive)* are required only for substantive RFCs (additions, modifications, promotions). Sections marked *(if promotion)* are required only when the RFC proposes promoting a requirement from one or more declinations into the common core.
4. Submit as a pull request to the repository.

The full RFC process is described in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 3 (general process) and section 4 (special procedure for promotions). The validation methodology that governs evidence is described in [`../validation/methodology.md`](../validation/methodology.md).

> 🆕 If terms like *common core*, *declination*, *multiple implementations rule* are unfamiliar, the [EXPLAINER](../EXPLAINER.md) covers them in plain language.

---

## The template

Copy the section below into your new RFC file and fill it in.

```markdown
# RFC NNNN: [Short title]

## Header

- **RFC number:** NNNN
- **Title:** [Concise descriptive title]
- **Type:** [Editorial / Substantive / Governance / Upstream]
- **Author(s):** [Name(s) and organization(s)]
- **Date submitted:** [YYYY-MM-DD]
- **Public comment period:** [will be set by the caretaker on opening]
- **Status:** [Draft / Open for comments / Decision pending / Accepted / Rejected / Withdrawn]
- **Affects:** [Common core / Declination(s) / Helper agent(s) / Certification scheme / Validation methodology / Governance]
- **Supersedes:** [Previous RFC number(s) if any]

## Abstract

[One paragraph summarizing what this RFC proposes and why. Should be readable in 30 seconds and convey the essential.]

## Motivation

[Why this change should be made. What problem does it solve? What gap does it fill? What observation triggered the proposal? Aim for clarity, not length.]

## Detailed proposal

[The actual proposal, in operational detail. If the RFC modifies an existing document, quote the current text and propose the new text in clear before/after form. If the RFC introduces something new, write it in the form it would take in the published framework.]

## Empirical evidence (if substantive)

*[This section is required for all substantive RFCs (additions, modifications, promotions). It is the place where the proposer cites the observations that motivate the proposal. See [`../validation/methodology.md`](../validation/methodology.md) for what counts as good evidence.]*

### Evidence cited

- **EVT-YYYY-NNNN** — [brief description and what it shows]
- **EVT-YYYY-NNNN** — [brief description and what it shows]
- *(add as many as relevant)*

### Quality of evidence

[Briefly characterize the strength and limits of the evidence: how many independent sources, what kinds (implementation, supervision, research), what is missing, what counter-evidence has been engaged with.]

### Counter-evidence engaged with

[Are there observations that go in the opposite direction? Cite them and explain how the proposal accommodates them or why they should not block the proposal.]

## Cross-declination convergence (if promotion)

*[This section is required for promotion RFCs (RFCs that propose moving a requirement into the common core). It demonstrates compliance with the multiple implementations rule.]*

### Declinations citing this requirement

- **CTF-X v[version]**, section [reference] — [quote or paraphrase]
- **CTF-Y v[version]**, section [reference] — [quote or paraphrase]
- *(at least two independent declinations are required)*

### Convergence analysis

[Summary of how the requirements compare across declinations. Are they direct matches, conceptual matches, or partial matches? Was CTF Converger used? Reference the convergence analysis if so.]

### Proposed common-core formulation

[The wording the requirement would take in the common core. Should subsume the variations observed across declinations while remaining as light as possible.]

## Impact analysis

### On adopters

[How would adopters be affected? Would they need to change anything? What is the expected effort? Is there a transition period?]

### On declinations

[How would existing declinations be affected? Do they already comply or would they need to adjust?]

### On helper agents

[Would any of the helper agents need updating?]

### On the certification scheme

[Does this affect what platforms self-declare or what federations certify?]

## Alternatives considered

[What other approaches were considered, and why was the proposed approach chosen over them? Honest engagement with alternatives strengthens an RFC.]

## Open questions

[List any questions you do not feel ready to resolve and would like the public comment period to address.]

## Public comments

*[This section will be populated during the public comment period. Submitters of comments may add their entries here through pull requests.]*

### [YYYY-MM-DD] — [Commenter name and organization]

[Comment text]

### [YYYY-MM-DD] — [Commenter name and organization]

[Comment text]

## Scientific panel opinion (if substantive and panel exists)

*[Filled in by the caretaker when the scientific panel issues its non-binding opinion on the quality of evidence.]*

## Consultative council opinion (if substantive and council exists)

*[Filled in by the caretaker when the consultative council issues its non-binding opinion on the proposal.]*

## Caretaker decision

*[Filled in by the caretaker at the end of the comment period. Includes: the decision (accepted / accepted with modifications / rejected / returned for revision), the date, the motivation engaging substantively with comments and panel/council opinions, and — if accepted — the version into which the change is integrated.]*

## Changelog of this RFC

- **[YYYY-MM-DD]** — Initial submission.
- *(record subsequent revisions of the RFC itself here)*
```

---

## Notes on RFC types

- **Editorial RFC** — typo fixes, formatting, link corrections, clarifications that do not change requirements. Light review by the caretaker; usually accepted quickly.
- **Substantive RFC** — additions, modifications, removals from a normative document, helper agent specification, certification scheme, validation methodology. Requires evidence section and full RFC process.
- **Governance RFC** — modifications to GOVERNANCE.md or to the RFC process itself. Elevated diligence; explicit consideration of how the proposal interacts with the founding principle.
- **Upstream RFC** — proposes the promotion of a requirement from one or more declinations into the common core. Special procedure described in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 4. Must demonstrate compliance with the multiple implementations rule.

## Notes on the evidence section

The evidence section is the heart of any substantive RFC. A proposal that cannot cite observations should not exist as a substantive RFC; it should either be re-scoped as an editorial clarification or be returned to the proposer for completion before the comment period opens.

The standard for evidence is set in the [validation methodology](../validation/methodology.md). The principles are: source it, qualify it, engage with counter-evidence, do not overclaim. A modest body of well-handled evidence is stronger than an inflated body of weakly-handled evidence.

## Notes on the public comment period

The default public comment period is 30 days. The caretaker may extend it up to 60 days if the proposal is consequential or if the comment volume warrants it. Comments may come from anyone, anywhere, in any language (English is preferred for indexability, but other languages will be translated when integrated into the public record).

The caretaker is required to consider all comments substantively in the decision motivation, but is not required to agree with all of them.

---

*Thank you for proposing an evolution of CTF. The integrity of the process depends on the care each proposer takes to fill out this template thoroughly.*
