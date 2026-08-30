---
title: '自检管线的组件：probe_url、验证 agent 与一次免费修复'
description: '死组件最大来源是对假想 API 写的代码。现在 builder 边写边拉 endpoint，验证器补探遗漏项，前 45 秒内崩溃可换一轮自动修复。'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['产品', 'ai', '工作原理']
---

生成组件最常见失败并非生成代码里的 bug，而是从未存在的 endpoint。

模型从记忆或目录行（链接是*文档页*而非 endpoint）取 URL，猜响应形状，写精细
解析，然后 ship。你得到永恒 spinner 或空图，屏幕无任何解释。

本版三次闭合环路：写时、写后、仍崩溃时再一次。

## 写时：`probe_url`

Builder 现可 **立即 GET 公开无密钥 endpoint**，经与 runtime 中 `ctx.data.http()`
相同的服务器代理，返回真实 HTTP 状态与 body。

同一性即要点。探针成功 *即* runtime 会成功；失败则是本会 broken ship 的组件——
在仍剩 turn 时在 builder 内失败，而非画布上。

它位于 builder 应走而非凭记忆推理的阶梯底端：venue 参考文档，然后 **691 个
无密钥公开 API、47 类可搜目录**——按 topic 搜每条目的名称 *与* 描述，因为
真实请求（「潮汐」「空气质量」）很少映射到能猜到的类别。该目录现始终对 builder
可用，作 universal keyless fallback。链接是文档，故最后一步恒同：推导 endpoint，
再 probe。

「X 有数据吗」靠看回答，不靠推理哪些数据集可能存在。走完阶梯、真查后说 *没有*
是好结果；凭记忆断言不是——且比感觉错得多。

## 写后：验证器

让模型自检是请求，非保证。组件代码落地瞬间，两件不依赖模型配合的事发生：

第一，工具结果 **点名本 turn 未 probe 的 endpoint**，要其在剩余轮次去查。

第二——不依赖协作的部分——验证器 **与模型写摘要并行** 自行完成：

- **Lint 模块**——结构上静默的失败类。缺 `render` export。无法 parse 的代码。
  对第三方 host 的 raw `fetch`/`WebSocket`（sandbox 拦截）——生成组件最伤的无
  声失败，控制台无输出。外链图/视频 URL 直接赋给 `src`。硬编码 tile URL 交给
  地图库——挂载平移完美，每个 tile 请求静拒。
- **Probe 模型跳过的每个 endpoint**（每模块最多五个），与模型同读裁决：不可达，
  或 4xx 表明 URL/参数有误。

真实问题换 **一轮 in-turn 自动修复**，附 probe 输出作证据，指令只修被点名项。
该轮在 build 全上下文仍热时——比 ship broken 再花整轮新 turn 便宜得多。模型
中途重写模块，已在跑的验证被 supersede，裁决丢弃。验证器内部失败则 verify clean：
可 delay build，never break build。

## 仍崩溃：一次有界修复

自修复上下文此前把 runtime 错误喂进 *下一* chat turn——仅在你发送时。Build 后
数秒崩溃的组件，要你注意到、重开 composer 打「坏了」才修。

Runtime host 现于 fresh build 崩溃时花 **一轮自动 fix turn**。自动 turn 是 app
花你的 credits 或 key，故边界刻意紧：

- 仅 AI build *刚* 产出的版本——你恢复的旧版或手编代码崩溃不算；
- 仅该 build 后 **45 秒内**——一小时后崩溃对你已是新信息，非明显 build 缺陷；
- **每版本一次**；auto-repair turn 产出的版本本身不可再触发。一次 build 最多
  一次自动 follow-up——never 模型自付链式失败。

修复 turn 措辞为 app 报告缺陷，携带同上指令：若涉数据 endpoint，重写前先 probe。
修好、保留可用部分、不扩大组件 scope。

服务端，被救 background build 现于同组件另一 turn 已 live 时等待，而非竞出
重复版本。

## 同一循环，各模式

皆在共享模块——平台 build、浏览器 BYOK、服务端 sweep 得 **一致** 行为：同工具、
同 probe 格式、同验证器、同修复预算。模式无法在工具存在或检查严度上漂移——
答案仅一实现。也是产出 [下一版随包的十个示例组件](/blog/starter-widgets-examples-workspace)
的循环：正是此流程、这些检查 build。

无一使模型正确。它使错误可存活、通常不可见：代码依赖前 endpoint 已查；检查
无论模型是否愿跑都执行；首次崩溃到你前有一次 honest fix 尝试。

[启动 Nexow](https://x.nexow.ai)，要些冷门数据——潮汐、空气质量、公共假日——
看 activity rail 在写一行解析代码前先 probe endpoint。
