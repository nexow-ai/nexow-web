---
title: 'Publica un feed de datos: que otros usen tu widget sin tu clave'
description: 'Un widget construido sobre tu conexión de Binance u OANDA no le servía a nadie más. Ahora puedes publicar exactamente las lecturas que hace como un endpoint de solo lectura y cacheado, bajo tu propio perfil — sin compartir la clave y sin abrir un proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['producto', 'widgets', 'datos']
---

Compartir tenía un hueco incómodo. Construyes un gráfico de FX precioso sobre tu
conexión de OANDA, lo publicas, y la primera persona que lo instala ve *Conecta
OANDA para usar estos datos* — que es una forma educada de pedirle a un
desconocido que abra una cuenta de broker para mirar un gráfico. Compartido en una
pantalla en vivo era aún peor: el widget se congelaba en una miniatura.

La solución no es prestarle tu clave a nadie. Es publicar **las lecturas que tu
widget hace realmente**, como endpoints propios, bajo tu propio perfil:

```
GET /<usuario>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Se activa desde el diálogo de publicación — *Publicar un feed de datos de solo
lectura* — y quienes no tengan conexión propia leerán tu feed en vez de que se les
pida conectarse.

## Tres reglas, y cada una es una negativa

**Solo lecturas que sea seguro compartir.** Trece métodos de datos pueden
publicarse. El resto están bloqueados, cada uno por su motivo: `account` y
`positions` también son lecturas, pero devuelven tu saldo, tu patrimonio, tu P&L y
tus posiciones abiertas. `order` y `closePosition` mueven dinero. `upsert` y
`delete` destruyen datos. `scrape` le factura a un tercero por llamada. Y `http` a
secas ya no lleva credenciales, así que publicarlo solo construiría un proxy
abierto con tu nombre encima.

**Solo las llamadas que el widget hizo de verdad.** Las lecturas correctas de tu
widget se registran mientras funciona, y el diálogo de publicación te enseña la
lista — *velas de Binance — BTCUSDT, 1h* — como la cosa concreta que estás
aceptando. Una petición que pida un parámetro que nunca publicaste, o un valor
fuera del conjunto al que lo ampliaste, se rechaza antes de descifrar nada. Los
parámetros que no deberían estar en una URL — una consulta SQL, un vector — nunca
aparecen en ella: se reproducen literalmente desde el almacenamiento.

**Las negativas son indistinguibles.** Un endpoint que no existe, un parámetro
fuera de su lista y una audiencia a la que no perteneces devuelven el mismo 404.
Que exista o no un feed solo para amigos ya dice algo del autor, así que la
respuesta nunca lo filtra.

## Quién puede leerlo y qué te cuesta

La audiencia no es un cuarto interruptor que olvidar: **sigue a la publicación de
anuncio** — cualquiera, tus seguidores o tus amigos. Un anuncio privado desactiva
el feed por completo, porque un anuncio que solo tú puedes ver respaldando un
endpoint que otros llaman no tiene sentido.

El coste es la parte que conviene entender, porque es la que da miedo. Eliges un
intervalo de refresco — cada 30 segundos, 5 minutos, cada hora o cada día — y ese
es el **máximo** que se puede usar tu conexión, por mucha gente que abra el widget.
Quienes leen comparten una única copia cacheada. Diez espectadores y diez mil
hacen el mismo número de llamadas, y solo se permite un refresco por ventana
aunque varios fallen la caché en el mismo instante.

Tu clave nunca sale del servidor. Tu saldo, tus posiciones y tus órdenes no se
publican jamás. Y el feed va atado a la ficha: retira el widget del listado y los
endpoints dejan de servir.

## La conexión propia siempre gana

Un feed publicado es un plan B, nunca un sustituto. Si quien abre tu widget tiene
su propia conexión de OANDA, el widget usa **la suya**: su cuenta, sus datos, sus
límites. El feed solo se consulta después de que el widget no haya encontrado una
conexión propia, y un fallo es silencioso: verá el mensaje habitual de *conecta
este venue* en lugar de un error nuevo que aprender.

Esos endpoints pasan por los mismos adaptadores de venue que ya lleva la app, así
que un feed publicado devuelve formas idénticas a las que viste al construir el
widget — en todos los venues activos del catálogo y sin código especial para
ninguno.

## Lo que a propósito no hace

- **Un panel de trading compartido pinta su gráfico, no su panel de cuenta.** Es la
  lista de bloqueados haciendo su trabajo, no un fallo.
- **Un selector de símbolos solo ofrece los que tú enumeraste.** Un widget con
  entrada libre se degrada a un conjunto fijo. Ese es el precio de no construir un
  proxy abierto hacia tu broker.
- **En modo privado no se puede publicar un feed.** En modo privado tus
  credenciales viven solo en el sellado de este dispositivo: ningún servidor las
  tiene, así que ninguno puede refrescar nada por ti.
- **Un fork no hereda el feed.** Los feeds van atados al linaje del widget, así que
  cada copia instalada resuelve los mismos endpoints y un fork no resuelve ninguno.

Es poca cosa de activar, y cambia lo que significa publicar: un widget que
compartes es ahora un widget que la gente puede usar de verdad.

[Abre Nexow](https://x.nexow.ai), busca un widget que hayas construido sobre una
conexión con clave y publícalo con el feed activado.
