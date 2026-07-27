---
title: 'Widget building you can trust: durable builds, honest versions, lint in the chat'
description: 'The composer grew a memory and a conscience — builds survive disconnects and retries cleanly, every version records where it came from, and lint and runtime issues land in the chat, not a console.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['product', 'widgets', 'ai']
---

Prompt-to-widget was always the flashy part. This release is about the
unglamorous half of that promise: what happens when the network drops
mid-build, when a generation fails, when you want to know which version of a
widget you're actually looking at. The answer, now: nothing gets lost, and
nothing gets rewritten behind your back.

## Builds that survive you

Widget builds are now **durable jobs**. Close the laptop mid-generation, lose
Wi-Fi, refresh at the worst moment — the build keeps its lease on the server
and finishes without you. If a turn does fail, a **Retry** sits right on it,
and it works even after a disconnect left things in a weird state. Stale
builds can't wedge the composer anymore.

Your words are just as durable: an unsent prompt sitting in the composer
persists with the widget, so a mistimed refresh doesn't eat the paragraph you
were about to send.

## Versions with provenance

Every widget version now records **where it came from** — a prompt, an amend, a
manual save — and edits create new versions instead of rewriting old ones in
place. The first version of every widget, its **genesis**, is never pruned:
you can always scroll back to what the very first prompt produced. And when a
version chip in chat points at history that has been pruned, the chat says so
instead of pretending.

## The build tells you what's wrong with it

Generated code gets checked, and the findings go where you're already looking:
**lint and runtime issues appear on the build's chat bubble**, as part of the
conversation. Fix them by replying — the issues are context the next turn
already knows about.

The sandbox stayed strict, and got stricter: widgets can't make direct network
calls — data comes through connectors — and the assets they may load are
pinned to known origins.

## Richer conversations

The composer picked up **attachments** — drop an image into the chat to show
the AI what you mean — and **pinned connections**, so a widget's conversation
always knows which data sources it's building against. If you build with your
own API key, other devices on your account see the build in progress instead
of a mystery busy state.

None of this changes how building feels: describe, watch, refine. It changes
how much you can trust what comes out.

[Launch Nexow](https://x.nexow.ai) and break your connection mid-build — we'll
finish without you.
