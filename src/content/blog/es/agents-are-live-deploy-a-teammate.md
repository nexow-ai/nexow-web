---
title: 'Los agentes están en vivo: dale a tu workspace un compañero que corre en la nube'
description: 'El builder del harness era la promesa; el botón de deploy es la recompensa. Construye un agente con modelo, memoria, skills, herramientas y triggers, despliégalo a la nube y sigue cada ejecución en un timeline en vivo.'
pubDate: 2026-07-27
heroImage: ../../../assets/blog/agents-live.svg
tags: ['producto', 'agentes', 'automatización']
---

Hace unas semanas dijimos que los agentes venían: IA con un harness completo que
vigila, razona y actúa por su cuenta. Hoy ya están aquí. Puedes construir un
agente, darle herramientas, **desplegarlo a la nube** y verlo trabajar — según
un horario, con la pestaña cerrada.

Esto es lo que salió.

## El harness, ahora con botón de deploy

Un agente en Nexow es más que un prompt. Lo ensamblas a partir de un **harness**
— modelo, memoria, skills, herramientas, conocimiento y triggers — en un builder
visual. Esa parte quizá ya la habías visto. Lo nuevo es el último paso:
**Deploy**.

Desplegar toma una instantánea de tu agente y se la entrega al runtime en la
nube de Nexow. A partir de ahí corre con su propio heartbeat — cada 15 minutos,
cada hora, a diario, la cadencia que definas — sin tu navegador abierto. También
puedes lanzarlo a mano con **Run now** cuando quieras una pasada fuera de
horario.

## Las herramientas se conceden, no se asumen

Un agente solo toca lo que tú le dejas tocar. Cada herramienta de su harness
está **detrás de un permiso**: tú decides si puede leer tus conexiones, publicar
notificaciones, escribir en widgets, etcétera. Sin permiso no hay acceso — el
agente literalmente no ve la herramienta.

Eso hace seguro darle a un agente un trabajo de verdad. Un bot te dice que BTC
cayó un 5%; a un agente puedes pedirle que *revise el order book y el funding
rate cuando pase, y redacte lo que encontró* — usando exactamente el acceso que
tú aprobaste.

## Memoria entre ejecuciones

Los agentes conservan **memoria** entre ejecuciones. Lo que tu agente aprendió
en la pasada del lunes sigue ahí el martes — así puede seguir una tesis en el
tiempo, notar cambios en vez de volver a describir instantáneas y saltarse
trabajo que ya hizo.

## Cada ejecución, en el registro

Los agentes desplegados mantienen un **timeline de ejecuciones**: cuándo empezó
cada una, si terminó limpia, falló o se saltó, y qué pasó dentro — transmitido
en vivo mientras la ejecución avanza. Abre cualquier ejecución para leer la
conversación completa: qué vio el agente, qué herramientas llamó y qué concluyó.
Si un modelo upstream tiene un tropiezo, eso también queda en el historial,
etiquetado como lo que es, no como un misterio.

El control es tuyo en todo momento: **pausa** un agente, **reanúdalo**, vuelve a
desplegar un harness actualizado o **retíralo** por completo. Tu plan define
cuántos agentes puedes mantener desplegados a la vez.

## Sigue siendo privado por defecto

El principio no se ha movido: la nube es algo por lo que optas. Construir un
harness no cuesta nada y no toca ningún servidor; desplegar es una elección
explícita por agente, y el modo privado pausa las ejecuciones en la nube en vez
de continuarlas en silencio.

Los bots vigilan. Los agentes actúan. [Abre Nexow](https://x.nexow.ai), entra al
panel de Agentes y pon a trabajar a tu primer compañero de equipo.
