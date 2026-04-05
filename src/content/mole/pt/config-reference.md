---
title: Referencia de Config
order: 7
description: Referencia completa para configuracao YAML do Mole.
---

# Referencia de Config

A configuracao do Mole vive em `mole.yaml`. Todos os campos podem ser sobrescritos com variaveis de ambiente prefixadas com `MOLE_`.

## Exemplo completo

```yaml
github:
  app_id: 12345                          # ID do GitHub App
  private_key_path: /etc/mole/app.pem    # Caminho para a chave privada
  webhook_secret: "secret"               # Webhook secret

llm:
  api_key: "sk-ant-..."                  # API key da Anthropic
  review_model: "claude-sonnet-4-6"      # Modelo para review padrao
  deep_review_model: "claude-opus-4-6"   # Modelo para deep review
  # Pricing por 1M tokens [input, output] -- para o dashboard de Custos
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
  environment: production            # development | production

worker:
  count: 3

log:
  level: info                            # debug | info | warn | error

# Defaults no nivel do servidor (sobrescriveis por repo via .mole/config.yaml)
defaults:
  language: en                           # en, pt-BR
  personality: mole                      # mole, formal, minimal

# Exploracao de codebase (opcional -- requer git no host)
# Habilita o comando /mole dig para reviews contextuais
repos:
  base_path: "/var/lib/mole/repos"   # Onde clonar repos (vazio = desabilitado)

exploration:
  max_turns: 25                       # Max turnos de tool-use do Sonnet
  model: "claude-sonnet-4-6"           # Modelo de exploracao

# Dashboard (opcional)
dashboard:
  github_client_id: ""
  github_client_secret: ""
  session_secret: ""
  base_url: "http://localhost:8080"
  allowed_org: ""                        # Restringir a membros da org (vazio = permitir todos)
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
| server.environment | string | production | Ambiente (development, production) |

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

## Repos

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| repos.base_path | string | (vazio) | Onde clonar repos para /mole dig (vazio = desabilitado) |

## Exploration

| Campo | Tipo | Padrao | Descricao |
|-------|------|--------|-----------|
| exploration.max_turns | number | 25 | Max turnos de tool-use do Sonnet para exploracao de codebase |
| exploration.model | string | claude-sonnet-4-6 | Modelo usado para exploracao de codebase |

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
| Manager | Nao | Sim | Nao | Sim | Nao |
| Admin | Sim | Sim | Sim | Sim | Sim |

Manager ve menos que Tech Lead por design -- esta ferramenta e para crescimento, nao avaliacao de RH.

## Variaveis de ambiente

Todo campo pode ser sobrescrito com variaveis de ambiente usando o prefixo `MOLE_`:

| Variavel | Campo de config |
|----------|----------------|
| `MOLE_GITHUB_APP_ID` | `github.app_id` |
| `MOLE_GITHUB_PRIVATE_KEY_PATH` | `github.private_key_path` |
| `MOLE_GITHUB_WEBHOOK_SECRET` | `github.webhook_secret` |
| `MOLE_LLM_API_KEY` | `llm.api_key` |
| `MOLE_LLM_REVIEW_MODEL` | `llm.review_model` |
| `MOLE_LLM_DEEP_REVIEW_MODEL` | `llm.deep_review_model` |
| `MOLE_MYSQL_HOST` | `mysql.host` |
| `MOLE_MYSQL_PORT` | `mysql.port` |
| `MOLE_MYSQL_DATABASE` | `mysql.database` |
| `MOLE_MYSQL_USER` | `mysql.user` |
| `MOLE_MYSQL_PASSWORD` | `mysql.password` |
| `MOLE_VALKEY_HOST` | `valkey.host` |
| `MOLE_VALKEY_PORT` | `valkey.port` |
| `MOLE_SERVER_PORT` | `server.port` |
| `MOLE_SERVER_ENVIRONMENT` | `server.environment` |
| `MOLE_WORKER_COUNT` | `worker.count` |
| `MOLE_LOG_LEVEL` | `log.level` |
| `MOLE_REPOS_BASE_PATH` | `repos.base_path` |
| `MOLE_EXPLORATION_MAX_TURNS` | `exploration.max_turns` |
| `MOLE_EXPLORATION_MODEL` | `exploration.model` |
| `MOLE_DASHBOARD_GITHUB_CLIENT_ID` | `dashboard.github_client_id` |
| `MOLE_DASHBOARD_GITHUB_CLIENT_SECRET` | `dashboard.github_client_secret` |
| `MOLE_DASHBOARD_SESSION_SECRET` | `dashboard.session_secret` |
| `MOLE_DASHBOARD_BASE_URL` | `dashboard.base_url` |
| `MOLE_DASHBOARD_ALLOWED_ORG` | `dashboard.allowed_org` |
| `MOLE_DEFAULTS_LANGUAGE` | `defaults.language` |
| `MOLE_DEFAULTS_PERSONALITY` | `defaults.personality` |
