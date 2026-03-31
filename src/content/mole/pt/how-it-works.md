---
title: Como Funciona
order: 4
description: Arquitetura e fluxo de review do Mole.
---

# Como Funciona

Mole e um backend Go que integra com GitHub via webhooks e usa Claude para analise com IA.

## Arquitetura

```
GitHub webhook --> POST /webhook --> Fila Valkey --> Pool de workers
                   (verificacao de assinatura) (dedup)    |
                                                    +-----+-----+
                                                    | Buscar diff do PR (GitHub API)
                                                    | Carregar contexto .mole/ + config
                                                    | Rodar validacao de arquitetura (AST)
                                                    | Rodar scanner de seguranca (AST)
                                                    | Chamar API Claude (review + taxonomia)
                                                    | Calcular score de qualidade
                                                    | Aplicar personalidade + filtro de severidade
                                                    | Validar numeros de linha contra diff
                                                    | Postar review (resumo + comentarios inline)
                                                    | Salvar review + issues no MySQL
                                                    +-- Agregador computa metricas (por hora)
```

## Fluxo de review

1. **Webhook recebido**: GitHub envia um evento de pull request
2. **Assinatura verificada**: webhook secret e validado
3. **Enfileirado**: evento e deduplicado e adicionado a fila Valkey
4. **Diff buscado**: worker busca diff do PR via GitHub API
5. **Contexto carregado**: contexto do projeto do diretorio `.mole/` e config e montado
6. **Analise AST**: validacao de arquitetura e scanning de seguranca executam
7. **Analise Claude**: o diff + contexto e enviado ao Claude para review com taxonomia de issues
8. **Score calculado**: score calculado (0-100) por PR
9. **Comentarios postados**: resumo + comentarios inline postados no PR
10. **Persistido**: review e issues salvos no MySQL
11. **Metricas agregadas**: agregacao por hora para o dashboard

## Deep review

Para PRs criticos, deep review usa Claude Opus com analise multi-pass:

1. **Primeiro passo**: review padrao (bugs, estilo)
2. **Segundo passo**: review de arquitetura e design
3. **Terceiro passo**: analise focada em seguranca
4. **Sintese**: combinar achados, remover duplicatas, ranquear por severidade
5. **Diagramas**: gerar diagramas Mermaid de sequencia e classe

## Score de qualidade

Cada PR recebe um score de qualidade (0-100) baseado em:
- Numero e severidade dos issues encontrados
- Categorias de issues afetadas
- Baseline historico do repositorio
- Tendencia recente do desenvolvedor

## Endpoints

| Metodo | Path | Descricao |
|--------|------|-----------|
| POST | `/webhook` | Receptor de webhook GitHub |
| GET | `/health` | Health check (status MySQL + Valkey) |
| GET | `/metrics` | Metricas Prometheus |
| GET | `/me` | Dashboard individual |
| GET | `/team` | Dashboard de equipe |
| GET | `/modules` | Dashboard de modulos |
| GET | `/costs` | Dashboard de custos (apenas admin) |

## Tech stack

| Componente | Tecnologia |
|------------|-----------|
| Linguagem | Go 1.26 |
| Banco de dados | MySQL 8.0+ |
| Fila | Valkey 7.0+ (compativel com Redis) |
| LLM | Claude via Anthropic SDK |
| Dashboard | Go templates + HTMX |
| GitHub | go-github v72 + ghinstallation v2 |
| CLI | Cobra |
| Logging | log/slog (JSON estruturado) |
| Metricas | Prometheus client_golang |
| Migrations | golang-migrate (SQL embarcado) |
| Container | Docker (multi-arch, GHCR) |
