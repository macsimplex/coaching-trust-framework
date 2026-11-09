# RFC 0006: Governance by an independent consortium

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0006-consortium-governance.fr.md](./0006-consortium-governance.fr.md).*

## Header

- **RFC number:** 0006
- **Title:** Governance by an independent consortium
- **Type:** Governance
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Governance · Guarantee building block · Certification scheme · Validation methodology
- **Supersedes:** —

## Abstract

This RFC proposes that CTF governance move, over time, from a single caretaker (the founder) to an independent consortium, itself bound by open and verifiable rules. The consortium publishes the tests, validates the evaluation protocol and issues certifications. The transition happens in stages, and the founding principle remains above any organization, including the consortium.

## Motivation

The vision states that a platform cannot certify itself and that trust can only come from an independent third party (postulate 3). It entrusts validation to an independent consortium whose rules are public. Yet `GOVERNANCE.md` currently provides for a single caretaker, the founder, who decides alone; the advisory circle and the scientific panel only give opinions. The founder creates and initiates CTF in order to broaden it, not to remain its owner. The founder also applies CTF to their own coaching agent projects, which creates a conflict of interest as soon as certification is involved: other contributors, and researchers to read and analyze the data, are needed.

## Detailed proposal

1. **Role of the consortium.** The consortium: publishes and renews the tests (public and reserved, RFC 0005); validates each version of the evaluation protocol (RFC 0002); issues, suspends and withdraws certifications (RFC 0003); decides on RFCs.
2. **Composition.** The consortium brings together several colleges: platform publishers, professional federations, researchers, supervisors. No college holds a majority on its own.
3. **Open rules.** Its statutes, its reasoned decisions, its accounts and its members' declared conflicts of interest are public. It applies to itself the requirements it imposes: its legitimacy rests on the consistency between what it requires and what it imposes on itself.
4. **Conflicts of interest.** A member who publishes an agent takes no part in any decision concerning that agent or its direct competitors. This rule applies to the founder with respect to their own agents.
5. **Staged transition.**
    - *Stage 1 (current)*: the founder is caretaker; the founding consortium is being formed.
    - *Stage 2*: the founding consortium validates evaluations and certifications; the caretaker keeps the decision on RFCs, after the consortium's opinion.
    - *Stage 3*: the consortium takes over all decisions; the single-caretaker role ends.
6. **Founding principle.** The principle "the common good prevails over any organization, including any organization that might one day emerge to steward this standard" applies to the consortium. The consortium cannot amend it through the ordinary procedure.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

Platforms deal with the consortium rather than with the founder alone. They can join the publishers' college.

### On declinations

Declinations carried by a federation remain that federation's responsibility; their recognition as CTF declinations falls to the consortium.

### On helper agents

No direct change. Maintenance of the helper agents passes to the consortium at stage 3.

### On the certification scheme

The consortium becomes the certification authority; federations take part through their college rather than certifying alone (see `certification-scheme/federation-pathway.md`).

## Alternatives considered

- **Single caretaker** (current situation): fast and coherent, but incompatible with postulate 3 once certification is involved.
- **Immediate consortium**: in line with the vision, but unrealistic until members have been brought together.
- **Entrusting certification to an existing organization** (certification body, federation): credible, but contrary to the founding principle and to independence from professional traditions.

## Open questions

- What legal form for the consortium (association, foundation, cooperative), and in which country?
- What criterion triggers the move from one stage to the next?
- How can the consortium be funded without depending on the platforms it certifies?
- What role for the current advisory circle and scientific panel?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
