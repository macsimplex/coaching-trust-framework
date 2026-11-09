# RFC 0003: Version-bound continuous certification

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0003-version-bound-continuous-certification.fr.md](./0003-version-bound-continuous-certification.fr.md).*

## Header

- **RFC number:** 0003
- **Title:** Version-bound continuous certification
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Guarantee building block · Normative document · Certification scheme · CTF Audit · CTF Config
- **Supersedes:** —

## Abstract

This RFC proposes that a CTF certificate be valid for one precise version of an agent, defined by its model, its prompt and its knowledge base. Any change to any of these elements re-triggers the tests. Certification ceases to be a one-off event and becomes a continuous state.

## Motivation

An AI agent drifts: the provider updates the model, the creator changes the prompt or the knowledge base. An agent that conforms in March may no longer conform in June. Yet the repository currently provides for fixed-duration certifications (for example 24 months in `certification-scheme/federation-pathway.md`), annual reviews, and re-certification limited to "significant" design changes (`document/ctf-v1.0.md`).

## Detailed proposal

1. **Version identity.** An agent version is defined by the triple: exact model identifier (including its version at the provider), fingerprint of the prompt, fingerprint of the knowledge base.
2. **Scope of the certificate.** A certificate covers one agent version, and that version only. It states the triple.
3. **Trigger.** Any change to any of the three elements, including a model update by the provider, invalidates the certificate and re-triggers the tests of the Test building block.
4. **Continuity.** Between changes, the Monitor building block keeps observing real exchanges; detected drift can suspend the certificate.
5. **Publicity.** The state of the certificate (valid, suspended, being re-tested) is published and can be checked at any time.
6. **Proportionality.** The volume of re-run tests may be proportionate to the size of the change, under rules set by the consortium, but is never zero.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

Platforms must track the versions of their agents and report any change. Silent model updates by a provider become an issue: model versions need to be pinned.

### On declinations

No substantive adaptation, apart from aligning the validity periods currently provided for.

### On helper agents

CTF Config must record the version triple. Caching of previously passed scenarios (`tools/ctf-config/best-practices.md`) must be revisited: it cannot apply when the model or the knowledge base changes.

### On the certification scheme

Fixed validity periods and annual reviews are replaced by a continuous, version-bound state.

## Alternatives considered

- **Fixed-duration certification** (current situation): easy to read, but blind to changes between two deadlines.
- **Re-testing only for "significant" changes**: cheaper, but leaves it to the creator to judge what is significant.

## Open questions

- How should providers that do not allow pinning a model version be handled?
- What grace period between a change and the end of re-testing?
- Should there be a lighter level of re-testing for minor knowledge-base changes?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
