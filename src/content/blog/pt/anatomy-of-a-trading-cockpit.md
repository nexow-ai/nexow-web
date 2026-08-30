---
title: 'Anatomia de um cockpit de trading: um ecrã, oito widgets e o que alimenta cada um'
description: 'Uma mesa de referência desmontada mosaico a mosaico — o que é cada widget, que ligação o alimenta, que fios os unem e o que continua a correr com o separador fechado. Menos nota de versão do que mapa.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['desmontagem', 'workspace', 'cripto']
category: teardown
---

A maior parte do que publicamos aqui é uma nota de versão: algo foi lançado, eis
o que faz. Este artigo é de outro tipo. Nada abaixo é novo. É um ecrã terminado,
desmontado, para ver como as peças que enviamos separadamente se encaixam de
verdade.

A mesa é um cockpit de cripto — oito widgets num ecrã, construídos com dados de
mercado públicos, sem chaves em lado nenhum. Nada é especial. Esse é o ponto:
cada parte é algo que pode reconstruir descrevendo-a.

## O ecrã

![Um ecrã com oito mosaicos de widgets, cada um marcado com um número de um a oito](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "A mesa completa. Um ecrã, oito widgets, dispostos no canvas livre — os números correspondem à lista abaixo.")

1. **Velas.** O mosaico âncora. Um símbolo, um intervalo, uma última vela em
   direto. Tudo o resto no ecrã alimenta-o ou segue-o.
2. **Profundidade do order book.** Bids e asks em barras empilhadas, para um
   livro fino ser visível e não inferido.
3. **Watchlist.** Um punhado de símbolos, um selecionado. Este mosaico é o volante
   do ecrã — mais abaixo.
4. **Saldos de wallet.** Um endereço público, só leitura, via ligação wallet. Sem
   assinatura, sem chaves, nada a aprovar.
5. **Funding rates.** Funding de perps nas últimas janelas, positivo e negativo
   de cada lado de uma linha zero.
6. **Heatmap.** O mesmo universo da watchlist, dimensionado e sombreado, para
   olhar de relance em vez de ler.
7. **Mercados de previsão.** O que a multidão está a precificar, junto ao que o
   order book precifica. O interessante é quando os dois divergem.
8. **Caixa de alertas.** Vazia a maior parte do dia. Preenchida por um bot que
   continua a trabalhar com o separador fechado.

Um **ecrã** é uma disposição de widgets. Um **workspace** contém vários. O canvas
é livre — coloca as coisas onde quer, e os grupos podem empilhar mosaicos em
mosaicos ou separadores — mas é um canvas com bordas, não um plano infinito onde
se perder.

## Seguir um mosaico até ao fundo

Cada mosaico nesse ecrã tem as mesmas quatro camadas por baixo. Veja a watchlist:

![Um percurso da esquerda para a direita: uma ligação alimenta código gerado, o código renderiza um widget dentro de um limite sandbox tracejado, e um fio transporta um valor para um gráfico](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Um mosaico, de cima a baixo: uma ligação, o código gerado, o widget em execução e o fio que tira um valor dele.")

1. **Uma ligação.** Um dos 90 conectores em direto — aqui, dados de mercado
   públicos, que não precisam de credenciais. As ligações são inventário, não
   configuração: anexa uma a um widget e o widget é reconstruído sabendo usá-la.
2. **Código gerado.** Descreveu uma watchlist; um build escreveu uma. Tem
   histórico de versões, e pode ler cada turno da conversa que a produziu.
3. **O widget em execução.** Executa em sandbox. Um widget que se comporta mal
   estraga o seu mosaico e nada mais no ecrã — a única razão para executar
   software que não leu.
4. **Um fio de saída.** O mosaico emite quando clica numa linha. Sozinho não vai
   a lado nenhum. O que o torna cockpit e não oito mosaicos separados é a parte
   seguinte.

## O que o mantém unido são fios, não código

![Um grafo dos mesmos oito widgets numerados, com um fio bidirecional entre watchlist e gráfico, fios unidirecionais para order book e funding, e uma ligação, um bot e um agente anexados da esquerda](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Os mesmos oito mosaicos como grafo. Linhas sólidas são fios entre widgets; tracejadas são anexos do resto do inventário.")

Dois mecanismos estão por trás da palavra *fio*, e a distinção aparece no diagrama
como sólido versus tracejado:

- **Widget a widget** é um **glue link** — código gerado real, com histórico de
  versões, em runtime oculto, mapeando o que um mosaico emite para o que o outro
  espera. O arco entre watchlist e gráfico é bidirecional: mude o símbolo em
  qualquer um e ambos seguem. Fios bidirecionais fariam eco para sempre sem
  ajuda, por isso um valor entregue é memorizado e o rebote idêntico é descartado
  uma vez.
- **Widget a ligação, bot ou agente** é um **attachment** — registo do que um
  rebuild ensinou ao *próprio* código do widget. São as linhas tracejadas.
  Escalonado, não automático — explorar cinco fontes seguidas custa um rebuild,
  não cinco.

Neste ecrã a fiação é deliberadamente fina: a watchlist conduz o gráfico nos
dois sentidos, e o order book e o mosaico de funding num só. Três fios. Um quarto
para o heatmap tentava e estava errado — um mosaico que muda quando não olhava é
um em que deixa de confiar.

O editor de fios tem uma barra **Testar** para isto. Escolha tópico e valor,
escolha que extremo simula emitir, e envie um evento real pelo runtime real. O
veredito distingue *este fio não está a correr* de *correu mas não reencaminhou
nada para esse tópico* de *reencaminhou, mas esse widget não está no ecrã para
receber*.

## O que continua com o separador fechado

O mosaico 8 é o único que não é realmente um widget no sentido usual. É uma caixa
de entrada, preenchida por um **bot**.

Bots são deliberadamente sóbrios — catálogo fixo de processadores (limiar, mudança,
crossover, RSI, pico de volume, digest, nova operação, atividade wallet, saldo
wallet) sobre três tipos de coisas: velas de mercado, conta de broker, endereço
wallet público. Sem modelo no loop — pode deixar um a correr um mês. Quando um
dispara, distribui-se a quatro sítios: caixa de alertas, bus de widgets, webhook
e base de dados ligada.

**Agentes** são a outra metade: generalistas, com grants por ferramenta para web,
social, mercado, bases de dados, memória e mais, com trigger manual ou de 15
minutos a diário. Um agente é para *« resumir o que aconteceu durante a noite »*
e não *« avisar quando isto cruza aquilo »*. Ambos alimentam o mosaico 8; só um
é barato de deixar sem vigilância.

## O que este ecrã deliberadamente não faz

Não opera. Nada aqui coloca ordens — grant separado, conector separado. Não guarda
chave. Cada fonte é pública. Uma mesa que pode entregar a outra pessoa sem revogar
nada vale mais que uma com dois mosaicos extra. E não está terminada — o layout
acima é o quarto; os três primeiros tinham mais mosaicos e diziam menos.

[Lance o Nexow](https://x.nexow.ai) e descreva o primeiro mosaico. Os outros sete
são mais fáceis.
