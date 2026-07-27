---
title: 'Un workspace, tous vos appareils : une sync plus profonde, de nouvelles bibliothèques, un mode privé plus malin'
description: 'Les chats de widgets vous suivent désormais en direct d’un appareil à l’autre, les écrans et les workspaces ont leurs propres bibliothèques, les brouillons archivés gardent leurs conversations, et le mode privé met votre état cloud de côté au lieu de le perdre.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['product', 'sync', 'workspace']
---

La sync cloud voulait dire que vos widgets et vos mises en page vous
suivaient. Cette version fait suivre le *reste* aussi — les conversations,
les bibliothèques, et même l’état de vos automatisations quand vous entrez et
sortez du mode privé.

## Les conversations se synchronisent en direct

Le chat d’un widget, c’est la moitié de sa valeur : les prompts, les
amendements, le raisonnement. Les fils de widgets **s’appliquent désormais en
direct d’un appareil à l’autre** — laissez une conversation sur le bureau,
ouvrez le portable, et le fil est là, à jour, sans rafraîchir.

Sous le capot, les enregistrements de widgets ont été scindés en documents de
tête, de version et de chat, si bien qu’une conversation qui avance vite ne
traîne plus des charges utiles entières de widget avec elle. Vous le
remarquerez comme une sync qui suit le rythme.

## Des bibliothèques pour les écrans et les workspaces

La bibliothèque contenait des widgets. Elle a maintenant aussi des onglets
pour les **écrans** et les **workspaces** — enregistrez une mise en page
entière une fois, réutilisez-la partout, et elle se synchronise comme tout le
reste. Combiné au marketplace, le chemin de « mon écran préféré » à « asset
publié » fait deux clics.

L’archivage s’est adouci aussi : un brouillon de widget archivé **garde sa
conversation**, et le reprendre relance le chat là où vous l’aviez laissé —
l’archive est désormais une étagère, pas une déchiqueteuse. Et si un
enregistrement de widget se retrouve orphelin après une opération
interrompue, la bibliothèque le retrouve et le récupère au lieu de le laisser
fuir.

## Mode privé : mettre de côté, pas détruire

La règle de Nexow, c’est que le cloud est un choix — et vous pouvez revenir
en arrière. Entrer en **mode privé** *met de côté* votre état côté cloud :
agents déployés et destinations de bots cloud sont garés, pas supprimés.
Quittez le mode privé et ils sont restaurés exactement comme ils étaient,
destinations base de données comprises. Passer en privé n’est plus une
décision que vous payez à votre retour.

La sync en temps réel est elle aussi devenue une préférence mémorisée —
désactivez-la une fois et elle reste désactivée d’une session à l’autre,
jusqu’à nouvel ordre.

## Ennuyeux, à dessein

Le reste du travail, vous ne le remarquerez, on l’espère, jamais : les
poussées de mise en page sont en compare-and-set pour que deux appareils ne
puissent pas s’écraser en silence, un appareil ignore l’écho de ses propres
écritures, et les changements hors ligne se journalisent dans une boîte
d’envoi qui se rejoue à votre retour en ligne. Une sync à laquelle on ne
pense pas, c’est ça la fonctionnalité.

[Lancez Nexow](https://x.nexow.ai) sur deux écrans et regardez un seul
workspace se comporter comme tel.
