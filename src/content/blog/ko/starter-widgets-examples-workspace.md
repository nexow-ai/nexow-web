---
title: '예제 위젯 열 개가 Nexow와 함께 제공됩니다 — 대화까지 포함'
description: '새 계정이 더 이상 빈 canvas에서 열리지 않습니다. 완성된 위젯 열 개가 Examples workspace로 도착하며, 각각 빌드한 실제 채팅과 실제 버전 이력을 담습니다 — 연결 없이, 여러분이 쓰는 것과 같은 codegen 루프로 만들었습니다.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['제품', '온보딩', 'widgets']
---

Nexow에서 가장 어려운 화면은 항상 첫 화면이었습니다: 빈
canvas, prompt 상자, 그리고 작동한다는 증거가 없었습니다.
문서를 읽거나, 뭔가 입력하고 기다릴 수 있었습니다.

다음 릴리스부터 새 계정은 **Examples workspace**로
부팅됩니다 — 세 화면에 완성된 위젯 열 개, 첫 로드에
모두 실행, **아무 것도 연결되지 않음**. 스크린샷도,
가이드 투어도 아닙니다. 열고, 편집하고, 분해하고, 위에
게시할 수 있는 작동하는 위젯입니다.

## 패키지 내용

**Live world** — 세계 시계(주야 링·근무 시간 겹침 바),
7일 일기예보(시간별 곡선), 지난 1시간·하루·주의 모든
지진을 live 지도에(규모별 크기), live 공기질(지수를
움직이는 오염물질).

**Markets** — Binance 캔들(live 마지막 캔들·24h 변화
뱃지), ECB 기준환율 FX 변환기(90일 이력), 가장 활발한
Polymarket 질문과 군중의 믿음, World Bank 지표 아무
것이나 두 나라 동시 장기 차트.

**Make and play** — reload 후에도 남는 스티키 노트
보드(durable per-item storage), Wikipedia «오늘의
역사» feed(썸네일·날짜 선택).

모든 소스는 keyless: Open-Meteo, USGS, Binance 공개
데이터, Frankfurter, Polymarket, World Bank, Wikipedia.
규칙이지 우연이 아닙니다 — «Connect OANDA»에서
여는 예제는 빈 canvas보다 나쁩니다.

## 실제로 빌드됐고, 쓰여진 게 아님

각 예제는 사람이 타이핑하듯 쓴 brief에서 시작 — 원하는
것과 이유, specification이 아님. `starter:build`가
그 brief를 **`runWidgetToolLoop`**로 돌립니다: 플랫폼
codegen route와 브라우저 bring-your-own-key path가
모두 구동하는 같은 module, 같은 contract·tools·in-turn
verifier. HTTP stream 없음, credit ledger 없음, 브라우저
없음 — 같은 루프입니다.

위젯 chat 탭의 transcript가 진짜 대화이고, 코드를
낸 모든 turn이 rail의 진짜 버전입니다. 대부분 세
개. **공기질은 다섯 개** — 처음 셋은 빈 «도시 입력»
상자로 열렸고, 다섯 번째 turn은 bug report: 여섯
오염물 타일이 모두 대시, 타임스탬프 *「-6375분
전」*. 그 build가 그대로 패키지에 있습니다.

중요하게 brief는 **provider 없이** 실행 — 새 계정과
동일. 그 루프 결과는 첫날 작동합니다.

## 두 번째 catalog가 아님

각 예제는 평범한 marketplace asset, 공식 계정이
모두와 같은 RPC로 publish: 같은 sanitizer, lineage
graph, install path, royalty chain. starter widget은
서버에서 special-case하지 않습니다 — fork하면
진짜 lineage를 이어갑니다.

curation registry는 curation만: 어떤 published asset이
패키지를 이루는지, 순서, 화면. 쓰기는 service-role
only, 읽기는 public — signed-out 방문자도 listing
페이지를 볼 수 있습니다.

## 패키지가 도착하는 곳과 하지 않는 것

Seeding은 세 가지로 gate: **계정당 한 번, 기기당
한 번 아님** — flag는 replicated setting, 계정
전환 시 재읽기. 이미 쓴 canvas에는 seed하지 않음.
**Settings → General → Add example widgets**에서
force 가능 — 패키지 이전 계정이나 workspace를
지운 사람.

예제는 빈 workspace를 *대체*하지 않고 *옆에* 놓여
onboarding은 여전히 깨끗한 화면을 줍니다. 패키지
전체가 undo 한 단계.

Seeded 위젯은 실제 marketplace install로 stamp —
개선 후 publish하면 공식 lineage를 이어 rival copy가
아님. 더 나은 예제를 ship해도 **이미 seeded 사용자는
자신의 것 유지** — 지금은 그들 widget, 편집됐을
수 있음. push-update path 없고, 있어서도 안 됩니다.

## 패키지로 verified, 눈으로가 아님

계정에 도달하기 전 전체 패키지가 real Chrome에서
실행, 위젯별 grade: boot error, animation loop,
slow frame, blank render — 각 screenshot. 별도 live
check가 committed code에서 public endpoint를 derive해
여전히 응답하는지 확인 — widget만 바뀌고 test는
stale하지 않게.

열한 번째 bar도 이 열 개와 같음: connection 0,
clean smoke verdict, 데이터 소스 bad day에 blank
타일 대신 real message, 대화 어디에도 personal
없음 — 대화도 ship.

다음 릴리스와 함께, 기존 계정은 **Settings → General**에서
원할 때 가져올 수 있습니다. 하나 열고, 빌드 chat
읽고, 뭔가 바꿔 보세요 — canvas가 뭘 할 수 있는지
배우는 가장 빠른 길입니다.

[Nexow 실행](https://x.nexow.ai)하고 그동안 빌드를
시작하세요.
