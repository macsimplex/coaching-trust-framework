# Validation Methodology

> *How empirical evidence is collected, qualified and weighted in the evolution of the Coaching Trust Framework.*

---

## In plain words

CTF claims to grow inductively — its common core is meant to expand only by absorbing what has been observed to work in practice across multiple declinations. For this claim to be more than a slogan, evidence has to be treated as a first-class object: it has to be collected systematically, qualified honestly, and weighed against itself when different observations point in different directions.

This document describes how all that works. It defines what counts as evidence in the context of CTF, what kinds of evidence are recognized, what makes evidence strong or weak, and how the various people involved — adopters, supervisors, researchers, the scientific panel, the caretaker — handle it. The goal is to make the inductive process of CTF as rigorous as it is collaborative.

The methodology is itself revisable. As CTF and its evidence base mature, the methodology will be refined through RFCs.

> 🆕 The [EXPLAINER](../EXPLAINER.md) introduces the inductive philosophy of CTF in plain language. This document goes deeper into how evidence is actually handled.

---

## 1. Why empirical evidence matters in CTF

CTF is **inductive by design**. Its common core does not grow by decree but by validated convergence — when the same requirement is observed to be present and working across multiple declinations. This makes evidence the *currency* of the framework's evolution.

Without serious evidence handling:

- Promotions to the common core would rest on opinion, not on observation.
- Disagreements between contributors would be unresolvable by anything more rigorous than rhetoric.
- The framework would gradually drift toward whatever one or two influential parties happened to think.

With serious evidence handling:

- Decisions are motivated and traceable.
- Disagreements can be resolved by going back to the evidence.
- The framework's evolution can be audited as rigorously as it asks AI coaching agents to be auditable.

## 2. Types of evidence recognized

CTF recognizes the following types of empirical evidence, in roughly decreasing order of typical evidentiary weight:

### 2.1 Implementation observation

Documented observations from a platform implementing CTF, describing the actual behaviour of an AI coaching agent in production, the design decisions behind it, the audit findings, and the platform's interpretation. Sent through the [feedback template](./feedback-template.md). This is the primary form of evidence in CTF; the framework's whole inductive logic rests on it.

### 2.2 Supervision incident

A report from a certified supervisor describing a specific situation observed during the audit of a deployed agent — typically a case where the agent behaved unexpectedly or where existing CTF expectations proved unclear. Sent through the feedback template, with explicit mention of the supervisor's qualification and independence.

### 2.3 Federation review

An analysis or position paper published by a professional federation that has either authored or endorsed a CTF declination, describing what the federation has observed in the application of its declination by adopters in its sphere.

### 2.4 Academic study

A peer-reviewed academic study that examines AI coaching agents, ethical frameworks, or the application of CTF or comparable frameworks. Reference to the publication, the methodology, the sample, the limitations.

### 2.5 Meta-analysis or systematic review

A study that aggregates findings from multiple primary sources — particularly valuable for assessing whether a tendency observed in one implementation is generalizable.

### 2.6 Regulatory or institutional feedback

Communications from regulators, ethics boards, professional ombudspersons, or other institutional actors regarding the application of CTF or comparable frameworks. These are typically less frequent but carry significant weight when they occur.

## 3. Quality criteria

Each piece of evidence is evaluated against the following criteria:

- **Sourcing.** Is the evidence attributable to an identifiable adopter, supervisor, federation, researcher, or institution? Anonymous or unsourced evidence may be retained as a signal but is weighted lower in decisions.
- **Anonymization of personal data.** Does the evidence respect the privacy of the people involved in the observed interactions? Personally identifying information must be absent from any evidence accepted into the log.
- **Methodological clarity.** Is the methodology by which the observation was produced sufficiently clear to be assessed? An audit report describing what was examined, by whom, and how, is stronger than a casual observation.
- **Replicability or specificity.** Is the observation specific enough that another adopter or supervisor could check whether the same phenomenon arises in their own context?
- **Engagement with counter-evidence.** Does the evidence acknowledge contrary observations? Evidence that engages honestly with what does not fit is stronger than evidence that does not.
- **Recency and durability.** When did the observation take place? Has the underlying agent or model evolved since then? Recent observations on stable systems are stronger than older or rapidly-shifting observations.
- **Independence.** Does the evidence come from a party with no direct stake in the conclusion? An adopter reporting on their own implementation is valuable but has interest; a supervisor or independent researcher carries less direct interest.

These criteria are guidelines, not a scoring algorithm. Quality assessment is qualitative and is performed by the scientific panel when the panel exists.

## 4. Weighting in decisions

When the caretaker (or any future deciding body) is faced with a decision on a substantive RFC, the weighting of evidence follows roughly the following logic:

- A **single strong observation** can be decisive in clarifying or correcting an existing requirement, especially if it surfaces a genuine flaw.
- **Multiple converging observations** across two or more independent declinations are required for any promotion to the common core (this is the *multiple implementations rule*; see [`../GOVERNANCE.md`](../GOVERNANCE.md), section 4).
- **Counter-evidence** is engaged with explicitly in the decision motivation. A decision that ignores counter-evidence is, by construction, weakly motivated.
- **Absence of evidence** is itself a relevant signal. A proposal that cannot cite any observation may be returned for completion before public comment.

## 5. The evidence log

All evidence accepted into the framework's reasoning is recorded in the public [evidence log](./evidence-log.md). The log is:

- **Versioned.** Each entry is dated and tagged with the CTF version current at the time of recording.
- **Public.** Anyone can read it, anyone can cite it.
- **Indexable.** Each entry has a unique identifier so it can be referenced from RFCs and from the meeting records of the consultative council and the scientific panel.
- **Challengeable.** An entry that is later contested can be flagged with a counter-entry, without the original being removed (we keep the trail).
- **Anonymized.** No entry contains personally identifying information about end-users of coaching agents.

## 6. Roles in evidence handling

### 6.1 Adopters

Adopters are the primary source of implementation observations. They are expected to send observations through the feedback template on a periodicity appropriate to their scale of operation (typically quarterly or semi-annually).

### 6.2 Certified supervisors

Certified supervisors are encouraged to share observations from their audit work, anonymized appropriately, especially when the audit surfaces something CTF expectations did not anticipate.

### 6.3 Researchers

Independent researchers studying AI coaching agents are encouraged to publish their work and to submit relevant publications (or summaries thereof) to the evidence log. CTF recognizes that academic timelines are slower than software development; periodic synthesis is welcomed.

### 6.4 Scientific panel (when constituted)

The scientific panel reviews the *quality* of evidence cited in substantive RFCs, especially promotion RFCs. Its opinions are non-binding but published. The panel does not collect evidence; it qualifies the evidence already in the log or attached to an RFC.

### 6.5 Caretaker

The caretaker is responsible for keeping the evidence log in good order: integrating accepted submissions, removing duplicates, flagging contested entries, ensuring that anonymization is respected.

### 6.6 Consultative council (when constituted)

The consultative council does not directly handle evidence. It draws on the evidence log when forming its non-binding opinions on substantive RFCs.

## 7. Two traditions, one method

The methodology of CTF combines two traditions of validation:

### 7.1 The evidence-based scientific tradition

From this tradition, CTF takes:

- The principle that claims should be motivated by observation.
- The recognition that single observations are weaker than convergent observations.
- The commitment to acknowledging counter-evidence.
- The role of an independent panel in qualifying evidence.

### 7.2 The technical standards tradition (W3C, IETF)

From this tradition, CTF takes:

- The public RFC process.
- Open comment windows.
- The multiple implementations rule.
- The practice of motivated decisions published alongside the proposals.

Combining the two traditions gives CTF a methodology that is rigorous without being academic, and open without being lax.

## 8. Limits of the methodology

This methodology has limits that should be acknowledged:

- The community may not always have access to the kind of large-scale, controlled studies that the most demanding sciences would require. CTF works with what is available.
- Adopters reporting on their own implementations have an interest in their reports being well-received. Independence is partial. The methodology compensates by valuing supervisor and researcher contributions.
- The scientific panel is non-binding. Its opinions can be over-ridden by the caretaker, who must motivate the decision but is not formally bound. This is a deliberate choice — the panel advises, the community decides.
- Evidence accumulates more slowly than ideas circulate. Some apparently obvious additions to the common core may have to wait until the multiple implementations rule is satisfied. This patience is a feature, not a bug.

## 9. Revisions

This methodology document is itself subject to RFCs. As CTF and its evidence base mature, the methodology will evolve. Revisions follow the rules in [`../GOVERNANCE.md`](../GOVERNANCE.md).

---

*The integrity of CTF as a common good rests in part on the integrity of how it handles evidence. This document is the place where that integrity is made explicit and revisable.*
