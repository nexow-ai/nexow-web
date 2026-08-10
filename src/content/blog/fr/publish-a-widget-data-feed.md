---
title: 'Publiez un flux de données : faites tourner votre widget sans votre clé'
description: 'Un widget bâti sur votre connexion Binance ou OANDA était inutilisable par quiconque d''autre. Vous pouvez désormais publier exactement les lectures qu''il effectue, sous forme d''endpoint en lecture seule et mis en cache, sous votre propre profil — sans partager de clé, sans proxy ouvert.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['product', 'widgets', 'data']
---

Le partage avait un trou gênant. Vous construisez un superbe graphique FX sur
votre connexion OANDA, vous le publiez, et la première personne qui l'installe voit
*Connectez OANDA pour utiliser ces données* — une façon polie de demander à un
inconnu d'ouvrir un compte chez un courtier pour regarder un graphique. Partagé sur
un écran en direct, c'était pire encore : le widget se figeait en vignette.

La solution n'est pas de prêter votre clé. C'est de publier **les lectures que
votre widget effectue réellement**, comme des endpoints à part entière, sous votre
propre profil :

```
GET /<utilisateur>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Cela s'active depuis la boîte de dialogue de publication — *Publier un flux de
données en lecture seule* — et les personnes sans connexion propre lisent votre
flux au lieu qu'on leur demande de se connecter.

## Trois règles, et chacune est un refus

**Seulement les lectures qu'il est sûr de partager.** Treize méthodes de données
peuvent être publiées. Les autres sont bloquées, chacune pour sa raison : `account`
et `positions` sont aussi des lectures, mais elles renvoient votre solde, votre
valeur nette, votre P&L et vos positions ouvertes. `order` et `closePosition`
déplacent de l'argent. `upsert` et `delete` détruisent des données. `scrape`
facture un tiers à l'appel. Et `http` tout court est déjà sans identifiants : le
publier ne construirait qu'un proxy ouvert à votre nom.

**Seulement les appels que le widget a vraiment faits.** Les lectures réussies de
votre widget sont enregistrées pendant qu'il tourne, et la boîte de dialogue vous
montre la liste — *bougies depuis Binance — BTCUSDT, 1h* — comme la chose concrète
que vous acceptez. Une requête réclamant un paramètre que vous n'avez jamais publié,
ou une valeur hors de l'ensemble auquel vous l'avez élargi, est refusée avant que
quoi que ce soit ne soit déchiffré. Les paramètres qui n'ont rien à faire dans une
URL — une requête SQL, un vecteur — n'y apparaissent jamais : ils sont rejoués tels
quels depuis le stockage.

**Les refus sont indiscernables.** Un endpoint inexistant, un paramètre hors de sa
liste et une audience à laquelle vous n'appartenez pas renvoient tous le même 404.
Savoir qu'un flux réservé aux amis existe est déjà une information sur l'auteur : la
réponse ne la laisse jamais fuiter.

## Qui peut le lire, et ce que ça vous coûte

L'audience n'est pas un quatrième réglage à oublier : elle **suit la publication
d'annonce** — tout le monde, vos abonnés ou vos amis. Une annonce privée désactive
entièrement le flux, parce qu'une annonce que vous seul pouvez voir adossée à un
endpoint que d'autres appellent n'a aucun sens.

Le coût est la partie qui mérite d'être comprise, parce que c'est celle qui fait
peur. Vous choisissez un intervalle de rafraîchissement — toutes les 30 secondes, 5
minutes, toutes les heures ou tous les jours — et c'est le **maximum** d'usage de
votre connexion, quel que soit le nombre de personnes qui ouvrent le widget. Les
lecteurs partagent une seule copie en cache. Dix spectateurs ou dix mille font le
même nombre d'appels, et un seul rafraîchissement par fenêtre est autorisé même si
plusieurs manquent le cache au même instant.

Votre clé ne quitte jamais le serveur. Votre solde, vos positions et vos ordres ne
sont jamais publiés. Et le flux est lié à la fiche : retirez le widget du listing et
les endpoints cessent de servir.

## La connexion du lecteur gagne toujours

Un flux publié est un repli, jamais un substitut. Si la personne qui ouvre votre
widget a sa propre connexion OANDA, le widget utilise **la sienne** : son compte,
ses données, ses limites. Le flux n'est consulté qu'après l'échec du widget à
trouver une connexion à lui, et un échec est silencieux : elle voit le message
habituel *connectez ce venue* plutôt qu'une nouvelle erreur à apprendre.

Ces endpoints passent par les mêmes adaptateurs de venue que l'app embarque déjà,
si bien qu'un flux publié renvoie des formes identiques à ce que vous voyiez en
construisant le widget — sur tous les venues actifs du catalogue, sans code
spécifique à aucun.

## Ce qu'il ne fera délibérément pas

- **Un tableau de trading partagé affiche son graphique, pas son panneau de
  compte.** C'est la liste des méthodes bloquées qui fait son travail, pas un bug.
- **Un sélecteur de symboles n'offre que les symboles que vous avez énumérés.** Un
  widget à saisie libre se rabat sur un ensemble fixe. C'est le prix à payer pour ne
  pas construire un proxy ouvert vers votre courtier.
- **En mode privé, on ne peut pas publier de flux.** En mode privé vos identifiants
  ne vivent que dans le scellé de cet appareil : aucun serveur ne les détient, donc
  aucun ne peut rafraîchir quoi que ce soit à votre place.
- **Un fork n'hérite pas du flux.** Les flux sont liés au lignage du widget : chaque
  copie installée résout les mêmes endpoints, et un fork n'en résout aucun.

C'est peu de chose à activer, et cela change ce que publier veut dire : un widget que
vous partagez est désormais un widget que les gens peuvent réellement faire tourner.

[Lancez Nexow](https://x.nexow.ai), ouvrez un widget bâti sur une connexion à clé, et
publiez-le avec le flux activé.
