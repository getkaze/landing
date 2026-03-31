---
title: Como Funciona
order: 4
description: Arquitetura e fluxo de review do Mole.
---

# Como Funciona

Mole é um backend Go que integra com GitHub via webhooks e usa Claude para análise com IA.

## Arquitetura

```
Evento PR do GitHub
  → Handler de Webhook
    → Parser de Diff
      → Loader de Contexto (arquivos .mole/)
        → Análise Claude
          → Formatador de Comentários
            → GitHub API (postar comentários)
              → Atualização do Dashboard
```

## Fluxo de review

1. **Webhook recebido**: GitHub envia um evento de pull request
2. **Diff parseado**: Mole extrai arquivos e hunks alterados
3. **Contexto carregado**: contexto do projeto do diretório `.mole/` é montado
4. **Análise Claude**: o diff + contexto é enviado ao Claude para review
5. **Issues classificados**: cada achado é categorizado e pontuado
6. **Comentários postados**: comentários inline são postados no PR
7. **Dashboard atualizado**: métricas de qualidade são registradas

## Deep review

Para PRs críticos, deep review usa Claude Opus com análise multi-pass:

1. **Primeiro passo**: review padrão (corretude, estilo)
2. **Segundo passo**: review de arquitetura e design
3. **Terceiro passo**: análise focada em segurança
4. **Síntese**: combinar achados, remover duplicatas, ranquear por severidade

## Score de qualidade

Cada PR recebe um score de qualidade (0-100) baseado em:
- Número e severidade dos issues encontrados
- Categorias de issues afetadas
- Baseline histórico do repositório
- Tendência recente do desenvolvedor

## Tech stack

| Componente | Tecnologia |
|------------|-----------|
| Backend | Go 1.26, spf13/cobra |
| IA | Claude API (Anthropic SDK) |
| Banco de dados | MySQL 8.0+ |
| Cache | Valkey 7.0+ (compatível com Redis) |
| Frontend | HTMX, templates Templ |
| Diagramas | Mermaid (análise de segurança) |
| Métricas | Prometheus |
| Integração | GitHub App, webhooks |
