---
title: '기본적으로 프라이빗: AI 시장 워크스테이션이 로컬에서 실행되어야 하는 이유'
description: 'Nexow는 기본적으로 완전히 로컬에서 실행됩니다 — 브라우저의 bring-your-own-key codegen, IndexedDB 영속성, direct-to-venue 연결. private-by-default의 의미와 트레이더에게 왜 중요한지 설명합니다.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['프라이버시', '아키텍처', '보안']
category: deep-dive
---

대부분의 AI 도구는 기본적으로 데이터를 서버로 보냅니다. 시장 워크스테이션 —
키, 포지션, 전략이 전부인 곳 — 에서 그 기본값은 거꾸로입니다. Nexow는 이를
뒤집습니다: **private by default, local by design.**

실제로 의미하는 바는 다음과 같습니다.

## 브라우저의 bring-your-own-key codegen

프라이빗 모드에서는 자신의 Anthropic API 키를 추가하고, 위젯 생성이
클라이언트 측에서 실행됩니다. 위젯을 프롬프트하면 요청이 Nexow 인프라가 아닌
사용자의 키로 브라우저에서 Anthropic으로 갑니다. 인증되지 않은 세션은
실행할 것이 없으므로 비용이 들지 않습니다 — 작업은 사용자의 기기에서
일어납니다.

## 위젯은 브라우저에 존재

만든 모든 위젯, 모든 버전, 모든 로그, 전체 위젯 라이브러리가 브라우저의
**IndexedDB**에 저장됩니다. 오프라인에서도 사용 가능하며 계정에 묶이지
않습니다. 스토리지를 지우면 사라집니다 — 서버 측 복사본은 없습니다. 서버
측 업로드가 없었기 때문입니다.

## Direct-to-venue 연결

venue의 CORS policy가 허용하는 곳에서는 Nexow가 **브라우저에서 직접**
연결하여 proxy를 완전히 우회합니다. 거래소 자격 증명은 거래소와 통신하는 데
사용됩니다 — 우리와 통신하는 데가 아닙니다. hop이 적을수록 지연 시간이 낮고
신뢰 표면이 작습니다.

## private-by-default가 중요한 이유

- **Security.** 키를 만지는 당사자가 적을수록 유출될 곳도 적습니다.
  Local-first는 프라이빗 모드에서 우리를 경로에서 완전히 제거합니다.
- **Latency.** 직접 연결은 네트워크 hop을 건너뛰며, 오더북을 볼 때
  중요합니다.
- **Ownership.** 대시보드는 당신의 것입니다. lock-in 없음, export dance
  없음 — 기기에 있습니다.
- **Cost.** 자신의 모델 사용량에 대해서만 비용을 지불하며, 마크업도 없고
  오늘 캔버스에서 빌드하려면 구독도 필요 없습니다.

## 트레이드오프, 솔직하게

Local-first도 트레이드오프가 없지는 않습니다. 일부 venue는 browser-direct
연결을 허용하지 않아 얇은 proxy를 거쳐야 합니다. 로컬 영속성은 동기화를
선택하기 전까지 작업이 브라우저 프로필에 묶인다는 뜻입니다. 자신의 키를
쓰면 사용량을 직접 관리해야 합니다. 돈과 이렇게 가까이 있는 도구에는
이것이 맞는 트레이드오프라고 봅니다.

hosted plans, trading agents, server components를 추가해도 원칙은 고정됩니다:
**your keys, your data, your machine** — 명시적으로 클라우드를 선택하지
않는 한.

[Nexow 실행](https://x.nexow.ai)하고 프라이빗 모드를 직접 확인하세요.
