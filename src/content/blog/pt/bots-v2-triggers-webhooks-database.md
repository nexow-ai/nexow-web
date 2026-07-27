---
title: 'Bots v2: gatilhos de RSI e volume, entrega em webhook e banco de dados, e um builder mais arrumado'
description: 'Os bots na nuvem aprenderam truques novos — condições de RSI e picos de volume, vigias de trades, sinais que fazem POST nos seus webhooks ou acrescentam linhas ao seu banco de dados, e um builder dividido em My bots e Create.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['produto', 'automação', 'bots']
---

Quando os bots foram lançados, eles vigiavam thresholds, variações percentuais,
crossovers e digests, e disparavam sinais para o seu canvas. Esse núcleo não
mudou. Ao redor dele, quase tudo ficou mais profundo: mais condições para
disparar, mais lugares para os sinais chegarem e um builder que fica fora do
seu caminho.

## Novas condições para disparar

O catálogo de processors cresceu. Ao lado de thresholds, % change e
moving-average crossovers, os bots agora avaliam:

- **RSI** — dispare quando o momentum cruza para território de sobrecompra ou
  sobrevenda
- **Picos de volume** — capture atividade incomum à qual o preço ainda não
  reagiu
- **Novos trades** — dispare em execuções recentes de uma conta conectada
- **Atividade e saldo de carteira** — vigie endereços on-chain, como contamos
  no [post sobre carteiras](/pt/blog/wallets-on-the-canvas)

Como sempre: descreva a regra em uma frase e deixe a IA rascunhar o bot, ou
monte visualmente e ajuste cada parâmetro você mesmo.

## Sinais vão aonde você trabalha

O sinal de um bot costumava chegar à sua caixa de entrada e aos seus widgets.
Dois novos destinos mudam para que servem os bots:

- **Webhooks** — faça POST de cada sinal para uma URL que você indicar. Isso é
  Discord, Slack ou Telegram via suas URLs de webhook, ou o seu próprio
  servidor. Seu bot vira um produtor que qualquer sistema pode consumir.
- **Seu banco de dados** — acrescente cada sinal como uma linha em um dos seus
  bancos de dados conectados. Deixe um bot rodando por um mês e você tem um log
  consultável de cada disparo, pronto para um widget transformar em gráfico.

A entrega é um conjunto, não uma escolha — um mesmo bot pode te notificar,
atualizar seus widgets, pingar o Discord e escrever a linha, tudo a partir do
mesmo gatilho.

## My bots e Create, finalmente separados

O painel de bots agora separa **My bots** — sua frota em execução, com status à
primeira vista — de **Create**, onde novos bots tomam forma. O próprio
formulário ficou mais leve: seções opcionais permanecem recolhidas até você
precisar delas, então um alerta simples de threshold leva segundos, enquanto
toda a profundidade continua a um clique de distância.

## Rascunhos nascem seguros

Um detalhe deliberado: quando a IA rascunha um bot para você, o destino de
webhook começa **vazio**. Uma automação gerada nunca sai com um destino que
você não digitou — você decide para onde os sinais vão, explicitamente, todas
as vezes.

[Abra o Nexow](https://x.nexow.ai), abra Bots e dê ao seu próximo alerta um
lugar melhor para chegar do que uma caixa de entrada.
