---
title: 'Bots v2: RSI and volume triggers, webhook and database delivery, and a tidier builder'
description: 'Cloud bots learned new tricks — RSI and volume-spike conditions, trade watchers, signals that POST to your webhooks or append to your database, and a builder split into My bots and Create.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['product', 'automation', 'bots']
---

When bots launched, they could watch thresholds, percent moves, crossovers and
digests, and fire signals at your canvas. That core hasn't changed. Around it,
almost everything got deeper: more conditions to trigger on, more places for
signals to land, and a builder that stays out of your way.

## New conditions to trip on

The processor catalog grew. Alongside thresholds, % change and moving-average
crossovers, bots now evaluate:

- **RSI** — trip when momentum crosses into overbought or oversold territory
- **Volume spikes** — catch unusual activity the price hasn't reacted to yet
- **New trades** — fire on fresh fills from a connected account
- **Wallet activity and balance** — watch on-chain addresses, covered in our
  [wallets post](/blog/wallets-on-the-canvas)

Same as always: describe the rule in a sentence and let AI draft the bot, or
wire it visually and tweak every parameter yourself.

## Signals go where you work

A bot's signal used to reach your inbox and your widgets. Two new destinations
change what bots are for:

- **Webhooks** — POST each signal to a URL you name. That's Discord, Slack or
  Telegram via their webhook URLs, or your own server. Your bot becomes a
  producer any system can consume.
- **Your database** — append each signal as a row to one of your connected
  databases. Leave a bot running for a month and you have a queryable log of
  every trigger, ready for a widget to chart.

Delivery is a set, not a choice — one bot can notify you, update your widgets,
ping Discord and write the row, all from the same trigger.

## My bots and Create, finally apart

The bots panel now separates **My bots** — your running fleet, with status at a
glance — from **Create**, where new bots take shape. The form itself got
lighter: optional sections stay collapsed until you need them, so a simple
threshold alert takes seconds while the full depth remains a click away.

## Drafts start safe

One deliberate detail: when AI drafts a bot for you, its webhook sink starts
**empty**. A generated automation never ships with a destination you didn't
type yourself — you decide where signals go, explicitly, every time.

[Launch Nexow](https://x.nexow.ai), open Bots, and give your next alert
somewhere better to land than an inbox.
