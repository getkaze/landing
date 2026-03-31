---
title: Install & Setup
order: 2
description: Install Mole and configure your GitHub integration.
---

# Install & Setup

Mole requires a GitHub App, a MySQL database, Valkey (Redis-compatible) for queuing, and an Anthropic API key.

## Prerequisites

| Service | Version | Purpose |
|---------|---------|---------|
| MySQL | 8.0+ | Primary database |
| Valkey | 7.0+ | Queue and cache (Redis-compatible) |
| Anthropic API key | - | Claude API access |
| GitHub App | - | PR webhook integration |

## Install

```bash
curl -fsSL https://getkaze.dev/mole/install.sh | sudo bash
```

Or download from [Releases](https://github.com/getkaze/mole/releases).

## GitHub App setup

Create a new GitHub App at github.com/settings/apps/new:

| Setting | Value |
|---------|-------|
| Webhook URL | `https://your-server.com/webhook` |
| Webhook secret | Strong generated secret |
| Permissions | Pull requests (read & write), Contents (read) |
| Events | Pull request, Issue comment, Installation |

Download the private key and note the App ID.

## Configuration

```bash
cp mole.yaml.example mole.yaml
```

Fill in GitHub App ID, private key path, webhook secret, Anthropic API key, and database credentials. All values can be overridden with `MOLE_` prefixed environment variables (e.g., `MOLE_GITHUB_APP_ID`, `MOLE_LLM_API_KEY`, `MOLE_MYSQL_HOST`).

```yaml
github:
  app_id: 12345
  private_key_path: /etc/mole/app.pem
  webhook_secret: "secret"

llm:
  api_key: "sk-ant-..."
  review_model: "claude-sonnet-4-6"
  deep_review_model: "claude-opus-4-6"

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
```

## Start

```bash
mole serve
```

Mole starts an HTTP server (default port 8080), worker pool, and metrics aggregator. Database migrations run automatically.

## Next steps

- [Usage](/mole/docs/en/usage): CLI commands and PR workflow
- [Context Files](/mole/docs/en/context-files): configure project context
- [Docker](/mole/docs/en/docker): run with Docker
