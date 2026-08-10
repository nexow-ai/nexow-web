---
title: 'Grava o teu painel, com bolha de câmara e tudo'
description: 'A gravação de ecrã está na barra de ferramentas: até dez minutos da tua tela com a webcam embutida como uma bolha arrastável, uma barra de controlo flutuante e uma decisão — guardar, partilhar ou publicar — quando paras.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['produto', 'captura', 'comunidade']
---

Constróis algo bom e queres mostrá-lo — em movimento, não como uma captura. Até
agora isso significava sair da app, arranjar um gravador à parte, enquadrar uma
janela do navegador e torcer para que o resultado fosse visível. Agora é um botão na
barra de ferramentas.

**Capturar painel** oferece duas coisas: uma **captura**, recortável antes de a
guardares, ou **gravar vídeo** — a tua tela, ao vivo, até parares ou chegares aos
dez minutos.

## O que entra na gravação

Três interruptores, decididos antes de começar:

- **Bolha de câmara** — a tua webcam, embutida no vídeo como um círculo
- **Microfone** — a tua narração
- **Áudio do separador** — o que a própria página estiver a tocar

A bolha de câmara não está presa a um canto. **Arrasta-a para onde quiseres** e ela
encaixa no canto mais próximo de onde a largares, no tamanho que escolheste. Faz
parte do vídeo, não é uma camada acrescentada depois, por isso o que enquadras é o
que o ficheiro contém.

Enquanto gravas, uma **barra de controlo** flutuante mantém-se de lado e faz as
quatro coisas de que realmente precisas a meio: pausar e retomar, silenciar o
microfone, silenciar o áudio do separador, esconder ou mover a bolha de câmara — e
parar. Um cronómetro corre o tempo todo e avisa quando te aproximas do teto de dez
minutos, em vez de se cortar sem explicação.

## E depois uma decisão, não uma transferência

Ao parar, a gravação abre num ecrã de revisão com o vídeo e quatro escolhas:
**Guardar**, **Partilhar**, **Publicar**, **Descartar**.

Publicar envia-a para o feed da comunidade, e é a única com limite: uma gravação de
dez minutos pode ultrapassar o que os carregamentos do feed permitem. Quando isso
acontece, Publicar fica **desativado e explica porquê**, com o máximo indicado,
enquanto Guardar e Partilhar continuam disponíveis porque nenhum se aproxima desse
teto. Um botão esbatido que te diz o número é melhor do que um que falha com a barra
de carregamento já cheia.

## As partes pouco vistosas que tornam bom o ficheiro

Quase todo o trabalho de um gravador de ecrã é invisível quando funciona:

- **A imagem é sempre composta sobre uma tela de tamanho fixo**, mesmo sem bolha de
  câmara. A resolução de uma captura de separador segue a janela: um único
  redimensionamento a meio renegociaria a faixa de vídeo, e os ficheiros com mudança
  de resolução estão partidos na maioria dos leitores. Fixar o tamanho uma vez no
  início é o que torna a saída uma codificação única e limpa: 1080p a 30 fps,
  descendo para 720p quando o navegador entrega mesmo assim uma superfície de ecrã
  inteiro.
- **O contentor é escolhido em tempo de execução, não assumido.** O Firefox grava
  WebM, o Safari grava MP4, e o Chromium já lançou ambos consoante a versão. O
  gravador tenta MP4 primeiro — é o ficheiro que se reproduz onde quer que o leves a
  seguir —, desce para WebM se for preciso, e dá nome ao ficheiro segundo o que o
  navegador usou de facto, não segundo o que lhe foi pedido.
- **Os fotogramas são cadenciados por um relógio independente da página.** Um
  separador em segundo plano trava a animação mas não o áudio, que é exatamente como
  se obtém uma imagem congelada sobre uma narração que continua. Se o separador
  esteve escondido durante a gravação, o ecrã de revisão di-lo, em vez de te deixar
  descobrir mais tarde.
- **Todas as faixas são paradas em qualquer saída**, incluindo uma falha a meio do
  arranque. Uma luz de câmara acesa é uma app que parece estar a observar-te, e não
  há versão aceitável disso.

Os erros são honestos nos dois sentidos. Fechar o seletor do navegador não é um erro
e fica calado: não partilhaste nada, e um aviso seria ruído. Mas uma fonte que não
manda imagem gera um alerta antes de narrares cinco minutos sobre um retângulo
cinzento, e um navegador que não consegue codificar vídeo di-lo em vez de produzir um
ficheiro vazio.

## A seguir: gravar um só widget

Com a próxima atualização chega a versão mais pequena e mais precisa disto: um
**botão de câmara no cabeçalho de cada widget** que grava *apenas esse widget* —
recortado ao corpo dele, de modo que o cabeçalho onde o botão vive, e a barra de
controlo, ficam fora do enquadramento. O indicador de gravação pode estar ali mesmo
enquanto gravas sem aparecer no vídeo.

Está construído sobre Region Capture, hoje uma capacidade do Chromium em desktop, por
isso o botão só aparece onde consegue cumprir, em vez de oferecer algo por que
depois teria de pedir desculpa. Segue o widget se o moveres e para de forma limpa se
o widget sair da tela.

Entre os dois, «olha o que eu construí» deixa de ser uma captura mais um parágrafo.

[Abre o Nexow](https://x.nexow.ai), procura **Capturar painel** na barra de
ferramentas e grava a tua tela.
