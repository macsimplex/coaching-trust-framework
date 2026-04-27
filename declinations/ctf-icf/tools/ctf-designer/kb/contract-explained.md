# KB — The CONTRACT.md explained
## CTF-Design — Knowledge Base

CTF Version: 1.0

---

> This file explains each requirement in CONTRACT.md — why it exists, what it must produce,
> and how to assess whether it is satisfied.
> It is used by CTF-Design to guide the designer of a Core method.

---

## Requirement 1 — Welcome phase

**Why:** the CTF layers handle consent and the generic intention agreement. But each method has its own way of exploring what brings the person — their reason for coming, their current state, their intention. This exploration is specific to the method.

**What the method must define:**
- When the welcome phase occurs (after CTF consent, before working on content)
- What questions or behaviors comprise it
- Its completion markers: how do we know the welcome is done and we can move forward?

**Examples of valid markers:**
- The person has named what brought them
- The session intention has been formulated
- The engagement profile has been identified (if the method uses one)

**Insufficiency signal:** "the welcome is done when the atmosphere is good" is not an observable marker.

---

## Requirement 2 — Session structure

**Why:** for an agent to progress coherently, it must know where it is, where it is going, and when it can move forward. Without a defined structure, it improvises — and improvisation in a clinical or emotional context is a compliance risk.

**What the method must define:**
- The phases or steps that comprise a session
- The completion markers for each phase — observable and precise
- The transition protocol: how agreement is requested, in what form
- The conditions for returning to a previous phase and how to name it

**Examples of valid markers (observable):**
- "The person has stated their goal in measurable and time-bound terms"
- "At least three distinct options have been named"
- "The person has explicitly chosen one option among those identified"
- "The person answered yes to the transition question"

**Insufficiency signals:**
- "When the exploration is sufficient" → too vague, not testable
- "When the client feels ready" → interpretation, not observation
- "When the session energy is good" → not measurable

**What the Core does not define:**
- The format of the transition agreement (handled by KB-B §B.3.3)
- The stance during transitions (handled by KB-C)

---

## Requirement 3 — Closure protocol

**Why:** KB-D defines the CTF closure (satisfaction question, human coach reminder). But before that closure, the method has its own closing moment — summary, commitment, synthesis. This moment must be defined to avoid overlap with the CTF closure.

**What the method must define:**
- What constitutes the end of the method's process (e.g., commitment made, synthesis gathered)
- The formulation for final validation of the commitment
- What signal the method closure produces so the CTF closure can follow

**Examples of valid completion signals:**
- "A concrete, dated, and motivated commitment has been formalized by the person"
- "A 3-point summary has been validated by the person"
- "The person has confirmed that they are taking away [specific element]"

**Insufficiency signals:**
- "When the session reaches its goal" → circular
- "When the coach considers it is done" → there is no human coach, it is the agent

**What the Core does not define:**
- The 0-10 satisfaction question (KB-D)
- The human coach reminder (KB-D + Configuration)

---

## Requirement 4 — Session context

**Why:** an agent without active context memory produces incoherent sessions — it asks questions already asked, forgets what was said, loses the thread. Session context is what guarantees the internal continuity of a session.

**What the method must define:**
- The context elements it maintains (e.g., formulated intention, goal, reality explored, options identified, commitment made)
- The rules for using these elements (when to reference them, how to update them if new signals appear)
- What is retained between sessions (if the platform supports it)

**Insufficiency signal:** "the agent remembers the session" is not sufficient. The list of elements must be explicit.

**Valid example (GROW method):**
| Element | Phase of origin | Update rule |
|---|---|---|
| `goal` (formulated goal) | Goal | Revisable if Reality reveals a contradiction |
| `reality_points` (list of reality elements explored) | Reality | Append-only |
| `options` (list of identified options) | Options | Append-only |
| `commitment` (commitment made) | Will | Unique — finalized at closure |

---

## Requirement 5 — CTF gates compatibility

**Why:** the CTF gates (continuous scope gate, unconditional obligations) apply to content, regardless of progress within the method. A method that would bypass these gates — even unintentionally — creates a safety risk.

**What the method must verify:**
- No phase of the method continues if the scope gate is active
- No formulation of the method bypasses the unconditional obligation of the crisis resource
- The method does not define a stance that contradicts KB-A, KB-B, or KB-C

**How to verify:**
- Read each phase of the method asking: "if a level 3 signal appears here, can the gate activate without friction?"
- Verify there is no formulation of the type "continue exploring under all circumstances"

**If a tension exists:** document it in the conformity statement. CTF-Audit will take it into account.

**Examples of tensions to resolve or document:**
- A method that would ask the agent to "stay on the goal even if the person expresses distress" → violates the scope gate. **Must be rephrased.**
- A method that prescribes direct feedback (e.g., "say what is wrong with their project") → risk of contradiction with the non-directive stance. **Must be adjusted as non-judgmental reformulation.**
- A method with its own lexicon ("the client's vibration") → OK as long as the observation remains testable. **Request objective markers.**

---

## Requirement 6 — Configuration variables

**Why:** Configuration variables are the only customizable elements of the service. The method must declare those it uses so that CTF-Config knows what to ask the integrator, and so that CTF-Audit can verify they are filled in.

**Standard available variables:**
- `NOM_AGENT` — agent name displayed to the person
- `NOM_METHODE` — method name (used in B.4.1)
- `URL_COACH_HUMAIN` — link to a coach directory
- `URL_CONFIDENTIALITE` — privacy policy
- `CONTACT_EDITEUR` — contact email
- `RESSOURCES_CRISE` — local crisis resources
- `PLATEFORME` and `LLM` — subprocessors (used in KB-F)
- `MILESTONE_INTERVAL` — periodic review frequency

**Specific variables:** if the method needs them, declare them explicitly in the conformity statement.

**Valid example:** a method focused on weekly cycles declares `MILESTONE_INTERVAL=7` and a specific variable `WEEK_REVIEW_QUESTIONS` containing the 3 weekly review questions.

**Insufficiency signal:** a method that uses implicit parameters without declaring them ("the coach defines their goals with the client") — if it is a parameter, it must be named and documented.

---

## Conformity statement — how to fill it in

```markdown
## Conformity statement

Method: [name]
Author: [name / organization]
Date: [date]
Referenced CTF version: 1.0

Requirements satisfied:
[x] 1. Welcome phase — see [file, section]
[x] 2. Session structure — see [file, section]
[x] 3. Closure protocol — see [file, section]
[x] 4. Session context — see [file, section]
[x] 5. CTF gates compatibility — see [file, section]
[x] 6. Configuration variables declared — [list]

Documented deviations: [yes / no — if yes, see Core/compliance/]
```

**A documented deviation is not a failure.** It is transmitted to CTF-Audit which evaluates it. An undocumented deviation is a non-conformity.
