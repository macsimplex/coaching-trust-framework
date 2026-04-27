# CTF Federation Pathway

> *Protocol for a professional coaching federation to author, validate or steward a CTF declination, and to issue federation-level certifications based on it.*

---

## In plain words

A professional federation — like the International Coaching Federation (ICF) or the European Mentoring and Coaching Council (EMCC) — has its own normative documents: a code of ethics, an AI coaching framework, professional standards. These documents reflect decades of accumulated professional wisdom in that federation's tradition. CTF was designed to **work with** these documents, not to replace or compete with them.

The federation pathway describes how a federation can engage formally with CTF. Two cases are possible. Either the federation authors its own CTF declination from scratch (this document) — federation-led pathway. Or the federation reviews and endorses a declination authored by a community member (this is described in [`./community-pathway.md`](./community-pathway.md)).

In either case, once the declination is in place, the federation becomes the certification authority for platforms operating in its sphere. Platforms can then go beyond simple self-declaration: they can pursue a federation-issued certification that carries specific weight within that professional community.

CTF asks nothing financial of federations and grants no special privileges in return. The relationship is one of mutual contribution to a public good.

> 🆕 If terms like *common core*, *declination*, *promotion to the common core* are unfamiliar, the [EXPLAINER](../EXPLAINER.md) covers them in plain language.

---

## Two activities, distinct but related

A federation engaging with CTF can perform two distinct activities:

1. **Production or validation of a declination** of CTF that integrates the federation's normative requirements — the present pathway covers federation-led production; the community pathway covers federation validation of community-led production.
2. **Certification of platforms** as conformant to the federation's declination, once it exists.

These activities are conceptually separate. A federation may at first only do (1) and leave (2) for later. The two activities together constitute the federation pathway.

## Activity 1 — Producing a CTF declination (federation-led)

### When this pathway applies

The federation-led pathway applies when the federation itself initiates and authors the declination. This is the appropriate path when:

- The federation has internal capacity to produce such a document.
- The federation prefers to retain full editorial control from the start.
- A community-led draft is not available or not preferred.

In other cases, the federation may instead engage through the [community pathway](./community-pathway.md), where a CTF community member produces a draft and the federation reviews, adjusts and validates it.

### Steps for federation-led production

1. **Read** the [common-core normative document](../document/ctf-v1.0.md) and the [governance](../GOVERNANCE.md). Familiarize the working group with the [EXPLAINER](../EXPLAINER.md) for vocabulary alignment.

2. **Run CTF Translator** on the federation's normative documents (code of ethics, AI coaching framework, standards). This produces a structured starting point — a draft declination with a mapping between federation requirements and the CTF common core. See the [CTF Translator README](../tools/ctf-translator/) for details.

3. **Refine the draft.** The working group adjusts the draft according to the federation's normative tradition: reformulating, adding requirements that CTF Translator may not have surfaced, removing or qualifying common-core principles that the federation interprets specifically.

4. **Internal review.** The federation submits the refined draft to its own ethics committee, AI commission, or equivalent body for internal validation.

5. **Public consultation (recommended).** The federation publishes the candidate declination for a public comment period of 30 to 60 days, inviting feedback from members, adopting platforms, and the wider CTF community. This step is not mandatory but is strongly recommended for legitimacy.

6. **Final adoption.** The federation formally adopts the declination, giving it a version number (e.g. CTF-ICF v1.0).

7. **Publication.** The declination is published in the CTF repository under [`../declinations/`](../declinations/), in a dedicated subdirectory (e.g. `declinations/ctf-icf/`). A `status.md` file declares the status as *federation-authored*. The federation is its sole caretaker.

8. **Maintenance.** Subsequent versions follow the same process. The federation has authority over its declination, in keeping with the founding principle of CTF.

### Federation autonomy

A federation has full editorial authority over its declination. It may:

- Reformulate any common-core principle to better align with its tradition.
- Add requirements specific to its professional sphere.
- Reject or qualify any common-core requirement, with public motivation.
- Choose its own decision-making process for declination evolution.

What a federation may not do (per the founding principle):

- Restrict the openness of its declination beyond the CC BY-SA 4.0 license.
- Withdraw the declination from the public domain once published.
- Claim the CTF brand or trademark for its exclusive use.

## Activity 2 — Certifying platforms

Once a CTF declination has been published by the federation (whether federation-authored or community-led and federation-endorsed), the federation may offer a **federation-issued certification** to platforms that conform to it.

### Recommended structure of the certification process

CTF does not impose a single certification process; the federation defines its own. Recommended elements include:

1. **Application** by the platform, including:
   - A complete self-declaration as a baseline (see [`./self-declaration.md`](./self-declaration.md)).
   - Access to the artifacts produced by the CTF toolkit (design documents, test plans, robustness reports, audit reports).
   - Identification of the certified supervisors involved in the agent's tripartite supervision.

2. **Review** by the federation, possibly through a dedicated commission or accredited reviewers. The review verifies that:
   - The platform's design documents are aligned with the declination.
   - Test plans, robustness reports and audit reports are consistent with the design and produced through proper use of the toolkit.
   - The tripartite supervision is operative and credible.
   - The platform's public disclosures are accurate.

3. **Certification decision**, with documented motivation, and an explicit duration (e.g. valid for 24 months, renewable).

4. **Public listing** of certified platforms by the federation, and addition to [`../ADOPTERS.md`](../ADOPTERS.md) with a clear indication of federation certification status.

5. **Renewal and revocation** procedures, including conditions under which certification may be suspended or revoked.

The federation may charge fees for its certification activity, in keeping with the broader practice of professional certification. CTF itself charges nothing.

## Federation contribution to the common core

Federations engaged with CTF are encouraged — but not required — to contribute to the evolution of the common core through the proposal process described in [`../GOVERNANCE.md`](../GOVERNANCE.md).

A particularly valuable form of contribution is the identification of requirements present in the federation's declination that may also be present in another federation's declination, indicating a candidate for promotion to the common core through the multiple implementations rule. The [CTF Converger](../tools/ctf-converger/) helper agent supports this analysis.

## Relationship between federations and CTF

CTF positions itself as a partner to professional federations, not as an authority above them. Each federation remains the highest authority within its own professional sphere; CTF provides infrastructure that federations can choose to use.

In external communication, CTF and platforms implementing CTF should describe the framework as:

- *Operational infrastructure that federations can adopt and adapt to make their AI coaching standards verifiable*.
- *A common foundation that respects each federation's normative tradition*.
- *Open and free, governed by a community process in which federations are first-class participants*.

CTF should never be described as *above the federations* or as *replacing federation standards*. The relationship is collaborative, and the framework's legitimacy depends on it being received that way.

## License

The federation pathway is itself published under [CC BY-SA 4.0](../LICENSE). Federations adopting it may translate, adapt, or extend it for their own use, as long as the license terms are respected.

---

*The federation pathway is what makes CTF more than a generic framework. It is the mechanism by which the framework becomes meaningful within each professional tradition while remaining a common good.*
