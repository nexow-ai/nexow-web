---
title: 'Dez widgets de exemplo já vêm com o Nexow — conversa incluída'
description: 'Uma conta nova já não abre num canvas vazio. Dez widgets terminados chegam como workspace Exemplos, cada um com o chat real que o construiu e o histórico de versões real — feitos pelo mesmo loop de codegen que usa, sem nada ligado.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['produto', 'onboarding', 'widgets']
---

O ecrã mais difícil no Nexow foi sempre o primeiro: canvas em branco, caixa de
prompt e nenhuma prova de que funciona. Podia ler a documentação ou escrever algo
e esperar.

Com a próxima versão, uma conta nova arranca num **workspace Exemplos** — dez
widgets terminados em três ecrãs, todos a funcionar na primeira carga, com **nada
ligado**. Não capturas, não tour guiado. Widgets reais que pode abrir, editar,
desmontar e publicar por cima.

## O que vem no pack

**Mundo em direto** — relógio mundial com anel dia/noite e barra de sobreposição
de horário laboral; previsão meteorológica de sete dias com curva horária;
todos os terramotos da última hora, dia ou semana num mapa em direto, dimensionados
por magnitude; qualidade do ar em direto com o poluente que impulsiona o índice.

**Mercados** — velas Binance com última vela em direto e badge de variação 24h;
conversor FX com taxas de referência BCE e histórico de 90 dias; perguntas
Polymarket mais ativas e o que a multidão acredita; qualquer indicador do Banco
Mundial para dois países como gráfico de longo prazo.

**Criar e brincar** — quadro de notas adesivas que sobrevive a recarregamentos
com armazenamento durable por item, e feed Wikipedia «neste dia» com miniaturas
e seletor de data.

Toda a fonte é sem chave: Open-Meteo, USGS, dados públicos Binance, Frankfurter,
Polymarket, Banco Mundial, Wikipedia. Regra, não coincidência — um exemplo que
abre em «Ligar OANDA» é pior que canvas vazio.

## Foram mesmo construídos, não escritos

Cada exemplo começou como brief escrito como uma pessoa escreve — o que quer e
porquê, não especificação. `starter:build` passa esses briefs por
**`runWidgetToolLoop`**: o mesmo módulo que a rota codegen da plataforma e o
caminho bring-your-own-key do browser usam, com o mesmo contrato, ferramentas e
verificador in-turn. Sem stream HTTP, sem ledger de créditos, sem browser — mas
o mesmo loop.

A transcrição na separador chat de um widget é a conversa genuína; cada turno que
produziu código é versão genuína no rail. A maioria tem três. **Qualidade do ar
tem cinco** — os três primeiros abriam numa caixa vazia «introduza uma cidade»,
e o quinto turno é relatório de bug: seis mosaicos de poluentes com traço, e
timestamp *« há -6375 min »*. Esse build está no pack tal como aconteceu.

Crucialmente, os briefs correm **sem providers anexados** — exactamente o que uma
conta nova tem.

## Não é um segundo catálogo

Cada exemplo é activo marketplace ordinário, publicado pela conta oficial pelo
mesmo RPC: mesmos sanitizers, mesmo grafo de linhagem, mesma instalação, mesma
cadeia de royalties. Nada de widget starter é especial no servidor — faça fork e
continua linhagem real.

Registo de curação em cima guarda só a curação: que activos publicados compõem o
pack, ordem, ecrã. Escritas só service-role; leituras públicas.

## Onde o pack aterra e o que não fará

Seeding limitado de três formas. Corre **uma vez por conta, não por dispositivo**
— flag replicada, relida ao mudar de conta. Nunca faz seed num canvas já usado.
Pode forçar-se em **Definições → Geral → Adicionar widgets de exemplo**.

Os exemplos aterram *ao lado* do workspace vazio, não o substituem — onboarding
entrega ecrã limpo para escrever. Todo o pack é um passo de desfazer.

Utilizadores já seeded **mantêm os seus** quando lançamos versão melhor — é
widget deles agora. Sem push-update.

Verificado como pack em Chrome real: erros de arranque, loops de animação,
frames lentos, renders vazios — mais screenshot cada um. Check live confirma
endpoints públicos.

Pack na próxima versão; contas existentes importam de **Definições → Geral**.
Abra um, leia o chat, mude algo — forma mais rápida de aprender o canvas.

[Lance o Nexow](https://x.nexow.ai) e comece a construir entretanto.
