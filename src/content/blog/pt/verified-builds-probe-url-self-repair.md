---
title: 'Widgets que verificam a própria canalização: probe_url, agente verificador e uma reparação grátis'
description: 'A maior fonte de widgets mortos era código escrito contra uma API imaginada. Agora o builder obtém o endpoint enquanto escreve, um verificador volta a sondar o que omitiu, e um crash nos primeiros 45 segundos compra uma correção automática.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['produto', 'ia', 'como-funciona']
---

A forma mais comum de falha de um widget gerado não era um bug no código gerado.
Era um endpoint que nunca existiu.

O modelo recorreu a um URL da memória — ou a uma linha de directório cujo link é
uma *página de documentação*, não um endpoint — adivinhou a forma da resposta,
escreveu parsing cuidadoso contra esse palpite e enviou. O que obteve foi um
spinner eterno ou um gráfico vazio, sem nada no ecrã a explicar porquê.

Esta versão fecha o loop três vezes: enquanto o modelo escreve, logo a seguir a
ter escrito, e mais uma se a coisa continuar a crashar à sua frente.

## Enquanto escreve: `probe_url`

O builder tem agora uma ferramenta que **faz GET a um endpoint público sem chave
neste momento**, pelo exacto mesmo proxy de servidor que `ctx.data.http()` usa em
runtime, e devolve o estado HTTP real e o corpo de resposta real.

Essa identidade é o ponto inteiro. Um probe com sucesso *é* uma chamada runtime
com sucesso. Um probe falhado é um widget que teria saído partido — e falha
agora, enquanto ainda resta um turno para corrigir, e não no seu canvas.

Situa-se no fundo de uma escada que o builder é instruído a percorrer em vez de
raciocinar de memória: documentação de referência do venue primeiro, depois um
**directório de 691 APIs públicas sem chave em 47 categorias**, pesquisável por
tópico em nome *e* descrição de cada entrada — porque pedidos reais («marés»,
«qualidade do ar») raramente mapeiam numa categoria que alguém adivinharia. Esse
directório está sempre disponível para o builder agora, qualquer que seja o
âmbito, porque é o fallback universal sem chave. Os seus links são
documentação, por isso o último passo é sempre o mesmo: derivar o endpoint e
depois sondá-lo.

«Há dados para X?» é uma pergunta respondida olhando, não raciocinando sobre que
conjuntos de dados provavelmente existem. Chegar ao fim da escada e dizer *não*
depois de ter verificado de verdade é um bom resultado. Afirmá-lo de memória não
o é — e estava errado muito mais vezes do que parecia.

## Logo a seguir: o verificador

Pedir ao modelo que verifique o seu próprio trabalho é um pedido, não uma
garantia. Por isso, no momento em que o código do widget aterra, duas coisas
acontecem que não dependem do modelo concordar.

Primeiro, o resultado da ferramenta **nomeia os endpoints que nunca sondou neste
turno** e diz-lhe para os verificar enquanto restam rondas.

Segundo — e esta é a parte que não depende de cooperação — um verificador corre
**em paralelo com o modelo a escrever o resumo**, e faz o trabalho ele próprio:

- **Lint do módulo** para as classes de falha silenciosas por construção. Um
  export `render` em falta. Código que não parseia. Um `fetch` ou `WebSocket` cru
  a um host de terceiros, que o sandbox bloqueia — a falha silenciosa mais
  danosa em widgets gerados, porque nada aparece na consola. Um URL externo de
  imagem ou vídeo atribuído directamente a um `src`. Um URL de tile hardcoded
  entregue a uma biblioteca de mapas, que monta e faz pan perfeitamente enquanto
  cada pedido de tile é recusado em silêncio.
- **Sondar cada endpoint que o modelo omitiu** (até cinco por módulo), e ler o
  veredito da mesma forma que o modelo faria: inacessível, ou um 4xx que diz que
  o URL ou os seus parâmetros estão errados.

Problemas reais compram **uma ronda de reparação automática in-turn**, com o
output do probe anexado como evidência e instrução para corrigir apenas o que
foi nomeado. Essa ronda acontece enquanto o contexto completo do build ainda está
quente — muito mais barato do que enviar partido e gastar um turno inteiro novo
depois. Se o modelo reescrever o módulo a meio, a verificação já em curso é
substituída e o seu veredito descartado. E um verificador que falha internamente
verifica limpo: pode atrasar um build, nunca partir um.

## Se ainda crashar: uma reparação, limitada

O contexto de auto-reparação já alimentava erros de runtime no *próximo* turno
de chat — mas só quando enviava um. Um widget que crashava segundos após o build
ficava partido até reparar, reabrir o compositor e escrever «está partido».

Agora o host de runtime gasta **um turno de correção automática** quando um build
fresco crash. Um turno automático é a app a gastar os seus créditos ou a sua
chave, por isso os limites são deliberadamente apertados:

- apenas a versão que um build de IA *acabou* de produzir — um crash numa versão
  antiga que restaurou, ou em código que editou à mão, nunca se qualifica;
- apenas dentro de **45 segundos** desse build, porque um crash uma hora depois
  é informação nova para si, não um defeito óbvio de build;
- **uma vez por versão**, e uma versão produzida *por* um turno de auto-repair é
  ela própria inelegível. Um build pode desencadear no máximo um follow-up
  automático — nunca uma cadeia do modelo a pagar a si próprio para continuar a
  falhar.

O turno de reparação é formulado como a app a reportar um defeito, e traz a mesma
instrução que tudo acima: se a falha envolve um endpoint de dados, sondá-lo antes
de reescrever. Corrija, mantenha o que funciona, não aumente o âmbito do widget.

No lado do servidor, um build em background resgatado espera agora quando outro
turno do mesmo widget já está em direto, em vez de correr para uma versão
duplicada.

## O mesmo loop, todos os modos

Tudo isto vive num módulo partilhado, por isso builds de plataforma, builds
bring-your-own-key no browser e o sweep de builds no servidor têm comportamento
**idêntico** — mesmas ferramentas, mesmo formato de probe, mesmo verificador,
mesmo orçamento de reparação. Os modos não podem divergir sobre que ferramentas
existem ou quão estritamente um widget é verificado, porque há apenas uma
implementação da resposta. É também o loop que produziu [os dez widgets de
exemplo](/blog/starter-widgets-examples-workspace) que chegam com a próxima
versão: foram construídos exactamente por isto, com exactamente estas
verificações.

Nada disto torna um modelo correcto. Torna o erro sobrevivível, e normalmente
invisível: o endpoint é verificado antes de o código depender dele, a verificação
corre quer o modelo tenha ou não vontade de a correr, e o primeiro crash recebe
uma tentativa honesta de correção antes de chegar a si.

[Lance o Nexow](https://x.nexow.ai) e peça algo obscuro — marés, qualidade do ar,
feriados públicos. Veja o rail de actividade sondar o endpoint antes de escrever
uma linha de código de parsing.
