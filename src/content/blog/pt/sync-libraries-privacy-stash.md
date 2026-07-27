---
title: 'Um workspace, todos os dispositivos: sync mais profundo, novas bibliotecas, um modo de privacidade mais esperto'
description: 'Os chats de widget agora te seguem ao vivo entre dispositivos, telas e workspaces têm bibliotecas próprias, rascunhos arquivados mantêm suas conversas, e o modo de privacidade guarda seu estado na nuvem em vez de perdê-lo.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['produto', 'sincronização', 'workspace']
---

Sync na nuvem costumava significar que seus widgets e layouts te seguiam. Este
lançamento faz o *resto* seguir também — conversas, bibliotecas, até o estado
das suas automações quando você entra e sai do modo de privacidade.

## Conversas sincronizam ao vivo

O chat de um widget é metade do seu valor: os prompts, as emendas, o
raciocínio. As threads de widget agora **se aplicam ao vivo entre
dispositivos** — deixe uma conversa no desktop, abra o laptop, e a thread está
lá, atual, sem refresh.

Por baixo do capô, os registros de widget foram divididos em documentos de
head, versão e chat, então uma conversa acelerada não arrasta mais payloads
inteiros de widget consigo. Você vai notar isso como um sync que acompanha o
ritmo.

## Bibliotecas para telas e workspaces

A biblioteca costumava guardar widgets. Agora ela tem abas para **telas** e
**workspaces** também — salve um layout inteiro uma vez, reutilize em qualquer
lugar, e ele sincroniza como todo o resto. Combinado com o marketplace, o
caminho de "minha tela favorita" até "ativo publicado" tem dois cliques.

O arquivamento também ficou mais gentil: um rascunho de widget arquivado
**mantém sua conversa**, e retomá-lo continua o chat de onde você parou — o
arquivo agora é uma prateleira, não um triturador. E se um registro de widget
ficar órfão por causa de uma operação interrompida, a biblioteca o encontra e
recupera em vez de deixá-lo vazar.

## Modo de privacidade: guardar, não destruir

A regra do Nexow é que a nuvem é opt-in — e você pode voltar atrás. Entrar no
**modo de privacidade** agora *guarda* seu estado do lado da nuvem: agents em
deploy e destinos de bots na nuvem são estacionados, não apagados. Saia do modo
de privacidade e eles são restaurados exatamente como estavam, destinos de
banco de dados incluídos. Ficar privado não é mais uma decisão que você paga
quando volta.

O próprio sync em tempo real agora também é uma preferência lembrada — desligue
uma vez e ele permanece desligado entre sessões até você dizer o contrário.

## Chato de propósito

O resto é trabalho que, com sorte, você nunca vai notar: os pushes de layout
são compare-and-set para que dois dispositivos não se sobrescrevam em silêncio,
um dispositivo ignora o eco das próprias escritas, e mudanças offline entram em
um diário de saída que é reproduzido quando você volta. Sync em que você não
pensa é a feature.

[Abra o Nexow](https://x.nexow.ai) em duas telas e veja um único workspace se
comportar como tal.
