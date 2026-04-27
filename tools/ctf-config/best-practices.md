# CTF Config — Best Practices

Recommendations for platform-specific test execution parameters, based on empirical findings from the EGG reference implementation. These are not normative — each platform adapts to its infrastructure and models.

## Test execution

### Multiple runs (statistical validation)

A single test run is insufficient. LLM behavior is non-deterministic — the same scenario can pass or fail depending on sampling.

**Recommendation:**
- **Minimum 3 independent runs** per scenario.
- **Majority vote**: a scenario passes if it succeeds in >= 2 out of 3 runs.
- Store all transcripts (one per run: `r1-TX-XXX.md`, `r2-TX-XXX.md`, `r3-TX-XXX.md`) for traceability.
- Robustness analysis uses the majority verdict, noting variability between runs.

**Why 3, not 5 or 10:** Three runs balance cost and statistical confidence. For most coaching scenarios, the variance between runs is low enough that 3 gives a reliable signal. Increase to 5 for high-stakes agents or when results are borderline.

### Temperature settings

Temperature controls randomness. Lower = more predictable. Higher = more varied but less reliable.

| Context | Recommended temperature | Rationale |
|---|---|---|
| **Design chat** (CTF Designer) | 0.3 - 0.4 | Needs creativity but structured output |
| **Test execution** (agent under test) | 0.5 - 0.6 | Realistic behavior, some natural variation |
| **Robustness analysis** | 0.1 - 0.3 | Analytical precision, consistent verdicts |
| **Audit** | 0.1 - 0.3 | Formal assessment, reproducibility matters |
| **Anonymization** | 0.1 | Deterministic NER replacement |

### Token budget

Each model has a context window. The system prompt, conversation history, and expected response must fit within it.

**Recommendation:**
- Calculate the system prompt size (agent prompt + layers + design files).
- Reserve at least 1500 tokens for the agent's response.
- Leave a safety margin of 10-15% for tokenizer overhead.
- When history exceeds budget, truncate oldest messages (keeping the most recent 4-6 exchanges).
- Generate a conversation summary after every 8-12 exchanges to compress history.

### Reasoning models

Some models (e.g. Qwen 3) use internal reasoning tokens that consume the output budget without producing visible text.

**Recommendation:**
- Set `reasoning_effort: 'low'` or `'medium'` for coaching agents (conversation, not complex reasoning).
- Increase `max_tokens` to account for internal reasoning overhead.
- Monitor actual token usage vs. visible output to detect budget waste.

## Anonymization

### Model choice

Anonymization (NER replacement) does not require a large model. A small, fast, cheap model is appropriate.

**Recommendation:**
- Use the smallest available model that handles NER reliably (e.g. Mistral Small).
- Temperature 0.1 (near-deterministic).
- Cost should be < 5% of the main interaction cost.
- The anonymization cost is absorbed by the platform, not charged to the user.

### Timing

Two strategies, combinable:

1. **Post-interaction** (fire-and-forget): anonymize after each interaction, asynchronously. User experiences no latency.
2. **Batch (cron)**: anonymize inactive conversations periodically (e.g. every 5 minutes for conversations idle > 30 minutes).

**Recommendation:** Use both. Post-interaction for real-time supervision readiness. Batch as a safety net for sessions that end without a clean close.

### Retention

- Keep the last N messages (e.g. 4) in clear for conversation continuity.
- All older messages: anonymize then delete originals.
- Conversations inactive beyond a threshold: anonymize everything (including the last N).

## Certification pipeline

### Execution order

The quality cycle must be sequential:

1. **Optimize** (deterministic rules: normalize whitespace, check budget, detect duplicates)
2. **Test Plan** (generate scenarios from design)
3. **Tests** (execute scenarios with statistical validation)
4. **Robustness** (analyze transcripts)
5. **Audit** (formal verdict)

Steps 2-5 consume the outputs of previous steps. Skipping or reordering produces unreliable results.

### Caching and re-use

- Test scenarios that passed in a previous run can be cached and skipped if the design has not changed.
- If the design changes, all tests should be re-run to detect regressions.
- Robustness and audit should always be re-run after any design change, even if tests pass.

### Post-processing

LLM-generated reports (robustness, audit) may contain verdicts that contradict the statistical test results. This is expected — the LLM re-analyzes transcripts and may reach different conclusions.

**Recommendation:** Apply deterministic post-processing to align report verdicts with statistical test data. The test verdicts (majority vote across runs) are the source of truth; the report provides qualitative analysis but does not override quantitative results.

---

*These best practices are based on the EGG reference implementation (April 2026). They will evolve as more platforms adopt CTF and share their findings via the evidence log.*
