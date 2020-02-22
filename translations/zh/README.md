<!-- Project Logo -->
<img src='../../.github/nodejs-cli-apps-best-practices-logo.svg' width="100px" align="left">

<!-- Main Header Links -->
<div align="right">
  <a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">
    <img src="https://badgen.net/badge/Node.js CLI Apps/Best Practices/purple" style="margin:8px;" alt="Node.js CLI Apps Best Practices"/>
  </a>
</div>

<!-- Project Title -->
<h1>Node.js CLI 应用最佳实践</h1>

关于如何构建成功，富有同情心且用户友好的 Node.js 命令行界面（CLI）应用程序的精选最佳实践的集合。

用其他语言阅读: [🇨🇳](./README.md)

### 为什么会有这个指南 ?

一个糟糕的 CLI 可能会轻易阻止用户与其之间的交互。 构建成功的 CLI 需要关注细节以及对用户的同理心，以便于创造良好的用户体验。 这很容易出现差错。

在本指南中，我汇总了各个重点领域的最佳做法，以优化与 CLI 应用进行交互时理想的用户体验。

### 特性:

- ✅ 21 种构建成功 Node.js CLI 应用程序的最佳实践
- ❤️ 帮助翻译成其他语言: [ [🇪🇸](./README-es.md) , [🇩🇪](./README-de.md) , ? ]
- 🙏 欢迎贡献
- ⏰ 最后更新: 2020-02-22

<!-- Shields -->
<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC BY-SA 4.0/green"/></a>
</p>

### 为什么是我?

我叫 Liran Tal，我沉迷于构建命令行应用程序。

我最近的一些工作（构建 Node.js CLI）包括以下开源项目：

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
     <td align="center">
      <a href="https://github.com/lirantal/dockly"><img src="https://repository-images.githubusercontent.com/71667498/d5576f00-69cd-11e9-83dd-2139ad967fdc" width="150px;" alt="dockly - Immersive terminal interface for managing docker containers and services"/><br /><sub><b>Dockly</b></sub></a><br/>用于管理Docker容器和服务的沉浸式终端界面
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/npq"><img src="https://repository-images.githubusercontent.com/114298694/73d29f00-bb7d-11e9-80f5-5f94f25a76b4" width="150px;" alt="npq - safely install packages with npm/yarn by auditing them as part of your install process"/><br /><sub><b>npq</b></sub></a><br/>通过在安装过程中进行审核来安全地使用npm/yarn安装软件包
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/lockfile-lint"><img src="https://repository-images.githubusercontent.com/189734318/e6973f80-e55a-11e9-8446-c63299297f5a" width="150px;" alt="lockfile-lint - Lint an npm or yarn lockfile to analyze and detect security issues"/><br /><sub><b>lockfile-lint</b></sub></a><br/>检测npm或yarn锁定文件以分析和检测安全问题 
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/is-website-vulnerable"><img src="https://repository-images.githubusercontent.com/212983914/2d33b500-e84d-11e9-820e-799f368c4c44" width="150px;" alt="is-website-vulnerable - finds publicly known security vulnerabilities in a website's frontend JavaScript libraries"/><br /><sub><b>is-website-vulnerable</b></sub></a><br/>在网站的前端JavaScript库中发现已知的安全漏洞 
     </td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<a href="https://twitter.com/liran_tal/" alt="follow Liran Tal on twitter"><img src="https://badgen.net/twitter/follow/liran_tal" /></a>

---

<h3>目录</h3>

- 1 命令行体验
  - 1.1 [遵守 POSIX 参数](#11-遵守-POSIX-参数)
  - 1.2 [构建富有同理心的 CLI](#12-构建富有同理心的-CLI)
  - 1.3 [状态数据](#13-状态数据)
  - 1.4 [提供丰富多彩的体验](#14-提供丰富多彩的体验)
  - 1.5 [丰富的互动](#15-丰富的互动)
  - 1.6 [无处不在的超链接](#16-无处不在的超链接)
  - 1.7 [零配置](#17-零配置)
  - 1.8 [遵守 POSIX 信号](#18-遵守-POSIX-信号)
- 2 分发
  - 2.1 [选择体积较小的依赖](#21-选择体积较小的依赖)
  - 2.2 [使用 shrinkwrap, Luke](#22-使用-shrinkwrap,-Luke)
- 3 互通性
  - 3.1 [接受作为 STDIN 的输入](#31-接受作为-STDIN-的输入)
  - 3.2 [启用结构化输出](#32-启用结构化输出)
  - 3.3 [跨平台规范](#33-跨平台规范)
  - 3.4 [允许环境覆盖](#34-允许环境覆盖)
- 4 辅助功能
  - 4.1 [容器化 CLI](#41-容器化-CLI)
  - 4.2 [优雅降级](#42-优雅降级)
  - 4.3 [Node.js 版本兼容性](#43-Node.js-版本兼容性)
  - 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang-自动检测-Node.js-运行时)
- 5 测试
  - 5.1 [不信任语言环境](#51-不信任语言环境)
- 6 错误
  - 6.1 [信息性错误](#61-信息性错误)
  - 6.2 [可行性错误](#62-可行性错误)
  - 6.3 [提供调试模式](#63-提供调试模式)
  - 6.4 [正确使用退出代码](#64-正确使用退出代码)

---

# 1 命令行体验

本节介绍与创建美观和高价值用户体验 Node.js 命令行应用程序有关的最佳实践。

在本节中：

- 1.1 [遵守 POSIX 参数](#11-遵守-POSIX-参数)
- 1.2 [构建富有同理心的 CLI](#12-构建富有同理心的-CLI)
- 1.3 [状态数据](#13-状态数据)
- 1.4 [提供丰富多彩的体验](#14-提供丰富多彩的体验)
- 1.5 [丰富的互动](#15-丰富的互动)
- 1.6 [无处不在的超链接](#16-无处不在的超链接)
- 1.7 [零配置](#17-零配置)
- 1.8 [遵守 POSIX 信号](#18-遵守-POSIX-信号)

<br/>

### 1.1 遵守 POSIX 参数

✅ **可行:**
使用 [符合 POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html) 命令行参数语法，该语法已被广泛接受为命令行工具的标准。

❌ **否则:**
当 CLI 的参数、选项或命令参数的语法偏离他们习惯的 Unix 标准时，用户可能会感到苦恼。

<details>
  <summary>➡️ <b>详情</b></summary>

类 UNIX 操作系统普及了命令行和工具的使用，如`awk`、`sed`。
这些工具有效地标准化了命令行选项(又名标志)、选项参数和其他操作参数的行为。

预期行为的一些示例：

- 选项参数或选项可以在帮助或示例中标记为方括号（`[]`）表示它们是可选的，或带有尖括号（`<>`）表示它们是必需的。
- 使用缩写形式`-`，指定的选项可以包含一个字母数字字符。
- 指定多个没有值的选项可以进行分组，例如`myCli -abc`等同于`myCli -a -b -c`。

命令行高级用户希望您的命令行应用程序与其他 Unix 应用程序具有相似的约定。

</details>

### 1.2 构建富有同理心的 CLI

✅ **可行:**
放置可帮助用户成功与 CLI 进行交互的工作流，否则这些交互会导致错误和挫败感。

❌ **否则:**
如果不提供可操作的帮助来支持用户，将由于缺乏操作 CLI 的能力而导致沮丧。

<details>
  <summary>➡️ <b>详情</b></summary>

一个程序的命令行界面与 web 用户界面没有什么不同，因为您可以按照程序作者的意愿完成尽可能多的工作，以确保它被成功地使用。

通过构建支持与用户共情的 CLI 来优化成功的交互。作为一个示例，让我们研究一下`curl`程序的情况，该程序期望将 URL 作为其主要数据输入，而用户没有提供它。此类故障将导致（希望）读取描述性错误消息或查看`curl --help`输出。然而，一个富有同理心的 CLI 应该提供一个交互式的提示来捕获来自用户的输入，从而实现成功的交互。

</details>

### 1.3 状态数据

✅ **可行:**
在多次调用 CLI 应用程序之间提供有状态的体验，并记住值和数据，以提供无缝的交互。

❌ **否则:**
要求您的用户通过多次调用 CLI 重复提供相同的信息，将会使您的用户感到烦恼。

<details>
  <summary>➡️ <b>详情</b></summary>

您可能会发现自己需要为 CLI 应用程序提供存储持久性，例如在多次调用 CLI 之间记住用户名、电子邮件、API 令牌或其他首选项。使用允许应用程序保留此类用户设置的配置助手。读/写文件时一定要遵循[XDG 基本目录规范](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)(或选择一个符合规范的配置助手). 这使用户能够控制写入和管理文件的位置。

参考项目：

- [configstore](https://www.npmjs.com/package/configstore)
- [conf](https://www.npmjs.com/package/conf)

</details>

### 1.4 提供丰富多彩的体验

✅ **可行:**
Make use of colors in your CLI application to highlight parts of your app's output, and provide a graceful degradation, or color detection, to allow automatic opt-out so that output isn't garbled.

❌ **否则:**
Information may easily get lost in pale program output, especially when the output is text-heavy.

<details>
  <summary>➡️ <b>详情</b></summary>

Most terminals used today to interact with command line applications support colored text such as these enabled by specially crafted ANSI encoded characters.

A colorful display in your command line application output may further contribute to a richer experience and increased interaction. That said, unsupported terminals may experience a degraded output in the form of garbled information on the screen. Furthermore, a CLI may be used in a continuous integration build job which may not support colored output.

Reference projects:

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

</details>

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>

Reference to open source packages:

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

</details>

### 1.5 丰富的互动

✅ **可行:**
Leverage the use of rich command line interactions beyond the basics of text input prompt to provide a smoother experience for CLI users.

❌ **否则:**
A text prompt as input may prove cumbersome for users when data to reason about is in the form of closed options (i.e: dropdowns).

<details>
  <summary>➡️ <b>详情</b></summary>

Rich interactivity can be introduced in the form of prompt inputs, which are more sophisticated than free text, such as dropdown select lists, radio button toggles, rating, auto-complete, or hidden password inputs.

Another type of rich interactivity is in the form of animated loaders and progress-bars which provide a better experience for users when asynchronous work is being performed.

Many CLIs provide default command line arguments without requiring any further interactive experience. Don't force your users to provide parameters that the app can work out for itself.

</details>

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>

Reference to open source packages:

- [enquirer](https://www.npmjs.com/package/enquirer)
- [ora](https://www.npmjs.com/package/ora)
- [ink](https://www.npmjs.com/package/ink)
- [prompts](https://www.npmjs.com/package/prompts)

</details>

### 1.6 无处不在的超链接

✅ **可行:**
Use properly formatted hyperlinks in text output for both URLs (e.g: `https://www.github.com`), as well as source code (e.g: `src/Util.js:2:75`) - both of which a modern terminal is able to transform into a clickable link.

❌ **否则:**
Avoid broken and non-interactive links like `git.io/abc` which requires your user to copy and paste manually.

<details>
  <summary>➡️ <b>详情</b></summary>

If you are sharing links to URLs, or pointing to a file and a specific line number and column in the file, you can provide properly formatted links to both of these examples that, once clicked, will open up the browser, or an IDE at the defined location.

</details>

### 1.7 零配置

✅ **可行:**
Optimize a plug-and-play experience by auto-detecting required configuration and command line arguments values

❌ **否则:**
Don't force user interactivity if a command-line argument can be auto-detected in a reliable way, and the action invoked doesn't explicitly require user interaction (such as confirming a deletion).

<details>
  <summary>➡️ <b>详情</b></summary>

Aim to provide a "works out of the box" experience when running the CLI application.

Reference projects which are built around 零配置:

- The [Jest JavaScript Testing Framework](https://jestjs.io)
- [Parcel](https://parceljs.org), a web application bundler

</details>

### 1.8 遵守 POSIX 信号

✅ **可行:**
Ensure your program respects [POSIX signals](http://man7.org/linux/man-pages/man7/signal.7.html) to allow it proper interaction with users or other programs.

❌ **否则:**
Your program will not play well with other programs and introduce unexpected behavior.

<details>
  <summary>➡️ <b>详情</b></summary>

Especially for CLI applications, it is common to interact with user input and improperly managing keyboard events
may result in your app failing to respond to SIGINT interrupts, commonly used by users when they hit the `CTRL+C` keys.

The problem of not respecting process signals worsens when the program is being orchestrated by non-human interaction. For example, a CLI that runs in a docker container but will not respond to software interrupt signals sent to it.

</details>

# 2 分发

This section deals with best practices concerned with distributing and packaging a Node.js command line application in an optimal matter for consumers.

在本节中：

- 2.1 [选择体积较小的依赖](#21-prefer-a-small-dependency-footprint)
- 2.2 [使用 shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)

### 2.1 选择体积较小的依赖

✅ **可行:**
Minimize your use of production dependencies, use alternative dependencies which are smaller, and vet your dependencies' footprints as well for transitive dependencies to ensure a small bundle of the Node.js CLI. Balance this by being careful to not over-optimize use of dependencies by reinventing the wheel.

❌ **否则:**
The size and use of dependencies in the application will impact the install time of your Node.js CLI, potentially providing a poor user experience.

<details>
  <summary>➡️ <b>详情</b></summary>

A fast `npm install` for Node.js CLIs invoked with `npx` will provide a better user experience. This is made possible when the overall dependency, and transitive dependency, footprint is kept to a reasonable size.

A one-off global `npm` installation of a slow-to-install `npm` package will offer a one-off poor experience, but the use of `npx` by users to invoke executable packages will make the degraded performance, due to `npx` always fetching and installing packages from the registry, more significant and obvious.

</details>

### 2.2 使用 shrinkwrap, Luke

✅ **可行:**
Use npm's `npm-shrinkwrap.json` as a lockfile to ensure that pinned-down dependency versions (direct and transitive) propagate to your end users when they install your npm package.

❌ **否则:**
Not fixing the versions of your app's dependencies will mean that the package manager (e.g. `npm`) will resolve them during installation, and transitive dependencies installed via version ranges may introduce breaking changes that you can't control, that may result in your Node.js CLI application failing to build or run.

<details>
  <summary>➡️ <b>详情</b></summary>

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

# 3 互通性

This section deals with best practices concerned with making your Node.js CLI seamlessly integrate with other command line tools, and following conventions that are natural for CLIs to operate in.

This section answers questions such as:

- _Can I export the output of this CLI for easy parsing?_
- _Can I pipe the output of this CLI to the input of another command line tool?_
- _Can I pipe the result of another tool to this CLI?_

在本节中：

- 3.1 [接受作为 STDIN 的输入](#31-接受作为-STDIN-的输入)
- 3.2 [启用结构化输出](#32-启用结构化输出)
- 3.3 [跨平台规范](#33-跨平台规范)
- 3.4 [允许环境覆盖](#34-允许环境覆盖)

### 3.1 接受作为 STDIN 的输入

✅ **可行:**
For command line applications that are expected to work with data, make it easy for a user to pipe the data to standard input (STDIN).

❌ **否则:**
Other command line applications will not be able to provide their result, directly as input for your CLI, which prevents common UNIX one-liners such as:

```sh
$ curl -s "https://api.example.com/data.json" | your_node_cli
```

<details>
  <summary>➡️ <b>详情</b></summary>

If the command line application works with data, such as performing some kind of task on a JSON file that is usually specified with `--file <file.json>` command line argument.

</details>

### 3.2 启用结构化输出

✅ **可行:**
Enable a flag to allow structured output of the app's result, if such result is available, to enable parsing and easy manipulation of the data.

❌ **否则:**
Users of the CLI may need to apply complicated regex parsing and matching techniques to extract the output data provided by your CLI.

<details>
  <summary>➡️ <b>详情</b></summary>

It is often useful for users of a command line application to parse the data and perform other tasks with it, such as using it to feed web dashboards, or email notifications.

Being able to easily extract the data of interest from a command line output provides a friendlier experience to users of your CLI.

</details>

### 3.3 跨平台规范

✅ **可行:**
If a CLI is expected to function across platforms, proper attention must be given to semantics of command shells, and components such as file systems, along with developers leveraging relevant programming constructs.

❌ **否则:**
The CLI will break on other operating systems due to factors such as incorrect path separator characters, even though there are no functional differences in the code.

<details>
  <summary>➡️ <b>详情</b></summary>

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

Why is it better? The `program.js` source code begins with the Unix-like [Shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) notation, however Windows doesn't know how to interpret this due to the fact that Shebang isn't a cross-platform standard.

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
const myPath = `${__dirname}/../bin/myBin.js`;
```

It assumes that forward slash is the path separator where on Windows, for example,
a backslash is used.

Instead of manually building filesystem paths, defer to Node.js's own `path`
module to do this:

```js
const myPath = path.join(__dirname, "..", "bin", "myBin.js");
```

#### Avoid chaining commands with semicolons

Linux shells are known to support a semicolon (`;`) to chain commands to run
sequentially, such as: `cd /tmp; ls`. However, doing the same on Windows will fail.

Avoid doing the following:

```js
const process = childProcess.exec(`${cliExecPath}; ${cliExecPath2}`);
```

Instead, use the double ampersand or double pipe notations:

```js
const process = childProcess.exec(`${cliExecPath} || ${cliExecPath2}`);
```

</details>

### 3.4 允许环境覆盖

✅ **可行:**
Allow configuration to be read from environment variables, and when it conflicts with command line arguments then allow environment variables to override.

❌ **否则:**
Invoking the CLI with customized configuration will not be possible.

<details>
  <summary>➡️ <b>详情</b></summary>

Detect and support configuration setting using environment variables as this will be a common way in many toolchains to modify the behavior of the invoked CLI application.

Moreover, a CLI application may be invoked in a way that requires a dynamic environment variable setting to resolve configuration or flag values, in a way that doesn't allow passing command line arguments or simply makes defining this information via command line arguments veryrepetitive and cumbersome.

When both a command line argument and an environment variable configure the same setting, a precedence should be granted to environment variables to override the setting.

</details>

# 4 辅助功能

This section deals with best practices concerned with making a Node.js CLI application available to users who wish to consume it, but who are lacking the environment for which the maintainer designed the application.

在本节中：

- 4.1 [容器化 CLI](#41-容器化-CLI)
- 4.2 [优雅降级](#42-优雅降级)
- 4.3 [Node.js 版本兼容性](#43-Node.js-版本兼容性)
- 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang-自动检测-Node.js-运行时)

### 4.1 容器化 CLI

✅ **可行:**
Create a docker image for the CLI and publish it to a public registry like Docker Hub so that users without a Node.js environment can use it.

❌ **否则:**
Users without a Node.js environment will not have `npm` or `npx` available, and so won't be able to run your CLI application.

<details>
  <summary>➡️ <b>详情</b></summary>

Installing Node.js CLI applications from the npm registry will typically be done with Node.js native toolchain such as `npm` or `npx`. These are common across JavaScript and Node.js developers, and are expected to be referenced within install instructions.

However, if you are targeting a CLI application to be consumed by the general public, regardless of their familiarity with JavaScript, or availability of this tooling, then distributing your CLI application only in the form of an install from the npm registry will be restricting. If your CLI application is intended to be used in a build or CI environment then those may also be required to install Node.js related toolchain dependencies.

There are many ways to package and distribute an executable, and containerizing it as a Docker container that is pre-bundled with your CLI application is an easily consumable alternative and dependency-free (aside of requiring a Docker environment).

</details>

### 4.2 优雅降级

✅ **可行:**
Provide users with the ability to opt-out of colorful and animation-rich display in unsupported environments, such as by skipping interactivity and providing formatted output in the form of JSON.

❌ **否则:**
Having colorful output, using terminal interactive such as prompts and other display-rich interfaces may significantly degrade the end user experience for users not having a supported terminal and deter them away from using your CLI application.

<details>
  <summary>➡️ <b>详情</b></summary>

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

### 4.3 Node.js 版本兼容性

✅ **可行:**
Target supported and maintained [Node.js versions](https://nodejs.org/en/about/releases).

❌ **否则:**
A code-base that tries to stay compatible with older and unsupported Node.js versions will be difficult to maintain, and lose the benefits of language and runtime features.

<details>
  <summary>➡️ <b>详情</b></summary>

Sometimes it may be necessary to specifically target older Node.js versions that are missing new ECAMScript features. For example, if you are building a Node.js CLI that is mostly geared towards DevOps or IT, they may not have an ideal Node.js environment with an up to date runtime. As a reference, Debian Stretch (oldstable) ships with [Node.js 8.11.1](https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=nodejs).

If you do need to target old versions of Node.js such as Node.js 8, 6 or 4, all of which are End of Life, prefer to use a transpiler such as Babel to make sure the generated code is compliant with the version of the V8 JavaScript engine and the Node.js run-time shipped with those versions.

Another workaround is to provide a containerized version of the CLI to avoid old targets. See Section [(4.1) 容器化 CLI](#容器化-CLI).

Don't dumb down your program code to use an older ECMAScript language specification that matches unmaintained or EOL Node.js versions as this will only lead to code maintenance issues.

</details>

### 4.4 Shebang 自动检测 Node.js 运行时

✅ **可行:**
Use an installation-agnostic reference in your [Shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) declaration that locates the Node.js runtime automatically based on the runtime environment.

❌ **否则:**
Using a hard-coded Node.js runtime location such as `#!/usr/local/bin/node` is only specific to your own environment and may render the Node.js CLI inoperable in other environments where the location of Node.js is different.

<details>
  <summary>➡️ <b>详情</b></summary>

It may be an easy start to develop a Node.js CLI by running the entry point file as `node cli.js`, and later on adding `#!/usr/local/bin/node` to the top of the `cli.js` file, however the latter is still a flawed approach as that location of the `node` executable is not guaranteed for other users' environments.

It should be noted that specifying `#!/usr/bin/env node` as the best practice, is still making the assumption that the Node.js runtime is referenced as `node` and not `nodejs` or otherwise.

</details>

# 5 测试

在本节中：

- 5.1 [不信任语言环境](#51-不信任语言环境)

### 5.1 不信任语言环境

✅ **可行:**
Don't assume output text to be equivalent to a string you assert for because tests may run on systems with different locales than yours, or the English default.

❌ **否则:**
Developers will experience test failures as they test on systems with different locales than the English default.

<details>
  <summary>➡️ <b>详情</b></summary>

As you choose to test the CLI by running it and parsing output, you may be inclined to grep for specific features to ensure that they exist in the output such as properly providing examples when the CLI is ran with no arguments. e.g:

```js
const output = execSync(cli);
expect(output).to.contain("Examples:"));
```

When tests will run on locales that aren't English-based, and if your CLI argument parsing library supports auto-detection of locales and adopting to it, then tests such as this will fail, due to language conversions from `Examples` to the locale-equivalent language being set as the default locale in the system.

</details>

# 6 错误

This section deals with best practices concerned with making a Node.js CLI application available to users who wish to consume it but are lacking an ideal environment for which the maintainer designed the application.

在本节中：

- 6.1 [信息性错误](#61-信息性错误)
- 6.2 [可行性错误](#62-可行性错误)
- 6.3 [提供调试模式](#63-提供调试模式)
- 6.4 [正确使用退出代码](#64-正确使用退出代码)

<br/>

### 6.1 信息性错误

✅ **可行:**
When reporting errors, provide trackable error codes that can be looked up in the project's documentation and so simplify troubleshooting the error message.

If possible, extend informational error messages to any information being displayed so these can be easily parsed and context is clear.

❌ **否则:**
Generic error messages tend to be ambiguous and make it hard for users to search for solutions. Parsing and analyzing isn't as straight-forward, and referencing them in documentation is not as clean either.

<details>
  <summary>➡️ <b>详情</b></summary>

Ensure that, when error messages are returned, they include a reference number or specific error codes that can later be consulted. Much like HTTP status codes, so to do CLI applications require named or coded errors.

Example:

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

</details>

### 6.2 可行性错误

✅ **可行:**
A failing error message should tell the user what is required as a fix, rather than complaining that there is an error.

❌ **否则:**
Users facing error messages, with no hint of the action to resolve the error, may not be able to successfully use your CLI app.

<details>
  <summary>➡️ <b>详情</b></summary>

Example:

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

</details>

### 6.3 提供调试模式

✅ **可行:**
Allow power users to enable more detailed information if they need to diagnose problems.

❌ **否则:**
Don't skip debugging capabilities. It will be harder to collect feedback from users, and for them to pinpoint the cause of errors.

<details>
  <summary>➡️ <b>详情</b></summary>

Use environment variables as well as command line arguments to set debug and turn on extended verbosity levels. Where it make sense in your code, plant debug messages that aid the user, and the maintainer, to understand the program flow, inputs and outputs, and other pieces of information that make problem solving easier.

</details>

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>

Reference to open source packages:

- [debug](https://www.npmjs.com/package/debug)

</details>

### 6.4 正确使用退出代码

✅ **可行:**
Terminate your program with proper exit codes that convey a semantic meaning of the error or exit status.

❌ **否则:**
An incorrect or missing exit code will impede the use of your CLI in a continuous integration flows and other command line scripting use-cases.

<details>
  <summary>➡️ <b>详情</b></summary>

Command line scripts often make use of the shell's `$?` to infer a program's status code and act upon it. This is also utilized in continuous integratio (CI) flows to determine whether a step completed successfully or not.

If your CLI always terminates with no specific status code, even on errors, then the shell and other programs that rely upon it have no way of knowing this. When an error happens that results in your program's termination, you should convey this meaning. For example:

```js
try {
  // something
} catch (err) {
  // cleanup or otherwise
  // then exit with proper status code
  process.exit(1);
}
```

A short reference for exit codes:

- exit code 0 conveys a successful execution
- exit code 1 conveys a failure

You may also choose to use customized exit codes with semantics of your program, but if you do, be sure to document them properly.

Reference: A [list of exit codes](http://www.tldp.org/LDP/abs/html/exitcodes.html) used by the BASH shell

</details>

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>

Reference to open source packages:

- [debug](https://www.npmjs.com/package/debug)

</details>

---

# 作者

**Node.js CLI 应用最佳实践** © [Liran Tal](https://github.com/lirantal), 根据 [CC BY-SA 4.0](./LICENSE) 许可证发行。

# 许可证

[![License](https://badgen.net/badge/License/CC%20BY-SA%204.0/green)](http://creativecommons.org/licenses/by-sa/4.0/)

本作品采用知识共享署名-ShareAlike 4.0 国际许可协议授权。
