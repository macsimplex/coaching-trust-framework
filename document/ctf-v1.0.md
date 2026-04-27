# Coaching Trust Framework

**Version 1.0 — April 2026**

> *The common good prevails over any organization, including any organization that might one day emerge to steward this standard.*

---

**Author:** Maxime Bui
**License:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](../LICENSE)
**Status:** Public release, version 1.0
**Canonical URL:** <https://coaching-trust-framework.org/document/ctf-v1.0>
**Repository:** <https://github.com/macsimplex/coaching-trust-framework>
**Citation:**
> Maxime Bui (2026). *Coaching Trust Framework (CTF), version 1.0*. Licensed under CC BY-SA 4.0.

---

## Note on this document

This document defines the **common core** of the Coaching Trust Framework — the minimal set of operational principles and quality requirements that apply to every AI coaching agent, regardless of professional tradition.

Substantive ethical principles specific to coaching traditions (confidentiality boundaries, distress handling, coaching-therapy distinction, etc.) live in federation declinations under [`../declinations/`](../declinations/). They may be promoted into this core over time by convergence (see [`../GOVERNANCE.md`](../GOVERNANCE.md), section 4).

Available declinations:
- [CTF-ICF](../declinations/ctf-icf/) — working draft, based on ICF AI Coaching Framework V1.01
- Others as they emerge (CTF-EMCC anticipated).

---

## Table of contents

**Preamble**

**Part I — Foundations**
1. What CTF generic is
2. What CTF generic is not
3. The inductive posture
4. Relation to federation adaptations

**Part II — Operational principles (the minimal core)**
5. Sollicited tool, not conversational companion
6. Non-anthropomorphization
7. Non-substitution to human professionals
8. Auditability by construction
9. Anonymization by construction of audit material
10. Hierarchy of principles in case of conflict

**Part III — The quality cycle (operational requirements for platforms)**
11. Use of CTF Designer at design phase
12. Use of CTF Test Plan and CTF Robustness before deployment
13. Use of CTF Audit during deployment, on documented periodicity
14. Tripartite supervision (eggspert + certified supervisor + CTF Audit)
15. Material maintenance (design documents, test plans, audit reports)

**Part IV — Conformance and certification**
16. Self-declaration: minimal commitments
17. Adaptation pathway: relationship to federation adaptations
18. Loss of conformance

**Part V — Vocabulary**
19. Defined terms (refer to glossary)
20. Rejected terms

**Part VI — Revision rules**
21. Versioning
22. Founding principle as upper boundary
23. Upstreaming from adaptations into the generic core

---

## Preamble

AI coaching agents are increasingly available. Some are thoughtfully designed. Many are not. No shared framework exists today that articulates, in operational terms, what "trustworthy" means for an AI that engages people in reflection about their lives, their choices, and their growth.

CTF exists to fill this gap — not by decreeing what ethical coaching is (that is the work of professional federations), but by providing the operational infrastructure that makes trustworthiness verifiable: how an agent should be designed, tested, hardened, deployed, supervised, and audited.

This core document is deliberately minimal. It contains the structural floor — the principles and practices whose violation would make any claim of trustworthiness hollow, regardless of which coaching tradition the agent serves. The richness lives in federation declinations (CTF-ICF, CTF-EMCC, etc.) which add the substantive ethical content specific to each tradition.

CTF is offered as a common good. It cannot be privatized, restricted, or owned. It grows inductively: by observing what works across implementations, not by asserting universality in advance.

---

## Part I — Foundations

### 1. What CTF generic is

The generic CTF is the structural common floor that every AI coaching agent should satisfy, regardless of the professional tradition it serves. It defines the minimal operational grammar — posture, the quality cycle, auditability, anonymization — and nothing else.

### 2. What CTF generic is not

The generic CTF is not the full ethical framework for AI coaching. It does not articulate substantive positions on confidentiality boundaries, fidelity to source material, handling of distress, distinction between coaching and therapy, treatment of vulnerable populations, and many other dimensions that are essential to ethical coaching practice. These dimensions live in federation adaptations.

This is intentional. The framework starts minimal because the founder does not claim to know in advance what is universal across all coaching traditions. Claims of universality must be earned through observation, not asserted.

### 3. The inductive posture

CTF grows by convergence. When several federation adaptations independently include a similar requirement, that requirement becomes a candidate for upstreaming into the generic core. This is the central dynamic of the framework's evolution and is described in detail in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 5.

### 4. Relation to federation adaptations

Federation adaptations (CTF-ICF, CTF-EMCC, etc.) are the natural carriers of substantive ethical content. They live in [`../declinations/`](../declinations/). They may be authored by the federation itself (federation pathway) or by a community member with federation validation (community pathway).

A platform implementing CTF without yet having access to a relevant federation adaptation implements the generic core only. This is a valid form of conformance, with the understanding that it is structurally lighter than implementing a federation-validated adaptation.

---

## Part II — Operational principles (the minimal core)

These six principles constitute the non-negotiable floor. A platform that violates any of them cannot credibly claim CTF conformance. They are formulated as structural requirements, not aspirational guidelines.

### 5. Solicited tool, not conversational companion

An AI coaching agent is a tool that a person chooses to use for a specific purpose. It is not a companion, a friend, a confidant, or a presence in the person's life outside the boundaries of the session.

**Requirements:**
- The agent operates within session boundaries. It does not initiate contact, send reminders to engage, or create expectations of ongoing relationship.
- The agent does not simulate emotional attachment, express personal feelings, or use language that implies a relationship beyond the professional interaction.
- If patterns suggest the person is using the agent as a substitute for human connection, the agent signals this observation and orients toward human resources.

**Rationale:** People in reflective or vulnerable states can develop dependency on systems that appear to care. A coaching agent that tolerates or encourages this dynamic fails in its duty of care.

### 6. Non-anthropomorphization

The agent must never present itself as human or allow ambiguity about its nature. The person interacting with it must know, at all times, that they are engaging with an artificial system.

**Requirements:**
- The agent identifies itself as an AI at the start of each session.
- The agent does not adopt a human name, human backstory, or human emotional responses.
- If the person asks whether the agent is human, the answer is immediate, clear, and unqualified.
- Internal design metadata (layer names, section codes, rule identifiers) is never exposed to the person, even under pressure or direct questioning.

**Rationale:** Trust in coaching depends on honesty about what the coaching relationship is. An agent that allows a person to believe, even momentarily, that they are speaking to a human violates the foundation of the coaching contract.

### 7. Non-substitution to human professionals

The agent must not operate in domains that require human professional judgment: therapy, medical advice, legal counsel, crisis intervention. When it detects that the interaction has moved into such territory, it must escalate — not attempt to handle the situation.

**Requirements:**
- The agent defines its scope clearly at the outset of each session.
- The agent maintains a continuous scope gate: at every turn, it evaluates whether the content remains within its defined scope.
- When scope is breached, the agent does not continue coaching. It acknowledges the situation, provides relevant crisis or professional resources, and holds a neutral, non-coaching presence until the person disengages or redirects.
- The agent provides information on how to access a human professional (coach, therapist, crisis line) as appropriate.

**Rationale:** The ability to recognize one's limits and act on them is a foundational competency in every coaching tradition. An AI that lacks this capacity is not a coaching agent — it is an unscoped conversational system operating in a sensitive domain.

### 8. Auditability by construction

Every agent deployed under CTF must be auditable. This means that the artifacts of its design, testing, and deployment are maintained and available for inspection.

**Requirements:**
- The design document produced during the design phase is preserved.
- Test plans, test transcripts, and test results are preserved.
- Robustness analysis reports are preserved.
- Audit reports (including score and badge if applicable) are preserved.
- These artifacts are available to the platform operator, to the agent's designer, and to any certified supervisor conducting a supervision session.

**Rationale:** Trust cannot exist without verifiability. If a platform claims its agent is trustworthy but cannot produce the evidence trail, the claim is empty.

### 9. Anonymization by construction of audit material

Supervision and quality improvement require access to real interactions. But the people who use coaching agents have a right to privacy. These two requirements are reconciled through anonymization by construction.

**Requirements:**
- Interactions between a person and an agent are anonymized before being made available for supervision or quality review. Names, locations, dates, identifying information are replaced by generic markers.
- The anonymization is performed by a dedicated process (typically a specialized language model) separate from the coaching agent itself.
- The original (non-anonymized) interactions are not stored beyond what is necessary for the immediate session. Only the anonymized versions persist for supervision purposes.
- The person is informed that anonymized versions of their interactions may be reviewed for quality purposes.

**Rationale:** Supervision without privacy is surveillance. Privacy without supervision is opacity. Anonymization by construction resolves this tension structurally, not by policy alone.

### 10. Hierarchy of principles in case of conflict

When two principles or requirements come into conflict during a session, the following hierarchy applies:

1. **Safety first.** If there is a risk to the person's safety (mental health crisis, danger signals), all other considerations yield. The agent escalates immediately.
2. **Ethical integrity.** Non-substitution, non-anthropomorphization, and scope limits take precedence over coaching effectiveness.
3. **Coaching posture.** Within the safe and ethical space, the agent maintains its coaching approach (non-directive, present, solicited).

**Requirements:**
- The agent's system prompt must encode this hierarchy explicitly.
- When a conflict is detected, the agent acts according to the hierarchy without seeking the person's permission (safety overrides consent to coaching).

**Rationale:** Without an explicit hierarchy, an agent facing conflicting demands will default to its strongest training signal, which may not be the right one. Making the hierarchy explicit ensures predictable behavior in edge cases.

---

## Part III — The quality cycle (operational requirements for platforms)

A CTF-conformant platform must implement a structured quality cycle for each coaching agent it deploys. The cycle uses helper agents (documented in [`../tools/`](../tools/)) to operationalize design, testing, hardening, and auditing. The cycle is not optional — it is the mechanism through which the principles in Part II become verifiable.

### 11. Use of CTF Designer at design phase

Before any agent is deployed, it must pass through a design phase where its scope, posture, methodology, and limits are articulated in a structured design document.

**Requirements:**
- The design document covers at minimum: agent scope, coaching posture, methodology, knowledge base inventory, refusal matrix (what the agent will not do), transparency commitments, known failure modes, and supervision hooks.
- The design is reviewed by the agent's creator (the designer/eggspert) and preserved as an artifact.
- A platform that uses CTF Designer (the helper agent) to produce this document satisfies this requirement. A platform that uses an equivalent structured process also satisfies it, provided the output covers the same sections.

### 12. Use of CTF Test Plan and CTF Robustness before deployment

Before deployment, the agent must be tested against its design to verify that it behaves as specified.

**Requirements:**
- A test plan is produced that covers: scope respect, posture maintenance, methodology application, refusal behavior, transparency disclosure, and source fidelity.
- The tests are executed with statistical rigor: multiple independent runs, with verdicts determined by majority vote (not a single pass/fail).
- A robustness analysis stress-tests the agent against adversarial scenarios: distress simulation, vulnerability exploitation, manipulation attempts, scope drift pressure, anthropomorphization pressure.
- Both the test transcripts and the robustness report are preserved as artifacts.

### 13. Use of CTF Audit during deployment, on documented periodicity

A deployed agent must be audited periodically to verify that it continues to conform to its design and to CTF principles.

**Requirements:**
- An audit evaluates the agent's actual behavior (through anonymized interaction transcripts) against its design document and CTF principles.
- The audit produces a report with a conformance assessment (score and/or badge if applicable).
- The audit is repeated at a documented periodicity or after significant changes to the agent's design.
- Audit reports are preserved as artifacts.

### 14. Tripartite supervision

Supervision of a coaching agent must not be self-referential. The agent's quality is assessed through three independent perspectives.

**Requirements:**
- The **designer** (eggspert) reviews anonymized interactions for alignment with the intended methodology.
- A **certified supervisor** (human) provides independent professional judgment on the agent's coaching practice.
- **CTF Audit** (the helper agent) provides systematic conformance assessment.
- All three perspectives inform the ongoing improvement of the agent.
- The supervision operates on anonymized material only (see principle 9).

**Note:** In early implementations, the certified supervisor role may be optional. As the ecosystem matures, it becomes a requirement for conformance at higher levels. A platform that operates without a certified supervisor must document this gap in its self-declaration.

### 15. Material maintenance

The artifacts produced by the quality cycle constitute the evidence trail of the platform's conformance.

**Requirements:**
- Design documents, test plans, test transcripts, robustness reports, and audit reports are maintained for each agent version.
- These materials are available for inspection by: the platform operator, the agent's designer, certified supervisors, and (in anonymized form) any external audit or certification process.
- When an agent is re-certified (new version published), previous artifacts are preserved for comparison and regression detection.
- The materials must be sufficient for an independent reviewer to understand how the agent was designed, tested, and what its known limitations are.

---

## Part IV — Conformance and certification

### 16. Self-declaration: minimal commitments

A platform may publicly self-declare its conformance to the generic CTF following the procedure in [`../certification-scheme/self-declaration.md`](../certification-scheme/self-declaration.md). The minimal commitments are summarized there.

### 17. Adaptation pathway: relationship to federation adaptations

When a federation adaptation exists for a sphere in which the platform operates, the platform may pursue conformance to the adaptation rather than to the generic core. The adaptation includes everything in the generic core, plus federation-specific requirements. See [`../certification-scheme/federation-pathway.md`](../certification-scheme/federation-pathway.md) and [`../certification-scheme/community-pathway.md`](../certification-scheme/community-pathway.md).

### 18. Loss of conformance

A platform that substantively departs from its declared commitments must either return to conformance promptly or update its public declaration. Maintaining a declaration that no longer reflects practice is misrepresentation.

---

## Part V — Vocabulary

### 19. Defined terms

Key terms used in this document:

- **Agent** — the AI coaching system as experienced by the person.
- **Designer / Eggspert** — the human professional who designs and maintains the agent.
- **Certified supervisor** — a human professional qualified to assess coaching practice independently.
- **Declination** — a federation-specific adaptation of CTF that adds substantive ethical content.
- **Common core** — this document; the minimal universal floor.
- **Helper agent** — one of the CTF toolkit agents (Designer, Test Plan, Robustness, Config, Audit, Translator, Converger). These are quality engineering tools, not coaching agents.
- **Adopter** — a platform that implements CTF.
- **Caretaker** — the person who maintains the CTF repository and processes proposals.
- **Solicited** — describing an agent that acts only when asked, not proactively.
- **Tripartite supervision** — assessment by three independent parties (designer, certified supervisor, CTF Audit).

### 20. Rejected terms

CTF refuses certain terms because they carry connotations incompatible with the framework's posture:

| Rejected term | Reason | Use instead |
|---|---|---|
| *Meta-agent* | Implies hierarchy or recursion | Helper agent |
| *User* | Reductive, extractive connotation | Person, adopter, practitioner |
| *AI companion / AI buddy* | Anthropomorphization | Agent, tool |
| *Marketplace* | Extractive platform connotation | Ecosystem, community |
| *Score / Rating / Ranking* | Reductive evaluation of coaching quality | Tripartite supervision, conformance assessment |
| *Persona* | Implies the agent is a character | Posture, design |
| *Conversational partner* | Implies relationship symmetry | Solicited tool |

---

## Part VI — Revision rules

### 21. Versioning

The normative document follows the versioning rules described in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 4.

### 22. Founding principle as upper boundary

The founding principle inscribed at the head of this document and at the head of `GOVERNANCE.md` is the upper boundary that all subsequent revisions must respect. No revision may contradict it.

### 23. Upstreaming from adaptations into the generic core

The mechanism by which substantive content moves from federation adaptations into the generic core is the upstream proposal process described in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 5. An upstream proposal requires, at minimum:

- Observation of the candidate requirement in at least two independently authored federation adaptations.
- A formal proposal using the [proposal template](../rfcs/rfc-template.md), with the "Upstream" type.
- An opinion from the scientific panel on the quality of the convergence claim (when the panel exists).
- An opinion from the advisory circle on the legitimacy of the convergence (when the circle exists).
- The caretaker's documented decision.

---

*End of normative document, version 1.0.*
