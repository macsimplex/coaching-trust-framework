# Integrating CTF into your platform

*This guide describes how a platform can adopt the Coaching Trust Framework. It is based on the experience of the EGG reference implementation (April 2026) — the first platform to complete the full integration.*

---

## Overview

Integrating CTF means your platform uses CTF's helper agents and behavioral layers to design, test, harden, and audit AI coaching agents. The integration has two main components:

1. **The quality pipeline** — your platform runs the CTF helper agents (Designer, Test Plan, Robustness, Audit) as part of your agent creation workflow.
2. **The behavioral layers** — your coaching agents' system prompts include CTF layers that encode the ethical and operational requirements.

## Prerequisites

- A git repository for your platform's code.
- Access to an LLM API (the CTF agents and layers are model-agnostic).
- A coaching agent you want to certify (or the intent to create one).

## Step 1 — Choose your declination

CTF has a common core (universal principles) and federation-specific declinations. Choose the one that matches your coaching tradition:

| Declination | Status | Use if |
|---|---|---|
| **CTF Core only** | Available | No federation-specific requirements; you want the structural minimum |
| **CTF-ICF** | Available (working draft) | Your agents follow ICF standards |
| **CTF-EMCC** | Anticipated | Your agents follow EMCC standards |
| **Custom** | Use CTF Translator | Your federation is not yet covered |

If no declination exists for your federation, you can use CTF Translator to create one from your federation's normative documents (see `tools/ctf-translator/`).

## Step 2 — Add CTF to your project

### Option A — Git submodule (recommended)

```bash
git submodule add https://github.com/macsimplex/coaching-trust-framework.git ctf
```

Your project now has a `ctf/` directory with the full framework. Update it anytime with:

```bash
cd ctf && git pull origin main && cd ..
git add ctf && git commit -m "Update CTF submodule"
```

### Option B — Copy files

Copy the declination directory you need into your project:

```bash
cp -r ctf/declinations/ctf-icf/ your-project/ctf-icf/
```

Simpler but you manage updates manually.

## Step 3 — Integrate the pipeline

Your platform needs to run 4 helper agents in sequence. Each agent receives inputs and produces outputs:

### 3.1 — CTF Designer

**When:** Agent creation/editing.
**Input:** Designer's expertise (via dialogue), optionally custom documents.
**Prompt:** `declinations/ctf-{your-declination}/tools/ctf-designer/system-prompt.md`
**KB files:** `declinations/ctf-{your-declination}/tools/ctf-designer/kb/`
**Output:** Design package (methodology files, contract, public documents).

**Implementation:** Run the Designer prompt as the system prompt of a chat-based LLM interaction. The designer (your user) chats with the agent to produce the design.

### 3.2 — CTF Test Plan

**When:** Before first deployment, and after design changes.
**Input:** Design package from Step 3.1.
**Prompt:** `declinations/ctf-{your-declination}/tools/ctf-test-plan/system-prompt.md`
**Output:** Test plan (JSON with test cases).

**Implementation:** Single LLM call. Feed the design files as context; the agent produces a test plan.

### 3.3 — Test Execution + CTF Robustness

**When:** Before deployment.
**Input:** Test plan + design package.
**Process:**
1. For each test scenario, simulate a conversation between the agent-under-test and a simulated user (another LLM call with a user-simulation prompt).
2. Run each scenario multiple times (recommended: 3 runs, majority vote — see `tools/ctf-config/best-practices.md`).
3. Feed all transcripts to the Robustness agent.

**Robustness prompt:** `declinations/ctf-{your-declination}/tools/ctf-robustness/system-prompt.md`
**Output:** Robustness report with behavioral profile, per-scenario verdicts, severity levels.

### 3.4 — CTF Audit

**When:** Before deployment, and periodically after.
**Input:** Design package + test plan + transcripts + robustness report.
**Prompt:** `declinations/ctf-{your-declination}/tools/ctf-audit/system-prompt.md`
**Output:** Audit report with score (0-100), badge (Gold/Silver/Bronze/Red Flag), improvement recommendations.

**Certification rule:** Red Flag (< 60) blocks publication. Bronze (>= 60) and above allow publication.

## Step 4 — Integrate the layers

The behavioral layers encode the ethical requirements that your coaching agents must follow. They are injected into each coaching agent's system prompt.

**Layer files:** `declinations/ctf-{your-declination}/layers/`

**How to inject:** When assembling your coaching agent's system prompt, concatenate:
1. Agent identity and metadata
2. CTF layers (all `.md` files from the layers directory, sorted alphabetically)
3. The agent's methodology files (produced by CTF Designer)

Example (pseudo-code):
```javascript
const layers = loadAllMdFiles('ctf/declinations/ctf-icf/layers/');
const methodology = loadMethodologyFiles(agent.designPackage);
const systemPrompt = `
# Agent Identity
Name: ${agent.name}
Description: ${agent.description}

# CTF Layers
${layers}

# Methodology
${methodology}
`;
```

## Step 5 — Implement anonymization

CTF requires anonymization by construction (Core principle 9). Your platform must:

1. Anonymize interactions before making them available for supervision.
2. Use a dedicated LLM call (small model, low temperature) to replace PII with generic markers.
3. Delete original (non-anonymized) interactions after anonymization.
4. Inform users that anonymized interactions may be reviewed for quality.

See `tools/ctf-config/best-practices.md` for implementation recommendations.

## Step 6 — Self-declare

Once your pipeline is operational:

1. Add your platform to `ADOPTERS.md` (pull request).
2. Publish a conformance declaration on your platform (visible to users).
3. Start sending observations via the feedback template (`validation/feedback-template.md`).

See `certification-scheme/self-declaration.md` for the 8 commitments.

## Step 7 — Ongoing

- **Re-audit** agents after design changes.
- **Supervise** deployed agents using anonymized interactions (tripartite supervision).
- **Update** the CTF submodule when new versions are released.
- **Contribute** findings to the evidence log.

---

## Quick reference: file paths

| What | Where |
|---|---|
| CTF Core (normative) | `document/ctf-v1.0.md` |
| Helper agent core prompts | `tools/ctf-*/system-prompt.md` |
| Declination-assembled prompts | `declinations/ctf-{fed}/tools/ctf-*/system-prompt.md` |
| Behavioral layers | `declinations/ctf-{fed}/layers/` |
| Test categories | `tools/ctf-test-plan/test-categories.md` |
| Robustness axes | `tools/ctf-robustness/evaluation-axes.md` |
| Best practices | `tools/ctf-config/best-practices.md` |
| ICF mapping | `declinations/ctf-icf/mapping.md` |
| Self-declaration | `certification-scheme/self-declaration.md` |

---

*This guide was written from the experience of integrating CTF into EGG (egg.simplex.coach). If you integrate CTF into your platform, we welcome your feedback and observations to improve this guide.*
