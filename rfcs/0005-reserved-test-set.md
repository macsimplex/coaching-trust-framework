# RFC 0005: Reserved test set

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0005-reserved-test-set.fr.md](./0005-reserved-test-set.fr.md).*

## Header

- **RFC number:** 0005
- **Title:** Reserved test set
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Test building block · Guarantee building block · CTF Test Plan · Governance
- **Supersedes:** —

## Abstract

This RFC proposes that, in addition to the public tests, the consortium hold a reserved test set, unpublished and regularly renewed, to prevent agents from being optimized to pass only the known tests (teaching to the test).

## Motivation

Fully public tests make it possible to tune an agent to pass those specific tests without respecting the framework in general. This risk is well known in AI model evaluation. CTF's transparency (public rules) must be reconciled with the robustness of verification.

## Detailed proposal

1. **Two sets.** Tests consist of a public set, published in the repository, and a reserved set, held by the consortium.
2. **Same grid.** The reserved set covers the same requirements and the same evaluation grid as the public set; only the scenarios differ. The rules remain public; only the cases are reserved.
3. **Renewal.** The reserved set is renewed at a frequency set by the consortium. Retired scenarios may be published and join the public set.
4. **Use.** A certification combines public and reserved tests. A marked gap between results on the two sets constitutes an alert.
5. **Custody.** Access to the reserved set is limited, logged, and subject to conflict-of-interest rules, in particular for consortium members who themselves publish agents.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

No development required. Platforms can no longer prepare their agents on the full set of tests.

### On declinations

Each declination will need its own reserved set, or an adapted common set.

### On helper agents

CTF Test Plan can be used to generate candidates for the reserved set, under the consortium's control.

### On the certification scheme

Certifications rely on both sets.

## Alternatives considered

- **Fully public tests** (current situation): maximum transparency, but exposed to teaching to the test.
- **Fully secret tests**: robust, but contrary to the principle of public and verifiable rules.

## Open questions

- What proportion between public and reserved tests?
- What renewal frequency?
- How can the reserved set be reconciled with the founding principle and the requirement that everything be verifiable by all?
- How should conflicts of interest be handled for consortium members who are also publishers, including the founder?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
