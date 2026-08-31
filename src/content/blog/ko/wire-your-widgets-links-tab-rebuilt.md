---
title: '위젯 연결: 하나의 화면, 한 문장, Test it 버튼'
description: '위젯에 연결할 수 있는 모든 것이 이제 하나의 검색 상자 뒤에 — 다른 위젯, connections, bots, agents. plain language로 wiring을 설명하고 real event를 쏴 어느 쪽이 broken인지 찾으세요.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['제품', 'widgets', '자동화']
---

**link**는 두 widget 사이 event를 carry합니다: 한쪽에서
symbol을 바꾸면 다른 쪽이 반응합니다. Two-way를 켜면
양방향으로 sync를 유지합니다. separate tiles로 가득한
화면과 하나의 instrument처럼 동작하는 화면의 차이입니다.

아이디어는 괜찮았습니다. 찾는 것은 아니었고, 작동하는지
아는 것도 마찬가지였습니다. 이번 릴리스에서 둘 다
고쳤습니다.

## 하나의 surface, «All»은 진짜 all

picker는 *Widgets*와 *Sources* 두 sub-tab으로 나뉘어
있었습니다 — inventory 절반이 항상 눌러야 아는 toggle
뒤에 숨어 있었습니다. 화면에 widget 하나만 있으면 빈
grid가 보였고, bots·agents·connections가 존재한다는
hint조차 없었습니다.

이제 search box 하나와 kind filter 한 줄이 전부를
덮습니다: 이 화면·이 workspace·다른 곳의 widget;
data connections; bots; agents. **All**은 전부
보여 줍니다.

순서도 바뀌었습니다. **My wiring**이 browse surface
*위*에 있습니다. 예전에는 수십 개 tile까지 늘어날 수
있는 picker grid *아래*에 있어서, disable·remove처럼
돌아와 manage하는 list가 scroll past해야 하는 것이었고,
add할 때만 필요한 picker가 매번 greet했습니다.

같은 영역의 작은 honesty fix: empty state가 bots·agents
store가 응답할 때까지 기다린 뒤 wire할 것이 없다고
말하며, 그동안 **Looking…**을 보여 줍니다. filter chip
마다 count가 있습니다. «still loading»을 뜻하는 빈
grid는 interface가 routine하게 lie하던 것입니다.

## 두 mechanism, one question

그 하나의 picker 뒤에는 진짜로 다른 두 가지가 있습니다:

- **다른 widget** → AI가 만든 **glue link**. real code,
  version history, hidden runtime에서 돌며 A가 emit하는
  것을 B가 expect하는 것으로 map.
- **connection, bot, agent** → 가벼운 **attachment** —
  rebuild가 이 widget *own* code에 가르친 것의 record.
  staged not automatic — source 다섯 개 browse해도
  rebuild는 one, not five.

무엇이 일어나야 하는지 말하기 전에 mechanism을 고르게
하는 건 나쁜 first question입니다. Links tab은 이제
compositor로 열립니다: **describe the wiring**.

> *「차트와 symbol 양방향 sync.」*
> *「여기 row click하면 other widget filter.」*
> *「price-alert bot signal 이 widget에.」*

planner는 picker와 같은 inventory를 읽고 mechanism과
counterpart를 resolve — 「price bot」→ id. **resolve
only**; never generate. 비싼 streaming codegen은
Stop button과 version history와 함께 예전처럼
돌아갑니다.

직접 가리키려면 picker still — already wired mark;
second pick *already linked*; again은 update not
duplicate; badge **before** rebuild pay.

## «Test it»: which end broken?

이 릴리스 전까지 link는 write-only였습니다. describe,
codegen pay, editor leave, real widget poke. nothing일
때 *which* part — not emit, link not map, other not
listen — 알 길 없었습니다.

editor에 **Test it** bar. topic·value, pretend emit
(two-way link만 — one-way는 far side에서 always
nothing). event는 link real runtime으로 들어가 generated
`connect(ctx)` 실행 — simulation 아님 — verdict는
empty가 되는 모든 경우를 구분:

- **This link isn't running.** on — or no code yet.
- **Ran but forwarded nothing for that topic.** mapping
  wrong; Logs tab detail.
- **Sent 「symbol」 on to Chart.** works.
- **Forwarded, but that widget isn't on screen.** not
  bug — other end another screen.

testing은 list에 stay; recorder는 bar on screen일 때만
armed — tick stream forward link가 instrumentation
pay 안 함.

## The quiet ones

Two-way link은 help 없으면 echo forever — delivered
value remembered, identical bounce-back dropped once —
canonical A↔B mirror loop breaks, genuinely new value
through. links·attachments는 tab·device에 replicate,
delete elsewhere **gone** state in editor, save into
nothing 아님. rebuild fail — Builder tab point, spinner
아님.

rename incoming: *Link* → **wire**, **My wiring** stays
exactly where it is.

[Nexow 실행](https://x.nexow.ai), any widget Links tab,
click behavior describe. leave 전 test.
