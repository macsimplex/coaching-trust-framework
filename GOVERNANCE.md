# Governance of the Coaching Trust Framework

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

This document describes how the Coaching Trust Framework (CTF) is maintained, how it evolves, and how decisions are made. It is written at a level of formality proportionate to the current maturity of the project — light enough not to slow down adoption, structured enough to be trustworthy.

> 🆕 If the technical vocabulary is unfamiliar, read the [EXPLAINER](./EXPLAINER.md) first. It introduces all the concepts of this document in plain language, with a glossary at the end.

## In plain words

The way CTF is maintained is meant to be **light at the start, expandable as the project matures, and always open**. One person (the founder, currently also the caretaker) keeps the project running on a day-to-day basis. Anyone in the world can propose changes through a public process. Decisions are made transparently, motivated by documented evidence, and recorded for posterity. Over time, as more federations and contributors get involved, additional advisory groups will form, but no body will ever be allowed to close the framework or take it private — that is forbidden by the founding principle.

## 1. Founding principle

CTF is a common good. No organization — including any organization that might in the future be created to steward it (association, cooperative, foundation, federation) — owns it, controls it, or can withdraw it from public use.

This founding principle is inscribed at the head of the README, of this document, and of the normative document. It is the rule that all other governance rules must remain compatible with. Any future structural evolution of CTF that would contradict this principle is, by construction, illegitimate.

The founding principle is not amendable through the ordinary RFC process. Modifying it would require an explicit public consultation process with rules adopted at the moment of consultation by the existing community.

## 2. Roles

### 2.1 Founder

CTF was founded by **Maxime Bui** in 2026. Founder status is a recognition of origin, not a power. It is acknowledged in the license attribution clause (CC BY-SA 4.0), in the citation guidance, and in the README. It does not carry editorial veto in the long term.

### 2.2 Caretaker (custodian)

The caretaker is the person (or, later, the body) responsible for maintaining the integrity of the CTF text, processing RFCs, publishing versions, and keeping the repository operational. The caretaker is **not** the owner of CTF; the caretaker is its housekeeper.

The current caretaker is the founder. The role is intended to be transferred or expanded over time, as described in section 6 below.

### 2.3 Contributors

Contributors are individuals or organizations who propose amendments through the RFC process, write or improve agent prompts and knowledge bases, translate the framework into other languages, document edge cases, or otherwise contribute to the project.

Contributors are listed in [`CONTRIBUTORS.md`](./CONTRIBUTORS.md), with their consent.

### 2.4 Adopters

Adopters are platforms, organizations or independent practitioners who implement CTF in their own AI coaching practice. They are listed in [`ADOPTERS.md`](./ADOPTERS.md), with their consent.

Being an adopter is distinct from being a contributor: an adopter uses CTF, a contributor proposes evolutions to CTF. A given organization can of course be both.

### 2.5 Federations

Professional coaching federations (ICF, EMCC, and others) occupy a specific role: they may author or validate CTF declinations (CTF-ICF, CTF-EMCC, etc.), and they become the certification authority within their own sphere. The relationship between CTF and federations is described in [`certification-scheme/federation-pathway.md`](./certification-scheme/federation-pathway.md) and [`certification-scheme/community-pathway.md`](./certification-scheme/community-pathway.md).

### 2.6 Consultative council (advisory circle)

When at least two federations have engaged with CTF (either as adopters, as authors of declinations, or as validators of community-led declinations), a **consultative council** will be constituted. Its purpose is to provide non-binding opinions on substantive RFCs, to ensure that the iterative refinement of CTF reflects the diversity of practice rather than a single perspective.

The consultative council's structure, composition and operating rules will be defined at the moment of its constitution, in keeping with the founding principle.

### 2.7 Scientific panel

A **scientific panel** will be constituted at the moment when the first substantive RFC requiring empirical evidence reaches the public comment stage. Its function is to review the **quality of empirical evidence** cited in RFCs — particularly RFCs proposing the promotion of requirements into the common core.

The scientific panel is composed of researchers in fields relevant to CTF: AI ethics, evidence-based coaching, evaluation methodology, human-AI interaction, applied psychology of trust.

The panel's opinions are **non-binding** but are published alongside the caretaker's decision, with the panel's reasoning. The panel does not decide; it qualifies the evidence on which decisions rest.

The composition, terms of service, and operating rules of the scientific panel are documented in a subordinate document at the moment of constitution, in keeping with the founding principle.

### 2.8 Certified supervisors

Certified supervisors are humans qualified and independent of the platforms whose agents they review. They participate in the audit of deployed AI coaching agents, alongside the platform's own designer and the CTF Audit helper agent (tripartite supervision).

The qualification, certification, statute and remuneration of certified supervisors are described in the normative document and may be further specified in federation declinations.

## 3. Evolution of CTF: the RFC process

CTF evolves by **public iteration**. Any individual or organization can propose an amendment through the Request For Comments (RFC) process described below.

### 3.1 RFC lifecycle

1. **Submission.** A proposer fills out the [RFC template](./rfcs/rfc-template.md) and submits it as a pull request to the `rfcs/` directory of the repository.
2. **Public comment period.** The RFC is open to public comments for a minimum of 30 days and a maximum of 60 days. Comments may come from anyone.
3. **Scientific panel review.** When the panel exists and the RFC is substantive (in particular, when it proposes a promotion to the common core), the panel reviews the empirical evidence cited in the RFC and publishes a non-binding opinion on its quality.
4. **Consultative council review.** When the council exists and the RFC is substantive, the council publishes a non-binding opinion on the proposal itself.
5. **Decision.** The caretaker publishes a written decision: accepted, rejected, accepted with modifications, or returned for revision. The decision must be motivated and must explicitly engage with the scientific panel and consultative council opinions when they exist.
6. **Integration (if accepted).** The accepted RFC is integrated into the next CTF version, according to the versioning rules below. The accepted RFC document remains in the `rfcs/` directory as a permanent record.

### 3.2 What can be proposed in an RFC

- A clarification or correction of the normative document (common core or any declination).
- An addition to the normative document.
- A modification to a helper agent (Translator, Converger, Designer, Test Plan, Robustness, Config, Audit).
- A modification to the certification scheme.
- A modification to the validation methodology.
- A modification to the governance itself (with elevated diligence — see section 5).
- The promotion of a requirement from one or more declinations into the common core (special procedure — see section 4).

### 3.3 What cannot be proposed in an RFC

- Anything that would contradict the founding principle (section 1) — such RFCs are inadmissible by construction.
- Anything that would introduce restrictions on the use of CTF beyond the CC BY-SA 4.0 license — CTF cannot become more closed than it currently is.
- Privatizing or appropriating CTF for the benefit of a single organization.

### 3.4 Required content of an RFC

Every RFC must follow the [RFC template](./rfcs/rfc-template.md). Substantive RFCs (additions, modifications, promotions) must in addition cite **empirical evidence** in a dedicated section of the RFC. The expected nature and quality of evidence is described in [`validation/methodology.md`](./validation/methodology.md).

An RFC that fails to cite evidence where it is required will be returned to the proposer for completion before the public comment period opens.

## 4. Special procedure: promotion to the common core

The promotion of a requirement from one or more declinations into the common core is the most consequential type of RFC, because it modifies what every adopter must comply with. It is therefore subject to additional rigor.

### 4.1 The multiple implementations rule

A requirement may not be promoted into the common core unless it is **already present, in substantively similar form, in at least two independent declinations**. Independence here means that the declinations have been authored or validated by distinct federations, with distinct normative traditions.

This rule is borrowed from the practice of technical standards bodies (W3C, IETF), where the same rule under various names ensures that the common standard accumulates only what has been independently validated by multiple implementers. It prevents the common core from being shaped by the perspective of a single federation or a single school of thought.

### 4.2 Required evidence

A promotion RFC must include:

- **Identification** of the at least two declinations in which the requirement is present, with explicit citation of the relevant sections.
- **CTF Converger analysis** (mandatory) — a comparative analysis produced by CTF Converger showing that the requirement is substantively similar across those declinations. The Converger output is the canonical input for promotion RFCs; a promotion RFC without a Converger analysis is incomplete.
- **Implementation evidence** — observations from the public evidence log showing how adopters have implemented the requirement in practice.
- **Edge case analysis** — situations where the requirement might apply differently across federations, and how the proposed common-core formulation accommodates that.

Note: if a third or subsequent declination *omits* a requirement that two others share, this does not block promotion. The multiple implementations rule requires presence in at least two; absence from others is noted in the edge case analysis but is not a veto.

### 4.3 Decision

Promotion RFCs require explicit positive opinion from the scientific panel on the quality of evidence (when the panel exists), and explicit consideration by the consultative council (when it exists). The caretaker's decision on a promotion RFC must engage substantively with both opinions.

### 4.4 Effect

An accepted promotion RFC results in the requirement being added to the next version of the common core (typically a MINOR version increment — see section 5). Declinations that already contained the requirement may, in their next revision, refer to the common core rather than restating it locally. Declinations that did not contain the requirement must, by the next adoption cycle, integrate it (or document why it does not apply in their professional sphere — though this last case is unusual).

## 5. Versioning rules

CTF follows a semantic versioning approach adapted to a normative document.

| Increment | Triggered by | Examples |
|---|---|---|
| **PATCH** (1.0.x) | Editorial corrections, clarifications that do not change requirements | Typo fixes, rewording for clarity, broken link fixes |
| **MINOR** (1.x.0) | Additions that do not break existing conformance, including promotions to the common core | New optional requirements, new examples, new helper agent capabilities, accepted promotion RFCs |
| **MAJOR** (x.0.0) | Changes that may break existing conformance, modifications of governance structure, modifications of the founding principle | Removal or substantive rewording of a core requirement, change of license, restructuring of the certification scheme |

A MAJOR version always includes a notice period of at least 90 days between announcement and effective date, to allow current adopters to assess impact and adjust.

Modifications of section 1 (founding principle) of this governance document follow the special procedure described at the end of section 1.

## 6. Trajectory of governance over time

Governance is intentionally minimal at the moment of v1.0. The founder is the caretaker, the RFC process is the only formal channel of evolution, the consultative council and the scientific panel do not yet exist.

The intended trajectory is the following.

### Phase 1 — Bootstrap (v1.0)

- Founder = sole caretaker.
- RFC process operational.
- First adopter as reference implementer.
- First external contributor (invited).
- Consultative council and scientific panel not yet constituted.
- First declinations begin being produced (community-led pathway).

### Phase 2 — Multi-contributor expansion

- Multiple external contributors regularly submit RFCs.
- A second adopter platform implements CTF.
- A first scientific panel member is identified to review the first substantive RFC.
- The caretaker role remains held by the founder, but RFCs increasingly come from outside.

### Phase 3 — Federation engagement

- A first federation validates a community-led declination, or authors its own.
- The consultative council is constituted with at least one federation representative and the founder.
- The scientific panel is constituted with at least three members.
- A second federation joins, expanding the council.

### Phase 4 — Structural maturity

- CTF has multiple federation declinations and a substantial adopter base.
- The community evaluates whether a formal stewardship structure (cooperative, association, foundation) should be created. If so, this evolution is driven by an RFC, validated by the consultative council, and ratified by public consultation.
- The founder may transition out of the caretaker role at this stage, becoming a regular contributor.

This trajectory is indicative, not binding. Each phase begins when its conditions are met, not on a calendar.

## 7. Conflict resolution

In the event of disagreement between contributors, between adopters and the caretaker, or between federations declining CTF:

1. The disagreement is discussed openly, in the RFC process or in a dedicated public discussion.
2. The caretaker makes a documented decision.
3. If the consultative council exists, parties may request its advisory review.
4. If the scientific panel exists and the disagreement concerns the quality of evidence, the panel may be consulted.
5. If the disagreement persists and concerns the founding principle, the matter is escalated to a public consultation following the special procedure.

CTF does not currently include binding arbitration. The light governance is meant to keep the project nimble; structural conflict-resolution mechanisms can be introduced through RFC if the community deems them necessary.

## 8. Forking and parallel implementations

CTF is published under CC BY-SA 4.0. Anyone may fork the framework, modify it, and publish derivative works, provided that:

- Attribution to the founder and to the original CTF is preserved (CC BY-SA attribution clause).
- The derivative work is published under the same license (CC BY-SA 4.0 ShareAlike clause).
- The derivative work clearly identifies itself as a derivative, and does not claim to be the canonical CTF.

Federation declinations (CTF-ICF, CTF-EMCC, etc.) are a structured form of derivative work, governed by specific pathways described in [`certification-scheme/federation-pathway.md`](./certification-scheme/federation-pathway.md) and [`certification-scheme/community-pathway.md`](./certification-scheme/community-pathway.md). They are not forks in the conflictual sense; they are extensions that remain in dialogue with the generic CTF.

## 9. Final clause

This governance document is itself subject to RFCs, with the elevated diligence described in section 5. It is not above the framework — it is part of it.

The founding principle stands above this document.
