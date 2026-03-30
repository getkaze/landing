---
title: Getting Started
order: 1
description: Install Keel and start managing Docker containers in seconds.
---

# Getting Started

Keel is a self-hosted Docker dashboard — a single Go binary (~10MB) with zero external dependencies that gives you full control over local and remote Docker environments.

## Install

Run the install script to download the binary and set up the data directory:

```bash
curl -fsSL https://getkaze.dev/keel/install.sh | sudo bash
```

This installs the binary to `~/.local/bin/keel` and creates the data directory:

| Platform | Binary | Data Directory |
|----------|--------|----------------|
| Linux (with sudo) | ~/.local/bin/keel | /var/lib/keel |
| Linux (without sudo) | ~/.local/bin/keel | ~/.keel |
| macOS | ~/.local/bin/keel | ~/.keel |

> If `~/.local/bin` is not in your PATH, the installer will show you how to add it.

## Start

Once installed, start the dashboard with a single command:

```bash
keel
```

Open `http://localhost:60000` and you have a full dashboard with live status, logs, terminal, metrics, and container management.

## What you get

- **Live Dashboard** — real-time grid view of all containers with status polling
- **SSE Log Streaming** — stream from `docker logs` or host-path files
- **Browser Terminal** — full interactive PTY via WebSocket
- **Real-Time Metrics** — CPU, memory, disk, load average, per-container stats
- **Remote Targets** — manage remote Docker hosts via SSH tunnel
- **Dev Mode** — mount local code with hot reload
- **Seeders** — run data seeding scripts inside containers
- **Self-Update** — update the binary from the dashboard or CLI
- **Config Editor** — edit service JSON configs inline from the dashboard
- **Health Checks** — HTTP or command-based monitoring with configurable intervals

## Directory structure

```
/var/lib/keel/
  data/
    config.json           # global config (network, subnet)
    targets.json          # Docker targets (local + SSH)
    services/
      redis.json          # one file per container
      traefik.json
    seeders/
      mysql-init.json
    config/
      traefik/
        dynamic.yml       # Traefik routing rules
  state/
    target                # active target name
    ghcr-user             # GHCR credentials (chmod 600)
    ghcr-pat
```

## Next steps

- [Usage](/keel/docs/en/usage) — CLI commands and flags
- [Service Config](/keel/docs/en/service-config) — configure your containers
- [Remote Targets](/keel/docs/en/remote-targets) — manage remote Docker hosts
