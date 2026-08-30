---
title: 'Десять прикладів віджетів уже в Nexow — разом із діалогом'
description: 'Новий акаунт більше не відкривається на порожньому canvas. Десять готових віджетів приходять як workspace «Приклади», кожен зі справжнім чатом, що його побудував, і справжньою історією версій — зроблені тим самим codegen loop, що й ви, без підключень.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['продукт', 'онбординг', 'widgets']
---

Найважчий екран у Nexow завжди був перший: порожнє полотно, поле prompt і
жодного доказу, що все це працює. Можна було читати docs або щось набрати і
сподіватися.

У наступному релізі новий акаунт завантажується в **workspace «Приклади»** —
десять готових віджетів на трьох екранах, усі працюють з першого завантаження,
**без підключень**. Не скріншоти, не guided tour. Справжні віджети, які можна
відкрити, редагувати, розібрати і опублікувати поверх.

## Що в пакеті

**Live world** — світовий годинник з кільцем день/ніч і смугою перекриття
робочих годин; семиденний прогноз погоди з погодинною кривою; усі землетруси
за останню годину, день чи тиждень на live map, з розміром за magnitude; і
жива якість повітря з забруднювачем, що зараз визначає індекс.

**Markets** — Binance candlesticks з live last candle і badge 24h change; FX
converter на ECB reference rates з 90-денною історією; найактивніші питання
Polymarket і те, у що вірить натовп; і будь-який індикатор World Bank для
двох країн одразу як long-run chart.

**Make and play** — дошка sticky notes, що переживає reload через durable
per-item storage, і стрічка Wikipedia on-this-day з thumbnails і date picker.

Кожне джерело без ключів: Open-Meteo, USGS, Binance public data, Frankfurter,
Polymarket, World Bank, Wikipedia. Це правило, а не випадковість — приклад, що
відкривається на «Connect OANDA», гірший за порожнє полотно.

## Їх справді побудували, а не написали

Кожен приклад почався з brief, написаного так, як людина друкує — що хоче і
чому, а не специфікація. `starter:build` проганяє ці brief через
**`runWidgetToolLoop`**: той самий модуль, що керують platform codegen route і
bring-your-own-key path у браузері, з тим самим contract, tools і in-turn
verifier. Без HTTP stream, credit ledger і браузера — але той самий loop.

Тож transcript у вкладці chat віджета — справжня розмова, і кожен хід, що дав
код, — справжня версія на rail. У більшості прикладів їх три. **Air quality має
п’ять**, бо перші три залишали порожнє «enter a city», а п’ятий хід — bug report:
шість pollutant tiles з dash і timestamp *«-6375 min ago»*. Цей build у пакеті
саме таким, яким був.

Briefs запускаються **без providers attached** — саме те, що має новий акаунт.
Усе, що виходить з цього loop, працює в перший день.

## Не другий каталог

Кожен приклад — звичайний marketplace asset, опублікований офіційним акаунтом
через той самий RPC, що й чужа робота: ті самі sanitizers, lineage graph, install
path, royalty chain. Starter widget навмисно не special-cased на сервері — fork
одного продовжує справжній lineage, а не відкриває, що приклади app живуть у
приватному діалекті.

Зверху curation registry — лише curation: які опубліковані assets у пакеті, в
якому порядку, на якому екрані. Записи service-role only; читання публічне, бо
signed-out visitor може дивитися listing page.

## Куди потрапляє пакет і чого не робить

Seeding gated трьома способами. **Раз на акаунт, не на device** — прапорець
replicated setting, перечитується при switch акаунта. Ніколи не seed canvas, який
вже використовували. І можна force з **Settings → General → Add example widgets**
— для акаунтів до пакета або після видалення workspace.

Приклади лягають *поруч* із вашим порожнім workspace, а не замість нього — onboarding
далі дає чистий екран для введення. Весь пакет — один undo step.

Кожен seeded widget позначений як marketplace install, який це насправді, тож
покращення і publish продовжують official lineage, а не rival copy. Коли
випускаємо кращу версію прикладу, **already-seeded users зберігають свою** — це
їхній віджет, можливо відредагований. Push-update path немає і не повинен бути.

## Verified як пакет, не на око

До потрапляння в акаунт увесь пакет у real Chrome з оцінкою per widget: boot
errors, runaway animation loops, slow frames, blank renders — плюс screenshot
кожного. Окремий live check виводить кожен public endpoint із committed code і
підтверджує, що він ще відповідає — тест не застаріває, поки віджети змінюються.

Планка для одинадцятого така сама: zero connections, clean smoke verdict,
справжнє повідомлення замість blank tile, коли data source має поганий день, і
нічого personal у розмові — бо розмова теж ship.

Пакет ship з наступним релізом; existing accounts можуть підтягнути з **Settings
→ General** коли завгодно. Відкрийте один, прочитайте chat, що його побудував,
змініть щось — це досі найшвидший спосіб зрозуміти, що може canvas.

[Запустіть Nexow](https://x.nexow.ai) і тим часом почніть будувати.
