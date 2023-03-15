<p align="center">
  <img src=".github/node-js-cli-apps-best-practices.png" height="400px" />
</p>

<p align="center">
  <h1 align="center">Node.js CLI 应用程序最佳实践</h1>
一个关于如何构建成功，富有同情心且用户友好的 Node.js 命令行界面（CLI）应用程序的精选最佳实践的集合。
</p>

### 为什么使用本指南？

一个糟糕的 CLI 会很轻易打断用户与其之间的交互。构建成功的 CLI 需要关注细节以及对用户的同理心，以便创造良好的用户体验。这非常容易出错。 在本指南中，我整理了一个重点领域的最佳实践列表，旨在优化与 CLI 应用程序交互时的理想用户体验。 这很容易出错

在本指南中，我整理了一个重点领域的最佳实践列表，目的是在优化与 CLI 应用程序交互时的理想用户体验。

### 特点:

- ✅ 29 种构建成功的 Node.js CLI 应用程序的最佳实践
- ✅ Read in a different language: [🇨🇳](./README_zh-Hans.md), [🇪🇸](./README_es.md), or [help translate](https://crowdin.com/project/nodejs-cli-apps-best-practices) to other languages. [Suggest new languages](https://crowdin.com/project/nodejs-cli-apps-best-practices/discussions).
- 🙏 欢迎贡献

<!-- Shields -->
<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC BY-SA 4.0/green"/></a>
<img src="https://badgen.net/badge/Last%20Update/Jan%202021/green" />
<a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">
  <img src="https://badgen.net/badge/Node.js CLI Apps/Best Practices/purple" alt="Node.js CLI Apps Best Practices"/>
</a>
<a href="https://crowdin.com/project/nodejs-cli-apps-best-practices" target="_blank">
  <img src="https://badges.crowdin.net/nodejs-cli-apps-best-practices/localized.svg"/>
</a>
</p>

### 为什么是我？

嗨，我是 [Liran Tal](https://twitter.com/liran_tal)，我沉迷于构建命令行应用程序。

我最近的一些工作，构建 Node.js CLI，包括以下开源项目：

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
     <td align="center">
      <a href="https://github.com/lirantal/dockly"><img width="150px;" alt="dockly - Immersive terminal interface for managing docker containers and services" src="https://repository-images.githubusercontent.com/71667498/d5576f00-69cd-11e9-83dd-2139ad967fdc"><br><sub><b>Dockly</b></sub></a><br>用于管理 docker 容器和服务的沉浸式终端界面
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/npq"><img width="150px;" alt="npq - safely install packages with npm/yarn by auditing them as part of your install process" src="https://repository-images.githubusercontent.com/114298694/73d29f00-bb7d-11e9-80f5-5f94f25a76b4"><br><sub><b>npq</b></sub></a><br>通过将软件包作为安装过程的一部分进行审核，使用 npm/yarn 安全安装软件包
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/lockfile-lint"><img width="150px;" alt="lockfile-lint - Lint an npm or yarn lockfile to analyze and detect security issues" src="https://repository-images.githubusercontent.com/189734318/d2d03200-5bfb-11ea-9eb6-70144dbe2197"><br><sub><b>lockfile-lint</b></sub></a><br>创建 npm 或 yarn 锁定文件以分析和检测安全问题
     </td>
     <td align="center">
      <a href="https://github.com/lirantal/is-website-vulnerable"><img width="150px;" alt="is-website-vulnerable - finds publicly known security vulnerabilities in a website's frontend JavaScript libraries" src="https://repository-images.githubusercontent.com/212983914/2d33b500-e84d-11e9-820e-799f368c4c44"><br><sub><b>is-website-vulnerable</b></sub></a><br>在网站的前端 JavaScript 库中查找已知的安全漏洞
     </td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

### 该团队 ✨

感谢这些优秀的人们([表情符号键](https://allcontributors.org/docs/en/emoji-key) ):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://blog.vvni.top/"><img src="https://avatars2.githubusercontent.com/u/50414099?v=4" width="100px;" alt=""/><br /><sub><b>Vanilla</b></sub></a><br /><a href="#translation-vvni" title="Translation">🌍</a></td>
    <td align="center"><a href="https://terkel.com"><img src="https://avatars2.githubusercontent.com/u/2302254?v=4" width="100px;" alt=""/><br /><sub><b>Terkel</b></sub></a><br /><a href="#content-terkelg" title="Content">🖋</a></td>
    <td align="center"><a href="http://jasonkarns.com"><img src="https://avatars2.githubusercontent.com/u/119972?v=4" width="100px;" alt=""/><br /><sub><b>Jason Karns</b></sub></a><br /><a href="#content-jasonkarns" title="Content">🖋</a></td>
    <td align="center"><a href="https://about.me/davesag"><img src="https://avatars0.githubusercontent.com/u/387098?v=4" width="100px;" alt=""/><br /><sub><b>Dave Sag</b></sub></a><br /><a href="#maintenance-davesag" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://josejpr.com"><img src="https://avatars0.githubusercontent.com/u/12954959?v=4" width="100px;" alt=""/><br /><sub><b>José J. Pérez Rivas</b></sub></a><br /><a href="#translation-JoseJPR" title="Translation">🌍</a></td>
    <td align="center"><a href="https://twitter.com/MSuresh100"><img src="https://avatars3.githubusercontent.com/u/12813750?v=4" width="100px;" alt=""/><br /><sub><b>Sureshraj</b></sub></a><br /><a href="#content-m-sureshraj" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

<h3>目录</h3>

- 1 命令行体验
  - 1.1 [遵守 POSIX 参数](#11-%E9%81%B5%E5%AE%88POSIX%E5%8F%82%E6%95%B0)
  - 1.2 [构建富有同理心的 CLI](#12-%E6%9E%84%E5%BB%BA%E5%AF%8C%E6%9C%89%E5%90%8C%E7%90%86%E5%BF%83%E7%9A%84CLI)
  - 1.3 [有状态数据](#13-%E6%9C%89%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE)
  - 1.4 [提供富有色彩的体验](#14-%E6%8F%90%E4%BE%9B%E5%AF%8C%E6%9C%89%E8%89%B2%E5%BD%A9%E7%9A%84%E4%BD%93%E9%AA%8C)
  - 1.5 [丰富的交互](#15-%E4%B8%B0%E5%AF%8C%E7%9A%84%E4%BA%A4%E4%BA%92)
  - 1.6 [无处不在的超链接](#16-%E6%97%A0%E5%A4%84%E4%B8%8D%E5%9C%A8%E7%9A%84%E8%B6%85%E9%93%BE%E6%8E%A5)
  - 1.7 [零配置](#17-%E9%9B%B6%E9%85%8D%E7%BD%AE)
  - 1.8 [遵守 POSIX 信号](#18-%E9%81%B5%E5%AE%88POSIX%E4%BF%A1%E5%8F%B7)
- 2 分发
  - 2.1 [选择占用较小的依赖项](#21-%E9%80%89%E6%8B%A9%E5%8D%A0%E7%94%A8%E8%BE%83%E5%B0%8F%E7%9A%84%E4%BE%9D%E8%B5%96%E9%A1%B9)
  - 2.2 [使用 shrinkwrap, Luke](#22-%E4%BD%BF%E7%94%A8shrinkwrap,-Luke)
  - 2.3 [清理配置文件](#23-清理配置文件)
- 3 互通性
  - 3.1 [接受 STDIN 输入](#31-%E6%8E%A5%E5%8F%97STDIN%E8%BE%93%E5%85%A5)
  - 3.2 [启用结构化输出](#32-%E5%90%AF%E7%94%A8%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA)
  - 3.3 [跨平台规范](#33-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E8%A7%84%E8%8C%83)
  - 3.4 [支持配置优先](#34-支持配置优先)
- 4 辅助功能
  - 4.1 [容器化 CLI](#41-%E5%AE%B9%E5%99%A8%E5%8C%96CLI)
  - 4.2 [优雅降级](#42-%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7)
  - 4.3 [Node.js 版本兼容性](#43-Node.js%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E6%80%A7)
  - 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang%E8%87%AA%E5%8A%A8%E6%A3%80%E6%B5%8BNode.js%E8%BF%90%E8%A1%8C%E6%97%B6)
- 5 测试
  - 5.1 [不信任语言环境](#51-不信任语言环境)
- 6 错误
  - 6.1 [可追踪的错误](#61-可追踪的错误)
  - 6.2 [可行性错误](#62-%E5%8F%AF%E8%A1%8C%E6%80%A7%E9%94%99%E8%AF%AF)
  - 6.3 [提供调试模式](#63-%E6%8F%90%E4%BE%9B%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F)
  - 6.4 [正确使用退出代码](#64-%E6%AD%A3%E7%A1%AE%E4%BD%BF%E7%94%A8%E9%80%80%E5%87%BA%E4%BB%A3%E7%A0%81)
  - 6.5 [轻松的错误报告](#65-轻松的错误报告)
- 7 开发
  - 7.1 [使用 bin 对象](#71-%E4%BD%BF%E7%94%A8bin%E5%AF%B9%E8%B1%A1)
  - 7.2 [使用相对路径](#72-使用相对路径)
  - 7.3 [使用 files 字段](#73-使用files字段)
- 8 分析
  - 8.1 [严格选择加入分析](#81-严格选择加入分析)
- 9 附录: CLI 框架
  - 9.1 [CLI 框架表](#91-cli-frameworks-table)
- 10 Appendix: CLI educational resources

---

# 1 命令行体验

本节介绍有关创建漂亮且高价值用户体验的 Node.js 命令行应用程序最佳实践。

在本节中：

- 1.1 [遵守 POSIX 参数](#11-%E9%81%B5%E5%AE%88POSIX%E5%8F%82%E6%95%B0)
- 1.2 [构建富有同理心的 CLI](#12-%E6%9E%84%E5%BB%BA%E5%AF%8C%E6%9C%89%E5%90%8C%E7%90%86%E5%BF%83%E7%9A%84CLI)
- 1.3 [有状态数据](#13-%E6%9C%89%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE)
- 1.4 [提供富有色彩的体验](#14-%E6%8F%90%E4%BE%9B%E5%AF%8C%E6%9C%89%E8%89%B2%E5%BD%A9%E7%9A%84%E4%BD%93%E9%AA%8C)
- 1.5 [丰富的交互](#15-%E4%B8%B0%E5%AF%8C%E7%9A%84%E4%BA%A4%E4%BA%92)
- 1.6 [无处不在的超链接](#16-%E6%97%A0%E5%A4%84%E4%B8%8D%E5%9C%A8%E7%9A%84%E8%B6%85%E9%93%BE%E6%8E%A5)
- 1.7 [零配置](#17-%E9%9B%B6%E9%85%8D%E7%BD%AE)
- 1.8 [遵守 POSIX 信号](#18-%E9%81%B5%E5%AE%88POSIX%E4%BF%A1%E5%8F%B7)

<br/>

### 1.1 遵守 POSIX 参数

✅ **可行:** 使用 [兼容 POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html) 的命令行参数语法，该语法已被广泛接受为命令行工具的标准。

❌ **否则:** 当 CLI 的参数、选项或命令参数的语法偏离他们习惯的 Unix 标准时，用户可能会感到苦恼。

ℹ️ **详情**

类 Unix 的操作系统普及了使用命令行和诸如 `awk`，`sed` 工具。 这样的工具已经有效地标准化了命令行选项（又名标志），选项参数和其他操作的行为。

预期行为的一些示例：

- 可以在帮助或示例中将选项参数或选项标记为方括号（ `[]` ）表示它们是可选的，或带有尖括号（ `<>` ）表示它们是必需的。
- 允许使用短格式的单个字母参数作为长格式参数的别名(请参阅[GNU 编码标准](https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html)).
- options specified using the short form singular `-` may contain one alphanumeric character.
- 指定多个没有值的选项可以进行分组，例如 `myCli -abc` 等效于 `myCli -a -b -c`。

命令行高级用户希望您的命令行应用程序具有与其他 Unix 应用程序类似的约定。

📦 **推荐的软件包**

对开源 Node.js 包的参考：

- [commander](https://github.com/tj/commander.js/blob/master/README_zh-Hans.md)
- [yargs](https://github.com/yargs/yargs)

### 1.2 构建富有同理心的 CLI

✅ **可行:** 将工作流放置在适当的位置，以帮助用户成功与 CLI 进行交互，否则将导致错误和挫败感。

❌ **否则:** 如果不能在支持用户方面提供可操作的帮助，将会因为缺乏操作 CLI 的能力而导致受挫。

ℹ️ **详情**

一个程序的命令行界面与 web 用户界面没有什么不同，因为您可以按照程序作者的意愿完成尽可能多的工作，以确保它被成功地使用。

通过构建支持代入用户感受的 CLI 来优化成功的交互。 作为一个例子，让我们研究一下 `curl` 程序期望 URL 作为其主要数据输入，而用户未能提供它的情况。 此类失败将导致阅读（希望）描述性错误消息或查看 `curl --help` 输出。 然而，考虑用户感受的 CLI 会呈现一个交互式提示来捕获用户的输入，从而实现成功的交互。

### 1.3 状态数据

✅ **可行:** 在 CLI 应用程序的多次调用之间提供有状态的体验，并记住值和数据以提供无缝交互。

❌ **否则:** 要求您的用户在多次调用 CLI 时重复提供相同的信息会惹恼您的用户。

ℹ️ **详情**

你可能发现自己需要为你的 CLI 应用程序提供存储持久性。 例如记住用户名、电子邮件、API令牌或多次使用 CLI 之间的其他首选项。 使用配置助手，允许应用程序持续使用此用户设置。 在阅读/写入文件时请务必遵循 [XDG 基础目录规格](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) (或选择一个尊重该数据的配置助理)。 这使用户能够控制文件的编写和管理位置。

参考项目：

- [configstore](https://www.npmjs.com/package/configstore)
- [conf](https://www.npmjs.com/package/conf)

### 1.4 提供富有色彩的体验

✅ **可行：** 在 CLI 应用程序中使用颜色来突出显示应用程序输出的部分内容，并提供优雅的降级或颜色检测，以允许自动退出，以免输出出现乱码。 通过 CLI 选项、环境变量和/或配置文件确保手动选入和退出是可以的。

❌ **否则:** 苍白的程序输出中可能容易丢失信息，尤其是当输出文本繁重的时候。

ℹ️ **详情**

大多数今天用于与命令行应用程序交互的终端支持颜色文本，例如由特制的 ANSI 编码的字符开启。

您的命令行应用程序输出中的彩色显示可能会进一步促进更丰富的体验和增强互动。 尽管如此，不受支持的终端可能会在屏幕上以累赘信息的形式出现退化的输出。 此外，CLI 可能被用于不支持彩色输出的持续集成构建作业。 如今，大多数用于与命令行应用程序交互的终端都支持彩色文本，例如通过特制 ANSI 编码字符启用的文本。 命令行应用程序输出中的彩色显示可能会进一步促进更丰富的体验和更多的交互。也就是说，不受支持的终端可能会经历屏幕上乱码信息形式的输出降级。此外，CLI 可以在可能不支持彩色输出的持续集成构建作业中使用。即使在构建服务器之外，也可以通过 IDE 的控制台使用 CLI，该控制台可能无法处理某些字符。必须可以手动选择退出。

参考项目：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)
- [kleur](https://www.npmjs.com/package/kleur)

📦 **推荐的软件包**

对开源 Node.js 包的参考：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)
- [kleur](https://www.npmjs.com/package/kleur)

### 1.5 丰富的交互

✅ **可行:** 除了文本输入提示符之外，还可以利用丰富的命令行交互为 CLI 用户提供更流畅的体验。

❌ **否则:** 当数据是以封闭选项(即下拉菜单)的形式出现时，作为输入的文本提示可能对用户来说很麻烦。

ℹ️ **详情**

丰富的交互性可以以提示输入的形式引入，提示输入比自由文本更复杂，例如下拉选择列表、单选按钮切换、评级、自动完成或隐藏密码输入。

丰富的交互性的另一种形式是动画加载器和进度条，它们在执行异步工作时为用户提供更好的体验。

许多 CLI 提供默认的命令行参数，而无需任何进一步的交互体验。 不要强迫你的用户提供应用程序可以自行解决的参数。

📦 **推荐的软件包**

对开源 Node.js 包的参考：

- [enquirer](https://www.npmjs.com/package/enquirer)
- [ora](https://www.npmjs.com/package/ora)
- [ink](https://www.npmjs.com/package/ink)
- [prompts](https://www.npmjs.com/package/prompts)

### 1.6 无处不在的超链接

✅ **可行:** 在文本输出中为两个 URL 使用格式正确的超链接 (e.g: `https://www.github.com`), 以及源代码 (e.g: `src/Util.js:2:75`) - 现代终端能够将这两者转换为可点击的链接。

❌ **否则:** 避免像 `git.io/abc` 这样需要用户手动复制和粘贴的中断且非交互式的链接。

ℹ️ **详情**

如果您分享指向 URL 的链接，或者指向某个文件以及该文件中的特定行号和列，则可以提供指向这两个示例的格式正确的链接，一旦单击这些链接，就会在浏览器或 IDE 定义的位置打开。

参考项目：

- [open](https://github.com/sindresorhus/open)

### 1.7 零配置

✅ **可行:** 通过自动检测所需的配置和命令行参数值来优化即插即用体验

❌ **否则:** 如果可以用可靠的方式自动检测命令行参数，并且调用的操作不显式要求用户交互（例如确认删除），则不要强制用户交互。

ℹ️ **详情**

目的是在运行 CLI 应用程序时提供「开箱即用」的体验。 例如， [POSIX定义了用于不同用途的环境变量配置](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap08.html) 的标准。 例如： `TMPDIR`, `NO_COLOR`, `DEBUG`, `HTTP_PROXY` 和其他。 自动检测这些并在必要时提示确认。

围绕零配置构建的参考项目：

- [Jest JavaScript 测试框架](https://jestjs.io)
- [Parcel](https://parceljs.org), Web 应用程序打包工具

### 1.8 遵守 POSIX 信号

✅ **可行:** 确保您的程序遵守 [POSIX 信号](http://man7.org/linux/man-pages/man7/signal.7.html) 以使其能够与用户或其他程序正确交互。

❌ **否则:** 您的程序不能与其他程序很好地配合，并会引入意外的行为。

ℹ️ **详情**

尤其是对于 CLI 应用程序，与用户输入交互是很常见的，如果管理不当，可能会导致您的应用程序无法响应 SIGINT 中断，用户在按下 `CTRL+C` 键时通常会使用 SIGINT 中断。

不遵守进程信号的问题在由非人之间的互动引导下来时更加严重。 例如，在 Docker 容器中运行但不会响应发送给它的软件中断信号的 CLI。

# 2 分发

本节介绍了有关以最佳方式分发和打包 Node.js 命令行应用程序的最佳实践，供消费者使用。

在本节中：

- 2.1 [选择占用较小的依赖项](#21-%E9%80%89%E6%8B%A9%E5%8D%A0%E7%94%A8%E8%BE%83%E5%B0%8F%E7%9A%84%E4%BE%9D%E8%B5%96%E9%A1%B9)
- 2.2 [使用 shrinkwrap, Luke](#22-%E4%BD%BF%E7%94%A8shrinkwrap,-Luke)
- 2.3 [清理配置文件](#23-清理配置文件)

### 2.1 选择占用较小的依赖项

✅ **可行:** 最大限度地减少生产依赖项的使用，使用较小的替代依赖项，并审查依赖项的覆盖范围以及传递性依赖项，以确保 Node.js CLI 的小捆绑。 在这个问题上保持平衡，注意不要通过重开轮来过度优化对依赖的使用。

❌ **否则:** 应用程序中依赖项的大小和使用将影响 Node.js CLI 的安装时间，从而潜在地提供糟糕的用户体验。

ℹ️ **详情**

使用 `npx` 调用的 Node.js CLI 的快速 `npm install` 将提供更好的用户体验。 当总体依赖关系和传递依赖关系将占用空间保持在合理大小时，就可以做到这一点。

一次安装全局 `npm` 缓慢安装的 `npm` 软件包将提供一次的糟糕体验，但是，用户使用 `npx` 调用可执行包会使性能下降，因为 `npx` 总是从注册表获取和安装包，这一点更加显著和明显。

参考项目：

- [Bundlephobia](https://bundlephobia.com/) 是帮助您找到一个 npm 软件包的成本。

### 2.2 使用 shrinkwrap, Luke

✅ **可行:** 将 npm 的 `npm-shrinkwrap.json` 用作锁定文件，以确保最终用户在安装 npm 软件包时将固定的依赖项版本（直接和传递）传播给最终用户。

❌ **否则:** 不修复应用依赖项的版本将意味着包管理器（例如 `npm`）将在安装期间解析它们，通过版本范围安装的可传递依赖项可能会引入您无法控制的破坏性更改，这可能会导致您的 Node.js CLI 应用程序无法构建或运行。

ℹ️ **详情**

使用 ~~ force ~~ shrinkwrap, Luke!

通常，npm 包在安装时只定义其直接依赖项及其版本范围，并且 Npm 包管理器将在安装时解析所有可传递依赖项的版本。 随着时间的推移，依赖项的解析版本会有所不同，因为新的直接依赖项和传递依赖项将发布新版本。

尽管 [语义化版本控制](https://semver.org/) 在维护人员中被广泛接受，但已知 npm 会为正在安装的普通软件包 [引入许多依赖项](https://snyk.io/blog/how-much-do-we-really-know-about-how-packages-behave-on-the-npm-registry/)，这增加了软件包引入可能会破坏应用程序的更改的风险。

使用 `npm-shrinkwrap.json` 的另一方面是您强加给您的消费者的安全隐患。正在安装的依赖项被固定到特定版本，因此即使发布了这些依赖项的较新版本，也不会安装它们。这将使您（维护人员）有责任保持对依赖项中任何安全修复程序的最新了解，并通过安全更新定期发布 CLI 应用程序。考虑使用 [Snyk 依赖升级](https://snyk.io/) 在整个依赖关系树中自动解决安全问题。_全面披露：我是 Snyk 的开发者倡导者。_ 正在安装的依赖关系被固定到特定的版本，所以即使这些依赖的更新版本被发布，它们也不会被安装。 这使得你这位维护者负责随时更新你依赖的任何安全修复。 并定期发布您的 CLI 应用，并带有安全更新。 考虑使用 [Snyk 依赖关系升级](https://snyk.io/) 来自动修复依赖树的安全问题。 _完全公开：我是Snyk的开发者提倡者_

> 👍 提示
> 
> 使用 `npm shrinkwrap` 命令生成 shrinkwrap 锁定文件，其格式与`package-lock.json`文件的格式相同。

参考文献：

- [您真的知道锁文件如何处理 yarn 和 npm 软件包吗？](https://snyk.io/blog/making-sense-of-package-lock-files-in-the-npm-ecosystem/)
- [Yarn 文档：应该将锁定文件提交到存储库吗？](https://next.yarnpkg.com/advanced/qa#should-lockfiles-be-committed-to-the-repository)

### 2.3 清理配置文件

✅ **可行:** 卸载 CLI 应用程序时清理配置文件。（可选）CLI 应用程序可以提示您的用户保留配置文件，以跳过下一次安装时的重新初始化阶段，从而获得更好的用户体验。 可选： CLI 应用程序可以促使您的用户保留配置文件以跳过下次安装时的重新初始化阶段以获得更好的用户体验。

❌ **否则:** 用户的文件系统可能包含单独配置文件形式的残留物，以及 CLI 工具在安装时引入的可识别数据。

ℹ️ **详情**

如 [有状态数据部分](#13-%E6%9C%89%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE) 所述，如果您的 CLI 应用程序使用持久性存储（例如保存配置文件），则 CLI 应用程序还应负责在卸载时删除其配置文件。

由于npm 软件包管理器不提供卸载钩子，因为npm v7， 您的程序应该包含一个卸载选项，要么通过 [参数](#11-respect-posix-args) (e). 。 `--uninstall`或通过 [丰富的交互](#15-rich-interactions)。

> 👍 提示
> 
> 为此，您可以使用 NPM 的 pre 或 post 卸载 [脚本](https://docs.npmjs.com/misc/scripts)。您可以在此 [存储库](https://github.com/m-sureshraj/jenni/blob/master/src/scripts/pre-uninstall.js) 中找到一个有效的示例。 您可以在此 [仓库](https://github.com/m-sureshraj/jenni/blob/master/src/scripts/pre-uninstall.js) 中找到一个可用示例。

# 3 互通性

本节介绍与使 Node.js CLI 与其他命令行工具无缝集成有关的最佳实践，并遵循 CLI 可以正常运行的约定。

本节回答以下问题：

- _我可以导出此 CLI 的输出以便于分析吗？_
- _我可以将此 CLI 的输出通过管道传递到另一个命令行工具的输入吗？_
- _我可以通过管道将其他工具的结果发送到此 CLI 吗？_

在本节中：

- 3.1 [接受 STDIN 输入](#31-%E6%8E%A5%E5%8F%97STDIN%E8%BE%93%E5%85%A5)
- 3.2 [启用结构化输出](#32-%E5%90%AF%E7%94%A8%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA)
- 3.3 [跨平台规范](#33-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E8%A7%84%E8%8C%83)
- 3.4 [支持配置优先](#34-支持配置优先)

### 3.1 接受 STDIN 输入

✅ **可行:** 对于预期使用数据的命令行应用程序，使用户可以轻松地将数据通过管道传输到标准输入 (STDIN)。

❌ **否则:** 其他命令行应用程序将无法直接将其结果作为输入提供给您的 CLI，这会阻止常见的 UNIX 单行程序，例如：

```sh
$ curl -s "https://api.example.com/data.json" | your_node_cli
```

ℹ️ **详情**

如果命令行应用程序使用数据，比如对通常使用 `--file<file.json>` 命令行参数指定的 JSON 文件执行某种任务。

下面是一个基于官方 [Node.js API 文档的 readline 模块](https://nodejs.org/api/readline.html) 示例，该示例说明如何从命令管道获取输入：

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```

然后将输入通过管道传递到上述 Node.js 应用程序：

```sh
echo "Node.js is amazing" | node cli.js
```

### 3.2 启用结构化输出

✅ **可行:** 启用一个标志以允许结构化输出应用程序的结果（如果此类结果可用），以启用数据的解析和轻松操作。

❌ **否则:** CLI 的用户可能需要应用复杂的正则表达式解析和匹配技术来提取 CLI 提供的输出数据。

ℹ️ **详情**

对于命令行应用程序的用户来说，解析数据并执行数据通常非常有用，例如使用它来填充 Web 仪表板或电子邮件通知。

能够轻松地从命令行输出中提取感兴趣的数据，为 CLI 用户提供了更友好的体验。

### 3.3 跨平台规范

✅ **可行:** 如果希望 CLI 在跨平台上运行，则必须适当注意 shell 命令以及诸如文件系统之类的组件，以及利用相关编程构造的开发人员。

❌ **否则:** 即使代码中没有功能差异，由于诸如路径分隔符错误等因素，CLI 在其他操作系统上也会中断。

ℹ️ **详情**

即使从程序的角度来看，该功能并没有被剥离，并且*应该*在不同的操作系统中很好地执行，但是某些细微的差别可能会使程序无法运行。让我们探讨必须遵守跨平台规范的几种情况。 让我们探讨必须遵守跨平台行为准则的几个案例。

#### 错误地产生命令

您可能需要生成一个运行 Node.js 程序的进程。 例如，您具有以下脚本：

`program.js`

```js
#!/usr/bin/env node

// the rest of your app code
```

这有效：

```
const cliExecPath = 'program.js'
const process = childProcess.spawn(cliExecPath, [])
```

这个更好：

```
const cliExecPath = 'program.js'
const process = childProcess.spawn('node', [cliExecPath])
```

为什么这样更好？ 为什么会更好？`program.js` 源代码以类 Unix 的 [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) 符号开头，但是 Windows 并不知道如何解释这一点，因为 Shebang 不是跨平台标准。

对于 `package.json` 脚本也是如此。考虑以下定义 npm 运行脚本的不良做法： 请参考定义npm 运行脚本的以下错误练习：

```
"scripts": {
  "postinstall": "myInstall.js"
}
```

这是由于 `myInstalls.js` 中的 Shebang 无法帮助 Windows 了解如何使用 `node` 解释器来运行它的事实。

相反，请遵循以下最佳做法：

```
"scripts": {
  "postinstall": "node myInstall.js"
}
```

#### Shell 解释器各有千秋

在不同的 shell 解释程序中，并非所有字符都被视为相同。

例如，Windows 命令提示符不会像在 bash shell 上所期望的那样将单引号与双引号相同，因此它无法识别单引号内的整个字符串属于同一字符串组，这将导致错误。

在使用 Windows 命令提示符的 Windows Node.js 环境中，该操作将失败：

package.json

```
"scripts": {
  "format": "prettier-standard '**/*.js'",
  ...
}
```

要解决此问题，以便此 `npm run` 脚本确实可以在 Windows，macOS 和 Linux 之间跨平台运行：

package.json

```
"scripts": {
  "format": "prettier-standard \"**/*.js\"",
  ...
}
```

在此示例中，我们必须使用双引号，并使用 JSON 表示符对其进行转义。

#### 避免拼接路径

跨不同平台的路径构造截然不同。当通过拼接字符串手动构建它们时，它们必然在不同平台之间不能互相操作。 当它们通过连接字符串手动构建时，它们注定不能在不同平台之间进行互操作。

让我们思考以下不良做法示例：

```js
const myPath = `${__dirname}/../bin/myBin.js`;
```

假定正斜杠是路径分隔符，例如在 Windows 上使用反斜杠。

与其手动构建文件系统路径，不如使用 Node.js 自己的 `path` 模块来执行此操作：

```js
const myPath = path.join(__dirname, "..", "bin", "myBin.js");
```

#### 避免用分号链接命令

众所周知，Linux shell 支持分号 (`;`) 来链接命令以按顺序运行，例如：`cd/tmp;ls`。但是，在 Windows 上执行相同的操作将失败。 然而，在Windows上做同样的操作也会失败。

避免执行以下操作：

```js
const process = childProcess.exec(`${cliExecPath}; ${cliExecPath2}`);
```

而是使用「&&」号或「||」符号：

```js
const process = childProcess.exec(`${cliExecPath} || ${cliExecPath2}`);
```

### 3.4 支持配置优先

✅ **可行:** 允许按优先顺序从多个来源获取配置。  命令行参数具有最高优先级，其次是 shell 变量，然后是不同级别的配置。

❌ **否则:** 用户在使用 CLI 自定义体验时会有挫折感。

ℹ️ **详情**

使用环境变量检测和支持配置设置，因为这将是许多工具链中常见的方法来修改被引用的 CLI 应用程序的行为。

命令行应用程序的配置优先顺序应遵循以下规则：

- 调用应用程序时指定的命令行参数。
- 生成 shell 的环境变量和应用程序可用的任何其他环境变量。
- 项目范围配置，例如：本地目录 `.git/config` 文件。
- 用户范围配置，例如：用户的主目录配置文件：`~/.gitconfig` 或其 XDG 等效文件：`~/.config/git/config`。
- 系统范围配置，例如：`/etc/gitconfig`。

参考项目：

- [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)

# 4 辅助功能

本节介绍与最佳实践有关的内容，这些最佳实践是将 Node.js CLI 应用程序提供给希望使用它但缺少维护人员为其设计应用程序的环境的用户。

在本节中:

- 4.1 [容器化 CLI](#41-%E5%AE%B9%E5%99%A8%E5%8C%96CLI)
- 4.2 [优雅降级](#42-%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7)
- 4.3 [Node.js 版本兼容性](#43-Node.js%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E6%80%A7)
- 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang%E8%87%AA%E5%8A%A8%E6%A3%80%E6%B5%8BNode.js%E8%BF%90%E8%A1%8C%E6%97%B6)

### 4.1 容器化 CLI

✅ **可行:** 为 CLI 创建一个 docker 映像，并将其发布到 Docker Hub 之类的公共注册表中，以便没有 Node.js 环境的用户可以使用它。

❌ **否则:** 没有 Node.js 环境的用户将没有 `npm` 或 `npx` 可用，因此将无法运行您的 CLI 应用程序。

ℹ️ **详情**

从 npm 注册表中安装 Node.js CLI 应用程序通常将使用 Node.js 本机工具链（例如 `npm` 或 `npx`。这些在 JavaScript 和 Node.js 开发人员中很常见，并且有望在安装说明中引用。 这些在 JavaScript 和 Node.js 开发者中是常见的，预计将在安装说明中被引用。

然而，如果你针对的是普通用户消费的 CLI 应用程序，不管他们是否熟悉JavaScript， 或此工具的可用性，然后只能从 npm 注册表中以安装形式分发您的 CLI 应用将受到限制。 但是，如果您将 CLI 程序作为普通大众使用，而不管他们是否熟悉 JavaScript 或该工具的可用性，那么仅以 npm 注册表中的安装形式分发 CLI 程序将受到限制。如果您的 CLI 应用程序打算在构建或 CI 环境中使用，那么安装 Node.js 相关的工具链依赖项可能也需要这些。

打包和分发可执行文件的方法有很多，将其容器化为与 CLI 应用程序预先捆绑在一起的 Docker 容器是一种易于使用的选择，并且没有依赖性（除了需要 Docker 环境之外）。

### 4.2 优雅降级

✅ **可行:** 为用户提供在不受支持的环境中选择退出彩色和丰富动画显示的能力，例如通过跳过交互性并以 JSON 形式提供格式化输出。

❌ **否则:** 对于没有受支持终端的用户，使用终端交互(如提示和其他显示丰富的界面)可能会显著降低最终用户体验，并阻碍他们使用 CLI 应用程序，因为它具有丰富多彩的输出。

ℹ️ **详情**

通常以彩色输出的形式提供丰富的终端显示器， ascii 图表，甚至在终端和强大的快速机制上动画。 对于那些拥有支持的终端的人来说，这些可能有助于极好的用户体验，但是，对于那些没有终端的人来说，它可能会显示乱码文本或完全无法操作。

要使终端不受支持的用户能够正确使用 Node.js CLI 应用程序，您可以选择：

- 自动检测终端功能，并在运行时评估是否降低 CLI 交互性
- 为用户提供选择加入，以显式切换优雅降级，例如通过提供 `--json` 命令行参数强制其输出原始数据。

```
👍 提示

  支持优雅的降级（如 JSON 输出）不仅对最终用户及其不受支持的终端有用，而且对于在持续集成环境中运行也很有价值，并且使用户能够将您的程序的输出与其他程序的输入或导出数据（如果需要）连接起来。
```

### 4.3 Node.js 版本兼容性

✅ **可行:** 确定受支持和维护的 [Node.js 版本](https://nodejs.org/en/about/releases)。

❌ **否则:** 试图与较旧且不受支持的 Node.js 版本保持兼容的代码库将很难维护，并且会失去语言和运行时功能的好处。

ℹ️ **详情**

有时可能需要专门针对缺少新的 ECAMScript 功能的旧版本Node.js。 例如，如果您要构建主要用于 DevOps 或 IT 的 Node.js CLI，则它们可能没有理想的 Node.js 环境，并且具有最新的运行时环境。作为参考，Debian Stretch(oldstable) 与 [Node.js 8.11.1](https://packages.debian.org/search?suite=default%C2%A7ion=all&arch=any&searchon=names&keywords=nodejs) 一起提供。 作为参考，Debian Stretch (老稳定版本)带有 [Node.js 8.11.1](https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=nodejs)

如果您确实需要针对 Node.js 的旧版本，如 Node.js8、6 或 4，所有这些版本都已停止使用，那么您更喜欢使用诸如 Babel 这样的代码转换程序来确保生成的代码符合 V8 JavaScript 引擎的版本以及这些版本附带的 Node.js 运行时。

另一个解决方法是提供 CLI 的容器版本，以避免旧目标。 请参见 [(4.1)容器化 CLI](#containerize-the-cli)。

不要精简程序代码，以使用与未维护或 EOL Node.js 版本匹配的旧 ECMAScript 语言规范，因为这只会导致代码维护问题。

如果在不受支持的环境中调用 CLI，请尝试对其进行检测，并通过描述性错误消息退出以显示友好的信息错误消息。 请参阅 [此示例](https://github.com/lirantal/dockly/blob/42d8c09631bc5348f108a50c3ce9601851fb760b/index.js#L25) 以了解更多信息。

### 4.4 Shebang 自动检测 Node.js 运行时

✅ **可行:** 在 [Shebang](%E2%80%9Chttps://en.wikipedia.org/wiki/Shebang_(Unix)%E2%80%9D) 声明中使用与安装无关的引用，该声明根据运行时环境自动定位 node.js 运行时，例如 `#!/usr/bin/env node`。

❌ **否则:** 使用硬编码的 Node.js 运行时位置（如 `#!/usr/local/bin/node`）仅适用于您自己的环境，可能会导致 Node.js CLI 在 Node.js 位置不同的其他环境中无法运行。

ℹ️ **详情**

通过将入口点文件作为 `node cli.js` 运行，然后将 `#!/usr/local/bin/node` 添加到 `cli.js` 文件的顶部，开发 Node.js CLI 可能是一个简单的开始，但是后者仍然是一种有缺陷的方法，因为无法为其他用户的环境保证 `node` 可执行文件的位置。

应该注意的是，将 `#!/usr/bin/env node` 指定为最佳实践，仍然假设 Node.js 运行时被引用为 `node` 而不是 `nodejs` 或其他。

# 5 测试

在本节中:

- 5.1 [不信任语言环境](#51-%E4%B8%8D%E4%BF%A1%E4%BB%BB%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83)

### 5.1 不信任语言环境

✅ **可行:** 不要假设输出文本等同于您声明的字符串，因为测试可能会在与您的语言环境不同或英语默认语言的系统上运行。

❌ **否则:** 开发人员在与英语默认语言环境不同的系统上测试时，将会遇到测试失败的情况。

ℹ️ **详情**

当您选择通过运行 CLI 并分析输出来测试 CLI 时，您可能倾向于 grep 特定功能，以确保它们存在于输出中，例如在不带参数的情况下运行 CLI 时正确提供示例。例如： e.g:

```js
const output = execSync(cli);
expect(output).to.contain("Examples:"));
```

如果测试将在非英语的语言环境中运行，并且如果您的 CLI 参数解析库支持语言环境的自动检测并采用该语言环境，则由于从 `Examples` 到「语言环境」的语言转换，此类测试将失败。等效语言被设置为系统中的默认语言环境。

# 6 错误

本节介绍了有关使 Node.js CLI 应用程序可供希望使用它但缺乏维护人员为其设计应用程序的理想环境的用户使用的最佳实践。

本质上，本节中列出的最佳实践的目标是帮助用户快速轻松地排查错误，而无需查阅文档或源代码来查找错误。

在本节中:

- 6.1 [可追踪的错误](#61-%E4%BF%A1%E6%81%AF%E6%80%A7%E9%94%99%E8%AF%AF)
- 6.2 [可行性错误](#62-%E5%8F%AF%E8%A1%8C%E6%80%A7%E9%94%99%E8%AF%AF)
- 6.3 [提供调试模式](#63-%E6%8F%90%E4%BE%9B%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F)
- 6.4 [正确使用退出代码](#64-%E6%AD%A3%E7%A1%AE%E4%BD%BF%E7%94%A8%E9%80%80%E5%87%BA%E4%BB%A3%E7%A0%81)
- 6.5 [轻松的错误报告](#65-轻松的错误报告)

### 6.1 可追踪的错误

✅ **可行:** 报告错误时，提供可以在项目文档中查找的可跟踪错误代码，从而简化对错误消息的故障排除。

如果可能，请使用更多信息扩展跟踪错误代码，以便可以轻松分析这些错误消息并弄清上下文。

❌ **否则:** 一般的错误消息往往是模棱两可的，使用户很难搜索解决方案。解析和分析不是那么简单，在文档中引用它们也不是那么清晰。 解析和分析不够直截了当，在文档中引用它们也不会那么干净。

ℹ️ **详情**

返回错误消息时，请确保它们包含参考号或特定的错误代码，以便以后查阅。与 HTTP 状态代码非常相似，因此 CLI 应用程序需要命名或编码错误。 就像HTTP状态码一样，CLI应用程序需要命名或编码错误。

例子：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

### 6.2 可行性错误

✅ **可行:** 失败的错误消息应该告诉用户需要修复什么，而不是抱怨有错误。

❌ **否则:** 面对错误消息且未提示解决错误的操作的用户可能无法成功使用您的 CLI 应用程序。

ℹ️ **详情**

示例：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

### 6.3 提供调试模式

✅ **可行:** 如果需要诊断问题，请允许高级用户启用更详细的信息。

❌ **否则:** 不要跳过调试功能。 收集用户的反馈，让他们找出错误的原因将会比较困难。

ℹ️ **详情**

使用环境变量以及命令行参数来启用扩展的调试详细级别。 在您的代码中有意义的地方，植入有助于用户和维护者理解程序流、输入和输出以及其他使问题解决更容易的调试消息。

📦 **推荐的软件包**

对开源 Node.js 包的参考：

- [debug](https://www.npmjs.com/package/debug)

### 6.4 正确使用退出代码

✅ **可行:** 使用适当的退出代码终止程序，这些退出代码可以传达错误或退出状态的语义含义。

❌ **否则:** 不正确或缺失的退出代码将阻碍 CLI 在持续集成流程和其他命令行脚本编写用例中的使用。

ℹ️ **详情**

命令行脚本经常利用 shell 的 `$?` 推断程序的状态码并对其执行操作。 在持续集成 (CI) 流程中也可以使用它来确定步骤是否成功完成。

如果您的 CLI 总是以没有特定状态码的方式终止，即使出现错误也是如此，那么依赖于它的 Shell 和其他程序将无法得知。 当发生错误导致程序终止时，您应该传达这种含义。 例如：

```js
try {
  // something
} catch (err) {
  // cleanup or otherwise
  // then exit with proper status code
  process.exit(1);
}
```

退出代码的简短参考：

- 退出代码 0 表示成功执行
- 退出代码 1 表示失败

您也可以选择使用具有程序语义的自定义退出代码，但是如果这样做，请确保正确记录它们。

参考：BASH shell 使用的 [退出代码列表](http://www.tldp.org/LDP/abs/html/exitcodes.html)

### 6.5 轻松的错误报告

✅ **可行:** 通过提供一个 URL 来打开问题并尽可能多的预填充所需的数据，使提交错误报告变得轻松。[问题模板，例如在 GitHub 上](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/configuring-issue-templates-for-your-repository)，允许进一步指导用户哪些信息是必要的。 [问题模板，如在 GitHub](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/configuring-issue-templates-for-your-repository)上，允许进一步引导用户了解哪些信息是必要的。

❌ **否则:** 用户在搜索如何报告错误时感到沮丧，最终可能得不到有用的信息，或者根本不提交问题。

# 7 开发

本节介绍了构建 Node.js 命令行应用程序的开发和维护最佳实践。

在本节中:

- 7.1 [使用 bin 对象](#71-%E4%BD%BF%E7%94%A8bin%E5%AF%B9%E8%B1%A1)
- 7.2 [使用相对路径](#72-使用相对路径)
- 7.3 [使用 files 字段](#73-使用files字段)

### 7.1 使用 bin 对象

✅ **可行：** 使用一个对象来定义可执行文件的名称以及其路径。

❌ **否则：** 您最终将把程序包的名称与可执行文件耦合在一起。

ℹ️ **详情**

以下 `package.json` 显示了将可执行文件的名称与文件名及其在项目中的位置解耦的示例：

```json
  "bin": {
    "myCli-is-cool": "./bin/myCli.js"
  }
```

### 7.2 使用相对路径

✅ **可行：** 使用 `process.cwd()` 访问用户输入路径，使用 `__dirname` 访问基于项目的路径。

❌ **否则：** 您最终将获得不正确的文件路径，并且将无法访问文件。

ℹ️ **详情**

您可能发现自己需要访问项目文件范围内的文件。 或者访问用户输入提供的 文件，如日志、JSON 文件或其他文件。 混淆 `process.cwd()` 和 `__dirname` 可能会导致错误并且不使用其中任意一个。

如何正确访问文件：

- `process.cwd()`：当需要访问的文件路径依赖于相对位置时使用Node.js 命令行界面。 一个很好的例子是当 CLI 支持创建日志的文件路径时，例如：`myCli--outfil../../out.json`。 如果 `myCli` 安装在 `/usr/local/node_modules/myCli/bin/myCli.js` 中，则 `process.cwd()` 不会引用该位置，而不是当前工作目录，即用户所在的目录调用 CLI 时。
- `__dirname`：当您需要从 CLI 的源代码中访问文件并引用相关文件时使用它代码所在文件的位置。 例如，当 CLI 需要访问另一个目录中的 JSON 数据文件时：`fs.readFile(path.join(__dirname, '..', 'myDataFile.json'))`。

### 7.3 使用 `files` 字段

✅ **可行：** 使用 `files` 字段仅在发布的软件包中包含必要的文件。

❌ **否则：** 最后，您将得到一个软件包，其中包含运行 CLI 应用程序可能不需要的文件。 例如（测试文件，开发配置等）。

ℹ️ **详情**

为了保持已发布的 [包体积小](＃21-选择占用较小的依赖项)，我们应仅包含文件 运行我们的 CLI 应用程序所需的文件。有关更多详细信息，请参见此 [文章](https://medium.com/@nodejs/publishing-npm-packages-c4c615a0fc6b)。 有关更多详细信息，请参见此 [文章](https://medium.com/@nodejs/publishing-npm-packages-c4c615a0fc6b)。

以下 `files` 字段告诉 npm CLI 将 src 目录中的所有文件（包括 spec 文件）都包括在内。

```json
"files": [
  "src",
  "!src/**/*.spec.js"
],
```

# 8 分析

本节处理 Node.js 命令行应用程序中的分析集合。

在本节中:

- 8.1 [严格选择加入分析](#81-严格选择加入分析)

### 8.1 严格选择加入分析

✅ **可行:** 始终以明确的方式提示、询问或选择用户将使用情况和产品分析提交到远程位置。

❌ **否则:** 您可能会担心用户的隐私问题以及用户意想不到且令人惊讶的 CLI 行为。

ℹ️ **详情**

可以理解，作为 CLI 应用程序的维护者，您希望更好地了解用户如何使用它。 可以理解，作为 CLI 应用程序的维护者，您希望更好地了解用户如何使用它。 然而，在不征得用户同意的情况下，偷偷地和默认的“电话回家”类型的行为会受到谴责。

指南:

- 让用户知道将收集哪些数据以及您如何处理这些数据。
- 注意隐私问题并收集潜在的个人身份信息。
- 数据存储的方式、地点和时间段。

其他收集分析的 CLI 的参考是 [Angular CLI](https://angular.io/analytics) 和 [Next.js](https://nextjs.org/telemetry) CLI。

# 9 附录: CLI 框架

### 9.1 CLI 框架表

| 名称         | 简介                                                                                                    | npm                                                         | GitHub                                                                           | 关注以及下载量                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| oclif      | 构建命令行界面的框架。                                                                                           | [前往 npm](https://www.npmjs.com/package/oclif)               | [前往Github](https://github.com/oclif/oclif)                                       | ![](https://img.shields.io/github/stars/oclif/oclif)![](https://img.shields.io/npm/dt/oclif.svg)                  |
| inquire    | 一个通用交互式命令行用户界面。                                                                                       | [前往 npm](https://www.npmjs.com/package/inquirer)            | [前往Github](https://github.com/SBoudrias/Inquirer.js)                             | ![](https://img.shields.io/github/stars/sboudrias/inquirer.js)![](https://img.shields.io/npm/dt/inquirer.svg)     |
| ink        | Ink 提供了React在浏览器中提供的基于组件的用户界面构建体验，但是有了命令行应用的体验。                                                       | [前往 npm](https://www.npmjs.com/package/ink)                 | [前往Github](https://github.com/vadimdemedes/ink)                                  | ![](https://img.shields.io/github/stars/vadimdemedes/ink)![](https://img.shields.io/npm/dt/ink.svg)               |
| blessed    | 一个类似曲线的库，为node.js设置一个高级终端界面 API 。                                                                     | [前往 npm](https://www.npmjs.com/package/blessed)             | [前往Github](https://github.com/chjj/blessed)                                      | ![](https://img.shields.io/github/stars/chjj/blessed)![](https://img.shields.io/npm/dt/blessed.svg)               |
| prompts    | Lightweight, beautiful and user-friendly interactive prompts                                          | [Link to npm](https://npmjs.org/package/prompts)            | [Link to GitHub](https://github.com/terkelg/prompts)                             | ![](https://img.shields.io/github/stars/terkelg/prompts)![](https://img.shields.io/npm/dt/prompts.svg)            |
| vue-termui | A Vue.js based terminal UI framework that allows you to build modern terminal applications with ease. | [Link to npm](https://www.npmjs.org/package/vue-termui)     | [Link to GitHub](https://github.com/vue-terminal/vue-termui)                     | ![](https://img.shields.io/github/stars/vue-terminal/vue-termui)![](https://img.shields.io/npm/dt/vue-termui.svg) |
| clack      | Effortlessly build beautiful command-line apps                                                        | [Link to npm](https://www.npmjs.com/package/@clack/prompts) | [Link to GitHub](https://github.com/natemoo-re/clack/tree/main/packages/prompts) | ![](https://img.shields.io/github/stars/natemoo-re/clack)![](https://img.shields.io/npm/dt/@clack/prompts.svg)    |

# 10 附录：CLI 教育资源

* https://clig.dev/
* https://primer.style/cli/getting-started/principles
* [@simonplend](https://twitter.com/simonplend) and [@dolearning](https://twitter.com/dolearning/)'s [workshop on crafting human friendly CLIs](https://github.com/simonplend/workshop-crafting-human-friendly-clis)

<!-- markdownlint-disable -->


<!-- markdownlint-enable -->

---

# 作者

**Node.js CLI Apps 最佳实践** © [Liran Tal](https://github.com/lirantal) ，根据 [CC BY-SA 4.0](./LICENSE) 许可证发行。

该项目遵循[所有参与者的](https://github.com/all-contributors/all-contributors)规范。 欢迎进行任何形式的贡献！

<!-- Project Logo -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# 许可证

[![License](https://badgen.net/badge/License/CC%20BY-SA%204.0/green)](http://creativecommons.org/licenses/by-sa/4.0/)

本作品采用知识共享署名-ShareAlike 4.0 国际许可协议授权。
