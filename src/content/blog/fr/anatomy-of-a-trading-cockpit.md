---
title: 'Anatomie d''un cockpit de trading : un écran, huit widgets, et ce qui alimente chacun'
description: 'Un bureau de référence démonté tuile par tuile — ce qu''est chaque widget, quelle connexion l''alimente, quels fils les relient, et ce qui continue de tourner une fois l''onglet fermé. Moins une note de version qu''une carte.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['teardown', 'workspace', 'crypto']
category: teardown
---

La plupart de ce que nous publions ici est une note de version : quelque chose
a été livré, voici ce que ça fait. Ce billet est d''un autre ordre. Rien
ci-dessous n''est nouveau. C''est un écran fini, démonté, pour que vous voyiez
comment les pièces que nous livrons séparément s''assemblent réellement.

Le bureau est un cockpit crypto — huit widgets sur un écran, construits à partir
de données de marché publiques, sans clé nulle part. Rien n''y est spécial.
C''est le point : chaque partie est quelque chose que vous pouvez reconstruire
en la décrivant.

## L''écran

![Un écran avec huit tuiles de widgets, chacune marquée d''un numéro de un à huit](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "Le bureau entier. Un écran, huit widgets, disposés sur le canvas libre — les numéros renvoient à la liste ci-dessous.")

1. **Chandeliers.** La tuile d''ancrage. Un symbole, un intervalle, une
   dernière bougie en direct. Tout le reste sur l''écran l''alimente ou le suit.
2. **Profondeur du carnet d''ordres.** Bids et asks en barres empilées, pour
   qu''un carnet fin soit visible plutôt qu''inféré.
3. **Watchlist.** Une poignée de symboles, l''un sélectionné. Cette tuile est
   le volant de l''écran — plus bas.
4. **Soldes de wallet.** Une adresse publique, en lecture seule, via une
   connexion wallet. Pas de signature, pas de clés, rien à approuver.
5. **Taux de funding.** Funding perp sur les dernières fenêtres, positif et
   négatif de part et d''autre d''une ligne zéro.
6. **Heatmap.** Le même univers que la watchlist, dimensionné et ombré, pour
   un coup d''œil plutôt qu''une lecture.
7. **Marchés de prédiction.** Ce que la foule price, à côté de ce que price le
   carnet d''ordres. L''intéressant, c''est quand les deux divergent.
8. **Boîte d''alertes.** Vide la majeure partie de la journée. Remplie par un
   bot qui continue de travailler avec l''onglet fermé.

Un **écran** est une disposition de widgets. Un **workspace** en contient
plusieurs. Le canvas est libre — vous placez les choses où vous voulez, et les
groupes peuvent empiler des tuiles en mosaïques ou onglets — mais c''est un
canvas avec des bords, pas un plan infini où se perdre.

## Suivre une tuile jusqu''au bout

Chaque tuile de cet écran a les mêmes quatre couches en dessous. Prenez la
watchlist :

![Un chemin de gauche à droite : une connexion alimente du code généré, le code rend un widget dans une frontière sandbox en pointillés, et un fil transporte une valeur vers un graphique](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Une tuile, de haut en bas : une connexion, le code généré, le widget en cours d''exécution, et le fil qui en sort une valeur.")

1. **Une connexion.** L''un des 90 connecteurs live — ici, des données de marché
   publiques, qui ne demandent aucune credential. Les connexions sont de
   l''inventaire, pas de la configuration : vous en attachez une à un widget et
   le widget est reconstruit en sachant l''utiliser.
2. **Du code généré.** Vous avez décrit une watchlist ; un build en a écrit une.
   Elle a un historique de versions, et vous pouvez lire chaque tour de la
   conversation qui l''a produite.
3. **Le widget en cours d''exécution.** Il s''exécute en sandbox. Un widget qui
   dérape ruine sa propre tuile et rien d''autre sur l''écran — c''est la seule
   raison pour laquelle il est raisonnable d''exécuter du logiciel que vous
   n''avez pas lu.
4. **Un fil sortant.** La tuile émet quand vous cliquez sur une ligne. Seule,
   ça ne va nulle part. Ce qui en fait un cockpit plutôt que huit tuiles
   séparées, c''est la suite.

## Ce qui tient le tout, ce sont les fils, pas le code

![Un graphe des mêmes huit widgets numérotés, avec un fil bidirectionnel entre la watchlist et le graphique, des fils unidirectionnels vers les tuiles carnet d''ordres et funding, et une connexion, un bot et un agent attachés depuis la gauche](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Les mêmes huit tuiles en graphe. Les lignes pleines sont des fils entre widgets ; les pointillés, des attachements du reste de votre inventaire.")

Deux mécanismes se cachent derrière le seul mot *fil*, et la distinction
apparaît sur le diagramme en plein versus pointillé :

- **Widget à widget** est un **glue link** — du vrai code généré, avec son propre
  historique de versions, tournant dans son propre runtime caché, mappant ce
  qu''une tuile émet vers ce que l''autre attend. L''arc entre la watchlist et le
  graphique est bidirectionnel : changez le symbole dans l''un ou l''autre et
  les deux suivent. Les fils bidirectionnels feraient écho indéfiniment sans
  aide, donc une valeur livrée est mémorisée et le rebond identique est ignoré
  une fois.
- **Widget vers connexion, bot ou agent** est un **attachment** — un enregistrement
  de ce qu''un rebuild a appris au *propre* code du widget à faire. Ce sont les
  lignes pointillées. Échelonné plutôt qu''automatique, pour que parcourir cinq
  sources d''affilée coûte un rebuild au lieu de cinq.

Sur cet écran le câblage est délibérément fin : la watchlist pilote le graphique
dans les deux sens, et le carnet d''ordres et la tuile funding dans un seul.
Trois fils. Ajouter un quatrième pour la heatmap tentait et était faux — une
tuile qui change quand vous ne la regardiez pas est une tuile en laquelle vous
cessez de faire confiance.

L''éditeur de fils a une barre **Tester** exactement pour ça. Choisissez un topic
et une valeur, choisissez quelle extrémité simule l''émission, et envoyez un
événement réel dans le vrai runtime. Le verdict distingue *ce fil ne tourne
pas* de *il a tourné mais n''a rien transmis pour ce topic* de *transmis, mais
ce widget n''est pas à l''écran pour recevoir*. Avant que ça existe, un fil cassé
et un fil pointant vers un autre écran semblaient identiques : rien ne se
passait.

## Ce qui continue quand l''onglet est fermé

La tuile 8 est la seule qui n''est pas vraiment un widget au sens habituel.
C''est une boîte de réception, et ce qui la remplit est un **bot**.

Les bots sont délibérément peu glamour — un catalogue fixe de processeurs
(seuil, changement, croisement, RSI, pic de volume, digest, nouveau trade,
activité wallet, solde wallet) sur exactement trois types de choses : bougies de
marché, compte broker, adresse wallet publique. Pas de modèle dans la boucle,
c''est précisément pourquoi vous pouvez en laisser un tourner un mois. Quand l''un
se déclenche, il se répartit vers quatre endroits à la fois : la boîte
d''alertes, le bus de widgets (pour que la tuile 8 se mette à jour en direct),
un webhook, et une base de données connectée.

Les **agents** sont l''autre moitié, et la forme opposée : généralistes, avec
des grants par outil pour recherche web, social, données de marché, bases de
données, mémoire et plus, sur un trigger manuel ou de 15 minutes à quotidien.
Un agent, c''est ce que vous prenez quand la question est *« résume ce qui s''est
passé cette nuit »* plutôt que *« dis-moi quand ça croise ça »*. Les deux
alimentent la tuile 8 ; un seul est bon marché à laisser sans surveillance.

## Ce que cet écran ne fait délibérément pas

Il ne trade pas. Rien ici ne passe d''ordre — c''est un grant séparé, sur un
connecteur séparé, et le mettre sur le même écran qu''une heatmap que vous
jetez un œil, c''est comme arrivent les accidents.

Il ne détient pas de clé. Chaque source est publique : bougies, profondeur,
funding, marchés de prédiction, une adresse en lecture seule. Un bureau que vous
pouvez remettre à quelqu''un d''autre sans rien révoquer ensuite vaut plus qu''un
bureau avec deux tuiles en plus.

Et il n''est pas fini, parce que ce n''est pas un état qu''un écran atteint. La
version honnête de ce teardown, c''est que la disposition ci-dessus est la
quatrième ; les trois premières avaient plus de tuiles et disaient moins.

[Lancez Nexow](https://x.nexow.ai) et décrivez la première tuile. Les sept
autres sont plus faciles.
