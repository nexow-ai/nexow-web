---
title: 'Del prompt al widget en vivo: cómo Nexow convierte una frase en un dashboard de trading'
description: 'Una mirada por dentro a cómo Nexow genera un widget de mercado funcionando y conectado a datos a partir de un prompt en lenguaje natural — generación de código, aislamiento y conectores en vivo explicados.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['producto', 'ia', 'cómo-funciona']
---

Armar un dashboard de trading siempre ha significado el mismo trabajo pesado:
encontrar una API, leer la documentación, pelear con un websocket, normalizar el
payload, elegir una librería de gráficos, luchar con el layout y repetir para
cada instrumento que te importa. Nexow colapsa todo ese ciclo en una frase.

Esto es lo que ocurre de verdad entre escribir un prompt y ver aparecer un widget
en vivo en tu lienzo.

## 1. Describes lo que quieres ver

Un prompt es solo lenguaje natural:

> Muestra un gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50, y un panel
> de RSI debajo.

No hay esquema que aprender ni archivo de configuración. Describes el resultado —
el instrumento, el venue, los indicadores, el layout — igual que se lo
describirías a un colega.

## 2. Nexow genera el código del widget

Nexow envía tu prompt a los modelos Claude de Anthropic mediante el SDK de
Anthropic, junto con el contexto que necesita: qué conectores hay disponibles,
la forma de los datos que devuelven y el contrato de runtime que un widget debe
cumplir. Claude escribe el código real del widget — la lógica de fetch, las
transformaciones y el renderizado.

Como el modelo escribe código real en lugar de rellenar una plantilla fija, lo
que puedes construir es abierto: gráficos de profundidad del order book, mapas de
calor de funding, matrices de correlación, señales a medida, tablas simples. Si
lo puedes describir, Nexow normalmente lo puede construir.

## 3. El widget corre aislado

El código generado es potente, así que corre tras una frontera estricta. Cada
widget se ejecuta dentro de un iframe aislado: puede renderizar su interfaz y
obtener los datos que necesita, pero no puede meterse en tu espacio de trabajo,
leer otros widgets ni tocar nada que no se le haya dado. Potencia sin riesgo.

## 4. Los datos en vivo llegan por los conectores

Un widget solo es útil con datos reales. Nexow incluye más de 20 conectores
conectables que abarcan FX, cripto, acciones, futuros, opciones y mercados de
predicción — OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon,
Kalshi, Polymarket y más. El widget se suscribe al venue que nombraste, y los
precios, order books y datos de referencia entran en streaming.

Donde la política de CORS del venue lo permite, esas llamadas corren
**directamente desde tu navegador** y nunca pasan por nuestros servidores — lo que
mantiene baja la latencia y tus credenciales en tu máquina.

## 5. Lo refinas en lenguaje natural

La primera generación rara vez es la última. Todo sigue siendo editable
conversando: *«añade una EMA 200»*, *«pasa a escala logarítmica»*, *«colorea las
velas por funding rate»*. Nexow reescribe el widget en su sitio, versiona el
cambio y guarda un log que puedes inspeccionar o revertir.

## Por qué importa

El camino tradicional de la idea al gráfico se mide en horas. Con Nexow se mide en
segundos, y lo que obtienes es un widget real e inspeccionable — no una caja
negra. El dashboard se arma solo y tú mantienes el control del código, los datos
y las claves.

¿Listo para probarlo? [Abre la app](https://x.nexow.ai) y describe tu primer
widget.
