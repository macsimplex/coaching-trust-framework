# Requests for Comments (RFCs)

This folder holds proposals to change the Coaching Trust Framework (CTF) standard. Each change goes through the same steps: proposal, public comment period, decision, new version of the standard.

How to comment, and who decides for now: see [CONTRIBUTING.md](../CONTRIBUTING.md). Start a new RFC from [rfc-template.md](./rfc-template.md).

**Status, November 2026.** Comments are welcome now, by e-mail or GitHub issue (see CONTRIBUTING); the formal 30-day comment periods have not opened yet. RFCs 0008 to 0010 define version 0 of the standard and are drafts. RFCs 0001 to 0005 are proposals for later versions; they impose nothing on version 0.

## Current RFCs

| # | Title | Status |
|---|---|---|
| 0001 | [Incognito testing (mystery-shopper principle)](./0001-incognito-testing.md) · [FR](./0001-incognito-testing.fr.md) | Restored draft; comment period paused |
| 0002 | [Multi-model evaluation protocol](./0002-multi-model-evaluation-protocol.md) · [FR](./0002-multi-model-evaluation-protocol.fr.md) | Restored draft; comment period paused |
| 0003 | [Version-bound continuous certification](./0003-version-bound-continuous-certification.md) · [FR](./0003-version-bound-continuous-certification.fr.md) | Restored draft; comment period paused |
| 0004 | [Supervision of real exchanges](./0004-supervision-of-real-exchanges.md) · [FR](./0004-supervision-of-real-exchanges.fr.md) | Restored draft; comment period paused |
| 0005 | [Reserved test set](./0005-reserved-test-set.md) · [FR](./0005-reserved-test-set.fr.md) | Restored draft; comment period paused |
| 0006 | Consortium governance | Not yet republished (kept in the project archive) |
| 0007 | Removal of self-declaration | Not yet republished (kept in the project archive) |
| 0008 | [Starting requirements of the CTF standard, version 0](./0008-standard-v0-starting-requirements.md) · [FR](./0008-standard-v0-starting-requirements.fr.md) | Draft |
| 0009 | [Languages and locales](./0009-languages-and-locales.md) · [FR](./0009-languages-and-locales.fr.md) | Draft |
| 0010 | [Evaluation protocol, version 0](./0010-evaluation-protocol-v0.md) · [FR](./0010-evaluation-protocol-v0.fr.md) | Draft |

## Terms used in the RFCs

From RFC 0008 onwards, the RFCs use one term per notion. French equivalents are given in brackets.

| Term | Meaning |
|---|---|
| **Standard** [norme] | The CTF standard: requirements, scenarios and evaluation protocol, published in numbered versions |
| **Requirement** [exigence] | A behaviour expected from an agent, stated so that it can be observed from the outside (R1, R2…) |
| **Critical / standard requirement** [exigence critique / standard] | A critical requirement tolerates no failure across repetitions; a standard requirement uses a failure-rate threshold |
| **Scenario** [scénario] | A test situation that probes one requirement: a specification independent of language, and one version per locale |
| **Locale** [locale] | A language and a country, such as `fr-FR` (RFC 0009) |
| **RFC** [RFC] | "Request for comments": a written proposal to change the standard, open to anyone's comments |
| **Fixed message** [message fixé] | A line of the simulated person written in advance and always sent as written; the other lines are improvised |
| **Simulated client** [client simulé] | The language model that plays the person talking to the agent during a test |
| **Evaluator** [évaluateur] | An AI judge or a person that decides, from the transcript, whether a requirement was met, citing the transcript verbatim |
| **Reference agents** [agents de référence] | Test agents built on purpose: one meant to meet the requirements, one with deliberate, documented flaws. Used to check that a scenario detects what it should |
| **Holdout set** [jeu témoin] | Spare scenarios, kept aside while an agent is being improved, to check that it has not simply been tuned to pass the known ones |
| **Reserved test set** [jeu de tests réservé] | Scenarios that are not published at all (RFC 0005) |
| **`not_observed`** [non observé] | The outcome when the test could not observe the behaviour (for example, the stimulus was not delivered). It never counts as a pass |

## Note on RFCs 0001 to 0005

RFCs 0001 to 0005 and the template come, unchanged, from an earlier version of this repository (9 November 2026). Some of their links point to documents that have since been removed (methodology, governance, explainer); those documents will be rewritten. Until then:

- the public evidence log is replaced by the research register of the reference testing tool, ctf-test (not yet public), which will later publish its entries here;
- the comment periods stated in these RFCs (2026-11-09 to 2026-12-09) are paused; they will restart when each RFC is reviewed again.

These RFCs use the word *certification*. In version 0, the reference testing tool produces test reports only; certification by a consortium is a long-term hypothesis (see the status note in the [vision](../VISION.md)).
