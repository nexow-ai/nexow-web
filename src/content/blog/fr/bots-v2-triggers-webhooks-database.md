---
title: 'Bots v2 : triggers RSI et volume, livraison webhook et base de données, et un builder plus net'
description: 'Les bots cloud ont appris de nouveaux tours — conditions RSI et pics de volume, surveillance des trades, signaux envoyés en POST vers vos webhooks ou ajoutés à votre base de données, et un builder scindé en Mes bots et Créer.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['product', 'automation', 'bots']
---

Au lancement des bots, ils savaient surveiller des seuils, des variations en
pourcentage, des croisements et des digests, et envoyer des signaux à votre
canvas. Ce cœur n’a pas changé. Autour, presque tout a gagné en profondeur :
plus de conditions de déclenchement, plus d’endroits où faire atterrir les
signaux, et un builder qui sait se faire oublier.

## De nouvelles conditions de déclenchement

Le catalogue de processeurs s’est étoffé. Aux côtés des seuils, du % de
variation et des croisements de moyennes mobiles, les bots évaluent
désormais :

- **RSI** — se déclenche quand le momentum passe en zone de surachat ou de
  survente
- **Pics de volume** — attrapez une activité inhabituelle à laquelle le prix
  n’a pas encore réagi
- **Nouveaux trades** — se déclenche sur les exécutions récentes d’un compte
  connecté
- **Activité et solde de wallet** — surveillez des adresses on-chain, comme
  détaillé dans notre [article sur les
  wallets](/fr/blog/wallets-on-the-canvas)

Comme toujours : décrivez la règle en une phrase et laissez l’IA ébaucher le
bot, ou montez-le visuellement et ajustez chaque paramètre vous-même.

## Les signaux vont là où vous travaillez

Le signal d’un bot atteignait votre boîte de réception et vos widgets. Deux
nouvelles destinations changent la vocation des bots :

- **Webhooks** — un POST de chaque signal vers l’URL de votre choix. C’est
  Discord, Slack ou Telegram via leurs URL de webhook, ou votre propre
  serveur. Votre bot devient un producteur que n’importe quel système peut
  consommer.
- **Votre base de données** — chaque signal s’ajoute comme une ligne dans
  l’une de vos bases connectées. Laissez un bot tourner un mois et vous avez
  un journal interrogeable de chaque déclenchement, prêt à être tracé par un
  widget.

La livraison est un ensemble, pas un choix — un même bot peut vous notifier,
mettre à jour vos widgets, pinger Discord et écrire la ligne, le tout depuis
le même déclencheur.

## Mes bots et Créer, enfin séparés

Le panneau bots sépare désormais **Mes bots** — votre flotte en marche,
statut en un coup d’œil — de **Créer**, où les nouveaux bots prennent forme.
Le formulaire lui-même s’est allégé : les sections optionnelles restent
repliées jusqu’à ce que vous en ayez besoin, si bien qu’une simple alerte de
seuil prend quelques secondes tandis que toute la profondeur reste à un clic.

## Des brouillons sûrs dès le départ

Un détail délibéré : quand l’IA ébauche un bot pour vous, sa destination
webhook démarre **vide**. Une automatisation générée ne part jamais avec une
destination que vous n’avez pas tapée vous-même — vous décidez où vont les
signaux, explicitement, à chaque fois.

[Lancez Nexow](https://x.nexow.ai), ouvrez Bots et offrez à votre prochaine
alerte un meilleur endroit où atterrir qu’une boîte de réception.
