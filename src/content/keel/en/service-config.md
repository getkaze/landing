---
title: Service Config
order: 7
description: Complete reference for Keel service JSON configuration.
---

# Service Config

Each service is a JSON file in `data/services/`. Keel reads these files to create and manage Docker containers.

## Full example

```json
{
  "name": "redis",
  "group": "infra",
  "hostname": "keel-redis",
  "image": "redis:7",
  "network": "keel-net",
  "ports": { "internal": 6379, "external": 6379 },
  "environment": { "REDIS_ARGS": "--maxmemory 256mb" },
  "volumes": ["keel-redis-data:/data"],
  "ram_estimate_mb": 256,
  "start_order": 1,
  "dashboard_url": "http://localhost:8001",
  "health_check": {
    "type": "command",
    "command": "redis-cli ping",
    "interval": 5,
    "retries": 10,
    "start_period": 5
  },
  "logs": [
    { "name": "redis", "type": "docker" },
    { "name": "slow", "type": "file", "path": "/var/log/redis-slow.log", "host_path": "/applog/redis/slow.log" }
  ],
  "dev": {
    "dockerfile": ["FROM redis:7", "WORKDIR /data"],
    "command": ["redis-server", "--loglevel", "debug"]
  }
}
```

## Core fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Service name (must match filename) |
| image | string | yes | Docker image with tag |
| hostname | string | no | Container hostname (defaults to keel-{name}) |
| network | string | no | Docker network name (defaults to keel-net) |
| group | string | no | Category for grouping (e.g. infra, app, tools) |
| start_order | number | no | Start sequence (lower = first, 0 = no preference) |

## Registry

The `registry` field controls authentication when pulling images:

| Value | Behavior |
|-------|----------|
| (omitted) | Docker Hub, no special authentication |
| "ghcr" | GitHub Container Registry, auto-login to ghcr.io |
| "local" | Skip pull — image must already exist on the host |

## Networking

| Field | Type | Description |
|-------|------|-------------|
| ports.internal | number | Container port |
| ports.external | number | Host port (0 = no host binding) |

## Runtime

| Field | Type | Description |
|-------|------|-------------|
| environment | object | Environment variables as key-value pairs |
| volumes | string[] | Volume mounts (named volumes or bind mounts) |
| command | string | Override container entrypoint command |
| files | string[] | File mounts in "host:container" format (read-only) |
| ram_estimate_mb | number | Expected RAM usage (shown in dashboard) |

## Dashboard URL

Services can define a `dashboard_url`. When set, an **OPEN** button appears on the overview card and detail page.

```json
{
  "name": "redisinsight",
  "dashboard_url": "http://localhost:5540"
}
```

## Health checks

| Field | Type | Description |
|-------|------|-------------|
| health_check.type | string | "http" or "command" |
| health_check.command | string | Command to run (for type "command") |
| health_check.url | string | URL to check (for type "http") |
| health_check.interval | number | Check interval in seconds |
| health_check.retries | number | Max retries before unhealthy |
| health_check.start_period | number | Grace period in seconds |

## Logs

Each service can have multiple log sources:

| Field | Type | Description |
|-------|------|-------------|
| logs[].name | string | Display name for the log tab |
| logs[].type | string | "docker" or "file" |
| logs[].path | string | Container file path (for type "file") |
| logs[].host_path | string | Host file path (for type "file") |

> Host-path logs can be read even when the container is crashed or stopped.

## Dev mode

Services can define a `dev` block for local development with hot reload. See [Dev Mode](/keel/docs/en/dev-mode) for full details.

| Field | Type | Description |
|-------|------|-------------|
| dev.dockerfile | string[] | Dockerfile lines for the dev image |
| dev.command | string[] | Command to run in the dev container |
| dev.cap_add | string[] | Linux capabilities to add |

## Config editor

Every service config can be edited inline from the dashboard. Changes are saved atomically with an automatic backup of the previous version.
