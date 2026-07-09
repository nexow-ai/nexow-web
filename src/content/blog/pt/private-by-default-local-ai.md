---
title: 'Privado por padrão: por que sua estação de trabalho de mercado com IA deve rodar localmente'
description: 'O Nexow roda totalmente local por padrão — geração de código com sua própria chave no navegador, persistência no IndexedDB e conexões diretas com venues. Veja o que privado por padrão significa e por que importa para traders.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacidade', 'arquitetura', 'segurança']
---

A maioria das ferramentas de IA envia seus dados para um servidor por padrão. Para
uma estação de trabalho de mercado — onde suas chaves, posições e estratégias são
o jogo inteiro — esse padrão está invertido. O Nexow inverte: **privado por padrão,
local por design.**

Veja o que isso realmente significa.

## Geração de código com sua própria chave, no navegador

No modo privado você adiciona sua própria chave da API da Anthropic, e a geração de
widgets roda no lado do cliente. Quando você pede um widget, a requisição vai do seu
navegador para a Anthropic com sua chave — não pela infraestrutura do Nexow. Uma
sessão não autenticada não nos custa nada para rodar porque não há nada para rodar:
o trabalho acontece na sua máquina.

## Seus widgets vivem no seu navegador

Cada widget que você constrói, cada versão, cada log e toda a sua biblioteca de
widgets persistem no **IndexedDB** do seu navegador. Estão disponíveis offline e
não estão vinculados a nenhuma conta. Limpe seu armazenamento e eles somem — não há
cópia no servidor porque nunca houve upload no servidor.

## Conexões diretas com venues

Onde a política de CORS de um venue permite, o Nexow se conecta a ele **diretamente
do seu navegador**, contornando nosso proxy por completo. Suas credenciais da
exchange são usadas para falar com a exchange — não com a gente. Menos saltos
significa menor latência e uma superfície de confiança menor.

## Por que privado por padrão importa

- **Segurança.** Quanto menos partes tocam suas chaves, menos lugares elas podem
  vazar. Local-first nos remove do caminho por completo no modo privado.
- **Latência.** Conexões diretas pulam um salto de rede, o que importa quando você
  está olhando um order book.
- **Propriedade.** Seus dashboards são seus. Sem lock-in, sem dança de exportação —
  eles vivem na sua máquina.
- **Custo.** Você paga apenas pelo seu próprio uso do modelo, sem markup e sem
  assinatura necessária para construir no canvas hoje.

## As compensações, com honestidade

Local-first não é livre de compensações. Alguns venues não permitem conexões
diretas do navegador e precisam passar por um proxy fino. Persistência local
significa que seu trabalho fica vinculado a um perfil de navegador até você optar
por sincronizar. E rodar sua própria chave significa gerenciar seu próprio uso.
Achamos que essas são as compensações certas para uma ferramenta tão próxima do seu
dinheiro.

Conforme adicionamos planos hospedados, trading agents e componentes de servidor, o
princípio permanece fixo: **suas chaves, seus dados, sua máquina** — a menos que
você opte explicitamente pela nuvem.

[Abra o Nexow](https://x.nexow.ai) e veja o modo privado por si mesmo.
