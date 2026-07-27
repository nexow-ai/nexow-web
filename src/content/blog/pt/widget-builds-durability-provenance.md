---
title: 'Construção de widgets em que dá para confiar: builds duráveis, versões honestas, lint no chat'
description: 'O composer ganhou memória e consciência — builds sobrevivem a desconexões e têm retries limpos, cada versão registra de onde veio, e problemas de lint e de runtime aparecem no chat, não em um console.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['produto', 'widgets', 'ia']
---

Prompt-para-widget sempre foi a parte vistosa. Este lançamento é sobre a metade
sem glamour dessa promessa: o que acontece quando a rede cai no meio do build,
quando uma geração falha, quando você quer saber qual versão de um widget está
realmente olhando. A resposta, agora: nada se perde, e nada é reescrito pelas
suas costas.

## Builds que sobrevivem a você

Os builds de widget agora são **jobs duráveis**. Feche o laptop no meio da
geração, perca o Wi-Fi, dê refresh no pior momento — o build mantém sua reserva
no servidor e termina sem você. Se um turno falhar, um **Retry** fica ali
mesmo, e funciona até depois de uma desconexão deixar as coisas em um estado
estranho. Builds obsoletos não conseguem mais travar o composer.

Suas palavras são igualmente duráveis: um prompt não enviado no composer
persiste com o widget, então um refresh na hora errada não engole o parágrafo
que você estava prestes a mandar.

## Versões com proveniência

Cada versão de widget agora registra **de onde veio** — um prompt, uma emenda,
um salvamento manual — e edições criam versões novas em vez de reescrever as
antigas no lugar. A primeira versão de cada widget, sua **gênese**, nunca é
descartada: você sempre pode voltar ao que o primeiríssimo prompt produziu. E
quando um chip de versão no chat aponta para um histórico que foi descartado, o
chat diz isso em vez de fingir.

## O build te diz o que há de errado com ele

O código gerado é verificado, e os achados vão para onde você já está olhando:
**problemas de lint e de runtime aparecem no balão de chat do build**, como
parte da conversa. Corrija-os respondendo — os problemas são contexto que o
próximo turno já conhece.

O sandbox continuou rígido, e ficou ainda mais: widgets não podem fazer
chamadas de rede diretas — os dados vêm pelos conectores — e os assets que eles
podem carregar são fixados a origens conhecidas.

## Conversas mais ricas

O composer ganhou **anexos** — solte uma imagem no chat para mostrar à IA o que
você quer dizer — e **conexões fixadas**, para que a conversa de um widget
sempre saiba contra quais fontes de dados está construindo. Se você constrói
com sua própria chave de API, os outros dispositivos da sua conta veem o build
em andamento em vez de um misterioso estado ocupado.

Nada disso muda a sensação de construir: descreva, observe, refine. Muda o
quanto você pode confiar no que sai.

[Abra o Nexow](https://x.nexow.ai) e derrube sua conexão no meio de um build —
nós terminamos sem você.
