<!-- Project Logo -->

<img width="100px" align="left" src="../../.github/nodejs-cli-apps-best-practices-logo.svg">

<!-- Main Header Links -->

<div align="right">
  <a href="https://www.github.com/lirantal/nodejs-cli-apps-best-practices" target="_blank">     <img style="margin:8px;" alt="Node.js CLI Apps Best Practices" src="https://badgen.net/badge/Node.js%20CLI%20Apps/Best%20Practices/purple"></a>
</div>

<!-- Project Title -->

<h1>Node.js CLI应用最佳实践</h1>

一个关于如何构建成功，富有同理心且用户友好的Node.js命令行界面（CLI）应用程序的精选最佳实践的集合。

### 为什么使用本指南？

一个糟糕的CLI可能会轻易阻止用户与其交互。 构建成功的CLI需要关注细节和对用户的同理心，以便创造良好的用户体验。 这很容易出错。

在本指南中，我汇总了各个重点领域的最佳实践，以优化与CLI应用程序进行交互时的理想用户体验。

### 特性：

- ✅ 21种构建成功的Node.js CLI应用程序的最佳实践
- ❤️帮助翻译成其他语言：[ [🇪🇸](./README-es.md) , [🇩🇪 , ?](./README-de.md) ]
- 🙏 欢迎贡献
- 最后更新：2020-02-14

<!-- Shields -->

<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img src="https://badgen.net/badge/License/CC%20BY-SA%204.0/green"></a>
</p>

### 为何是我？

我的名字是Liran Tal，我沉迷于构建命令行应用程序。

我最近的一些工作（构建Node.js CLI）包括以下开源项目：

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<table>
  <tr>
     <td align="center">       <a href="https://github.com/lirantal/dockly"><img width="150px;" alt="dockly - Immersive terminal interface for managing docker containers and services" src="https://repository-images.githubusercontent.com/71667498/d5576f00-69cd-11e9-83dd-2139ad967fdc"><br><sub><b>Dockly</b></sub></a><br>用于管理Docker容器和服务的沉浸式终端界面</td>
     <td align="center">       <a href="https://github.com/lirantal/npq"><img width="150px;" alt="npq - safely install packages with npm/yarn by auditing them as part of your install process" src="https://repository-images.githubusercontent.com/114298694/73d29f00-bb7d-11e9-80f5-5f94f25a76b4"><br><sub><b>npq</b></sub></a><br>通过在安装过程中进行审核来安全地使用npm / yarn安装软件包</td>
     <td align="center">       <a href="https://github.com/lirantal/lockfile-lint"><img width="150px;" alt="lockfile-lint - Lint an npm or yarn lockfile to analyze and detect security issues" src="https://repository-images.githubusercontent.com/189734318/e6973f80-e55a-11e9-8446-c63299297f5a"><br><sub><b>lockfile-lint</b></sub></a><br>检查npm或yarn锁定文件以分析和检测安全问题</td>
     <td align="center">       <a href="https://github.com/lirantal/is-website-vulnerable"><img width="150px;" alt="is-website-vulnerable - finds publicly known security vulnerabilities in a website's frontend JavaScript libraries" src="https://repository-images.githubusercontent.com/212983914/2d33b500-e84d-11e9-820e-799f368c4c44"><br><sub><b>is-website-vulnerable</b></sub></a><br>在网站的前端JavaScript库中查找已知的安全漏洞</td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<a href="https://twitter.com/liran_tal/" alt="follow Liran Tal on twitter"><img src="https://badgen.net/twitter/follow/liran_tal"></a>

---

<h3>目录</h3>

- 1 命令行体验
    - 1.1 [遵守POSIX参数](#11-respect-posix-args)
    - 1.2 [构建富有同理心的CLI](#12-build-empathic-clis)
    - 1.3 [状态数据](#13-stateful-data)
    - 1.4 [提供丰富多彩的体验](#14-provide-colorful-experience)
    - 1.5 [丰富的互动](#15-rich-interactions)
    - 1.6 [超链接无处不在](#16-hyperlinks-everywhere)
    - 1.7 [零配置](#17-zero-configuration)
    - 1.8 [遵守POSIX信号](#18-respect-posix-signals)
- 2 分发
    -  2.1 [选择体积较小的依赖项](#21-prefer-a-small-dependency-footprint)
    -  2.2 [使用shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)
- 3 互通性
    - 3.1 [接受如同STDIN的输入](#31-accept-input-as-stdin)
    - 3.2 [启用结构化输出](#32-enable-structured-output)
    - 3.3 [跨平台规范](#33-cross-platform-etiquette)
    - 3.4 [允许环境覆盖](#34-allow-environment-overrides)
- 4 辅助功能
    - 4.1 [容器化CLI](#41-containerize-the-cli)
    - 4.2 [优雅降级](#42-graceful-downplay)
    - 4.3 [Node.js版本兼容性](#43-nodejs-versions-compatibility)
    - 4.4 [Shebang自动检测Node.js运行时](#44-shebang-autodetect-the-nodejs-runtime)
- 5 测试
    -  5.1 [不信任区域设置](#51-put-no-trust-in-locales)
- 6 错误
    - 6.1 [信息性错误 ](#61-informational-errors)
    - 6.2 [可行性错误](#62-actionable-errors)
    - 6.3 [提供调试模式](#63-provide-debug-mode)
    - 6.4 [正确使用退出代码](#64-proper-use-of-exit-codes)

---

# 1 命令行体验

本节介绍与创建美观和高价值的用户体验Node.js命令行应用程序有关的最佳实践。

在本节中：

- 1.1 [遵守POSIX参数](#11-respect-posix-args)
- 1.2 [构建富有同理心的CLI](#12-build-empathic-clis)
- 1.3 [状态数据](#13-stateful-data)
- 1.4 [提供丰富多彩的体验](#14-provide-colorful-experience)
- 1.5 [丰富的互动](#15-rich-interactions)
- 1.6 [无处不在的超链接](#16-hyperlinks-everywhere)
- 1.7 [零配置](#17-zero-configuration)
- 1.8 [遵守POSIX信号](#18-respect-posix-signals)

<br>

### 1.1 遵守POSIX参数

✅ **Do:** 使用[兼容POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)命令行参数语法，该语法已被广泛接受为命令行工具的标准。

❌ **Otherwise:** 当CLI的参数、选项或命令参数的语法偏离他们习惯的Unix标准时，用户可能会感到沮丧。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

类UNIX操作系统普及了命令行和工具的使用，如`awk`、`sed`。 这些工具有效地标准化了命令行选项(又名标志)、选项参数和其他操作数的行为。

预期行为的一些示例：

- 可以在帮助或示例中将option-arguments或options标记为方括号(`[]` )表示它们是可选的，或带有尖括号(`<>` )表示它们是必需的。
- 使用缩写形式`-`指定的选项可以包含一个字母数字字符。
- 指定多个没有值的选项可以进行分组，例如`myCli -abc`等同于`myCli -a -b -c` 。

命令行高级用户希望您的命令行应用程序与其他Unix应用程序具有类似的约定。




### 1.2 构建富有同理心的CLI

✅ **Do:** 放置可帮助用户成功与CLI进行交互的工作流，否则这些交互会导致错误和挫败感。

❌ **Otherwise:** 如果不能在支持用户方面提供可操作的帮助，将会因为缺乏操作CLI的能力而导致受挫。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

一个程序的命令行界面与web用户界面没有什么不同，因为您可以按照程序作者的意愿完成尽可能多的工作，以确保它被成功地使用。

通过构建支持用户同理心的CLI来优化成功的交互。作为一个示例，让我们研究一下`curl`程序的情况，该程序期望将URL作为其主要数据输入，而用户没有提供它。此类故障将导致（希望）读取描述性错误消息或查看` curl --help `输出。然而，一个有同理心的CLI应该提供一个交互式的提示来捕获来自用户的输入，从而实现成功的交互。




### 1.3 状态数据

✅ **Do:** 在您的CLI应用程序的多次调用之间提供有状态体验，并记住值和数据，以便提供无缝交互。

❌ **Otherwise:** 要求您的用户通过多次调用CLI重复提供相同的信息，将会使您的用户感到烦恼。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

您可能会发现自己需要为CLI应用程序提供存储持久性，例如记住用户名，电子邮件，API令牌或CLI多次调用之间的其他首选项。使用允许应用程序保留此类用户设置的配置助手。

参考项目：

- [configstore](https://www.npmjs.com/package/configstore)
- [conf](https://www.npmjs.com/package/conf)




### 1.4 提供丰富多彩的体验

✅ **Do:** 在CLI应用程序中使用颜色来突出显示应用程序输出的一部分，并提供适当的降级或颜色检测，以允许自动选择退出，以免输出出现乱码。

❌ **Otherwise:** 苍白的程序输出中可能容易丢失信息，尤其是当输出文本繁重的时候。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

如今，大多数用于与命令行应用程序交互的终端都支持彩色文本，例如通过特制ANSI编码字符启用的文本。

命令行应用程序输出中的彩色显示可能会进一步带来更丰富的体验和更多的交互。也就是说，不受支持的终端可能会在屏幕上以乱码信息的形式进行降级的输出。此外，CLI可能用于不支持彩色输出的持续集成构建作业中。

参考项目：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)




<details>
  <summary>📦 <b>推荐套餐</b></summary>
</details>

参考开源软件包：

- [chalk](https://www.npmjs.com/package/chalk)
- [colors](https://www.npmjs.com/package/colors)




### 1.5 丰富的互动

✅ **Do:** 除了文本输入提示符之外，还可以利用丰富的命令行交互为CLI用户提供更流畅的体验。

❌ **Otherwise:** 当数据是以封闭选项（即下拉菜单）的形式出现时，作为输入的文本提示可能对用户来说很麻烦。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

丰富的交互性可以以提示输入的形式引入，提示输入比自由文本更复杂，例如下拉选择列表、单选按钮切换、评级、自动完成或隐藏密码输入。

丰富的交互性的另一种形式是动画加载器和进度条，它们在执行异步工作时为用户提供更好的体验。

许多CLI提供默认的命令行参数，而无需任何进一步的交互体验。不要强迫你的用户提供应用程序可以自行解决的参数。




<details>
  <summary>📦 <b>推荐套餐</b></summary>
</details>

参考开源软件包：

- [enquirer](https://www.npmjs.com/package/enquirer)
- [ora](https://www.npmjs.com/package/ora)
- [ink](https://www.npmjs.com/package/ink)
- [prompts](https://www.npmjs.com/package/prompts)




### 1.6 无处不在的超链接

✅ **Do:** 在文本输出中为两个URL使用格式正确的超链接(例如：`https://www.github.com`)，以及源代码(例如：`src/util.js:2:75`)-现代终端能够将这两者转换为可点击的链接。

❌ **Otherwise:** 避免像`git.io/abc`这样需要用户手动复制和粘贴的中断且非交互式的链接。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

如果您分享指向URL的链接，或者指向某个文件以及该文件中的特定行号和列，则可以提供指向这两个示例的格式正确的链接，一旦单击这些链接，就会在浏览器或IDE定义的位置打开。




### 1.7 零配置

✅ **Do:** 通过自动检测所需的配置和命令行参数值来优化即插即用体验

❌ **Otherwise:** 如果可以用可靠的方式自动检测命令行参数，并且调用的操作不需要显式要求用户交互（例如确认删除），则不要强制用户交互。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

目的是在运行CLI应用程序时提供“开箱即用”的体验。

围绕零配置构建的参考项目：

- [Jest JavaScript测试框架](https://jestjs.io)
- [Parcel](https://parceljs.org)，一个Web应用程序打包工具




### 1.8 遵守POSIX信号

✅ **Do:** 确保您的程序遵守 [POSIX signals](http://man7.org/linux/man-pages/man7/signal.7.html) 以使其能够与用户或其他程序正确交互。

❌ **Otherwise:** 您的程序将不能很好地与其他程序配合使用，并引入意外行为。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

尤其是对于CLI应用程序，与用户输入交互是很常见的，如果管理不当，可能会导致您的应用程序无法响应SIGINT中断，用户在按下`CTRL+C`键时通常会使用SIGINT中断。

当程序是通过非人为交互进行编排时，不尊重过程信号的问题会更加严重。 例如，在Docker容器中运行但不会响应发送给它的软件中断信号的CLI。




# 2 分发

本节介绍有关以最佳方式分发和打包Node.js命令行应用程序的最佳实践。

在本节中：

- 2.1 [选择体积较小的依赖项](#21-prefer-a-small-dependency-footprint)
- 2.2 [使用 shrinkwrap, Luke](#22-use-the-shrinkwrap-luke)

### 2.1 选择体积较小的依赖项

✅ **Do:** 最大限度地减少生产依赖项的使用，使用较小的替代依赖项，并检查您的依赖项的内存占用情况，以确保Node.js CLI的最小捆绑。 要平衡这一点，要小心不要通过重新造轮子来过度优化依赖项的使用。

❌ **Otherwise:** 应用程序中依赖项的大小和使用将影响Node.js CLI的安装时间，从而可能会带来糟糕的用户体验。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

使用`npx`调用的Node.js CLI的快速`npm安装`将提供更好的用户体验。当总体依赖关系和传递依赖关系的占用空间保持在合理大小时，就可以做到这一点。

一次安装全局` npm `缓慢安装的` npm `软件包将提供一次的糟糕体验，但是，用户使用`npx`调用可执行包会使性能下降，因为`npx`总是从注册表获取和安装包，这一点更加显著和明显。




### 2.2 使用 shrinkwrap, Luke

✅ **Do:**将npm的`npm-shrinkwrap.json` shrinkwrap.json用作锁定文件，以确保最终用户在安装npm软件包时将固定的依赖项版本（直接和传递）传播给最终用户。

❌ **Otherwise:** 不修复应用程序依赖项的版本将意味着程序包管理器（例如` npm `）将在安装过程中解决它们，而通过版本范围安装的可传递依赖项可能会导致您无法控制的重大更改， 可能会导致您的Node.js CLI应用程序无法构建或运行。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

使用~~ force ~~ shrinkwrap, Luke!

通常，NPM包在安装时只定义其直接依赖项及其版本范围，并且NPM包管理器将在安装时解析所有可传递依赖项的版本。 随着时间的推移，依赖项的解析版本会有所不同，因为新的直接依赖项和传递依赖项将发布新版本。

尽管[语义版本控制](https://semver.org/)在维护人员中被广泛接受，但众所周知，npm会为正在安装的普通软件包[引入许多依赖关系](https://snyk.io/blog/how-much-do-we-really-know-about-how-packages-behave-on-the-npm-registry/)，这增加了软件包引入可能破坏应用程序的更改的风险。

使用`npm-shenshwrap.json`的另一方面是您强加给您的消费者的安全隐患。将要安装的依赖项固定到特定版本，因此，即使发布了这些依赖项的较新版本，也不会安装它们。这将使您（维护人员）有责任保持对依赖项中任何安全修复程序的最新了解，并通过安全更新定期发布CLI应用程序。考虑使用[Snyk依赖关系升级](https://snyk.io/) 在整个依赖关系树中自动解决安全问题。 *全面披露：我是Snyk的开发者倡导者。*

> 👍 提示
> 使用 `npm shrinkwrap` 命令生成shrinkwrap锁定文件, 其格式与 `package-lock.json`文件的格式相同。

参考：

- [您真的知道锁定文件如何处理yarn和npm软件包吗？](https://snyk.io/blog/making-sense-of-package-lock-files-in-the-npm-ecosystem/)
- [Yarn文档：应该将锁定文件提交到存储库吗？](https://next.yarnpkg.com/advanced/qa#should-lockfiles-be-committed-to-the-repository)




# 3 互通性

本节介绍与使Node.js CLI与其他命令行工具无缝集成有关的最佳实践，并遵循CLI可以正常运行的约定。

本部分回答以下问题：

- *我可以导出此CLI的输出以便于分析吗？*
- *我可以将此CLI的输出通过管道传递到另一个命令行工具的输入吗？*
- *我可以通过管道将其他工具的结果发送到此CLI吗？*

在本节中：

- 3.1 [接受如同STDIN的输入](#31-accept-input-as-stdin)
- 3.2 [启用结构化输出](#32-enable-structured-output)
- 3.3 [跨平台规范](#33-cross-platform-etiquette)
- 3.4 [允许环境覆盖](#34-allow-environment-overrides)

### 3.1 接受如同STDIN的输入

✅ **Do:** 对于预期使用数据的命令行应用程序，使用户可以轻松地将数据通过管道传输到标准输入(STDIN)。

❌ **Otherwise:** 其他命令行应用程序将无法直接将其结果作为输入提供给您的CLI，这会阻止常见的UNIX单行程序，例如：

```sh
$ curl -s "https://api.example.com/data.json" | your_node_cli
```

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

如果命令行应用程序处理数据，例如对通常使用`--file <file.json>`命令行参数指定的JSON文件执行某种任务。




### 3.2 启用结构化输出

✅ **Do：**启用一个标志，以允许应用程序结果的结构化输出（如果有结果可用），以启用解析和轻松处理数据。

❌ **Otherwise：** CLI的用户可能需要应用复杂的正则表达式解析和匹配技术来提取CLI提供的输出数据。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

对于命令行应用程序的用户来说，解析数据并执行数据通常非常有用，例如使用它来填充Web仪表板或电子邮件通知。

能够轻松地从命令行输出中提取感兴趣的数据，为CLI用户提供了更友好的体验。




### 3.3 跨平台规范

✅ **Do:** 如果希望CLI在跨平台上运行，则必须适当注意shell命令以及诸如文件系统之类的组件，以及利用相关编程构造的开发人员。

❌ **Otherwise:** 即使代码中没有功能差异，由于诸如路径分隔符错误等因素，CLI在其他操作系统上也会中断。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

即使从程序的角度来看，该功能并没有被剥离，并且*应该*在不同的操作系统中很好地执行，但是某些细微的差别可能会使程序无法运行。让我们探讨必须尊重跨平台规范的几种情况。

#### 错误的产生命令

您可能需要产生一个运行Node.js程序的进程。例如，您具有以下脚本：

`program.js`

```js
#!/usr/bin/env node

// the rest of your app code
```

这个管用：

```
const cliExecPath = 'program.js'
const process = childProcess.spawn(cliExecPath, [])
```

这个更好：

```
const cliExecPath = 'program.js'
const process = childProcess.spawn('node', [cliExecPath])
```

为什么这样更好呢？ `Program.js`源代码以类UNIX的[Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))符号开始，但是Windows不知道如何解释这一点，因为Shebang不是跨平台标准。

对于`Package.json`脚本也是如此。 请考虑以下定义npm运行脚本的不良做法：

```
"scripts": {
  "postinstall": "myInstall.js"
}
```

这是由于`myInstalls.js`中的Shebang无法帮助Windows了解如何使用`node`解释器来运行它。

相反，请遵循以下最佳做法：

```
"scripts": {
  "postinstall": "node myInstall.js"
}
```

#### Shell解释器各不相同

在不同的Shell解释程序中，并非所有字符都被视为相同。

例如，Windows命令提示符不会像在bash shell上所期望的那样将单引号与双引号相同，因此它无法识别单引号内的整个字符串属于同一字符串组，这将导致错误。

在使用Windows命令提示符的Windows Node.js环境中，该操作将失败：

package.json

```
"scripts": {
  "format": "prettier-standard '**/*.js'",
  ...
}
```

要修复此问题，以使此`npm run`脚本确实在Windows、MacOS和Linux之间跨平台：

package.json

```
"scripts": {
  "format": "prettier-standard \"**/*.js\"",
  ...
}
```

在此示例中，我们必须使用双引号，并使用JSON表示符对其进行转义。

#### 避免连接路径

跨不同平台的路径构造不同。 当它们是通过连接字符串手动构建时，它们必然不能在不同平台之间互操作。

让我们想想以下不良做法示例：

```js
const myPath = `${__dirname}/../bin/myBin.js`
```

假定正斜杠是路径分隔符，例如在Windows上使用反斜杠。

与其手动构建文件系统路径，不如使用Node.js自己的`path`模块来执行此操作：

```js
const myPath = path.join(__dirname, '..', 'bin', 'myBin.js')
```

#### 避免用分号连接命令

众所周知，Linux Shell支持使用分号（ `;` ）来连接要顺序运行的命令，例如： `cd /tmp; ls` 。但是，在Windows上执行相同操作将失败。

避免执行以下操作：

```js
const process = childProcess.exec(`${cliExecPath}; ${cliExecPath2}`)
```

而是使用双“＆”号或双管道符号：

```js
const process = childProcess.exec(`${cliExecPath} || ${cliExecPath2}`)
```




### 3.4 允许环境覆盖

✅ **Do:** 允许从环境变量读取配置，当配置与命令行参数冲突时，则允许覆盖环境变量。

❌ **Otherwise:** 无法使用自定义配置调用CLI。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

使用环境变量来检测和支持配置设置，因为这将是许多工具链中用于修改所调用的CLI应用程序行为的常用方法。

此外，CLI应用程序可能需要动态环境变量设置来解析配置或标志值，或者不允许传递命令行参数，或者只是使通过命令行参数定义此信息变得非常重复和繁琐。

当命令行参数和环境变量都配置相同的设置时，应为环境变量赋予优先级以覆盖该设置。




# 4 辅助功能

本节介绍与最佳实践有关的内容，这些最佳实践是将Node.js CLI应用程序提供给希望使用它但缺少维护人员为其设计应用程序的环境的用户。

在本节中：

- 4.1 [容器化CLI](#41-containerize-the-cli)
- 4.2 [优雅降级](#42-graceful-downplay)
- 4.3 [Node.js版本兼容性](#43-nodejs-versions-compatibility)
- 4.4 [Shebang自动检测Node.js运行时](#44-shebang-autodetect-the-nodejs-runtime)

### 4.1 容器化CLI

✅ **Do:** 为CLI创建一个docker映像，并将其发布到Docker Hub之类的公共注册表中，以便没有Node.js环境的用户可以使用它。

❌ **Otherwise:** 没有Node.js环境的用户将无法使用`npm`或`npx`，因此将无法运行您的CLI应用程序。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

从npm注册表安装Node.js CLI应用程序通常使用Node.js原生工具链，如`npm`或`npx`。 这些在JavaScript和Node.js开发人员中很常见，预计将在安装说明中引用。

但是，如果您将CLI程序作为普通大众使用，而不管他们是否熟悉JavaScript或该工具的可用性，那么仅以npm注册表中的安装形式分发CLI程序将受到限制。如果您的CLI应用程序打算在构建或CI环境中使用，那么安装Node.js相关的工具链依赖项可能也需要这些。

打包和分发可执行文件的方式有很多种，将其容器为预先与CLI应用程序捆绑在一起的Docker容器是一种易于使用且无依赖关系的替代方案(除了需要Docker环境之外)。




### 4.2 优雅降级

✅ **Do:** 为用户提供在不受支持的环境中选择退出彩色和丰富动画显示的能力，例如通过跳过交互性并以JSON形式提供格式化输出。

❌ **Otherwise:** 对于没有受支持终端的用户，使用终端交互(如提示和其他显示丰富的界面)可能会显著降低最终用户体验，并阻碍他们使用CLI应用程序，因为它具有丰富多彩的输出。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

通常以丰富多彩的输出，ASCII图表甚至是终端上的动画和强大的提示机制的形式提供丰富的终端显示。对于拥有受支持的终端的用户而言，这些功能可能会带来出色的用户体验，但是对于那些没有显示内容的用户而言，它可能会显示乱码或完全无法使用。

为了使具有不受支持的终端的用户能够正确使用Node.js CLI应用程序，您可以选择：

- 自动检测终端功能并在运行时评估是否降低CLI交互性
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

### 4.3 Node.js版本兼容性

✅ **Do:** 目标是支持和维护的[Node.js版本](https://nodejs.org/en/about/releases)。

❌ **Otherwise:** 试图与旧的和不受支持的Node.js版本保持兼容的代码库将很难维护，并且会失去语言和运行时特性的好处。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

有时可能需要专门针对缺少新ECAMScript功能的旧版Node.js。例如，如果您要构建主要用于DevOps或IT的Node.js CLI，则它们可能没有理想的Node.js环境，并且运行时是最新的。作为参考，Debian Stretch（oldstable）随[Node.js 8.11.1一起提供](https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=nodejs) 。

如果您确实需要用Node.js的旧版本（例如Node.js 8、6或4），它们都是生命周期终止的，则建议使用Babel这样的编译器，以确保生成的代码与该版本兼容这些版本附带的V8 JavaScript引擎和Node.js运行时。

另一个解决方法是提供CLI的容器化版本以避免旧目标。请参见[（4.1）容器化CLI](#containerize-the-cli) 。

不要精简程序代码，以使用与未维护或EOL Node.js版本匹配的旧ECMAScript语言规范，因为这只会导致代码维护问题。




### 4.4 Shebang自动检测Node.js运行时

✅ **Do:** 在您的 [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) 声明中使用与安装无关的引用，该声明根据运行时环境自动定位Node.js运行时

❌ **Otherwise:** 使用硬编码的Node.js运行时位置(如`#！/usr/local/bin/node`)仅适用于您自己的环境，可能会导致Node.js CLI在Node.js位置不同的其他环境中无法运行。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

通过将入口点文件作为`node cli.js`运行，然后将`#！/usr/local/bin/node`添加到`cli.js`文件的顶部，开发Node.js CLI可能是一个简单的开始，但是后者仍然是一种有缺陷的方法，因为不能保证`node`可执行文件的位置

应该注意的是，将`#!/usr/bin/env node`为最佳实践，仍然是假设Node.js运行时被引用为`node`而不是`nodejs`或其他方式。




# 5 测试

在本节中：

- 5.1 [不信任区域设置](#51-put-no-trust-in-locales)

### 5.1 不信任区域设置

✅ **Do:** 不要假设输出文本等同于您断言的字符串，因为测试可能在与您的语言环境或英语默认语言不同的系统上运行。

❌ **Otherwise:** 开发人员在与英语默认语言环境不同的系统上测试时，将会遇到测试失败的情况。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

当您选择通过运行CLI并分析输出来测试CLI时，您可能倾向于grep特定功能，以确保它们存在于输出中，例如在不带参数的情况下运行CLI时正确提供示例。例如：

```js
const output = execSync(cli);
expect(output).to.contain("Examples:"));
```

当测试将在非基于英语的区域设置上运行时，如果您的CLI参数解析库支持自动检测区域设置并采用它，则这样的测试将失败，因为从`Examples`到与区域设置等效的语言被设置为系统中的默认区域设置。




# 6 错误

本节介绍与最佳实践有关的内容，这些最佳实践是使希望使用Node.js CLI应用程序的用户可以使用它，但又缺乏维护者为其设计应用程序的理想环境。

在本节中：

- 6.1 [信息性错误](#61-informational-errors)
- 6.2 [可行性错误](#62-actionable-errors)
- 6.3 [提供调试模式](#63-provide-debug-mode)
- 6.4 [正确使用退出代码](#64-proper-use-of-exit-codes)

<br>

### 6.1 信息性错误

✅ **Do:** 报告错误时，提供可在项目文档中查找的可跟踪错误代码，从而简化错误消息的故障排除。

如果可能，将信息性错误消息扩展到所显示的任何信息，以便可以轻松解析这些信息，并且上下文清晰。

❌ **Otherwise:** 一般的错误消息往往是模棱两可的，使用户很难搜索解决方案。解析和分析不是那么简单，在文档中引用它们也不是那么清晰。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

确保在返回错误消息时，它们包含参考号码或特定的错误代码，以后可以查阅。与HTTP状态代码非常相似，因此CLI应用程序需要命名错误或编码错误。

例如：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```




### 6.2 可行性错误

✅ **Do：**失败的错误消息应告诉用户解决方案需要什么，而不是抱怨存在错误。

❌ **Otherwise：**面对错误消息的用户，如果没有任何解决错误信息的提示，则可能无法成功的使用CLI应用程序。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

例如：

```sh
$ my-cli-tool --doSomething

Error (E4002): please provide an API token via environment variables
```




### 6.3 提供调试模式

✅ **Do:** 允许高级用户在需要诊断问题时启用更详细的信息。

❌ **Otherwise:** 不要跳过调试功能。 从用户那里收集反馈，并找出错误的原因会变得更加困难。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

使用环境变量以及命令行参数来设置调试并打开扩展的详细级别。在代码中有意义的地方，植入调试消息，以帮助用户和维护者理解程序流，输入和输出以及其他使解决问题变得容易的信息。




<details>
  <summary>📦 <b>推荐套餐</b></summary>
</details>

参考开源软件包：

- [debug](https://www.npmjs.com/package/debug)




### 6.4 正确使用退出代码

✅ **Do:** 使用适当的退出代码终止程序，该退出代码可以传达错误或退出状态的语义含义。

❌ **Otherwise:** 不正确或缺失的退出代码将阻碍CLI在持续集成流和其他命令行脚本编写用例中的使用。

<details>
  <summary>Details️ <b>详细信息</b></summary>
</details>

命令行脚本经常利用shell的`$?`推断程序的状态码并对其执行操作。在持续集成（CI）流程中也可以使用它来确定步骤是否成功完成。

如果您的CLI总是以没有特定状态码的方式终止，即使出现错误也是如此，那么依赖于它的Shell和其他程序将无法得知。当发生错误导致程序终止时，您应该传达这种含义。例如：

```js
try {
  // something
} catch (err) {
  // cleanup or otherwise
  // then exit with proper status code
  process.exit(1)
}
```

退出代码的简短参考：

- 退出代码0表示成功执行
- 退出代码1表示失败

您也可以选择使用具有程序语义的自定义退出代码，但是如果这样做，请确保正确记录它们。

参考: Bash shell使用的[退出代码列表](http://www.tldp.org/LDP/abs/html/exitcodes.html)




<details>
  <summary>📦 <b>推荐套餐</b></summary>
</details>

参考开源软件包：

- [debug](https://www.npmjs.com/package/debug)




---

# 作者

**Node.js CLI Apps最佳实践** © [Liran Tal](https://github.com/lirantal) ，根据[CC BY-SA 4.0](./LICENSE)许可证发行。

# 许可证

[![License](https://badgen.net/badge/License/CC%20BY-SA%204.0/green)](http://creativecommons.org/licenses/by-sa/4.0/)

本作品采用知识共享署名-ShareAlike 4.0国际许可协议授权。
