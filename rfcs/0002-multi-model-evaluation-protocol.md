# RFC 0002: Multi-model evaluation protocol

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0002-multi-model-evaluation-protocol.fr.md](./0002-multi-model-evaluation-protocol.fr.md).*

## Header

- **RFC number:** 0002
- **Title:** Multi-model evaluation protocol
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** [will be set by the caretaker on opening]
- **Status:** Draft
- **Affects:** Guarantee building block · CTF Audit · Validation methodology · Governance
- **Supersedes:** —

## Abstract

This RFC proposes that every evaluation of an agent under CTF be carried out by several distinct AI models, with arbitration of disagreements, proposals submitted to objection, regular calibration by human supervisors, and publication of the agreement rate. Persistent disagreements feed the evolution of the norm. The protocol is versioned and validated by the consortium.

## Motivation

Evaluation will largely be carried out by AI. Today, each CTF helper agent is a single call to one model (`tools/PIPELINE.md`), and the audit report of a single model can serve as a certification document. A single perspective, without calibration, does not make it possible to trust the evaluator.

## Detailed proposal

1. **Three evaluators.** Each transcript is evaluated independently by three distinct models (from different providers or families), against the same grid derived from the declination.
2. **One arbiter.** A fourth model examines the points of disagreement between evaluators, gives reasons for its decision and records it.
3. **One proposer.** A fifth model draws proposals from the disagreements (clarifying the grid, adding a case, rewording a requirement). These proposals are submitted to objection by the other models and then by humans, in a sociocracy-style loop: a proposal is adopted when no reasoned objection remains.
4. **Human calibration.** Human supervisors regularly evaluate a sample of the same transcripts; the gap between humans and models is measured and used to recalibrate the protocol.
5. **Transparency.** The agreement rate between evaluators, and between models and humans, is published for each version of the protocol.
6. **Evolution of the norm.** Disagreements that persist after arbitration are entered in the evidence log and may ground an RFC.
7. **Versioning.** The protocol (models, prompts, grid, thresholds) carries a version number. Every new version is validated by the consortium before use.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); empirical evidence must be gathered before the public comment period opens, in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

No development required on the platform side: the protocol is operated by the consortium or by approved evaluators. The cost of evaluation increases (five model calls instead of one).

### On declinations

The evaluation grids of declinations must be explicit enough to be applied consistently by several models.

### On helper agents

CTF Audit becomes one role within the protocol (evaluator) rather than the sole evaluator. The arbiter and proposer roles remain to be specified.

### On the certification scheme

A certification can only rely on an evaluation carried out under a validated version of the protocol.

## Alternatives considered

- **A single model** (current situation): simple and cheap, but with no measure of reliability.
- **Majority vote without an arbiter**: simpler, but loses the reasons behind disagreements, which are precisely what makes the norm evolve.
- **Fully human evaluation**: reliable, but impossible at the scale of all exchanges.

## Open questions

- How can real diversity among the three evaluators (providers, versions) be ensured?
- What frequency and sample size for human calibration?
- What minimum agreement rate makes an evaluation admissible?
- The term "score" is currently excluded from CTF vocabulary: what should the result of an evaluation be called?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission (draft).
