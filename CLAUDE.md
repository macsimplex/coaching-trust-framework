# Briefing for Claude Code working on the CTF repository

*This file briefs Claude Code on the project context, principles, and conventions. It is not part of the public website (excluded in `_config.yml`).*

---

## What this project is, in 30 seconds

The **Coaching Trust Framework (CTF)** is an open framework for trustworthy AI coaching agents, published as a common good under CC BY-SA 4.0. It is **inductive** — a deliberately minimal common core grows over time by absorbing requirements observed to be common across federation-specific declinations (CTF-ICF, CTF-EMCC, ...). It is **examinable** — empirical evidence is a structural object, helper agents are sollicited and inspectable, supervision is tripartite. It is a **common good** — the founding principle inscribed at the head of every key document states that the common good prevails over any organization, including any organization that might one day steward CTF.

The founder and initial caretaker is **Maxime Bui** (<maxime@simplex.coach>). The repository is at <https://github.com/macsimplex/coaching-trust-framework>. The website is <https://coaching-trust-framework.org> (served from this repository via GitHub Pages, custom domain in `CNAME`).

## Relationship to the EGG project

CTF is technically independent of EGG (it can be adopted by any platform, governed by its own caretaker, evolve at its own pace), but it shares its philosophical lineage with the **EGG Constitution** authored by the same founder. Several principles from the Constitution are inherited by CTF, in particular:

- **Non-anthropomorphization of agents** (EGG Constitution, principle 16) — applies to *all* agents, both coaching and helper.
- **Non-substitution to humans** (EGG Constitution, principle 11) — coaching agents must escalate to humans when situations exceed their scope.
- **Sobriety, transparency, examinability** — the broader posture of EGG informs the CTF aesthetic.
- **Vocabulary discipline** — see below.

When in doubt about a normative question, the EGG Constitution v3.1 is a useful reference, but CTF as a published common good has its own integrity and is not formally subordinate to EGG. EGG is one (reference) implementer of CTF.

## Vocabulary discipline

CTF is careful with words. Some terms are constitutive, others are explicitly rejected.

**Use** — adopter, contributor, founder, caretaker (with *custodian* mentioned as alternate), helper agent (not *meta-agent*), proposal for change (with *RFC* mentioned), declination (with *adaptation* as alternate), common core, advisory circle (not *consultative council* externally), scientific panel, sollicited (not conversational), tripartite supervision, evidence log, multiple implementations rule.

**Avoid** — *meta-agent*, *agent persona / agent companion / AI buddy* (anthropomorphization), *user* when *adopter* or *practitioner* is more accurate, *marketplace* / *freelance* for the relationship between CTF and contributors, *score* / *rating* / *ranking* for evaluation of agents (CTF uses tripartite supervision instead), *plateforme* in the extractive sense.

When extending the framework, preserve this discipline. If new vocabulary is needed, prefer terms that are sober, descriptive, and not borrowed from extractive marketplaces or wellness apps.

## Repository conventions

### Markdown style
- One sentence per line is **not** required; standard prose paragraphs are fine.
- Bold is reserved for genuine emphasis or term introduction; do not bold-by-default.
- Lists are used when items are genuinely list-like (steps, enumerations, tables of options); avoid converting prose into bullet points for visual decoration.
- Headers follow the file's own logical structure; avoid SEO-style header stuffing.
- Internal links use relative paths (`./other-doc.md` or `../folder/file.md`). The `jekyll-relative-links` plugin rewrites them for the rendered site.
- French and English coexist: the EXPLAINER has both, the rest of the repository is English. The French EXPLAINER explicitly notes that in case of divergence, the English version is authoritative.

### File layout
- Root: human-facing entry points (README, EXPLAINER × 2, LICENSE, CHANGELOG, GOVERNANCE, CONTRIBUTING, ADOPTERS, CONTRIBUTORS, index.md, CNAME, _config.yml).
- `document/` — the canonical normative document.
- `tools/` — the seven helper agents, each in its own subdirectory.
- `declinations/` — per-federation adaptations.
- `certification-scheme/` — self-declaration, federation pathway, community pathway.
- `validation/` — methodology, feedback template, evidence log.
- `rfcs/` — proposal template and accepted proposals.

### What goes on the website vs. only in the repo
The site is served from the repo. By default, every `.md` file becomes a page on the rendered site. Exclusions are listed in `_config.yml` under `exclude:` — currently `CLAUDE.md`, `HANDOFF.md`, and standard build artifacts.

## Current work plan

The structural foundation is in place. The following steps are in progress:

1. **Write CTF Core normative content** (`document/ctf-v1.0.md`). Extract universal principles from EGG's working implementation: anonymization by construction, non-anthropomorphization, non-substitution, supervision tripartite, auditability, certification pipeline, metadata invisibility, solicited tool posture, principle hierarchy. Start minimal — only what applies to every trustworthy AI coaching agent regardless of federation.
2. **Extract core process from helper agents**. Separate the universal process (how to design, test, audit) from federation-specific content (what to check) in each agent prompt. Core process goes to `tools/ctf-*/system-prompt.md`.
3. **Build CTF Translator agent**. Input: CTF Core + federation source document. Output: complete declination with assembled tools (core process + federation-specific layers and criteria). This is the key automation.
4. **Generate CTF-ICF declination via CTF Translator**. Input: CTF Core + ICF AI Coaching Framework V1.01. Output: `declinations/ctf-icf/tools/` with ready-to-use agents. Validate against EGG's existing implementation.
5. **Populate `validation/evidence-log.md`** as adopters (EGG, magif.ai) send observations.
6. **First promotion RFC** once a second declination exists (multiple implementations rule — section 4 of `GOVERNANCE.md`).

## Architecture decisions (April 2026)

- **Tools are core in process, declination-specific in content.** The Designer, Test Plan, Robustness, Audit agents follow the same methodology regardless of federation. What changes is the KB/layers they inject (ICF requirements vs EMCC requirements vs others).
- **Declinations contain ready-to-use tools.** A platform adopting CTF-ICF goes to `declinations/ctf-icf/tools/` and gets complete agents (core process + ICF content assembled). No assembly required.
- **A declination cannot weaken or remove core principles.** It can only add, strengthen, or reformulate while preserving intent.
- **CTF Converger analysis is mandatory for promotion RFCs.** No requirement can be promoted to core without a formal cross-declination comparison.
- **EGG** is the reference implementer. **magif.ai** is a founding partner.

## How to handle ambiguity

If a question arises that has substantive consequences for the framework — wording of a principle, scope of a helper agent, content of the common core, status of a declination — **propose options to Maxime rather than deciding silently**. CTF's substance is shaped by deliberate human decisions; Claude Code is an excellent collaborator for execution and structuring, but the substantive calls are the founder's (or, eventually, the community's via RFC).

When the question is purely operational (file naming, structure, formatting, build configuration), exercise judgment in line with the conventions above and proceed.

## Quick reference: founding principle

> *The common good prevails over any organization, including any organization that might one day emerge to steward this standard.*

This principle is inscribed at the head of every key document. Any change that would weaken, qualify, or relativize it is a constitutional change requiring an RFC and a public deliberation.

## License obligations

CTF is published under **CC BY-SA 4.0**. When reproducing or adapting CTF text, attribute Maxime Bui as founder and license the derivative under the same terms. The license does **not** propagate to platforms that merely implement CTF in their own products — only to republications or modifications of the CTF text itself.

The full license text is in `LICENSE`. The license scope is documented in `README.md` ("License" section) and `EXPLAINER.md` (under *License (CC BY-SA 4.0)* in the glossary).
