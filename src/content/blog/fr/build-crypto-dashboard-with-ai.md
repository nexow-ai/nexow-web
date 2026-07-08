---
title: 'Comment construire un tableau de bord crypto avec l’IA — sans coder'
description: 'Un guide pas à pas pour construire un tableau de bord crypto en direct avec l’IA : demandez un graphique en chandeliers, ajoutez la profondeur du carnet et les funding rates, et organisez le tout sur un canvas — sans écrire de code.'
pubDate: 2026-06-28
heroImage: '/blog/crypto.svg'
tags: ['guide', 'crypto', 'tutorial']
---

Vous n’avez plus besoin d’être développeur pour construire un tableau de bord crypto de qualité professionnelle. Avec un créateur natif IA comme Nexow, vous décrivez les widgets que vous voulez en langage naturel et obtenez des graphiques en direct sur un canvas libre. Voici comment construire un poste de travail crypto complet en quelques minutes.

## Ce que vous allez construire

Un canvas unique qui suit une paire crypto de bout en bout :

1. Un graphique en chandeliers avec moyennes mobiles
2. Une vue de profondeur du carnet d’ordres
3. Un moniteur de funding rate pour les perpétuels
4. Une watchlist compacte de paires associées

## Étape 1 — Ouvrez l’app et choisissez le mode privé

[Lancez Nexow](https://x.nexow.app) et ajoutez votre propre clé API Anthropic dans les Paramètres. En mode privé, la génération de widgets s’exécute entièrement dans votre navigateur et rien n’est envoyé à nos serveurs — vous ne payez que votre propre usage de l’API.

## Étape 2 — Demandez votre graphique principal

Tapez ce que vous voulez voir :

> Un graphique en chandeliers de BTC-USD depuis Coinbase, chandeliers 1 heure, avec EMA 20 et 50 et barres de volume.

Nexow génère le widget, le connecte au connecteur Coinbase et le place sur le canvas. Les prix arrivent en direct.

## Étape 3 — Ajoutez la profondeur du carnet

Créez un second widget :

> Un graphique de profondeur du carnet d’ordres pour BTC-PERP sur Deribit, top 50 niveaux de chaque côté.

Redimensionnez-le et placez-le à côté de votre graphique. Vous avez maintenant l’action des prix et la liquidité côte à côte.

## Étape 4 — Surveillez les funding rates

Les traders de perpétuels vivent et meurent par le funding. Demandez :

> Un tableau des funding rates actuels pour les 10 principaux perpétuels sur Binance, triés par valeur absolue, rafraîchi chaque minute.

## Étape 5 — Organisez votre canvas

Glissez vos widgets dans une mise en page qui vous convient, et regroupez les vues associées dans un espace — un pour BTC, un autre pour les majors, un autre pour la recherche. Changez entre eux instantanément.

## Questions fréquentes

**Dois-je savoir coder ?** Non. Vous décrivez les widgets en langage naturel et Nexow les écrit et les exécute. Si vous lisez le code, le code source de chaque widget est disponible pour inspection.

**Quels exchanges sont pris en charge ?** Nexow inclut des connecteurs pour Binance, Coinbase, Kraken, Deribit, BitMEX et plus, aux côtés de FX, actions et marchés de prédiction — plus de 20 au total.

**Mes données sont-elles privées ?** Oui. En mode privé, la génération s’exécute dans votre navigateur, vos widgets persistent localement dans IndexedDB, et de nombreux venues se connectent directement depuis le navigateur — vos clés et données restent sur votre machine.

**Combien ça coûte ?** La preview est gratuite ; en mode privé, vous ne payez que votre propre usage de l’API Anthropic.

---

Voilà un tableau de bord crypto complet sans toucher une ligne de code.
[Essayez maintenant](https://x.nexow.app) et construisez votre premier widget.
