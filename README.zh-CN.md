<h1 align="center">claude-video</h1>

<p align="center">
  <img src="./docs/assets/project-icon.svg" width="128" height="128" alt="claude-video 图标">
</p>

<p align="center"><strong>全部用代码写出来的手绘 / 像素风口播动画视频。</strong></p>
<p align="center">Remotion + React + SVG 画面，程序化合成的配乐和音效，所有动画都对齐到口播字幕上。</p>

<p align="center">
  <a href="./LICENSE"><img alt="许可证：MIT" src="https://img.shields.io/github/license/Azure12355/claude-video"></a>
  <a href="https://github.com/Azure12355/claude-video/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/Azure12355/claude-video"></a>
  <a href="https://github.com/Azure12355/claude-video/commits"><img alt="最近提交" src="https://img.shields.io/github/last-commit/Azure12355/claude-video"></a>
</p>

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong>
</p>

<p align="center">
  <img src="./docs/assets/preview-pixel.jpg" width="49%" alt="像素贴纸风画面">
  <img src="./docs/assets/preview-demo.jpg" width="49%" alt="手绘 demo 画面">
</p>

## 目录

- [概述](#概述)
- [特性](#特性)
- [快速开始](#快速开始)
- [仓库里没有的内容](#仓库里没有的内容)
- [做新一期](#做新一期)
- [项目结构](#项目结构)
- [Agent 快速上手](#agent-快速上手)
- [许可证](#许可证)

## 概述

claude-video 是一个 Remotion 工程，用来做讲 AI、科技史和科学的短口播动画（以中文为主）。画面不是在编辑器里画的：角色、道具、背景、字幕、配乐和音效都由代码生成，唯一需要人提供的是一段口播录音和它的字幕。

仓库包含可复用的组件库、风格库、音频合成流水线，以及 20 多期视频的完整源码，可以直接当示例看。

## 特性

- **帧号纯函数动画**：每个组件都由帧号算出这一帧的样子；随机用带种子的 `rand(seed)`，渲染结果完全确定。
- **字幕驱动时间轴**：`makeCues` 把 SRT 变成 `cf(n)`（第 n 句开始帧）、`cw(n, '词')`（说到某个词的帧）。重录口播后重新导入字幕，所有动画自动重新对齐。
- **角色库**：矢量或像素风小人（`Char`），支持皮肤、配饰、表情、走路和伸手动画，通过 `CharStyle` Context 切换画风。
- **多种画风**：像素贴纸风（竖屏 3:4）、像素手绘演播室（横屏 16:9，A-roll + B-roll）、矢量手绘风（竖屏 9:16），以及 Vox 拼贴 / 时间轴套件。
- **程序化音频**：14 个合成音效，每期配乐会按人声自动闪避。
- **干净导出**：人声 / 配乐 / 音效分轨渲染，再经限幅重新混音，避开 Remotion 内部混音削波。
- **风格库**：35 种艺术风格和 9 种解说语法（配方和场景代码），做新一期前先挑风格。

## 快速开始

需要 Node.js（开发时用 v24），导出需要 `ffmpeg`。

```sh
git clone https://github.com/Azure12355/claude-video.git
cd claude-video
npm install
npm run audio      # 生成共享音效和 ep00 demo 配乐到 public/audio/
npm run studio     # 打开 Remotion Studio：http://localhost:3000
```

建议先打开 `ep00-demo`：它是独立的 30 秒 demo，不依赖任何外部素材。

其他常用命令：

```sh
npm test                       # vitest
npm run typecheck              # tsc --noUnusedLocals
npx remotion still src/index.ts ep06-context out.jpg --frame=200 --scale=0.4   # 渲染单帧
npm run export -- ep00-demo    # 导出 out/ep00-demo/ep00-demo.mp4
```

> `npm run audio` 跑到缺少人声的那一期时会报 `ENOENT ... voice.wav` 并停止，共享音效和 ep00 配乐在此之前已经生成。

## 仓库里没有的内容

为了保护作者隐私和第三方版权，以下内容**有意没有**放进仓库：

| 路径 | 原本是什么 | 影响 |
|---|---|---|
| `public/audio/<期>/voice.wav` | 原始口播录音 | 各期在 Studio 里没有人声，也无法生成该期配乐 |
| `public/footage/<期>/` | 真实照片和视频片段（B-roll） | ep03、ep07、ep21、ep22 中这些面板为空 |
| `public/images/ep04-opus55/` | ep04 用到的截图 | ep04 的图片面板为空 |
| `materials/`、`out/` | 原始录音、文稿、成片 | — |

每一期的画面代码、字幕文本（`cues.json`）和场景源码都保留了，可以研究、改用，也可以换上自己的人声。

## 做新一期

1. 把口播转成 SRT 字幕，原始素材放到 `materials/epXX-主题/`。
2. 人声标准化到约 −16 LUFS，存为 `public/audio/epXX-主题/voice.wav`（48 kHz、立体声、16-bit）。
3. 导入字幕：`npm run cues -- materials/epXX-主题/字幕.srt src/episodes/epXX-主题/cues.json`。
4. 新建 `audio/episodes/epXX-主题.mjs`（配乐段落表），运行 `npm run audio`。
5. 新建 `src/episodes/epXX-主题/`，竖屏参考 `ep02-llm`、横屏参考 `ep03-cc`；在 `src/Root.tsx` 注册，并加 `tests/episodes/epXX-主题.test.ts`。
6. 用 `npx remotion still` 抽帧检查，在 Studio 里预览，再 `npm run export -- epXX-主题`。

## 项目结构

| 路径 | 用途 |
|---|---|
| `src/library/` | 可复用组件：`Show` 骨架、字幕工具、角色、道具、场景、Vox 套件（[目录](src/library/README.md)） |
| `src/episodes/` | 每期一个目录；`ep00-demo` 独立，其余都基于 `Show` |
| `src/Root.tsx` | 注册所有作品 |
| `audio/` | 音效合成、配乐引擎、每期配乐段落表 |
| `scripts/` | 字幕导入、导出、分轨混音 |
| `styles/` | 风格库（[总表](styles/README.md)） |
| `tests/` | 素材库和每期的测试 |
| `public/fonts/` | 随仓库分发的 OFL 字体（[许可](public/fonts/LICENSES.md)） |

## Agent 快速上手

### 目标

做出确定性的口播动画：每个画面都是帧号的纯函数，并且锚定在字幕时间上。不做通用视频编辑器，也不托管作者的录音和素材。

### 权威来源

- 工程约定和流水线：[`AGENTS.md`](AGENTS.md)
- 组件目录：[`src/library/README.md`](src/library/README.md)
- 作品注册：`src/Root.tsx`
- 测试：`tests/`

### 安全工作流

1. 先读 `AGENTS.md` 和素材库 README。
2. 修改场景或素材库组件；`src/library/` 不能 import `src/episodes/`。
3. 运行 `npm test` 和 `npm run typecheck`。
4. 用 `npx remotion still ... --scale=0.4` 检查画面，不要为检查渲染整片。

### 命令

```sh
npm install
npm test
npm run typecheck
npm run studio
```

### 边界

- 不提交录音、成片、真实素材、`.env` 文件或密钥。
- 组件里不用 `Math.random()`、CSS 动画或真实时间。
- 只引入允许再分发的第三方素材，并记录来源。

## 许可证

代码以 [MIT 许可证](LICENSE) 发布。

第三方内容：

- `public/fonts/` 中的字体采用 SIL Open Font License 1.1，见 [`public/fonts/LICENSES.md`](public/fonts/LICENSES.md)。
- `styles/` 中的艺术风格和解说语法改编自 [alchaincyf/huashu-art-motion](https://github.com/alchaincyf/huashu-art-motion)（MIT），见 [`styles/LICENSE-huashu-art-motion`](styles/LICENSE-huashu-art-motion)。
- 视频里出现的产品名称和标志归各自所有者，仅用于评论和讲解。
