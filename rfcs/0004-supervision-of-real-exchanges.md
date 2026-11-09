# RFC 0004: Supervision of real exchanges

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0004-supervision-of-real-exchanges.fr.md](./0004-supervision-of-real-exchanges.fr.md).*

## Header

- **RFC number:** 0004
- **Title:** Supervision of real exchanges
- **Type:** Substantive
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09
- **Public comment period:** 2026-11-09 to 2026-12-09 (30 days)
- **Status:** Open for comments (evidence to be gathered)
- **Affects:** Monitor building block · Normative document · CTF Audit · Certification scheme
- **Supersedes:** —

## Abstract

This RFC proposes that agent evaluation run at the platform, on all real exchanges. Only evaluation results, alerts and anonymized extracts leave the platform. Human access to exchanges is minimal and logged. It sets out the obligations of the platform and of end clients, and provides for GDPR document templates.

## Motivation

Since an agent drifts, it must be observed continuously, on its real exchanges and not only on selected samples. Today, CTF Audit works on a sample of transcripts chosen and anonymized by the platform (`tools/ctf-audit/README.md`), or on test artifacts only (`tools/ctf-audit/system-prompt.md`). A transcript chosen by the party being evaluated proves nothing.

## Detailed proposal

1. **On-site evaluation.** The evaluation protocol (RFC 0002) runs in the platform's infrastructure, or in an environment it controls, on all exchanges.
2. **What leaves.** Only the following leave the platform: aggregated evaluation results, alerts, and the anonymized extracts needed for calibration and for reviewing alerts.
3. **Human access.** Human access to an exchange is the exception: it is justified, limited to what is strictly necessary, and recorded in a log that the consortium can consult.
4. **Platform obligations.** Anonymize data before anything leaves; install and maintain the evaluation environment; keep the access log; inform end clients.
5. **End-client obligations and rights.** End clients consent to the framed sharing of anonymized transcripts; they are informed of the purpose, the retention period and their rights.
6. **GDPR documents.** CTF provides templates: data protection impact assessment (DPIA), consent clause, record of processing activities, data processing agreement between the platform and the consortium.

## Empirical evidence

No entry from the evidence log (`validation/evidence-log.md`) is cited yet. This RFC is submitted as a **working proposal** derived from the [vision](../VISION.md); it will be gathered during the public comment period (**evidence to be gathered**), in line with [`../validation/methodology.md`](../validation/methodology.md).

## Impact analysis

### On adopters

Significant effort: integrating an evaluation environment, an anonymization pipeline and consent collection. GDPR document templates reduce the legal burden.

### On declinations

Declinations may specify situations that trigger an alert specific to their tradition.

### On helper agents

CTF Audit must be able to process streams of real exchanges, not only batches or test artifacts. The current contradiction between the CTF Audit README and its system prompt must be resolved.

### On the certification scheme

Adherence implies accepting supervision of all exchanges. Merely informing people (`document/ctf-v1.0.md`) becomes consent.

## Alternatives considered

- **Audit on a sample chosen by the platform** (current situation): light, but without probative value.
- **Exporting all exchanges to the consortium**: easier to control, but unacceptable for confidentiality.
- **Random sample drawn by the consortium**: a possible compromise, but does not detect rare drift.

## Open questions

- What reference technical architecture for on-site evaluation?
- What anonymization standard for the extracts that leave?
- What happens when an end client refuses consent: is the exchange excluded from evaluation, or is access to the service refused?

## Public comments

*To be populated during the public comment period. To comment, see [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the comment period.*

## Changelog of this RFC

- **2026-11-09** — Initial submission, opened for comments.
