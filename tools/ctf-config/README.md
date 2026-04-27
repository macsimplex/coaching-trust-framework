# CTF Config

*A helper agent that assists the integrator in producing the deployment configuration of a CTF-conformant coaching agent on a target platform.*

🆕 **New to CTF?** Start with the [EXPLAINER](../../EXPLAINER.md) (English) or the [EXPLAINER in French](../../EXPLAINER.fr.md). This README assumes you already know what a helper agent is and where it fits in the CTF lifecycle.

---

## In plain words

When a designer has finished using **CTF Designer**, they have a *portable design* — a structured description of what the coaching agent should do, independently of where it runs. That description does not yet say which language model will execute it, what language users will speak, what disclosures the local jurisdiction requires, what format the platform's audit pipeline expects, or how the agent integrates into the platform's UI.

CTF Config is the helper agent that fills in those *deployment-time* answers. It interviews the integrator (the person responsible for putting the agent into production on a specific platform), records each choice in a structured way, and produces the configuration package that, combined with the portable design, forms a fully deployable agent.

Designer answers the question *what should this agent do?* — Config answers the question *how should this design be deployed here?* The two together describe one running agent.

## Position in CTF architecture

CTF Config is the **fifth operational helper agent**, alongside Designer, Test Plan, Robustness and Audit. Like the other operational agents, it works at the level of individual coaching agents built by platforms — not at the level of CTF itself.

```
Portable design (from Designer)  +  Configuration package (from Config)  =  Deployable agent
```

A direct consequence of separating Designer from Config: **the same portable design can be deployed on multiple platforms** by re-running Config for each platform, without re-running Designer. This portability is a deliberate property of CTF — coaching expertise should not be locked into a single deployment context.

## When to use CTF Config

- After the portable design has been produced by Designer and validated through Test Plan and Robustness.
- When the design is being deployed on a specific platform for the first time.
- When the same design is being re-deployed on a *different* platform (run Config again, keep Designer's output unchanged).
- When a deployment-level parameter changes (new region, new language, new foundation model) and the configuration must be updated without revisiting the design.

## How it works

CTF Config conducts a structured interview with the integrator and produces a configuration package. The interview covers, at minimum:

- **Foundation model** — which LLM the agent will run on, with awareness of the constraints documented for that model (token limits, known biases, support for system prompts, etc.).
- **Language(s)** — the language(s) the agent will operate in, including any locale-specific adjustments to the design.
- **Regional legal disclosures** — the mentions required by the jurisdiction(s) of deployment (data protection notice, AI disclosure, consumer rights, etc.).
- **Audit pipeline** — the format and destination expected by the platform's audit infrastructure (so that CTF Audit can later consume the transcripts).
- **UI integration points** — how the agent is invoked in the platform's interface, what context the platform passes to it at invocation, what the platform expects in return.
- **Operational parameters** — rate limits, cost ceilings, fallback behaviors, observability hooks.

Each answer is recorded in a structured way so that a later review can verify which deployment choice was made, why, and on which date.

## Outputs

Each invocation of CTF Config produces a structured configuration package that is intended to live alongside the design package — typically in a `config/` subdirectory of the agent's home folder:

```
/agent-package/
├── design/                          ← from CTF Designer (portable)
├── compliance/
│   ├── test-plan.md                 ← from CTF Test Plan
│   ├── robustness-report.md         ← from CTF Robustness
│   └── audit-report.md              ← from CTF Audit (over time)
└── config/                          ← from CTF Config
    ├── platform.md
    ├── localization.md
    ├── legal-disclosures.md
    └── operational-parameters.md
```

The exact structure of `config/` is documented in the helper agent's knowledge base (to be added in a subsequent release).

## What CTF Config is not

- It is **not a deployment automation tool**. CTF Config produces the *description* of the configuration; pushing files to the platform is a separate concern (see *future evolutions* below).
- It is **not a substitute for legal review**. The legal disclosures it asks about must still be validated by counsel competent in the jurisdiction(s) of deployment.
- It is **not a security audit tool**. Operational parameters around access control, secret management, and key rotation are platform-engineering concerns that are out of scope for Config.

## Symmetry with the other operational agents

Like Designer, Test Plan, Robustness and Audit, Config is a sollicited helper agent (principle 16 of the EGG Constitution applies — see [`EXPLAINER.md`](../../EXPLAINER.md)). The integrator invokes it with a context (the portable design + the platform information), and Config responds with a structured output. There is no relational dimension; Config does not present itself as a person.

## Future evolutions

The configuration package produced by Config is the natural input for two helper agents that may be added in future versions of CTF:

- **CTF Deploy** — would consume the configuration package and push the deployable agent onto the target platform via API.
- **CTF Monitor** — would consume the audit pipeline configuration and provide continuous post-deployment supervision.

These evolutions are not part of v1.0. They are mentioned here because Config's output is structured to be machine-readable, so that they can be added later without breaking the design–config separation.

## Files in this directory

- `README.md` — this document.
- `system-prompt.md` — the system prompt of the helper agent (to be added).
- `kb/` — the knowledge base files (to be added).

## Model agnosticism

The system prompt and knowledge base are model-agnostic in their normative content. Any sufficiently capable foundation model that supports system prompts and structured output can run Config. The choice of foundation model for running Config itself is a deployment-level choice that is *not* governed by the agent it is configuring — Config is part of the toolkit, not part of the coaching agent.

## License

This helper agent specification is published under the CC BY-SA 4.0 license, like the rest of the CTF repository.

## Status

v1.0 — initial release. System prompt and KB to be added in a subsequent release.
