<!-- Project Logo -->

<img src="../../.github/nodejs-cli-apps-best-practices-logo.svg" width="100px" align="left">

<!-- Main Header Links -->

<div align="right">
  <a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">     <img src="https://badgen.net/badge/Node.js%20CLI%20Apps/Best%20Practices/purple" style="margin:8px;" alt="Node.js CLI Apps Best Practices"></a>
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
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC%20BY-SA%204.0/green"></a>
</p>

### 为什么是我?

我叫 Liran Tal，我沉迷于构建命令行应用程序。

我最近的一些工作（构建 Node.js CLI）包括以下开源项目：

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<table>
  <tr>
     <td align="center">       <a href="https://github.com/lirantal/dockly"><img src="https://repository-images.githubusercontent.com/71667498/d5576f00-69cd-11e9-83dd-2139ad967fdc" width="150px;" alt="dockly - Immersive terminal interface for managing docker containers and services"><br><sub><b>Dockly</b></sub></a><br>用于管理Docker容器和服务的沉浸式终端界面</td>
     <td align="center">       <a href="https://github.com/lirantal/npq"><img src="https://repository-images.githubusercontent.com/114298694/73d29f00-bb7d-11e9-80f5-5f94f25a76b4" width="150px;" alt="npq - safely install packages with npm/yarn by auditing them as part of your install process"><br><sub><b>npq</b></sub></a><br>通过在安装过程中进行审核来安全地使用npm/yarn安装软件包      </td>
     <td align="center">       <a href="https://github.com/lirantal/lockfile-lint"><img src="https://repository-images.githubusercontent.com/189734318/e6973f80-e55a-11e9-8446-c63299297f5a" width="150px;" alt="lockfile-lint - Lint an npm or yarn lockfile to analyze and detect security issues"><br><sub><b>lockfile-lint</b></sub></a><br>检测npm或yarn锁定文件以分析和检测安全问题       </td>
     <td align="center">       <a href="https://github.com/lirantal/is-website-vulnerable"><img src="https://repository-images.githubusercontent.com/212983914/2d33b500-e84d-11e9-820e-799f368c4c44" width="150px;" alt="is-website-vulnerable - finds publicly known security vulnerabilities in a website's frontend JavaScript libraries"><br><sub><b>is-website-vulnerable</b></sub></a><br>在网站的前端JavaScript库中发现已知的安全漏洞       </td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<a href="https://twitter.com/liran_tal/" alt="follow Liran Tal on twitter"><img src="https://badgen.net/twitter/follow/liran_tal"></a>

---

<h3>目录</h3>

- 1 命令行体验
  - 1.1 [遵守 POSIX 参数](#11-%E9%81%B5%E5%AE%88-POSIX-%E5%8F%82%E6%95%B0)
  - 1.2 [构建富有同理心的 CLI](#12-%E6%9E%84%E5%BB%BA%E5%AF%8C%E6%9C%89%E5%90%8C%E7%90%86%E5%BF%83%E7%9A%84-CLI)
  - 1.3 [状态数据](#13-%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE)
  - 1.4 [提供丰富多彩的体验](#14-%E6%8F%90%E4%BE%9B%E4%B8%B0%E5%AF%8C%E5%A4%9A%E5%BD%A9%E7%9A%84%E4%BD%93%E9%AA%8C)
  - 1.5 [丰富的互动](#15-%E4%B8%B0%E5%AF%8C%E7%9A%84%E4%BA%92%E5%8A%A8)
  - 1.6 [无处不在的超链接](#16-%E6%97%A0%E5%A4%84%E4%B8%8D%E5%9C%A8%E7%9A%84%E8%B6%85%E9%93%BE%E6%8E%A5)
  - 1.7 [零配置](#17-%E9%9B%B6%E9%85%8D%E7%BD%AE)
  - 1.8 [遵守 POSIX 信号](#18-%E9%81%B5%E5%AE%88-POSIX-%E4%BF%A1%E5%8F%B7)
- 2 分发
  - 2.1 [选择体积较小的依赖](#21-%E9%80%89%E6%8B%A9%E4%BD%93%E7%A7%AF%E8%BE%83%E5%B0%8F%E7%9A%84%E4%BE%9D%E8%B5%96)
  - 2.2 [使用 shrinkwrap, Luke](#22-%E4%BD%BF%E7%94%A8-shrinkwrap,-Luke)
- 3 互通性
  - 3.1 [接受作为 STDIN 的输入](#31-%E6%8E%A5%E5%8F%97%E4%BD%9C%E4%B8%BA-STDIN-%E7%9A%84%E8%BE%93%E5%85%A5)
  - 3.2 [启用结构化输出](#32-%E5%90%AF%E7%94%A8%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA)
  - 3.3 [跨平台规范](#33-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E8%A7%84%E8%8C%83)
  - 3.4 [允许环境覆盖](#34-%E5%85%81%E8%AE%B8%E7%8E%AF%E5%A2%83%E8%A6%86%E7%9B%96)
- 4 辅助功能
  - 4.1 [容器化 CLI](#41-%E5%AE%B9%E5%99%A8%E5%8C%96-CLI)
  - 4.2 [优雅降级](#42-%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7)
  - 4.3 [Node.js 版本兼容性](#43-Node.js-%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E6%80%A7)
  - 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang-%E8%87%AA%E5%8A%A8%E6%A3%80%E6%B5%8B-Node.js-%E8%BF%90%E8%A1%8C%E6%97%B6)
- 5 测试
  - 5.1 [不信任语言环境](#51-%E4%B8%8D%E4%BF%A1%E4%BB%BB%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83)
- 6 错误
  - 6.1 [信息性错误](#61-%E4%BF%A1%E6%81%AF%E6%80%A7%E9%94%99%E8%AF%AF)
  - 6.2[ 可行性错](#62-%E5%8F%AF%E8%A1%8C%E6%80%A7%E9%94%99%E8%AF%AF)
  - 6.3[ 提供调试模](#63-%E6%8F%90%E4%BE%9B%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F)
  - 6.4[ 正确使用退出代](#64-%E6%AD%A3%E7%A1%AE%E4%BD%BF%E7%94%A8%E9%80%80%E5%87%BA%E4%BB%A3%E7%A0%81)

---

# 1 命令行体验

本节介绍与创建美观和高价值用户体验 Node.js 命令行应用程序有关的最佳实践。

在本节中：

- 1.1 [遵守 POSIX 参数](#11-%E9%81%B5%E5%AE%88-POSIX-%E5%8F%82%E6%95%B0)
- 1.2 [构建富有同理心的 CLI](#12-%E6%9E%84%E5%BB%BA%E5%AF%8C%E6%9C%89%E5%90%8C%E7%90%86%E5%BF%83%E7%9A%84-CLI)
- 1.3 [状态数据](#13-%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE)
- 1.4 [提供丰富多彩的体验](#14-%E6%8F%90%E4%BE%9B%E4%B8%B0%E5%AF%8C%E5%A4%9A%E5%BD%A9%E7%9A%84%E4%BD%93%E9%AA%8C)
- 1.5 [丰富的互动](#15-%E4%B8%B0%E5%AF%8C%E7%9A%84%E4%BA%92%E5%8A%A8)
- 1.6 [无处不在的超链接](#16-%E6%97%A0%E5%A4%84%E4%B8%8D%E5%9C%A8%E7%9A%84%E8%B6%85%E9%93%BE%E6%8E%A5)
- 1.7 [零配置](#17-%E9%9B%B6%E9%85%8D%E7%BD%AE)
- 1.8 [遵守 POSIX 信号](#18-%E9%81%B5%E5%AE%88-POSIX-%E4%BF%A1%E5%8F%B7)

<br>

### 1.1 遵守 POSIX 参数

✅ **可行:** 使用 [符合 POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html) 命令行参数语法，该语法已被广泛接受为命令行工具的标准。

❌ **否则:** 当 CLI 的参数、选项或命令参数的语法偏离他们习惯的 Unix 标准时，用户可能会感到苦恼。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

类 UNIX 操作系统普及了命令行和工具的使用，如`awk`、`sed`。 这些工具有效地标准化了命令行选项(又名标志)、选项参数和其他操作参数的行为。

预期行为的一些示例：

- 选项参数或选项可以在帮助或示例中标记为方括号（`[]`）表示它们是可选的，或带有尖括号（`<>`）表示它们是必需的。
- 使用缩写形式`-`，指定的选项可以包含一个字母数字字符。
- 指定多个没有值的选项可以进行分组，例如`myCli -abc`等同于`myCli -a -b -c`。

命令行高级用户希望您的命令行应用程序与其他 Unix 应用程序具有相似的约定。

### 1.2 构建富有同理心的 CLI

✅ **可行:** 放置可帮助用户成功与 CLI 进行交互的工作流，否则这些交互会导致错误和挫败感。

❌ **否则:** 如果不提供可操作的帮助来支持用户，将由于缺乏操作 CLI 的能力而导致沮丧。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

一个程序的命令行界面与 web 用户界面没有什么不同，因为您可以按照程序作者的意愿完成尽可能多的工作，以确保它被成功地使用。

通过构建支持与用户共情的 CLI 来优化成功的交互。作为一个示例，让我们研究一下`curl`程序的情况，该程序期望将 URL 作为其主要数据输入，而用户没有提供它。此类故障将导致（希望）读取描述性错误消息或查看`curl --help`输出。然而，一个富有同理心的 CLI 应该提供一个交互式的提示来捕获来自用户的输入，从而实现成功的交互。

### 1.3 状态数据

✅ **可行:** 在多次调用 CLI 应用程序之间提供有状态的体验，并记住值和数据，以提供无缝的交互。

❌ **否则:** 要求您的用户通过多次调用 CLI 重复提供相同的信息，将会使您的用户感到烦恼。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

您可能会发现自己需要为 CLI 应用程序提供存储持久性，例如在多次调用 CLI 之间记住用户名、电子邮件、API 令牌或其他首选项。使用允许应用程序保留此类用户设置的配置助手。读/写文件时一定要遵循[XDG 基本目录规范](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)(或选择一个符合规范的配置助手). 这使用户能够控制写入和管理文件的位置。

参考项目：

- [configstore](https://www.npmjs.com/package/configstore)
- [conf](https://www.npmjs.com/package/conf)

### 1.4 提供丰富多彩的体验

✅ **可行:** 在 CLI 应用程序中使用颜色来突出显示应用程序输出的一部分，并提供适当的降级或颜色检测，以允许自动选择退出，以免输出出现乱码。

❌ **否则:** 苍白的程序输出中可能容易丢失信息，尤其是当输出文本繁重的时候。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

如今，大多数用于与命令行应用程序交互的终端都支持彩色文本，例如通过特制 ANSI 编码字符启用的文本。

命令行应用程序输出中的彩色显示可能会进一步带来更丰富的体验和更多的交互。也就是说，不受支持的终端可能会在屏幕上以乱码信息的形式进行降级的输出。此外，CLI 可能用于不支持彩色输出的持续集成构建作业中。

参考项目：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>
</details>

参考开源软件包：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)

### 1.5 丰富的互动

✅ **可行:** 除了文本输入提示符之外，还可以利用丰富的命令行交互为 CLI 用户提供更流畅的体验。

❌ **否则:** 当数据是以封闭选项（即下拉菜单）的形式出现时，作为输入的文本提示可能对用户来说很麻烦。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

丰富的交互性可以以提示输入的形式引入，提示输入比自由文本更复杂，例如下拉选择列表、单选按钮切换、评级、自动完成或隐藏密码输入。

另一种丰富的交互性是动画加载器和进度条的形式，它们在执行异步工作时为用户提供了更好的体验。

许多 CLI 提供默认的命令行参数，而无需任何进一步的交互体验。不要强迫你的用户提供应用程序可以自行解决的参数。

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>
</details>

参考开源软件包：

- [enquirer](https://www.npmjs.com/package/enquirer)
- [ora](https://www.npmjs.com/package/ora)
- [ink](https://www.npmjs.com/package/ink)
- [prompts](https://www.npmjs.com/package/prompts)

### 1.6 无处不在的超链接

✅ **可行:** 在文本输出中为两个 URL 使用格式正确的超链接 (e.g: `https://www.github.com`), 以及源代码(e.g: `src/Util.js:2:75`) - 现代终端能够将这两者转换为可点击的链接。

❌ **否则:** 避免像`git.io/abc` 这样需要用户手动复制和粘贴的中断且非交互式的链接。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

如果您分享指向 URL 的链接，或者指向某个文件以及该文件中的特定行号和列，则可以提供指向这两个示例的格式正确的链接，一旦单击这些链接，就会在浏览器或 IDE 定义的位置打开。

### 1.7 零配置

✅ **可行:** 通过自动检测所需的配置和命令行参数值来优化即插即用体验

❌ **否则:** 如果可以用可靠的方式自动检测命令行参数，并且调用的操作不需要显式要求用户交互（例如确认删除），则不要强制用户交互。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

目的是在运行 CLI 应用程序时提供“开箱即用”的体验。

围绕零配置构建的参考项目：

- The [Jest JavaScript Testing Framework](https://jestjs.io)
- [Parcel](https://parceljs.org), a web application bundler

### 1.8 遵守 POSIX 信号

✅ **可行:** 确保您的程序遵守[POSIX 信号](http://man7.org/linux/man-pages/man7/signal.7.html)以使其能够与用户或其他程序正确交互。

❌ **否则:** 您的程序将不能很好地与其他程序配合使用，并会出现意外的行为。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

尤其是对于 CLI 应用程序，与用户输入交互是很常见的，如果管理不当，可能会导致您的应用程序无法响应 SIGINT 中断，用户在按下`CTRL+C` 键时通常会使用 SIGINT 中断。

当程序是通过非人为交互进行编排时，不尊重过程信号的问题会更加严重。 例如，在 Docker 容器中运行但不会响应发送给它的软件中断信号的 CLI。

# 2 分发

本节介绍有关以最佳方式分发和打包 Node.js 命令行应用程序的最佳实践。

在本节中：

- 2.1 [选择体积较小的依赖](#21-prefer-a-small-dependency-footprint)
- 2.2 [使用 shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)

### 2.1 选择体积较小的依赖

✅ **可行:** 最大限度地减少生产依赖项的使用，使用较小的替代依赖项，并检查您的依赖项的内存占用情况，以确保 Node.js CLI 的最小捆绑。 要平衡这一点，要小心不要通过重新发明轮子来过度优化依赖项的使用。

❌ **否则:** 应用程序中依赖项的大小和使用将影响 Node.js CLI 的安装时间，从而可能会带来糟糕的用户体验。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

使用`npx`调用的 Node.js CLI 的快速`npm install`将提供更好的用户体验。当总体依赖关系和传递依赖关系的占用空间保持在合理大小时，就可以做到这一点。

一次安装全局`npm`缓慢安装的`npm`软件包将提供一次的糟糕体验，但是，用户使用`npx`调用可执行包会使性能下降，因为`npx`总是从注册表获取和安装包，这一点更加显著和明显。

### 2.2 使用 shrinkwrap, Luke

✅ **可行:** 将 npm 的`npm-shrinkwrap.json` shrinkwrap.json 用作锁定文件，以确保最终用户在安装 npm 软件包时将固定的依赖项版本（直接和传递）传播给最终用户。

❌ **否则:** 不修复应用程序依赖项的版本将意味着程序包管理器（例如`npm`）将在安装过程中解决它们，而通过版本范围安装的可传递依赖项可能会导致您无法控制的重大更改， 可能会导致您的 Node.js CLI 应用程序无法构建或运行。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

使用~~ force ~~ shrinkwrap, Luke!

通常，NPM 包在安装时只定义其直接依赖项及其版本范围，并且 NPM 包管理器将在安装时解析所有可传递依赖项的版本。 随着时间的推移，依赖项的解析版本会有所不同，因为新的直接依赖项和传递依赖项将发布新版本。

尽管[语义化版本控制](https://semver.org/)在维护人员中被广泛接受, 但已知 npm 会为正在安装的普通软件包[引入许多依赖项](https://snyk.io/blog/how-much-do-we-really-know-about-how-packages-behave-on-the-npm-registry/)，这增加了软件包引入可能会破坏应用程序的更改的风险。

使用`npm-shrinkwrap.json`的另一方面是您强加给您的消费者的安全隐患。正在安装的依赖项被固定到特定版本，因此即使发布了这些依赖项的较新版本，也不会安装它们。这将使您（维护人员）有责任保持对依赖项中任何安全修复程序的最新了解，并通过安全更新定期发布 CLI 应用程序。考虑使用[Snyk 依赖升级](https://snyk.io/)在整个依赖关系树中自动解决安全问题。_全面披露：我是 Snyk 的开发者倡导者。_

> 👍 提示
> 使用 `npm shrinkwrap` 命令生成 shrinkwrap 锁定文件, 其格式与 `package-lock.json`文件的格式相同。

参考:

- [您真的知道锁文件如何处理 yarn 和 npm 软件包吗?](https://snyk.io/blog/making-sense-of-package-lock-files-in-the-npm-ecosystem/)
- [Yarn docs: 应该将锁定文件提交到存储库吗?](https://next.yarnpkg.com/advanced/qa#should-lockfiles-be-committed-to-the-repository)

# 3 互通性

本节介绍有关使 Node.js CLI 与其他命令行工具无缝集成的最佳实践，并遵循 CLI 正常操作的约定。

本节回答以下问题：

- _我可以导出此 CLI 的输出以便于分析吗？_
- _我可以将此 CLI 的输出通过管道传递到另一个命令行工具的输入吗？_
- _我可以通过管道将其他工具的结果发送到此 CLI 吗？_

在本节中：

- 3.1 [接受作为 STDIN 的输入](#31-%E6%8E%A5%E5%8F%97%E4%BD%9C%E4%B8%BA-STDIN-%E7%9A%84%E8%BE%93%E5%85%A5)
- 3.2 [启用结构化输出](#32-%E5%90%AF%E7%94%A8%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA)
- 3.3 [跨平台规范](#33-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E8%A7%84%E8%8C%83)
- 3.4 [允许环境覆盖](#34-%E5%85%81%E8%AE%B8%E7%8E%AF%E5%A2%83%E8%A6%86%E7%9B%96)

### 3.1 接受作为 STDIN 的输入

✅ **可行:** 对于预期使用数据的命令行应用程序，使用户可以轻松地将数据通过管道传输到标准输入(STDIN)。

❌ **否则:** 其他命令行应用程序将无法直接将其结果作为输入提供给您的 CLI，这会阻止常见的 UNIX 单行程序，例如：

```sh
$ curl -s "https://api.example.com/data.json" | your_node_cli
```

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

如果命令行应用程序处理数据，例如对通常使用`--file <file.json>`命令行参数指定的 JSON 文件执行某种任务。

### 3.2 启用结构化输出

✅ **可行:** 启用一个标志，以允许应用程序结果的结构化输出（如果有结果可用），以启用解析和轻松处理数据。

❌ **否则:** CLI 的用户可能需要应用复杂的正则表达式解析和匹配技术来提取 CLI 提供的输出数据。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

对于命令行应用程序的用户来说，解析数据并执行数据通常非常有用，例如使用它来填充 Web 仪表板或电子邮件通知。

能够轻松地从命令行输出中提取感兴趣的数据，为 CLI 用户提供了更友好的体验。

### 3.3 跨平台规范

✅ **可行:** 如果希望 CLI 在跨平台上运行，则必须适当注意 shell 命令以及诸如文件系统之类的组件，以及利用相关编程构造的开发人员。

❌ **否则:** 即使代码中没有功能差异，由于诸如路径分隔符错误等因素，CLI 在其他操作系统上也会中断。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

即使从程序的角度来看，该功能并没有被剥离，并且*应该*在不同的操作系统中很好地执行，但是某些细微的差别可能会使程序无法运行。让我们探讨必须尊重跨平台规范的几种情况。

#### 错误地产生命令

您可能需要派生一个运行 Node.js 程序的进程。例如，您具有以下脚本：

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

为什么这样更好呢？ `program.js`源代码以类 Unix 的 Shebang[符号开始，但是 Windows 不知道如何解释这一点，因为 Shebang 不是跨平台标准。](<https://en.wikipedia.org/wiki/Shebang_(Unix)>)

对于`package.json`脚本也是如此。 请考虑以下定义 npm 运行脚本的不良做法：

```
"scripts": {
  "postinstall": "myInstall.js"
}
```

这是由于`myInstalls.js`中的 Shebang 无法帮助 Windows 了解如何使用`node`解释器来运行它的实例。

相反，请遵循以下最佳做法：

```
"scripts": {
  "postinstall": "node myInstall.js"
}
```

#### Shell 解释器各不相同

在不同的 Shell 解释程序中，并非所有字符都被视为相同。

例如，Windows 命令提示符不会像在 bash shell 上所期望的那样将单引号与双引号相同，因此它无法识别单引号内的整个字符串属于同一字符串组，这将导致错误。

在使用 Windows 命令提示符的 Windows Node.js 环境中，该操作将失败：

package.json

```
"scripts": {
  "format": "prettier-standard '**/*.js'",
  ...
}
```

要修复此问题，以使此`npm run`脚本确实在 Windows、MacOS 和 Linux 之间跨平台：

package.json

```
"scripts": {
  "format": "prettier-standard \"**/*.js\"",
  ...
}
```

在此示例中，我们必须使用双引号，并使用 JSON 表示符对其进行转义。

#### 避免连接路径

跨不同平台的路径构造不同。 当它们是通过连接字符串手动构建时，它们必然不能在不同平台之间互操作。

让我们思考以下不良做法示例：

```js
const myPath = `${__dirname}/../bin/myBin.js`;
```

假定正斜杠是路径分隔符，例如在 Windows 上使用反斜杠。

与其手动构建文件系统路径，不如使用 Node.js 自己的`path`模块来执行此操作：

```js
const myPath = path.join(__dirname, "..", "bin", "myBin.js");
```

#### 避免用分号连接命令

众所周知，Linux Shell 支持使用分号（ `;` ）来链接要顺序运行的命令，例如： `cd /tmp; ls` 。但是，在 Windows 上执行相同操作将失败。

避免执行以下操作：

```js
const process = childProcess.exec(`${cliExecPath}; ${cliExecPath2}`);
```

而是使用双“＆”号或双管道符号：

```js
const process = childProcess.exec(`${cliExecPath} || ${cliExecPath2}`);
```

### 3.4 允许环境覆盖

✅ **可行:** 允许从环境变量读取配置，当配置与命令行参数冲突时，则允许覆盖环境变量。

❌ **否则:** 无法使用自定义配置调用 CLI。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

使用环境变量来检测和支持配置设置，因为这将是许多工具链中用于修改所调用的 CLI 应用程序行为的常用方法。

此外，CLI 应用程序可能需要动态环境变量设置来解析配置或标志值，或者不允许传递命令行参数，或者只是使通过命令行参数定义此信息变得非常重复和繁琐。

当命令行参数和环境变量都配置相同的设置时，应为环境变量赋予优先级以覆盖该设置。

# 4 辅助功能

本节介绍与最佳实践有关的内容，这些最佳实践是将 Node.js CLI 应用程序提供给希望使用它但缺少维护人员为其设计应用程序的环境的用户。

在本节中：

- 4.1 [容器化 CLI](#41-%E5%AE%B9%E5%99%A8%E5%8C%96-CLI)
- 4.2 [优雅降级](#42-%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7)
- 4.3 [Node.js 版本兼容性](#43-Node.js-%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E6%80%A7)
- 4.4 [Shebang 自动检测 Node.js 运行时](#44-Shebang-%E8%87%AA%E5%8A%A8%E6%A3%80%E6%B5%8B-Node.js-%E8%BF%90%E8%A1%8C%E6%97%B6)

### 4.1 容器化 CLI

✅ **可行:** 为 CLI 创建一个 docker 映像，并将其发布到 Docker Hub 之类的公共注册表中，以便没有 Node.js 环境的用户可以使用它。

❌ **否则:** 没有 Node.js 环境的用户将没有`npm`或`npx`可用，因此将无法运行您的 CLI 应用程序。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

从 npm 注册表中安装 Node.js CLI 应用程序通常将使用 Node.js 本机工具链（例如`npm`或`npx` 。这些在 JavaScript 和 Node.js 开发人员中很常见，并且有望在安装说明中引用。

但是，如果您将 CLI 程序作为普通大众使用，而不管他们是否熟悉 JavaScript 或该工具的可用性，那么仅以 npm 注册表中的安装形式分发 CLI 程序将受到限制。如果您的 CLI 应用程序打算在构建或 CI 环境中使用，那么安装 Node.js 相关的工具链依赖项可能也需要这些。

打包和分发可执行文件的方式有很多种，将其容器为预先与 CLI 应用程序捆绑在一起的 Docker 容器是一种易于使用且无依赖关系的替代方案(除了需要 Docker 环境之外)。

### 4.2 优雅降级

✅ **可行:** 在不支持的环境中，使用户能够选择退出彩色和动画丰富的显示，例如跳过交互性并以 JSON 形式提供格式化的输出。

❌ **否则:** 对于没有受支持终端的用户，使用终端交互(如提示和其他显示丰富的界面)可能会显著降低最终用户体验，并阻碍他们使用 CLI 应用程序，因为它具有丰富多彩的输出。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

通常以丰富多彩的输出，ASCII 图表甚至是终端上的动画和强大的提示机制的形式提供丰富的终端显示。对于拥有受支持的终端的用户而言，这些功能可能会带来出色的用户体验，但是对于那些没有显示内容的用户而言，它可能会显示乱码或完全无法使用。

为了使具有不受支持的终端的用户能够正确使用 Node.js CLI 应用程序，您可以选择：

- 自动检测终端功能并在运行时评估是否降低 CLI 交互性
- 为用户提供选择加入，以显式切换优雅降级，例如通过提供`--json`命令行参数强制其输出原始数据。

```
👍提示

支持优美的降级效果（例如JSON输出）不仅对
最终用户及其未使用的终端，但对于运行也很有价值
在持续集成环境中，以及使用户
能够将程序的输出与其他程序的输入相连接，或者
如果需要，导出数据。
```

<br>

### 4.3 Node.js 版本兼容性

✅ **可行:** 目标是支持和维护的 [Node.js 版本](https://nodejs.org/en/about/releases)。

❌ **否则:** 试图与旧的和不受支持的 Node.js 版本保持兼容的代码库将很难维护，并且会失去语言和运行时特性的好处。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

有时可能需要专门针对缺少新 ECAMScript 功能的较旧 Node.js 版本。
例如，如果您构建的 Node.js CLI 主要面向 DevOps 或 IT，那么他们可能没有最新运行时的理想 Node.js 环境。
作为参考，Debian stretch(旧版)附带了[node.js 8.11.1](https://packages.debian.org/search?suite=default§ion=all&arch=any&searchon=names&keywords=nodejs).

如果您确实需要定位 Node.js 的旧版本（例如 Node.js 8、6 或 4），它们都是生命周期终止的，则建议使用 Babel 这样的编译器，以确保生成的代码与该版本兼容这些版本附带的 V8 JavaScript 引擎和 Node.js 运行时。

另一个解决方法是提供 CLI 的容器化版本以避免旧目标。请参见 [(4.1) 容器化 CLI](#%E5%AE%B9%E5%99%A8%E5%8C%96-CLI).

不要精简程序代码，以使用与未维护或 EOL Node.js 版本匹配的旧 ECMAScript 语言规范，因为这只会导致代码维护问题。

### 4.4 Shebang 自动检测 Node.js 运行时

✅**可行:** 在[Shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>)声明中使用与安装无关的引用，该引用根据运行时环境自动定位 Node.js 运行时。

❌**否则:** 使用硬编码的 Node.js 运行时位置(如`#!/usr/local/bin/node` )仅适用于您自己的环境，可能会导致 Node.js CLI 在 Node.js 位置不同的其他环境中无法运行。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

通过将入口点文件作为`node cli.js`运行，然后将`#！/usr/local/bin/node`添加到`cli.js`文件的顶部，开发 Node.js CLI 可能是一个简单的开始，但是后者仍然是一种有缺陷的方法，因为不能保证`node`可执行文件的位置

应该注意的是，将`#！/usr/bin/env node`指定为最佳实践，仍然假设 Node.js 运行时被引用为`node`而不是`nodejs`或其他。

# 5 测试

在本节中：

- 5.1 [不信任语言环境](#51-%E4%B8%8D%E4%BF%A1%E4%BB%BB%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83)

### 5.1 不信任区域设置

✅ **可行:** 不要假设输出文本等同于您断言的字符串，因为测试可能在与您的语言环境或英语默认语言不同的系统上运行。

❌ **否则:** 开发人员在使用与英语默认语言环境不同的语言环境的系统上进行测试时，将遇到测试失败。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

当您选择通过运行 CLI 并分析输出来测试 CLI 时，您可能倾向于 grep 特定功能，以确保它们存在于输出中，例如在不带参数的情况下运行 CLI 时正确提供示例。例如：

```js
const output = execSync(cli);
expect(output).to.contain("Examples:"));
```

如果测试将在非英语的语言环境中运行，并且如果您的 CLI 参数解析库支持语言环境的自动检测并采用该语言环境，则由于从`Examples`到“语言环境”的语言转换，此类测试将失败。等效语言被设置为系统中的默认语言环境。

# 6 错误

本节介绍与最佳实践有关的内容，这些最佳实践是将 Node.js CLI 应用程序提供给希望使用它但缺少维护人员为其设计应用程序的环境的用户。

在本节中：

- 6.1 [信息性错误](#61-%E4%BF%A1%E6%81%AF%E6%80%A7%E9%94%99%E8%AF%AF)
- 6.2 [可行性错误](#62-%E5%8F%AF%E8%A1%8C%E6%80%A7%E9%94%99%E8%AF%AF)
- 6.3 [提供调试模式](#63-%E6%8F%90%E4%BE%9B%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F)
- 6.4 [正确使用退出代码](#64-%E6%AD%A3%E7%A1%AE%E4%BD%BF%E7%94%A8%E9%80%80%E5%87%BA%E4%BB%A3%E7%A0%81)

<br>

### 6.1 信息性错误

✅ **可行:** 报告错误时，提供可在项目文档中查找的可跟踪错误代码，从而简化错误消息的故障排除。

如果可能，将信息性错误消息扩展到所显示的任何信息，以便可以轻松解析这些信息，并且上下文清晰。

❌ **否则:** 一般的错误消息往往是模棱两可的，使用户很难搜索解决方案。解析和分析不是那么简单，在文档中引用它们也不是那么清晰。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

确保在返回错误消息时，它们包含参考号码或特定的错误代码，以后可以查阅。与 HTTP 状态代码非常相似，因此 CLI 应用程序需要命名错误或编码错误。

例如：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

### 6.2 可行性错误

✅ **可行:** 失败的错误消息应告诉用户解决方案需要什么，而不是抱怨存在错误。

❌ **否则:** 面对错误消息的用户，如果没有任何解决错误信息的提示，则可能无法成功的使用 CLI 应用程序。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

例如：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```

### 6.3 提供调试模式

✅ **可行:** 允许高级用户在需要诊断问题时启用更详细的信息。

❌ **否则:** 不要跳过调试功能。 从用户那里收集反馈，并找出错误的原因会变得更加困难。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

使用环境变量以及命令行参数来设置调试并打开扩展的详细级别。在代码中有意义的地方，植入调试消息，以帮助用户和维护者理解程序流，输入和输出以及其他使解决问题变得容易的信息。

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>
</details>

参考开源软件包：

- [debug](https://www.npmjs.com/package/debug)

### 6.4 正确使用退出代码

✅ **可行:** 使用正确的退出代码终止程序，该退出代码可以传达错误或退出状态的语义含义。

❌ **否则:** 不正确或缺失的退出代码将阻碍 CLI 在持续集成流和其他命令行脚本编写用例中的使用。

<details>
  <summary>➡️ <b>详情</b></summary>
</details>

命令行脚本经常利用 shell 的 `$?` 推断程序的状态码并对其执行操作。在持续集成（CI）流程中也可以使用它来确定步骤是否成功完成。

如果您的 CLI 总是以没有特定状态码的方式终止，即使出现错误也是如此，那么依赖于它的 Shell 和其他程序将无法得知。当发生错误导致程序终止时，您应该传达这种含义。例如：

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

参考: Bash shell 使用的[退出代码列表](http://www.tldp.org/LDP/abs/html/exitcodes.html)

<details>
  <summary>📦 <b>推荐的依赖包</b></summary>
</details>

参考开源软件包：

- [debug](https://www.npmjs.com/package/debug)

---

# 作者

**Node.js CLI 应用最佳实践** © [Liran Tal](https://github.com/lirantal), 根据 [CC BY-SA 4.0](./LICENSE) 许可证发行。

# 许可证

[![License](https://badgen.net/badge/License/CC%20BY-SA%204.0/green)](http://creativecommons.org/licenses/by-sa/4.0/)

本作品采用知识共享署名-ShareAlike 4.0 国际许可协议授权。
