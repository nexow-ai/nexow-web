---
title: 'Sécurité de l’espace : comment Nexow contient les widgets générés'
description: 'Comment Nexow utilise widgets sandboxés, connecteurs limités et historique d’espace pour garder les outils générés compréhensibles et contrôlés.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architecture', 'security']
---

Les postes de travail de marché manipulent un contexte sensible : clés, positions, stratégies, alertes et workflows personnalisés. Le logiciel généré ne fonctionne ici que si les limites sont faciles à comprendre.

Voici ce que cela signifie concrètement.

## Widgets générés en sandbox

Chaque widget généré tourne dans un runtime sandboxé. Il peut afficher son interface, conserver son état et utiliser les capacités connecteurs qui lui sont données, sans ouvrir le reste de votre espace.

## Vos widgets gardent un historique

Chaque widget construit, chaque version, chaque log et votre bibliothèque restent attachés à l’espace. Vous pouvez inspecter le code généré, comparer les versions, revenir en arrière et garder une bibliothèque réutilisable.

## Connexions directes aux venues

Lorsque la politique CORS d’un venue le permet, Nexow s’y connecte **directement depuis votre navigateur**, contournant entièrement notre proxy. Vos identifiants d’exchange servent à parler à l’exchange — pas à nous parler. Moins de sauts signifie moins de latence et une surface de confiance plus petite.

## Pourquoi privé par défaut compte

- **Sécurité.** Moins il y a de surfaces inutiles, moins il y a d’endroits où les choses peuvent fuiter. Les connecteurs limités et les widgets sandboxés réduisent cette surface.
- **Latence.** Les connexions directes évitent un saut réseau, ce qui compte quand vous surveillez un carnet d’ordres.
- **Propriété.** Vos tableaux de bord sont les vôtres. L’historique de versions et les widgets réutilisables gardent le travail portable.
- **Coût.** Free inclut des crédits de départ ; les plans payants ajoutent de la capacité quand l’espace en a besoin.

## Les compromis, honnêtement

La conception sécurité n’est pas sans compromis. Certains venues nécessitent un proxy léger, certains workflows ont besoin de services cloud en arrière-plan, et les fonctions partagées nécessitent identité et sync. L’important est que ces limites restent explicites.

À mesure que nous ajoutons plans hébergés, agents et composants serveur, le principe reste fixe : **vos outils, vos données, votre contrôle**.

[Lancez Nexow](https://x.nexow.ai) et construisez votre premier espace.
