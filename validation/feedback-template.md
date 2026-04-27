# CTF Feedback Template

> *Standardized format for adopters, certified supervisors and researchers to send observations to the CTF evidence log.*

---

## In plain words

CTF evolves by absorbing what is observed in practice. For that to work, the observations have to arrive in a shape that can be aggregated, indexed and retrieved. This template provides that shape. Use it whenever you have something to share — an implementation lesson, an audit finding, a situation that revealed a gap in CTF expectations, a research result that has direct implications for the framework.

The template is short on purpose. We want observations, not essays. If your observation deserves more space, you can attach a longer document, but the structured fields below should always be filled.

> 🆕 If terms like *common core*, *declination*, *evidence log* are unfamiliar, the [EXPLAINER](../EXPLAINER.md) and the [validation methodology](./methodology.md) cover them.

---

## When to use this template

Use this template if you are:

- An **adopter** sending periodic observations about your implementation of CTF.
- A **certified supervisor** sharing an observation from your audit work.
- A **researcher** submitting a study result with direct implications for CTF.
- A **federation** sharing institutional observations about the application of a CTF declination.
- An **observer** (journalist, regulator, ethics committee member) sharing a relevant observation.

You do not need to be officially affiliated with CTF to send feedback. Anyone can submit. The caretaker will assess admissibility against the criteria in the [methodology](./methodology.md).

## How to submit

Two options:

1. **Pull request** — fork the repository, copy the filled-in template into `validation/feedback-submissions/[YYYY-MM-DD]-[short-identifier].md`, and submit a pull request.
2. **Direct contact** — send the filled-in template to the contact listed in the project README. The caretaker will integrate accepted submissions into the repository.

Pull requests are preferred for transparency, but the contact channel is available for parties who prefer not to interact with the repository directly.

---

## The template

Copy the section below into a new file and fill it in. Remove or mark *N/A* fields that do not apply to your observation.

```markdown
# CTF Feedback — [Brief title of the observation]

## Header

- **Submission ID:** [will be assigned by the caretaker on integration]
- **Submitter type:** [adopter / certified supervisor / researcher / federation / observer]
- **Submitter identification:** [name and organization, or pseudonym if necessary]
- **Submission date:** [YYYY-MM-DD]
- **Period covered by the observation:** [from YYYY-MM to YYYY-MM, or single date for an incident]
- **CTF version concerned:** [common core vX.Y, or specific declination, e.g. CTF-ICF v1.0]
- **Agent(s) concerned:** [name and version, or "multiple" or "general"]
- **Anonymization confirmation:** [I confirm that this submission contains no personally identifying information about end-users of any AI coaching agent.]

## Type of observation

(check one or more)

- [ ] Implementation feedback — how a CTF requirement worked or did not work in practice
- [ ] Audit finding — observation from continuous oversight of a deployed agent
- [ ] Gap signal — situation where CTF expectations did not anticipate the case
- [ ] Convergence signal — observation that a requirement in our declination resembles one in another declination
- [ ] Counter-evidence — observation that contradicts an existing CTF expectation or a previous evidence log entry
- [ ] Research result — academic or institutional research with direct implications
- [ ] Other (describe)

## Facts observed

[Describe the observation factually, in plain prose. Aim for 100 to 500 words. Stick to what was observed; interpretation goes in the next section. If the observation refers to specific transcripts or documents, cite them in anonymized form.]

## Interpretation

[Your reading of what the observation means for CTF. What does it suggest about an existing requirement, a missing requirement, a clarification needed, a possible promotion to the common core? Be honest about the limits of your inference.]

## Suggested action

(check one or more, optional)

- [ ] No action — submitted for the record only
- [ ] Caretaker review for clarification of an existing requirement
- [ ] Candidate for an RFC (clarification, addition, modification)
- [ ] Candidate for a promotion RFC (requires presence in another declination — please cite if known)
- [ ] Counter-evidence flag against an existing evidence log entry (cite the entry ID)
- [ ] Other (describe)

## Engagement with counter-evidence

[Are there observations that go in the opposite direction of yours? Have you encountered any? If so, briefly describe and how you reconcile them with your observation.]

## Methodology of the observation

[How did you come to this observation? Was it through systematic audit, through a single incident, through aggregation of multiple incidents, through user feedback, through a research study? Be brief but specific enough that the scientific panel can assess methodological clarity.]

## References (optional)

[List any documents, audit reports, transcripts (anonymized), publications, or other materials that support the observation. Public references are preferred. Internal documents may be cited and made available on request.]

## Permissions

- [ ] I authorize the caretaker to integrate this submission into the public evidence log, with attribution as specified in the header.
- [ ] I authorize the caretaker to anonymize this submission if needed (replacing the submitter identification with "anonymous adopter / supervisor / etc.").
- [ ] I prefer this submission to remain attributed only to my organization (not to me personally).
- [ ] Other (describe)
```

---

## What happens after you submit

1. The caretaker acknowledges receipt within a reasonable delay (typically two weeks).
2. The caretaker assesses admissibility against the criteria in the [methodology](./methodology.md). If anonymization is incomplete or the observation is unclear, you may be asked for clarification.
3. Accepted submissions are integrated into the public [evidence log](./evidence-log.md) with a unique submission ID.
4. Submissions that suggest a substantive change to CTF may motivate a future RFC. You may be invited to participate in drafting it, but you are not required to.
5. Submissions that flag counter-evidence against existing log entries are cross-referenced with the original entries; both entries remain visible.

## Why anonymization matters

End-users of AI coaching agents share information that may be deeply personal. Their privacy is non-negotiable. Any feedback submission that contains personally identifying information about an end-user — names, locations, identifying biographical details, identifiable transcripts — will be returned to the submitter for revision before integration.

If you are unsure whether your submission is sufficiently anonymized, ask. The caretaker will help.

---

*Your observations are how CTF stays honest. Thank you for taking the time to share them.*
