---
title: 'Widgets que comprueban su propia fontanería: probe_url, un agente verificador y una reparación gratis'
description: 'La mayor fuente de widgets muertos era código escrito contra una API imaginada. Ahora el builder obtiene el endpoint mientras escribe, un verificador vuelve a sondear lo que omitió, y un crash en los primeros 45 segundos compra una corrección automática.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['producto', 'ia', 'cómo-funciona']
---

La forma más común en que fallaba un widget generado no era un bug en el código
generado. Era un endpoint que nunca existió.

El modelo tomó una URL de memoria — o de una fila del directorio cuyo enlace es
una *página de documentación*, no un endpoint — adivinó la forma de la
respuesta, escribió código de parsing cuidadoso contra esa suposición y lo
envió. Lo que obtuviste fue un spinner eterno o un gráfico vacío, sin nada en
pantalla que dijera por qué.

Esta versión cierra ese bucle tres veces: mientras el modelo escribe, justo
después de escribir, y una vez más si sigue crasheando delante de ti.

## Mientras escribe: `probe_url`

El builder ahora tiene una herramienta que **hace GET a un endpoint público sin
clave ahora mismo**, por el mismo proxy de servidor que usa `ctx.data.http()` en
runtime, y devuelve el estado HTTP real y el cuerpo de respuesta real.

Esa identidad es todo el punto. Un probe que tiene éxito *es* una llamada en
runtime que tiene éxito. Un probe que falla es un widget que habría salido roto —
y falla ahora, mientras aún queda un turno para arreglarlo, no en tu lienzo.

Está al pie de una escalera que se le dice al builder que recorra en lugar de
razonar desde memoria: docs de referencia del venue primero, luego un
**directorio de 691 APIs públicas sin clave en 47 categorías**, buscable por
tema en el nombre *y* la descripción de cada entrada — porque peticiones reales
(«mareas», «calidad del aire») rara vez encajan en una categoría que alguien
adivinaría. Ese directorio está siempre disponible para el builder ahora, sea
lo que sea el alcance, porque es el fallback universal sin clave. Sus enlaces
son documentación, así que el último paso siempre es el mismo: derivar el
endpoint y sondearlo.

«¿Hay datos para X?» es una pregunta respondida mirando, no razonando sobre qué
datasets probablemente existen. Llegar al final de la escalera y decir *no*
después de comprobar de verdad es un buen resultado. Afirmarlo desde memoria no
lo es, y estaba equivocado mucho más a menudo de lo que parecía.

## Justo después de escribir: el verificador

Pedir al modelo que verifique su propio trabajo es una petición, no una garantía.
Así que en el momento en que aterriza el código del widget, ocurren dos cosas
que no dependen de que el modelo esté de acuerdo.

Primero, el resultado de la herramienta **nombra los endpoints que no sondeó
este turno** y le dice que vaya a comprobarlos mientras queden rondas.

Segundo — y esta es la parte que no depende de cooperación — un verificador corre
**en paralelo con el modelo escribiendo su resumen**, y hace el trabajo él
mismo:

- **Lint del módulo** por las clases de fallo silenciosas por construcción. Un
  export `render` faltante. Código que no parsea. Un `fetch` o `WebSocket` crudo
  a un host de terceros, que el sandbox bloquea — el fallo silencioso más
  dañino en widgets generados, porque nada aparece en la consola. Una URL de
  imagen o vídeo externa asignada directamente a un `src`. Una URL de tile
  hardcodeada entregada a una librería de mapas, que monta y panea perfectamente
  mientras cada petición de tile se rechaza en silencio.
- **Sondear cada endpoint que el modelo omitió** (hasta cinco por módulo), y leer
  el veredicto como lo haría el modelo: inalcanzable, o un 4xx que dice que la
  URL o sus parámetros están mal.

Los problemas reales compran **una ronda de reparación automática in-turn**, con
la salida del probe adjunta como evidencia e instrucción de arreglar solo lo
nombrado. Esa ronda ocurre mientras el contexto completo del build sigue caliente
— mucho más barato que enviar roto y gastar un turno entero después. Si el
modelo reescribe el módulo a mitad de vuelo, la verificación ya en curso queda
supersedida y su veredicto descartado. Y un verificador que falla internamente
verifica limpio: puede retrasar un build, nunca romper uno.

## Si sigue crasheando: una reparación, acotada

El contexto de autorreparación ya alimentaba errores de runtime al *siguiente*
turno de chat — pero solo cuando enviabas uno. Un widget que crasheaba segundos
después de su build seguía roto hasta que lo notabas, reabrías el compositor y
escribías «está roto».

Ahora el host de runtime gasta **un turno de corrección automática** cuando un
build recién hecho crashea. Un turno automático es la app gastando tus créditos
o tu clave, así que los límites son deliberadamente estrictos:

- solo la versión que un build de IA *acaba* de producir — un crash en una versión
  antigua que restauraste, o en código que editaste a mano, nunca califica;
- solo dentro de **45 segundos** de ese build, porque un crash una hora después
  es información nueva para ti, no un defecto obvio del build;
- **una vez por versión**, y una versión producida *por* un turno de
  auto-reparación es ella misma inelegible. Un build puede disparar como máximo
  un seguimiento automático — nunca una cadena del modelo pagándose a sí mismo
  para seguir fallando.

El turno de reparación está redactado como la app reportando un defecto, y lleva
la misma instrucción que todo lo anterior: si el fallo implica un endpoint de
datos, sondearlo antes de reescribir. Arréglalo, conserva lo que funciona, no
amplíes el alcance del widget.

En el servidor, un build en segundo plano rescatado ahora espera cuando otro
turno del mismo widget ya está en vivo, en lugar de competir hacia una versión
duplicada.

## El mismo bucle, en todos los modos

Todo esto vive en un módulo compartido, así que builds de plataforma, builds
bring-your-own-key en el navegador y el barrido de builds del servidor tienen
comportamiento **idéntico** — mismas herramientas, mismo formato de probe,
mismo verificador, mismo presupuesto de reparación. Los modos no pueden
divergir en qué herramientas existen o con qué rigor se comprueba un widget,
porque solo hay una implementación de la respuesta. También es el bucle que
produjo [los diez widgets de ejemplo](/blog/starter-widgets-examples-workspace)
que llegan con la próxima versión: se construyeron exactamente con esto, con
exactamente estas comprobaciones.

Nada de esto hace correcto a un modelo. Hace que estar equivocado sea
sobrevivible, y normalmente invisible: el endpoint se comprueba antes de que el
código dependa de él, la comprobación corre haga o no el modelo ganas de
correrla, y el primer crash recibe un intento honesto de arreglo antes de
llegar a ti.

[Lanza Nexow](https://x.nexow.ai) y pide algo oscuro — mareas, calidad del aire,
festivos públicos. Mira cómo el rail de actividad sondea el endpoint antes de
escribir una línea de código de parsing.
