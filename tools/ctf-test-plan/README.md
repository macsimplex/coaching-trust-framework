# CTF Test Plan

> *Produces a structured test plan for a candidate AI coaching agent, ready to be executed before deployment.*

---

## In plain words

A coaching agent that has been designed but not yet tested is, ethically, a hypothesis. Before exposing it to real users, the platform needs to verify that it actually behaves the way the design document says it should. Does it stay within the scope it claims to cover? Does it refuse the things it claims to refuse? Does it disclose the things it claims to disclose? Does it stay faithful to the methodology and the sources it claims to draw on?

Building a thorough test plan by hand from a design document is laborious. It also tends to miss things — humans, even careful ones, have blind spots about their own work. CTF Test Plan is the helper agent that turns a design document into a comprehensive test plan, organized by category, with explicit pass and fail criteria for each test.

The test plan it produces is detailed enough that someone (a human evaluator or an automated test runner) can actually execute the tests and produce pass/fail results. The plan is the bridge between **what the agent should do** (design intent) and **what the agent actually does** (operational behaviour). Without this bridge, conformance remains theoretical.

---

## Position in the CTF architecture

CTF Test Plan operates at the **validation phase** of the agent lifecycle, after CTF Designer and before CTF Robustness.

```
CTF Designer  →  Design document  →  CTF Test Plan  →  Test plan  →  (execution)  →  Test results  →  CTF Robustness  →  ...
```

The test plan produced by this agent is consumed both by humans (test engineers, QA, ethics officers) and by automated test runners.

## When to use CTF Test Plan

- After the **design document** has been produced and reviewed.
- Before any operational deployment of the agent.
- When the agent has undergone **substantive revisions** that warrant re-validation.
- Periodically, even for stable agents, as the underlying foundation models evolve.

## How it works (high-level)

The agent is sollicited with:

1. The **design document** produced by CTF Designer.
2. The **applicable CTF version** (common core or declination).

It produces a structured test plan covering at minimum:

- **Scope conformance tests** — does the agent stay within its declared scope?
- **Posture conformance tests** — does the agent maintain its declared register, and refuse anthropomorphic drift?
- **Methodological fidelity tests** — does the agent apply its methodological backbone correctly?
- **Refusal and escalation tests** — does the agent refuse and redirect correctly in the situations specified by the design document?
- **Transparency tests** — does the agent disclose what it is required to disclose, when required?
- **Source fidelity tests** — when the agent draws on a knowledge base, does it represent the source faithfully?
- **Failure-mode tests** — does the agent handle the anticipated failure modes correctly?
- **Logging and observability tests** — are the oversight hooks actually populated as required?

Each test is specified at a level that is **directly executable**, either by a human evaluator or by an automated harness, with explicit pass/fail criteria.

## What CTF Test Plan is not

- It is not a test runner. It produces the test plan, not the test execution. Execution requires either human evaluators or an automated harness.
- It is not adversarial. CTF Test Plan validates that the agent does what it claims to do under reasonable conditions. Adversarial testing is the role of CTF Robustness.
- It is not a one-time output. The test plan is a living artifact: it is regenerated when the design document changes, and re-run periodically.

## Outputs and artifacts

The agent produces a Markdown-formatted test plan with the following sections:

1. **Header** — agent name and version, design document reference, CTF version, date.
2. **Test categories** — organized as listed above.
3. **Individual test specifications** — each with: test ID, category, scenario, expected behaviour, pass criteria, fail criteria, severity (critical / major / minor).
4. **Coverage matrix** — mapping of tests to design decisions, ensuring no design decision is untested.
5. **Reviewer checklist** — final questions for the test engineering team before execution.

## Structure of this directory

- `README.md` — this file.
- `system-prompt.md` — the system prompt of the helper agent (to be added).
- `kb/` — the knowledge base files (to be added).

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0.
