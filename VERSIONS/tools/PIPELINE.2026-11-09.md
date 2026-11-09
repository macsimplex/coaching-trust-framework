# CTF Pipeline — Agent-by-Agent Reference

Each CTF helper agent is a standalone LLM call: load the system prompt, send the input, get the output. Your platform chains them in whatever way fits your architecture.

This document describes what each agent needs and what it produces, so you can wire them together.

---

## Overview

```
Designer ──→ Test Plan ──→ Tests ──→ Robustness ──→ Audit
   │              │           │            │             │
   ▼              ▼           ▼            ▼             ▼
 Design       Test plan    Transcripts  Robustness    Audit report
 document     (scenarios)  (per run)    report        + score + badge
```

Each arrow = one or more LLM calls. Each box = a document you store and pass forward.

---

## Agent 1 — CTF Designer

**Purpose:** Produce the design document for a coaching agent.

**System prompt:** `declinations/ctf-{fed}/tools/ctf-designer/system-prompt.md`

**How to run:** Interactive chat. The designer (human) dialogues with CTF Designer over multiple turns. The agent asks questions, the human answers, and the agent progressively produces the design.

**Input (user messages):**
- The human's coaching methodology, expertise, preferences
- Optionally: uploaded documents (books, frameworks, training materials)
- Optionally: custom KB files provided by the eggspert

**Output (assistant messages):**
The agent produces structured sections throughout the conversation. At the end, the complete design consists of:

| Section | Content |
|---|---|
| **Methodology** | How the agent coaches: phases, techniques, posture, question types |
| **Contract** | Behavioral commitments: what the agent will and won't do |
| **Pre-session info** | What the user sees before starting (public document) |
| **Privacy policy** | How data is handled (public document) |
| **Conformity declaration** | CTF conformance statement |

**How to extract:** The agent wraps each section in fenced code blocks with file paths. Your platform can extract them as files or concatenate them into a single document.

**What to pass forward:** The complete design (all sections) goes to Test Plan and Robustness.

---

## Agent 2 — CTF Test Plan

**Purpose:** Generate test scenarios that validate the agent against its design and CTF principles.

**System prompt:** `declinations/ctf-{fed}/tools/ctf-test-plan/system-prompt.md`

**How to run:** Single LLM call (not interactive).

**Input (user message):**
```
Here is the design document for the coaching agent:

[paste the complete design from Agent 1]
```

**Output (assistant message):**
A test plan with two types of scenarios:
- **Universal scenarios** (from CTF Core — see `tools/ctf-test-plan/test-categories.md`)
- **Method-specific scenarios** (generated from the design)

Each scenario includes: ID, name, description, simulated user profile, max interactions, success criteria.

**Format:** The agent produces a JSON structure. If your platform prefers plain text, instruct the agent accordingly in the user message ("produce the test plan in markdown format").

**What to pass forward:** The list of scenarios goes to Test Execution.

---

## Agent 3 — Test Execution (your platform's responsibility)

**Purpose:** Run each test scenario by simulating a conversation between the agent-under-test and a simulated user.

**This is NOT a CTF agent.** Your platform implements this. The process:

1. For each scenario in the test plan:
   a. Load the agent-under-test (its system prompt = the assembled design from Agent 1)
   b. Create a simulated user (another LLM call with a prompt like: "You are a person in this situation: [scenario description]. Engage with the coaching agent naturally.")
   c. Run the conversation for N turns (typically 3-8)
   d. Save the transcript
2. **Recommended:** Run each scenario 3 times independently. Verdict = majority vote (2/3 pass = pass).

**Output:** One transcript per run per scenario. Plain text conversation log.

**What to pass forward:** All transcripts go to Robustness.

---

## Agent 4 — CTF Robustness

**Purpose:** Analyze test transcripts for behavioral robustness.

**System prompt:** `declinations/ctf-{fed}/tools/ctf-robustness/system-prompt.md`

**How to run:** Single LLM call.

**Input (user message):**
```
Here is the design document:

[paste design]

Here are the test transcripts:

[paste all transcripts]

Here is the test plan with statistical verdicts:

[paste scenario verdicts: which passed, which failed, across how many runs]
```

**Output (assistant message):**
A robustness report in markdown containing:
1. Executive summary
2. Behavioral profile on 5 axes (see `tools/ctf-robustness/evaluation-axes.md`)
3. Per-scenario analysis with severity (OK / Minor / Critical)
4. Conclusion

**What to pass forward:** The robustness report goes to Audit.

---

## Agent 5 — CTF Audit

**Purpose:** Produce a formal conformance verdict.

**System prompt:** `declinations/ctf-{fed}/tools/ctf-audit/system-prompt.md`

**How to run:** Single LLM call.

**Input (user message):**
```
Here is the complete dossier:

Design document:
[paste design]

Test plan:
[paste test plan with verdicts]

Robustness report:
[paste robustness report]
```

**Output (assistant message):**
An audit report in markdown containing:
1. Conformance assessment per CTF principle
2. Score (0-100)
3. Badge: Gold (>= 90) / Silver (>= 75) / Bronze (>= 60) / Red Flag (< 60)
4. Improvement recommendations with estimated score impact

**Decision rule:** Red Flag blocks publication. Bronze and above allow publication.

---

## Summary of data flow

| Step | Agent | Input | Output | LLM calls |
|---|---|---|---|---|
| 1 | CTF Designer | Human dialogue | Design document | Multi-turn chat |
| 2 | CTF Test Plan | Design document | Test scenarios | 1 call |
| 3 | (Your platform) | Scenarios + agent | Transcripts | N scenarios × M runs |
| 4 | CTF Robustness | Design + transcripts + verdicts | Robustness report | 1 call |
| 5 | CTF Audit | Design + plan + robustness | Audit report + score + badge | 1 call |

## What you need

- Access to an LLM API (any provider — the prompts are model-agnostic)
- The system prompts from the declination you chose
- A way to run multi-turn chat (for Designer) and single calls (for the rest)
- A way to store and pass documents between steps

That's it. No dependency on EGG or any specific platform.
