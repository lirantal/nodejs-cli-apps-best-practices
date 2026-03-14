---
name: nodejs-cli-best-practices
description: Guide and audit Node.js CLI application development against 37 established best practices covering UX, distribution, interoperability, accessibility, testing, error handling, development setup, analytics, versioning, and security. Use this skill whenever building, extending, reviewing, or scaffolding a Node.js command-line tool — including when adding commands, flags, argument parsing, error handling, color output, STDIN support, configuration precedence, exit codes, --version flags, npm distribution, or any other CLI feature. If someone is working on Node.js CLI code, this skill applies even if they don't explicitly ask about best practices. Also trigger when someone asks "how should I implement X in my CLI" or "what's the right way to do Y in a Node.js CLI".
---

This skill operates in two modes — **audit** for reviewing existing CLI code and **development guide** for building new features or tools.

Read `references/best-practices.md` for the complete reference of all 37 practices, including code examples and recommended packages. Use it as your source of truth in both modes.

## Determining the mode

- **Audit mode**: user provides existing CLI code or files to review → produce a structured audit report
- **Development guide mode**: user is asking how to build or implement something → proactively surface relevant practices with examples
- **Both**: user says "review and help me improve" → audit first, then provide concrete guidance for each failing practice

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
