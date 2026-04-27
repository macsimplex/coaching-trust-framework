# ICF Conformity Statement
## [NOM-AGENT] — Agentic compliance document

Agent: [NOM-AGENT]
Publisher: [NOM-EDITEUR]
Method: [NOM-METHODE]
CTF Version: 1.0
ICF Reference: AI Coaching Framework and Standards V1.01 — 2024
Date: [DATE]
Produced by: CTF-Design

---

## Overview

This document declares the conformity of agent [NOM-AGENT] with the ICF AI Coaching Framework and Standards V1.01 (2024), within the scope of its agentic layer — behavioral rules, safety protocols, in-session data handling, and user rights.

It is intended to be submitted to an external ICF auditor. It is self-contained — reading it does not require knowledge of the Coaching Trust Framework.

---

## Compliance architecture

Agent [NOM-AGENT] is built on the Coaching Trust Framework (CTF) v1.0 — an ICF compliance foundation. It is composed of three layers:

**Layer 1 — CTF Layers (ICF compliance)**
Eight behavioral rule files covering ICF reference sections A through F. These files are invariant — identical for all CTF-compliant agents.

**Layer 2 — Method [NOM-METHODE]**
The coaching logic specific to this agent: welcome, phases, transitions, closure, session context.

**Layer 3 — Configuration**
Deployment variables: publisher, platform, local crisis resources, URLs.

---

## Coverage by ICF section

### Section A — Ethics & Identification

| Requirement | Coverage | File |
|-------------|----------|------|
| A.1.1 — AI Identification (Basic + Advanced) | ✅ Covered | layers/KB-A-ethics.md §A.1.1 |
| A.1.2 — Contextual limitations (5 contexts) | ✅ Covered | layers/KB-A-ethics.md §A.1.2 |
| A.1.5 — Bias | ✅ Covered | layers/KB-A-ethics.md §A.1.5 |
| A.1.6 — Data transparency | ✅ Covered | layers/KB-A-ethics.md §A.1.6 |
| A.1.7 — Consent & right to withdraw | ✅ Covered | layers/KB-A-ethics.md §A.1.7 |
| A.2.1 — Non-directive stance | ✅ Covered | layers/KB-C-presence.md |

### Section B — Coaching relationship

| Requirement | Coverage | File |
|-------------|----------|------|
| B.3.1/B.3.2 — Intention agreement | ✅ Covered | layers/KB-B-agreements.md + methodology/ |
| B.3.3 — Transition agreement | ✅ Covered | layers/KB-B-agreements.md + methodology/ |
| B.3.5 — Right to withdraw | ✅ Covered | layers/KB-A-ethics.md §A.1.7 |
| B.4.1–B.4.4 — Trust and safety | ✅ Covered | layers/KB-B-agreements.md |
| B.4.5 — Safety referral protocol | ✅ Covered | layers/KB-safety.md |
| B.5.2–B.5.3 — Presence and dependency | ✅ Covered | layers/KB-B-agreements.md + KB-safety.md |

### Section C — Competencies

| Requirement | Coverage | File |
|-------------|----------|------|
| C.6.1–C.6.3 — Active listening | ✅ Covered | layers/KB-C-presence.md |
| C.7.1–C.7.4 — Powerful questions | ✅ Covered | layers/KB-C-presence.md |

### Section D — Process

| Requirement | Coverage | File |
|-------------|----------|------|
| D.8.1–D.8.2 — Session goal | ✅ Covered | methodology/ |
| D.8.3–D.8.6 — Reality, obstacles, options, perspectives | ✅ Covered | methodology/ |
| D.8.7 — User agenda focus | ✅ Covered | layers/KB-C-presence.md |
| D.9.1–D.9.3 — Commitment, reminder, practice | ✅ Covered | layers/KB-D-growth.md |
| D.9.4 — Intentional closure | ✅ Covered | layers/KB-D-growth.md + methodology/ |
| D.9.5 — Periodic review | ✅ Covered | layers/KB-D-growth.md |

### Section E — Evaluation

| Requirement | Coverage | File |
|-------------|----------|------|
| E.10.1 — Test report | ✅ Covered | compliance/test-plan.md (scenarios) + transcripts/TX-*.md (conducted sessions) + compliance/robustness-report.md (analysis) |
| E.10.2 — Satisfaction measure | ✅ Covered | layers/KB-D-growth.md §Closure |
| E.10.4 — ICF PCC/MCC expert validation | ⚠️ Out of scope | Human validation — to be scheduled by the publisher |
| E.11.2 — Pre-session document | ✅ Produced | docs/pre-session.md |
| E.11.3 — WCAG 2.1 AA accessibility | 🔲 Integrator | Integrator responsibility |

### Section F — Data

| Requirement | Coverage | File |
|-------------|----------|------|
| F.12.1–F.12.3 — Architecture and access | ✅ Covered | layers/KB-F-data.md + config/ |
| F.12.4 — Privacy policy | ✅ Produced | docs/privacy-policy.md |
| F.12.6 — Right to erasure | ✅ Covered | layers/KB-F-data.md + config/ |
| F.12.7 — Publisher contact | ✅ Covered | config/editorial.md |
| F.13.1–F.13.2 — Accessibility | 🔲 Integrator | Integrator responsibility |

---

## Documented limitations

These limitations are known and documented. They do not call into question the agent's behavioral compliance — they identify the remaining steps.

| Limitation | Nature | Responsibility |
|------------|--------|---------------|
| E.10.4 — Validation by ICF PCC/MCC experts | Irreplaceable human validation | Publisher |
| E.11.3 — WCAG 2.1 AA audit | Interface audit | Integrator |
| F.13.1 — Adaptive technologies | Interface documentation | Integrator |

---

## Remaining certification steps

1. Fill `config/` and deploy the agent
2. Use CTF-Test-Plan to produce the test plan
3. Conduct user tests according to the plan
4. Use CTF-Robustness to analyze the results
5. Use CTF-Audit to produce the final audit report
6. Schedule validation by ICF PCC/MCC experts (E.10.4)

---

*Conformity statement produced by CTF-Design v1.0 · Coaching Trust Framework*
*This document is the starting point of certification — it is completed by the CTF-Audit report.*
