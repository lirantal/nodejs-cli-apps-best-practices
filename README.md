<!-- Project Logo -->
<img src='.github/nodejs-cli-apps-best-practices-logo.svg' width="100px" align="left">

<!-- Main Header Links -->
<div align="right">
	<a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">
		<img src="https://badgen.net/badge/Node.js CLI Apps/Best Practices/purple" style="margin:8px;" alt="Node.js CLI Apps Best Practices">
	</a>
</div>

<!-- Project Title -->
<h1>Node.js CLI Apps Best Practices</h1>

A collection of curated best practices on how to build successful, empathic and user-friendly Node.js Command Line Interface applications.

- 8 best practices for building successful Node.js CLI applications
- Read in other languages: [ [🇪🇸](./README-es.md) , [🇩🇪](./README-de.md) ]
- Last update: 2019-12-29
- <a href="https://twitter.com/liran_tal/" alt="follow Liran Tal twitter">Follow me</a> on twitter for more updates

<!-- Shields -->
<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC BY-SA 4.0/gray"></a>
<a href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8" target="_blank">
  <img src="https://img.shields.io/badge/Rating-&starf;&starf;&starf;&starf;&starf;-brightgreen.svg">
</a>
<a href="https://twitter.com/liran_tal/" alt="follow Liran Tal twitter"><img src="https://badgen.net/twitter/follow/liran_tal" /></a>
</p>

<hr/>

<h3>Table of Contents</h3>

- (1) Command Line Experience
- (2) Distribution
- (3) Interoperability
- (4) Accessibility
  - (4.1) [Containerize the CLI](#containerize-the-cli)
  - (4.2) [Graceful downplay](#graceful-downplay)

## (3) Interoperability

This section deals with best practices concerned with making the Node.js CLI seamlessly integrate with other command line tools and conventions which are natural for CLIs to operate in.

This section answer questions such as:

- _Can I export the output of this CLI for easy parsing?_
- _Can I pipe the output of this CLI to the input of another command line tool?_
- _Can I pipe the result of another tool to this CLI?_

## (4) Accessibility

This section deals with best practices concerned with making a Node.js CLI application available to users who wish to consume it but are lacking an ideal environment than that which the maintainer designed the application.

### (4.1) Containerize the CLI

✅ **Do:**
Create a docker image for the CLI and publish it to a public registry like Docker Hub so that users without a Node.js environment can use it.

❌ **Otherwise:**
Users without a Node.js environment will not have `npm` easily available and won't be able to run your CLI application.

<details>
	<summary>➡️ <b>Details</b></summary>

Installing Node.js CLI applications from the npm registry will typically be done with Node.js native toolchain such as `npm` or `npx`. These are common across JavaScript and Node.js developers, and are expected to be referenced within install instructions.

However, if you are targeting a CLI application to be consumed by the general public, regardless of their affiliation with JavaScript or availability of this tooling, then distributing the CLI application only in the form of an install from the npm registry will be restricting. Moreover, if the CLI application is intended to be used in a build or CI environment then those may also be required to install Node.js related toolchain dependencies.

There are many forms of packaging and distributing an executable and containerizing it as a Docker container that is pre-bundled with your CLI application is an easily consumable alternative and dependency-free (aside of requiring a Docker environment ready).

</details>

<hr/>

# Author

**Node.js CLI Apps Best Practices** © [Liran Tal](https://github.com/lirantal), Released under [CC BY-SA 4.0](./LICENSE) License.

# License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
