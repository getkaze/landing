---
title: Install & Setup
order: 2
description: Install Mole and configure your GitHub integration.
---

# Install & Setup

Mole requires a GitHub App, a MySQL database, Valkey (Redis-compatible) for caching, and an Anthropic API key.

## Install

```bash
curl -fsSL https://getkaze.dev/mole/install.sh | bash
```

## Prerequisites

| Service | Version | Purpose |
|---------|---------|---------|
| MySQL | 8.0+ | Primary database |
| Valkey | 7.0+ | Cache and queue |
| Anthropic API key | — | Claude API access |
| GitHub App | — | PR webhook integration |

## GitHub App setup

1. Create a new GitHub App in your organization settings
2. Set the webhook URL to your Mole instance
3. Grant permissions: Pull Requests (read/write), Contents (read)
4. Subscribe to events: Pull Request, Pull Request Review
5. Install the app on your target repositories

## Configuration

Create `mole.yaml` in your project root:

```yaml
version: v0.1
database:
  host: localhost
  port: 3306
  name: mole
  user: mole
  password: ${MOLE_DB_PASSWORD}
cache:
  host: localhost
  port: 6379
anthropic:
  api_key: ${ANTHROPIC_API_KEY}
  model: claude-sonnet-4-20250514
github:
  app_id: ${GITHUB_APP_ID}
  private_key_path: ./github-app.pem
  webhook_secret: ${GITHUB_WEBHOOK_SECRET}
server:
  port: 8080
  host: 0.0.0.0
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `MOLE_DB_PASSWORD` | MySQL password |
| `ANTHROPIC_API_KEY` | Claude API key |
| `GITHUB_APP_ID` | GitHub App ID |
| `GITHUB_WEBHOOK_SECRET` | Webhook validation secret |

## Start

```bash
mole serve
```

The dashboard is available at `http://localhost:8080`.

## Next steps

- [Usage](/mole/docs/en/usage) — CLI commands and PR workflow
- [Context Files](/mole/docs/en/context-files) — configure project context
- [Docker](/mole/docs/en/docker) — run with Docker
