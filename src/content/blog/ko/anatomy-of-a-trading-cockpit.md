---
title: '트레이딩 cockpit 해부: 한 화면, 여덟 위젯, 각각을 무엇이 공급하는가'
description: '참조 데스크를 타일 하나하나 분해 — 각 위젯이 무엇인지, 어떤 연결이 공급하는지, 어떤 wire가 묶는지, 탭을 닫아도 계속 도는 것은 무엇인지. 릴리스 노트보다 지도에 가깝습니다.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['분해', '워크스페이스', '크립토']
category: teardown
---

여기서 대부분은 릴리스 노트입니다: 무언가 출시됐고, 이렇게
동작합니다. 이 글은 다른 종류입니다. 아래 내용은 새로운 것이
아닙니다. 완성된 화면 하나를 분해해, 따로 출시하는 조각들이
실제로 어떻게 맞물리는지 보여 줍니다.

데스크는 crypto cockpit — 한 화면에 여덟 위젯, 공개 시장
데이터로 만들었고, 키는 어디에도 없습니다. 특별한 것은
없습니다. 그게 요점입니다: 모든 부분은 설명만으로 다시
만들 수 있습니다.

## 화면

![1부터 8까지 번호가 붙은 여덟 위젯 타일이 있는 화면](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "전체 데스크. 한 화면, 여덟 위젯, 자유 canvas에 배치 — 번호는 아래 목록과 대응합니다.")

1. **캔들.** 앵커 타일. 심볼 하나, 인터벌 하나, live 마지막
   캔들. 화면의 나머지는 모두 이것을 공급하거나 따릅니다.
2. **오더북 깊이.** bids와 asks를 쌓인 막대로, 얇은 북이
   추론이 아니라 보이게.
3. **Watchlist.** 소수의 심볼, 하나 선택됨. 이 타일이
   화면의 핸들 — 아래에서 더 설명합니다.
4. **지갑 잔액.** 공개 주소, read-only, wallet 연결
   경유. 서명 없음, 키 없음, 승인할 것 없음.
5. **Funding rates.** 최근 몇 윈도우의 perp funding,
   영선 양쪽에 양·음.
6. **Heatmap.** watchlist와 같은 유니버스, 크기와 음영으로
   읽기보다 훑어보기.
7. **예측 시장.** 군중이 가격 매기는 것, 오더북이
   가격 매기는 것 옆에. 둘이 다를 때가 흥미롭습니다.
8. **알림 inbox.** 하루 대부분 비어 있음. 탭이 닫혀도
   계속 일하는 bot이 채움.

**화면**은 위젯 배치 하나입니다. **workspace**는 여러
화면을 담습니다. canvas는 자유 — 원하는 곳에 두고, 그룹은
타일을 모자이크나 탭으로 쌓을 수 있지만 — 끝이 있는
canvas이지, 길을 잃는 무한 평면이 아닙니다.

## 타일 하나를 끝까지 따라가기

그 화면의 모든 타일 아래에는 같은 네 층이 있습니다.
watchlist를 예로:

![왼쪽에서 오른쪽: 연결이 생성 코드를 공급하고, 코드가 점선 sandbox 경계 안에서 위젯을 렌더링하며, wire가 값을 차트로 carry](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "타일 하나, 위에서 아래: 연결, 생성 코드, 실행 중인 위젯, 값을 내보내는 wire.")

1. **연결.** 90개 live connector 중 하나 — 여기서는
   credential이 전혀 필요 없는 공개 시장 데이터.
   연결은 inventory이지 configuration이 아닙니다:
   위젯에 하나를 붙이면 위젯이 사용법을 알고 재빌드됩니다.
2. **생성 코드.** watchlist를 설명했고, build가 하나를
   썼습니다. 버전 이력이 있고, 만든 대화의 모든 turn을
   읽을 수 있습니다.
3. **실행 중인 위젯.** sandbox에서 실행. 잘못 동작하는
   위젯은 자기 타일만 망치고 화면의 다른 것은 건드리지
   않습니다 — 읽지 않은 소프트웨어를 돌리는 게
   합리적인 유일한 이유입니다.
4. **나가는 wire.** 행을 클릭하면 타일이 emit. 그것만으로는
   어디에도 가지 않습니다. cockpit이 되고 여덟 개의
   분리된 타일이 되지 않게 하는 건 다음 부분입니다.

## 묶는 것은 코드가 아니라 wiring

![같은 여덟 numbered 위젯 그래프, watchlist와 차트 사이 양방향 wire, 오더북·funding 타일로 단방향 wire, 왼쪽에서 연결·bot·agent 부착](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "같은 여덟 타일을 그래프로. 실선은 위젯 간 wire, 점선은 inventory 나머지의 attachment.")

*wire*라는 한 단어 뒤에는 두 메커니즘이 있고, 다이어그램에서
실선과 점선으로 구분됩니다:

- **위젯 to 위젯**은 **glue link** — 자체 버전 이력을 가진
  실제 생성 코드, 숨겨진 runtime에서 실행, 한 타일이 emit한
  것을 다른 쪽이 기대하는 것으로 매핑. watchlist와 차트
  사이 arc는 양방향: 어느 쪽에서 심볼을 바꿔도 둘 다
  따릅니다. 양방향 wire는 도움 없이 영원히 echo하므로
  전달된 값은 기억하고 동일한 bounce-back은 한 번
  drop합니다.
- **위젯 to 연결·bot·agent**는 **attachment** — rebuild가
  그 위젯 *자체* 코드에 가르친 것의 기록. 점선입니다.
  자동이 아닌 staged이므로 소스 다섯 개를 연속으로
  둘러보면 rebuild 다섯 번이 아니라 한 번입니다.

이 화면의 wiring은 의도적으로 얇습니다: watchlist가 차트를
양방향으로, 오더북과 funding 타일을 단방향으로 drive.
wire 세 개. heatmap용 네 번째를 추가하는 건 유혹적이었고
틀렸습니다 — 보고 있지 않을 때 바뀌는 타일은 신뢰를
잃는 타일입니다.

wire 편집기에는 **Test it** 바가 바로 이를 위해 있습니다.
topic과 value를 고르고, 어느 쪽이 emit하는 척할지 선택한
뒤, 실제 runtime으로 실제 event를 보냅니다. verdict는
*이 wire는 실행 중이 아님*, *실행됐지만 그 topic에
아무것도 forward하지 않음*, *forward했지만 그 위젯은
화면에 없어 받을 수 없음*을 구분합니다. 이게 있기 전에는
깨진 wire와 다른 화면을 가리키는 wire가 같아 보였습니다:
아무 일도 없었습니다.

## 탭을 닫아도 계속 도는 것

타일 8만 통상적인 의미의 위젯이 아닙니다. inbox이고,
채우는 것은 **bot**입니다.

bot은 일부러 화려하지 않습니다 — 고정 processor catalog
(threshold, change, crossover, RSI, volume spike, digest,
new trade, wallet activity, wallet balance)가 정확히 세
종류에만: 시장 캔들, broker 계정, 공개 wallet 주소.
루프에 model이 없어서 한 달 내버려 둘 수 있습니다.
하나가 fire하면 네 곳으로 동시에 fan-out: 알림 inbox,
widget bus(타일 8 live 업데이트), webhook, 연결된
데이터베이스.

**Agents**는 다른 절반, 반대 형태: general-purpose,
웹 검색·소셜·시장 데이터·DB·메모리 등 per-tool grant,
수동 또는 15분~일일 trigger. agent는 *「밤새 무슨 일이
있었는지 요약해」*일 때 쓰고, *「이게 저걸 cross하면
알려」*가 아닐 때. 둘 다 타일 8을 feed하지만, unattended로
두기 cheap한 건 하나뿐입니다.

## 이 화면이 의도적으로 하지 않는 것

거래하지 않습니다. 여기서 order를 넣는 것은 없습니다 —
별도 grant, 별도 connector이고, 훑어보는 heatmap과 같은
화면에 두는 게 사고의 길입니다.

키를 보관하지 않습니다. 모든 소스는 공개: 캔들, 깊이,
funding, 예측 시장, read-only 주소. 나중에 revoke 없이
다른 사람에게 넘길 수 있는 데스크가 타일 두 개 더
있는 데스크보다 가치 있습니다.

끝난 상태도 아닙니다. 화면이 도달하는 상태가 아니기
때문입니다. 이 teardown의 솔직한 버전은 위 layout이
네 번째라는 것입니다; 처음 셋은 타일이 더 많았고
덜 말해 줬습니다.

[Nexow 실행](https://x.nexow.ai)하고 첫 타일을 설명하세요.
나머지 일곱은 더 쉽습니다.
