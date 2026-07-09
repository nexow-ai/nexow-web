---
title: 'Do prompt ao widget ao vivo: como o Nexow transforma uma frase em um dashboard de trading'
description: 'Um olhar por baixo do capô de como o Nexow gera um widget de mercado em execução e conectado a dados a partir de um prompt em linguagem natural — geração de código, sandboxing e conectores ao vivo explicados.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['produto', 'ia', 'como-funciona']
---

Construir um dashboard de trading sempre significou o mesmo trabalho: encontrar uma
API, ler a documentação, lidar com websocket, normalizar o payload, escolher uma
biblioteca de gráficos, lutar com o layout e repetir para cada instrumento que
importa. O Nexow colapsa todo esse ciclo em uma frase.

Veja o que realmente acontece entre digitar um prompt e ver um widget ao vivo
aparecer no seu canvas.

## 1. Você descreve o que quer ver

Um prompt é apenas linguagem natural:

> Mostre um gráfico de velas de BTC-USD da Coinbase com EMA 20 e 50, e um painel
> de RSI abaixo.

Não há schema para aprender nem arquivo de configuração. Você descreve o resultado —
o instrumento, o venue, os indicadores, o layout — do jeito que descreveria para um
colega.

## 2. O Nexow gera o código-fonte do widget

O Nexow envia seu prompt aos modelos Claude da Anthropic pelo Anthropic SDK, junto
com o contexto necessário: quais conectores estão disponíveis, o formato dos dados
que retornam e o contrato de runtime que um widget deve satisfazer. O Claude escreve
o código-fonte real do widget — a lógica de fetch, as transformações e a
renderização.

Como o modelo escreve código real em vez de preencher um template fixo, o alcance do
que você pode construir é aberto: gráficos de profundidade do order book, heatmaps
de funding rate, matrizes de correlação, sinais customizados, tabelas simples. Se
você consegue descrever, o Nexow geralmente consegue construir.

## 3. O widget roda em sandbox

Código gerado é poderoso, então roda atrás de um limite rigoroso. Cada widget
executa dentro de um iframe isolado: pode renderizar sua UI e buscar os dados de
que precisa, mas não pode acessar seu workspace, ler outros widgets ou tocar em
qualquer coisa que não recebeu. Poder sem o risco.

## 4. Dados ao vivo entram pelos conectores

Um widget só é útil com dados reais. O Nexow oferece mais de 20 conectores
plugáveis cobrindo FX, cripto, ações, futuros, opções e mercados de predição —
OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi, Polymarket
e mais. O widget assina o venue que você nomeou, e preços, order books e dados de
referência chegam direto.

Onde a política de CORS de um venue permite, essas chamadas rodam **diretamente do
seu navegador** e nunca passam pelos nossos servidores — o que mantém a latência
baixa e suas credenciais na sua máquina.

## 5. Você refina em linguagem natural

A primeira geração raramente é a última. Tudo permanece editável por conversa:
*"adicione uma EMA 200"*, *"mude para escala logarítmica"*, *"colore as velas pelo
funding rate."* O Nexow reescreve o widget no lugar, versiona a mudança e mantém um
log que você pode inspecionar ou reverter.

## Por que isso importa

O caminho tradicional da ideia ao gráfico é medido em horas. Com o Nexow é medido em
segundos, e o artefato que você obtém é um widget real e inspecionável — não uma
caixa preta. O dashboard se monta sozinho, e você mantém o controle do código, dos
dados e das chaves.

Pronto para experimentar? [Abra o app](https://x.nexow.ai) e descreva seu primeiro
widget.
