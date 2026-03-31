---
title: O que e o Mole?
order: 1
description: Reviews de PR com IA e plataforma de crescimento de desenvolvedores.
---

# O que e o Mole?

Mole e uma plataforma open-source e self-hosted de code review com IA e crescimento de desenvolvedores. Ele se instala como um GitHub App e usa Claude para revisar pull requests automaticamente, classificar issues e rastrear metricas de crescimento.

Review PR -- Classificar issues -- Rastrear padroes -- Revelar insights -- Crescer desenvolvedores

## Principais funcionalidades

- **Reviews automaticos de PR**: Claude analisa cada pull request ao abrir
- **Deep reviews**: analise multi-pass com Claude Opus, acionada automaticamente ou via `/mole deep-review`
- **Reviews padrao**: reviews mais leves com Claude Sonnet via `/mole review`
- **6 categorias de issues**: Security, Bugs, Smells, Architecture, Performance, Style
- **Score de qualidade**: 0-100 por PR
- **Validacao de arquitetura**: enforcement de camadas via analise AST
- **Scanning de seguranca**: deteccao de vulnerabilidades baseada em AST
- **Diagramas Mermaid**: diagramas de sequencia e classe em deep reviews
- **3 modos de personalidade**: mole (divertido), formal (profissional), minimal (conciso)
- **Reviews localizados**: output completo no idioma configurado
- **Dashboard de crescimento**: analytics individual e de equipe com gamificacao
- **5 roles de acesso**: Dev, Tech Lead, Architect, Manager, Admin
- **CLI**: revise qualquer PR pelo terminal
- **i18n**: Ingles e Portugues (PT-BR)

## Como funciona

1. Um desenvolvedor abre um pull request no GitHub
2. O GitHub App do Mole recebe um evento webhook
3. Claude analisa o diff com contexto do projeto dos arquivos `.mole/`
4. Comentarios de review sao postados inline no PR com score de qualidade
5. Metricas sao agregadas por hora para o dashboard de crescimento

## Dashboard de crescimento

- Visao individual com heat maps, tendencias de score, streaks, badges
- Visao de equipe com distribuicao de issues e tendencias de qualidade
- Visao de modulos com scores de saude e rastreamento de tech debt
- Visao de custos para uso da API Claude (apenas admin)
- Gamificacao com streaks e conquistas
- Controle de acesso baseado em roles
- Suporte a i18n (Portugues e Ingles)

## Proximos passos

- [Instalacao](/mole/docs/pt/install-setup): configure o Mole
- [Uso](/mole/docs/pt/usage): comandos CLI e workflow de PR
- [Como Funciona](/mole/docs/pt/how-it-works): arquitetura e fluxo
