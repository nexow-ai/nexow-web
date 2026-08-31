---
title: 'Ligue os widgets: uma superfície, uma frase e um botão Testar'
description: 'Tudo o que um widget pode ligar vive agora atrás de uma caixa de pesquisa — outros widgets, ligações, bots e agentes. Descreva a ligação em linguagem simples e dispare um evento real para descobrir que extremo está partido.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['produto', 'widgets', 'automação']
---

Um **link** transporta eventos entre dois widgets: mude o símbolo num e o outro
reage. Active Bidireccional e ficam sincronizados nos dois sentidos. É a diferença
entre um ecrã cheio de mosaicos separados e um ecrã que se comporta como um
único instrumento.

A ideia era boa. Encontrá-la não era, e saber se funcionava também não. Ambas
estão corrigidas nesta versão.

## Uma superfície, e «Todos» significa mesmo todos

O picker estava dividido em dois sub-separadores — *Widgets* e *Fontes* — o que
significava que metade do inventário estava sempre oculta atrás de um toggle que
tinha de saber premir. Um widget sozinho no seu ecrã mostrava uma grelha vazia,
sem indício de que bots, agentes e ligações existiam.

Agora há uma caixa de pesquisa e uma fila de filtros por tipo sobre tudo: outros
widgets neste ecrã, neste workspace ou noutro sítio; as suas ligações de dados;
os seus bots; os seus agentes. **Todos** mostra tudo.

A ordem também mudou. **A minha ligação** está agora *acima* da superfície de
exploração. Costumava ficar por baixo de uma grelha picker que podia ir a dezenas
de mosaicos, por isso a lista a que voltava para gerir — desactivar isto, remover
aquilo — era o que tinha de percorrer para além de todo o resto, enquanto o picker
de que só precisava ao adicionar algo novo o recebia de cada vez.

Pequena correcção de honestidade na mesma área: o estado vazio espera agora que
as stores de bots e agentes respondam antes de afirmar que não há nada a ligar,
mostrando **A procurar…** entretanto, e cada chip de filtro traz a sua própria
contagem. Uma grelha vazia que significa «ainda a carregar» era uma mentira que
a interface contava rotineiramente.

## Dois mecanismos, uma pergunta

Por trás desse picker único estão duas coisas genuinamente diferentes:

- **Outro widget** → um **glue link** gerado por IA. Código real, com histórico de
  versões, a correr no seu próprio runtime oculto, mapeando o que A emite para o
  que B espera.
- **Uma ligação, bot ou agente** → um **attachment** leve, que é um registo do
  que um rebuild ensinou ao *próprio* código deste widget a fazer. Escalonado em
  vez de automático, para que explorar cinco fontes seguidas custe um rebuild,
  não cinco.

Saber qual quer, antes de poder dizer o que quer que aconteça de verdade, é uma
má primeira pergunta. Por isso o separador Ligações abre agora com um compositor:
**descreva a ligação**.

> *«Sincronize o símbolo nos dois sentidos com o gráfico.»*
> *«Quando clico numa linha aqui, filtre o outro widget.»*
> *«Mostre os sinais do meu bot de alerta de preço neste widget.»*

Um planner lê o mesmo inventário que o picker e resolve tanto o mecanismo como a
contraparte — «o bot de preço» torna-se um id. **Só resolve**; nunca gera. O
codegen caro em streaming continua onde sempre esteve, com o seu próprio botão
Parar e o seu próprio histórico de versões.

Se preferir apontar por si, o picker ainda faz isso — e marca agora o que já tem
ligado, para que uma segunda escolha se leia *«já ligado»* em vez de repetir
silenciosamente a primeira. Escolher de novo actualiza a ligação existente em
vez de acrescentar uma linha duplicada, e o badge diz isso **antes** de pagar
por um rebuild.

## «Testar»: que extremo está realmente partido?

Até esta versão um link era só de escrita. Descrevia-o, pagava o codegen, saía
do editor e tocava nos widgets reais para ver se acontecia alguma coisa. Quando
nada acontecia, não havia forma de dizer *que* parte estava errada — o widget
não a emitir, o link não mapear, ou o outro widget não ouvir.

O editor tem agora uma barra **Testar**. Escolha um tópico e um valor, escolha
que extremo simula emitir (oferecido apenas num link bidireccional, porque um
link unidireccional reportaria sempre nada do lado oposto), e envie. O evento
entra no runtime real do link e executa o `connect(ctx)` gerado — não uma
simulação — e o veredito distingue todas as formas de ficar vazio:

- **Este link não está a correr.** Active-o — ou ainda não tem código.
- **Correu mas não reencaminhou nada para esse tópico.** O mapeamento está
  errado; o separador Registos tem o detalhe.
- **Enviou «symbol» para Chart.** Funciona.
- **Reencaminhou, mas esse widget não está no ecrã para receber.** Não é bug —
  a outra ponta está noutro ecrã.

O teste fica na lista em vez de o mandar para outro sítio, e o gravador só fica
armado enquanto a barra está no ecrã, para que um link a reencaminhar um fluxo
de ticks nunca pague pela instrumentação.

## Os discretos

Links bidireccionais fariam eco para sempre sem ajuda, por isso um valor entregue
é memorizado e o rebote idêntico é descartado uma vez — o loop espelho canónico
A↔B quebra, enquanto um valor genuinamente novo ainda passa. Links e attachments
replicam-se entre separadores e dispositivos em vez de viver num deles, por isso
apagar um noutro sítio mostra agora um estado **gone** no editor em vez de o
deixar guardar no vazio. E quando um rebuild falha, diz-o e aponta para o
separador Builder, em vez de deixar um spinner onde devia haver resposta.

Mais uma mudança está a caminho: a app está a ser renomeada em torno da palavra
que as pessoas já usam para isto. *Link* passa a **wire**, e **A minha ligação**
fica exactamente onde está.

[Lance o Nexow](https://x.nexow.ai), abra o separador Ligações de qualquer
widget, e descreva o que deve acontecer quando clica em algo. Depois teste antes
de sair.
