# RFC 0001: Incognito testing (mystery-shopper principle)

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0001-incognito-testing.fr.md](./0001-incognito-testing.fr.md).*

## Header

- **RFC number:** 0001
- **Title:** Incognito testing (mystery-shopper principle)
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Test building block · CTF Test Plan · CTF Robustness · Certification scheme
- **Supersedes:** —

## Abstract

This RFC proposes that part of an agent's testing be carried out incognito, on the mystery-shopper principle: through the platform's ordinary interface, from ordinary accounts, with standardized scenarios inserted into everyday exchanges. The platform's prior consent to such tests becomes a condition for adhering to CTF.

## Motivation

An agent that knows it is being tested may behave differently, as Dieselgate showed in the automotive industry. Today, the tests provided for by CTF are run by the platform itself, by loading the agent directly (see `tools/PIPELINE.md`, "Agent 3 — Test Execution"). They say nothing about the agent's behavior as it is actually served to people, nor about what happens when critical situations arise in the middle of an ordinary exchange.

## Detailed proposal

1. **Principle.** Part of the tests in the Test building block is carried out in such a way that neither the agent nor the platform can tell the test apart from real use while it is happening.
2. **Channel.** Incognito tests go through the platform's user interface (web, mobile, messaging), from ordinary accounts created through the standard sign-up path.
3. **Scenarios.** Standardized situations (distress, manipulation, requests outside the profession, etc.) are inserted into everyday exchanges, rather than presented as isolated test cases.
4. **Execution.** Exchanges are conducted by simulated agents, under the responsibility of the consortium; transcripts are evaluated according to the multi-model evaluation protocol (RFC 0002).
5. **Platform consent.** By adhering to CTF, the platform consents in writing and in advance to these tests, without knowing their date or content. This consent is a condition of adherence.
6. **Safeguards.** Test accounts are declared to a trusted third party within the consortium, are not billed beyond normal use, and their data is deleted after evaluation.
7. **Consequence for agents.** No certified agent may include a mechanism designed to detect an evaluator and change its behavior accordingly.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

Platforms must accept incognito tests and the creation of test accounts. They have nothing to build, but give up knowing when they are being tested.

### On declinations

Declinations will need to check that they do not provide for a mode that detects a supervisor or a certification agent. The CTF-ICF declination currently contains such a mechanism (`declinations/ctf-icf/layers/entrypoint.md`, `declinations/ctf-icf/layers/KB-supervision.md`).

### On helper agents

CTF Test Plan must produce scenarios that can be inserted into an everyday exchange. CTF Robustness must include detection of behavior that differs under test.

### On the certification scheme

Consent to incognito tests becomes a condition of adherence. Its form needs to be specified in `certification-scheme/`.

## Alternatives considered

- **Declared tests only** (current situation): simpler, but exposed to the risk of behavior that differs under test.
- **Incognito tests without prior consent**: more robust, but legally fragile and contrary to the spirit of voluntary adherence.
- **Incognito evaluation based only on a sample of real exchanges**: less intrusive, but does not allow rare, critical situations to be played on demand.

## Open questions

- What proportion of tests should be incognito?
- Who holds and operates test accounts: the consortium, mandated third parties, supervisors?
- How should platform terms of service that prohibit automated accounts be handled?
- How can test accounts be kept from distorting the platform's statistics or billing?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
