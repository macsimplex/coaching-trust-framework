# CTF Community Pathway

> *Protocol for a CTF community member to author a declination from a federation's normative documents and submit it to the federation for review and validation.*

---

## In plain words

Federations have limited capacity. Their normative work is essential, but they cannot necessarily allocate time and people to author a CTF declination from scratch. So a complementary pathway exists: a member of the CTF community — typically the founder, but potentially any contributor with the right competencies — can author a declination on behalf of a federation, by working from the federation's published normative documents (its code of ethics, its AI coaching framework, its standards), and then submit it to the federation for review and approval.

This community pathway lowers the entry barrier for federations. They do not need to mobilize their own working group from day one; they can engage initially as reviewers and validators rather than as authors, and they can decide later whether to take over the maintenance of the declination.

The status of a community-authored declination is **transparent** at every stage. While the federation is reviewing, the declination is publicly marked as *submitted for federation review*. Adopters who want to implement it during this period may do so under their own responsibility, with explicit mention of the status. Once the federation endorses, the status becomes *endorsed by the federation*, and certification by the federation becomes possible for adopters.

This pathway is one of the most important practical mechanisms by which CTF can scale across professional federations, especially in the early years.

> 🆕 If terms like *common core*, *declination*, *status taxonomy* are unfamiliar, the [EXPLAINER](../EXPLAINER.md) and the [declinations README](../declinations/README.md) cover them in plain language.

---

## When this pathway applies

The community pathway is appropriate when:

- A federation has published normative documents that could form the basis of a CTF declination, but has not yet undertaken the declination work itself.
- A CTF community member has the competence and the legitimate motivation to produce a draft from those documents on the federation's behalf.
- The federation is willing to engage as a reviewer and validator, even if it is not yet prepared to author from scratch.

The community pathway is **not** appropriate when:

- The federation has explicitly stated it does not wish to engage with CTF. The community member should respect that position and not produce a declination in such cases.
- The community member has no relevant competence in the federation's tradition. A declination requires substantive understanding of the federation's normative texts.
- The community member intends to use the declination commercially or for personal advantage rather than as a contribution to the common good.

## Steps for community-led production

1. **Confirm the federation's openness** to receiving a draft declination, even informally. A community member should not invest substantial effort if the federation has indicated a lack of interest.

2. **Read carefully** the federation's relevant normative documents, the [common-core normative document](../document/ctf-v1.0.md), the [governance](../GOVERNANCE.md), and the [EXPLAINER](../EXPLAINER.md).

3. **Run CTF Translator** on the federation's normative documents. This produces a structured starting point — a draft declination with a mapping between federation requirements and the CTF common core.

4. **Refine the draft.** The community member adjusts the draft for fidelity to the federation's tradition, clarifies points of uncertainty by consulting published commentary, and leaves explicit reviewer notes where federation expertise is required to resolve.

5. **Open community review (optional but recommended).** The draft can be opened to the wider CTF community for comments, especially from contributors familiar with the federation's domain. This is not a substitute for federation review; it is a quality pre-check.

6. **Publish the draft in the CTF repository** under [`../declinations/`](../declinations/), in a dedicated subdirectory. The `status.md` file declares the status as *working draft*.

7. **Submit to the federation.** The community member formally transmits the draft to the federation, with a clear letter of intent: this is offered as a contribution; the federation has full authority to accept, modify, reject; if endorsed, the federation may take over the maintenance.

8. **Status update on submission.** The `status.md` file is updated to *submitted for federation review*, with the date of submission and the federation contact.

9. **Adopters during review.** Platforms wishing to implement the declination during the review period may do so under their own responsibility. Their self-declaration must indicate the declination's status as *submitted for federation review* and not claim federation endorsement.

10. **Federation review process.** The federation conducts its own review according to its internal processes. The federation may:
    - Accept the declination as-is and endorse it.
    - Request modifications and re-submit for endorsement.
    - Reject the declination and explain why (in which case the community member may withdraw, revise, or maintain it as an unendorsed working draft, openly marked as such).

11. **Endorsement.** If the federation endorses the declination, the `status.md` file is updated to *endorsed by the federation*, with the date of endorsement and the federation's reference document. Adopters may now claim conformance to the endorsed declination.

12. **Long-term maintenance.** After endorsement, the federation and the community caretaker negotiate the maintenance regime:
    - The federation may take over as sole caretaker (status transitions to *federation-authored*).
    - The federation and the community caretaker may co-maintain (status transitions to *co-maintained*).
    - The community caretaker may continue as primary, with the federation as ongoing endorser of new versions.

The choice depends on the federation's capacity and preferences.

## What the community member commits to

By undertaking community-led production of a declination, the community member commits to:

- Acting in good faith on the federation's behalf, not for personal advantage.
- Producing a faithful integration of the federation's normative tradition into the CTF structure.
- Transparency: clearly indicating the declination's status at every stage.
- Respecting the federation's authority: if the federation requests modifications, the community member integrates them; if the federation rejects, the community member does not present the declination as endorsed.
- Open licensing: the declination is published under [CC BY-SA 4.0](../LICENSE), like all CTF text.

## What the federation commits to (if it chooses to engage)

By engaging with a community-led declination, the federation commits to:

- Providing a clear response within a reasonable delay (the community member should not be left in indefinite uncertainty).
- Reviewing the declination on substance, not on the identity of the author.
- If endorsing, allowing adopters in its sphere to pursue federation certification on the basis of the endorsed declination.
- If declining to endorse, providing motivated reasons that may help the community member improve future iterations.

## Status transparency: why it matters

A declination that has been submitted to a federation but not yet endorsed is not the same as a declination that the federation has endorsed. The community pathway insists on **status transparency** at every stage so that:

- Adopters know exactly what they are implementing.
- The wider community can trust the integrity of the framework.
- Federations are not misrepresented as having endorsed something they have not endorsed.

Misrepresentation of declination status (e.g. claiming federation endorsement when only submission has occurred) is treated as a serious breach by the CTF project, and may result in removal of the offending entry from [`../ADOPTERS.md`](../ADOPTERS.md) and public correction.

## Relationship with the federation pathway

The community pathway and the [federation pathway](./federation-pathway.md) are complementary, not competing. They simply describe two different ways the same kind of object — a federation-specific declination — can come into existence.

In practice, many declinations may begin under the community pathway and transition over time to a federation-led or co-maintained regime. This is the expected, healthy trajectory: as a federation gains familiarity with CTF and confidence in the value of the declination, its level of engagement deepens.

## License

This community pathway is itself published under [CC BY-SA 4.0](../LICENSE).

---

*The community pathway is the mechanism that allows CTF to grow even before federations have the capacity to engage as full authors. It is one of the practical expressions of the founding principle: the common good belongs to no one and grows through many hands.*
