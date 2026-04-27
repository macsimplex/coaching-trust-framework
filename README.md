# Coaching Trust Framework (CTF)

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

---

**Version:** 1.0
**License:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](./LICENSE)
**Founder & Initial Caretaker:** Maxime Bui
**Contact:** maxime@simplex.coach

> 🆕 **New to CTF? Start with the [EXPLAINER](./EXPLAINER.md)** (English) or the [EXPLAINER in French](./EXPLAINER.fr.md). It introduces every concept of CTF in plain language, with examples drawn from coaching practice. The present README is the technical entry point for people who already know what they are looking for.

---

## In plain words

Imagine that AI is being used more and more in coaching: chatbots that help people set goals, agents that listen to what someone is going through, automated guides that draw on the wisdom of philosophers or coaching methodologies. This is happening, and it is going to grow. Some of these AI agents are well-designed and respectful. Some are sloppy. Some are outright dangerous to the people who consult them.

There is no shared rulebook today that says: *here is what a trustworthy AI coaching agent looks like, here is how to build one, here is how to check that it actually behaves the way it should*.

CTF tries to be that shared rulebook. It is open, free to use, written for the long term, and built to be **adapted by each professional coaching federation** (ICF, EMCC, and others) to fit their own ethical traditions. Platforms that build AI coaching agents can use CTF to design, test and audit their agents, and can publicly commit to following it.

CTF is created and maintained by a community of contributors, in the open. It does not belong to any company, and it never will.

---

## What CTF is

The **Coaching Trust Framework (CTF)** is an open, generic ethical framework for AI-mediated coaching and personal development. It has three components:

1. A **normative document** — a deliberately minimal common core that describes the operational grammar of trustworthy AI in coaching.
2. A **toolkit of seven specialized helper agents** — they assist humans in translating, designing, testing, hardening, configuring, auditing and converging coaching agents in conformance with the framework.
3. A **certification scheme** — a documented protocol for self-declaration and federation-led certification.

CTF is **inductive by design**. The common core is intentionally light at version 1.0. The richness of the framework grows from below, through declinations adapted to specific federations (CTF-ICF, CTF-EMCC, etc.). When several declinations turn out to share the same requirement, that requirement becomes a candidate for promotion into the common core. Convergence is observed empirically, not decreed in advance.

## Why CTF exists

The deployment of AI in coaching has outpaced the ethical infrastructure available to govern it. Existing professional standards (ICF AI Coaching Framework, EMCC Code of Ethics, others) provide essential normative orientation, but they do not, by themselves, tell a platform how to actually build, test and audit a trustworthy AI coaching agent.

CTF fills that operational gap. It does not replace existing federation standards. It offers a shared layer that any federation can adopt and tailor to its own normative tradition. The intent is not to compete with federations, but to provide them with infrastructure they can use to make their AI coaching standards verifiable.

The deeper intent is political: the ethics of coaching belong to no single organization. CTF affirms that this common good must remain free, open, auditable and shared.

## Three-level architecture

CTF is organized in three levels that work together:

| Level | Object | Produced by | Maintained by |
|---|---|---|---|
| **1. Federation standard** | ICF AI Coaching Framework v1.01, EMCC Global Code of Ethics, etc. | The federations themselves | The federations |
| **2. CTF declination** | CTF-ICF, CTF-EMCC, CTF-[Federation] — adapted versions of CTF | A CTF community member, or the federation, or both jointly | Custodian of the declination, with possible federation endorsement |
| **3. AI coaching agent** | Concrete coaching agents deployed on platforms | Platforms, using the CTF helper agents | The platforms |

## How CTF evolves: the inductive cycle

The common core (level 2 of the table above, generic CTF) is initially minimal. The mechanism by which it grows is the following:

1. Several declinations are produced (CTF-ICF, CTF-EMCC, …), each integrating the requirements of a specific federation.
2. Platforms implement these declinations. Audits and observations accumulate. Lessons are documented in the public evidence log.
3. The CTF Converger helper agent compares declinations and identifies requirements that recur across federations.
4. Recurring requirements are submitted as proposals (RFCs) to be promoted into the common core.
5. The custodian, advised by the scientific panel and the consultative council, accepts or rejects each proposal, motivated by the documented evidence.
6. Accepted proposals enter the next version of the generic CTF.

Over time, the generic CTF accumulates what has been empirically validated as common to multiple federations, while each declination retains what is specific to its tradition.

## The seven helper agents (CTF Toolkit)

CTF is accompanied by seven helper agents. Each one is a sollicited tool, not a conversational companion. Each one assists a human team in a specific phase of the lifecycle.

| Agent | Role | Phase | Specification |
|---|---|---|---|
| **CTF Translator** | Translates a federation normative document into a draft declination | Federation onboarding | [`tools/ctf-translator/README.md`](./tools/ctf-translator/README.md) |
| **CTF Converger** | Compares multiple declinations to identify candidates for promotion to the common core | Common core evolution | [`tools/ctf-converger/README.md`](./tools/ctf-converger/README.md) |
| **CTF Designer** | Assists in the design of an AI coaching agent conformant with a CTF declination | Agent design | [`tools/ctf-designer/README.md`](./tools/ctf-designer/README.md) |
| **CTF Test Plan** | Produces a structured test plan for a candidate agent | Pre-deployment validation | [`tools/ctf-test-plan/README.md`](./tools/ctf-test-plan/README.md) |
| **CTF Robustness** | Stresses a candidate agent against adversarial and edge-case inputs | Pre-deployment hardening | [`tools/ctf-robustness/README.md`](./tools/ctf-robustness/README.md) |
| **CTF Config** | Assists the integrator in producing the deployment configuration of a designed agent on a target platform | Pre-deployment integration | [`tools/ctf-config/README.md`](./tools/ctf-config/README.md) |
| **CTF Audit** | Audits a deployed agent's ongoing conformance using anonymized transcripts | Continuous oversight | [`tools/ctf-audit/README.md`](./tools/ctf-audit/README.md) |

Translator and Converger work at the level of CTF itself (its declinations and its common core). Designer, Test Plan, Robustness, Config and Audit work at the level of individual coaching agents built by platforms.

## Empirical validation

Because CTF evolves inductively, **empirical traces are a structural object** of the framework, not an afterthought. CTF combines two validation traditions:

- The **evidence-based scientific tradition** — every substantive proposal must cite documented observations; the scientific panel reviews the quality of those observations; the evidence log is public and citable.
- The **technical standards tradition** (W3C/IETF) — public comment windows, rough consensus, and the *multiple implementations rule*: no requirement is promoted into the common core unless it is observable in at least two independent declinations.

The detailed methodology lives in [`validation/methodology.md`](./validation/methodology.md). The evidence log itself lives in [`validation/evidence-log.md`](./validation/evidence-log.md). The standardized format for adopters and supervisors to send observations lives in [`validation/feedback-template.md`](./validation/feedback-template.md).

## Repository structure

```
ctf/
├── README.md                                  ← you are here
├── EXPLAINER.md                               ← plain-language guide (English)
├── EXPLAINER.fr.md                            ← plain-language guide (French)
├── LICENSE                                    ← CC BY-SA 4.0
├── CHANGELOG.md
├── GOVERNANCE.md                              ← how CTF evolves
├── CONTRIBUTING.md                            ← how to contribute
├── ADOPTERS.md                                ← platforms implementing CTF
├── CONTRIBUTORS.md                            ← contributors to CTF itself
│
├── document/
│   └── ctf-v1.0.md                            ← the common core, deliberately minimal
│
├── tools/
│   ├── ctf-translator/                        ← federation document → declination
│   ├── ctf-converger/                         ← declinations → upstream candidates
│   ├── ctf-designer/                          ← method → portable agent design
│   ├── ctf-test-plan/                         ← agent design → test plan
│   ├── ctf-robustness/                        ← agent → adversarial test results
│   ├── ctf-config/                            ← portable design → platform deployment
│   └── ctf-audit/                             ← deployed agent → conformance report
│
├── declinations/
│   ├── README.md                              ← index and status of declinations
│   ├── ctf-icf/                               ← (when produced)
│   └── ctf-emcc/                              ← (when produced)
│
├── certification-scheme/
│   ├── self-declaration.md                    ← for platforms (any CTF version)
│   ├── federation-pathway.md                  ← when a federation authors a declination
│   └── community-pathway.md                   ← when a community member authors a declination
│
├── rfcs/
│   ├── rfc-template.md
│   └── (accepted RFCs)
│
└── validation/
    ├── methodology.md                         ← how empirical traces are collected and qualified
    ├── feedback-template.md                   ← format to send observations
    └── evidence-log.md                        ← public, versioned record of accumulated evidence
```

## How to use CTF

If you are a **platform** building AI coaching agents:
1. Read the [EXPLAINER](./EXPLAINER.md) if you want the plain-language overview, then the [normative document](./document/ctf-v1.0.md).
2. Choose the relevant declination for your sphere (e.g. CTF-ICF if you primarily serve ICF-aligned coaches), or implement the generic CTF directly if no declination is yet relevant.
3. Use the [CTF Designer](./tools/ctf-designer/) to design your agents.
4. Validate them with [CTF Test Plan](./tools/ctf-test-plan/) and harden them with [CTF Robustness](./tools/ctf-robustness/).
5. Use [CTF Config](./tools/ctf-config/) to produce the deployment configuration for your platform.
6. Submit each new agent and each ongoing operation to [CTF Audit](./tools/ctf-audit/).
7. Self-declare conformance following [`certification-scheme/self-declaration.md`](./certification-scheme/self-declaration.md).
8. Add yourself to [`ADOPTERS.md`](./ADOPTERS.md) by submitting a pull request.
9. Send your observations and lessons learned through the [feedback template](./validation/feedback-template.md). Your contributions are what allow the framework to converge over time.

If you are a **federation**:
1. Read the [EXPLAINER](./EXPLAINER.md) and [`certification-scheme/federation-pathway.md`](./certification-scheme/federation-pathway.md).
2. Choose between authoring your own declination (federation-led pathway) or reviewing/endorsing a community-led declination of your standards.
3. Either way, use the [CTF Translator](./tools/ctf-translator/) to obtain a structured starting point.

If you are an **individual contributor** (researcher, coach, methodologist):
1. Read the [EXPLAINER](./EXPLAINER.md) and [`CONTRIBUTING.md`](./CONTRIBUTING.md).
2. Submit observations, propose RFCs, comment on open RFCs, help with translations.

## License

This work is licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License** (CC BY-SA 4.0).

You are free to share and adapt the material, including for commercial purposes, provided that you (a) give appropriate credit to *Maxime Bui* as the founder of CTF, and (b) distribute any republication or modification of the CTF text under the same license.

> **Important:** the CC BY-SA license applies to the *text* of CTF (the normative document, the helper agent system prompts and knowledge bases, the certification schemes, the templates). It does **not** propagate to platforms that *implement* CTF in their own products. A platform that uses CTF to build its own AI coaching agents is not required to publish or open-source those agents — only republications or modifications of the CTF text itself must remain under CC BY-SA.

See [`LICENSE`](./LICENSE) for the full text.

## Citing CTF

> Maxime Bui (2026). *Coaching Trust Framework (CTF), version 1.0*. Licensed under CC BY-SA 4.0. <https://github.com/macsimplex/coaching-trust-framework>

---

*CTF is an independent open-source project. It is not affiliated with, endorsed by, or sponsored by any professional coaching federation as of version 1.0. The project welcomes federation engagement and is designed to be extended by federation-specific declinations.*
