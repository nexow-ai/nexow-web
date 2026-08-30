---
title: 'Виджеты, проверяющие свою «водопроводку»: probe_url, verifier agent и одно бесплатное исправление'
description: 'Главный источник «мёртвых» виджетов — код, написанный под выдуманный API. Теперь builder запрашивает endpoint при написании, verifier повторно проверяет пропущенное, а crash в первые 45 секунд даёт одно автоматическое исправление.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['продукт', 'ии', 'как-это-работает']
---

Самый частый способ провала сгенерированного виджета — не
bug в сгенерированном коде. Это endpoint, которого никогда
не существовало.

Модель брала URL из памяти — или из строки directory, чья
ссылка ведёт на *страницу документации*, а не endpoint —
угадывала форму ответа, писала аккуратный parsing code под
догадку и ship. На выходе — вечный spinner или пустой
график, без объяснения на экране.

Этот релиз закрывает loop трижды: пока модель пишет, сразу
после, и ещё раз, если всё ещё crash перед вами.

## Пока пишет: `probe_url`

У builder теперь tool, который **делает GET публичного
keyless endpoint прямо сейчас** через тот же server proxy,
что `ctx.data.http()` в runtime, и возвращает real HTTP
status и body.

Вся суть в этой идентичности. Успешный probe *есть*
успешный runtime call. Неудачный probe — widget, который
ship broken — и падает сейчас, пока turn остался, а не
на canvas.

Он внизу ladder, которую builder должен пройти, а не
рассуждать из памяти: venue reference docs, затем
**directory из 691 keyless public API в 47 categories**,
searchable по topic в name *и* description каждой записи —
real requests («tide times», «air quality») редко map на
category. Directory всегда доступен builder — universal
keyless fallback. Links — documentation, последний шаг
всегда: derive endpoint, probe.

«Есть data для X?» — вопрос с ответом looking, не
reasoning. Конец ladder и *no* после check — fine.
Assert из memory — not, и wrong чаще, чем казалось.

## Сразу после: verifier

Просить модель verify — request, не guarantee. Когда widget
code land, два дела без согласия модели.

First, tool result **names endpoints not probed this turn**
и говорит check пока rounds remain.

Second — без cooperation — verifier **concurrent с summary
модели**, делает сам:

- **Lint module** silent failure classes. Missing `render`
  export. Code не parse. Raw `fetch`/`WebSocket` к
  third-party host — sandbox blocks, worst silent failure.
  External image/video URL в `src`. Hard-coded tile URL
  в map library — mount/pan perfect, tiles refused.
- **Probe skipped endpoints** (до five per module), verdict
  как у модели: unreachable или 4xx wrong URL/params.

Real problems — **one automatic in-turn repair round**,
probe output evidence, fix only named. Пока build context
hot — дешевле ship broken. Mid-flight rewrite — supersede
verification. Internal verifier fail — verify clean: delay,
never break build.

## Если всё ещё crash: one repair, hard-bounded

Self-repair context fed runtime errors в *next* chat turn —
только когда send. Crash seconds after build — broken до
composer «it's broken».

Runtime host — **one automatic fix turn** на fresh build
crash. Auto turn — credits/key, bounds tight:

- только version AI build *just* produced — old restored
  или hand-edited never qualify;
- только **45 seconds** от build — hour later new info;
- **once per version**, version from auto-repair ineligible.
  One build — max one auto follow-up, never self-pay chain.

Repair turn — app reports defect, probe data endpoint
before rewrite. Fix, keep works, don't grow scope.

Server: rescued background build waits если live turn same
widget — no duplicate race.

## Same loop, every mode

Shared module — platform, BYOK browser, server sweep
**identical**: tools, probe format, verifier, repair budget.
Modes can't drift. Loop produced [ten example
widgets](/blog/starter-widgets-examples-workspace) next
release — built exactly this, these checks.

Не делает model correct. Делает wrong survivable, usually
invisible: endpoint checked before depend, check runs
anyway, first crash one honest fix.

[Запустите Nexow](https://x.nexow.ai) — tide times, air
quality, public holidays. Activity rail probes before
parsing line.
