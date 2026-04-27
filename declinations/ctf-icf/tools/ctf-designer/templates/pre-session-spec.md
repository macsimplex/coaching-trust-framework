# Specification — Pre-session document
## CTF — What the pre-session document must contain

ICF Requirement: E.11.2
CTF Version: 1.0

---

> This file is provided by CTF. It defines the content requirements for the pre-session document that the agent designer must produce and deliver in `Core/`.
> The pre-session document itself is specific to each agent — it depends on the method and the configuration.

---

## Principle

The pre-session document is a plain-language document, accessible to the user before or at the beginning of use. It is not a legal contract — it is an honest and understandable presentation of the service.

**Target audience:** any user, without technical or coaching prerequisites.
**Format:** flexible — web page, onboarding modal, PDF, text displayed before the first exchange.
**Length:** sufficient to cover the points below, without being exhaustive. Prioritize clarity over completeness.

---

## Mandatory content

### 1. Nature of the service

- That this agent is an artificial intelligence — not a human coach, not a therapist.
- What it does: describe the process in one or two plain-language sentences.
- What it does not do: medical, legal, financial, or therapeutic advice.

### 2. The method used

- Method name and short plain-language description.
- What the user can concretely expect in a session.

### 3. Service limitations

- The agent may contain inaccuracies.
- It has no emotional memory — it accesses text history but does not "feel".
- It does not replace human follow-up for situations that require it.

### 4. Data and privacy

- What data is collected and processed.
- Who has access (platform, LLM, publisher).
- How the user can exercise their rights (access, erasure).
- Link to the full privacy policy.

### 5. Consent and right to withdraw

- Use is voluntary.
- The user can stop at any time, without justification.
- How to stop or unsubscribe.

### 6. Alternative resources

- Link to a directory of ICF-certified human coaches ([URL_COACH_HUMAIN]).
- Local crisis resources ([RESSOURCES_CRISE]) — to include if the service is likely to be used in vulnerability contexts.

### 7. Publisher contact

- Name of the publisher or organization.
- Contact email for any questions.

---

## Recommended content (not mandatory)

- FAQ on usage (how to start, what to do if the session goes wrong).
- Examples of what can be explored with this agent.
- Details on history persistence and how to erase it.

---

## What this document is not

- A legal disclaimer — the tone must remain human and understandable.
- A summary of the privacy policy — it can link to it, but not reproduce it.
- A technical user manual.

---

## Validation checklist

Before delivering the document in `Core/`, verify:

- [ ] Written in plain language — understandable without knowledge of coaching or AI
- [ ] Explicitly mentions that the agent is an AI
- [ ] Describes the method in concrete terms
- [ ] Mentions service limitations
- [ ] Contains information about data and rights
- [ ] Contains the right to withdraw
- [ ] Contains the link to the privacy policy
- [ ] Contains the publisher contact
- [ ] Contains at least one alternative resource (human coach or crisis)
- [ ] Accessible from the interface throughout the duration of use
