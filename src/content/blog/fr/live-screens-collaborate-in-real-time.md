---
title: 'Écrans en direct : deux personnes sur une même toile'
description: 'Transformez un écran en session en direct et invitez-y vos contacts. Tout le monde voit les mêmes widgets, les curseurs des autres, et chaque déplacement, redimensionnement et prompt au moment où il arrive — et personne n''a besoin d''un plan pour rejoindre.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/collab.svg
tags: ['product', 'collaboration', 'workspace']
---

Un espace de travail avait toujours été un endroit privé. Vous pouviez publier un
widget, partager une capture, envoyer une fiche du marketplace — mais pas vous
asseoir à côté de quelqu'un à l'intérieur. C'est désormais possible : n'importe
quel écran vous appartenant peut devenir une **session en direct**, et les
personnes que vous invitez y travaillent avec vous, en même temps, sur la même
toile.

## Inviter, pas publier

Depuis l'onglet d'un écran : **Collaborer en direct…**. Choisissez des personnes
parmi vos contacts — les abonnements mutuels que vous avez déjà —, donnez un rôle
à chacune, et passez en direct.

Rien ne devient public. Aucun lien ne fonctionne pour des inconnus, aucun niveau
« toute personne ayant l'URL », aucune surface de découverte. Seules les personnes
que vous avez choisies peuvent ouvrir l'écran, et le lien d'invitation que vous
copiez ne sert à personne d'autre.

Il y a deux rôles, et ils disent exactement ce qu'ils font :

- **Éditeur** — déplacer, redimensionner, ajouter et prompter des widgets.
- **Spectateur** — regarder et pointer. Ne peut rien changer.

Un spectateur qui en veut plus peut **Demander à éditer** ; vous recevez la
demande et l'accordez ou non. Vous pouvez changer le rôle de n'importe qui, ou le
retirer, à tout moment — la déconnexion est immédiate et l'écran quitte son espace
Partagé.

## À quoi ressemble vraiment « en direct »

Tout le monde voit le **curseur** des autres, en temps réel, avec leur nom
attaché. L'onglet de l'écran affiche une pile d'avatars, et chaque avatar porte un
état plutôt qu'un simple point :

- **édite** — vient de faire quelque chose qui modifie la toile
- **regarde** — a cet écran sous les yeux
- **inactif** — le regarde, mais n'a rien fait depuis un moment
- **absent** — dans la session, mais ailleurs

Cette dernière distinction compte plus qu'il n'y paraît. Les curseurs cessent
d'être diffusés dès qu'un écran n'est plus visible, mais pas la présence : quelqu'un
parti vers un autre espace de travail reste dans la liste, en grisé, au lieu de
disparaître puis réapparaître.

Déplacements, redimensionnements, nouveaux widgets et nouveaux builds arrivent chez
tout le monde. Quand un collaborateur lance un build, le widget le dit — *« Ana
construit ce widget — revenez quand elle aura fini »* — parce que deux personnes
qui promptent le même widget en même temps dépensent chacune des crédits et qu'un
seul résultat peut l'emporter. Le tour est réservé le temps du build puis libéré,
pour que le travail de personne ne soit écrasé en silence.

Une absence délibérée : **l'annulation est désactivée tant que l'écran où vous êtes
est en direct**. Annuler votre propre déplacement après que quelqu'un d'autre a
bougé la même boîte ne décrit un état dans lequel ni l'un ni l'autre ne s'est
trouvé. Refuser honnêtement vaut mieux qu'un bouton qui fait silencieusement la
mauvaise chose — et l'annulation continue de fonctionner normalement sur vos autres
écrans pendant qu'un écran est en direct.

## Les invités n'apportent qu'eux-mêmes

**Rejoindre n'a jamais besoin d'un plan.** Ni essai, ni mode réduit, ni minuteur.
Un collaborateur invité ouvre l'écran et travaille.

Les écrans rejoints atterrissent dans **Partagé**, un espace de travail épinglé en
fin de rail avec un onglet par session. Il se comporte comme n'importe quel autre,
sauf qu'il n'est pas le vôtre : quand c'est fini vous **Quittez**, et si vous
voulez garder ce que vous avez construit ensemble, **Enregistrer une copie dans mon
espace** ramène l'écran chez vous.

Prompter est la partie qui coûte réellement de l'argent, donc le propriétaire la
contrôle explicitement. Activez **« Laisser les collaborateurs utiliser mes
crédits »** et fixez un plafond pour la session : les invités peuvent construire,
leurs prompts sont facturés sur votre solde, et quand le budget de la session est
épuisé, les prompts se mettent en pause — pour eux, pas pour votre compte. Laissez
l'option désactivée et les collaborateurs pourront toujours déplacer, redimensionner
et réorganiser ; ils ne pourront simplement pas prompter.

## Vos connexions restent les vôtres

C'est la frontière autour de laquelle toute la fonctionnalité est construite : **un
écran partagé partage l'écran, jamais vos identifiants.**

Les widgets d'un écran en direct tournent avec **les connexions de celui qui
regarde**. Un widget bâti sur votre clé Binance ne l'emprunte pas : pour un invité
qui n'a pas connecté Binance, il affiche *connexion requise*, exactement comme
ailleurs. Vos connexions et vos secrets ne font pas partie de ce qu'une session
projette, et ce n'est pas un réglage.

Si vous voulez malgré tout qu'un invité voie les données, c'est le rôle d'un
[flux de données publié](/fr/blog/publish-a-widget-data-feed) : un endpoint en
lecture seule, à audience définie, que vous activez widget par widget — une
décision différente, prise exprès.

## Les sessions survivent à l'onglet

Il n'y a pas d'appareil hôte. Une session en direct existe pour elle-même sur le
serveur, ce n'est pas un relais qui tourne dans votre navigateur : fermer votre
portable n'éjecte personne, et un onglet en arrière-plan ne ralentit pas la session
des autres. Revenez, rouvrez l'écran, et vous êtes dans la même session avec les
mêmes personnes.

Y mettre fin tient en une action : **Terminer la session en direct**. Tout le monde
est déconnecté, et l'écran et tout ce qu'il contient restent les vôtres — vous
pouvez en relancer une quand vous voulez.

## Ce que ça coûte

Rejoindre est gratuit pour toujours. Héberger est gradué sur ce qui coûte
réellement : les places.

- **Supporter** — jusqu'à 3 collaborateurs à la fois, sur un écran en direct.
- **Sponsor** — jusqu'à 15 collaborateurs, et jusqu'à 5 de vos écrans en direct en
  même temps.

La collaboration en direct est désactivée tant que le mode privé est actif, pour la
même raison que la synchronisation cloud : le mode privé signifie que rien ne quitte
l'appareil.

[Lancez Nexow](https://x.nexow.ai), faites un clic droit sur l'onglet d'un écran, et
invitez quelqu'un sur votre toile.
