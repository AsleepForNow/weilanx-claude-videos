import React from 'react';
import {Composition, Still} from 'remotion';
import {Ep00Demo} from './episodes/ep00-demo/Ep00Demo';
import {DURATION as EP00_DURATION, FPS, H as EP00_H, W as EP00_W} from './episodes/ep00-demo/lib/timeline';
import {Ep01Agent} from './episodes/ep01-agent/Ep01Agent';
import {DURATION as EP01_DURATION} from './episodes/ep01-agent/cues';
import {Ep02Llm} from './episodes/ep02-llm/Ep02Llm';
import {DURATION as EP02_DURATION} from './episodes/ep02-llm/cues';
import {CC_H, CC_W, Ep03Cc} from './episodes/ep03-cc/Ep03Cc';
import {DURATION as EP03_DURATION} from './episodes/ep03-cc/cues';
import {EP04_H, EP04_W, Ep04Opus55} from './episodes/ep04-opus55/Ep04Opus55';
import {DURATION as EP04_DURATION} from './episodes/ep04-opus55/cues';
import {EP05_H, EP05_W, Ep05Token} from './episodes/ep05-token/Ep05Token';
import {DURATION as EP05_DURATION} from './episodes/ep05-token/cues';
import {EP06_H, EP06_W, Ep06Context} from './episodes/ep06-context/Ep06Context';
import {DURATION as EP06_DURATION} from './episodes/ep06-context/cues';
import {EP06T_H, EP06T_W, Ep06ContextTall} from './episodes/ep06-context/Ep06ContextTall';
import {EP07_H, EP07_W, Ep07Agent} from './episodes/ep07-agent/Ep07Agent';
import {DURATION as EP07_DURATION} from './episodes/ep07-agent/cues';
import {EP07T_H, EP07T_W, Ep07AgentTall} from './episodes/ep07-agent/Ep07AgentTall';
import {EP08_H, EP08_W, Ep08Hallucination} from './episodes/ep08-hallucination/Ep08Hallucination';
import {DURATION as EP08_DURATION} from './episodes/ep08-hallucination/cues';
import {EP08T_H, EP08T_W, Ep08HallucinationTall} from './episodes/ep08-hallucination/Ep08HallucinationTall';
import {EP09_H, EP09_W, Ep09Prompt} from './episodes/ep09-prompt/Ep09Prompt';
import {DURATION as EP09_DURATION} from './episodes/ep09-prompt/cues';
import {EP10_H, EP10_W, Ep10Multimodal} from './episodes/ep10-multimodal/Ep10Multimodal';
import {DURATION as EP10_DURATION} from './episodes/ep10-multimodal/cues';
import {EP11_H, EP11_W, Ep11Mcp} from './episodes/ep11-mcp/Ep11Mcp';
import {DURATION as EP11_DURATION} from './episodes/ep11-mcp/cues';
import {EP12_H, EP12_W, Ep12Skill} from './episodes/ep12-skill/Ep12Skill';
import {DURATION as EP12_DURATION} from './episodes/ep12-skill/cues';
import {EP13_H, EP13_W, Ep13Subagent} from './episodes/ep13-subagent/Ep13Subagent';
import {DURATION as EP13_DURATION} from './episodes/ep13-subagent/cues';
import {EP14_H, EP14_W, Ep14AgentPermission} from './episodes/ep14-agent-permission/Ep14AgentPermission';
import {DURATION as EP14_DURATION} from './episodes/ep14-agent-permission/cues';
import {EP15_H, EP15_W, Ep15PromptInjection} from './episodes/ep15-prompt-injection/Ep15PromptInjection';
import {DURATION as EP15_DURATION} from './episodes/ep15-prompt-injection/cues';
import {EP16_H, EP16_W, Ep16AgentDone} from './episodes/ep16-agent-done/Ep16AgentDone';
import {DURATION as EP16_DURATION} from './episodes/ep16-agent-done/cues';
import {EP17_H, EP17_W, Ep17Sycophancy} from './episodes/ep17-sycophancy/Ep17Sycophancy';
import {DURATION as EP17_DURATION} from './episodes/ep17-sycophancy/cues';
import {EP18_H, EP18_W, Ep18AiHistory} from './episodes/ep18-ai-history/Ep18AiHistory';
import {DURATION as EP18_DURATION} from './episodes/ep18-ai-history/cues';
import {EP19_H, EP19_W, Ep19AppleHistory} from './episodes/ep19-apple-history/Ep19AppleHistory';
import {DURATION as EP19_DURATION} from './episodes/ep19-apple-history/cues';
import {EP20_H, EP20_W, Ep20NvidiaHistory} from './episodes/ep20-nvidia-history/Ep20NvidiaHistory';
import {DURATION as EP20_DURATION} from './episodes/ep20-nvidia-history/cues';
import {EP21_H, EP21_W, Ep21NobelPhysics} from './episodes/ep21-nobel-physics/Ep21NobelPhysics';
import {DURATION as EP21_DURATION} from './episodes/ep21-nobel-physics/cues';
import {Ep21CoverTall} from './episodes/ep21-nobel-physics/Cover';
import {Ep22CoverTall} from './episodes/ep22-nobel-chemistry/Cover';
import {EP22_H, EP22_W, Ep22NobelChemistry} from './episodes/ep22-nobel-chemistry/Ep22NobelChemistry';
import {DURATION as EP22_DURATION} from './episodes/ep22-nobel-chemistry/cues';
import {Ep18CoverTall} from './episodes/ep18-ai-history/CoverTall';
import {Ep19CoverTall} from './episodes/ep19-apple-history/CoverTall';
import {Ep20CoverTall} from './episodes/ep20-nvidia-history/CoverTall';
import {PixelWardrobe} from './library/previews/PixelWardrobe';
import {Wardrobe} from './library/previews/Wardrobe';

const mix = {mix: 'all' as const};

/** 作品 ID 与 src/episodes/ 下的目录名一致；预览页以 library- 开头 */
export const Root: React.FC = () => (
  <>
    <Composition id="ep00-demo" component={Ep00Demo} durationInFrames={EP00_DURATION} fps={FPS} width={EP00_W} height={EP00_H} />
    <Composition id="ep01-agent" component={Ep01Agent} durationInFrames={EP01_DURATION} fps={FPS} width={1080} height={1920} defaultProps={mix} />
    <Composition id="ep02-llm" component={Ep02Llm} durationInFrames={EP02_DURATION} fps={FPS} width={1080} height={1920} defaultProps={mix} />
    <Composition id="ep03-cc" component={Ep03Cc} durationInFrames={EP03_DURATION} fps={FPS} width={CC_W} height={CC_H} defaultProps={mix} />
    <Composition id="ep04-opus55" component={Ep04Opus55} durationInFrames={EP04_DURATION} fps={FPS} width={EP04_W} height={EP04_H} defaultProps={mix} />
    <Composition id="ep05-token" component={Ep05Token} durationInFrames={EP05_DURATION} fps={FPS} width={EP05_W} height={EP05_H} defaultProps={mix} />
    <Composition id="ep06-context" component={Ep06Context} durationInFrames={EP06_DURATION} fps={FPS} width={EP06_W} height={EP06_H} defaultProps={mix} />
    <Composition id="ep06-context-tall" component={Ep06ContextTall} durationInFrames={EP06_DURATION} fps={FPS} width={EP06T_W} height={EP06T_H} defaultProps={mix} />
    <Composition id="ep07-agent" component={Ep07Agent} durationInFrames={EP07_DURATION} fps={FPS} width={EP07_W} height={EP07_H} defaultProps={mix} />
    <Composition id="ep07-agent-tall" component={Ep07AgentTall} durationInFrames={EP07_DURATION} fps={FPS} width={EP07T_W} height={EP07T_H} defaultProps={mix} />
    <Composition id="ep08-hallucination" component={Ep08Hallucination} durationInFrames={EP08_DURATION} fps={FPS} width={EP08_W} height={EP08_H} defaultProps={mix} />
    <Composition id="ep08-hallucination-tall" component={Ep08HallucinationTall} durationInFrames={EP08_DURATION} fps={FPS} width={EP08T_W} height={EP08T_H} defaultProps={mix} />
    <Composition id="ep09-prompt" component={Ep09Prompt} durationInFrames={EP09_DURATION} fps={FPS} width={EP09_W} height={EP09_H} defaultProps={mix} />
    <Composition id="ep10-multimodal" component={Ep10Multimodal} durationInFrames={EP10_DURATION} fps={FPS} width={EP10_W} height={EP10_H} defaultProps={mix} />
    <Composition id="ep11-mcp" component={Ep11Mcp} durationInFrames={EP11_DURATION} fps={FPS} width={EP11_W} height={EP11_H} defaultProps={mix} />
    <Composition id="ep12-skill" component={Ep12Skill} durationInFrames={EP12_DURATION} fps={FPS} width={EP12_W} height={EP12_H} defaultProps={mix} />
    <Composition id="ep13-subagent" component={Ep13Subagent} durationInFrames={EP13_DURATION} fps={FPS} width={EP13_W} height={EP13_H} defaultProps={mix} />
    <Composition id="ep14-agent-permission" component={Ep14AgentPermission} durationInFrames={EP14_DURATION} fps={FPS} width={EP14_W} height={EP14_H} defaultProps={mix} />
    <Composition id="ep15-prompt-injection" component={Ep15PromptInjection} durationInFrames={EP15_DURATION} fps={FPS} width={EP15_W} height={EP15_H} defaultProps={mix} />
    <Composition id="ep16-agent-done" component={Ep16AgentDone} durationInFrames={EP16_DURATION} fps={FPS} width={EP16_W} height={EP16_H} defaultProps={mix} />
    <Composition id="ep17-sycophancy" component={Ep17Sycophancy} durationInFrames={EP17_DURATION} fps={FPS} width={EP17_W} height={EP17_H} defaultProps={mix} />
    <Composition id="ep18-ai-history" component={Ep18AiHistory} durationInFrames={EP18_DURATION} fps={FPS} width={EP18_W} height={EP18_H} defaultProps={mix} />
    <Composition id="ep19-apple-history" component={Ep19AppleHistory} durationInFrames={EP19_DURATION} fps={FPS} width={EP19_W} height={EP19_H} defaultProps={mix} />
    <Composition id="ep20-nvidia-history" component={Ep20NvidiaHistory} durationInFrames={EP20_DURATION} fps={FPS} width={EP20_W} height={EP20_H} defaultProps={mix} />
    <Composition id="ep21-nobel-physics" component={Ep21NobelPhysics} durationInFrames={EP21_DURATION} fps={FPS} width={EP21_W} height={EP21_H} defaultProps={mix} />
    <Composition id="ep22-nobel-chemistry" component={Ep22NobelChemistry} durationInFrames={EP22_DURATION} fps={FPS} width={EP22_W} height={EP22_H} defaultProps={mix} />
    {/* Vox 系列的 3:4 竖版封面（静态图） */}
    <Still id="ep18-ai-history-cover-tall" component={Ep18CoverTall} width={1080} height={1440} />
    <Still id="ep19-apple-history-cover-tall" component={Ep19CoverTall} width={1080} height={1440} />
    <Still id="ep20-nvidia-history-cover-tall" component={Ep20CoverTall} width={1080} height={1440} />
    <Still id="ep21-nobel-physics-cover-tall" component={Ep21CoverTall} width={1080} height={1440} />
    <Still id="ep22-nobel-chemistry-cover-tall" component={Ep22CoverTall} width={1080} height={1440} />
    <Composition id="library-wardrobe" component={Wardrobe} durationInFrames={150} fps={FPS} width={1080} height={1920} />
    <Composition id="library-pixel-wardrobe" component={PixelWardrobe} durationInFrames={150} fps={FPS} width={1080} height={1080} />
  </>
);
