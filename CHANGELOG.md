# Changelog

All notable changes to the Coaching Trust Framework are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to a semantic versioning approach adapted to a normative document. The full versioning rules are described in [`GOVERNANCE.md`](./GOVERNANCE.md), section 5.

## [Unreleased] — branch `refonte-porte-entree`

### Added
- `VISION.md` (English, authoritative) and `VISION.fr.md` (French): the new entry point of the project — observation, problem, need, CTF and its four building blocks (Frame, Test, Monitor, Guarantee), postulates, why the framework matters, open project
- Seven RFCs derived from the vision, each in English (authoritative) and French, open for comments until 2026-12-09 (evidence to be gathered): `0001` incognito testing, `0002` multi-model evaluation protocol, `0003` version-bound continuous certification, `0004` supervision of real exchanges, `0005` reserved test set, `0006` governance by an independent consortium, `0007` removal of self-declaration
- Mapping of helper agents and documents to the four building blocks in `README.md`, `tools/PIPELINE.md`, `EXPLAINER.md` and `EXPLAINER.fr.md`
- `VERSIONS/` folder keeping the previous version of every modified file (excluded from the website)

### Changed
- Homepage (`index.html`): now displays the vision (rendered from `VISION.md` / `VISION.fr.md`), followed only by links to the technical README and the Explainer; the former "What is CTF?", "Three principles", "Where to start", "Who's working on CTF" and "Get started" blocks and the intro videos are removed
- `README.md`: "In plain words" replaced by a summary of the vision (observation → problem → need → CTF) with a link to `VISION.md`
- `CONTRIBUTING.md`: invitation to comment on the seven RFCs
- Vision: "scores" replaced by "evaluation results", in line with CTF vocabulary
- CTF Converger placed outside the four building blocks, as serving the evolution of the norm
- `_config.yml`: `VERSIONS/` excluded from the website

### Removed
- magif.ai chat widget from the homepage

## [1.0.1] — 2026-04-27

### Added
- Bilingual landing page (EN/FR) with language switcher, intro videos, and Magif.ai chat widget
- Custom dark theme layout for all site pages (replaces Cayman theme)
- magif.ai recognized as founding partner across all documents
- CTF Converger analysis made mandatory for promotion RFCs (GOVERNANCE.md)
- Explicit constraint: declinations cannot weaken or remove core principles (federation-pathway.md)

### Changed
- CLAUDE.md: updated pending work with current architecture decisions
- ADOPTERS.md: magif.ai status updated from pending to founding partner
- CONTRIBUTORS.md: founding partner section added

### Removed
- HANDOFF.md (migration instructions, no longer needed)

## [1.0.0] — 2026-04

### Initial public release

This is the foundational release of CTF. It establishes the structure, the helper toolkit, the governance model, the validation methodology, and the founding principle that frames all subsequent evolutions.

**Core deliverables**
- Common core normative document, version 1.0 (deliberately minimal — see `document/ctf-v1.0.md`)
- Seven helper agents (specifications and READMEs):
  - CTF Translator
  - CTF Converger
  - CTF Designer
  - CTF Test Plan
  - CTF Robustness
  - CTF Config
  - CTF Audit
- Certification scheme:
  - Self-declaration (any platform, any version)
  - Federation pathway (federation-led declination)
  - Community pathway (community-led declination, validated by federation)
- Governance model:
  - Founder as initial caretaker (custodian)
  - Public RFC process
  - Multiple implementations rule for upstream promotions
  - Trajectory toward consultative council and scientific panel
- Validation infrastructure:
  - Methodology document
  - Standardized feedback template
  - Public evidence log

**Plain-language entry points**
- `EXPLAINER.md` (English) and `EXPLAINER.fr.md` (French) — full project explained for a mixed audience, with integrated glossary

**Founding principle**

> *The common good prevails over any organization, including any organization that might one day emerge to steward this standard.*

Inscribed at the head of the README and of GOVERNANCE.md, this principle frames every subsequent decision regarding the evolution of CTF. It is not amendable through the ordinary RFC process.
