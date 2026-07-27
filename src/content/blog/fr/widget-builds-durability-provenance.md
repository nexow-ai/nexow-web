---
title: 'Une construction de widgets digne de confiance : builds durables, versions honnêtes, lint dans le chat'
description: 'Le composer a gagné une mémoire et une conscience — les builds survivent aux déconnexions et se relancent proprement, chaque version consigne d’où elle vient, et les problèmes de lint et d’exécution arrivent dans le chat, pas dans une console.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['product', 'widgets', 'ai']
---

Du prompt au widget, c’était depuis le début la partie spectaculaire. Cette
version porte sur la moitié ingrate de cette promesse : ce qui se passe quand
le réseau lâche en plein build, quand une génération échoue, quand vous
voulez savoir quelle version d’un widget vous regardez vraiment. La réponse,
désormais : rien ne se perd, et rien ne se réécrit dans votre dos.

## Des builds qui vous survivent

Les builds de widgets sont désormais des **jobs durables**. Refermez le
portable en pleine génération, perdez le Wi-Fi, rafraîchissez au pire moment
— le build garde son bail sur le serveur et se termine sans vous. Si un tour
échoue vraiment, un bouton **Réessayer** est posé dessus, et il fonctionne
même après qu’une déconnexion a laissé les choses dans un état bizarre. Les
builds périmés ne peuvent plus bloquer le composer.

Vos mots sont tout aussi durables : un prompt non envoyé qui attend dans le
composer persiste avec le widget, un refresh mal placé ne mange donc pas le
paragraphe que vous alliez envoyer.

## Des versions avec provenance

Chaque version de widget consigne désormais **d’où elle vient** — un prompt,
un amendement, une sauvegarde manuelle — et les modifications créent de
nouvelles versions au lieu de réécrire les anciennes sur place. La première
version de chaque widget, sa **genèse**, n’est jamais élaguée : vous pouvez
toujours remonter à ce que le tout premier prompt a produit. Et quand une
puce de version dans le chat pointe vers un historique élagué, le chat le dit
au lieu de faire semblant.

## Le build vous dit ce qui cloche

Le code généré est vérifié, et les constats vont là où vous regardez déjà :
**les problèmes de lint et d’exécution s’affichent sur la bulle de chat du
build**, comme une partie de la conversation. Corrigez-les en répondant — ces
problèmes sont un contexte que le tour suivant connaît déjà.

La sandbox est restée stricte, et s’est durcie : les widgets ne peuvent pas
faire d’appels réseau directs — les données passent par les connecteurs — et
les assets qu’ils peuvent charger sont épinglés à des origines connues.

## Des conversations plus riches

Le composer a gagné les **pièces jointes** — déposez une image dans le chat
pour montrer à l’IA ce que vous voulez dire — et les **connexions
épinglées**, pour que la conversation d’un widget sache toujours sur quelles
sources de données il se construit. Si vous construisez avec votre propre clé
API, les autres appareils de votre compte voient le build en cours au lieu
d’un état occupé mystérieux.

Rien de tout cela ne change la sensation de construire : décrire, regarder,
affiner. Cela change à quel point vous pouvez faire confiance à ce qui en
sort.

[Lancez Nexow](https://x.nexow.ai) et coupez votre connexion en plein build —
nous finirons sans vous.
