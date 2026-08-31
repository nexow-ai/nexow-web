---
title: 'Виджеты, проверяющие свою «водопроводку»: probe_url, verifier agent и одно бесплатное исправление'
description: 'Главный источник «мёртвых» виджетов — код, написанный под выдуманный API. Теперь builder запрашивает endpoint при написании, verifier повторно проверяет пропущенное, а crash в первые 45 секунд даёт одно автоматическое исправление.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['продукт', 'ии', 'как-это-работает']
---
Самый частый способ провала сгенерированного виджета — не
ошибка в сгенерированном коде. Это endpoint, которого
никогда не существовало.

Модель брала URL из памяти — или из строки directory, чья
ссылка ведёт на *страницу документации*, а не endpoint —
угадывала форму ответа, писала аккуратный код разбора под
эту догадку и отправляла. На выходе — вечный spinner или
пустой график, без объяснения на экране.

Этот релиз замыкает цикл трижды: пока модель пишет, сразу
после написания и ещё раз, если виджет всё ещё падает
перед вами.

## Пока пишет: `probe_url`

У builder теперь есть инструмент, который **делает GET
публичного endpoint без ключа прямо сейчас** через тот же
server proxy, что использует `ctx.data.http()` в runtime, и
возвращает настоящий HTTP status и тело ответа.

Вся суть в этой идентичности. Успешный probe *есть*
успешный runtime call. Неудачный probe — виджет, который
ушёл бы сломанным — и он падает сейчас, пока остался turn
для исправления, а не на вашем canvas.

Он внизу лестницы, которую builder должен пройти, а не
рассуждать из памяти: reference docs площадки сначала,
затем **directory из 691 публичных API без ключа в 47
категориях**, с поиском по теме в имени *и* описании
каждой записи — потому что реальные запросы («время
прилива», «качество воздуха») редко попадают в угадываемую
категорию. Этот directory всегда доступен builder, какой
бы ни был scope, — universal keyless fallback. Его ссылки —
документация, последний шаг всегда один: вывести endpoint,
затем probe.

«Есть ли данные для X?» — вопрос с ответом через проверку,
не через рассуждение о том, какие datasets вероятно
существуют. Дойти до конца лестницы и сказать *нет* после
реальной проверки — нормальный исход. Утверждать из памяти
— нет, и это было неверно гораздо чаще, чем казалось.

## Сразу после написания: verifier

Просить модель проверить свою работу — запрос, не гарантия.
В момент, когда код виджета появляется, происходят две
вещи, не зависящие от согласия модели.

Сначала результат инструмента **называет endpoints, которые
не были probed в этом turn**, и говорит проверить их, пока
остались rounds.

Затем — и это часть без cooperation — verifier работает
**параллельно с моделью, пишущей summary**, и делает работу
сам:

- **Lint модуля** на классы тихих сбоев по конструкции.
  Отсутствующий export `render`. Код, который не parse.
  Сырой `fetch` или `WebSocket` к стороннему host, который
  sandbox блокирует — самый разрушительный тихий сбой в
  generated widgets, потому что в console ничего не видно.
  Внешний image/video URL, присвоенный прямо `src`.
  Hard-coded tile URL, переданный map library, которая
  mount и pan идеально, пока каждый tile request тихо
  отклоняется.
- **Probe каждого endpoint, который модель пропустила**
  (до пяти на module), и чтение verdict как у модели:
  unreachable или 4xx, говорящий, что URL или parameters
  неверны.

Настоящие проблемы покупают **один automatic in-turn repair
round** с probe output как evidence и инструкцией исправить
только названное. Этот round, пока полный context build
ещё hot — гораздо дешевле, чем ship broken и тратить целый
turn позже. Если модель переписывает module mid-flight,
уже идущая verification supersede, verdict discard. Verifier,
упавший internally, verify clean: может задержать build,
никогда не сломать.

## Если всё ещё crash: одно исправление, жёстко ограничено

Self-repair context уже подавал runtime errors в *следующий*
chat turn — но только когда вы отправляли. Виджет, упавший
через секунды после build, оставался broken, пока вы не
заметите, не откроете composer и не напишете «сломано».

Теперь runtime host тратит **один automatic fix turn**, когда
fresh build crash. Automatic turn — app тратит ваши credits
или key, bounds намеренно tight:

- только version, которую AI build *только что* produced —
  crash в old version, которую restore, или в hand-edited
  code, never qualify;
- только в **45 секунд** после build — crash через час
  new information для вас, не obvious build defect;
- **once per version**, version, produced *by* auto-repair
  turn, сама ineligible. Один build trigger максимум один
  automatic follow-up — never chain модели, paying itself
  to keep failing.

Repair turn сформулирован как app, reporting defect, с той
же инструкцией: если failure involves data endpoint, probe
before rewrite. Fix, keep what works, don't grow widget scope.

На server rescued background build теперь waits, когда
another turn того же widget уже live, вместо race в
duplicate version.

## Тот же loop, все modes

Всё это в shared module — platform builds, bring-your-own-key
в browser и server-side build sweep получают **identical**
behaviour: same tools, probe formatting, verifier, repair
budget. Modes не могут diverge в tools или strictness check,
потому что one implementation ответа. Это также loop,
который produced [десять example widgets](/blog/starter-widgets-examples-workspace)
с next release: built exactly this, exactly these checks.

Ничто из этого не делает model correct. Делает being wrong
survivable и usually invisible: endpoint checked before code
depends, check runs whether model felt like it or not, first
crash gets one honest fix attempt before reaching you.

[Запустите Nexow](https://x.nexow.ai) и попросите что-то
obscure — tide times, air quality, public holidays. Смотрите,
как activity rail probes endpoint before writing parsing line.
