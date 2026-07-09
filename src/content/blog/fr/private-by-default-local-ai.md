---
title: 'Privé par défaut : pourquoi votre poste de travail IA pour les marchés devrait tourner en local'
description: 'Nexow fonctionne entièrement en local par défaut — génération avec votre propre clé dans le navigateur, persistance IndexedDB et connexions directes aux venues. Voici ce que signifie privé par défaut et pourquoi c’est important pour les traders.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architecture', 'security']
---

La plupart des outils IA envoient vos données vers un serveur par défaut. Pour un poste de travail de marché — où vos clés, positions et stratégies sont l’essentiel — ce défaut est à l’envers. Nexow l’inverse : **privé par défaut, local par conception.**

Voici ce que cela signifie concrètement.

## Génération avec votre propre clé, dans le navigateur

En mode privé, vous ajoutez votre propre clé API Anthropic, et la génération de widgets s’exécute côté client. Lorsque vous demandez un widget, la requête part de votre navigateur vers Anthropic avec votre clé — pas via l’infrastructure Nexow. Une session non authentifiée ne nous coûte rien à exécuter car il n’y a rien à exécuter : le travail se fait sur votre machine.

## Vos widgets vivent dans votre navigateur

Chaque widget que vous construisez, chaque version, chaque log et toute votre bibliothèque de widgets persistent dans l’**IndexedDB** de votre navigateur. Ils sont disponibles hors ligne et liés à aucun compte. Effacez votre stockage et ils disparaissent — il n’y a pas de copie côté serveur car il n’y a jamais eu de téléversement côté serveur.

## Connexions directes aux venues

Lorsque la politique CORS d’un venue le permet, Nexow s’y connecte **directement depuis votre navigateur**, contournant entièrement notre proxy. Vos identifiants d’exchange servent à parler à l’exchange — pas à nous parler. Moins de sauts signifie moins de latence et une surface de confiance plus petite.

## Pourquoi privé par défaut compte

- **Sécurité.** Moins il y a de parties qui touchent vos clés, moins il y a d’endroits où elles peuvent fuiter. Le local d’abord nous retire entièrement du chemin en mode privé.
- **Latence.** Les connexions directes évitent un saut réseau, ce qui compte quand vous surveillez un carnet d’ordres.
- **Propriété.** Vos tableaux de bord sont les vôtres. Pas de verrouillage, pas de danse d’export — ils vivent sur votre machine.
- **Coût.** Vous ne payez que votre propre usage du modèle, sans marge et sans abonnement requis pour construire sur le canvas aujourd’hui.

## Les compromis, honnêtement

Le local d’abord n’est pas sans compromis. Certains venues n’autorisent pas les connexions directes depuis le navigateur et doivent passer par un proxy léger. La persistance locale signifie que votre travail est lié à un profil de navigateur jusqu’à ce que vous choisissiez de le synchroniser. Et gérer votre propre clé signifie gérer votre propre usage. Nous pensons que ce sont les bons compromis pour un outil aussi proche de votre argent.

À mesure que nous ajoutons des plans hébergés, des agents de trading et des composants serveur, le principe reste fixe : **vos clés, vos données, votre machine** — sauf si vous optez explicitement pour le cloud.

[Lancez Nexow](https://x.nexow.ai) et découvrez le mode privé par vous-même.
