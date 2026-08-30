---
title: 'Подключите виджеты: одна поверхность, одна фраза и кнопка Test it'
description: 'Всё, к чему можно подключить widget, теперь за одним полем поиска — другие widgets, connections, bots и agents. Опишите wiring простым языком и отправьте real event, чтобы узнать, какой конец сломан.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['продукт', 'widgets', 'автоматизация']
---

**link** переносит events между двумя widgets: измените
symbol в одном — другой реагирует. Включите Two-way —
они синхронизированы в обе стороны. Разница между экраном
отдельных плиток и экраном как одним инструментом.

Идея была верной. Найти её — нет, и понять, работает ли —
тоже. Оба исправлены в этом релизе.

## Одна поверхность, и «All» действительно означает всё

Picker делился на *Widgets* и *Sources* — половина
inventory всегда скрыта за toggle. Widget один на экране
показывал пустую grid без hint, что bots, agents и
connections существуют.

Search box и kind filters на всё: widgets на этом экране,
в workspace или elsewhere; data connections; bots; agents.
**All** показывает всё.

Порядок изменился. **My wiring** теперь *над* browse
surface. Раньше под grid picker на десятки плиток —
список, к которому возвращаетесь для manage (disable,
remove), был scroll past всего, а picker для add greeted
каждый раз.

Empty state ждёт bots/agents stores — **Looking…**;
filter chips с counts. Empty grid «still loading» — lie UI
рассказывал routinely.

## Два механизма, один вопрос

За одним picker два разных механизма:

- **Другой widget** → **glue link** от AI. Real code,
  version history, hidden runtime, maps A emit → B expects.
- **Connection, bot, agent** → **attachment** — rebuild
  taught *own* code. Staged not automatic — five sources
  one rebuild not five.

Плохой first question — mechanism. Links tab composer:
**describe wiring**.

> *«Sync symbol both ways with chart.»*
> *«When I click row here, filter other widget.»*
> *«Show price-alert bot signals in this widget.»*

Planner reads inventory, resolves mechanism и counterpart
— «price bot»→id. **Resolves only**; never generates.
Streaming codegen, Stop, version history.

Если предпочитаете указать сами — picker всё ещё это
делает и помечает уже wired; second pick *already linked*;
update not duplicate; badge **before** rebuild pay.

## «Test it»: which end broken?

Until release link write-only. Describe, pay codegen,
leave editor, poke widgets. When nothing — *which* part —
not emit, link not map, other not listen.

Editor **Test it** bar. Topic, value, pretend emit (two-way
only). Event into real link runtime runs generated
`connect(ctx)` — not simulation — verdict every empty way:

- **Link isn't running.** Switch on — or no code yet.
- **Ran but forwarded nothing for topic.** Logs detail.
- **Sent «symbol» to Chart.** Works.
- **Forwarded but widget not on screen.** Other screen.

Testing on list; recorder armed only while bar on screen —
tick stream never pays instrumentation.

## Quiet ones

Two-way links echo forever — delivered value remembered,
bounce-back dropped once — A↔B mirror breaks; new value
through. Links/attachments replicate tabs/devices; delete
elsewhere **gone** in editor not save into nothing. Rebuild
fail points Builder tab, not spinner.

Rename: *Link*→**wire**, **My wiring** stays exactly where
it is.

[Запустите Nexow](https://x.nexow.ai), open any widget Links
tab, describe what should happen when you click. Then test
before leave.
