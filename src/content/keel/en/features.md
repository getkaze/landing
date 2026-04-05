---
title: Features
order: 3
description: Complete feature overview of Keel's Docker management capabilities.
---

# Features

A complete overview of everything Keel can do.

## Dashboard

Live grid view of all containers with real-time status polling. Group services by category. Start, stop, restart, and update containers directly from the UI.

## Logs

SSE-based streaming from `docker logs` or container files. Supports **host-path logs** -- read log files directly from the host filesystem even when the container is crashed or stopped.

## Terminal

Full interactive terminal in the browser via WebSocket + PTY. Ctrl+\` to toggle. Multi-tab support -- a fixed **Local** tab is always available, and each `docker exec` connection opens in its own tab. Click **CONNECT** on any running container to open a shell session.

## Metrics

Real-time CPU, memory, disk, load average, uptime, and per-container Docker stats (CPU%, RAM, network I/O, block I/O).

## Config Editor

Inline JSON editor for each service. Edit, save, and the config is written atomically with backup.

## Dashboard URL

Services can define a `dashboard_url` in their JSON config. When set, an **OPEN** button appears on both the overview card and detail page, linking to the service's web UI (e.g., RedisInsight, DBGate, pgAdmin).

```json
{
  "name": "redisinsight",
  "dashboard_url": "http://localhost:5540"
}
```

## Health Checks

HTTP or command-based health checks with configurable interval, retries, and start period.
