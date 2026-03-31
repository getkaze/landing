---
title: O que é o Mole?
order: 1
description: Code review com IA, gamificação e dashboards de equipe.
---

# O que é o Mole?

Mole é uma ferramenta de code review com IA que usa Claude para analisar pull requests, pontuar qualidade de código e ajudar desenvolvedores a crescer. É self-hosted, focado em equipes e construído para organizações que querem feedback acionável, não apenas linting.

## Principais funcionalidades

- **Reviews automáticos de PR**: Claude analisa cada pull request com sugestões context-aware
- **Deep reviews**: análise multi-pass com Claude Opus para PRs críticos
- **6 categorias de issues**: corretude, segurança, performance, manutenibilidade, estilo, documentação
- **Score de qualidade**: métricas por PR e por desenvolvedor rastreadas ao longo do tempo
- **Dashboard de crescimento**: analytics individual e de equipe, tendências e áreas de melhoria
- **Gamificação**: conquistas, streaks e leaderboards
- **3 modos de personalidade**: rigoroso, equilibrado, encorajador
- **5 roles de acesso**: Dev, Tech Lead, Architect, Manager, Admin
- **Scanning de segurança**: detecção de vulnerabilidades com diagramas Mermaid
- **Validação de arquitetura**: aplique padrões e limites de módulos
- **CLI**: execute reviews pelo terminal
- **i18n**: Inglês e Português (PT-BR)

## Como funciona

1. Um desenvolvedor abre um pull request no GitHub
2. O GitHub App do Mole recebe um evento webhook
3. Claude analisa o diff com contexto do projeto dos arquivos `.mole/`
4. Comentários de review são postados inline no PR
5. Score de qualidade e breakdown de issues são rastreados no dashboard

## Nome

Nomeado em homenagem à toupeira (mole), uma criatura que cava fundo no subsolo para encontrar o que outros não veem. Mole cava fundo no código para revelar issues, padrões e oportunidades de crescimento.

## Próximos passos

- [Instalação](/mole/docs/pt/install-setup): configure o Mole
- [Uso](/mole/docs/pt/usage): comandos CLI e workflow de PR
- [Como Funciona](/mole/docs/pt/how-it-works): arquitetura e fluxo
