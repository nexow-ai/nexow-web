---
title: 'Agents no ar: dê ao seu workspace um colega de equipe que roda na nuvem'
description: 'O harness builder era a promessa; o botão de deploy é a recompensa. Monte um agent com model, memory, skills, tools e triggers, faça o deploy na nuvem e acompanhe cada execução em uma timeline ao vivo.'
pubDate: 2026-07-27
heroImage: ../../../assets/blog/agents-live.svg
tags: ['produto', 'agentes', 'automação']
---

Há algumas semanas dissemos que os agents estavam chegando: IA com um harness
completo que vigia, raciocina e age por conta própria. Hoje eles chegaram. Você
pode montar um agent, entregar tools a ele, **fazer o deploy na nuvem** e vê-lo
trabalhar — em um cronograma, com a aba fechada.

Veja o que foi entregue.

## O harness, agora com botão de deploy

Um agent no Nexow é mais do que um prompt. Você o monta a partir de um
**harness** — model, memory, skills, tools, knowledge e triggers — em um builder
visual. Essa parte você talvez já tenha visto. A novidade é o último passo:
**Deploy**.

O deploy tira um snapshot do seu agent e o entrega ao runtime na nuvem do
Nexow. A partir daí ele roda no próprio heartbeat — a cada 15 minutos, de hora
em hora, diariamente, na cadência que você definir — sem o navegador aberto.
Você também pode cutucá-lo manualmente com **Run now** sempre que quiser uma
passada fora do cronograma.

## Tools são concedidas, não presumidas

Um agent só toca no que você deixa. Cada tool do harness é **liberada por
concessão**: você decide se ele pode ler suas conexões, publicar notificações,
escrever em widgets, e assim por diante. Sem concessão, sem acesso — o agent
literalmente não vê a tool.

Isso torna seguro dar a um agent um trabalho de verdade. Um bot te avisa que o
BTC caiu 5%; um agent pode ser instruído a *verificar o order book e o funding
rate quando isso acontecer, e escrever um resumo do que encontrou* — usando
exatamente o acesso que você autorizou.

## Memória entre execuções

Agents mantêm **memory** entre execuções. O que seu agent aprendeu na passada
de segunda ainda está lá na de terça — então ele pode acompanhar uma tese ao
longo do tempo, notar mudanças em vez de redescrever snapshots e pular trabalho
que já fez.

## Cada execução, registrada

Agents em deploy mantêm uma **timeline de execuções**: quando cada execução
começou, se terminou limpa, deu erro ou foi pulada, e o que aconteceu por
dentro — transmitido ao vivo enquanto a execução roda. Abra qualquer execução
para ler a conversa completa: o que o agent viu, quais tools chamou e o que
concluiu. Se um modelo upstream soluçar, isso também entra no histórico,
rotulado como o que é, não como um mistério.

Você segue no controle o tempo todo: **pause** um agent, **retome-o**, refaça o
deploy de um harness atualizado ou **desfaça o deploy** por completo. Seu plano
define quantos agents você pode manter em deploy ao mesmo tempo.

## Continua privado por padrão

O princípio não mudou: a nuvem é algo em que você opta. Montar um harness não
custa nada e não toca em servidor algum; o deploy é uma escolha explícita por
agent, e o modo de privacidade pausa as execuções na nuvem em vez de
continuá-las em silêncio.

Bots vigiam. Agents agem. [Abra o Nexow](https://x.nexow.ai), abra o painel
Agents e coloque seu primeiro colega de equipe no expediente.
