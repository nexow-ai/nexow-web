---
title: 'Publish a data feed: let people run your widget without your key'
description: 'A widget built on your Binance or OANDA connection used to be unusable by anyone else. Now you can publish exactly the reads it makes as a cached, read-only endpoint under your own profile — no key shared, no open proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['product', 'widgets', 'data']
---

There was an awkward gap in sharing. You build a beautiful FX chart on your OANDA
connection, publish it, and the first person who installs it sees *Connect OANDA
to use this data* — which is a polite way of asking a stranger to open a brokerage
account in order to look at a chart. Shared on a live screen it was worse: the
widget froze to a thumbnail.

The fix isn't to lend people your key. It's to publish **the reads your widget
actually makes**, as their own endpoints, under your own profile:

```
GET /<username>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Turn it on from the publish dialog — *Publish a read-only data feed* — and
viewers without their own connection read your feed instead of being asked to
connect.

## Three rules, and each one is a refusal

**Only reads that are safe to share.** Thirteen data methods can be published.
The rest are blocked, each for its own reason: `account` and `positions` are reads
too, but they return your balance, NAV, P&L and open book. `order` and
`closePosition` move money. `upsert` and `delete` destroy data. `scrape` bills a
third party per call. Plain `http` is already credential-free, so publishing it
would only build an open proxy with your name on it.

**Only the calls the widget actually made.** Your widget's successful reads are
recorded as it runs, and the publish dialog shows you the list — *candles from
Binance — BTCUSDT, 1h* — as the concrete thing you're agreeing to. A request that
asks for a parameter you never published, or a value outside the set you widened
it to, is refused before anything is decrypted. Parameters that shouldn't be in a
URL at all — a SQL string, a query vector — never appear in one; they're replayed
verbatim from storage.

**Refusals are indistinguishable.** An endpoint that doesn't exist, a parameter
outside its enum, and an audience you're not in all return the same 404. Whether
a friends-only feed exists is itself something about the author, so the answer
never leaks it.

## Who can read it, and what it costs you

The audience isn't a fourth switch to forget about — it **follows the
announcement post**: anyone, your followers, or your friends. A private
announcement disables the feed entirely, because an announcement only you can see
backing an endpoint other people call is incoherent.

Cost is the part worth understanding, because it's the part people fear. You pick
a refresh interval — every 30 seconds, 5 minutes, hourly or daily — and that is
the **most** your connection can be used, however many people open the widget.
Readers share one cached copy. Ten viewers and ten thousand viewers make the same
number of upstream calls, and exactly one refresh per window is allowed to run
even when several readers miss the cache at the same instant.

Your key never leaves the server. Your balance, positions and orders are never
published. And the feed is bound to the listing: unlist the widget and the
endpoints stop serving.

## The viewer's own connection always wins

A published feed is a fallback, never a substitute. If someone opening your widget
has their own OANDA connection, the widget uses **theirs** — their account, their
data, their rate limits. The feed is only consulted after the widget has failed to
find a connection of its own, and a miss is silent: they see the ordinary *connect
this venue* message rather than a new error to learn.

The same endpoints run through the real venue adapters the app already ships, so a
published feed returns byte-identical shapes to what you saw when you built the
widget — across every live venue in the catalog, with no per-venue special-casing.

## What it deliberately won't do

- **A shared trading dashboard renders its chart, not its account panel.** That's
  the blocked list doing its job, not a bug.
- **A symbol picker only offers the symbols you enumerated.** A widget with a
  free-text input degrades to a fixed set. That's the trade for not building an
  open proxy onto your broker.
- **Privacy-mode authors can't publish a feed.** In privacy mode your credentials
  live only in this device's seal — no server holds them, so no server can refresh
  anything on your behalf.
- **A fork doesn't inherit the feed.** Feeds are bound to a widget's lineage, so
  every installed copy resolves the same endpoints and a fork resolves none.

It's a small thing to switch on, and it changes what publishing means: a widget
you share is now a widget people can actually run.

[Launch Nexow](https://x.nexow.ai), open a widget you built on a keyed connection,
and publish it with the feed switched on.
