---
title: Referencia de Config
order: 7
description: Referencia completa para configuracao YAML do Mole.
---

# Referencia de Config

A configuracao do Mole vive em `mole.yaml`. Todos os campos podem ser sobrescritos com variaveis de ambiente prefixadas com `MOLE_` (ex: `MOLE_GITHUB_APP_ID`, `MOLE_LLM_API_KEY`, `MOLE_MYSQL_HOST`).

## Exemplo completo

```yaml
github:
  app_id: 12345
  private_key_path: /etc/mole/app.pem
  webhook_secret: "secret"

llm:
  api_key: "sk-ant-..."
  review_model: "claude-sonnet-4-6"
  deep_review_model: "claude-opus-4-6"
  # Pricing por 1M tokens [input, output] - para o dashboard de Custos
  # Usa pricing publicado da Anthropic se omitido
  pricing:
    claude-sonnet-4-6: [3.00, 15.00]
    claude-opus-4-6: [15.00, 75.00]

mysql:
  host: localhost
  port: 3306
  database: mole
  user: mole
  password: "password"

valkey:
  host: localhost
  port: 6379

server:
  port: 8080

worker:
  count: 3

log:
  level: info

# Defaults no nivel do servidor (sobrescriveis por repo via .mole/config.yaml)
defaults:
  language: en
  personality: mole

# Dashboard (opcional)
dashboard:
  github_client_id: ""
  github_client_secret: ""
  session_secret: ""
  base_url: "http://localhost:8080"
  allowed_org: ""
```

## GitHub

| Campo | Tipo | Descricao |
|-------|------|-----------|
| github.app_id | number | ID do GitHub App |
| github.private_key_path | string | Caminho para o arquivo PEM |
| github.webhook_secret | string | Secret de validacao do webhook |

## LLM

| Campo | Tipo | Descricao |
|-------|------|-----------|
| llm.api_key | string | API key da Anthropic |
| llm.review_model | string | Modelo para reviews padrao |
| llm.deep_review_model | string | Modelo para deep reviews |
| llm.pricing | object | Pricing por 1M tokens [input, output] para rastreamento de custos |

## MySQL

| Campo | Tipo | Descricao |
|-------|------|-----------|
| mysql.host | string | Host do MySQL |
| mysql.port | number | Porta do MySQL |
| mysql.database | string | Nome do banco |
| mysql.user | string | Usuario do banco |
| mysql.password | string | Senha do banco |

## Valkey

| Campo | Tipo | Descricao |
|-------|------|-----------|
| valkey.host | string | Host do Valkey |
| valkey.port | number | Porta do Valkey |

## Server

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| server.port | number | 8080 | Porta HTTP |

## Worker

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| worker.count | number | 3 | Numero de goroutines de worker |

## Log

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| log.level | string | info | Nivel de log (debug, info, warn, error) |

## Defaults

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| defaults.language | string | en | Idioma do review (en, pt-BR) |
| defaults.personality | string | mole | Modo de personalidade (mole, formal, minimal) |

## Dashboard

Dashboard opcional com HTMX para rastreamento de crescimento de desenvolvedores. Requer um GitHub OAuth App (criado em github.com/settings/developers) com callback URL `http://seu-servidor/auth/callback`.

| Campo | Tipo | Descricao |
|-------|------|-----------|
| dashboard.github_client_id | string | Client ID do GitHub OAuth App |
| dashboard.github_client_secret | string | Client secret do GitHub OAuth App |
| dashboard.session_secret | string | Secret de sessao aleatorio de 32 caracteres |
| dashboard.base_url | string | URL publica da instancia Mole |
| dashboard.allowed_org | string | Restringir acesso a membros de uma org GitHub (vazio = permitir todos) |

### Roles de acesso

| Role | Dados Proprios | Media da Equipe | Individual Outros | Modulos | Custos |
|------|----------------|-----------------|-------------------|---------|--------|
| Dev | Sim | Sim (anonimo) | Nao | Sim | Nao |
| Tech Lead | Sim | Sim | Sim (opt-in) | Sim | Nao |
| Architect | Sim | Sim | Sim (opt-in) | Sim | Nao |
| Manager | Nao | Sim | Nao | Sim | Nao |
| Admin | Sim | Sim | Sim | Sim | Sim |

Manager ve menos que Tech Lead por design -- esta ferramenta e para crescimento, nao avaliacao de RH.
