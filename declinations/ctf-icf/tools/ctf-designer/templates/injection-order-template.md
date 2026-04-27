# Injection order — [NOM-AGENT]
## Platform integration guide

Agent: [NOM-AGENT]
Version: [VERSION]
Referenced CTF version: 1.0
Produced by: CTF-Design

---

> **To the integrator**
>
> This file lists in exact order the files to inject into the agent's context on your platform.
> Inject them in this order — the order is functional, not arbitrary.
> Do not modify the `layers/` files — they are invariant.
> The `config/` files must be filled in before deployment (see `config/editorial.md`).

---

## Injection order

### 1. ICF compliance layers (layers/)

These files define the agent's ethical behavior, stance, safety, and data handling. They are provided by CTF and must not be modified.

| Order | File | Role |
|-------|------|------|
| 1 | `layers/KB-A-ethics.md` | AI identification · limitations · consent · bias |
| 2 | `layers/KB-B-agreements.md` | Agreements · trust · relational safety |
| 3 | `layers/KB-C-presence.md` | Stance · listening · questions · trajectory |
| 4 | `layers/KB-D-growth.md` | Commitment · follow-up · review · closure |
| 5 | `layers/KB-E-evaluation.md` | Satisfaction · effectiveness · documentation |
| 6 | `layers/KB-F-data.md` | Data · GDPR · user rights |
| 7 | `layers/KB-safety.md` | Safety · gates · unconditional obligations |
| 8 | `layers/KB-supervision.md` | Supervision mode · self-reflectivity |

### 2. Coaching methodology (methodology/)

These files define the coaching logic specific to this agent.

| Order | File | Role |
|-------|------|------|
| 9 | `methodology/[WELCOME-FILE]` | Welcome phase |
| 10 | `methodology/[PROCESS-FILE]` | Phases and transitions |
| 11 | `methodology/[CLOSURE-FILE]` | Method closure protocol |
| 12 | `methodology/[CONTEXT-FILE]` | Session context elements |

### 3. Configuration (config/)

These files provide deployment variables — publisher, platform, resources.

| Order | File | Role |
|-------|------|------|
| 13 | `config/editorial.md` | Publisher · contact · URLs |
| 14 | `config/platform.md` | Platform · LLM · history |
| 15 | `config/localization.md` | Language · crisis resources |

### 4. Entry point (last — mandatory)

| Order | File | Role |
|-------|------|------|
| 16 | `layers/entrypoint.md` | CTF orchestration + method slot invocation |

---

## Before deploying

- [ ] All `config/` files are filled in (no remaining `[...]` placeholder)
- [ ] `config/localization.md` — `RESSOURCES_CRISE` matches the deployment country
- [ ] `docs/pre-session.md` is accessible from the user interface
- [ ] `docs/privacy-policy.md` is accessible from the user interface
- [ ] The injection order above is respected on the platform

---

## Public documents to publish

These files are in `docs/` — they must be accessible to users:

| File | Where to publish |
|------|-----------------|
| `docs/pre-session.md` | Landing page or onboarding modal |
| `docs/privacy-policy.md` | Permanent link from the interface |
| `docs/agent-presentation.md` | Service presentation page |
