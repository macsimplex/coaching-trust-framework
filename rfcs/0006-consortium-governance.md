# RFC 0006: Governance, from a single author to an independent consortium

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*French version: [0006-consortium-governance.fr.md](./0006-consortium-governance.fr.md).*

## Header

- **RFC number:** 0006
- **Title:** Governance, from a single author to an independent consortium
- **Type:** Governance
- **Author(s):** Maxime Bui
- **Date submitted:** 2026-11-09; revised draft of 2026-11-23
- **Public comment period:** not opened yet
- **Status:** Draft (revision of the archived version of 9 November 2026)
- **Affects:** Governance; evaluation protocol (RFC 0010); reserved test set (RFC 0005)
- **Related:** [RFC 0005](./0005-reserved-test-set.md) (reserved test set), [RFC 0008](./0008-standard-v0-starting-requirements.md) (requirements), [RFC 0010](./0010-evaluation-protocol-v0.md) (evaluation protocol)
- **Supersedes:** the version of this RFC submitted on 2026-11-09

## Abstract

Today one person, the author, writes the CTF standard, decides on changes, holds the reserved test material and builds the reference testing tool. The same person sells coaching agents and plans a paid hosted testing service. This RFC states the rules that apply **now**, while that is the case: written decisions, declared interests, and limits on how the author's own agents and the author's own service are treated. It then describes how decisions would pass, in three stages and on stated conditions, to an independent consortium. Version 0 issues test reports only; this RFC does not create a certification.

## In plain words

- **Today, the author decides**, in writing, and publishes his interests. That is a weakness, and this RFC says so.
- **Until a consortium exists, the author's own agents get no favourable treatment.** Their reports say who built them and who ran the test, and their results on reserved scenarios do not count, because the author knows those scenarios.
- **The paid service the author plans cannot become the only way to be tested.** The standard, the scenarios that are not reserved and the testing tool stay free and open, and anyone can run them.
- **Decisions move to others in stages**, each triggered by a condition that can be checked, not by a date.
- **The consortium would set the rules, check the evidence and decide on changes.** Whether it would ever issue certifications is left to a separate RFC.

## Motivation

The vision states that a platform cannot be the only judge of its own agent (postulate 3). The same reasoning applies to the author of a standard who also builds, sells and plans to test agents. The archived version of this RFC (9 November 2026) described the end state, a consortium, but said little about the period before it, which is the period in which version 0 is written and first used.

Four specific risks exist in that period:

1. **Self-favour.** The author could write requirements or scenarios that his own agents pass easily, or judge borderline cases in their favour.
2. **Reserved material.** RFC 0005 relies on scenarios or wordings that agents have not seen. The author holds them and also develops agents.
3. **Commercial capture.** A paid hosted service run by the author's company could become the de facto only way to obtain a CTF test report.
4. **Indefinite interim.** Without conditions for handing over, "until a consortium exists" can last forever.

## Detailed proposal

### 1. Founding principle

The common good prevails over any organization, including any organization that might one day emerge to steward this standard. The standard, the scenarios that are not reserved and the reference testing tool are published under open licences. No stage of this RFC can change that, and no ordinary RFC can amend this principle.

### 2. Stage 0 (now): the author decides, under rules

The author (currently Maxime Bui) acts as caretaker. He decides on RFCs and publishes versions of the standard. In return:

1. **Written decisions.** Every decision is recorded in the "Caretaker decision" section of the RFC, with the reasons and with how each comment was or was not taken into account.
2. **Declared interests.** The author's interests are published on the project homepage and updated within 30 days of any change. Anyone else who decides or reviews (human reviewers, clinicians) declares theirs in the same way.
3. **No change to a published version.** Any change produces a new version.
4. **The author's own agents.** For any agent built, sold or operated by the author, or by a company he controls:
    - the test report says so on its first page, together with who ran the test;
    - results on reserved scenarios or wordings (RFC 0005) are not reported for these agents, since the author knows them;
    - such an agent cannot serve as one of the reference agents used to validate scenarios (RFC 0010);
    - the human review of its critical trials (RFC 0010) is done by reviewers who are not paid by the author for that review and who do not know whose agent it is, as far as the transcript allows.
5. **Requirements and scenarios.** When the author proposes or changes a requirement or a scenario, the RFC states whether, to his knowledge, his own agents would pass or fail it.
6. **Hosted service.** If the author's company runs a paid hosted instance of the testing tool:
    - it runs a published version of the standard and of the tool, with no unpublished scenario or rule;
    - its reports state who ran the test and that it is a paid service;
    - it receives no reserved material that is not also available to any other tester under the same conditions;
    - the free, open tool remains able to produce the same report.
7. **Second custodian.** As soon as a person independent of the author agrees, the reserved material is deposited with that person, as RFC 0010 already provides for reserved wordings. Until then, the reports say that the author alone holds it.

### 3. Stage 1: independent reviewers

**Condition.** At least two clinicians and two coaches, independent of the author (not employed, paid or commissioned by him, and not selling a coaching agent), have agreed to review the scenarios and the RFCs.

**Change.** Before each decision on an RFC, their opinions are published next to it. When the author decides against the opinion of a majority of them, he explains why in the decision. They also choose, among themselves, the reviewers for the author's own agents.

### 4. Stage 2: founding consortium

**Condition.** At least three of the colleges below each have at least one member independent of the author, and the statutes of the consortium have been proposed by RFC and adopted after a public comment period.

**Colleges.** Platform publishers; professional federations and associations of coaches; researchers; clinicians; supervisors. No college holds a majority on its own.

**Change.** The consortium validates each version of the evaluation protocol and holds the reserved material. The author keeps the decision on other RFCs, after the consortium's opinion, and cannot overrule it on the protocol or on the reserved material.

### 5. Stage 3: independent consortium

**Condition.** Two years after stage 2 starts, or earlier if the consortium so decides by the rules of its statutes.

**Change.** The consortium takes over all decisions. The single-caretaker role ends. The author keeps the rights of any other member, and the conflict-of-interest rule below.

### 6. Conflicts of interest (all stages)

A person who builds, sells, operates or is paid by an agent takes no part in a decision about that agent or its direct competitors, and does not review its tests. This applies to the author.

### 7. Openness of the consortium (stages 2 and 3)

The consortium applies to itself the rules it sets: its statutes, reasoned decisions, accounts and members' declared interests are public. Its funding may not depend for more than one third on platforms whose agents it tests. Whether the consortium would one day issue certifications, and on what terms, is not decided here; it would need a separate RFC.

## Empirical evidence

This RFC is a governance proposal; it does not rest on an evidence log entry. Two established practices inspired it:

- **Declaration and management of conflicts of interest** in standard-setting and in research, where the people who write a norm or review evidence declare their interests and step aside from decisions that concern them.
- **Separation between those who write a norm, those who test against it and those who decide**, as in the accreditation of testing bodies (for example ISO/IEC 17025 for laboratories and ISO/IEC 17065 for certification bodies). CTF is far from these schemes; the stages above are a way of moving towards that separation without claiming it today.

## Impact analysis

- **On contributors.** They know who decides, how, and on what conditions this will change.
- **On platforms.** A platform competing with the author's agents knows that the author's agents receive no favourable treatment and that the paid service has no exclusive.
- **On version 0.** Reports on the author's agents carry the statements in section 2.4. RFC 0010 is amended accordingly when its comment period opens.
- **On the author.** The author gives up the use of reserved material for his own agents, and accepts a dated path to losing his decision power.

## Alternatives considered

- **Keep the archived version**: it described the consortium but left the current period without rules, which is when the risks above are highest.
- **Wait for a consortium before publishing anything**: safer in principle, but no consortium forms around a blank page; a draft standard is what members can join.
- **Hand the standard to an existing organization** (a federation, a certification body): it would bring credibility, but would tie the standard to one professional tradition and could close it, contrary to the founding principle.
- **Dates rather than conditions for each stage**: easier to check, but a date can arrive before anyone independent has joined.

## Open questions

- **Q16.** Are the conditions for stages 1 and 2 the right ones? Should stage 1 also require a researcher?
- **Q17.** Is the one-third funding limit in section 7 workable, and should it apply before stage 2 to the hosted service's revenue?
- **Q18.** What legal form for the consortium (association, foundation, cooperative), and in which country?
- **Q19.** Should reviewers for the author's own agents be blind to the agent's identity even when the transcript reveals it, for example by masking names?

## Public comments

*To be filled in during the public comment period. To comment, see [CONTRIBUTING.md](../CONTRIBUTING.md).*

## Caretaker decision

*To be filled in at the end of the public comment period. Under this RFC's own stage 0, the author decides on it and states his interest in the outcome.*

## Changelog of this RFC

- **2026-11-09** — Initial submission (archived version: consortium described, stages without conditions).
- **2026-11-23** — Revised draft: rules for the current period (stage 0), conditions for each stage, the author's own agents and the hosted service, certification left to a separate RFC.
