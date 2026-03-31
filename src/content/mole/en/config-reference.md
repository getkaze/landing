---
title: Config Reference
order: 7
description: Complete reference for Mole YAML configuration.
---

# Config Reference

Mole's configuration lives in `mole.yaml`. All fields can be overridden with `MOLE_` prefixed environment variables (e.g., `MOLE_GITHUB_APP_ID`, `MOLE_LLM_API_KEY`, `MOLE_MYSQL_HOST`).

## Full example

```yaml
github:
  app_id: 12345
  private_key_path: /etc/mole/app.pem
  webhook_secret: "secret"

llm:
  api_key: "sk-ant-..."
  review_model: "claude-sonnet-4-6"
  deep_review_model: "claude-opus-4-6"
  # Pricing per 1M tokens [input, output] - for the Costs dashboard
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

worker:
  count: 3

log:
  level: info

# Server-level defaults (overridable per-repo via .mole/config.yaml)
defaults:
  language: en
  personality: mole

# Dashboard (optional)
dashboard:
  github_client_id: ""
  github_client_secret: ""
  session_secret: ""
  base_url: "http://localhost:8080"
  allowed_org: ""
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
|------|----------|--------------|------------------|---------|-------|
| Dev | Yes | Yes (anonymous) | No | Yes | No |
| Tech Lead | Yes | Yes | Yes (opt-in) | Yes | No |
| Architect | Yes | Yes | Yes (opt-in) | Yes | No |
| Manager | No | Yes | No | Yes | No |
| Admin | Yes | Yes | Yes | Yes | Yes |

Manager sees less than Tech Lead by design -- this tool is for growth, not HR evaluation.
