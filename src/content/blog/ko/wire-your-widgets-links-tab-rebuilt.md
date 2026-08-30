---
title: '위젯 연결: 하나의 화면, 한 문장, Test it 버튼'
description: '위젯에 연결할 수 있는 모든 것이 이제 하나의 검색 상자 뒤에 — 다른 위젯, connections, bots, agents. plain language로 wiring을 설명하고 real event를 쏴 어느 쪽이 broken인지 찾으세요.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['제품', 'widgets', '자동화']
---

**link**는 두 widget 사이 event를 carry: 한쪽 symbol
change면 다른 쪽 react. Two-way면 양방향 sync. separate
tiles screen vs one instrument.

아이디어는 fine. finding과 worked 여부 — 이번 release fix.

## 하나의 surface, «All»은 진짜 all

picker가 *Widgets* / *Sources* sub-tabs — half inventory
hidden toggle. widget alone empty grid, bots/agents/
connections hint 없음.

now one search, kind filters: this screen/workspace/
elsewhere widgets; connections; bots; agents. **All**
shows all.

order change. **My wiring** *above* browse. picker grid
수십 tiles 아래 manage list scroll; picker가 매번 greet.

empty state bots/agents stores answer wait — **Looking…**;
filter chip count. empty «loading» lie UI가 routine.

## 두 mechanism, one question

- **other widget** → AI **glue link**. real code, version
  history, hidden runtime, A emit → B expects map.
- **connection/bot/agent** → **attachment** — rebuild가
  widget *own* code에 가르친 record. staged not auto —
  five sources one rebuild.

mechanism 먼저 묻기 bad. Links tab composer: **describe
wiring**.

> *「차트와 symbol 양방향 sync.」*
> *「여기 row click하면 other widget filter.」*
> *「price-alert bot signal 이 widget에.」*

planner same inventory, mechanism+counterpart resolve —
「price bot」→ id. **resolve only**; never generate.
streaming codegen same, Stop, version history.

picker still — already wired mark; second *already linked*;
again update not duplicate; badge **before** rebuild pay.

## «Test it»: which end broken?

until release link write-only. describe, pay codegen, leave,
poke. nothing — *which* part — not emit, link not map,
other not listen.

editor **Test it** bar. topic, value, pretend emit (two-way
only). real link runtime, generated `connect(ctx)` — not
simulation — verdict every empty:

- **link not running.** on — or no code.
- **ran, nothing forward topic.** wrong mapping; Logs.
- **sent 「symbol」 to Chart.** works.
- **forward, widget not on screen.** not bug — other screen.

testing list stay; recorder bar on screen only — tick
stream instrumentation never pay.

## quiet ones

two-way echo forever — delivered remembered, bounce-back
drop once — A↔B mirror break, new through. links/
attachments tabs/devices replicate; delete elsewhere
**gone** not save nothing. rebuild fail — Builder point,
not spinner.

rename: *Link* → **wire**, **My wiring** stays.

[Nexow 실행](https://x.nexow.ai), Links tab, click behavior
describe. leave 전 test.
