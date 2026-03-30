---
title: Referência de Config
order: 7
description: Referência completa para configuração YAML do Mole.
---

# Referência de Config

A configuração do Mole vive em `mole.yaml` na raiz do projeto.

## Exemplo completo

```yaml
version: v0.1

server:
  port: 8080
  host: 0.0.0.0

database:
  host: localhost
  port: 3306
  name: mole
  user: mole
  password: ${MOLE_DB_PASSWORD}
  max_connections: 25

cache:
  host: localhost
  port: 6379
  db: 0
  ttl: 3600

anthropic:
  api_key: ${ANTHROPIC_API_KEY}
  model: claude-sonnet-4-20250514
  deep_model: claude-opus-4-20250514
  max_tokens: 4096
  timeout: 120

github:
  app_id: ${GITHUB_APP_ID}
  private_key_path: ./github-app.pem
  webhook_secret: ${GITHUB_WEBHOOK_SECRET}

review:
  personality: balanced
  auto_review: true
  deep_review_labels:
    - security
    - critical
  max_files_per_review: 50
  ignore_draft: true

metrics:
  enabled: true
  port: 9090

language: pt-BR
```

## Server

| Campo | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| server.port | number | 8080 | Porta HTTP |
| server.host | string | 0.0.0.0 | Endereço de bind |

## Database

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| database.host | string | sim | Host do MySQL |
| database.port | number | sim | Porta do MySQL |
| database.name | string | sim | Nome do banco |
| database.user | string | sim | Usuário do banco |
| database.password | string | sim | Senha do banco |
| database.max_connections | number | não | Tamanho do pool de conexões (padrão: 25) |

## Cache

| Campo | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| cache.host | string | localhost | Host do Valkey |
| cache.port | number | 6379 | Porta do Valkey |
| cache.db | number | 0 | Índice do banco |
| cache.ttl | number | 3600 | TTL padrão em segundos |

## Anthropic

| Campo | Tipo | Descrição |
|-------|------|-----------|
| anthropic.api_key | string | API key do Claude |
| anthropic.model | string | Modelo para reviews padrão |
| anthropic.deep_model | string | Modelo para deep reviews |
| anthropic.max_tokens | number | Max tokens na resposta |
| anthropic.timeout | number | Timeout da requisição em segundos |

## GitHub

| Campo | Tipo | Descrição |
|-------|------|-----------|
| github.app_id | string | ID do GitHub App |
| github.private_key_path | string | Caminho para o arquivo PEM |
| github.webhook_secret | string | Secret de validação do webhook |

## Review

| Campo | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| review.personality | string | balanced | Modo de review (strict, balanced, encouraging) |
| review.auto_review | boolean | true | Auto-review novos PRs |
| review.deep_review_labels | string[] | [] | Labels de PR que acionam deep review |
| review.max_files_per_review | number | 50 | Max arquivos para analisar por PR |
| review.ignore_draft | boolean | true | Ignorar PRs draft |

## Variáveis de ambiente

Todos os valores de config suportam sintaxe `${VAR_NAME}` para substituição de variáveis de ambiente. Valores sensíveis (senhas, API keys) devem sempre usar variáveis de ambiente.
