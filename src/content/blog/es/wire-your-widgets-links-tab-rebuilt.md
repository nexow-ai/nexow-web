---
title: 'Cablea tus widgets: una superficie, una frase y un botón Probar'
description: 'Todo lo que se puede cablear a un widget vive ahora detrás de un cuadro de búsqueda — otros widgets, conexiones, bots y agentes. Describe el cableado en lenguaje llano y dispara un evento real para descubrir qué extremo está roto.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['producto', 'widgets', 'automatización']
---

Un **link** transporta eventos entre dos widgets: cambia el símbolo en uno y el
otro reacciona. Activa Bidireccional y se mantienen sincronizados en ambos
sentidos. Es la diferencia entre una pantalla llena de mosaicos separados y una
que se comporta como un solo instrumento.

La idea era buena. Encontrarla no lo era, y tampoco saber si funcionaba. Ambas
cosas se arreglan en esta versión.

## Una superficie, y «Todos» significa todos de verdad

El selector solía dividirse en dos subpestañas — *Widgets* y *Fuentes* — lo que
significaba que la mitad de tu inventario estaba siempre oculta tras un toggle
que tenías que saber pulsar. Un widget solo en su pantalla mostraba una cuadrícula
vacía, sin pista de que existían bots, agentes y conexiones.

Ahora hay un cuadro de búsqueda y una fila de filtros por tipo sobre todo: otros
widgets en esta pantalla, en este workspace o en otro sitio; tus conexiones de
datos; tus bots; tus agentes. **Todos** muestra todo.

El orden también cambió. **Mi cableado** está ahora *encima* de la superficie de
exploración. Antes estaba bajo una cuadrícula del selector que puede llegar a
decenas de mosaicos, así que la lista a la que vuelves para gestionar —
desactivar esto, quitar aquello — era lo que tenías que desplazar pasando todo
lo demás, mientras el selector que solo necesitas al añadir algo nuevo te
saludaba cada vez.

Pequeña corrección de honestidad en la misma zona: el estado vacío ahora espera
a que respondan las stores de bots y agentes antes de afirmar que no hay nada
que cablear, mostrando **Buscando…** mientras tanto, y cada chip de filtro lleva
su propio contador. Una cuadrícula vacía que significa «aún cargando» es una
mentira que la interfaz solía contar con frecuencia.

## Dos mecanismos, una pregunta

Detrás de ese único selector hay dos cosas genuinamente distintas:

- **Otro widget** → un **glue link** generado por IA. Código real, con su propio
  historial de versiones, ejecutándose en su propio runtime oculto, mapeando lo
  que A emite a lo que B espera.
- **Una conexión, bot o agente** → un **attachment** ligero, que es un registro
  de lo que un rebuild enseñó al *propio* código de este widget a hacer.
  Escalonado, no automático, así que explorar cinco fuentes seguidas cuesta un
  rebuild, no cinco.

Saber cuál quieres, antes de poder decir qué quieres que ocurra de verdad, es
una mala primera pregunta. Así que la pestaña Enlaces abre ahora con un
compositor: **describe el cableado**.

> *«Sincroniza el símbolo en ambos sentidos con el gráfico.»*
> *«Cuando hago clic en una fila aquí, filtra el otro widget.»*
> *«Muestra las señales de mi bot de alertas de precio en este widget.»*

Un planificador lee el mismo inventario que muestra el selector y resuelve tanto
el mecanismo como la contraparte — «el bot de precio» se convierte en un id.
**Solo resuelve**; nunca genera. El codegen en streaming caro sigue corriendo
donde siempre, con su propio botón Detener y su propio historial de versiones.

Si prefieres señalar tú mismo, el selector sigue haciéndolo — y ahora marca lo
que ya tienes cableado, así que una segunda elección se lee como *«ya enlazado»*
en lugar de repetir silenciosamente la primera. Elegirlo de nuevo actualiza el
cableado existente en lugar de añadir una fila duplicada, y la insignia lo dice
**antes** de que pagues por un rebuild.

## «Probar»: ¿qué extremo está realmente roto?

Hasta esta versión un link era solo de escritura. Lo describías, pagabas el
codegen, salías del editor y tocabas los widgets reales para ver si pasaba algo.
Cuando no pasaba, no había forma de saber *qué* parte fallaba — el widget que no
emitía, el link que no mapeaba, o el otro widget que no escuchaba.

El editor tiene ahora una barra **Probar**. Elige un tema y un valor, elige qué
extremo finge emitir (ofrecido solo en un link bidireccional, porque un link
unidireccional siempre reportaría nada del lado lejano), y envía. El evento
entra en el runtime real del link y ejecuta el `connect(ctx)` generado — no una
simulación — y el veredicto distingue cada forma en que puede quedar vacío:

- **Este link no está en ejecución.** Actívalo — o aún no tiene código.
- **Se ejecutó pero no reenvió nada para ese tema.** El mapeo está mal; la
  pestaña Logs tiene el detalle.
- **Enviado «symbol» al Chart.** Funciona.
- **Reenviado, pero ese widget no está en pantalla para recibirlo.** No es un
  bug — el otro extremo está en otra pantalla.

La prueba permanece en la lista en lugar de llevarte a otro sitio, y el
registrador se arma solo mientras la barra está en pantalla, así que un link
que reenvía un stream de ticks nunca paga la instrumentación.

## Los discretos

Los links bidireccionales harían eco para siempre sin ayuda, así que un valor
entregado se recuerda y el rebote idéntico se descarta una vez — el bucle
espejo canónico A↔B se rompe, mientras un valor genuinamente nuevo sigue
pasando. Links y attachments se replican entre tus pestañas y dispositivos en
lugar de vivir en uno solo, así que borrar uno en otro sitio muestra ahora un
estado **gone** en el editor en lugar de dejarte guardar en la nada. Y cuando un
rebuild falla, lo dice y apunta a la pestaña Builder, en lugar de dejar un
spinner donde debería haber una respuesta.

Un cambio más está en camino: la app se renombra en torno a la palabra que la
gente ya usa para esto. *Link* pasa a ser **wire**, y **Mi cableado** se queda
exactamente donde está.

[Lanza Nexow](https://x.nexow.ai), abre la pestaña Enlaces de cualquier widget
y describe qué debería pasar cuando haces clic en algo. Luego pruébalo antes de
salir.
