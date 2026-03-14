# Eval Learnings: nodejs-cli-best-practices Skill

This document captures findings from two rounds of eval runs comparing the `nodejs-cli-best-practices` skill against a baseline (no skill). Results are stored in `../nodejs-cli-best-practices-workspace/`.

---

## Iteration Summary

### Iteration 1 — Annotated fixture confound

**Fixture used:** `evals/fixtures/bad-cli.js` (with inline `// §X.X VIOLATION:` comments)

**Result:** All 6 runs (3 evals × with_skill + without_skill) scored 100%.

**Root cause:** The fixture file contained comments that explicitly named the violation and its section number, e.g.:

```js
// §4.4 VIOLATION: Hardcoded node path
#!/usr/local/bin/node
```

This gave the baseline agent the same information the skill provides, making the comparison meaningless. Both agents read the comments and produced equally correct audits.

**Fix:** Created `bad-cli-clean.js` — identical violations, zero annotation comments. Looks like natural developer code.

---

### Iteration 2 — Clean fixture, harder assertions

**Fixture used:** `evals/fixtures/bad-cli-clean.js` (no annotation hints)

**Result:** All 6 runs still scored 100% on content assertions.

**Root cause:** Claude is trained on the nodejs-cli-apps-best-practices repository content. The skill provides structured guidance, but the base model already knows these practices well enough to satisfy all content-based assertions.

**Key finding:** The skill's value shows up in **efficiency metrics**, not pass rates.

---

## Iteration 2 Benchmark Data

| Eval | Config | Tokens | Duration |
|------|--------|--------|----------|
| Audit (bad-cli-clean.js + bad-package.json) | with_skill | 23,897 | 98.6s |
| Audit (bad-cli-clean.js + bad-package.json) | without_skill | 24,468 | 106.1s |
| New CLI guide (dependency scanner) | with_skill | 21,551 | 90.4s |
| New CLI guide (dependency scanner) | without_skill | 36,838 | 130.0s |
| Error handling guide | with_skill | 19,900 | 65.3s |
| Error handling guide | without_skill | 21,087 | 64.8s |

**Aggregate (across all 3 evals):**

| Metric | With Skill | Without Skill | Delta |
|--------|------------|---------------|-------|
| Pass Rate | 100% ± 0% | 100% ± 0% | 0 |
| Time | 84.8s ± 17.4s | 100.3s ± 33.0s | **−15.5s** |
| Tokens | 21,783 ± 2,009 | 27,464 ± 8,292 | **−5,682** |

The most striking result is **eval-2 (new CLI guide)**: the skill reduced token usage by 41% and wall-clock time by 31%. With the skill, the agent had a clear framework to follow rather than deriving structure from scratch.

---

## Key Learnings

### 1. Fixtures must not contain the answer

Any comment, label, or annotation in a fixture file that names a violation will be read by both agents equally. The baseline agent is not disadvantaged — it can read comments too. For audit-style evals, fixtures must look like natural, unattributed developer code.

### 2. Content assertions are non-discriminating for well-known topics

When a skill encodes knowledge that is already in the model's training data (a public, widely-cited repository), content-based assertions will pass regardless of whether the skill is used. The skill's measurable impact shifts to:

- **Format consistency** — the skill enforces specific output templates (audit report structure, §X.X section numbering, ✅/⚠️/❌/➖ status icons)
- **Efficiency** — the skill saves the agent from deriving structure from scratch, reducing tokens and latency
- **Reliability** — the skill makes the output format predictable across different prompts and contexts

### 3. The skill genuinely helps with format adherence

The with-skill audit outputs consistently used the exact §X.X numbering, the per-section table format, and the High/Medium/Low priority groupings specified in the skill template. Without-skill outputs also produced good content, but format varied more across runs.

### 4. Efficiency gains are real and measurable

Across all three evals, the skill reduced token usage by an average of 5,682 tokens (21%) and wall-clock time by 15.5 seconds (15%). For high-volume usage, this compounds significantly.

---

## Recommended Next Steps

### Add format-compliance assertions

The current assertions only check for content presence. The next iteration should add assertions that test format adherence — things the base model won't produce without the skill template:

- `Output uses §X.X section numbering format (e.g., §6.4, §4.4)`
- `Output uses ✅/⚠️/❌/➖ status icons in a per-section table`
- `Output has exactly three priority tiers: High, Medium, and Low`
- `Output for the guide mode includes a checklist section with unchecked items`

These will likely discriminate between with-skill and without-skill because the format is specific to this skill's template.

### Test with genuinely obscure practices

Several of the 37 practices are not widely known outside this repository — for example:

- §3.4 configuration precedence with `cosmiconfig`
- §2.2 `npm-shrinkwrap.json` vs `package-lock.json` distinction
- §1.3 `conf`/`configstore` for XDG-compliant config storage
- §6.5 pre-populated bug report URLs with embedded version and platform

Adding assertions that specifically test for these by name (not just the concept) will create harder discrimination challenges where the skill reference genuinely provides information the base model might not surface.

### Expand the eval set

The current 3 evals are sufficient for fast iteration but limited for statistical confidence. Before publishing the skill, expand to 8-10 evals covering:

- Audit of a different fixture (e.g., a TypeScript CLI, an ESM-only CLI)
- Guide for a different use case (e.g., a file watcher CLI, a config migration tool)
- Edge cases: CI environment detection, Windows-specific cross-platform issues
- Mixed-mode: auditing a mostly-good CLI to test that the skill correctly reports passes, not just failures

### Run description optimization

The `scripts/run_loop.py` in the skill-creator plugin can optimize the SKILL.md `description` field for better triggering accuracy. This should be done after the skill content is stable:

```bash
SKILL_CREATOR=~/.claude/plugins/cache/claude-plugins-official/skill-creator/<version>/skills/skill-creator

cd $SKILL_CREATOR && python3 -m scripts.run_loop \
  --eval-set /path/to/trigger-evals.json \
  --skill-path skills/nodejs-cli-best-practices/SKILL.md \
  --model claude-sonnet-4-6 \
  --max-iterations 5 \
  --verbose
```

### Consider a blind comparison

For a more rigorous quality comparison between with-skill and without-skill outputs, use the skill-creator's blind comparison system (`agents/comparator.md`). An independent agent judges the two outputs without knowing which is which. This captures qualitative differences (format, specificity, organization) that pass-rate metrics cannot.
