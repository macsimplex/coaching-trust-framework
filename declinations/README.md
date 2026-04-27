# CTF Declinations

This directory hosts all CTF declinations — adapted versions of CTF that integrate the specific normative requirements of one professional federation each.

> 🆕 If you are unfamiliar with the relationship between the common core, declinations and the inductive cycle, the [EXPLAINER](../EXPLAINER.md) covers it in plain language.

---

## In plain words

A declination is what you get when you take CTF (the generic part) and you adapt it to a specific professional federation, like the International Coaching Federation (ICF) or the European Mentoring and Coaching Council (EMCC). Each federation has its own normative requirements — its code of ethics, its AI coaching framework, its professional standards. A declination integrates those requirements into the CTF structure so that platforms can implement them in a verifiable way.

All declinations live in this folder. Each declination has its own subfolder (e.g. `ctf-icf/`, `ctf-emcc/`) containing the declination text, its status, and any related material. Every declination has a clearly stated **status** so that anyone reading the repository knows where each declination stands — whether it is still a draft, whether it has been submitted to its federation for review, whether it has been validated.

A platform that wants to implement a particular declination can do so even before the federation has formally validated it, as long as the declination's status is publicly clear. This means an ecosystem can begin to form around a declination while the federation is reviewing it.

---

## Index of declinations

*This index will be updated as declinations are produced. As of CTF v1.0, no declination has been published. The first declinations are anticipated to be CTF-ICF and CTF-EMCC, both produced through the community pathway and submitted to their respective federations for review.*

| Declination | Federation | Status | Caretaker | Latest version |
|---|---|---|---|---|
| (none yet) | | | | |

## Status taxonomy

Every declination must clearly state its status in its `status.md` file. The valid statuses, in increasing order of formal weight, are:

### Working draft

The declination is being authored. It is not yet submitted to the federation. Adopters should not rely on it for production conformance claims.

### Submitted for federation review

The declination has been finalized by its caretaker and formally submitted to the federation it concerns. The federation has not yet validated it. Adopters may implement it under their own responsibility, with explicit mention that the declination is awaiting federation validation.

### Endorsed by the federation

The federation has reviewed and endorsed the declination. Adopters may implement it and claim conformance to the endorsed declination. The caretaker remains the original author, but evolutions are now subject to federation consent.

### Co-maintained with the federation

The federation has assumed ongoing maintenance of the declination, jointly with its original caretaker or independently. Evolutions are governed by the federation's processes, which must remain compatible with the founding principle of CTF.

### Federation-authored

The declination was authored directly by the federation through the federation-led pathway (see [`../certification-scheme/federation-pathway.md`](../certification-scheme/federation-pathway.md)). The federation is its sole caretaker from the start.

A declination may transition through several statuses over its lifetime. Status transitions are recorded in the declination's `status.md` file with the date of transition and the responsible parties.

## Two pathways for producing a declination

A declination can come into existence in two ways:

### Federation-led pathway

The federation itself authors the declination from scratch, using the [CTF Translator](../tools/ctf-translator/) helper agent to produce a starting point. The declination is published directly under the federation's authority, with the *federation-authored* status from the beginning. Details in [`../certification-scheme/federation-pathway.md`](../certification-scheme/federation-pathway.md).

### Community-led pathway

A CTF community member (typically the founder, but potentially any contributor) authors a declination from the federation's normative documents and submits it to the federation for review. The declination starts at *working draft*, transitions to *submitted for federation review* when ready, and to *endorsed by the federation* if and when the federation validates it. Details in [`../certification-scheme/community-pathway.md`](../certification-scheme/community-pathway.md).

Both pathways are valid. They simply describe different ways the same kind of object (a federation-specific declination) comes into existence.

## Structure of a declination directory

Each declination subfolder follows a common structure:

```
declinations/ctf-X/
├── README.md                              ← brief overview of this declination
├── status.md                              ← current status, history, caretaker info
├── declination-vX.Y.md                    ← the declination itself (current version)
├── changelog.md                           ← versioning log
└── (optional supplementary material)
```

The declination document follows the same structural skeleton as the common core (Parts I to VIII) but enriches each part with the federation-specific requirements.

## Multiple implementations rule and convergence

The presence of multiple declinations in this directory is what enables the inductive cycle of CTF. As declinations accumulate, the [CTF Converger](../tools/ctf-converger/) helper agent compares them to identify requirements that recur. Recurring requirements become candidates for promotion into the common core through the RFC process described in [`../GOVERNANCE.md`](../GOVERNANCE.md), section 4.

The rule is strict: no requirement may be promoted into the common core unless it is already present in **at least two independent declinations**. This is what makes the common core grow only by validated convergence, not by declaration.

## License

All declinations are derivative works of the CTF text and must be published under [CC BY-SA 4.0](../LICENSE), in line with the ShareAlike clause. Federations are free to add their own attribution and to indicate that the declination is published under the federation's authority, as long as the license terms are respected.

---

*Declinations are how CTF respects each federation's autonomy while building a common framework. They are the place where universality and specificity meet.*
