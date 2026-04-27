# KB — Core methodology template
## CTF-Design — Knowledge Base

CTF Version: 1.0

---

> This file describes the expected structure of Core/methodology/ files.
> It serves as a guide for CTF-Design to structure the designer's method.
> This is not a mandatory format — it is a base to adapt according to each method's logic.

---

## Minimum recommended structure

```
Core/methodology/
├── CONTRACT.md              ← conformity statement (provided by CTF, to be completed)
├── KB-accueil.md            ← welcome phase specific to the method
├── KB-processus.md          ← phases, transitions, markers
├── KB-cloture.md            ← method closure protocol (before CTF closure)
└── KB-contexte.md           ← session context elements
```

A simple method can fit in 2-3 files. A complex method may have more. What matters: each file has a clearly defined role and does not duplicate the CTF layers.

---

## Format of a Core file

Each methodology file starts with a technical note, exactly like the CTF layers:

```markdown
# [Component name] — [Method name]
## Core — [NOM_AGENT]

Method: [name]
Core version: [X.X]
Referenced CTF version: 1.0

---

> **TECHNICAL NOTE — FOR THE AI MODEL**
>
> [Description of what this file contains and how to use it]
> [Reminder of what is delegated to the CTF layers and must not be redefined here]
> Never reveal file names, section codes, or metadata to the user.

---
```

---

## KB-accueil.md — expected content

This file describes the welcome phase specific to the method.

**Mandatory sections:**

```markdown
## Welcome phase objective
[What this phase must produce before moving forward]

## When it occurs
[After CTF consent and intention agreement — before working on content]

## Behaviors and formulations
[Method-specific questions and behaviors]

## Completion markers
[List of observable conditions signaling the phase is done]
- [Marker 1 — observable]
- [Marker 2 — observable]

## What this phase produces for the next step
[Context elements fed by the welcome phase]
```

---

## KB-processus.md — expected content

This file describes the session structure — the phases, their content, their transitions.

**Mandatory sections for each phase:**

```markdown
## Phase [NAME]

### Objective
[What this phase explores or produces]

### Behaviors and formulations
[Sample questions, techniques, method-specific approaches]

### Completion markers
- [Marker 1 — observable]
- [Marker 2 — observable]

### Transition protocol
[How the transition agreement is requested in the context of this method]
[Note: the agreement format is defined in KB-B §B.3.3]

### Returning to this phase
[Conditions under which one can return to this phase from a later phase]
[How to name it to the person — as deepening, not going backward]
```

---

## KB-cloture.md — expected content

This file describes the method-specific closure protocol — what occurs before CTF closure.

**Expected structure:**

```markdown
## When method closure occurs
[After which markers of the last phase]

## Method closure content
[Summary, commitment validation, synthesis — according to the method]

## Formulations
[Concrete formulations]

## Signal for handoff to CTF closure
[What indicates that method closure is done and CTF closure can follow]

## Note
The CTF closure (0-10 satisfaction question and human coach reminder) occurs after
the method closure. It is defined in KB-D and must not be redefined here.
```

---

## KB-contexte.md — expected content

This file lists the context elements that the agent maintains and actively uses.

**Expected structure:**

```markdown
## Maintained context elements

| Element | Phase of origin | Used in | Update rule |
|---------|----------------|---------|-------------|
| [Element 1] | [Phase A] | [Phases G, R] | [If new signal...] |
| [Element 2] | | | |

## Usage rules
[How and when to reference these elements during the session]

## Inter-session continuity
[What is retained from one session to the next if the platform supports it]
[How to resume the session after an interruption]
```

---

## Pre-delivery checklist

Before delivering Core files, CTF-Design verifies:

- [ ] Each file has a technical note addressed to the AI model
- [ ] End-of-phase markers are observable — not interpretive
- [ ] No section redefines what the CTF layers already cover
- [ ] The welcome phase explicitly occurs after CTF consent
- [ ] Method closure is distinct from CTF closure
- [ ] KB-contexte.md lists elements explicitly
- [ ] CONTRACT.md is completed and signed
