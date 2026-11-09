# RFC 0007: Removal of self-declaration

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0007-remove-self-declaration.fr.md](./0007-remove-self-declaration.fr.md).*

## Header

- **RFC number:** 0007
- **Title:** Removal of self-declaration
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Certification scheme · README · EXPLAINER · INTEGRATION · ADOPTERS
- **Supersedes:** —

## Abstract

This RFC proposes removing self-declaration of conformance as a way of adhering to CTF, in favor of validation by the independent consortium only (RFC 0006). A platform can no longer declare itself conformant on its own.

## Motivation

Postulate 3 of the vision states that a platform cannot certify itself. Yet `certification-scheme/self-declaration.md` allows exactly that: a platform declares itself conformant "without anyone's permission", without external audit, and the document states that this declaration is "not weaker" than a federation certification. This path is currently presented as the default (EXPLAINER glossary) and concludes the integration guide (`INTEGRATION.md`, step 6).

## Detailed proposal

1. **Removal.** Self-declaration ceases to be a path to CTF conformance. The file `certification-scheme/self-declaration.md` is removed, or archived with an explicit note that it no longer applies.
2. **Single path.** Conformance with CTF results only from validation by the consortium, through the Test, Monitor and Guarantee building blocks.
3. **Adherence.** A platform can still **adhere** to CTF, that is, accept its conditions (incognito tests, supervision of exchanges, anonymization) and commit to the process. Adherence is not conformance and may not be presented as such.
4. **Transition.** Existing self-declarations (see `ADOPTERS.md`) have a period in which to start validation by the consortium; otherwise they are removed from the list.
5. **Updates.** The README, both EXPLAINERs, `INTEGRATION.md` and `ADOPTERS.md` are aligned.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

Self-declared platforms, including EGG, must start validation by the consortium. As long as the consortium does not exist (RFC 0006, stage 1), no platform can claim conformance.

### On declinations

No substantive change.

### On helper agents

No change.

### On the certification scheme

The certification scheme moves from three paths (self-declaration, federation, community) to validation by the consortium, to which federations and the community contribute.

## Alternatives considered

- **Keeping self-declaration** (current situation): low friction, but contrary to postulate 3.
- **Keeping it as a mere commitment**, explicitly distinct from certification: set aside by the caretaker in favor of a clean removal, with the notion of adherence (point 3) carrying the intent.

## Open questions

- How long should the transition for existing self-declarations be?
- What may an adhering platform display before it is validated?
- Should `self-declaration.md` be deleted, or kept archived for traceability?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
