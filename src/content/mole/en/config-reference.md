---
title: Config Reference
order: 7
description: Complete reference for Mole YAML configuration.
---

# Config Reference

Mole's configuration lives in `mole.yaml` at the project root.

## Full example

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

language: en
```

## Server

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| server.port | number | 8080 | HTTP port |
| server.host | string | 0.0.0.0 | Bind address |

## Database

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| database.host | string | yes | MySQL host |
| database.port | number | yes | MySQL port |
| database.name | string | yes | Database name |
| database.user | string | yes | Database user |
| database.password | string | yes | Database password |
| database.max_connections | number | no | Connection pool size (default: 25) |

## Cache

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| cache.host | string | localhost | Valkey host |
| cache.port | number | 6379 | Valkey port |
| cache.db | number | 0 | Database index |
| cache.ttl | number | 3600 | Default TTL in seconds |

## Anthropic

| Field | Type | Description |
|-------|------|-------------|
| anthropic.api_key | string | Claude API key |
| anthropic.model | string | Model for standard reviews |
| anthropic.deep_model | string | Model for deep reviews |
| anthropic.max_tokens | number | Max response tokens |
| anthropic.timeout | number | Request timeout in seconds |

## GitHub

| Field | Type | Description |
|-------|------|-------------|
| github.app_id | string | GitHub App ID |
| github.private_key_path | string | Path to PEM key file |
| github.webhook_secret | string | Webhook validation secret |

## Review

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| review.personality | string | balanced | Review mode (strict, balanced, encouraging) |
| review.auto_review | boolean | true | Auto-review new PRs |
| review.deep_review_labels | string[] | [] | PR labels that trigger deep review |
| review.max_files_per_review | number | 50 | Max files to analyze per PR |
| review.ignore_draft | boolean | true | Skip draft PRs |

## Environment variables

All config values support `${VAR_NAME}` syntax for environment variable substitution. Sensitive values (passwords, API keys) should always use environment variables.
