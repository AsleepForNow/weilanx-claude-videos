#!/usr/bin/env bash
# 导出一期视频：npm run export -- ep03-cc
# 成片 → out/<期>/<期>.mp4；有人声的期数再导出 stems/（人声、配乐、音效）并用分轨重新混音限幅；materials/<期>/ 的封面-3x4.png、封面-16x9.png、字幕稿.md、发布文案.md 复制到 out/<期>/
set -euo pipefail
EP=${1:?用法：npm run export -- <期，如 ep03-cc>}
# 同一期的变体版本（比如竖屏的 ep06-context-tall）和原期共用人声、配乐和 materials
BASE=${EP%-tall}
OUT=out/$EP
AUDIO=public/audio/$BASE
mkdir -p "$OUT"
npx remotion render src/index.ts "$EP" "$OUT/$EP.mp4" --crf=18 --log=error
if [[ -f "$AUDIO/voice.wav" ]]; then
  mkdir -p "$OUT/stems"
  npx remotion render src/index.ts "$EP" "$OUT/stems/sfx.wav" --codec=wav --props='{"mix":"sfx"}' --log=error
  cp "$AUDIO/voice.wav" "$OUT/stems/voice.wav"
  cp "$AUDIO/bgm.wav" "$OUT/stems/bgm.wav"
  bash scripts/mix-stems.sh "$OUT" "$EP.mp4"
fi
# 封面图、字幕稿、发布文案（标题、描述、话题）一起放进导出目录
for doc in 封面-3x4.png 封面-16x9.png 字幕稿.md 发布文案.md; do
  if [[ -f "materials/$BASE/$doc" ]]; then
    cp "materials/$BASE/$doc" "$OUT/$doc"
  fi
done
echo "✓ $OUT/$EP.mp4"
