---
title: '스스로 배관을 점검하는 위젯: probe_url, verifier agent, 무료 수리 한 번'
description: '죽은 위젯의 최대 원인은 상상의 API에 맞춰 쓴 코드였습니다. 이제 builder가 쓰면서 endpoint를 fetch하고, verifier가 건너뛴 것을 re-probe하며, 처음 45초 crash는 자동 fix 한 turn을 삽니다.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['제품', 'ai', '작동-방식']
---

생성 위젯이 실패하는 가장 흔한 방법은 생성 코드의 bug가
아니었습니다. 존재하지 않던 endpoint였습니다.

모델이 memory의 URL — 또는 링크가 *documentation
page*인 directory row — 에서 응답 shape를 추측하고,
그 추측에 맞춰 parsing code를 쓰고 ship했습니다.
영원한 spinner나 빈 차트, 화면에는 이유가 없었습니다.

이 릴리스는 그 루프를 세 번 닫습니다: 쓰는 동안, 쓴
직후, 여전히 crash하면 한 번 더.

## 쓰는 동안: `probe_url`

builder에 **지금 public keyless endpoint에 GET**하는
tool이 있습니다. runtime의 `ctx.data.http()`와 같은
server proxy를 거치며, real HTTP status와 response
body를 돌려줍니다.

그 동일성이 전부입니다. 성공한 probe *는* 성공한
runtime call입니다. 실패한 probe는 broken으로 ship될
widget — canvas가 아니라 turn이 남을 때 실패합니다.

builder는 memory가 아니라 타는 ladder 맨 아래에
있습니다: venue reference docs 먼저, 그다음 **47
category 691 keyless public API directory**, 각 entry
name *과* description으로 topic 검색 — real request
(「조석」, 「공기질」)는 category guess와 잘 맞지
않습니다. scope와 무관하게 builder에 항상 — universal
keyless fallback. 링크는 documentation, 마지막
단계는 항상 같음: endpoint derive, probe.

「X 데이터 있나?」는 추론이 아니라 보는 질문입니다.
ladder 끝에서 실제로 확인 후 *no*는 fine outcome.
memory assert는 not, 그리고 느낌보다 훨씬 자주
틀렸습니다.

## 쓴 직후: verifier

모델에게 self-verify를 요청하는 건 request지 guarantee가
아닙니다. widget code가 land하면 model 동의와 무관한
두 일이 일어납니다.

첫째, tool result가 **이 turn에 probe하지 않은
endpoint**를 이름 붙이고 rounds가 남으면 확인하라고
합니다.

둘째 — cooperation 불필요 — verifier가 **model summary
쓰는 동시 concurrent**로 직접:

- **Module lint** silent failure class. missing `render`
  export. parse 안 되는 code. third-party raw `fetch`/
  `WebSocket`(sandbox block — generated widget 최악의
  silent failure, console에 아무것도 없음). external
  image/video URL을 `src`에 직접. hard-coded tile URL을
  map library에(mount·pan 완벽, tile request는 refuse).
- **Model이 skip한 endpoint probe**(module당 최대
  five), verdict는 model처럼: unreachable, URL/
  parameter wrong 4xx.

Real problem은 **in-turn auto repair round 한 번**,
probe output evidence, named만 fix instruction. build
full context hot — broken ship 후 whole turn보다
cheap. module mid-flight rewrite면 running verification
supersede, verdict discard. verifier internal fail은
clean verify: build delay, never break.

## 여전히 crash: repair 한 번, hard-bounded

Self-repair context는 runtime error를 *next* chat turn에
— send할 때만. build 직후 crash widget은 composer
reopen·「broken」까지 broken.

runtime host는 fresh build crash 시 **auto fix turn
한 번**. auto turn은 credits/key spend, bounds tight:

- AI build *just* produced version만 — restored old
  version·hand-edited crash never qualify;
- build 후 **45초**만 — hour later crash는 new info;
- **version당 once**, auto-repair turn이 만든 version
  ineligible. build당 auto follow-up 최대 one.

Repair turn은 app defect report wording, data endpoint
failure면 rewrite 전 probe. fix, keep what works, widget
scope don't grow.

Server: rescued background build는 same widget의 another
turn이 이미 live면 wait — duplicate version race 대신.

## 모든 mode, 같은 loop

Shared module — platform builds, browser bring-your-own-key
builds, server-side build sweep **identical** behaviour:
same tools, probe formatting, verifier, repair budget.
modes는 tools 존재 여부나 widget check strictness diverge
불가 — answer implementation 하나뿐. [열 개 예제
위젯](/blog/starter-widgets-examples-workspace)도 next
release와 함께 — exactly this loop, exactly these checks로
built.

Model correct 안 만듦. wrong survivable, usually invisible:
endpoint는 code가 depend하기 전 check, check는 model
feel 여부와 무관하게 runs, first crash는 you에게 도달
전 one honest fix attempt.

[Nexow 실행](https://x.nexow.ai) obscure — 조석, 공기질,
공휴일. activity rail이 parsing code 한 줄 쓰기 전
endpoint probe하는 걸 watch.
