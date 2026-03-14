# Running Evals for the nodejs-cli-best-practices Skill

This directory contains the eval suite for measuring whether the `nodejs-cli-best-practices` skill improves Claude's output quality, consistency, and efficiency when working on Node.js CLI projects.

## Prerequisites

- Python 3.8+
- The `skill-creator` plugin installed at:
  `~/.claude/plugins/cache/claude-plugins-official/skill-creator/<version>/skills/skill-creator/`
  (version directory will vary; check `~/.claude/plugins/cache/claude-plugins-official/skill-creator/`)
- The `claude` CLI available in PATH (used by grading subagents)

## Directory structure

```
evals/
├── README.md              # this file
├── evals.json             # eval prompts and assertions
└── fixtures/
    ├── bad-cli-clean.js   # deliberately bad CLI entry file (no annotation comments)
    ├── bad-cli.js         # original annotated version (kept for reference, DO NOT use for evals)
    └── bad-package.json   # deliberately bad package.json with multiple violations

../nodejs-cli-best-practices-workspace/
├── iteration-1/           # first eval run
├── iteration-2/           # second eval run (current baseline)
└── iteration-N/           # future runs go here
```

Each iteration directory has this structure:

```
iteration-N/
├── benchmark.json
├── benchmark.md
├── eval-1-audit/
│   ├── eval_metadata.json
│   ├── with_skill/
│   │   ├── outputs/audit-report.md
│   │   ├── timing.json
│   │   └── run-1/
│   │       ├── grading.json
│   │       └── timing.json
│   └── without_skill/
│       └── ...
├── eval-2-new-cli-guide/
│   └── ...
└── eval-3-error-handling/
    └── ...
```

## Running a new eval iteration

### Step 1: Spawn with-skill and without-skill runs in parallel

For each eval in `evals.json`, spawn two Claude subagents simultaneously — one with the skill, one as a baseline. Pass the skill path to the with-skill run:

```
Skill path: skills/nodejs-cli-best-practices/SKILL.md
```

Direct each agent to save outputs to:
- `iteration-N/eval-<id>-<name>/with_skill/outputs/`
- `iteration-N/eval-<id>-<name>/without_skill/outputs/`

For eval-1 (audit), provide the fixture files:
- `evals/fixtures/bad-cli-clean.js` — use this, NOT `bad-cli.js`
- `evals/fixtures/bad-package.json`

### Step 2: Create eval_metadata.json for each eval directory

```json
{
  "eval_id": 1,
  "eval_name": "audit",
  "prompt": "<the prompt from evals.json>",
  "assertions": []
}
```

### Step 3: Capture timing data

When each subagent completes, save the reported `total_tokens` and `duration_ms` to `timing.json` in both the top-level run directory and the `run-1/` subdirectory:

```json
{
  "total_tokens": 23897,
  "duration_ms": 98647,
  "total_duration_seconds": 98.6
}
```

### Step 4: Grade each run

Create `run-1/grading.json` for each run. Each grading file checks every assertion from `evals.json` against the actual output:

```json
{
  "run_id": "eval-1-audit-with_skill",
  "expectations": [
    {
      "text": "assertion text from evals.json",
      "passed": true,
      "evidence": "quoted text or description from the output that proves this passed/failed"
    }
  ],
  "summary": {
    "passed": 14,
    "failed": 0,
    "total": 14,
    "pass_rate": 1.0
  }
}
```

Field names matter — the viewer requires exactly `text`, `passed`, `evidence` (not `name`/`met`/`details`).

### Step 5: Aggregate benchmark

Run from the skill-creator directory:

```bash
SKILL_CREATOR=~/.claude/plugins/cache/claude-plugins-official/skill-creator/<version>/skills/skill-creator

cd $SKILL_CREATOR && python3 -m scripts.aggregate_benchmark \
  /path/to/nodejs-cli-best-practices-workspace/iteration-N \
  --skill-name nodejs-cli-best-practices
```

This produces `benchmark.json` and `benchmark.md` in the iteration directory.

### Step 6: Generate the eval viewer

```bash
cd $SKILL_CREATOR && python3 eval-viewer/generate_review.py \
  /path/to/nodejs-cli-best-practices-workspace/iteration-N \
  --skill-name "nodejs-cli-best-practices" \
  --benchmark /path/to/iteration-N/benchmark.json \
  --previous-workspace /path/to/iteration-N-1 \
  --static /tmp/eval-review-nodejs-cli-iterN.html

open /tmp/eval-review-nodejs-cli-iterN.html
```

Omit `--previous-workspace` on the first iteration.

## evals.json schema

```json
{
  "skill_name": "nodejs-cli-best-practices",
  "evals": [
    {
      "id": 1,
      "prompt": "User's task prompt",
      "expected_output": "Description of ideal output",
      "files": ["evals/fixtures/bad-cli-clean.js"],
      "assertions": [
        {"text": "Observable, objective assertion about the output"}
      ]
    }
  ]
}
```

## Fixture notes

**Use `bad-cli-clean.js` for all evals, not `bad-cli.js`.**

`bad-cli.js` contains inline `// §X.X VIOLATION:` comments that reveal the answer to both agents equally, making the with-skill vs without-skill comparison meaningless (see iteration-1 learnings in `EVALS.md`).

`bad-cli-clean.js` contains the same violations written as natural developer code with no hints.

## Writing good assertions

Assertions should be **discriminating** — they should be things the base model is less likely to produce without the structured reference guide. Avoid assertions that only test for well-known Node.js knowledge.

Good assertions (require the reference guide to produce reliably):
- References specific packages by name (`cosmiconfig`, `conf`, `npm-shrinkwrap.json`)
- Uses the `§X.X` section numbering from the best-practices reference
- Applies the exact audit report format (per-section table with ✅/⚠️/❌/➖ status)
- Identifies cross-file issues (e.g., a package declared in `package.json` but unused in code)

Weak assertions (base model already knows these):
- "Output mentions exit codes"
- "Output recommends using commander or yargs"
- "Output covers the shebang line"

See `EVALS.md` for a detailed discussion of the non-discrimination problem encountered in iterations 1 and 2.
