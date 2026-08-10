---
title: 'Enregistrez votre tableau de bord, bulle caméra comprise'
description: 'L''enregistrement d''écran est intégré à la barre d''outils : jusqu''à dix minutes de votre toile avec votre webcam incrustée en bulle déplaçable, une barre de contrôle flottante, et une décision — enregistrer, partager, publier — quand vous arrêtez.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['product', 'capture', 'community']
---

Vous construisez quelque chose de bien et vous voulez le montrer — en mouvement,
pas en capture d'écran. Jusqu'ici cela voulait dire quitter l'app, trouver un
enregistreur séparé, cadrer une fenêtre de navigateur et espérer que le résultat
soit regardable. C'est maintenant un bouton dans la barre d'outils.

**Capturer le tableau de bord** propose deux choses : une **capture d'écran**,
recadrable avant enregistrement, ou **enregistrer une vidéo** — votre toile, en
direct, jusqu'à ce que vous arrêtiez ou atteigniez dix minutes.

## Ce qui entre dans la prise

Trois interrupteurs, décidés avant de commencer :

- **Bulle caméra** — votre webcam, incrustée dans la vidéo en cercle
- **Microphone** — votre narration
- **Audio de l'onglet** — ce que la page elle-même joue

La bulle caméra n'est pas figée dans un coin. **Déplacez-la où vous voulez** : elle
s'aimante au coin le plus proche au moment où vous lâchez, à la taille que vous avez
choisie. Elle fait partie de la vidéo, pas d'une surcouche ajoutée après coup : ce
que vous cadrez est ce que le fichier contient.

Pendant l'enregistrement, une **barre de contrôle** flottante reste à l'écart et
fait les quatre choses dont vous avez réellement besoin en cours de route : mettre
en pause et reprendre, couper le micro, couper l'audio de l'onglet, masquer ou
déplacer la bulle caméra — et arrêter. Un chronomètre tourne en permanence, et
prévient à l'approche du plafond de dix minutes au lieu de s'interrompre sans
explication.

## Puis une décision, pas un téléchargement

À l'arrêt, la prise s'ouvre dans un écran de revue avec la vidéo et quatre choix :
**Enregistrer**, **Partager**, **Publier**, **Supprimer**.

Publier l'envoie au fil de la communauté, et c'est le seul choix limité : une prise
de dix minutes peut dépasser ce que les envois du fil autorisent. Dans ce cas,
Publier est **désactivé et explique pourquoi**, maximum à l'appui, tandis
qu'Enregistrer et Partager restent disponibles puisque ni l'un ni l'autre
n'approche ce plafond. Un bouton grisé qui vous donne le chiffre vaut mieux qu'un
bouton qui échoue une fois la barre de progression remplie.

## Les parties ingrates qui font un bon fichier

L'essentiel du travail d'un enregistreur d'écran est invisible quand il fonctionne :

- **L'image est toujours composée sur une toile de taille fixe**, même sans bulle
  caméra. La résolution d'une capture d'onglet suit la fenêtre : un seul
  redimensionnement en cours de prise renégocierait la piste vidéo, et les fichiers
  contenant un changement de résolution sont cassés dans la plupart des lecteurs.
  Fixer la taille une fois au départ, c'est ce qui donne un encodage unique et
  propre : 1080p à 30 ips, retombant en 720p quand le navigateur fournit malgré tout
  une surface plein écran.
- **Le conteneur est choisi à l'exécution, pas supposé.** Firefox enregistre en
  WebM, Safari en MP4, et Chromium a livré les deux selon les versions.
  L'enregistreur essaie MP4 d'abord — c'est le fichier qui se lit partout où vous
  l'emmènerez ensuite —, descend vers WebM s'il le faut, et nomme le fichier d'après
  ce que le navigateur a réellement utilisé, pas d'après ce qu'on lui a demandé.
- **Les images sont cadencées indépendamment de la page.** Un onglet en
  arrière-plan bride l'animation mais pas l'audio : c'est exactement ainsi qu'on
  obtient une image figée sur une narration qui continue. Si l'onglet était masqué
  pendant la prise, l'écran de revue le dit, plutôt que de vous laisser le découvrir
  plus tard.
- **Toutes les pistes sont arrêtées sur chaque sortie**, y compris un échec en plein
  démarrage. Un voyant de caméra resté allumé, c'est une app qui a l'air de vous
  surveiller, et il n'existe pas de version acceptable de cela.

Les erreurs sont honnêtes dans les deux sens. Fermer le sélecteur du navigateur
n'est pas une erreur et reste silencieux : vous n'avez rien partagé, et une
notification serait du bruit. Mais une source qui n'envoie aucune image déclenche un
avertissement avant que vous ne narriez cinq minutes sur un rectangle gris, et un
navigateur incapable d'encoder de la vidéo le dit au lieu de produire un fichier
vide.

## La suite : enregistrer un seul widget

La prochaine mise à jour apporte la version plus petite et plus précise de tout
ceci : un **bouton caméra dans l'en-tête d'un widget** qui enregistre *seulement ce
widget* — recadré sur son corps, de sorte que l'en-tête où siège le bouton, et la
barre de contrôle, restent hors du cadre. L'indicateur d'enregistrement peut rester
là pendant que vous enregistrez sans apparaître dans la vidéo.

C'est bâti sur Region Capture, aujourd'hui une capacité de Chromium sur bureau : le
bouton n'apparaît donc que là où il peut tenir sa promesse, plutôt que de proposer
quelque chose dont il devrait s'excuser. Il suit le widget si vous le déplacez, et
s'arrête proprement si le widget quitte l'écran.

Entre les deux, « voilà ce que j'ai construit » cesse d'être une capture et un
paragraphe.

[Lancez Nexow](https://x.nexow.ai), trouvez **Capturer le tableau de bord** dans la
barre d'outils, et enregistrez votre toile.
