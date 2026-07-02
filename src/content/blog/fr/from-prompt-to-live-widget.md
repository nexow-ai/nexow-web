---
title: 'Du prompt au widget en direct : comment Nexow transforme une phrase en tableau de bord de trading'
description: 'Un regard sous le capot sur la façon dont Nexow génère un widget de marché fonctionnel et connecté aux données à partir d’un prompt en langage naturel — codegen, sandboxing et connecteurs en direct expliqués.'
pubDate: 2026-06-24
tags: ['product', 'ai', 'how-it-works']
---

Construire un tableau de bord de trading a toujours signifié le même travail répétitif : trouver une API, lire la documentation, gérer un websocket, normaliser la charge utile, choisir une bibliothèque de graphiques, lutter avec la mise en page, et recommencer pour chaque instrument qui vous intéresse. Nexow réduit toute cette boucle à une phrase.

Voici ce qui se passe réellement entre la saisie d’un prompt et l’apparition d’un widget en direct sur votre canvas.

## 1. Vous décrivez ce que vous voulez voir

Un prompt, c’est simplement du langage naturel :

> Affiche un graphique en chandeliers de BTC-USD depuis Coinbase avec EMA 20 et 50, et un panneau RSI en dessous.

Pas de schéma à apprendre, pas de fichier de configuration. Vous décrivez le résultat — l’instrument, le venue, les indicateurs, la mise en page — comme vous le décririez à un collègue.

## 2. Nexow génère le code source du widget

Nexow envoie votre prompt aux modèles Claude d’Anthropic via le SDK Anthropic, avec le contexte nécessaire : quels connecteurs sont disponibles, la forme des données qu’ils renvoient, et le contrat d’exécution qu’un widget doit respecter. Claude écrit le code source réel du widget — la logique de récupération, les transformations et le rendu.

Comme le modèle écrit du vrai code plutôt que de remplir un modèle fixe, la gamme de ce que vous pouvez construire est ouverte : graphiques de profondeur de carnet, heatmaps de funding rate, matrices de corrélation, signaux personnalisés, tableaux simples. Si vous pouvez le décrire, Nexow peut généralement le construire.

## 3. Le widget s’exécute en sandbox

Le code généré est puissant, il s’exécute donc derrière une frontière stricte. Chaque widget tourne dans un iframe isolé : il peut rendre son interface et récupérer les données dont il a besoin, mais il ne peut pas accéder à votre espace de travail, lire d’autres widgets ou toucher quoi que ce soit qu’on ne lui a pas donné. La puissance sans le risque.

## 4. Les données en direct arrivent via les connecteurs

Un widget n’est utile qu’avec de vraies données. Nexow inclut plus de 20 connecteurs branchables couvrant FX, crypto, actions, futures, options et marchés de prédiction — OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi, Polymarket et plus. Le widget s’abonne au venue que vous avez nommé, et les prix, carnets d’ordres et données de référence arrivent en direct.

Lorsque la politique CORS d’un venue le permet, ces appels s’exécutent **directement depuis votre navigateur** et ne passent jamais par nos serveurs — ce qui garde la latence basse et vos identifiants sur votre machine.

## 5. Vous l’affinez en langage naturel

La première génération est rarement la dernière. Tout reste modifiable par conversation : *« ajoute une EMA 200 »*, *« passe en échelle log »*, *« colore les chandeliers par funding rate »*. Nexow réécrit le widget sur place, versionne le changement et conserve un log que vous pouvez inspecter ou restaurer.

## Pourquoi c’est important

Le chemin traditionnel de l’idée au graphique se mesure en heures. Avec Nexow, c’est en secondes, et l’artefact que vous obtenez est un vrai widget inspectable — pas une boîte noire. Le tableau de bord s’assemble tout seul, et vous gardez le contrôle du code, des données et des clés.

Prêt à essayer ? [Ouvrez l’app](https://app.nexow.ai) et décrivez votre premier widget.
