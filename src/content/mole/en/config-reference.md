---
title: Config Reference
order: 7
description: Complete reference for Mole YAML configuration.
---

# Config Reference

Mole's configuration lives in `mole.yaml`. All fields can be overridden with `MOLE_` prefixed environment variables.

## Full example

```yaml
github:
  app_id: 12345                          # GitHub App ID
  private_key_path: /etc/mole/app.pem    # Path to private key
  webhook_secret: "secret"               # Webhook secret

llm:
  api_key: "sk-ant-..."                  # Anthropic API key
  review_model: "claude-sonnet-4-6"      # Standard review model
  deep_review_model: "claude-opus-4-6"   # Deep review model
  # Pricing per 1M tokens [input, output] -- for the Costs dashboard
  # Defaults to Anthropic's published pricing if omitted
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

# Server-level defaults (overridable per-repo via .mole/config.yaml)
defaults:
  language: en                           # en, pt-BR
  personality: mole                      # mole, formal, minimal

# Codebase exploration (optional -- requires git on host)
# Enables /mole dig command for contextual reviews
repos:
  base_path: "/var/lib/mole/repos"   # Where to clone repos (empty = disabled)

exploration:
  max_turns: 25                       # Max Sonnet tool-use turns
  model: "claude-sonnet-4-6"           # Exploration model

# Dashboard (optional)
dashboard:
  github_client_id: ""
  github_client_secret: ""
  session_secret: ""
  base_url: "http://localhost:8080"
  allowed_org: ""                        # Restrict to org members (leave empty to allow all)
```

## GitHub

| Field | Type | Description |
|-------|------|-------------|
| github.app_id | number | GitHub App ID |
| github.private_key_path | string | Path to PEM key file |
| github.webhook_secret | string | Webhook validation secret |

## LLM

| Field | Type | Description |
|-------|------|-------------|
| llm.api_key | string | Anthropic API key |
| llm.review_model | string | Model for standard reviews |
| llm.deep_review_model | string | Model for deep reviews |
| llm.pricing | object | Pricing per 1M tokens [input, output] for cost tracking |

## MySQL

| Field | Type | Description |
|-------|------|-------------|
| mysql.host | string | MySQL host |
| mysql.port | number | MySQL port |
| mysql.database | string | Database name |
| mysql.user | string | Database user |
| mysql.password | string | Database password |

## Valkey

| Field | Type | Description |
|-------|------|-------------|
| valkey.host | string | Valkey host |
| valkey.port | number | Valkey port |

## Server

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| server.port | number | 8080 | HTTP port |
| server.environment | string | production | Environment (development, production) |

## Worker

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| worker.count | number | 3 | Number of worker goroutines |

## Log

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| log.level | string | info | Log level (debug, info, warn, error) |

## Defaults

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| defaults.language | string | en | Review language (en, pt-BR) |
| defaults.personality | string | mole | Personality mode (mole, formal, minimal) |

## Repos

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| repos.base_path | string | (empty) | Where to clone repos for /mole dig (empty = disabled) |

## Exploration

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| exploration.max_turns | number | 25 | Max Sonnet tool-use turns for codebase exploration |
| exploration.model | string | claude-sonnet-4-6 | Model used for codebase exploration |

## Dashboard

Optional HTMX-powered dashboard for developer growth tracking. Requires a GitHub OAuth App (created at github.com/settings/developers) with callback URL `http://your-server/auth/callback`.

| Field | Type | Description |
|-------|------|-------------|
| dashboard.github_client_id | string | GitHub OAuth App client ID |
| dashboard.github_client_secret | string | GitHub OAuth App client secret |
| dashboard.session_secret | string | Random 32-char session secret |
| dashboard.base_url | string | Public URL of the Mole instance |
| dashboard.allowed_org | string | Restrict access to members of a GitHub org (empty = allow all) |

### Access roles

| Role | Own Data | Team Average | Individual Others | Modules | Costs |
|------|----------|-------------|-------------------|---------|-------|
| Dev | Yes | Yes (anonymous) | No | Yes | No |
| Tech Lead | Yes | Yes | Yes (opt-in) | Yes | No |
| Manager | No | Yes | No | Yes | No |
| Admin | Yes | Yes | Yes | Yes | Yes |

Manager sees less than Tech Lead by design -- this tool is for growth, not HR evaluation.

## Environment variables

Every field can be overridden with environment variables using the `MOLE_` prefix:

| Variable | Config field |
|----------|-------------|
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
