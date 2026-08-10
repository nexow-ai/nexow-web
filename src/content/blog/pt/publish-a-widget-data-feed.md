---
title: 'Publica um feed de dados: deixa outros usarem o teu widget sem a tua chave'
description: 'Um widget construído sobre a tua ligação à Binance ou à OANDA não servia a mais ninguém. Agora podes publicar exatamente as leituras que ele faz como um endpoint só de leitura e em cache, sob o teu próprio perfil — sem partilhar a chave e sem abrir um proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['produto', 'widgets', 'dados']
---

Havia uma lacuna incómoda na partilha. Constróis um gráfico de FX bonito sobre a tua
ligação à OANDA, publica-lo, e a primeira pessoa que o instala lê *Liga a OANDA para
usar estes dados* — uma forma educada de pedir a um desconhecido que abra uma conta
de corretora para olhar para um gráfico. Partilhado numa tela ao vivo era pior
ainda: o widget congelava numa miniatura.

A solução não é emprestar a tua chave a ninguém. É publicar **as leituras que o teu
widget faz de verdade**, como endpoints próprios, sob o teu próprio perfil:

```
GET /<utilizador>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Ativa-se na janela de publicação — *Publicar um feed de dados só de leitura* — e quem
não tiver ligação própria lê o teu feed em vez de lhe ser pedido que se ligue.

## Três regras, e cada uma é uma recusa

**Só leituras que seja seguro partilhar.** Treze métodos de dados podem ser
publicados. Os restantes estão bloqueados, cada um pela sua razão: `account` e
`positions` também são leituras, mas devolvem o teu saldo, o teu património, o teu
P&L e as tuas posições abertas. `order` e `closePosition` movem dinheiro. `upsert` e
`delete` destroem dados. `scrape` cobra a um terceiro por chamada. E `http` sozinho
já não leva credenciais: publicá-lo apenas construiria um proxy aberto com o teu
nome.

**Só as chamadas que o widget realmente fez.** As leituras bem-sucedidas do teu
widget são registadas enquanto ele corre, e a janela de publicação mostra-te a lista
— *velas da Binance — BTCUSDT, 1h* — como a coisa concreta que estás a aceitar. Um
pedido que exija um parâmetro que nunca publicaste, ou um valor fora do conjunto a
que o alargaste, é recusado antes de se decifrar seja o que for. Os parâmetros que
não deviam estar num URL — uma consulta SQL, um vetor — nunca lá aparecem: são
reproduzidos tal e qual a partir do armazenamento.

**As recusas são indistinguíveis.** Um endpoint que não existe, um parâmetro fora da
lista e uma audiência a que não pertences devolvem todos o mesmo 404. Saber se
existe um feed só para amigos já é informação sobre o autor: a resposta nunca a
deixa escapar.

## Quem o pode ler, e o que te custa

A audiência não é um quarto interruptor para esquecer: **segue a publicação de
anúncio** — toda a gente, os teus seguidores ou os teus amigos. Um anúncio privado
desativa o feed por completo, porque um anúncio que só tu podes ver a sustentar um
endpoint que outros chamam não faz sentido.

O custo é a parte que vale a pena perceber, porque é a que mete medo. Escolhes um
intervalo de atualização — a cada 30 segundos, 5 minutos, de hora a hora ou
diariamente — e esse é o **máximo** de uso da tua ligação, por muita gente que abra
o widget. Quem lê partilha uma única cópia em cache. Dez espectadores e dez mil
fazem o mesmo número de chamadas, e só é permitida uma atualização por janela mesmo
que vários falhem a cache no mesmo instante.

A tua chave nunca sai do servidor. O teu saldo, as tuas posições e as tuas ordens
nunca são publicados. E o feed está preso à ficha: retira o widget da listagem e os
endpoints deixam de servir.

## A ligação de quem vê ganha sempre

Um feed publicado é um recurso de reserva, nunca um substituto. Se quem abre o teu
widget tiver a própria ligação à OANDA, o widget usa **a dela**: a conta dela, os
dados dela, os limites dela. O feed só é consultado depois de o widget não ter
encontrado uma ligação própria, e uma falha é silenciosa: a pessoa vê a mensagem
habitual de *liga este venue* em vez de um erro novo para aprender.

Esses endpoints passam pelos mesmos adaptadores de venue que a app já traz, por isso
um feed publicado devolve formas idênticas às que viste ao construir o widget — em
todos os venues ativos do catálogo e sem código dedicado a nenhum.

## O que não faz, de propósito

- **Um painel de trading partilhado desenha o gráfico, não o painel de conta.** É a
  lista de bloqueados a fazer o seu trabalho, não uma falha.
- **Um seletor de símbolos só oferece os que enumeraste.** Um widget com entrada
  livre passa a um conjunto fixo. É o preço de não construir um proxy aberto para a
  tua corretora.
- **Em modo privado não se pode publicar um feed.** Em modo privado as tuas
  credenciais vivem só no selo deste dispositivo: nenhum servidor as tem, logo
  nenhum pode atualizar nada por ti.
- **Um fork não herda o feed.** Os feeds estão presos à linhagem do widget: cada
  cópia instalada resolve os mesmos endpoints e um fork não resolve nenhum.

É pouca coisa para ativar, e muda o que significa publicar: um widget que partilhas é
agora um widget que as pessoas podem realmente usar.

[Abre o Nexow](https://x.nexow.ai), pega num widget que tenhas construído sobre uma
ligação com chave e publica-o com o feed ligado.
