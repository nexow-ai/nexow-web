---
title: 'Un workspace, todos los dispositivos: sync más profundo, bibliotecas nuevas y un modo privado más inteligente'
description: 'Los chats de widgets ahora te siguen entre dispositivos en vivo, las pantallas y los workspaces tienen bibliotecas propias, los borradores archivados conservan sus conversaciones y el modo privado guarda tu estado en la nube en vez de perderlo.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['producto', 'sincronización', 'workspace']
---

La sincronización en la nube significaba que tus widgets y layouts te seguían.
Este lanzamiento hace que el *resto* también te siga — conversaciones,
bibliotecas, incluso el estado de tus automatizaciones cuando entras y sales del
modo privado.

## Las conversaciones se sincronizan en vivo

El chat de un widget es la mitad de su valor: los prompts, las correcciones, el
razonamiento. Los hilos de widgets ahora **se aplican en vivo entre
dispositivos** — deja una conversación en el escritorio, abre el portátil, y el
hilo está ahí, al día, sin refrescar.

Por dentro, los registros de widget se dividieron en documentos de cabecera,
versión y chat, así que una conversación que avanza rápido ya no arrastra
payloads enteros de widget consigo. Lo notarás como un sync que sigue el ritmo.

## Bibliotecas para pantallas y workspaces

La biblioteca guardaba widgets. Ahora también tiene pestañas para **pantallas**
y **workspaces** — guarda un layout completo una vez, reutilízalo donde sea, y
se sincroniza como todo lo demás. Combinado con el marketplace, el camino de «mi
pantalla favorita» a «asset publicado» mide dos clics.

Archivar también se volvió más amable: un borrador de widget archivado
**conserva su conversación**, y retomarlo reanuda el chat donde lo dejaste — el
archivo ahora es una estantería, no una trituradora. Y si una operación
interrumpida deja huérfano un registro de widget, la biblioteca lo encuentra y
lo recupera en vez de dejar que se pierda.

## Modo privado: guardar, no destruir

La regla de Nexow es que la nube es algo por lo que optas — y de lo que puedes
volver a salir. Entrar en **modo privado** ahora *guarda* tu estado del lado de
la nube: los agentes desplegados y los destinos de bots en la nube quedan
aparcados, no borrados. Sal del modo privado y se restauran exactamente como
estaban, destinos de base de datos incluidos. Volverte privado ya no es una
decisión que pagas al volver.

La sincronización en tiempo real también es ahora una preferencia recordada —
apágala una vez y se queda apagada entre sesiones hasta que digas lo contrario.

## Aburrido a propósito

El resto del trabajo, con suerte, nunca lo notarás: los pushes de layout son
compare-and-set para que dos dispositivos no puedan sobrescribirse en silencio,
un dispositivo ignora el eco de sus propias escrituras, y los cambios offline se
anotan en un outbox que se reproduce cuando vuelves. El sync en el que no
piensas: esa es la feature.

[Abre Nexow](https://x.nexow.ai) en dos pantallas y mira cómo un solo workspace
se comporta como tal.
