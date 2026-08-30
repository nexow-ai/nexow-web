---
title: 'Diez widgets de ejemplo ya vienen con Nexow — conversación incluida'
description: 'Una cuenta nueva ya no abre en un lienzo vacío. Diez widgets terminados llegan como workspace de Ejemplos, cada uno con el chat real que lo construyó y su historial de versiones real — hechos con el mismo bucle de codegen que usas tú, sin nada conectado.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['producto', 'onboarding', 'widgets']
---

La pantalla más difícil en Nexow siempre fue la primera: un lienzo en blanco, un
cuadro de prompt y ninguna prueba de que funcione. Podías leer la documentación,
o escribir algo y esperar.

Con la próxima versión, una cuenta nueva arranca en un **workspace de
Ejemplos** — diez widgets terminados en tres pantallas, todos funcionando en la
primera carga, con **nada conectado**. No capturas, no un tour guiado. Widgets
reales que puedes abrir, editar, desmontar y publicar encima.

## Qué trae el pack

**Mundo en vivo** — un reloj mundial con anillo día/noche y barra de solapamiento
de horario laboral; pronóstico meteorológico de siete días con curva horaria;
todos los terremotos de la última hora, día o semana en un mapa en vivo,
dimensionados por magnitud; y calidad del aire en vivo con el contaminante que
impulsa el índice.

**Mercados** — velas de Binance con última vela en vivo y badge de cambio 24h;
un conversor FX con tipos de referencia del BCE y historial de 90 días; las
preguntas más activas de Polymarket y lo que cree la multitud; y cualquier
indicador del Banco Mundial, para dos países a la vez, como gráfico de largo
plazo.

**Crear y jugar** — un tablero de notas adhesivas que sobrevive a recargas con
almacenamiento durable por ítem, y el feed de Wikipedia «en este día» con
miniaturas y selector de fecha.

Toda fuente es sin clave: Open-Meteo, USGS, datos públicos de Binance,
Frankfurter, Polymarket, Banco Mundial, Wikipedia. Es una regla, no una
coincidencia — un ejemplo que abre en «Conectar OANDA» es peor que un lienzo
vacío.

## Se construyeron de verdad, no se escribieron

Cada ejemplo empezó como un brief escrito como lo teclea una persona — lo que
quiere y por qué, no una especificación. `starter:build` pasa esos briefs por
**`runWidgetToolLoop`**: el mismo módulo que impulsan la ruta de codegen de la
plataforma y la ruta bring-your-own-key del navegador, con el mismo contrato,
las mismas herramientas y el mismo verificador in-turn. Sin stream HTTP, sin
ledger de créditos, sin navegador — pero el mismo bucle.

Así que la transcripción que encuentras en la pestaña de chat de un widget es la
conversación genuina, y cada turno que produjo código es una versión genuina en
el rail. La mayoría llevan tres. **Calidad del aire lleva cinco**, porque las
tres primeras lo dejaban abriendo en un cuadro vacío «introduce una ciudad», y
el quinto turno es un informe de bug: seis mosaicos de contaminantes mostrando
un guion, y una marca de tiempo que decía *«hace -6375 min»*. Ese build está en
el pack tal como ocurrió.

Crucialmente, los briefs se ejecutan **sin proveedores adjuntos** — exactamente
lo que tiene una cuenta nueva. Lo que salga de ese bucle funciona el primer día
de alguien.

## No es un segundo catálogo

Cada ejemplo es un activo ordinario del marketplace, publicado por la cuenta
oficial por el mismo RPC que el trabajo de todos los demás: mismos sanitizers,
mismo grafo de linaje, misma ruta de instalación, misma cadena de regalías. Nada
de un widget starter está especial en el servidor, deliberadamente — haz fork
de uno y continúas un linaje real en lugar de descubrir que los ejemplos de la
app viven en un dialecto privado.

Un registro de curación encima solo guarda la curación: qué activos publicados
forman el pack, en qué orden, en qué pantalla. Las escrituras son solo
service-role; las lecturas son públicas, porque un visitante sin sesión puede
estar mirando una página de listado de uno.

## Dónde aterriza el pack y qué no hará

La siembra está acotada de tres formas. Se ejecuta **una vez por cuenta, no
una vez por dispositivo** — la bandera es un ajuste replicado, releído al
cambiar de cuenta. Nunca siembra un lienzo que alguien ya haya usado. Y puede
forzarse desde **Ajustes → General → Añadir widgets de ejemplo**, para cuentas
anteriores al pack o para quien borró el workspace y lo quiere de vuelta.

Los ejemplos aterrizan *al lado* de tu propio workspace vacío en lugar de
reemplazarlo, así que el onboarding sigue entregándote una pantalla limpia para
escribir. Todo el pack es un paso de deshacer.

Cada widget sembrado lleva el sello de la instalación del marketplace que
realmente es, así que mejorar uno y publicarlo continúa el linaje oficial en
lugar de iniciar una copia rival. Y cuando lancemos una versión mejor de un
ejemplo, **los usuarios ya sembrados conservan la suya** — es su widget ahora,
posiblemente editado. No hay ruta de push-update, y no debería haberla.

## Verificado como pack, no a ojo

Antes de que llegue a una cuenta, todo el pack corre en Chrome real y se califica
por widget: errores de arranque, bucles de animación descontrolados, frames
lentos, renders en blanco — más una captura cada uno. Una comprobación en vivo
aparte deriva cada endpoint público del código comprometido y confirma que
sigue respondiendo, para que la prueba no quede obsoleta mientras los widgets
evolucionan.

El listón para un undécimo es el mismo que para estos diez: cero conexiones, un
veredicto de smoke limpio, un mensaje real en lugar de un mosaico en blanco
cuando su fuente de datos tiene un mal día, y nada personal en ninguna parte de
la conversación — porque la conversación también se envía.

El pack llega con la próxima versión, y las cuentas existentes pueden traerlo
desde **Ajustes → General** cuando quieran. Abre uno, lee el chat que lo
construyó, y cambia algo — sigue siendo la forma más rápida de aprender qué
puede hacer el lienzo.

[Lanza Nexow](https://x.nexow.ai) y empieza a construir mientras tanto.
