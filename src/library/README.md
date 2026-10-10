# 素材库

所有视频共用的组件。做新一期时先在这里找，找不到再在自己那一期里写；写完觉得下次还能用，就挪进来并补一行到这份目录。

约定：素材库只能依赖素材库，**不能** import `src/episodes/` 里的任何东西。

## 骨架

| 文件 | 内容 | 用法 |
|---|---|---|
| `Show.tsx` | `Show` 口播视频骨架：背景、场景切换（入场放大、出场上移）、章节标签、字幕、人声/配乐/音效轨 | 每期写一个 `ShowConfig`（场景表、时长、`cueAt`、人声和配乐路径），竖屏用默认值，横屏传 `w/h/stage/subY/chapter`；`look: 'sticker'` 开贴纸风，`keywords` 加本期字幕高亮词 |
| `cues.ts` | `makeCues(字幕, 秒数)` → `cf(n)` 第 n 句开始帧、`ce(n)` 结束帧、`cw(n, '词')` 说到某词的帧、`cueAt(帧)`、`DURATION` | 每期 `cues.ts` 调一次；所有动画都挂在 `cf/cw` 上，换口播只要换字幕 |
| `types.ts` | `SceneDef`（场景：起始帧、章节标题、组件、音效表）、`SfxCue`（`[音效名, 帧, 音量]`） | 场景表和音效表的类型 |
| `Subtitles.tsx` | `Subtitles` 手绘字幕条（关键词黄色高亮、超长自动缩字号）、`ChapterTag` 章节标签、`KEYWORDS` | 由 `Show` 使用；想加高亮词改 `KEYWORDS` |
| `theme.ts` | 颜色 `C`、描边、手绘圆角 `wobblyRadius`、`box`、`popTextStyle`，英文字体 | 所有组件的配色来源 |
| `fonts.ts` | `FONT_CN` 站酷快乐体（本地 TTF）、`FONT_CODE` 代码字体 | 中文一律用 `FONT_CN` |
| `anim.ts` | 缓动（`easeOutBack` 等）、`prog` 进度、`keyframes` 关键帧、`rand` 确定性随机、`boil` 手绘抖动、`reach` 伸手曲线 | 动画一律由帧号算出来；随机只能用 `rand(seed)` |

## 画面风格 look

`ui.tsx` 里的 `Look`：`classic`（默认，手绘细线）和 `sticker`（贴纸风：大字描边加粗、外加白边和硬投影、便签和卡片硬投影、`Pop` 出来的元素会轻轻晃动）。风格通过 CSS 变量挂在 `Show` 的根节点上，`bigText`、`txt`、`Note`、`Card`、字幕和章节标签都会自动跟着变，不需要改场景代码。个别元素不想晃，就给 `Pop` 传 `still`。新一期建议默认用 `sticker`（ep05 起）。

## 角色 `character/`

| 文件 | 内容 |
|---|---|
| `Char.tsx` | **首选入口**。`Char` 在舞台坐标放一个小人：位置、缩放、表情 `eyes`、走路、举手、伸缩手臂 `arm`、配饰 `wear`、像素皮肤 `skin`；`kind="bot"` 是灰色无手的普通 AI。`CharStyle` Provider 切换画风：`vector`（默认）或 `pixel` |
| `PixelBuddy.tsx` | 像素风小人（22×17 格），皮肤：`santa` 圣诞、`cowboy` 牛仔、`chef` 厨师、`detective` 侦探；配饰：`headphones` 耳机。**没有嘴** |
| `BuddyFigure.tsx` | 矢量手绘版小人（前两期用），支持 `mouth`、`color`、`nubs` |
| `Accessories.tsx` | 矢量版配饰：圣诞帽、耳机、眼镜、墨镜、学士帽、太空头盔、书生帽、侦探帽、派对帽、皇冠、领结 |
| `Arm.tsx` | 伸缩手臂（从肩膀伸到目标点） |
| `types.ts` | `Eyes` 表情：`open` `happy` `closed` `wide` `flat` `star` 星星眼 `heart` 爱心眼 `spiral` 晕 |

用户偏好：**像素风**，皮肤只用上面 5 套；CC 没有嘴巴。

## 特效 `fx.tsx`

| 组件 | 用途 |
|---|---|
| `DotPaper` / `DoodlePaper` | 点阵纸背景 / 点阵纸 + 缓慢漂浮的小涂鸦（新视频默认用 `DoodlePaper`） |
| `Burst` | 元素弹出时的放射线 + 小星星 |
| `Emote` | 角色头顶的反应：`!` `?` `heart` `sweat` `zzz` `note` `idea` `anger` |
| `FocusLines` | 漫画集中线（震惊、强调） |
| `PopText` | 卡通弹字（SNIP! / SHAKE: MAX） |
| `Confetti` | 彩纸 |
| `PaperGrain` | 纸张颗粒 + 暗角（`Show` 自动加） |

## 界面 `ui.tsx` 与图标 `icons.tsx`

- `ui.tsx`：`Pop`（在某帧弹出/滑入、某帧淡出的容器，最常用）、`Note` 彩色标签、`Card` 手绘卡片、`Marker` 荧光笔、`bigText` 描边大字、`txt` 文字样式、`jolt` 抖一下
- `icons.tsx`：文件 `VideoFile` `PlainFile` `Folder`，勾叉 `Check` `Cross` `CheckBox`，`Arrow`（可画出进度），`Bulb` 灯泡、`StopSign`、`Trash`、`ThumbUp`、`Coffee`、`UserFace`（「你」：calm/angry/happy/reading）、`ToolIcon`（读文件/建文件夹/读视频/移动文件/列表）、`ChatIcon`、`LaptopIcon`、`Stamp` + `stampScale` 盖章、`Flag`、`CalendarIcon` 日历、`SheetIcon` 表格、`Toggle` 开关、`PlugIcon` 插头（`usbc` 统一接口和几种各不相同的老式充电头）、`DatabaseIcon` 数据库、`KeyIcon` 钥匙

## 道具 `items/`

- `apps.tsx`（屏幕类）：`Photo` 截图/图片素材相框（可在原图坐标上画高亮框 `marks`，图片放 `public/images/<期>/`）、`Win` 应用窗口（亮/暗）、`Code` 逐字打出的代码、`Wave` 波形、`PhoneVideo` / `ScreenVideo` 在框里播放真实视频素材（**必须传 `at`**，否则会从错误的位置开始播）、`FilmStrip` 胶片条、`Stopwatch` 秒表、`Fader` 推子、`Cursor` 光标、`GitHubMark`
- `media.tsx`：`MediaPanel` 真实素材面板（B-roll）：照片带缓慢推近（Ken Burns），视频按全局帧 `at` 播放；左下角标作者和授权；多块叠在同一位置用 `at/out` 交叉淡化。素材放 `public/footage/<期>/`，来源和授权记在 `materials/<期>/素材来源.md`
- `objects.tsx`（物件类）：`Laptop` 笔记本（屏幕内可放内容）、`BookStack` 书堆、`Globe` 地球、`Dice` 骰子、`Magnifier` 放大镜、`CheeseMoon` 奶酪月亮、`Chalkboard` 黑板、`StarIcon` 收藏星、`Keyboard`、`Encyclopedia` 百科全书、`Trophy` 奖杯、`TV` 电视、`Block` 文字积木（token/接龙）、`Desk` 办公桌（上下文比喻，桌面可变红表示放满）、`Fridge` 打开的冰箱（番茄、白菜、鸡蛋，`FRIDGE_ITEMS` 给出各食材坐标）、`Plant` 盆栽、`Scenery` 风景画（`view` 只画其中一块，演示图片切块）、`Balance` 天平（`tilt` 控制往哪边倒，两边托盘可以放任意内容）

## 场景 `sets/`

- `Studio.tsx`：`HostTall` 竖屏 3:4 演播室（舞台 1080×1080，主持人居中，上方放标题）；`PiP` 可传 `x/y/s` 放在竖屏舞台角落；`Host` 横屏 A-roll 演播室（条纹墙、会飘云的窗、挂画、闪烁 ON AIR、桌子、麦克风、绿植），左侧放板书；`PiP` B-roll 右下角整个人站着的主持人。都是横屏 1920 舞台坐标

## 预览 `previews/`

Studio 里的 `library-wardrobe`（矢量版全部配饰与表情）、`library-pixel-wardrobe`（像素版皮肤）。新增皮肤后记得加进来。

## 音频（`audio/`，Node 脚本）

- `audio/synth.mjs`：乐器（Karplus-Strong 拨弦 `pluck`、`bell`、`bass`、`kick` `snap` `hat` `shaker`）、滤波混响，以及 14 个音效 `SFX_NAMES`：snip whoosh pop ding shake confetti boing click type error stamp paper question magic
- `audio/bgm.mjs`：`buildBgm({voice, out, sections, level, depth})` 按段落编曲 + 人声闪避。段落风格：`light` 轻快、`groove` 律动、`bright` 明亮带铃音、`tense` 紧张（小调）、`break` 留白、`end` 收尾和弦。默认 `level 0.071`、`depth 0.7`（用户偏好：BGM 要轻）

## Vox 拼贴解说 `vox/`

横屏 Vox 风格（ep18 起），配方见 `styles/解说语法/02_新闻与数据/y2_vox_Vox/语法卡.md`。和像素贴纸风是两套画面，不混用。

| 文件 | 内容 |
|---|---|
| `theme.ts` | 配色 `V`（桌面纸、纸白、黑卡、线索红、荧光黄）、字体 `VF`（Anton 数字、Playfair 报头、Garamond 正文、思源黑 Heavy 标签、宋体中文）、`step12` 一拍二步进、`tailEase` 长尾缓动、`sineInOut` |
| `props.tsx` | `Desk` 桌面纸、`Torn` 撕边纸、`Clipping` 剪报、`HalftonePhoto` 网点照片（白边加胶带）、`Tape`、`Label` 黑底标签条、`IndexCard` 横线索引卡、`RedLine` / `stringPts` 红线、`RedCircle` 一笔红圈、`Underline`、`Highlight` 荧光笔、`TypeOn` 打字、`SlideIn` 倾斜滑入、`At` 随切点出现 |
| `VoxShow.tsx` | `VoxShow` 骨架（硬切、Vox 字幕条、封面、音轨）、`camAt` + `World` 相机关键帧（世界坐标、对数缩放） |
| `stickers.tsx` | `Sticker` 模切白边贴纸、`PostIt` 冷知识便利贴、`Stamp` 橡皮图章、`Pushpin` 图钉、`People` 一排小人图标（数人数、一个个亮起来）、`DeskLitter` 桌面杂物（咖啡渍、回形针、铅笔、碎纸，铺最底层） |
| `desk.tsx` | 世界坐标里摆东西：`Put`（宽度跟内容走）、`Doc` 纸页、`Big` 大数字、`RedX` 红叉、`RedCheck` 对勾 |
| `portrait.tsx` | `Portrait` 人物示意肖像（交给 `HalftonePhoto` 做网点）：发型、胡子、眼镜、领带 / 黑高领 / 衬衫区分人物 |
| `hud.tsx` | `YearCounter` 右上角年份计数器 + 进度条、`rollYear` 按口播在年份之间滚动 |
| `CoverTall.tsx` | `VoxCoverTall` 系列 3:4 竖版封面（1080×1440）：黑卡大标题 + 系列号「科技简史 · NN」+ 命运线纸卡 + 人物网点照 + 本期贴纸 + 荧光黄钩子条；每期写一个 `CoverTall.tsx` 传内容，在 `Root.tsx` 注册成 `<期>-cover-tall` 的 `Still` |
| `footage.tsx` | `VoxFootage` 真实素材（照片 / 视频）装进白边相框加胶带、左下角署名，随切点直接出现并缓慢推近（视频必须传 `start`）；`BlackCard` 黑卡大字（A-roll） |
| `shots.tsx` | Vox 硬切拼贴的镜头工具：`ShotFilm` 按镜头表 `Shot[]` 硬切、`BShot` 桌面慢推、`Head` 黑卡大字、`Hand` 手写红字、`Medal` 奖牌、`p12` / `countUp`（ep21、ep22） |

要点：元素按 12fps 步进，相机按 30fps 平滑；档案随切点直接出现，不弹不落；黑、纸白、一种红，荧光黄只划重点。网点照片的灰度画面先压暗一半，否则亮部会整片变白；抽帧检查别缩得太小，网点会糊掉。
