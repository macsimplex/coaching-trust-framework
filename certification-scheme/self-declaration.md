# CTF Self-Declaration

> *Protocol for a platform to publicly declare that it implements CTF (the common core, or a specific declination).*

---

## In plain words

If you build AI coaching agents on a platform and you want to publicly commit to following CTF, you do not need anyone's permission. You write a self-declaration on your own website, follow the steps below, and add yourself to the list of adopters in the CTF repository. That is the lightest pathway, and for most platforms at most stages of the project, it is the appropriate one.

The self-declaration is a public commitment. It rests on your honesty about what you actually do, on the visibility of your engineering practice (you keep the artifacts produced by the CTF toolkit so that you could show them if asked), and on the public scrutiny of anyone who chooses to verify.

The self-declaration is not weaker than a federation certification — they address different audiences. The federation certification carries weight specifically within that federation's professional sphere; the self-declaration carries weight everywhere else, including in the absence of a relevant federation declination.

> 🆕 If terms like *common core*, *declination*, *tripartite supervision* are unfamiliar, the [EXPLAINER](../EXPLAINER.md) introduces them in plain language with a glossary.

---

## Purpose

Self-declaration is the lightest pathway by which a platform commits, publicly, to implementing CTF. It does not require the involvement of any external authority. It rests entirely on the platform's own commitment, on the public visibility of that commitment, and on the verifiability of the artifacts the platform produces.

Self-declaration is suited to:

- Platforms implementing the **common core** of CTF, before any federation has approved a declination relevant to them.
- Platforms operating in domains for which **no federation declination yet exists**.
- Platforms wishing to demonstrate conformance during the period in which a federation declination is being prepared.
- Platforms implementing a declination that has been **submitted to a federation but not yet endorsed** (the declination's status is then transparent to the public).

When a federation declination becomes available and endorsed, a platform may upgrade its self-declaration to a federation-issued certification through the [federation pathway](./federation-pathway.md). Self-declaration and federation certification are not mutually exclusive: a platform can hold both, addressing different audiences.

## What a self-declaration commits to

By self-declaring CTF conformance, a platform commits to:

1. **Reading and understanding** the [common-core normative document](../document/ctf-v1.0.md), the relevant declination if any, and ensuring that its leadership, design and operations teams have done so.
2. **Using the CTF toolkit** for every AI coaching agent that falls within the declared scope:
   - CTF Designer for the design phase.
   - CTF Test Plan for pre-deployment validation.
   - CTF Robustness for pre-deployment hardening.
   - CTF Audit for ongoing oversight, on a documented periodicity.
3. **Maintaining the artifacts** produced by the toolkit (design documents, test plans, robustness reports, audit reports) in a form suitable for inspection.
4. **Implementing tripartite supervision** as described in the audit specification (designer, certified supervisor, CTF Audit), or a documented equivalent appropriate to the platform's scale.
5. **Disclosing publicly** the existence of the self-declaration, the CTF version implemented (with the declination's status if applicable), and the scope of the declaration.
6. **Sending observations** through the [feedback template](../validation/feedback-template.md) on a periodicity appropriate to the platform's scale of operation. Adopter feedback is the primary signal through which CTF evolves; sending observations is part of being an adopter.
7. **Communicating any material loss of conformance** within a reasonable delay, by withdrawing or amending the public declaration.
8. **Not claiming federation certification** unless that certification has actually been obtained through the proper pathway.

## What a self-declaration does not require

- It does not require that the platform's underlying agents be open-sourced.
- It does not require that the artifacts produced by the toolkit be made public (although platforms are encouraged to publish anonymized summaries).
- It does not require any payment or registration with the CTF project. CTF has no financial gate.
- It does not require external auditing, although it does not preclude it.

## How to self-declare

The procedure is simple. A platform that wishes to self-declare:

1. **Documents internally** that the commitments listed above have been understood and accepted at the appropriate level of the organization. This may take the form of a board resolution, a written statement by the founder, an internal policy document, or any equivalent formalization appropriate to the platform's structure.

2. **Publishes a self-declaration page** on its own website (or in the equivalent public space). The recommended minimal content is provided in the template at the end of this document.

3. **Adds itself to** [`../ADOPTERS.md`](../ADOPTERS.md) by submitting a pull request to the CTF repository. The pull request includes the link to the published self-declaration page.

4. **Maintains the artifacts** required by the commitments and keeps them available for inspection upon reasonable request from any interested party (researchers, federations, prospective users, journalists, regulators).

5. **Reviews the self-declaration** at least annually and after every CTF version upgrade, updating it as needed.

## What other parties can do

Self-declaration relies on the public visibility of artifacts and on the platform's reputation. Other parties can therefore play a valuable role:

- **Adopters** can review each other's self-declarations and challenge them when they appear inconsistent with observed behaviour.
- **Researchers** and **journalists** can audit self-declarations as part of their work, surfacing discrepancies between declared and actual conformance.
- **Federations** considering whether to endorse a declination or to certify a platform formally will draw on existing self-declarations as a baseline.

CTF does not centralize this oversight. It distributes it.

## Loss of conformance

If a platform substantively departs from its self-declared commitments — for example, by ceasing to use the toolkit, by deploying agents without proper validation, by abandoning audit — the platform must:

- Either return to conformance promptly, or
- Withdraw or amend its public declaration to reflect the actual state, and notify the CTF project so that the entry in [`../ADOPTERS.md`](../ADOPTERS.md) can be updated.

A platform that maintains a self-declaration that no longer reflects its practice is committing a misrepresentation that may be challenged publicly by the CTF project, by other adopters, or by external parties.

---

## Template — self-declaration page

Platforms are free to adapt the wording, but the substance of the declaration should remain.

> ## Coaching Trust Framework — Self-Declaration of Conformance
>
> **Platform:** [Platform name]
> **CTF version implemented:** [e.g. common core v1.0, or CTF-ICF v1.0 (status: submitted for federation review), or CTF-EMCC v1.0 (status: endorsed by EMCC)]
> **Scope of declaration:** [describe which AI coaching agents are covered, e.g. "all coaching agents deployed on the platform" or "the GROW coach agent only"]
> **Date of declaration:** [YYYY-MM-DD]
> **Last review:** [YYYY-MM-DD]
>
> [Platform name] declares that it implements the Coaching Trust Framework (CTF), version [X.Y] [or specific declination], for the scope described above.
>
> In particular, [Platform name] commits to:
>
> - Using CTF Designer for the design of every AI coaching agent within scope.
> - Using CTF Test Plan and CTF Robustness for pre-deployment validation and hardening of every such agent.
> - Subjecting every such agent to CTF Audit on a [monthly / quarterly / other] basis, with tripartite supervision involving the agent's designer, an independent certified supervisor, and the CTF Audit helper agent.
> - Maintaining the design documents, test plans, robustness reports and audit reports for every such agent, available for inspection upon reasonable request.
> - Sending observations to the CTF evidence log on a [quarterly / semi-annual] basis.
> - Disclosing material changes to this declaration promptly.
>
> This declaration is made under the platform's own responsibility and is not endorsed by the CTF project, by any professional federation, or by any third party. It is published in line with the [CTF self-declaration scheme](https://coaching-trust-framework.org/certification-scheme/self-declaration).
>
> **Contact for inquiries about this declaration:** [name and contact information]
>
> ---
>
> *This declaration was last verified internally on [YYYY-MM-DD] by [role / committee].*

---

## Final note

Self-declaration is not a weak form of conformance. It is the appropriate form during the period in which CTF and its ecosystem are growing, and it remains valid even when federation certifications become available — it simply addresses a different audience.

The strength of self-declaration grows with the number of platforms that adopt it, with the visibility of their artifacts, and with the maturity of the public scrutiny that can be directed at it.
