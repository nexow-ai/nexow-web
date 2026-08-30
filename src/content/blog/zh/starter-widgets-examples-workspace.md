---
title: 'Nexow 现附带十个示例组件——对话记录一并交付'
description: '新账户不再面对空白画布。十个成品组件以示例工作区形式到达，各带构建它的真实聊天与真实版本历史——与你使用相同的 codegen 循环生成，且未连接任何数据源。'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['产品', '入门', 'widgets']
---

Nexow 最难的屏幕永远是第一屏：空白画布、提示框，没有任何证据表明一切有效。你可以读文档，或输入点什么然后碰运气。

下一版起，新账户启动进入 **示例工作区**——三块屏幕共十个成品组件，首次加载即可运行，**未连接任何数据源**。不是截图，不是导览。可打开、编辑、拆解并覆盖发布的真实组件。

## 包里有什么

**Live world**——带昼夜环与工作时间重叠条的世界钟；七日天气预报与小时曲线；近一小时/天/周地震 live 地图（按震级缩放）；live 空气质量及当前驱动指数的污染物。

**Markets**——Binance K 线（live 最新 K 与 24h 涨跌徽章）；基于 ECB 参考汇率的 FX 转换器（90 日历史）；最活跃 Polymarket 问题及 crowd 信念；任意世界银行指标，两国对比长周期图。

**Make and play**——重载后仍保留的便签板（durable per-item storage）；维基「历史上的今天」feed（缩略图与日期选择）。

源皆无密钥：Open-Meteo、USGS、Binance 公开数据、Frankfurter、Polymarket、世界银行、维基。这是规则，不是巧合——打开就要求「连接 OANDA」的示例比空白画布更糟。

## 是真正 build 出来的，不是写出来的

每个示例始于像真人输入的 brief——要什么、为什么，而非规格说明。`starter:build` 将 brief 送入 **`runWidgetToolLoop`**：与平台 codegen 路由及浏览器 BYOK 路径驱动同一模块，同一契约、工具与 in-turn 验证器。无 HTTP 流、无积分账本、无浏览器——但同一循环。

组件聊天标签里的 transcript 是真对话；产出代码的每一 turn 是 rail 上的真版本。多数有三个版本。**空气质量有五个**——前三版打开仍是空「输入城市」框，第五 turn 是 bug 报告：六个污染物 tile 皆显示破折号，时间戳为 *「-6375 分钟前」*。该 build 原样入包。

brief 在 **无 attached provider** 下运行——与新账户完全一致。该循环产出物在首日即可用。

## 不是第二套目录

每个示例都是普通 marketplace 资产，官方账户经与大家相同的 RPC 发布：相同 sanitizer、血缘图、安装路径、版税链。starter 在服务端无特殊待遇——fork 后继续真实血缘，而非发现官方示例活在私有方言里。

上层 curation registry 只存策展：哪些已发布资产、顺序、屏幕。写仅 service-role；读公开，因未登录访客可能在看 listing。

## 落点与不做之事

Seeding 三重门控：**每账户一次，非每设备**——标志为复制设置，切换账户重读。从不 seed 已用过的画布。可从 **设置 → 通用 → 添加示例组件** 强制，供旧账户或删工作区后恢复。

示例落在*旁侧*空工作区，而非替换—— onboarding 仍给你干净屏幕输入。整包一步 undo。

已 seed 用户改进并发布后延续官方血缘；我们 ship 更好示例时 **已 seed 用户保留自己的**——可能已编辑。无 push-update，也不应有。

发账户前整包在真实 Chrome 中跑：启动错误、动画死循环、慢帧、空白渲染——各截图。独立 live check 从 committed code 推导公开 endpoint 仍响应。

下一版随包发布；现有账户随时从 **设置 → 通用** 导入。打开一个，读构建聊天，改点什么——仍是学画布最快的路。

[启动 Nexow](https://x.nexow.ai)，同时开始自建。
