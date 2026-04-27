# Source material — CTF-ICF declination

This directory holds the **raw source material** that informs the production of the CTF-ICF declination. It is not the declination itself: it is the pre-declination working material from which the structured declination will be derived.

## What belongs here

- Pre-existing CTF-ICF translation work from earlier iterations of the project (e.g. layer-by-layer behavioral knowledge bases mapped to ICF sections A–F).
- Notes, drafts, working files produced during the structured drafting phase.
- Examples of agent behaviors that illustrate ICF expectations.
- Any other material that informs the production of the declination but is not itself in the structured CTF format.

## What does NOT belong here

- The structured declination document itself (it will live in `../declination/` once produced).
- Verbatim large excerpts of the ICF normative document — the canonical source is the ICF document itself; we cite, we do not reproduce in bulk.
- Material under copyright that has not been authorized for redistribution.

## Migration note (April 2026)

The earlier CTF iteration (pre-migration) contained a `/layers/` directory with nine knowledge-base files mapped to ICF sections (KB-A-ethics, KB-B-agreements, KB-C-presence, KB-D-growth, KB-E-evaluation, KB-F-data, KB-safety, KB-supervision, entrypoint). That material is the natural starting point for this declination's source material and should be moved here as the first integration step after the migration.

The next phase — using **CTF Translator** ([`../../../tools/ctf-translator/`](../../../tools/ctf-translator/)) to produce a structured declination from this raw material — is documented in the parent [`README.md`](../README.md).
