<!-- Project Logo -->
<img src='.github/nodejs-cli-apps-best-practices-logo.svg' width="100px" align="left">

<!-- Main Header Links -->
<div align="right">
  <a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">
    <img src="https://badgen.net/badge/Node.js CLI Apps/Best Practices/purple" style="margin:8px;" alt="Node.js CLI Apps Best Practices"/>
  </a>
</div>

<!-- Project Title -->
<h1>Node.js CLI Apps Best Practices</h1>

A collection of curated best practices on how to build successful, empathic and user-friendly Node.js Command Line Interface (CLI) applications.

### Why this guide?

A bad CLI can easily discourage users from interacting with it. Building successful CLIs requires attention to detail and empathy for the user in order to create a good user experience. It is very easy to get wrong.

In this guide I have compiled a list of best practices across areas of focus which aim to optimize for an ideal user experience when interacting with a CLI application.

### Features:
- ✅ 21 best practices for building successful Node.js CLI applications
- ❤️ Help translate to other languages: [ [🇪🇸](./README-es.md) , [🇩🇪](./README-de.md) , ? ]
- 🙏 Contributions are welcome
- Last update: 2020-02-14

<!-- Shields -->
<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC BY-SA 4.0/green"/></a>
</p>

### Why me?

My name is Liran Tal and I'm addicted to building command line applications.

Some of my recent work, building Node.js CLIs, includes the following open source projects:

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
     <td align="center">
      <a href="https://github.com/lirantal/dockly"><img src="https://repository-images.githubusercontent.com/71667498/d5576f00-69cd-11e9-83dd-2139ad967fdc" width="150px;" alt="dockly - Immersive terminal interface for managing docker containers and services"/><br /><sub><b>Dockly</b></sub></a><br/>Immersive terminal interface for managing docker containers and services
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/npq"><img src="https://repository-images.githubusercontent.com/114298694/73d29f00-bb7d-11e9-80f5-5f94f25a76b4" width="150px;" alt="npq - safely install packages with npm/yarn by auditing them as part of your install process"/><br /><sub><b>npq</b></sub></a><br/>safely install packages with npm/yarn by auditing them as part of your install process
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/lockfile-lint"><img src="https://repository-images.githubusercontent.com/189734318/e6973f80-e55a-11e9-8446-c63299297f5a" width="150px;" alt="lockfile-lint - Lint an npm or yarn lockfile to analyze and detect security issues"/><br /><sub><b>lockfile-lint</b></sub></a><br/>Lint an npm or yarn lockfile to analyze and detect security issues
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/is-website-vulnerable"><img src="https://repository-images.githubusercontent.com/212983914/2d33b500-e84d-11e9-820e-799f368c4c44" width="150px;" alt="is-website-vulnerable - finds publicly known security vulnerabilities in a website's frontend JavaScript libraries"/><br /><sub><b>is-website-vulnerable</b></sub></a><br/>finds publicly known security vulnerabilities in a website's frontend JavaScript libraries
     </td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<a href="https://twitter.com/liran_tal/" alt="follow Liran Tal on twitter"><img src="https://badgen.net/twitter/follow/liran_tal" /></a>

---

<h3>Table of Contents</h3>

- 1 Command Line Experience
  - 1.1 [Respect the POSIX](#11-respect-the-posix)
  - 1.2 [Build empathic CLIs](#12-build-empathic-clis)
  - 1.3 [Stateful data](#13-stateful-data)
  - 1.4 [Provide colorful experience](#14-provide-colorful-experience)
  - 1.5 [Rich interactions](#15-rich-interactions)
  - 1.6 [Hyperlinks everywhere](#16-hyperlinks-everywhere)
  - 1.7 [Zero configuration](#17-zero-configuration)
- 2 Distribution
  - 2.1 [Prefer a small dependency footprint](#21-prefer-a-small-dependency-footprint)
  - 2.2 [Use the shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)
- 3 Interoperability
  - 3.1 [Accept input as STDIN](#31-accept-input-as-stdin)
  - 3.2 [Enable structured output](#32-enable-structured-output)
  - 3.3 [Cross-platform etiquette](#33-cross-platform-etiquette)
  - 3.4 [Allow environment overrides](#34-allow-environment-overrides)
- 4 Accessibility
  - 4.1 [Containerize the CLI](#41-containerize-the-cli)
  - 4.2 [Graceful degradation](#42-graceful-degradation)
  - 4.3 [Node.js versions compatibility](#43-nodejs-versions-compatibility)
  - 4.4 [Shebang autodetect the Node.js runtime](#44-shebang-autodetect-the-nodejs-runtime)
- 5 Testing
  - 5.1 [Put no trust in locales](#51-put-no-trust-in-locales)
- 6 Errors
  - 6.1 [Informational errors](#61-informational-errors)
  - 6.2 [Actionable errors](#62-actionable-errors)
  - 6.3 [Provide debug mode](#63-provide-debug-mode)

---

# 1 Command Line Experience

This section deals with best practices concerned with creating beautiful and high-value user experience Node.js command line applications.

In this section:
  - 1.1 [Respect the POSIX](#11-respect-the-posix)
  - 1.2 [Build empathic CLIs](#12-build-empathic-clis)
  - 1.3 [Stateful data](#13-stateful-data)
  - 1.4 [Provide colorful experience](#14-provide-colorful-experience)
  - 1.5 [Rich interactions](#15-rich-interactions)
  - 1.6 [Hyperlinks everywhere](#16-hyperlinks-everywhere)
  - 1.7 [Zero configuration](#17-zero-configuration)

<br/>

### 1.1 Respect the POSIX

✅ **Do:**
Use [POSIX-compliant](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html) command line argument syntax, which is widely accepted as a standard for command line tools.

❌ **Otherwise:**
Users may get frustrated when a CLI's syntax for arguments, options, or command parameters deviate from the de facto Unix standards they are used to.

<details>
  <summary>➡️ <b>Details</b></summary>

Unix-like operating systems popularized the use of the command line and tools such as `awk`, `sed`. Such tools have effectively standardized the behavior of command line options (aka flags), options-arguments, and other operands.

Some examples of expected behavior:
* option-arguments or options can be notated in help or examples as square brackets (`[]`) to indicate they are optional, or with angle brackets (`<>`) to indicate they are required.
* options specified using the short form singular `-` may container one alphanumeric character.
* specifying multiple options with no values may be grouped, such as `myCli -abc` being equivalent to `myCli -a -b -c`.

Command line power-users will expect your command line application to have similar conventions as  other Unix apps.
</details>

### 1.2 Build empathic CLIs

✅ **Do:**
Put workflows in place that assist the user to interact with the CLI successfully, when otherwise such interactions would result in errors and frustration.

❌ **Otherwise:**
Failing to provide actionable assistance in supporting the user will result in frustration due to the lack of capability to operate the CLI.

<details>
  <summary>➡️ <b>Details</b></summary>

A command line interface for your program is no different than a web user interface in the sense of doing as much as you can as the program author to ensure that it is being used successfully.

Optimize for successful interactions by building empathic CLIs that support the user. As an example, let's explore the case of the `curl` program that expects a URL as its primary data input, and the user failing to provide it. Such failure will lead to reading through a (hopefully) descriptive error messages or reviewing a `curl --help` output. However, an empathic CLI would have presented an interactive prompt to capture input from the user, resulting in a successful interaction.
</details>

### 1.3 Stateful data

✅ **Do:**
Provide a stateful experience between multiple invocations of your CLI app, and remember values and data in order to provide seamless interaction.

❌ **Otherwise:**
Requiring your user to repeatedly provide the same information with multiple invocations of the CLI will annoy your user.

<details>
  <summary>➡️ <b>Details</b></summary>

It may happen that you find yourself needing to provide storage persistence for your CLI application, such as remembering a username, email, API token, or other preferences between multiple invocations of the CLI. Use a configuration helper that allows the app to persist such user settings.

Reference projects:

- [configstore](https://www.npmjs.com/package/configstore)
- [conf](https://www.npmjs.com/package/conf)

</details>

### 1.4 Provide a colorful experience

✅ **Do:**
Make use of colors in your CLI application to highlight parts of your app's output, and provide a graceful degradation, or color detection, to allow automatic opt-out so that output isn't garbled.

❌ **Otherwise:**
Information may easily get lost in pale program output, especially when the output is text-heavy.

<details>
  <summary>➡️ <b>Details</b></summary>

Most terminals used today to interact with command line applications support colored text such as these enabled by specially crafted ANSI encoded characters.

A colorful display in your command line application output may further contribute to a richer experience and increased interaction. That said, unsupported terminals may experience a degraded output in the form of garbled information on the screen. Furthermore, a CLI may be used in a continuous integration build job which may not support colored output.

Reference projects:

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

</details>

<details>
  <summary>📦 <b>Recommended packages</b></summary>

Reference to open source packages:

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

</details>

### 1.5 Rich interactions

✅ **Do:**
Leverage the use of rich command line interactions beyond the basics of text input prompt to provide a smoother experience for CLI users.

❌ **Otherwise:**
A text prompt as input may prove cumbersome for users when data to reason about is in the form of closed options (i.e: dropdowns).

<details>
  <summary>➡️ <b>Details</b></summary>

Rich interactivity can be introduced in the form of prompt inputs, which are more sophisticated than free text, such as dropdown select lists, radio button toggles, rating, auto-complete, or hidden password inputs.

Another type of rich interactivity is in the form of animated loaders and progress-bars which provide a better experience for users when asynchronous work is being performed.

Many CLIs provide default command line arguments without requiring any further interactive experience. Don't force your users to provide parameters that the app can work out for itself.
</details>

<details>
  <summary>📦 <b>Recommended packages</b></summary>

Reference to open source packages:

- [enquirer](https://www.npmjs.com/package/enquirer)
- [ora](https://www.npmjs.com/package/ora)
- [ink](https://www.npmjs.com/package/ink)
- [prompts](https://www.npmjs.com/package/prompts)

</details>

### 1.6 Hyperlinks everywhere

✅ **Do:**
Use properly formatted hyperlinks in text output for both URLs (e.g: `https://www.github.com`), as well as source code (e.g: `src/Util.js:2:75`) - both of which a modern terminal is able to transform into a clickable link.

❌ **Otherwise:**
Avoid broken and non-interactive links like `git.io/abc` which requires your user to copy and paste manually.

<details>
  <summary>➡️ <b>Details</b></summary>

If you are sharing links to URLs, or pointing to a file and a specific line number and column in the file, you can provide properly formatted links to both of these examples that, once clicked, will open up the browser, or an IDE at the defined location.
</details>

### 1.7 Zero configuration

✅ **Do:**
Optimize a plug-and-play experience by auto-detecting required configuration and command line arguments values

❌ **Otherwise:**
Don't force user interactivity if a command-line argument can be auto-detected in a reliable way, and the action invoked doesn't explicitly require user interaction (such as confirming a deletion).

<details>
  <summary>➡️ <b>Details</b></summary>

Aim to provide a "works out of the box" experience when running the CLI application.

Reference projects which are built around Zero configuration:
 - The [Jest JavaScript Testing Framework](https://jestjs.io)
 - [Parcel](https://parceljs.org), a web application bundler

</details>

# 2 Distribution

This section deals with best practices concerned with distributing and packaging a Node.js command line application in an optimal matter for consumers.

In this section:
  - 2.1 [Prefer a small dependency footprint](#21-prefer-a-small-dependency-footprint)
  - 2.2 [Use the shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)

### 2.1 Prefer a small dependency footprint

✅ **Do:**
Minimize your use of production dependencies, use alternative dependencies which are smaller, and vet your dependencies' footprints as well for transitive dependencies to ensure a small bundle of the Node.js CLI. Balance this by being careful to not over-optimize use of dependencies by reinventing the wheel.

❌ **Otherwise:**
The size and use of dependencies in the application will impact the install time of your Node.js CLI, potentially providing a poor user experience.

<details>
  <summary>➡️ <b>Details</b></summary>

A fast `npm install` for Node.js CLIs invoked with `npx` will provide a better user experience. This is made possible when the overall dependency, and transitive dependency, footprint is kept to a reasonable size.

A one-off global `npm` installation of a slow-to-install `npm` package will offer a one-off poor experience, but the use of `npx` by users to invoke executable packages will make the degraded performance, due to `npx` always fetching and installing packages from the registry, more significant and obvious.
</details>

### 2.2 Use the shrinkwrap, Luke

✅ **Do:**
Use npm's `npm-shrinkwrap.json` as a lockfile to ensure that pinned-down dependency versions (direct and transitive) propagate to your end users when they install your npm package.

❌ **Otherwise:**
Not fixing the versions of your app's dependencies will mean that the package manager (e.g. `npm`) will resolve them during installation, and transitive dependencies installed via version ranges may introduce breaking changes that you can't control, that may result in your Node.js CLI application failing to build or run.

<details>
  <summary>➡️ <b>Details</b></summary>

Use the ~~force~~ shrinkwrap, Luke!

Typically, an npm package only defines its direct dependencies, and their version range, when being installed, and the npm package manager will resolve all the transitive dependencies' versions upon installation. Over time, the resolved versions of dependencies will vary, as new direct, and transitive dependencies will release new versions.

Even though [Semantic Versioning](https://semver.org/) is broadly accepted among maintainers, npm is [known to introduce many dependencies](https://snyk.io/blog/how-much-do-we-really-know-about-how-packages-behave-on-the-npm-registry/) for an average package being installed, which adds to the risk of a package introducing changes that may break your application.

The flip side of using `npm-shrinkwrap.json` is the security implications you are forcing upon your consumers. The dependencies being installed are pinned to specific versions, so even if newer versions of these dependencies are released, they won't be installed. This moves the responsibility to you, the maintainer, to stay up-to-date with any security fixes in your dependencies, and release your CLI application regularly with security updates. Consider using [Snyk Dependency Upgrade](https://snyk.io/) to automatically fix security issues across your dependency tree. _Full disclosure: I am a developer advocate at Snyk._

> 👍 Tip
>
> Use `npm shrinkwrap` command to generate the shrinkwrap lockfile, which is of the same
> format as that of a `package-lock.json` file.

References:

- [Do you really know how a lockfile works for yarn and npm packages?](https://snyk.io/blog/making-sense-of-package-lock-files-in-the-npm-ecosystem/)
- [Yarn docs: Should lockfiles be committed to the repository?](https://next.yarnpkg.com/advanced/qa#should-lockfiles-be-committed-to-the-repository)

</details>

# 3 Interoperability

This section deals with best practices concerned with making your Node.js CLI seamlessly integrate with other command line tools, and following conventions that are natural for CLIs to operate in.

This section answers questions such as:

- _Can I export the output of this CLI for easy parsing?_
- _Can I pipe the output of this CLI to the input of another command line tool?_
- _Can I pipe the result of another tool to this CLI?_

In this section:
  - 3.1 [Accept input as STDIN](#31-accept-input-as-stdin)
  - 3.2 [Enable structured output](#32-enable-structured-output)
  - 3.3 [Cross-platform etiquette](#33-cross-platform-etiquette)
  - 3.4 [Allow environment overrides](#34-allow-environment-overrides)

### 3.1 Accept input as STDIN

✅ **Do:**
For command line applications that are expected to work with data, make it easy for a user to pipe the data to standard input (STDIN).

❌ **Otherwise:**
Other command line applications will not be able to provide their result, directly as input for your CLI, which prevents common UNIX one-liners such as:

```sh
$ curl -s "https://api.example.com/data.json" | your_node_cli
```

<details>
  <summary>➡️ <b>Details</b></summary>

If the command line application works with data, such as performing some kind of task on a JSON file that is usually specified with `--file <file.json>` command line argument.
</details>

### 3.2 Enable structured output

✅ **Do:**
Enable a flag to allow structured output of the app's result, if such result is available, to enable parsing and easy manipulation of the data.

❌ **Otherwise:**
Users of the CLI may need to apply complicated regex parsing and matching techniques to extract the output data provided by your CLI.

<details>
  <summary>➡️ <b>Details</b></summary>

It is often useful for users of a command line application to parse the data and perform other tasks with it, such as using it to feed web dashboards, or email notifications.

Being able to easily extract the data of interest from a command line output provides a friendlier experience to users of your CLI.
</details>

### 3.3 Cross-platform etiquette

✅ **Do:**
If a CLI is expected to function across platforms, proper attention must be given to semantics of command shells, and components such as file systems, along with developers leveraging relevant programming constructs.

❌ **Otherwise:**
The CLI will break on other operating systems due to factors such as incorrect path separator characters, even though there are no functional differences in the code.

<details>
  <summary>➡️ <b>Details</b></summary>

Even though, from a program's perspective, the functionality isn't being stripped down and _should_ execute well in different operating systems, some missed nuances may render the program inoperable. Let's explore several cases where cross-platform ethics must be honored.

#### Wrongly spawning a command
You might need to spawn a process that runs a Node.js program. For example, you have the following script:

`program.js`

```js
#!/usr/bin/env node

// the rest of your app code
```

This works:

```
const cliExecPath = 'program.js'
const process = childProcess.spawn(cliExecPath, [])
```

This is better:

```
const cliExecPath = 'program.js'
const process = childProcess.spawn('node', [cliExecPath])
```

Why is it better? The `program.js` source code begins with the Unix-like [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) notation, however Windows doesn't know how to interpret this due to the fact that Shebang isn't a cross-platform standard.

This is also true for `package.json` scripts. Consider the following bad practice
of defining an npm run script:

```
"scripts": {
  "postinstall": "myInstall.js"
}
```

This is due to the fact that the Shebang in `myInstalls.js` will not help Windows
understand how to run this with the `node` interpreter.

Instead, follow the best practice of:

```
"scripts": {
  "postinstall": "node myInstall.js"
}
```

#### Shell interpreters vary
Not all characters are treated the same across different shell interpreters.

For example, the Windows command prompt doesn't treat a single quote the same as a double quote,
as would be expected on a bash shell, and so it doesn't recognize that the whole string inside
a single quote belongs to the same string group, which will lead to errors.

This will fail in a Windows Node.js environment that uses the Windows command prompt:

package.json
```
"scripts": {
  "format": "prettier-standard '**/*.js'",
  ...
}
```

To fix this so that this `npm run` script will indeed be cross-platform between Windows, macOS and Linux:

package.json
```
"scripts": {
  "format": "prettier-standard \"**/*.js\"",
  ...
}
```

In this example we had to use double quotes and escape them with the JSON notation.

#### Avoid concatenating paths
Paths are constructed differently across different platforms. When they are built
manually by concatenating strings they are bound not to be interoperable between
different platforms.

Let's consider the following bad practice example:

```js
const myPath = `${__dirname}/../bin/myBin.js`
```

It assumes that forward slash is the path separator where on Windows, for example,
a backslash is used.

Instead of manually building filesystem paths, defer to Node.js's own `path`
module to do this:

```js
const myPath = path.join(__dirname, '..', 'bin', 'myBin.js')
```

#### Avoid chaining commands with semicolons
Linux shells are known to support a semicolon (`;`) to chain commands to run
sequentially, such as: `cd /tmp; ls`. However, doing the same on Windows will fail.

Avoid doing the following:

```js
const process = childProcess.exec(`${cliExecPath}; ${cliExecPath2}`)
```

Instead, use the double ampersand or double pipe notations:

```js
const process = childProcess.exec(`${cliExecPath} || ${cliExecPath2}`)
```

</details>

### 3.4 Allow environment overrides

✅ **Do:**
Allow configuration to be read from environment variables, and when it conflicts with command line arguments then allow environment variables to override.

❌ **Otherwise:**
Invoking the CLI with customized configuration will not be possible.

<details>
  <summary>➡️ <b>Details</b></summary>

Detect and support configuration setting using environment variables as this will be a common way in many toolchains to modify the behavior of the invoked CLI application.

Moreover, a CLI application may be invoked in a way that requires a dynamic environment variable setting to resolve configuration or flag values, in a way that doesn't allow passing command line arguments or simply makes defining this information via command line arguments veryrepetitive and cumbersome.

When both a command line argument and an environment variable configure the same setting, a precedence should be granted to environment variables to override the setting.

</details>

# 4 Accessibility

This section deals with best practices concerned with making a Node.js CLI application available to users who wish to consume it, but who are lacking the environment for which the maintainer designed the application.

In this section:
  - 4.1 [Containerize the CLI](#41-containerize-the-cli)
  - 4.2 [Graceful downplay](#42-graceful-downplay)
  - 4.3 [Node.js versions compatibility](#43-nodejs-versions-compatibility)
  - 4.4 [Shebang autodetect the Node.js runtime](#44-shebang-autodetect-the-nodejs-runtime)

### 4.1 Containerize the CLI

✅ **Do:**
Create a docker image for the CLI and publish it to a public registry like Docker Hub so that users without a Node.js environment can use it.

❌ **Otherwise:**
Users without a Node.js environment will not have `npm` or `npx` available, and so won't be able to run your CLI application.

<details>
  <summary>➡️ <b>Details</b></summary>

Installing Node.js CLI applications from the npm registry will typically be done with Node.js native toolchain such as `npm` or `npx`. These are common across JavaScript and Node.js developers, and are expected to be referenced within install instructions.

However, if you are targeting a CLI application to be consumed by the general public, regardless of their familiarity with JavaScript, or availability of this tooling, then distributing your CLI application only in the form of an install from the npm registry will be restricting. If your CLI application is intended to be used in a build or CI environment then those may also be required to install Node.js related toolchain dependencies.

There are many ways to package and distribute an executable, and containerizing it as a Docker container that is pre-bundled with your CLI application is an easily consumable alternative and dependency-free (aside of requiring a Docker environment).

</details>

### 4.2 Graceful degradation

✅ **Do:**
Provide users with the ability to opt-out of colorful and animation-rich display in unsupported environments, such as by skipping interactivity and providing formatted output in the form of JSON.

❌ **Otherwise:**
Having colorful output, using terminal interactive such as prompts and other display-rich interfaces may significantly degrade the end user experience for users not having a supported terminal and deter them away from using your CLI application.

<details>
  <summary>➡️ <b>Details</b></summary>

It is common to provide a rich terminal display in the form of colorful output, ascii charts, or even animation on the terminal and powerful prompt mechanism. These may contribute to a great user experience for those who have a supported terminal, however it may display garbled text or be completely inoperable for those without it.

To enable users with an unsupported terminal to properly use the Node.js CLI application, you may choose to:

- Auto-detect a terminal capability and evaluate during run-time whether to degrade the CLI interactivity
- Provide an opt-in for users to explicitly toggle a graceful degradation, such as by providing a `--json` command line argument to force it to output raw data.

```
👍  Tip

  Supporting graceful degradation such as JSON output isn't only useful for
  end-users and their unuspported terminals, but is also valuable for running
  in continuous integration environments, as well as enabling users
  the ability to connect your program's output with other program's input or
  export data if needed.
```

</details>

<br/>

### 4.3 Node.js versions compatibility

✅ **Do:**
Target supported and maintained [Node.js versions](https://nodejs.org/en/about/releases).

❌ **Otherwise:**
A code-base that tries to stay compatible with older and unsupported Node.js versions will be difficult to maintain, and lose the benefits of language and runtime features.

<details>
  <summary>➡️ <b>Details</b></summary>

Sometimes it may be necessary to specifically target older Node.js versions that are missing new ECAMScript features. For example, if you are building a Node.js CLI that is mostly geared towards DevOps or IT, they may not have an ideal Node.js environment with an up to date runtime. As a reference, Debian Stretch (oldstable) ships with [Node.js 8.11.1](https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=nodejs).

If you do need to target old versions of Node.js such as Node.js 8, 6 or 4, all of which are End of Life, prefer to use a transpiler such as Babel to make sure the generated code is compliant with the version of the V8 JavaScript engine and the Node.js run-time shipped with those versions.

Another workaround is to provide a containerized version of the CLI to avoid old targets. See Section [(4.1) Containerize the CLI](#containerize-the-cli).

Don't dumb down your program code to use an older ECMAScript language specification that matches unmaintained or EOL Node.js versions as this will only lead to code maintenance issues.

</details>

### 4.4 Shebang autodetect the Node.js runtime

✅ **Do:**
Use an installation-agnostic reference in your [Shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) declaration that locates the Node.js runtime automatically based on the runtime environment.

❌ **Otherwise:**
Using a hard-coded Node.js runtime location such as `#!/usr/local/bin/node` is only specific to your own environment and may render the Node.js CLI inoperable in other environments where the location of Node.js is different.

<details>
  <summary>➡️ <b>Details</b></summary>

It may be an easy start to develop a Node.js CLI by running the entry point file as `node cli.js`, and later on adding `#!/usr/local/bin/node` to the top of the `cli.js` file, however the latter is still a flawed approach as that location of the `node` executable is not guaranteed for other users' environments.

It should be noted that specifying `#!/usr/bin/env node` as the best practice, is still making the assumption that the Node.js runtime is referenced as `node` and not `nodejs` or otherwise.

</details>

# 5 Testing

In this section:
  - 5.1 [Put no trust in locales](#51-put-no-trust-in-locales)

### 5.1 Put no trust in locales

✅ **Do:**
Don't assume output text to be equivalent to a string you assert for because tests may run on systems with different locales than yours, or the English default.

❌ **Otherwise:**
Developers will experience test failures as they test on systems with different locales than the English default.

<details>
  <summary>➡️ <b>Details</b></summary>

As you choose to test the CLI by running it and parsing output, you may be inclined to grep for specific features to ensure that they exist in the output such as properly providing examples when the CLI is ran with no arguments. e.g:

```js
const output = execSync(cli);
expect(output).to.contain("Examples:"));
```

When tests will run on locales that aren't English-based, and if your CLI argument parsing library supports auto-detection of locales and adopting to it, then tests such as this will fail, due to language conversions from `Examples` to the locale-equivalent language being set as the default locale in the system.

</details>

# 6 Errors

This section deals with best practices concerned with making a Node.js CLI application available to users who wish to consume it but are lacking an ideal environment for which the maintainer designed the application.

In this section:
  - 6.1 [Informational errors](#61-informational-errors)
  - 6.2 [Actionable errors](#62-actionable-errors)
  - 6.3 [Provide debug mode](#63-provide-debug-mode)

<br/>

### 6.1 Informational errors

✅ **Do:**
When reporting errors, provide trackable error codes that can be looked up in the project's documentation and so simplify troubleshooting the error message.

If possible, extend informational error messages to any information being displayed so these can be easily parsed and context is clear.

❌ **Otherwise:**
Generic error messages tend to be ambiguous and make it hard for users to search for solutions. Parsing and analyzing isn't as straight-forward, and referencing them in documentation is not as clean either.

<details>
  <summary>➡️ <b>Details</b></summary>

Ensure that, when error messages are returned, they include a reference number or specific error codes that can later be consulted. Much like HTTP status codes, so to do CLI applications require named or coded errors.

Example:

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

</details>

### 6.2 Actionable errors

✅ **Do:**
A failing error message should tell the user what is required as a fix, rather than complaining that there is an error.

❌ **Otherwise:**
Users facing error messages, with no hint of the action to resolve the error, may not be able to successfully use your CLI app.

<details>
  <summary>➡️ <b>Details</b></summary>

Example:

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

</details>

### 6.3 Provide debug mode

✅ **Do:**
Allow power users to enable more detailed information if they need to diagnose problems.

❌ **Otherwise:**
Don't skip debugging capabilities. It will be harder to collect feedback from users, and for them to pinpoint the cause of errors.

<details>
  <summary>➡️ <b>Details</b></summary>

Use environment variables as well as command line arguments to set debug and turn on extended verbosity levels. Where it make sense in your code, plant debug messages that aid the user, and the maintainer, to understand the program flow, inputs and outputs, and other pieces of information that make problem solving easier.

</details>

<details>
  <summary>📦 <b>Recommended packages</b></summary>

Reference to open source packages:

- [debug](https://www.npmjs.com/package/debug)

</details>

---

# Author

**Node.js CLI Apps Best Practices** © [Liran Tal](https://github.com/lirantal), Released under [CC BY-SA 4.0](./LICENSE) License.

# License

[![License](https://badgen.net/badge/License/CC%20BY-SA%204.0/green)](http://creativecommons.org/licenses/by-sa/4.0/)

This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
