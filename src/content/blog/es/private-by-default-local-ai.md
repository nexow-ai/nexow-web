---
title: 'Privado por defecto: por qué tu estación de mercado con IA debería correr en local'
description: 'Nexow corre totalmente local por defecto — generación de código con tu propia clave en el navegador, persistencia en IndexedDB y conexiones directas a los venues. Esto es lo que significa privado por defecto y por qué importa a los traders.'
pubDate: 2026-07-01
heroImage: '/blog/private.svg'
tags: ['privacidad', 'arquitectura', 'seguridad']
---

La mayoría de las herramientas de IA envían tus datos a un servidor por defecto.
Para una estación de mercado — donde tus claves, posiciones y estrategias son todo
el juego — ese default está al revés. Nexow lo invierte: **privado por defecto,
local por diseño.**

Esto es lo que significa de verdad.

## Generación con tu propia clave, en el navegador

En modo privado añades tu propia clave de la API de Anthropic y la generación de
widgets corre en el cliente. Cuando pides un widget, la petición va de tu
navegador a Anthropic con tu clave — no pasa por la infraestructura de Nexow. Una
sesión sin autenticar no nos cuesta nada porque no hay nada que ejecutar: el
trabajo ocurre en tu máquina.

## Tus widgets viven en tu navegador

Cada widget que creas, cada versión, cada log y toda tu biblioteca de widgets se
guardan en el **IndexedDB** de tu navegador. Están disponibles offline y no están
atados a ninguna cuenta. Borra tu almacenamiento y desaparecen — no hay copia en
el servidor porque nunca hubo una subida al servidor.

## Conexiones directas a los venues

Donde la política de CORS del venue lo permite, Nexow se conecta **directamente
desde tu navegador**, evitando por completo nuestro proxy. Tus credenciales del
exchange se usan para hablar con el exchange — no para hablar con nosotros. Menos
saltos significan menor latencia y una superficie de confianza más pequeña.

## Por qué importa lo privado por defecto

- **Seguridad.** Cuantas menos partes tocan tus claves, menos sitios donde pueden
  filtrarse. Local primero nos saca del camino por completo en modo privado.
- **Latencia.** Las conexiones directas se saltan un salto de red, y eso importa
  cuando vigilas un order book.
- **Propiedad.** Tus dashboards son tuyos. Sin lock-in ni baile de exportación —
  viven en tu máquina.
- **Coste.** Solo pagas tu propio uso del modelo, sin markup y sin necesidad de
  suscripción para construir en el lienzo hoy.

## Las contrapartidas, con honestidad

Local primero no está libre de contrapartidas. Algunos venues no permiten
conexiones directas desde el navegador y deben pasar por un proxy ligero. La
persistencia local implica que tu trabajo está atado a un perfil del navegador
hasta que decidas sincronizarlo. Y usar tu propia clave significa gestionar tu
propio uso. Creemos que son las contrapartidas correctas para una herramienta que
está tan cerca de tu dinero.

A medida que añadimos planes gestionados, agentes de trading y componentes de
servidor, el principio no cambia: **tus claves, tus datos, tu máquina** — salvo
que optes explícitamente por la nube.

[Abre Nexow](https://app.nexow.ai) y comprueba el modo privado por ti mismo.
