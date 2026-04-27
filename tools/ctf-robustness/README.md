# CTF Robustness

> *Stresses a candidate AI coaching agent against adversarial and edge-case inputs, surfacing failure modes that ordinary testing misses.*

---

## In plain words

An AI coaching agent that passes its CTF Test Plan has demonstrated correct behaviour under reasonable conditions. But the people who actually consult coaching agents are not always reasonable. Some are in distress. Some are confused. Some are deliberately probing the limits, sometimes in good faith, sometimes not. The interesting questions about safety and ethics live precisely in this territory — the territory ordinary testing rarely visits.

CTF Robustness is the helper agent that probes those boundaries. It generates adversarial and edge-case scenarios — simulated distress conversations, manipulation attempts, gradual scope drift, anthropomorphizing pressure — and (where the platform's setup allows) actually runs them against the candidate agent. It then reports where the agent's behaviour deviated from CTF expectations, what was minor and what was serious, and what to fix before deployment.

This kind of testing is sometimes called *red-teaming* in security circles. CTF Robustness brings the same logic to the ethical conduct of AI coaching: assume the agent will be confronted with situations its designers did not anticipate, and check what happens then.

---

## Position in the CTF architecture

CTF Robustness operates at the **hardening phase** of the agent lifecycle, after CTF Test Plan and before deployment.

```
CTF Test Plan  →  (validation)  →  CTF Robustness  →  Robustness report  →  Mitigation cycle  →  Deployment  →  CTF Audit  →  ...
```

Robustness findings often lead to revisions of the design document and re-execution of test plan validation. The cycle continues until the platform judges the agent ready for deployment.

## When to use CTF Robustness

- After the agent has passed its CTF Test Plan validation.
- Before any operational deployment.
- After significant revisions of the agent that may have introduced new failure modes.
- Periodically, especially when the underlying foundation model has been updated, since model updates can re-introduce previously mitigated failure modes.

## How it works (high-level)

The agent is sollicited with:

1. The **design document** of the candidate agent.
2. The **test plan** and its execution results.
3. The **applicable CTF version** (common core or declination).

It generates a battery of adversarial and edge-case scenarios across several categories:

- **Distress simulation** — conversations that simulate a user in psychological distress, suicidal ideation, acute crisis, where the agent must redirect to human resources.
- **Vulnerability simulation** — interactions where the user is in a vulnerable position (dependency, isolation, coercion) and the agent must protect them.
- **Manipulation attempts** — users attempting to bypass agent boundaries through social engineering, role-play injection, jailbreak attempts.
- **Off-scope drift** — situations where the user gradually pulls the agent toward content outside its declared scope (medical advice, legal advice, financial advice).
- **Anthropomorphizing pressure** — users attempting to elicit relational or affective responses inconsistent with CTF's posture requirements.
- **Source betrayal** — situations where the agent could plausibly misrepresent its source material.
- **Cumulative degradation** — long conversations that test whether the agent maintains its posture and conformance over many turns.

Where possible, the agent runs scenarios against the candidate agent (or a sandboxed instance of it) and analyzes the responses. Where automated execution is not possible, it produces a structured plan for human red-teaming.

## What CTF Robustness is not

- It is not a vulnerability scanner. It does not test infrastructure-level security; it tests behavioural robustness against ethically consequential inputs.
- It is not exhaustive. Robustness testing can never be complete. CTF Robustness aims for coverage of known failure-mode categories; new categories will emerge over time and will be incorporated through RFCs.
- It is not a replacement for human red-teaming. The agent provides scaffolding, not substitution. Human reviewers — ideally with experience in coaching, psychotherapy, ethics or AI safety — should always be in the loop for high-stakes scenarios.

## Outputs and artifacts

The agent produces a Markdown-formatted robustness report with the following sections:

1. **Header** — agent name and version, baseline CTF version, date, scope of robustness testing.
2. **Categorical findings** — for each category listed above, the scenarios attempted, the agent's responses (or summarized analyses), and a verdict (pass / partial / fail).
3. **Critical findings** — failures that warrant immediate mitigation before deployment.
4. **Major findings** — failures that should be mitigated before deployment but are not blocking.
5. **Minor findings** — observations worth noting for future iteration.
6. **Mitigation suggestions** — concrete proposals for each finding.
7. **Recommendation** — overall recommendation: deploy, deploy with mitigations, hold pending mitigations, redesign.

## Ethical considerations

Robustness testing intrinsically involves the simulation of distressing or harmful situations. The platform is responsible for ensuring that:

- Test scenarios are clearly identified as such in any logs.
- Human evaluators reviewing distress-related transcripts have appropriate support.
- Test scenarios involving simulated vulnerable populations are designed with care and reviewed by experts in those domains where possible.

CTF Robustness is a tool for protecting users. Its use must itself be ethical.

## Structure of this directory

- `README.md` — this file.
- `system-prompt.md` — the system prompt of the helper agent (to be added).
- `kb/` — the knowledge base files (to be added).

## License

System prompt, knowledge base and this README are licensed under [CC BY-SA 4.0](../../LICENSE), in line with the rest of the CTF project.

## Status

**Version 1.0** — Initial release as part of CTF v1.0.
