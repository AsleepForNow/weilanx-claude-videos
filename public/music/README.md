# 音乐库

现成的配乐放这里，跨期复用。音频文件（mp3 / wav / m4a）不进 git，只有这份目录进 git。

用法：在 `audio/episodes/<期>.mjs` 里调 `cutMusic`（定义在 `audio/music.mjs`），截一段做成该期的 `public/audio/<期>/bgm.wav`：

```js
import {cutMusic} from '../music.mjs';
cutMusic({track: 'we-never', start: 16, duration: 30, ep: 'ep23-wheat-chessboard'});
```

`lufs` 默认 −16（无口播、配乐是唯一音轨）；有口播的期数传 `lufs: -34` 左右，让配乐够轻。新曲子放进来后，在 `audio/music.mjs` 的 `TRACKS` 和下表各补一行，并实测它的起音、BPM 和第一个「换气 + 重拍」的时间（高潮要踩在重拍上）。

| 曲目 | 文件 | 时长 | 适合 | 备注 | 来源与授权 | 用过的期数 |
|---|---|---|---|---|---|---|
| we-never | `we-never.mp3` | 3:10 | 沉稳、有推进感，暗金文献风 | 0.36 秒起音；112 BPM，一小节 2.136 秒；第一个「换气 + 重拍」在 17.45 秒（第 8 小节，16.4 秒起能量回落）；原始响度约 −9.6 LUFS | 从参考视频提取，授权未确认，只用于本地 demo；公开发布前要换成有授权的版本 | ep23（0–33.5 秒，高潮踩 17.45 秒） |
