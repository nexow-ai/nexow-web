---
title: 'Des widgets qui vérifient leur propre plomberie : probe_url, un agent vérificateur et une réparation gratuite'
description: 'La plus grande source de widgets morts était du code écrit contre une API imaginée. Désormais le builder récupère l''endpoint pendant qu''il écrit, un vérificateur re-sonde ce qu''il a ignoré, et un crash dans les 45 premières secondes achète une correction automatique.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['product', 'ai', 'how-it-works']
---

La façon la plus courante dont un widget généré échouait n''était pas un bug dans
le code généré. C''était un endpoint qui n''a jamais existé.

Le modèle a pris une URL de mémoire — ou d''une ligne de répertoire dont le lien
est une *page de documentation*, pas un endpoint — a deviné la forme de la
réponse, a écrit du code de parsing soigné contre cette supposition, et a livré.
Vous obteniez un spinner éternel ou un graphique vide, sans rien à l''écran pour
dire pourquoi.

Cette version boucle la boucle trois fois : pendant que le modèle écrit, juste
après qu''il écrit, et une fois de plus si la chose crash encore devant vous.

## Pendant qu''il écrit : `probe_url`

Le builder a maintenant un outil qui **GET un endpoint public sans clé tout de
suite**, via le même proxy serveur que `ctx.data.http()` utilise au runtime, et
renvoie le vrai statut HTTP et le vrai corps de réponse.

Cette identité est tout le point. Un probe qui réussit *est* un appel runtime qui
réussit. Un probe qui échoue est un widget qui aurait été livré cassé — et il
échoue maintenant, tant qu''il reste un tour pour corriger, plutôt que sur votre
canvas.

Il est au bas d''une échelle que le builder est invité à parcourir plutôt qu''à
raisonner de mémoire : docs de référence du venue d''abord, puis un **répertoire
de 691 APIs publiques sans clé dans 47 catégories**, searchable par topic sur le
nom *et* la description de chaque entrée — parce que les vraies requêtes («
marées », « qualité de l''air ») mapent rarement sur une catégorie qu''on
devinerait. Ce répertoire est toujours disponible pour le builder maintenant, quel
que soit le scope, car c''est le fallback universel sans clé. Ses liens sont de
la documentation, donc la dernière étape est toujours la même : dériver
l''endpoint, puis le sonder.

« Y a-t-il des données pour X ? » est une question à laquelle on répond en
regardant, pas en raisonnant sur quels jeux de données existent probablement.
Atteindre le bas de l''échelle et dire *non* après avoir vraiment vérifié est un
bon résultat. L''affirmer de mémoire ne l''est pas, et c''était faux bien plus
souvent qu''il ne le semblait.

## Juste après qu''il écrit : le vérificateur

Demander au modèle de vérifier son propre travail est une requête, pas une
garantie. Donc au moment où le code du widget atterrit, deux choses se passent
qui ne dépendent pas de l''accord du modèle.

D''abord, le résultat de l''outil **nomme les endpoints qu''il n''a pas sondés ce
tour** et lui dit d''aller les vérifier tant qu''il reste des rounds.

Ensuite — et c''est la partie qui ne repose pas sur la coopération — un
vérificateur tourne **en parallèle avec le modèle qui écrit son résumé**, et fait
le travail lui-même :

- **Lint du module** pour les classes d''échec silencieuses par construction. Un
  export `render` manquant. Du code qui ne parse pas. Un `fetch` ou `WebSocket`
  brut vers un host tiers, que le sandbox bloque — l''échec silencieux le plus
  dommageable dans les widgets générés, car rien n''apparaît dans la console. Une
  URL d''image ou vidéo externe assignée directement à un `src`. Une URL de tuile
  hardcodée passée à une lib de cartes, qui monte et pan parfaitement pendant que
  chaque requête de tuile est refusée discrètement.
- **Sonder chaque endpoint que le modèle a ignoré** (jusqu''à cinq par module),
  et lire le verdict comme le ferait le modèle : injoignable, ou un 4xx qui dit
  que l''URL ou ses paramètres sont faux.

Les vrais problèmes achètent **un round de réparation automatique in-turn**, avec
la sortie du probe en pièce jointe comme preuve et l''instruction de ne corriger
que ce qui a été nommé. Ce round arrive tant que le contexte complet du build est
encore chaud — bien moins cher que livrer cassé et dépenser un tour entier après.
Si le modèle réécrit le module en vol, la vérification déjà en cours est
supplantée et son verdict jeté. Et un vérificateur qui échoue en interne
vérifie clean : il peut retarder un build, jamais en casser un.

## S''il crash encore : une réparation, strictement bornée

Le contexte d''auto-réparation alimentait déjà les erreurs runtime dans le *prochain*
tour de chat — mais seulement quand vous en envoyiez un. Un widget qui crashait
quelques secondes après son build restait cassé jusqu''à ce que vous le remarquiez,
rouvriez le composeur et tapiez « c''est cassé ».

Maintenant l''hôte runtime dépense **un tour de fix automatique** quand un build
frais crash. Un tour automatique, c''est l''app qui dépense vos crédits ou votre
clé, donc les bornes sont délibérément serrées :

- seulement la version qu''un build IA vient *de* produire — un crash dans une
  ancienne version que vous avez restaurée, ou dans du code édité à la main, ne
  qualifie jamais ;
- seulement dans les **45 secondes** suivant ce build, car un crash une heure
  après est une nouvelle information pour vous, pas un défaut évident de build ;
- **une fois par version**, et une version produite *par* un tour d''auto-réparation
  est elle-même inéligible. Un build peut déclencher au plus un suivi automatique
  — jamais une chaîne du modèle se payant pour continuer à échouer.

Le tour de réparation est formulé comme l''app signalant un défaut, et porte la
même instruction que tout ce qui précède : si l''échec implique un endpoint de
données, le sonder avant de réécrire. Corrigez, gardez ce qui marche, n''élargissez
pas le scope du widget.

Côté serveur, un build background sauvé attend maintenant quand un autre tour du
même widget est déjà live, au lieu de le racer vers une version dupliquée.

## Même boucle, tous les modes

Tout cela vit dans un module partagé, donc builds plateforme, builds
bring-your-own-key dans le navigateur, et sweep de builds serveur ont un
comportement **identique** — mêmes outils, même formatage de probe, même
vérificateur, même budget de réparation. Les modes ne peuvent pas diverger sur
quels outils existent ou à quel point un widget est vérifié strictement, car il
n''y a qu''une implémentation de la réponse. C''est aussi la boucle qui a produit
[les dix widgets d''exemple](/blog/starter-widgets-examples-workspace) livrés avec
la prochaine version : construits exactement par ceci, avec exactement ces
contrôles.

Rien de tout cela ne rend un modèle correct. Ça rend l''erreur survivable, et
souvent invisible : l''endpoint est vérifié avant que le code en dépende, le
contrôle tourne que le modèle ait envie de le lancer ou non, et le premier crash
a une tentative honnête de fix avant d''atteindre vous.

[Lancez Nexow](https://x.nexow.ai) et demandez quelque chose d''obscur — marées,
qualité de l''air, jours fériés. Regardez le rail d''activité sonder l''endpoint
avant d''écrire une ligne de code de parsing.
