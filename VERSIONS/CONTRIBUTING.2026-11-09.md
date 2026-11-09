# Contributing to the Coaching Trust Framework

Thank you for considering a contribution to CTF. This document describes the practical steps to contribute, complementing the formal governance described in [`GOVERNANCE.md`](./GOVERNANCE.md).

---

## In plain words

There are essentially four ways to help CTF grow:

1. **Use it and tell us what happens.** If you implement CTF in your platform or your practice, the most valuable thing you can do is tell us what worked, what didn't, what was unclear, what was missing. This is what makes the framework actually improve.
2. **Suggest a change.** If you see something that should be added, modified, or removed, you can submit a formal proposal that the community discusses openly.
3. **Help with a federation adaptation.** If you know a coaching federation's standards well (ICF, EMCC, others), you can help draft a CTF adaptation for that federation.
4. **Improve the existing material.** Fix typos, write better examples, translate documents, clarify wording.

You don't have to be a developer or a technical expert. Coaches, researchers, federation representatives, and platform builders all bring different and necessary perspectives.

---

## Five ways to contribute

### 1. Submit feedback from your implementation

If you are implementing CTF (whether self-declared or in preparation), the most valuable contribution is structured feedback about your experience.

Use the template at [`validation/feedback-template.md`](./validation/feedback-template.md). Submit it as a pull request adding your filled-in feedback to the `validation/feedback/` directory (create it if it doesn't exist), or by emailing it to the caretaker.

The feedback you submit may be:
- Public (visible in the repository, attributable to your platform)
- Anonymized (visible but not attributed)
- Private (used by the caretaker but not published)

You choose the visibility level when you submit.

### 2. Submit a proposal for change

If you want to propose a substantive evolution of CTF — a new principle in the normative document, a modification to a helper agent, an enrichment of the certification scheme, a change in governance — the right channel is the **proposal process**.

How to do it:

1. Read [`GOVERNANCE.md`](./GOVERNANCE.md), especially section 3 (proposal process).
2. Copy [`rfcs/rfc-template.md`](./rfcs/rfc-template.md) into a new file named `rfcs/NNNN-short-title.md` (where NNNN is the next available four-digit number).
3. Fill out the template thoroughly. The clearer your proposal, the faster the discussion can converge. Pay particular attention to the **evidence section** — proposals without empirical grounding are unlikely to be accepted, except for editorial corrections.
4. Submit it as a pull request to the repository.
5. Be available during the open feedback window (30–60 days).

### 3. Help draft or maintain a federation adaptation

If you have deep knowledge of a federation's normative documents (ICF AI Coaching Framework, EMCC Code of Ethics, others), you can help in two ways:

- **Draft an adaptation** for a federation that does not yet have one. See [`certification-scheme/community-pathway.md`](./certification-scheme/community-pathway.md). The CTF Translator helper agent ([`tools/ctf-translator/`](./tools/ctf-translator/)) is the natural starting point.
- **Improve an existing adaptation** in [`declinations/`](./declinations/). Improvements may be editorial or substantive; substantive ones go through the proposal process.

In both cases, the federation in question retains final authority over the validation of its own adaptation. The community pathway is a way to lower the cost for federations to adopt CTF; it is not a way to bypass them.

### 4. Improve the existing material

Smaller improvements do not require a full proposal and can be submitted as direct pull requests:

- Typo fixes, grammar improvements, link corrections.
- Clarifications of existing wording that do not change requirements.
- Additional examples in the normative document or in the agent knowledge bases.
- Translations of the framework or of any deliverable into other languages.
- Improvements to the repository structure or to documentation.

For these contributions, simply open a pull request describing what you changed and why. The caretaker will review it within reasonable delay.

### 5. Translate

CTF is currently maintained primarily in English, with a French version of the EXPLAINER. Translations of any deliverable into other languages are welcome and important — they widen the circle of people who can engage with the framework.

To submit a translation, open a pull request adding the translated file alongside the original (e.g. `EXPLAINER-de.md` for German). For substantive documents (the normative document, governance, certification schemes), please coordinate with the caretaker before starting, to avoid duplicate effort.

---

## Code of conduct

CTF is a project that operates in the field of human transformation, ethics and trust. The way we collaborate must be consistent with what we ask AI coaching agents to embody: respect, sobriety, attention to the human, humility about one's own perspective.

In all contributions and discussions:

- Treat other contributors with respect, even (and especially) in disagreement.
- Critique ideas, not people.
- Acknowledge that good-faith disagreement is healthy and necessary for the iterative refinement of a common standard.
- Do not assume bad intent — most disagreements come from different vantage points, not from malice.
- When you make a mistake, acknowledge it. When someone else makes a mistake, allow them the space to acknowledge and correct it.

Behavior that consistently violates these expectations may result in a contributor being asked to step back from the project. Such decisions are made by the caretaker, after consultation when possible.

---

## What CTF is not looking for

To save your time and ours, here are contributions that are unlikely to be accepted:

- **Vendor-specific advocacy.** CTF is generic. Contributions that frame it around a specific LLM provider, hosting platform, or commercial offering will be redirected toward neutralization.
- **Anthropomorphizing language.** CTF agents are sollicited tools, not companions. Contributions that introduce relational, affective, or first-person personality into the agents will be rejected on principle.
- **Privatization or restriction.** Any contribution that would restrict CTF's openness, narrow its license, or grant special privileges to one organization is inadmissible by the founding principle.
- **Substitution to human work.** AI coaching agents are not substitutes for human coaches, therapists, or medical professionals. Contributions that would soften this position will be rejected.
- **Substantive proposals without evidence.** The framework grows by induction from observation. Substantive proposals that rest only on opinion, even sophisticated opinion, will be returned for revision with a request for empirical grounding.

---

## Attribution and credit

Contributors are listed in [`CONTRIBUTORS.md`](./CONTRIBUTORS.md) with their consent. The default form of credit is: name, organization (optional), date of first contribution, brief description of the contribution.

If you do not want your name in `CONTRIBUTORS.md`, simply mention this when you submit your contribution.

The CC BY-SA 4.0 license requires that the founder of CTF be cited in any republication of the framework. The contributors listed in `CONTRIBUTORS.md` do not need to be individually cited in third-party uses, but the file itself should be referenced.

---

## Questions

If you are unsure whether your idea warrants a proposal, a pull request or a discussion, the safest first step is to open a discussion (issue) describing what you have in mind. The caretaker will help you find the right channel.

If you have read the EXPLAINER and the governance and you still find a concept unclear, that itself is valuable feedback — please tell us. The framework is only as useful as it is understandable.

---

*Thank you for caring enough to contribute. CTF only becomes a real common good if many hands help shape it.*
