---
title: 'Construcción de widgets en la que puedes confiar: builds duraderos, versiones honestas, lint en el chat'
description: 'El composer ganó memoria y conciencia — los builds sobreviven a las desconexiones y se reintentan limpio, cada versión registra de dónde vino, y los problemas de lint y de runtime aterrizan en el chat, no en una consola.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['producto', 'widgets', 'ia']
---

De prompt a widget siempre fue la parte vistosa. Este lanzamiento va de la mitad
sin glamour de esa promesa: qué pasa cuando la red se cae a mitad de build,
cuando una generación falla, cuando quieres saber qué versión de un widget estás
mirando en realidad. La respuesta, ahora: nada se pierde y nada se reescribe a
tus espaldas.

## Builds que te sobreviven

Los builds de widgets ahora son **trabajos duraderos**. Cierra el portátil a
mitad de generación, pierde el Wi-Fi, refresca en el peor momento — el build
conserva su reserva en el servidor y termina sin ti. Si un turno falla, un
**Reintentar** está justo encima, y funciona incluso después de que una
desconexión dejara las cosas en un estado raro. Los builds obsoletos ya no
pueden atascar el composer.

Tus palabras son igual de duraderas: un prompt sin enviar en el composer
persiste con el widget, así que un refresh a destiempo no se come el párrafo que
estabas a punto de mandar.

## Versiones con procedencia

Cada versión de un widget ahora registra **de dónde vino** — un prompt, una
corrección, un guardado manual — y las ediciones crean versiones nuevas en vez
de reescribir las viejas en el sitio. La primera versión de cada widget, su
**génesis**, nunca se poda: siempre puedes volver a lo que produjo el primer
prompt. Y cuando un chip de versión en el chat apunta a un historial que fue
podado, el chat lo dice en vez de fingir.

## El build te dice qué le pasa

El código generado se revisa, y los hallazgos van adonde ya estás mirando: **los
problemas de lint y de runtime aparecen en la burbuja de chat del build**, como
parte de la conversación. Arréglalos respondiendo — los problemas son contexto
que el siguiente turno ya conoce.

El sandbox siguió estricto, y se volvió más estricto: los widgets no pueden
hacer llamadas de red directas — los datos llegan por conectores — y los assets
que pueden cargar están fijados a orígenes conocidos.

## Conversaciones más ricas

El composer sumó **adjuntos** — suelta una imagen en el chat para enseñarle a la
IA qué quieres decir — y **conexiones fijadas**, para que la conversación de un
widget siempre sepa contra qué fuentes de datos está construyendo. Si construyes
con tu propia clave de API, los demás dispositivos de tu cuenta ven el build en
progreso en vez de un misterioso estado ocupado.

Nada de esto cambia cómo se siente construir: describe, mira, refina. Cambia
cuánto puedes confiar en lo que sale.

[Abre Nexow](https://x.nexow.ai) y corta tu conexión a mitad de build —
terminaremos sin ti.
