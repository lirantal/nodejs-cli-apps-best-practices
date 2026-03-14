---
name: nodejs-cli-best-practices
description: Guide and audit Node.js CLI application development against 37 established best practices covering UX, distribution, interoperability, accessibility, testing, error handling, development setup, analytics, versioning, and security. Use this skill when building, extending, reviewing, or scaffolding a Node.js CLI — including when someone says "audit my CLI", "review my CLI code", "I'm building a CLI tool", or asks about adding argument parsing, error handling, color output, STDIN, --json flags, exit codes, --version flags, or npm publishing. Applies even when best practices are not explicitly mentioned. Also trigger for "how should I implement X in my CLI" or "what's the right way to do Y in a Node.js CLI". Do NOT use for Node.js backend or API development with no CLI entry point.
metadata:
  version: 1.0.0
  category: nodejs
  tags: [nodejs, cli, best-practices, audit, command-line]
---

This skill operates in two modes — **audit** for reviewing existing CLI code and **development guide** for building new features or tools.

## Critical

Always read `references/best-practices.md` before producing any output. It contains the complete reference for all 37 practices with code examples and recommended packages. It is the source of truth for both modes — do not rely on general knowledge alone, as several practices (specific package recommendations, §X.X numbering, configuration precedence order) are specific to this guide.

## Determining the mode

| Trigger | Mode | Action |
|---------|------|--------|
| User provides existing CLI code or files to review | **Audit** | Produce a structured audit report |
| User asks how to build or implement something | **Development guide** | Surface relevant practices with examples |
| User says "review and help me improve" | **Both** | Audit first, then provide concrete guidance for each failing practice |

---

## Audit mode

Systematically compare the provided code against the practices in `references/best-practices.md`. Focus on what is verifiable from the code. Use judgment to mark practices as not applicable (➖) when there's genuinely no way to assess them from static analysis (e.g., Docker support when the project shows no distribution intent).

**Prioritize by user impact** — a missing exit code (§6.4) or absent `--version` flag (§9.1) affects every user and every CI pipeline; missing Docker image (§4.1) is low priority for most projects.

### Audit report format

```
## Node.js CLI Best Practices Audit

### Summary
✅ N practices followed  ⚠️ N need attention  ❌ N not implemented  ➖ N not applicable

---

### 1. Command Line Experience
| # | Practice | Status | Finding |
|---|----------|--------|---------|
| 1.1 | Respect POSIX args | ✅ | Uses yargs with proper short/long aliases |
| 1.2 | Build empathic CLIs | ❌ | No interactive fallback when required args absent |
...

[Repeat for each section with applicable practices]

---

### Priority recommendations

**High priority** (user-facing or CI-breaking):
- **§6.4 Exit codes** — `process.exit()` called without a code
  ```js
  // Fix
  process.exit(1); // on error
  process.exit(0); // on success
  ```

**Medium priority**:
- ...

**Low priority / nice to have**:
- ...
```

Keep findings concise and tied to specific code patterns. Always include a concrete fix with code for each ❌.

---

## Development guide mode

When building a new CLI feature or tool, don't wait to be asked — surface relevant best practices immediately based on what the user is building.

**For a "building a CLI from scratch" request**, organize guidance by development phase:

1. **Project setup** (§7.1, §7.3, §4.4, §2.2): bin object, shebang, files field, shrinkwrap
2. **Argument design** (§1.1, §1.2, §1.7, §3.4): POSIX compliance, empathic fallbacks, zero-config, config precedence
3. **I/O and interoperability** (§3.1, §3.2, §4.2): STDIN, structured output, graceful degradation
4. **Error handling** (§6.1–§6.5): trackable codes, actionable messages, debug mode, exit codes
5. **UX polish** (§1.4, §1.5, §1.6): colors, rich interactions, hyperlinks
6. **Versioning** (§9.1–§9.7): `--version` flag, semver, changelog
7. **Security** (§10.1): argument injection

**For a targeted feature request** (e.g., "add error handling", "add a --json flag"), surface only the directly relevant practices.

### Development guidance format

```
## Node.js CLI best practices for [feature/topic]

### Checklist
- [ ] §X.Y Practice name — one-line explanation of why it matters

### Implementation
[Concrete, copy-pasteable code]

### Recommended packages
- `package-name` — when and why to use it
  npm install package-name

### Common mistakes
- What not to do → why it breaks → what to do instead
```

---

## Quick reference: which section applies

| Topic | Sections |
|-------|----------|
| Argument parsing / flags | §1.1, §1.7, §3.4 |
| Prompts / interactivity | §1.2, §1.5 |
| Colors / styling | §1.4, §4.2 |
| STDIN / piping | §3.1 |
| JSON / structured output | §3.2, §4.2 |
| Cross-platform issues | §3.3, §7.2 |
| Error messages | §6.1, §6.2 |
| Exit codes | §6.4 |
| Debug / verbose mode | §6.3 |
| `--version` flag | §9.1, §9.3 |
| package.json setup | §7.1, §7.3, §9.3 |
| npm publishing / distribution | §2.1, §2.2, §9.6 |
| Security / user input | §10.1 |
| Configuration persistence | §1.3, §2.3 |
| Node.js version targeting | §4.3 |
| Analytics / telemetry | §8.1 |

---

## Examples

### Example 1: Audit mode

**User says:** "Audit my Node.js CLI against best practices. Here's my entry file and package.json."

**Actions:**
1. Read `references/best-practices.md`
2. Examine the provided files against each applicable practice
3. Produce the structured audit report with per-section table and priority recommendations

---

### Example 2: Development guide mode (new CLI from scratch)

**User says:** "I'm building a Node.js CLI that parses log files and outputs a summary table. It needs to work cross-platform and I want to publish it on npm."

**Actions:**
1. Read `references/best-practices.md`
2. Identify all practices relevant to this CLI type (cross-platform, npm-published, table output)
3. Organize guidance by development phase (project setup → argument design → I/O → errors → UX → versioning → security)

---

### Example 3: Development guide mode (targeted feature)

**User says:** "My CLI is crashing and just dumping stack traces. How do I add proper error handling?"

**Actions:**
1. Read `references/best-practices.md` sections §6.1–§6.5
2. Surface only the directly relevant practices
3. Provide a concrete, copy-pasteable error handling wrapper

---

## Common mistakes to avoid

| Mistake | Why it matters | Correct approach |
|---------|---------------|------------------|
| Marking §4.1 (Docker) as ❌ for a small personal CLI | Docker is rarely needed; not applicable is honest | Use ➖ when the practice genuinely doesn't fit the project's scope |
| Only auditing the entry file, ignoring package.json | Several high-impact violations (§7.1, §7.3, §2.1, §4.3) live in package.json | Always audit both the entry file and package.json when both are provided |
| Recommending `package-lock.json` for §2.2 | The practice specifically calls for `npm-shrinkwrap.json` for published CLIs | Reference `references/best-practices.md` for the exact requirement |
| Skipping the priority grouping in audit reports | Users need to know what to fix first, not just what's wrong | Always include High / Medium / Low priority sections with concrete fixes |
| Providing a development guide without code examples | Prose guidance alone is not actionable | Every recommended practice should include at least one copy-pasteable code block |
