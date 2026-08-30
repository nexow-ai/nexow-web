---
title: 'Десять примеров виджетов уже в Nexow — с разговором'
description: 'Новый аккаунт больше не открывается на пустом canvas. Десять готовых виджетов приходят как workspace Примеры, каждый с реальным чатом, который его построил, и реальной историей версий — тем же codegen loop, что и у вас, без подключений.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['продукт', 'онбординг', 'widgets']
---

Самый сложный экран в Nexow всегда был первый: пустой
canvas, поле prompt и никаких доказательств, что всё
это работает. Можно было читать документацию или
вводить что-то и надеяться.

В следующем релизе новый аккаунт загружается в
**workspace Примеры** — десять готовых виджетов на
трёх экранах, все работают при первой загрузке, **ничего
не подключено**. Не скриншоты, не guided tour. Живые
виджеты, которые можно открыть, отредактировать,
разобрать и опубликовать поверх.

## Что в пакете

**Live world** — мировые часы с кольцом день/ночь и
полосой пересечения рабочих часов; прогноз погоды на
семь дней с почасовой кривой; все землетрясения за
последний час, день или неделю на live-карте, размер
по магнитуде; live качество воздуха с загрязнителем,
который сейчас движет индекс.

**Markets** — свечи Binance с live последней свечой и
значком изменения за 24h; FX-конвертер на reference
rates ECB с историей 90 дней; самые активные вопросы
Polymarket и что верит толпа; любой индикатор World
Bank для двух стран сразу как long-run chart.

**Make and play** — доска стикеров, переживающая reload
через durable per-item storage, и лента Wikipedia «в
этот день» с миниатюрами и выбором даты.

Каждый source keyless: Open-Meteo, USGS, публичные
данные Binance, Frankfurter, Polymarket, World Bank,
Wikipedia. Это правило, не совпадение — пример,
открывающийся на «Connect OANDA», хуже пустого canvas.

## Их действительно построили, не написали

Каждый пример начался как brief, написанный как человек
печатает — что хочет и зачем, не specification.
`starter:build` прогоняет briefs через **`runWidgetToolLoop`**:
тот же module, что platform codegen route и bring-your-own-key
path в браузере, с тем же contract, tools и in-turn verifier.
Без HTTP stream, credit ledger, браузера — но тот же loop.

Transcript в chat tab виджета — настоящий разговор, каждый
turn, породивший код, — настоящая версия на rail. У
большинства три. **Air quality — пять**: первые три
оставляли пустое «enter a city», пятый turn — bug report:
шесть плиток pollutant с dash и timestamp *«-6375 min
ago»*. Этот build в пакете как было.

Briefs запускаются **без providers** — как у нового
аккаунта. Что выходит из loop, работает в первый день.

## Не второй catalog

Каждый пример — обычный marketplace asset, опубликован
official account через тот же RPC: те же sanitizers,
lineage graph, install path, royalty chain. Starter widget
не special-cased на server — fork продолжает real lineage,
а не private dialect примеров app.

Curation registry сверху хранит только curation: какие
published assets, порядок, экран. Writes service-role only;
reads public — signed-out visitor может смотреть listing.

## Куда попадает пакет и чего не делает

Seeding gated тремя способами. **Раз на account, не на
device** — flag replicated setting, re-read при switch.
Никогда не seed canvas, который уже использовали. Force
из **Settings → General → Add example widgets** — для
accounts до пакета или удаливших workspace.

Примеры land *рядом* с пустым workspace, не заменяя —
onboarding даёт чистый экран. Весь пакет — один undo step.

Seeded widget stamped как marketplace install — improve
и publish продолжают official lineage. **Already-seeded
users keep theirs** — их widget, возможно edited. Нет
push-update path и не должно быть.

## Verified как pack, не на глаз

Перед account весь pack в real Chrome, grade per widget:
boot errors, runaway animation, slow frames, blank renders
— плюс screenshot each. Live check derive public endpoints
из committed code — test не stale, widgets evolve.

Bar для одиннадцатого как для десяти: zero connections,
clean smoke, real message при bad day source, nothing
personal в conversation — conversation ships too.

Pack с next release; existing accounts из **Settings →
General**. Open one, read chat, change something — fastest
learn canvas.

[Запустите Nexow](https://x.nexow.ai) и начните строить.
