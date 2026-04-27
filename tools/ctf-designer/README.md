# CTF Designer

> *Helps a platform design a new AI coaching agent step by step, surfacing every important decision required for CTF conformance.*

---

## In plain words

Building an AI coaching agent involves dozens of decisions: what does the agent do, what does it not do, how does it talk, what does it know, when does it say "I cannot help you with this," when does it redirect to a human, what does it tell the user about itself.

If those decisions are made implicitly — without writing them down, without questioning them, without checking they all hold together — the resulting agent is a hypothesis. It might work, it might not, and nobody will be able to tell you why it does what it does.

CTF Designer walks the platform team through the design conversation that should happen *before* anyone writes code. It asks the right questions, keeps a record of the answers, and produces a structured **design document** that captures every constitutive decision with its rationale.

This design document is then used by every other helper agent: CTF Test Plan reads it to know what to test, CTF Robustness reads it to know what to stress, CTF Audit reads it to know what to check against in the future.

---

## Why this tool exists

Without CTF Designer, every platform builds its own design process — sometimes well, sometimes poorly, often inconsistently. Important decisions get made by default, without being noticed. Issues that should have been resolved in design surface during deployment, where they cost much more to fix.

With CTF Designer, the design process is **shared and rigorous**. Every CTF-conformant agent has a comparable, auditable, complete design document. The work upfront is heavier; the work downstream is dramatically lighter.

---

## Position in the CTF architecture

CTF Designer operates at the **first phase** of the agent lifecycle — before any code is written, before any prompt is finalized.

```
Design intent  →  CTF Designer  →  Design document  →  (implementation by the platform)  →  Test Plan  →  Robustness  →  Deployment  →  Audit
```

The output of CTF Designer feeds directly into CTF Test Plan: a well-formed design document allows the test plan agent to produce an exhaustive validation grid.

## When to use CTF Designer

- At the **conception** of any new AI coaching agent intended to be CTF-conformant.
- When **substantially revising** an existing agent (significant scope expansion, change of methodology, repurposing).
- When **migrating** an agent from a non-CTF design to CTF conformance.

## How it works (high-level)

The agent is sollicited with several inputs:

1. The **design intent** — what the agent is meant to do, for whom, in what context.
2. The **applicable CTF version** — generic CTF or a specific federation adaptation (CTF-ICF, CTF-EMCC, etc.).
3. Any **methodological grounding** the platform plans to use (GROW, NVC, IFS, value exploration, etc.).

It engages the platform team in a structured design conversation that surfaces:

- Scope and out-of-scope boundaries.
- Posture and register (in line with CTF's non-anthropomorphization principle).
- Methodological backbone and its mapping to CTF requirements.
- Knowledge base sources and their licensing status.
- Refusal and escalation behaviours.
- Transparency disclosures to the user.
- Failure modes and their handling.
- Logging and oversight hooks (to enable subsequent audit).

It produces a structured **design document** that captures every constitutive decision, with rationales, in a format that downstream helper agents (Test Plan, Robustness, Audit) can consume.

## What CTF Designer is not

- It is not a code generator. It does not produce the system prompt or the knowledge base of the coaching agent. It produces the **specification** from which a competent implementer writes those.
- It is not a substitute for methodological expertise. The platform must still bring real expertise in the coaching method it intends to deploy.
- It is not a stamp of approval. Producing a CTF Designer document is a necessary step, not a sufficient one. Conformance still requires Test Plan, Robustness and Audit.

## Outputs and artifacts

The agent produces a Markdown-formatted design document with at least the following sections:

1. **Identification** — agent name, version, intended scope, target audience.
2. **CTF baseline** — which CTF version (generic or adaptation) the agent is designed to conform to.
3. **Posture and register** — explicit statement of how the agent presents itself, in line with the non-anthropomorphization principle.
4. **Methodological backbone** — the coaching method(s) the agent operates with, with sources and licenses.
5. **Knowledge base inventory** — list of knowledge sources, their status (public domain, original, licensed), and how they are used.
6. **Scope and boundaries** — what the agent does, what it explicitly does not do.
7. **Refusal and escalation matrix** — situations where the agent declines or redirects, with the corresponding behaviour.
8. **Transparency disclosures** — what the agent tells the user about itself, when, and how.
9. **Failure modes** — anticipated failure modes and their handling.
10. **Oversight hooks** — how the agent's operation will be made auditable for CTF Audit.
11. **Open questions** — design decisions not yet resolved, with proposals for resolution.

The full system prompt and knowledge base of the agent are published in this directory:
- `system-prompt.md` *(to be added in a subsequent release)*
- `kb/` *(knowledge base files, to be added in a subsequent release)*

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0. System prompt and knowledge base are being prepared for inclusion in a subsequent minor release of the toolkit.
