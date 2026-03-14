# Node.js CLI Best Practices — Reference

All 37 practices condensed for use during audits and development guidance.

---

## 1. Command Line Experience

### §1.1 Respect POSIX args
**Rule:** Use POSIX-compliant argument syntax.
- Long flags: `--flag`, short aliases: `-f`
- Optional args in `[brackets]`, required in `<angle-brackets>`
- Multiple short flags can be grouped: `-abc` = `-a -b -c`

**Violation pattern:** Custom positional syntax like `cmd ACTION key=value` instead of `cmd --action --key value`

**Packages:** `commander`, `yargs`, `meow`

---

### §1.2 Build empathic CLIs
**Rule:** When the user omits required input, don't just error — prompt them interactively to recover.

```js
// Instead of: throw new Error('API key required')
// Do: prompt when input is missing
const { apiKey } = await inquirer.prompt([{
  type: 'password',
  name: 'apiKey',
  message: 'Enter your API key:',
  when: !options.apiKey
}]);
```

**Packages:** `enquirer`, `inquirer`, `prompts`

---

### §1.3 Stateful data
**Rule:** Persist user preferences between invocations. Follow XDG Base Directory Specification for storage paths.

```js
import Conf from 'conf';
const config = new Conf({ projectName: 'my-cli' });
config.set('apiKey', key);
config.get('apiKey');
```

**Packages:** `conf`, `configstore`

---

### §1.4 Provide a colorful experience
**Rule:** Use colors to improve readability, but always support opt-out via `NO_COLOR` env var, `--no-color` flag, or auto-detection of non-TTY environments.

```js
import chalk from 'chalk';
// chalk automatically respects NO_COLOR and non-TTY
console.log(chalk.green('Success'));

// Manual check if needed
if (process.stdout.isTTY && !process.env.NO_COLOR) {
  // apply color
}
```

**Violation pattern:** Hardcoded ANSI escape codes with no opt-out mechanism.

**Packages:** `chalk`, `kleur`, `picocolors`

---

### §1.5 Rich interactions
**Rule:** Use interactive prompts (dropdowns, checkboxes, autocomplete) and animated loaders/progress bars for async operations. Don't force users to provide what the app can detect.

```js
import ora from 'ora';
const spinner = ora('Fetching data...').start();
await fetchData();
spinner.succeed('Done');
```

**Packages:** `enquirer`, `ora`, `ink`, `prompts`, `listr2`

---

### §1.6 Hyperlinks everywhere
**Rule:** Output properly formatted hyperlinks for URLs and file paths so modern terminals can make them clickable.

```js
// Clickable URL in terminal
console.log('\u001B]8;;https://example.com\u0007Click here\u001B]8;;\u0007');

// Or use a package
import terminalLink from 'terminal-link';
console.log(terminalLink('Click here', 'https://example.com'));
```

**Packages:** `terminal-link`

---

### §1.7 Zero configuration
**Rule:** Auto-detect required values from environment (env vars, config files, git context) and only prompt when necessary. Follow POSIX environment variable conventions (`NO_COLOR`, `DEBUG`, `HTTP_PROXY`, etc.).

**Packages:** `cosmiconfig` (auto-discover config files)

---

### §1.8 Respect POSIX signals
**Rule:** Handle `SIGINT`, `SIGTERM`, `SIGHUP` gracefully — clean up resources and exit properly.

```js
process.on('SIGINT', () => {
  cleanup();
  process.exit(0);
});
```

**Violation pattern:** App freezes or leaves orphaned processes when user presses Ctrl+C.

---

## 2. Distribution

### §2.1 Prefer a small dependency footprint
**Rule:** Minimize production dependencies. Avoid bloated packages (e.g., `moment`, `lodash`, `request`). Prefer modern lightweight alternatives.

| Avoid | Use instead |
|-------|------------|
| `moment` | `date-fns`, native `Intl` |
| `lodash` | native array/object methods |
| `request` | native `fetch`, `got`, `undici` |
| `colors` | `chalk`, `kleur`, `picocolors` |

**Tool:** [bundlephobia.com](https://bundlephobia.com) to check package cost.

---

### §2.2 Use the shrinkwrap
**Rule:** Commit `npm-shrinkwrap.json` (not just `package-lock.json`) to pin transitive dependency versions for end users.

```sh
npm shrinkwrap
```

Alternatively, bundle all dependencies into a single file using `@vercel/ncc`:
```sh
npx ncc build src/index.js -o dist
```

**Packages:** `@vercel/ncc`

---

### §2.3 Cleanup configuration files
**Rule:** Provide an `--uninstall` flag or similar option to remove configuration files created by the CLI. Don't leave orphaned data in the user's filesystem.

---

## 3. Interoperability

### §3.1 Accept input as STDIN
**Rule:** Support piping data into your CLI via STDIN, enabling Unix one-liners.

```js
// Check if stdin has data (piped input)
if (!process.stdin.isTTY) {
  const rl = require('readline').createInterface({ input: process.stdin });
  rl.on('line', (line) => processLine(line));
} else {
  // use --file argument or prompt
}
```

**Violation pattern:** Only accepting input via file path argument, blocking `cat file.json | mycli`.

---

### §3.2 Enable structured output
**Rule:** Provide a `--json` flag (or similar) that outputs machine-readable JSON instead of human-readable formatted text. Essential for CI pipelines and scripting.

```js
if (options.json) {
  console.log(JSON.stringify(result));
} else {
  console.log(formatTable(result));
}
```

---

### §3.3 Cross-platform etiquette
**Rule:** Write code that works on Windows, macOS, and Linux.

**Common violations:**

```js
// ❌ Shebang doesn't work on Windows in npm scripts
"postinstall": "setup.js"
// ✅ Always prefix with node
"postinstall": "node setup.js"

// ❌ String path concatenation
const p = __dirname + '/../bin/cli.js';
// ✅ Use path.join
const p = path.join(__dirname, '..', 'bin', 'cli.js');

// ❌ Semicolons to chain commands (fails on Windows cmd)
childProcess.exec(`${cmd1}; ${cmd2}`);
// ✅ Use && or ||
childProcess.exec(`${cmd1} && ${cmd2}`);

// ❌ Single quotes in npm scripts (fail on Windows)
"format": "prettier '**/*.js'"
// ✅ Double quotes, escaped in JSON
"format": "prettier \"**/*.js\""

// ❌ Spawn script directly (shebang ignored on Windows)
childProcess.spawn('program.js', [])
// ✅ Spawn via node
childProcess.spawn('node', ['program.js'])
```

---

### §3.4 Support configuration precedence
**Rule:** Respect this config priority order (highest to lowest):
1. CLI arguments
2. Environment variables
3. Project-level config (`.myapprc`, `.git/config`)
4. User-level config (`~/.config/myapp`)
5. System-level config (`/etc/myapp`)

**Packages:** `cosmiconfig` (handles config file discovery automatically)

---

## 4. Accessibility

### §4.1 Containerize the CLI
**Rule:** Publish a Docker image for users without a Node.js environment.

```dockerfile
FROM node:lts-alpine
RUN npm install -g my-cli
ENTRYPOINT ["my-cli"]
```

---

### §4.2 Graceful degradation
**Rule:** Auto-detect terminal capabilities and degrade gracefully in unsupported environments (CI, pipes, old terminals). The `--json` flag (§3.2) doubles as a graceful degradation mechanism.

```js
// Auto-detect: disable color and interactivity when not in a TTY
const isInteractive = process.stdout.isTTY;
const supportsColor = isInteractive && !process.env.NO_COLOR;
```

---

### §4.3 Node.js versions compatibility
**Rule:** Target only current LTS and active Node.js versions. Declare the requirement in `package.json`.

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

If the CLI is invoked in an unsupported environment, detect and exit with a clear message:
```js
if (parseInt(process.versions.node) < 18) {
  console.error('my-cli requires Node.js 18 or higher');
  process.exit(1);
}
```

---

### §4.4 Shebang autodetect the Node.js runtime
**Rule:** Use `#!/usr/bin/env node` — never hardcode the Node.js path.

```js
#!/usr/bin/env node
// ✅ Works everywhere
```

```js
#!/usr/local/bin/node
// ❌ Breaks if node is installed elsewhere
```

---

## 5. Testing

### §5.1 Put no trust in locales
**Rule:** Don't assert on user-visible strings that may be translated. Test behavior, not text, or lock the locale in tests.

```js
// ❌ Fails on non-English systems
expect(output).to.contain('Examples:');

// ✅ Lock locale or test non-text behavior
const output = execSync('LC_ALL=en_US.UTF-8 mycli --help');
```

---

## 6. Errors

### §6.1 Trackable errors
**Rule:** Every error message must include a unique, documented error code so users can look it up.

```js
// ❌ Generic
console.error('Authentication failed');

// ✅ Trackable
console.error('Error (E4002): Authentication failed — provide API key via MY_APP_API_KEY env var');
```

---

### §6.2 Actionable errors
**Rule:** Error messages must tell the user exactly what to do, not just what went wrong.

```js
// ❌ Not actionable
console.error('Error: no config file found');

// ✅ Actionable
console.error('Error (E1001): No config file found. Run `my-cli init` to create one, or pass --config <path>.');
```

---

### §6.3 Provide debug mode
**Rule:** Enable verbose/debug output via `DEBUG` env var or `--debug`/`--verbose` flag. Use it throughout the codebase for troubleshooting.

```js
// Using the debug package
import debug from 'debug';
const log = debug('my-cli:http');
log('GET %s', url); // only shown when DEBUG=my-cli:* is set
```

```sh
DEBUG=my-cli:* my-cli do-thing
```

**Packages:** `debug`

---

### §6.4 Proper use of exit codes
**Rule:** Always exit with a meaningful exit code. Never call `process.exit()` without a code.

```js
// ❌ Exits with undefined code (treated as 0 = success)
process.exit();

// ✅ Explicit codes
process.exit(0); // success
process.exit(1); // general failure

// ✅ In async main
try {
  await main();
  process.exit(0);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
```

Exit code conventions:
- `0` — success
- `1` — general failure
- `2` — misuse of shell builtins / bad arguments
- Custom codes should be documented

---

### §6.5 Effortless bug reports
**Rule:** When a crash occurs, output a URL to file a bug report, pre-populated with version info and error details.

```js
const bugReportUrl = `https://github.com/org/repo/issues/new?title=${encodeURIComponent(err.message)}&body=${encodeURIComponent(`Version: ${pkg.version}\n\nError:\n${err.stack}`)}`;
console.error(`\nPlease report this bug: ${bugReportUrl}`);
```

---

## 7. Development

### §7.1 Use a bin object
**Rule:** In `package.json`, define `bin` as an object to decouple the executable name from the package name and file path.

```json
// ❌ Couples name to file
{
  "bin": "./cli.js"
}

// ✅ Explicit name → path mapping
{
  "bin": {
    "my-cli": "./bin/cli.js"
  }
}
```

---

### §7.2 Use relative paths correctly
**Rule:**
- Use `process.cwd()` for user-specified paths (files the user references)
- Use `__dirname` (or `import.meta.dirname` in ESM) for paths within the project

```js
// User's file (relative to where they ran the command)
const outputPath = path.resolve(process.cwd(), options.output);

// The CLI's own data file (relative to source)
const templatePath = path.join(__dirname, '..', 'templates', 'default.json');
```

---

### §7.3 Use the `files` field
**Rule:** Allowlist exactly what gets published to npm to keep package size small.

```json
{
  "files": [
    "bin",
    "src",
    "!src/**/*.spec.js",
    "!src/**/*.test.js"
  ]
}
```

---

## 8. Analytics

### §8.1 Strict opt-in analytics
**Rule:** Never collect telemetry without explicit user consent. When implementing analytics:
- Ask permission on first run
- Document exactly what data is collected, where it goes, and for how long
- Provide `--no-telemetry` or similar opt-out mechanism at any time

**Reference implementations:** Angular CLI, Next.js telemetry

---

## 9. Versioning

### §9.1 Include a `--version` flag
**Rule:** Implement `--version` / `-V` to display the current version and exit.

```js
program.version(pkg.version, '-V, --version');
```

---

### §9.2 Use Semantic Versioning
**Rule:** Follow [semver](https://semver.org/): MAJOR.MINOR.PATCH. Breaking changes → major bump.

---

### §9.3 Provide version in `package.json`
**Rule:** `version` field in `package.json` is the single source of truth. Read it in code:

```js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { version } = require('../package.json');
```

---

### §9.4 Display version in error messages
**Rule:** Include version in error output so users can include it in bug reports without being asked.

```js
console.error(`my-cli v${version} — Error (E4002): ...`);
```

---

### §9.5 Backward compatibility
**Rule:** Deprecate features gracefully before removing them. Display a deprecation warning with migration path.

```sh
DEPRECATED: --old-flag is deprecated and will be removed in v3.0.
            Use --new-flag instead. See: https://docs.example.com/migration
```

---

### §9.6 Publish versioned releases on npm
**Rule:** Use npm version tags. Always publish to npm so users can pin versions.

```sh
npm version patch  # or minor, major
npm publish
```

---

### §9.7 Update version documents
**Rule:** Maintain a `CHANGELOG.md` (or release notes) for every version. Follow [Keep a Changelog](https://keepachangelog.com/) format.

---

## 10. Security

### §10.1 Minimize argument injection
**Rule:** Never pass unsanitized user input as shell arguments. Treat all user-supplied values as untrusted.

```js
// ❌ Argument injection vulnerability
const { execSync } = require('child_process');
execSync(`git clone ${userInput}`);

// ✅ Use array form — values are not interpreted as flags
const { execFileSync } = require('child_process');
execFileSync('git', ['clone', '--', userInput]);

// ✅ Validate against allowlist if needed
const ALLOWED = ['fetch', 'push', 'pull'];
if (!ALLOWED.includes(userInput)) throw new Error('Invalid operation');
```

**Real-world CVEs:** git-interface (SNYK-JS-GITINTERFACE-2774028), simple-git (SNYK-JS-SIMPLEGIT-2421199), ungit (SNYK-JS-UNGIT-2414099)

---

## 11. Appendix: CLI Frameworks

| Framework | Best for | npm |
|-----------|----------|-----|
| `commander` | General-purpose, minimal | `npm i commander` |
| `yargs` | Complex CLIs with subcommands | `npm i yargs` |
| `oclif` | Large plugin-based CLIs | `npm i oclif` |
| `meow` | Minimal single-command CLIs | `npm i meow` |
| `ink` | React-based terminal UIs | `npm i ink` |
| `inquirer` | Interactive prompts | `npm i inquirer` |
| `enquirer` | Lightweight prompts | `npm i enquirer` |
| `ora` | Spinners / loaders | `npm i ora` |
| `listr2` | Task lists with progress | `npm i listr2` |
| `chalk` | Terminal colors | `npm i chalk` |
| `debug` | Debug logging | `npm i debug` |
| `cosmiconfig` | Config file discovery | `npm i cosmiconfig` |
| `conf` | Persistent config storage | `npm i conf` |
