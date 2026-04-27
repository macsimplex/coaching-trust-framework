# CTF Translator

> *Reads a federation's existing standards and turns them into a draft CTF adaptation for that federation.*

---

## In plain words

Every coaching federation (ICF, EMCC, others) has its own ethical standards — codes of ethics, AI coaching frameworks, professional guidelines. These documents are typically rich in principle but written for human practitioners, not for engineers building AI agents.

CTF Translator is a small AI tool that **reads those federation documents and produces a first draft of a CTF-style adaptation** for the federation. Think of it as a translator who speaks both the language of the federation's tradition and the language of CTF's operational grammar.

The output is always a **draft**. The federation reviews it, adjusts it, approves it. CTF Translator does not decide what the federation requires; it produces a structured starting point that the federation's working group can build on, saving them the substantial labor of starting from a blank page.

---

## Why this tool exists

Without CTF Translator, a federation wishing to adopt CTF would face a discouraging task: read the entire CTF normative material, understand its structure, then go through their own documents one principle at a time and figure out how each one maps. This work could take a federation working group months.

With CTF Translator, the same work takes weeks: the tool produces the first 80% of the mapping automatically, and the working group focuses on the remaining 20% — the substantive judgment calls that only humans should make.

This is also the tool that allows the **community pathway** to exist: a community member can use CTF Translator on a federation's documents and submit the resulting draft to the federation for review, with the federation having far less work to do than if it had to draft everything from scratch.

---

## Position in the CTF architecture

CTF Translator operates at the **meta level** of the framework. It does not work on AI coaching agents directly; it works on the normative material that the five operational helper agents (Designer, Test Plan, Robustness, Config, Audit) will then consume.

```
Federation normative document  →  CTF Translator  →  CTF adaptation (draft)
                                                              ↓
                                                  Federation review and approval
                                                              ↓
                                                  CTF-Federation (validated adaptation)
                                                              ↓
                                                  Consumed by Designer / Test Plan / Robustness / Config / Audit
                                                              ↓
                                                  Applied to coaching agents on platforms
```

## When to use CTF Translator

CTF Translator is intended for use by:

- **Federations** wishing to produce their own CTF adaptation (CTF-ICF, CTF-EMCC, etc.).
- **Working groups** within a federation tasked with formalizing how the federation's standards should govern AI coaching practice.
- **Community members** willing to draft an adaptation for a federation under the [community pathway](../../certification-scheme/community-pathway.md).
- **The CTF community** in collaboration with a federation, when an adaptation is being co-constructed.

CTF Translator is **not** intended for use by individual platforms or coaches. Platforms implement CTF or a federation adaptation; they do not produce adaptations themselves.

## How it works (high-level)

The agent is sollicited with two inputs:

1. The **federation's normative document** (or set of documents).
2. The **current version of the generic CTF** (which serves as the structural target).

It produces a structured Markdown document that includes:

- **A mapping table** showing how each federation requirement aligns with, extends, specifies, or has no equivalent in the generic CTF.
- **A list of federation-specific requirements** that have no equivalent in the generic CTF (these are candidates for the adaptation, and possibly for upstreaming into the generic CTF in a future proposal).
- **A list of generic CTF requirements** that the federation may want to strengthen in its adaptation.
- **A reviewer checklist** for the federation working group, identifying the key judgment calls they should make before approving the draft.

The output is **always a draft**. Federation review, adjustment and formal approval are required before the adaptation becomes operative.

## What CTF Translator is not

- It is not an automated certifier. It does not decide whether a federation's document is "compatible" with CTF; it produces a structured comparison that humans interpret.
- It is not a substitute for federation expertise. The federation remains the sole authority on what is or is not consistent with its professional tradition.
- It is not a one-shot tool. As the federation's normative document evolves, CTF Translator can be re-run to update the draft adaptation.

## Outputs and artifacts

The agent produces a Markdown-formatted document with the following sections:

1. **Header** — identification of the federation document, its version, the CTF version used, the date of translation, the agent version.
2. **Mapping table** — federation requirement ↔ CTF principle/requirement, with status (aligned, extends, specifies, no equivalent).
3. **Federation-specific requirements** — candidates for the adaptation and for potential upstreaming.
4. **Generic CTF requirements potentially strengthened by the federation** — opportunities for the adaptation to add stricter expectations.
5. **Reviewer checklist** — questions the federation working group should answer before approving the adaptation.

The full system prompt and knowledge base of the agent are published in this directory:
- `system-prompt.md` *(to be added in a subsequent release)*
- `kb/` *(knowledge base files, to be added in a subsequent release)*

## Model-agnostic design

The agent is designed to work on any sufficiently capable large language model. Implementation choices (model provider, hosting, integration) are left to the user. CTF does not endorse or require any specific provider.

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0. System prompt and knowledge base are being prepared for inclusion in a subsequent minor release of the toolkit.
