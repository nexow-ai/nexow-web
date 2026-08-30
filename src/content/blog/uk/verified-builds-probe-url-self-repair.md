---
title: 'Віджети, що перевіряють власний plumbing: probe_url, verifier agent і одна безкоштовна правка'
description: 'Найбільше джерело мертвих віджетів — код, написаний проти уявного API. Тепер builder отримує endpoint під час запису, verifier повторно probe те, що пропустив, а crash у перші 45 секунд дає одну автоматичну правку.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['продукт', 'ШІ', 'як-це-працює']
---

Найчастіший спосіб, яким падав згенерований віджет, — не bug у згенерованому
коді. Це endpoint, якого ніколи не існувало.

Модель брала URL з пам’яті — або з рядка directory, де link — *сторінка
документації*, а не endpoint — здогадувала форму відповіді, писала акуратний
parsing code проти цієї здогадки і ship. Ви отримували вічний spinner або
порожній chart, без нічого на екрані, що пояснювало б чому.

Цей реліз закриває loop тричі: поки модель пише, одразу після запису і ще раз,
якщо все одно crash перед вами.

## Поки пише: `probe_url`

Builder має tool, що **GET public keyless endpoint прямо зараз** через той самий
server proxy, що `ctx.data.http()` у runtime, і повертає справжній HTTP status і
справжнє response body.

У цьому вся суть. Probe, що успішний, *є* runtime call, що успішний. Probe, що
падає, — віджет, який би ship broken — і він падає зараз, поки ще є turn на
fix, а не на вашому canvas.

Він на дні драбини, яку builder має проходити, а не виводити з пам’яті: venue
reference docs спочатку, потім **directory із 691 keyless public APIs у 47
categories**, searchable за topic по name *і* description кожного entry — бо
справжні запити («tide times», «air quality») рідко лягають на category, яку
хтось здогадається. Directory завжди доступний builder, що б не було в scope, бо
це universal keyless fallback. Його links — documentation, тож останній крок
завжди однаковий: derive endpoint, потім probe.

«Чи є data для X?» — питання, на яке відповідають дивлячись, а не міркуючи, які
datasets, ймовірно, існують. Дійти до кінця драбини і сказати *no* після
перевірки — нормальний результат. Твердити з пам’яті — ні, і це було wrong
набагато частіше, ніж здавалося.

## Одразу після запису: verifier

Просити модель перевірити власну роботу — прохання, не гарантія. Тож у момент,
коли код віджета з’являється, дві речі відбуваються незалежно від згоди моделі.

Перше: результат tool **називає endpoints, які не були probed цей turn**, і каже
перевірити їх, поки залишились rounds.

Друге — частина без співпраці — verifier працює **паралельно з тим, як модель
пише summary**, і робить роботу сам:

- **Lint module** на класи збоїв, тихі за конструкцією. Відсутній export
  `render`. Код, що не parse. Raw `fetch` або `WebSocket` на third-party host,
  який sandbox blocks — найшкідливіший silent failure у generated widgets, бо
  нічого в console. Зовнішній image або video URL, assigned straight to `src`.
  Hard-coded tile URL, переданий map library, що mounts і pans ідеально, поки
  кожен tile request quietly refused.
- **Probe кожен endpoint, який model skipped** (до п’яти per module), і read
  verdict як model: unreachable, або 4xx, що каже, що URL чи parameters wrong.

Справжні проблеми купують **одну автоматичну in-turn repair round** з probe
output як evidence і instruction виправити лише named. Round, поки build context
ще hot — набагато дешевше, ніж ship broken і цілий новий turn пізніше. Model
rewrites module mid-flight — verification already running superseded, verdict
discarded. Verifier fails internally — verifies clean: can delay build, never
break one.

## Якщо все одно crash: одна правка, жорстко обмежена

Self-repair context already fed runtime errors у *next* chat turn — but only when
you sent one. Widget crashed seconds after build stayed broken until you noticed,
reopened composer, typed «it's broken».

Runtime host spends **one automatic fix turn** when fresh build crashes.
Automatic turn — app spending credits or key, bounds deliberately tight:

- only version AI build *just* produced — crash in old version you restored or
  hand-edited code never qualifies;
- only within **45 seconds** of that build — crash hour later is new information
  for you, not obvious build defect;
- **once per version**, version produced *by* auto-repair turn itself ineligible.
  One build triggers at most one automatic follow-up — never chain model paying
  itself to keep failing.

Repair turn worded as app reporting defect, same instruction: failure involves
data endpoint — probe before rewriting. Fix it, keep what works, don't grow widget
scope.

Server side: rescued background build waits when another turn same widget already
live, instead of racing into duplicate version.

## Той самий loop, у кожному режимі

All in one shared module — platform builds, bring-your-own-key browser builds,
server-side build sweep get **identical** behaviour: same tools, probe formatting,
verifier, repair budget. Modes cannot drift on tools or check strictness — one
implementation. Also loop that produced [десять example widgets](/blog/starter-widgets-examples-workspace)
shipping next release: built by exactly this, exactly these checks.

None makes model correct. Makes being wrong survivable, usually invisible:
endpoint checked before code depends, check runs whether model felt like it, first
crash gets one honest fix attempt before reaches you.

[Запустіть Nexow](https://x.nexow.ai) і попросіть щось obscure — tide times, air
quality, public holidays. Watch activity rail probe endpoint before writes parsing line.
