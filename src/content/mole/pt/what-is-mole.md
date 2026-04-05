---
title: O que e o Mole?
order: 1
description: Reviews de PR com IA e plataforma de crescimento de desenvolvedores.
---

# O que e o Mole?

Mole (o animal que cava fundo, encontrando o que outros nao veem) e uma plataforma open-source e self-hosted de code review com IA e crescimento de desenvolvedores. Instale como um GitHub App, aponte para seus repos, e cada PR recebe um review automatizado com Claude -- com personalidade, taxonomia formal de issues, scoring de qualidade e rastreamento de crescimento.

O loop completo, self-hosted:

```
Review PR -> Classificar issues -> Rastrear padroes -> Revelar insights -> Crescer desenvolvedores
```

## Funcionalidades de Review de PR

- **Deep reviews** -- acionados automaticamente ao abrir PR (Claude Opus), ou manualmente com `/mole deep-review`
- **Reviews padrao** -- review mais leve com `/mole review` (Claude Sonnet)
- **Ignorar PRs** -- pular reviews com `/mole ignore`
- **Reviews via CLI** -- revise qualquer PR pelo terminal com `mole review owner/repo#123`
- **Personalidade do bot** -- 3 modos: `mole` (divertido), `formal` (profissional), `minimal` (conciso) -- configuravel no servidor ou por repo
- **Reviews localizados** -- output completo do review (issues, resumo) no idioma configurado, nao apenas o chrome da UI
- **Taxonomia de issues** -- Security, Bugs, Smells, Architecture, Performance, Style (com subcategorias)
- **Dois niveis de severidade** -- Critical (vermelho) e Attention (amarelo) apenas -- sem sugestoes de baixo valor
- **Score de qualidade** -- 0-100 por PR (critical = -8, attention = -5)
- **Validacao de arquitetura** -- regras de enforcement de camadas via analise AST
- **Scanner de seguranca** -- deteccao baseada em AST de vulnerabilidades comuns
- **Diagramas Mermaid** -- diagramas de sequencia e classe em deep reviews

## Dashboard de Crescimento de Desenvolvedores

- **Visao individual** -- heat map de issues, tendencias de score, streaks, badges
- **Visao de equipe** -- distribuicao de issues, tendencias de qualidade, sugestoes de treinamento
- **Visao de modulos** -- score de saude, rastreamento de tech debt, agrupado por repositorio
- **Visao de custos** -- uso da API Claude e custos estimados por modelo (apenas admin)
- **Gamificacao** -- streaks, badges, conquistas
- **Pagina About** -- informacoes e versao da aplicacao
- **Acesso baseado em roles** -- Dev, Tech Lead, Manager, Admin
- **i18n** -- Portugues (padrao) e Ingles, alternavel via seletor de bandeira

## Proximos passos

- [Instalacao](/mole/docs/pt/install-setup): configure o Mole
- [Uso](/mole/docs/pt/usage): comandos CLI e workflow de PR
- [Como Funciona](/mole/docs/pt/how-it-works): arquitetura e fluxo
