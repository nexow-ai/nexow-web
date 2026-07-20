---
title: 'Workspace security: how Nexow keeps generated widgets contained'
description: 'How Nexow uses sandboxed widgets, scoped connectors and workspace history to keep generated trading tools understandable and controlled.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architecture', 'security']
---

Market workstations deal with sensitive context: keys, positions, strategies,
alerts and custom workflows. Generated software only works here if the boundaries
are easy to understand.

Here's what that actually means.

## Sandboxed generated widgets

Every generated widget runs inside a sandboxed runtime. The widget can render its
interface, keep its own state, and use the connector capabilities it has been
given, without turning the rest of your workspace into an open surface.

## Your widgets keep a history

Every widget you build, every version, every log, and your entire widget library
stay attached to the workspace. You can inspect generated code, compare versions,
roll back experiments, and keep a reusable library as your canvas evolves.

## Direct-to-venue connections

Where a venue's CORS policy permits, Nexow connects to it **directly from your
browser**, bypassing our proxy entirely. Your exchange credentials are used to
talk to the exchange — not to talk to us. Fewer hops means lower latency and a
smaller trust surface.

## Why private-by-default matters

- **Security.** The fewer parties that touch your keys, the fewer places they can
  leak. Scoped connectors and sandboxed widgets reduce that surface.
- **Latency.** Direct connections skip a network hop, which matters when you're
  watching an order book.
- **Ownership.** Your dashboards are yours. Version history and reusable widgets
  keep the work portable.
- **Cost.** Free includes starter credits; paid plans add more capacity when the
  workspace needs it.

## The trade-offs, honestly

Security design is not free of trade-offs. Some venues require routing through a
thin proxy, some workflows need background cloud services, and shared/community
features require identity and sync. The important part is keeping those
boundaries explicit.

As we add hosted plans, trading agents and server components, the principle stays
fixed: **your tools, your data, your control**.

[Launch Nexow](https://x.nexow.ai) and build your first workspace.
