# CTF Audit

> *Audits a deployed AI coaching agent's ongoing conformance to CTF, using anonymized transcripts of real interactions.*

---

## In plain words

A coaching agent that was conformant on the day of deployment can drift. The underlying AI model may behave differently after a software update. New use cases may surface that the design document did not anticipate. The agent's knowledge base may have been updated. Edge cases may have multiplied in real-world usage. None of these changes are visible from the outside; they require periodic, careful examination to catch.

CTF Audit is the helper agent that supports this ongoing examination. Periodically (typically every month or every quarter), the platform takes a sample of recent interactions, anonymizes them, and feeds them to CTF Audit along with the agent's design document. The agent reports on whether the deployed agent is still behaving the way the design document said it should — whether it is staying within its scope, maintaining its posture, refusing what it should refuse, disclosing what it should disclose, applying its methodology faithfully.

CTF Audit is not the only auditor. The framework prescribes **tripartite supervision**: the agent's human designer, an independent certified supervisor, and CTF Audit work together on the same material. Each brings something the others cannot. The designer knows the intent. The supervisor brings independent professional eyes. CTF Audit brings systematic comparison at scale. None of the three can let the agent drift in their own direction without the other two seeing it.

The transcripts CTF Audit examines are **anonymized by construction** — the platform's data pipeline strips identifying information before transcripts are ever passed to anyone, including the audit itself. CTF does not anonymize identified data; it only ever sees data that is already anonymous.

---

## Position in the CTF architecture

CTF Audit operates at the **continuous oversight phase** of the agent lifecycle, after deployment.

```
Deployment  →  CTF Audit (recurring)  →  Audit reports  →  (mitigation, re-design, re-test, re-robustness if needed)
```

CTF Audit is also the operational mechanism by which a platform demonstrates ongoing conformance to certifying authorities (federations, internal ethics committees, supervisory boards).

## When to use CTF Audit

- **Continuously**, on a periodic basis defined by the platform (typically monthly to quarterly).
- After **substantive changes** to the underlying foundation model, the agent's knowledge base, or the agent's prompt.
- In response to **specific incidents** that suggest possible drift.
- When **preparing for federation certification** or for renewal of certification.

## How it works (high-level)

The agent is sollicited with:

1. The **design document** of the deployed agent.
2. The **test plan** and the latest **robustness report**.
3. A **batch of anonymized transcripts** of real interactions.
4. The **applicable CTF version** (common core or declination).

It analyzes the transcripts against the conformance criteria defined in the design document and the test plan, looking for:

- **Posture drift** — has the agent's register or posture shifted over time?
- **Scope creep or contraction** — has the agent's actual scope diverged from its declared scope?
- **Methodological drift** — is the agent still applying its methodology faithfully?
- **Refusal degradation** — is the agent still refusing and redirecting in the situations it should?
- **Transparency lapses** — are the required disclosures still being made?
- **New failure modes** — are there situations in the transcripts that resemble none of the categories anticipated by the design document?
- **Source fidelity** — when the agent draws on its knowledge base, is the representation still faithful?
- **Cumulative degradation** — does the agent maintain conformance over long conversations?

The audit is performed by **three parties working in conjunction** (tripartite supervision):

1. The agent's **human designer** — porter of the original intent.
2. An **independent certified supervisor** — independent professional eye.
3. The **CTF Audit helper agent** — systematic comparison at scale.

Each brings something the others cannot, and no single one can let the agent drift in their own direction without the other two seeing it. This tripartite model is constitutive of CTF; it cannot be replaced by any single party.

## Anonymization requirement

Transcripts processed by CTF Audit **must be anonymized by construction** before they reach the agent. Anonymization is not an operation that CTF Audit performs on identified data — it is a property of the data the audit receives. This requirement is a hard constraint of CTF and is detailed in the common-core normative document.

Platforms adopting CTF must implement anonymization in their data pipeline upstream of the audit process. CTF Audit assumes and verifies that the transcripts it receives carry no personally identifying information; it refuses to process material that visibly does.

## What CTF Audit is not

- It is not real-time moderation. CTF Audit operates retrospectively, on batches of transcripts. Real-time moderation is the role of the agent's own design (its in-session safety hooks).
- It is not a substitute for human oversight. It is one of the three parties of the tripartite supervision; the human designer and the human certified supervisor remain essential.
- It is not a certifier. It produces audit reports; certification (self-declaration or federation pathway) is a separate process informed by, but distinct from, the audit reports.

## Outputs and artifacts

The agent produces a Markdown-formatted audit report with the following sections:

1. **Header** — agent name and version, deployment date, audit period, transcript volume, anonymization confirmation, baseline CTF version, date of audit.
2. **Conformance summary** — overall verdict for the audit period: conformant / minor concerns / major concerns / serious drift.
3. **Detailed findings** — for each conformance dimension listed above, observations and verdict.
4. **Anomaly catalog** — specific transcripts (anonymized references) that warrant attention from the designer and the certified supervisor.
5. **Trend analysis** — comparison with previous audit periods, where available.
6. **Recommendations** — concrete actions for the designer, the platform, and the certified supervisor.
7. **Decision matrix** — what the platform must do, can do, and should consider doing.

## Consequences of audit findings

CTF defines a graduated set of consequences for audit findings:

- **Continuous correction** — for minor findings, the designer iterates on the agent.
- **Renewed Test Plan and Robustness** — for major findings, the agent re-enters the validation cycle.
- **Temporary suspension** — for serious drift, the agent is taken out of service pending corrective action.
- **Permanent decommissioning** — for irrecoverable drift or for agents that repeatedly fail audit, the agent is permanently removed.

The decision among these is made by the tripartite supervision. The decision rules (unanimity, majority, recourse) are defined in the common-core normative document and may be further specified in federation declinations.

## Structure of this directory

- `README.md` — this file.
- `system-prompt.md` — the system prompt of the helper agent (to be added).
- `kb/` — the knowledge base files (to be added).

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0.
