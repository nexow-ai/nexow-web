---
title: 'Câblez vos widgets : une surface, une phrase et un bouton Tester'
description: 'Tout ce qu''un widget peut câbler vit désormais derrière une seule zone de recherche — autres widgets, connexions, bots et agents. Décrivez le câblage en langage clair, et envoyez un vrai événement pour découvrir quelle extrémité est cassée.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['product', 'widgets', 'automation']
---

Un **link** transporte des événements entre deux widgets : changez le symbole
dans l''un et l''autre réagit. Activez Bidirectionnel et ils restent synchronisés
dans les deux sens. C''est la différence entre un écran plein de tuiles séparées
et un écran qui se comporte comme un seul instrument.

L''idée était bonne. La trouver ne l''était pas, et savoir si ça marchait non
plus. Les deux sont corrigés dans cette version.

## Une surface, et « Tous » veut vraiment dire tous

Le picker était scindé en deux sous-onglets — *Widgets* et *Sources* — ce qui
voulait dire que la moitié de votre inventaire était toujours cachée derrière un
toggle qu''il fallait savoir presser. Un widget seul sur son écran montrait une
grille vide, sans indice que bots, agents et connexions existaient.

Maintenant il y a une zone de recherche et une rangée de filtres par kind sur
tout : autres widgets sur cet écran, dans ce workspace ou ailleurs ; vos
connexions de données ; vos bots ; vos agents. **Tous** montre tout.

L''ordre a changé aussi. **Mon câblage** est maintenant *au-dessus* de la surface
de browse. Il était sous une grille picker pouvant aller à des dizaines de
tuiles, donc la liste à laquelle vous revenez pour gérer — désactiver ceci,
retirer cela — était ce qu''il fallait scroller en passant tout le reste, pendant
que le picker dont vous n''avez besoin qu''en ajoutant quelque chose de nouveau
vous accueillait à chaque fois.

Petit fix d''honnêteté dans la même zone : l''état vide attend maintenant que les
stores bots et agents répondent avant d''affirmer qu''il n''y a rien à câbler,
montrant **Recherche…** entre-temps, et chaque chip de filtre porte son propre
compte. Une grille vide qui signifie « encore en chargement » est un mensonge que
l''interface racontait régulièrement.

## Deux mécanismes, une question

Derrière ce picker unique se cachent deux choses vraiment différentes :

- **Un autre widget** → un **glue link** généré par IA. Du vrai code, avec son
  propre historique de versions, tournant dans son propre runtime caché, mappant
  ce que A émet vers ce que B attend.
- **Une connexion, bot ou agent** → un **attachment** léger, qui est un
  enregistrement de ce qu''un rebuild a appris au *propre* code de ce widget à
  faire. Échelonné plutôt qu''automatique, pour que parcourir cinq sources d''affilée
  coûte un rebuild, pas cinq.

Savoir lequel vous voulez, avant de pouvoir dire ce que vous voulez vraiment
qu''il se passe, est une mauvaise première question. L''onglet Liens ouvre donc
maintenant avec un composeur : **décrivez le câblage**.

> *« Synchronise le symbole dans les deux sens avec le graphique. »*
> *« Quand je clique une ligne ici, filtre l''autre widget. »*
> *« Montre les signaux de mon bot d''alerte prix dans ce widget. »*

Un planner lit le même inventaire que le picker et résout à la fois le mécanisme
et la contrepartie — « le bot prix » devient un id. Il **résout seulement** ; il
ne génère jamais. Le codegen streaming coûteux tourne toujours là où il
tournait, avec son propre bouton Stop et son propre historique de versions.

Si vous préférez pointer vous-même, le picker le fait toujours — et marque
maintenant ce à quoi vous êtes déjà câblé, pour qu''un second pick se lise
*« déjà lié »* au lieu de répéter silencieusement le premier. Le reprendre met à
jour le câblage existant au lieu d''ajouter une ligne dupliquée, et le badge le
dit **avant** que vous payiez un rebuild.

## « Tester » : quelle extrémité est vraiment cassée ?

Jusqu''à cette version un link était write-only. Vous le décriviez, payiez le
codegen, quittiez l''éditeur et tapotiez les vrais widgets pour voir si quelque
chose se passait. Quand rien ne se passait, impossible de dire *quelle* partie
était fausse — le widget n''émettant pas, le link ne mappant pas, ou l''autre
widget n''écoutant pas.

L''éditeur a maintenant une barre **Tester**. Choisissez un topic et une valeur,
choisissez quelle extrémité simule l''émission (offert seulement sur un link
bidirectionnel, car un link unidirectionnel rapporterait toujours rien du côté
lointain), et envoyez. L''événement entre dans le vrai runtime du link et exécute
le `connect(ctx)` généré — pas une simulation — et le verdict distingue chaque
façon dont ça peut rester vide :

- **Ce link ne tourne pas.** Activez-le — ou il n''a pas encore de code.
- **Il a tourné mais n''a rien transmis pour ce topic.** Le mapping est faux ; l''onglet
  Logs a le détail.
- **Envoyé « symbol » vers Chart.** Ça marche.
- **Transmis, mais ce widget n''est pas à l''écran pour recevoir.** Pas un bug — l''autre
  extrémité est sur un autre écran.

Le test reste sur la liste plutôt que de vous renvoyer ailleurs, et l''enregistreur
n''est armé que tant que la barre est à l''écran, pour qu''un link transmettant un
flux de ticks ne paie jamais l''instrumentation.

## Les discrets

Les links bidirectionnels feraient écho indéfiniment sans aide, donc une valeur
livrée est mémorisée et le rebond identique est ignoré une fois — la boucle
miroir canonique A↔B se brise, tandis qu''une vraie nouvelle valeur passe
encore. Links et attachments se répliquent entre vos onglets et appareils plutôt
que de vivre dans l''un d''eux, donc en supprimer un ailleurs montre maintenant un
état **gone** dans l''éditeur au lieu de vous laisser sauver dans le vide. Et
quand un rebuild échoue, il le dit et pointe vers l''onglet Builder, plutôt que
de laisser un spinner où une réponse devrait être.

Un changement de plus arrive : l''app se renomme autour du mot que les gens
utilisent déjà pour ça. *Link* devient **wire**, et **Mon câblage** reste
exactement où il est.

[Lancez Nexow](https://x.nexow.ai), ouvrez l''onglet Liens de n''importe quel
widget, et décrivez ce qui devrait se passer quand vous cliquez quelque part.
Puis testez avant de partir.
