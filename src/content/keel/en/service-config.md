---
title: Service Config
order: 7
description: Complete reference for Keel service JSON configuration.
---

# Service Config

Each service is a JSON file in `data/services/`. Full example:

```json
{
  "name": "redis",
  "group": "database",
  "hostname": "keel-redis",
  "image": "redis:7",
  "network": "keel-net",
  "ports": { "internal": 6379, "external": 6379 },
  "environment": { "REDIS_ARGS": "--maxmemory 256mb" },
  "volumes": ["keel-redis-data:/data"],
  "command": "redis-server --save 60 1",
  "files": ["data/config/redis.conf:/etc/redis/redis.conf"],
  "start_order": 1,
  "ram_estimate_mb": 256,
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

## Fields

| Field | Description |
|-------|-------------|
| `name` | Unique service identifier |
| `group` | Logical grouping -- `infra` starts first, then seeders, then the rest |
| `hostname` | Docker container hostname |
| `image` | Docker image `name:tag` |
| `registry` | `ghcr` -- auto-login with stored credentials; `local` -- skip pull for locally built images (omit for public images) |
| `network` | Docker network (defaults to `keel-net`) |
| `ports` | `{ internal, external }` primary port mapping |
| `extra_ports` | Additional `{ internal, external }` port mappings |
| `environment` | Environment variables passed to the container |
| `volumes` | Volume mounts -- named volumes, bind mounts, or config files |
| `command` | Override container CMD |
| `files` | Config files mounted read-only into the container; synced via `scp` on remote targets (`local:container`) |
| `platform` | Force a specific platform for the image (e.g. `linux/amd64`) -- useful for cross-architecture hosts |
| `start_order` | Startup priority (lower = earlier, 0 = last) |
| `ram_estimate_mb` | Display hint for the dashboard |
| `dashboard_url` | External URL -- shows an **OPEN** button in the UI |
| `health_check` | HTTP or command-based health check config |
| `logs` | Log sources -- `docker` or `file` with optional `host_path` |
| `network_aliases` | Docker network aliases -- enables virtual hostname resolution within the network |
| `dev` | Development mode config -- `dockerfile`, `command`, `cap_add` |
