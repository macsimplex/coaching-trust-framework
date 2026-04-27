# CTF-ICF — declination of CTF for the International Coaching Federation

**Status:** working-draft (see [`status.md`](./status.md))
**Source federation:** International Coaching Federation (ICF)
**Reference document:** ICF AI Coaching Framework and Standards, V1.01 (2024)
**Pathway:** community-led (drafted by community members; subject to ICF validation before promotion to *endorsed*)

---

## Plain-language summary

A *declination* is an adapted version of CTF that integrates the specific requirements of a professional federation. CTF-ICF is the declination that combines CTF's generic common core with the operational expectations of the ICF AI Coaching Framework and Standards.

This declination is currently a **working draft**. It has been initiated by the CTF community as a starting point that the International Coaching Federation can review, adjust, and validate. Until ICF has reviewed and approved this declination, its status remains *working-draft*, and platforms implementing it should clearly state this provisional status in their conformance declarations.

For the full taxonomy of declination statuses, see [`../README.md`](../README.md).

## Repository layout for this declination

```
ctf-icf/
├── README.md                 ← this document
├── status.md                 ← current status and history
└── source-material/          ← raw, pre-declination work
    └── README.md             ← what belongs here
```

A future, fully-formed declination will additionally contain a `declination/` folder with the structured CTF-style normative document (one file per CTF section, mapped onto ICF's sections A–F).

## How this declination is being produced

The declination is being drafted through the community pathway documented in [`../../certification-scheme/community-pathway.md`](../../certification-scheme/community-pathway.md).

The work proceeds in three phases:

1. **Source material assembly** — collect all relevant ICF normative content, prior translation work, and operational examples in `source-material/`. This is where pre-existing layer-by-layer material from the founder's earlier CTF iteration lives, pending integration into the structured declination format.
2. **Structured drafting** — using the [CTF Translator](../../tools/ctf-translator/) helper agent, produce a structured CTF-style declination from the source material. Each CTF section is mapped onto the corresponding ICF sections, with explicit citation.
3. **Federation validation** — once the structured draft is mature, submit to ICF for review. ICF either endorses, asks for revisions, or co-authors a federation-led version.

## Provisional adoption

A platform may implement this declination at *working-draft* status if it explicitly states the status in its self-declaration. Working-draft adoption is a contribution to the maturation of the declination — feedback from real implementations is part of how the draft becomes ready for federation review.

Once ICF has reviewed and validated, the status moves to *endorsed* (ICF approves the community draft as-is) or *co-maintained* (ICF and the community jointly maintain) or *federation-authored* (ICF takes over and co-authors a definitive version). Each of these transitions is documented in `status.md` and announced in the project changelog.

## License

This declination is published under CC BY-SA 4.0, like the rest of the CTF repository. The underlying ICF normative material remains the property of the International Coaching Federation and is referenced rather than reproduced. Where a CTF-ICF requirement directly maps onto an ICF clause, the citation is explicit and the reproduction stays within the limits of fair use; the canonical ICF document remains the authoritative source.

## Contact

Questions about this declination can be sent to the CTF caretaker at <maxime@simplex.coach>.

For ICF-side questions about the framework being declined, please refer directly to the International Coaching Federation.
