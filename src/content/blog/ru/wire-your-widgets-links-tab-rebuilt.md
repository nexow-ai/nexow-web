---
title: 'Подключите виджеты: одна поверхность, одна фраза и кнопка Test it'
description: 'Всё, к чему можно подключить widget, теперь за одним search box — другие widgets, connections, bots и agents. Опишите wiring простым языком и отправьте real event, чтобы узнать, какой конец сломан.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['продукт', 'widgets', 'автоматизация']
---

**Link** carries events между двумя widgets: change symbol в
одном — другой reacts. Two-way — sync оба направления.
Разница между screen отдельных tiles и one instrument.

Идея была fine. Finding wasn't, и knowing if worked —
fixed this release.

## Одна поверхность, и «All» значит all

Picker был split *Widgets* / *Sources* — half inventory
hidden за toggle. Widget alone — empty grid, no hint bots/
agents/connections exist.

Now one search, kind filters: widgets this screen/workspace/
elsewhere; connections; bots; agents. **All** shows all.

Order changed. **My wiring** *above* browse. Was under picker
grid dozens tiles — manage list was scroll past everything;
picker greeted every time.

Empty state waits bots/agents stores — **Looking…**; filter
chips have counts. Empty «still loading» lie UI told routinely.

## Два механизма, один вопрос

- **Another widget** → AI **glue link**. Real code, version
  history, hidden runtime, maps A emit to B expects.
- **Connection, bot, agent** → **attachment** — record rebuild
  taught widget's *own* code. Staged not automatic — five
  sources one rebuild not five.

Bad first question which mechanism. Links tab opens composer:
**describe wiring**.

> *«Sync symbol both ways with chart.»*
> *«When I click row here, filter other widget.»*
> *«Show price-alert bot signals in this widget.»*

Planner reads same inventory, resolves mechanism and
counterpart — «price bot» → id. **Resolves only**; never
generates. Streaming codegen same place, Stop, version history.

Picker still works — marks already wired; second pick
*already linked*; again updates not duplicate; badge
**before** rebuild pay.

## «Test it»: which end broken?

Until release link write-only. Describe, pay codegen, leave,
poke widgets. Nothing — no way tell *which* part — not
emitting, link not mapping, other not listening.

Editor **Test it** bar. Topic, value, pretend emit end
(two-way only). Real link runtime, generated `connect(ctx)`
— not simulation — verdict every empty way:

- **Link isn't running.** Switch on — or no code yet.
- **Ran but forwarded nothing for topic.** Wrong mapping;
  Logs detail.
- **Sent «symbol» on to Chart.** Works.
- **Forwarded but widget not on screen.** Not bug — other
  screen.

Testing stays on list; recorder armed only while bar on
screen — tick stream never pays instrumentation.

## Quiet ones

Two-way echo forever without help — delivered value
remembered, identical bounce-back dropped once — A↔B
mirror breaks, new value through. Links/attachments
replicate tabs/devices; delete elsewhere **gone** in editor
not save into nothing. Rebuild fail — says, points Builder,
not spinner.

Rename coming: *Link* → **wire**, **My wiring** stays.

[Запустите Nexow](https://x.nexow.ai), Links tab any widget,
describe click behavior. Test before leave.
