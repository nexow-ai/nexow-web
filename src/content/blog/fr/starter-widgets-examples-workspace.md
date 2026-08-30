---
title: 'Dix widgets d''exemple livrés avec Nexow — conversation incluse'
description: 'Un nouveau compte n''ouvre plus sur un canvas vide. Dix widgets finis arrivent dans un workspace Exemples, chacun avec le vrai chat qui l''a construit et son vrai historique de versions — construits par la même boucle de codegen que vous, sans rien de connecté.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['product', 'onboarding', 'widgets']
---

L''écran le plus difficile dans Nexow a toujours été le premier : un canvas
vide, une zone de prompt, et aucune preuve que tout cela fonctionne. Vous
pouviez lire la doc, ou taper quelque chose et espérer.

Avec la prochaine version, un nouveau compte démarre dans un **workspace
Exemples** — dix widgets finis sur trois écrans, tous opérationnels au premier
chargement, avec **rien de connecté**. Pas de captures, pas de visite guidée.
De vrais widgets que vous pouvez ouvrir, éditer, démonter et publier par-dessus.

## Contenu du pack

**Monde live** — une horloge mondiale avec anneau jour/nuit et barre de
chevauchement des heures ouvrées ; prévisions météo sur sept jours avec courbe
horaire ; tous les séismes de la dernière heure, journée ou semaine sur une carte
live, dimensionnés par magnitude ; et qualité de l''air live avec le polluant qui
pilote l''index.

**Marchés** — chandeliers Binance avec dernière bougie live et badge de variation
24h ; un convertisseur FX sur taux de référence BCE avec historique 90 jours ;
les questions Polymarket les plus actives et ce que croit la foule ; et tout
indicateur Banque mondiale, pour deux pays à la fois, en graphique long terme.

**Créer et jouer** — un tableau de notes adhésives qui survit aux rechargements
via un stockage durable par item, et le fil Wikipedia « en ce jour-là » avec
vignettes et sélecteur de date.

Chaque source est sans clé : Open-Meteo, USGS, données publiques Binance,
Frankfurter, Polymarket, Banque mondiale, Wikipedia. C''est une règle, pas un
hasard — un exemple qui s''ouvre sur « Connecter OANDA » vaut moins qu''un canvas
vide.

## Ils ont vraiment été construits, pas rédigés

Chaque exemple a commencé par un brief rédigé comme une personne le tape — ce
qu''elle veut et pourquoi, pas une spec. `starter:build` fait passer ces briefs
dans **`runWidgetToolLoop`** : le même module que la route codegen plateforme et
le chemin bring-your-own-key du navigateur pilotent tous deux, avec le même
contrat, les mêmes outils et le même vérificateur in-turn. Pas de stream HTTP,
pas de ledger de crédits, pas de navigateur — mais la même boucle.

La transcription que vous trouvez dans l''onglet chat d''un widget est donc la
vraie conversation, et chaque tour qui a produit du code est une vraie version
sur le rail. La plupart en portent trois. **Qualité de l''air en porte cinq**,
parce que les trois premiers l''ouvraient sur une boîte vide « entrez une ville »,
et le cinquième tour est un rapport de bug : six tuiles polluants affichant un
tiret, et un horodatage indiquant *« il y a -6375 min »*. Ce build est dans le
pack tel qu''il s''est produit.

Crucialement, les briefs tournent **sans providers attachés** — exactement ce
qu''a un nouveau compte. Tout ce qui sort de cette boucle fonctionne le premier
jour de quelqu''un.

## Pas un second catalogue

Chaque exemple est un actif marketplace ordinaire, publié par le compte officiel
via le même RPC que le travail de tout le monde : mêmes sanitizers, même graphe
de lignée, même chemin d''installation, même chaîne de royalties. Rien d''un
widget starter n''est traité à part côté serveur, délibérément — forkez-en un et
vous continuez une vraie lignée au lieu de découvrir que les exemples de l''app
vivent dans un dialecte privé.

Un registre de curation au-dessus ne garde que la curation : quels actifs
publiés composent le pack, dans quel ordre, sur quel écran. Les écritures sont
service-role only ; les lectures sont publiques, car un visiteur déconnecté peut
consulter une page de listing pour l''un d''eux.

## Où le pack atterrit, et ce qu''il ne fera pas

Le seeding est gated trois façons. Il s''exécute **une fois par compte, pas une
fois par appareil** — le flag est un réglage répliqué, relu au changement de
compte. Il ne seed jamais un canvas déjà utilisé. Et il peut être forcé depuis
**Paramètres → Général → Ajouter les widgets d''exemple**, pour les comptes
antérieurs au pack ou pour quiconque a supprimé le workspace et le veut de
retour.

Les exemples atterrissent *à côté* de votre propre workspace vide plutôt qu''à la
place, donc l''onboarding vous remet toujours un écran propre pour taper. Tout le
pack tient en un undo.

Chaque widget seedé est estampillé comme l''installation marketplace qu''il est
vraiment, donc l''améliorer et le publier continue la lignée officielle au lieu
de démarrer une copie rivale. Et quand nous livrons une meilleure version d''un
exemple, **les utilisateurs déjà seedés gardent la leur** — c''est leur widget
maintenant, peut-être édité. Pas de chemin push-update, et il ne devrait pas y en
avoir.

## Vérifié en pack, pas à l''œil

Avant qu''aucun n''atteigne un compte, tout le pack tourne dans du vrai Chrome et
est noté par widget : erreurs de boot, boucles d''animation incontrôlées, frames
lentes, rendus vides — plus une capture chacun. Un contrôle live séparé dérive
chaque endpoint public du code commité et confirme qu''il répond encore, pour que
le test ne vieillisse pas pendant que les widgets évoluent.

La barre pour un onzième est la même que pour ces dix : zéro connexion, un
verdict smoke propre, un vrai message plutôt qu''une tuile vide quand sa source de
données a un mauvais jour, et rien de personnel nulle part dans la conversation
— parce que la conversation part aussi.

Le pack part avec la prochaine version, et les comptes existants peuvent
l''importer depuis **Paramètres → Général** quand ils veulent. Ouvrez-en un,
lisez le chat qui l''a construit, puis changez quelque chose — c''est toujours la
façon la plus rapide d''apprendre ce que le canvas peut faire.

[Lancez Nexow](https://x.nexow.ai) et commencez à construire en attendant.
