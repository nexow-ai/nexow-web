---
title: 'Виджеты, проверяющие plumbing: probe_url, verifier и одна бесплатная починка'
description: 'Главная причина мёртвых виджетов — код против выдуманного API. Builder тянет endpoint при записи, verifier д probует пропуски, crash за 45 с — авто-fix.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['продукт', 'ии', 'как-это-работает']
---

## При записи: `probe_url`

GET через тот же proxy, что `ctx.data.http()`. **691 API**, **47** категорий.

## После записи: verifier

lint + probe (до 5). **Один in-turn repair**.

## Crash

Авто turn в **45 секунд**, **раз на версию**. Тот же цикл для
[десяти примеров](/blog/starter-widgets-examples-workspace).

[Запустите Nexow](https://x.nexow.ai).
