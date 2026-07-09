---
title: 'Private by default: why your AI market workstation should run locally'
description: 'Nexow runs fully local by default — bring-your-own-key codegen in the browser, IndexedDB persistence, and direct-to-venue connections. Here is what private-by-default means and why it matters for traders.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architecture', 'security']
---

Most AI tools ship your data to a server by default. For a market workstation —
where your keys, positions and strategies are the whole game — that default is
backwards. Nexow inverts it: **private by default, local by design.**

Here's what that actually means.

## Bring-your-own-key codegen, in the browser

In private mode you add your own Anthropic API key, and widget generation runs
client-side. When you prompt a widget, the request goes from your browser to
Anthropic with your key — not through Nexow's infrastructure. An unauthenticated
session costs us nothing to run because there's nothing to run: the work happens
on your machine.

## Your widgets live in your browser

Every widget you build, every version, every log, and your entire widget library
persist in your browser's **IndexedDB**. They're available offline and tied to no
account. Clear your storage and they're gone — there's no server-side copy
because there was never a server-side upload.

## Direct-to-venue connections

Where a venue's CORS policy permits, Nexow connects to it **directly from your
browser**, bypassing our proxy entirely. Your exchange credentials are used to
talk to the exchange — not to talk to us. Fewer hops means lower latency and a
smaller trust surface.

## Why private-by-default matters

- **Security.** The fewer parties that touch your keys, the fewer places they can
  leak. Local-first removes us from the path entirely in private mode.
- **Latency.** Direct connections skip a network hop, which matters when you're
  watching an order book.
- **Ownership.** Your dashboards are yours. No lock-in, no export dance — they
  live on your machine.
- **Cost.** You pay only for your own model usage, with no markup and no
  subscription required to build on the canvas today.

## The trade-offs, honestly

Local-first isn't free of trade-offs. Some venues don't allow browser-direct
connections and must route through a thin proxy. Local persistence means your
work is tied to a browser profile until you choose to sync it. And running your
own key means managing your own usage. We think those are the right trade-offs
for a tool that sits this close to your money.

As we add hosted plans, trading agents and server components, the principle
stays fixed: **your keys, your data, your machine** — unless you explicitly opt
into the cloud.

[Launch Nexow](https://x.nexow.ai) and see private mode for yourself.
