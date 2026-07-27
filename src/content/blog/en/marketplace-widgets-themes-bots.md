---
title: 'The marketplace is open: install widgets, themes, screens — and now bots'
description: 'Publish what you build and install what others share. The Nexow marketplace covers widgets, themes, whole screens and workspaces — and now bots, published safely with your credentials stripped out.'
pubDate: 2026-07-25
heroImage: ../../../assets/blog/marketplace.svg
tags: ['product', 'marketplace', 'community']
---

The third item on the roadmap was a marketplace: publish what you build, pick up
what others share. It's open — and it covers more than widgets. Themes, whole
screens and workspaces, and as of this week **bots** are all shareable assets
you can publish from your library and install with a click.

## One catalogue, four kinds of asset

The marketplace lives in its own panel, with category chips to browse by kind:

- **Widgets** — publish straight from your library; installers drop them onto
  their canvas or save them to their own library
- **Themes** — browse looks, preview them, apply them
- **Screens & workspaces** — share a whole layout, previewed as a wireframe
  before you commit
- **Bots** — the newest arrival, and the most interesting one to share safely

Widget posts in the community feed connect to the same pipeline: when someone
shares a build you like, you can install it right from the post, provenance
included.

## Lineage: credit is not a surprise

Every published asset carries its **history**. When you publish a remake of
someone else's work, the chain of authors underneath is part of the listing —
there's a lineage view that shows every version and every hand it passed
through. Building on each other is the point; credit travels with the asset, by
construction.

## Bots travel without your keys

Sharing an automation is different from sharing a chart: your bot might read a
broker connection, watch your wallet, or post to your Discord webhook. None of
that should ever end up in a public listing — so it can't.

When you publish a bot, Nexow strips everything that identifies **your**
infrastructure: connected accounts, watched wallet addresses, webhook URLs and
database sinks never enter the payload. What travels is the logic — the
processor, its parameters, the schedule, the signal.

On the other side, an installed bot arrives **paused**, owned by the installer.
Market-data bots are runnable as-is; bots that watched an account or a wallet
ask for the installer's *own* connection or address on first edit, with a guided
form pointing at exactly what's missing. Your alert logic spreads; your
credentials stay home.

## Free to share, free to install

No storefront economics yet — publishing and installing are free. Strategy
signals with audited track records are still on the roadmap; this release is
about the sharing loop: build, publish, install, remake, credit.

[Launch Nexow](https://x.nexow.ai), open the Marketplace panel, and ship
something from your library. Someone's canvas is waiting for it.
