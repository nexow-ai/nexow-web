---
title: 'Anatomía de un cockpit de trading: una pantalla, ocho widgets y qué alimenta cada uno'
description: 'Un escritorio de referencia desmontado mosaico a mosaico — qué es cada widget, qué conexión lo alimenta, qué cables los unen y qué sigue funcionando con la pestaña cerrada. Menos nota de versión que mapa.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['desmontaje', 'workspace', 'cripto']
category: teardown
---

La mayoría de lo que publicamos aquí es una nota de versión: algo se ha
lanzado, esto es lo que hace. Este post es de otro tipo. Nada de lo que sigue
es nuevo. Es una pantalla terminada, desmontada, para que veas cómo encajan
realmente las piezas que lanzamos por separado.

El escritorio es un cockpit de cripto — ocho widgets en una pantalla,
construidos con datos de mercado públicos, sin claves en ningún sitio. Nada
es especial en él. Ese es el punto: cada parte es algo que puedes reconstruir
describiéndolo.

## La pantalla

![Una pantalla con ocho mosaicos de widgets, cada uno marcado con un número del uno al ocho](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "El escritorio completo. Una pantalla, ocho widgets, dispuestos en el lienzo libre — los números corresponden a la lista de abajo.")

1. **Velas.** El mosaico ancla. Un símbolo, un intervalo, una última vela en
   vivo. Todo lo demás en la pantalla o lo alimenta o lo sigue.
2. **Profundidad del order book.** Bids y asks como barras apiladas, para que
   un libro fino sea visible y no inferido.
3. **Watchlist.** Un puñado de símbolos, uno seleccionado. Este mosaico es el
   volante de la pantalla — más abajo.
4. **Saldos de wallet.** Una dirección pública, solo lectura, a través de una
   conexión de wallet. Sin firma, sin claves, nada que aprobar.
5. **Funding rates.** Funding de perps en las últimas ventanas, positivo y
   negativo a cada lado de una línea cero.
6. **Heatmap.** El mismo universo que la watchlist, con tamaño y sombreado,
   para mirar de un vistazo en lugar de leer.
7. **Mercados de predicción.** Lo que la multitud está valorando, junto a lo
   que valora el order book. Lo interesante es cuando los dos discrepan.
8. **Bandeja de alertas.** Vacía la mayor parte del día. La llena un bot que
   sigue trabajando con la pestaña cerrada.

Una **pantalla** es una disposición de widgets. Un **workspace** contiene
varias. El lienzo es libre — colocas las cosas donde quieras, y los grupos
pueden apilar mosaicos en mosaicos o pestañas — pero es un lienzo con bordes,
no un plano infinito en el que perderse.

## Sigue un mosaico hasta el fondo

Cada mosaico de esa pantalla tiene las mismas cuatro capas debajo. Toma la
watchlist:

![Un recorrido de izquierda a derecha: una conexión alimenta código generado, el código renderiza un widget dentro de un límite de sandbox discontinuo, y un cable lleva un valor hacia un gráfico](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Un mosaico, de arriba abajo: una conexión, el código generado, el widget en ejecución y el cable que saca un valor de él.")

1. **Una conexión.** Uno de los 90 conectores en vivo — aquí, datos de mercado
   públicos, que no necesitan credenciales. Las conexiones son inventario, no
   configuración: adjuntas una a un widget y el widget se reconstruye sabiendo
   cómo usarla.
2. **Código generado.** Describiste una watchlist; un build escribió una. Tiene
   historial de versiones, y puedes leer cada turno de la conversación que la
   produjo.
3. **El widget en ejecución.** Se ejecuta en sandbox. Un widget que se comporta
   mal arruina su propio mosaico y nada más en la pantalla — que es la única
   razón por la que tiene sentido ejecutar software que no has leído.
4. **Un cable de salida.** El mosaico emite cuando haces clic en una fila. Por
   sí solo no va a ningún sitio. Lo que lo convierte en cockpit y no en ocho
   mosaicos separados es la siguiente parte.

## Lo que lo mantiene unido es el cableado, no el código

![Un grafo de los mismos ocho widgets numerados, con un cable bidireccional entre la watchlist y el gráfico, cables unidireccionales hacia los mosaicos de order book y funding, y una conexión, un bot y un agente adjuntos desde la izquierda](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Los mismos ocho mosaicos como grafo. Las líneas sólidas son cables entre widgets; las discontinuas, adjuntos del resto de tu inventario.")

Detrás de la sola palabra *cable* hay dos mecanismos, y la distinción se ve en
el diagrama como sólido frente a discontinuo:

- **Widget a widget** es un **glue link** — código generado real, con su propio
  historial de versiones, ejecutándose en su propio runtime oculto, mapeando lo
  que emite un mosaico a lo que espera el otro. El arco entre la watchlist y el
  gráfico es bidireccional: cambia el símbolo en cualquiera de los dos y ambos
  siguen. Los cables bidireccionales harían eco para siempre sin ayuda, así que
  un valor entregado se recuerda y el rebote idéntico se descarta una vez.
- **Widget a conexión, bot o agente** es un **attachment** — un registro de lo
  que un rebuild enseñó al *propio* código del widget a hacer. Esas son las
  líneas discontinuas. Escalonado, no automático, así que explorar cinco
  fuentes seguidas cuesta un rebuild en lugar de cinco.

En esta pantalla el cableado es deliberadamente fino: la watchlist impulsa el
gráfico en ambos sentidos, y el order book y el mosaico de funding en un solo
sentido. Tres cables. Añadir un cuarto para el heatmap tentaba y estaba mal —
un mosaico que cambia cuando no lo mirabas es un mosaico en el que dejas de
confiar.

El editor de cables tiene una barra **Probar** exactamente para esto. Elige un
tema y un valor, elige qué extremo finge emitir, y envía un evento real por el
runtime real. El veredicto distingue *este cable no está en ejecución* de *se
ejecutó pero no reenvió nada para ese tema* de *reenvió, pero ese widget no
está en pantalla para recibirlo*. Antes de que existiera, un cable roto y un
cable apuntando a otra pantalla parecían idénticos: no pasaba nada.

## Qué sigue funcionando con la pestaña cerrada

El mosaico 8 es el único que no es realmente un widget en el sentido habitual.
Es una bandeja, y lo que la llena es un **bot**.

Los bots son deliberadamente poco glamorosos — un catálogo fijo de procesadores
(umbral, cambio, cruce, RSI, pico de volumen, digest, nueva operación,
actividad de wallet, saldo de wallet) sobre exactamente tres tipos de cosa:
velas de mercado, cuenta de broker, dirección pública de wallet. No hay modelo
en el bucle, que es precisamente por qué puedes dejar uno funcionando un mes.
Cuando uno dispara, se reparte a cuatro sitios a la vez: la bandeja de alertas,
el bus de widgets (para que el mosaico 8 se actualice en vivo), un webhook y
una base de datos conectada.

Los **agentes** son la otra mitad, y la forma opuesta: de propósito general,
con concesiones por herramienta para búsqueda web, redes sociales, datos de
mercado, bases de datos, memoria y más, con un trigger manual o de 15 minutos
a diario. Un agente es lo que usas cuando la pregunta es *«resume lo que pasó
esta noche»* y no *«avísame cuando esto cruce aquello»*. Ambos alimentan el
mosaico 8; solo uno es barato de dejar desatendido.

## Lo que esta pantalla deliberadamente no hace

No opera. Nada aquí coloca una orden — eso es una concesión aparte, en un
conector aparte, y ponerlo en la misma pantalla que un heatmap al que echas un
vistazo es cómo ocurren los accidentes.

No guarda una clave. Cada fuente es pública: velas, profundidad, funding,
mercados de predicción, una dirección de solo lectura. Un escritorio que puedes
entregar a otra persona sin revocar nada después vale más que un escritorio con
dos mosaicos extra.

Y no está terminado, porque eso no es un estado al que llega una pantalla. La
versión honesta de este desmontaje es que el layout de arriba es el cuarto; los
tres primeros tenían más mosaicos y decían menos.

[Lanza Nexow](https://x.nexow.ai) y describe el primer mosaico. Los otros siete
son más fáciles.
