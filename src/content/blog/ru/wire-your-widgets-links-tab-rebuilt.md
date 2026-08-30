---
title: 'Подключите виджеты: одна поверхность, одна фраза и кнопка Test it'
description: 'Всё, к чему можно подключить widget, теперь за одним полем поиска — другие widgets, connections, bots и agents. Опишите wiring простым языком и отправьте real event, чтобы узнать, какой конец сломан.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['продукт', 'widgets', 'автоматизация']
---

**link** переносит события между двумя widgets: измените
symbol в одном — другой реагирует. Включите Two-way —
они остаются синхронизированы в обе стороны. Разница
между экраном отдельных плиток и экраном, который ведёт
себя как один инструмент.

Идея была верной. Найти её — нет, и понять, работает ли —
тоже. Оба исправлены в этом релизе.

## Одна поверхность, и «All» действительно означает всё

Picker был разделён на два sub-tab — *Widgets* и
*Sources* — половина inventory всегда скрыта за toggle,
который нужно знать, чтобы нажать. Widget один на экране
показывал пустую grid без hint, что bots, agents и
connections существуют.

Теперь search box и kind filters на всё: widgets на
этом экране, в workspace или elsewhere; data connections;
bots; agents. **All** показывает всё.

Порядок изменился. **My wiring** теперь *над* browse
surface. Раньше под grid picker на десятки плиток —
список, к которому возвращаетесь для manage (disable,
remove), был scroll past всего, а picker для add greeted
каждый раз.

Маленький honesty fix в той же зоне: empty state теперь
ждёт, пока stores bots и agents ответят, прежде чем
утверждать, что wire нечего, показывая **Looking…**
тем временем, и каждый filter chip несёт свой count.
Empty grid, означающая «still loading», — lie, которую
interface рассказывал routinely.

## Два механизма, один вопрос

За этим единственным picker скрываются две genuinely
разные вещи:

- **Другой widget** → **glue link**, сгенерированный AI.
  Real code, со своей version history, работающий в своём
  hidden runtime, mapping то, что A emit, в то, что B
  expects.
- **Connection, bot или agent** → лёгкий **attachment**,
  запись того, чему rebuild научил *собственный* code
  этого widget. Staged rather than automatic, так что
  browse пяти sources подряд стоит one rebuild, not five.

Знать, какой вы хотите, прежде чем сказать, что вы хотите,
чтобы really произошло, — плохой first question. Поэтому
Links tab теперь opens с composer: **describe wiring**.

> *«Sync symbol both ways with chart.»*
> *«When I click row here, filter other widget.»*
> *«Show price-alert bot signals in this widget.»*

Planner читает тот же inventory, что показывает picker,
и resolves и mechanism, и counterpart — «price bot»
становится id. Он **resolves only**; never generates.
Дорогой streaming codegen всё ещё runs там, где always,
со своей Stop button и своей version history.

Если предпочитаете point сами, picker всё ещё does that —
и теперь marks, к чему вы already wired, так что second
pick reads as *«already linked»* instead of silently
repeating first. Picking again updates existing wiring
rather than adding duplicate row, и badge говорит это
**before** вы pay for rebuild.

## «Test it»: which end really broken?

Until this release link был write-only. Вы described, paid
codegen, left editor и poked real widgets to find out
whether anything happened. When nothing did, no way to
tell *which* part was wrong — widget not emitting, link
not mapping, or other widget not listening.

Editor now has **Test it** bar. Pick topic and value,
choose which end pretending to emit (offered only on
two-way link, since one-way would always report nothing
from far side), and send. Event goes into link real
runtime and runs generated `connect(ctx)` — not simulation
— verdict distinguishes every empty way:

- **This link isn't running.** Switch on — or no code yet.
- **It ran but forwarded nothing for that topic.** Mapping
  wrong; Logs tab has detail.
- **Sent «symbol» on to Chart.** It works.
- **Forwarded, but that widget isn't on screen to receive.**
  Not bug — other end on another screen.

Testing stays on list rather than bouncing elsewhere, and
recorder armed only while bar on screen, so link forwarding
tick stream never pays instrumentation.

## Quiet ones

Two-way links would echo forever without help, so
delivered value remembered and identical bounce-back
dropped once — canonical A↔B mirror loop breaks, while
genuinely new value still gets through. Links and
attachments replicate across tabs and devices rather
than living in one, so deleting elsewhere shows **gone**
state in editor instead of letting you save into nothing.
When rebuild fails, it says so and points at Builder tab,
rather than leaving spinner where answer should be.

Rename incoming: app renamed around word people already
use. *Link* becomes **wire**, **My wiring** stays exactly
where it is.

[Запустите Nexow](https://x.nexow.ai), open any widget
Links tab, describe what should happen when you click.
Then test before leave.
