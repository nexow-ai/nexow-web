---
title: 'Bots v2: triggers de RSI y volumen, entrega a webhooks y bases de datos, y un builder más ordenado'
description: 'Los bots en la nube aprendieron trucos nuevos — condiciones de RSI y picos de volumen, vigilantes de trades, señales que hacen POST a tus webhooks o se añaden a tu base de datos, y un builder dividido en Mis bots y Crear.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['producto', 'automatización', 'bots']
---

Cuando los bots se lanzaron, sabían vigilar umbrales, % de cambio, cruces y
resúmenes, y disparar señales a tu lienzo. Ese núcleo no ha cambiado. Alrededor,
casi todo ganó profundidad: más condiciones sobre las que dispararse, más
lugares donde aterrizan las señales y un builder que no se interpone.

## Condiciones nuevas para dispararse

El catálogo de procesadores creció. Junto a los umbrales, el % de cambio y los
cruces de medias móviles, los bots ahora evalúan:

- **RSI** — se dispara cuando el momentum entra en territorio de sobrecompra o
  sobreventa
- **Picos de volumen** — captura actividad inusual a la que el precio aún no ha
  reaccionado
- **Trades nuevos** — se dispara con ejecuciones recientes de una cuenta
  conectada
- **Actividad y balance de wallet** — vigila direcciones on-chain, contado en
  nuestro [post de wallets](/es/blog/wallets-on-the-canvas)

Como siempre: describe la regla en una frase y deja que la IA redacte el bot, o
móntalo visualmente y ajusta cada parámetro tú mismo.

## Las señales van adonde trabajas

La señal de un bot llegaba a tu bandeja y a tus widgets. Dos destinos nuevos
cambian para qué sirven los bots:

- **Webhooks** — haz POST de cada señal a la URL que indiques. Eso es Discord,
  Slack o Telegram vía sus URLs de webhook, o tu propio servidor. Tu bot se
  convierte en un productor que cualquier sistema puede consumir.
- **Tu base de datos** — añade cada señal como una fila a una de tus bases de
  datos conectadas. Deja un bot corriendo un mes y tienes un registro
  consultable de cada disparo, listo para que un widget lo grafique.

La entrega es un conjunto, no una elección — un mismo bot puede avisarte,
actualizar tus widgets, hacer ping a Discord y escribir la fila, todo desde el
mismo disparo.

## Mis bots y Crear, por fin separados

El panel de bots ahora separa **Mis bots** — tu flota en marcha, con el estado
de un vistazo — de **Crear**, donde toman forma los bots nuevos. El formulario
también se aligeró: las secciones opcionales se quedan plegadas hasta que las
necesitas, así que una alerta de umbral simple toma segundos mientras toda la
profundidad queda a un clic.

## Los borradores empiezan seguros

Un detalle deliberado: cuando la IA te redacta un bot, su destino de webhook
empieza **vacío**. Una automatización generada nunca sale con un destino que no
escribiste tú mismo — tú decides adónde van las señales, explícitamente, cada
vez.

[Abre Nexow](https://x.nexow.ai), entra a Bots y dale a tu próxima alerta un
lugar mejor donde aterrizar que una bandeja de entrada.
