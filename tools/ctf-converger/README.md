# CTF Converger

> *Compares multiple CTF declinations to identify requirements that are common across them, and produces structured candidates for promotion into the common core.*

---

## In plain words

CTF grows from below. The common core is intentionally light at the start; richness is added over time, but only by promoting requirements that have proven to be common across multiple federations. Doing this comparison by hand would be tedious and error-prone — declinations are long documents with many sections, and the same idea can be expressed in different words.

CTF Converger is the helper agent that does the comparison. You give it two or more declinations (CTF-ICF, CTF-EMCC, etc.) and the current common core. It produces a structured comparison showing which requirements are present in multiple declinations under similar form, which are unique to one declination, and which have surface-level similarity but turn out to differ in substance once you read them closely.

The output is the basis for a **promotion proposal** — a Request For Comments that proposes to move a recurring requirement up into the common core, where it would benefit all federations and adopters. The agent does not decide; the caretaker decides, advised by the scientific panel and the consultative council, motivated by the documented evidence the agent has assembled.

CTF Converger is what makes the inductive philosophy of CTF actually operational. Without it, "the common core grows from observed convergence" would be a slogan. With it, the convergence can be tracked, documented, and submitted to public review.

---

## Position in the CTF architecture

CTF Converger operates at the level of the framework itself, like CTF Translator. It does not work on individual coaching agents.

```
Multiple declinations  →  CTF Converger  →  Convergence analysis  →  Promotion RFC  →  Common core (next version)
   (CTF-ICF, CTF-EMCC,                     and candidate list                          (after RFC review)
    CTF-X, ...)
```

The output of CTF Converger is the empirical foundation on which promotion RFCs are built. Without convergence analysis, no requirement can be moved into the common core.

## When to use CTF Converger

- When at least **two declinations have been published** and have been operational long enough to accumulate implementation feedback.
- Periodically, as new declinations are added or existing declinations are revised.
- Specifically, before drafting any **promotion RFC** — because the RFC must cite cross-declination convergence as part of its evidence.
- When a federation considers adding a new requirement to its declination — running CTF Converger first reveals whether that requirement is already in another declination, which informs the decision (and possibly accelerates promotion).

## How it works (high-level)

The agent is sollicited with:

1. Two or more **declinations** to compare.
2. The **current common core**, which serves as the structural reference.
3. Optionally, **observations from the evidence log** that document how requirements have been implemented in practice.

It produces a structured analysis covering:

- **Requirement-level comparison** — for each requirement in each declination, identification of analogous requirements in other declinations.
- **Convergence categories**:
  - *Direct match*: the same requirement, in substantively similar wording, in two or more declinations.
  - *Conceptual match*: the same intent, expressed differently, in two or more declinations.
  - *Partial match*: overlap in some aspects, divergence in others.
  - *Unique*: present in only one declination.
- **Promotion candidates** — direct and conceptual matches that meet the multiple implementations rule (present in at least two independent declinations).
- **Cautionary notes** — partial matches that look superficially similar but differ in important ways. These are explicitly *not* promotion candidates without further work.
- **Suggested formulations** for promotion candidates — proposed wording for the common-core version of the requirement, that subsumes the variations observed across declinations.

## What CTF Converger is not

- It is not an automated promoter. It identifies candidates; the decision to promote is made through the RFC process by the caretaker, advised by the scientific panel and consultative council.
- It is not exhaustive. New convergence categories will emerge over time as more declinations are produced; the agent's knowledge base will be updated through RFCs.
- It is not a substitute for federation review. When the convergence analysis suggests a promotion, the federations whose declinations contributed the evidence should be consulted before the RFC is finalized.
- It is not designed for surface-level word matching. It analyzes meaning, not vocabulary.

## Outputs and artifacts

The agent produces a Markdown-formatted convergence analysis with the following sections:

1. **Header** — declinations compared, common-core version, date of analysis, agent version.
2. **Convergence summary table** — for each requirement, the convergence category and the declinations that match.
3. **Promotion candidates** — direct and conceptual matches, with suggested common-core formulations.
4. **Partial matches with cautionary notes** — overlap that does not qualify for promotion.
5. **Unique requirements** — present in only one declination, kept as federation-specific.
6. **Reviewer checklist** — questions the caretaker, the scientific panel and the consultative council should consider when reviewing a promotion RFC built on this analysis.

## Structure of this directory

- `README.md` — this file.
- `system-prompt.md` — the system prompt of the helper agent (to be added).
- `kb/` — the knowledge base files (to be added).

## Model-agnostic design

The agent is designed to work on any sufficiently capable large language model. Implementation choices (model provider, hosting, integration) are left to the user. CTF does not endorse or require any specific provider.

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0.
