---
title: 'Graba tu panel, con burbuja de cámara incluida'
description: 'La grabación de pantalla ya está en la barra de herramientas: hasta diez minutos de tu lienzo con la webcam incrustada como una burbuja arrastrable, una barra de control flotante y una decisión —guardar, compartir o publicar— al parar.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['producto', 'captura', 'comunidad']
---

Construyes algo bueno y quieres enseñarlo — en movimiento, no como una captura.
Hasta ahora eso significaba salir de la app, buscar un grabador aparte, encuadrar
una ventana del navegador y cruzar los dedos. Ahora es un botón de la barra.

**Capturar panel** ofrece dos cosas: una **captura**, recortable antes de
guardarla, o **grabar vídeo** — tu lienzo, en directo, hasta que lo pares o
llegues a diez minutos.

## Qué entra en la toma

Tres interruptores, que se deciden antes de empezar:

- **Burbuja de cámara** — tu webcam, incrustada en el vídeo como un círculo
- **Micrófono** — tu narración
- **Audio de la pestaña** — lo que esté sonando en la propia página

La burbuja de cámara no está clavada en una esquina. **Arrástrala donde quieras** y
se ajustará a la esquina más cercana al soltarla, con el tamaño que hayas elegido.
Forma parte del vídeo, no es una capa añadida después, así que lo que encuadras es
lo que contiene el archivo.

Mientras grabas, una **barra de control** flotante se mantiene aparte y hace las
cuatro cosas que de verdad necesitas sobre la marcha: pausar y reanudar, silenciar
el micrófono, silenciar el audio de la pestaña, ocultar o mover la burbuja de
cámara — y parar. Un temporizador corre todo el rato, y avisa cuando te acercas al
tope de diez minutos en vez de cortarse sin explicación.

## Y luego una decisión, no una descarga

Al parar, la toma se abre en una pantalla de revisión con el vídeo y cuatro
opciones: **Guardar**, **Compartir**, **Publicar** y **Descartar**.

Publicar la envía al feed de la comunidad, y es la única con un límite: una
grabación de diez minutos puede superar lo que admiten las subidas del feed.
Cuando pasa, Publicar se **desactiva y explica por qué**, con el máximo indicado,
mientras Guardar y Compartir siguen disponibles porque ninguna se acerca a ese
techo. Un botón atenuado que te dice el número es mejor que uno que falla cuando la
barra de subida ya está llena.

## Las partes poco vistosas que hacen bueno el archivo

Casi todo el trabajo de un grabador de pantalla es invisible cuando funciona:

- **La imagen se compone siempre sobre un lienzo de tamaño fijo**, incluso sin
  burbuja de cámara. La resolución de una captura de pestaña sigue a la ventana, así
  que un solo redimensionado a mitad de la toma renegociaría la pista de vídeo, y
  los archivos con un cambio de resolución están rotos en casi cualquier
  reproductor. Fijar el tamaño una vez al principio es lo que hace que la salida
  sea una codificación limpia: 1080p a 30 fps, bajando a 720p cuando el navegador
  entrega una superficie de pantalla completa.
- **El contenedor se elige en tiempo de ejecución, no se da por hecho.** Firefox
  graba WebM, Safari graba MP4 y Chromium ha lanzado ambos según la versión. El
  grabador prueba MP4 primero — es el archivo que se reproduce allí donde
  probablemente lo lleves después —, baja a WebM si no queda otra, y nombra el
  archivo según lo que el navegador usó realmente y no según lo que se le pidió.
- **Los fotogramas se marcan con un reloj propio, independiente de la página.** Una
  pestaña en segundo plano frena la animación pero no el audio, que es justo como
  se consigue una imagen congelada sobre una narración que continúa. Si la pestaña
  estuvo oculta durante la toma, la pantalla de revisión lo dice en vez de dejar que
  lo descubras luego.
- **Todas las pistas se detienen en cualquier salida**, incluido un fallo a medio
  arrancar. Una luz de cámara encendida es una app que parece estar mirándote, y no
  hay versión aceptable de eso.

Los errores son honestos en ambos sentidos. Cerrar el selector del navegador no es
un error y se queda callado: no has compartido nada, y un aviso sería ruido. Pero
una fuente que no manda imagen avisa antes de que narres cinco minutos sobre un
rectángulo gris, y un navegador que no puede codificar vídeo lo dice en lugar de
producir un archivo vacío.

## Lo siguiente: grabar un solo widget

Con la próxima actualización llega la versión pequeña y más precisa de esto: un
**botón de cámara en la cabecera de cada widget** que graba *solo ese widget* —
recortado a su cuerpo, de modo que la cabecera donde vive el botón, y la barra de
control, quedan fuera del encuadre. El indicador de grabación puede estar ahí
mismo mientras grabas sin salir en el vídeo.

Está construido sobre Region Capture, que hoy es una capacidad de Chromium en
escritorio, así que el botón solo aparece donde puede cumplir en vez de ofrecer
algo por lo que tendría que disculparse. Sigue al widget si lo mueves y se detiene
limpiamente si el widget sale de la pantalla.

Entre las dos, «mira lo que he construido» deja de ser una captura y un párrafo.

[Abre Nexow](https://x.nexow.ai), busca **Capturar panel** en la barra de
herramientas y graba tu lienzo.
