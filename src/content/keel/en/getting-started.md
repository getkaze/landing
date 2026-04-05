---
title: Getting Started
order: 1
description: Install Keel and start managing Docker containers in seconds.
---

# Getting Started

**Keel** (the keel of a ship -- the hidden structure that keeps everything aligned) is a self-hosted web dashboard for managing Docker environments -- local or remote via SSH -- from a single Go binary (~10MB, no external dependencies).

## Prerequisites

- **Docker** -- local install or remote host with Docker via SSH
- **SSH key pair** -- required for remote targets
- **sudo** -- only for `keel hosts setup` (modifies `/etc/hosts`)

## Install

```bash
curl -fsSL https://getkaze.dev/keel/install.sh | sudo bash
```

This installs the binary to `~/.local/bin/keel` and creates the data directory at `/var/lib/keel`. The binary is owned by your user, enabling self-update from the dashboard without sudo. The installer automatically adds `~/.local/bin` to your PATH (supports zsh, bash, and fish).

## Start

Once installed, start the dashboard with a single command:

```bash
keel
```

Open `http://localhost:60000` and you have a full dashboard with live status, logs, terminal, metrics, and container management.

## What you get

- **Live Dashboard**: real-time grid view of all containers with status polling
- **SSE Log Streaming**: stream from `docker logs` or host-path files
- **Browser Terminal**: full interactive PTY via WebSocket
- **Real-Time Metrics**: CPU, memory, disk, load average, per-container stats
- **Remote Targets**: manage remote Docker hosts via SSH tunnel
- **Dev Mode**: mount local code with hot reload
- **Seeders**: run data seeding scripts inside containers
- **Self-Update**: update the binary from the dashboard or CLI
- **Config Editor**: edit service JSON configs inline from the dashboard
- **Health Checks**: HTTP or command-based monitoring with configurable intervals

## Data directory

| Platform | Default Path | Override |
|----------|-------------|----------|
| Linux | `/var/lib/keel/` | `KEEL_DIR` or `-keel-dir` |
| macOS | `~/.keel/` | `KEEL_DIR` or `-keel-dir` |

```
/var/lib/keel/      # Linux (or ~/.keel/ on macOS)
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
        dynamic.yml       # Traefik routing rules (used by "keel hosts")
  state/
    target                # active target name
    ghcr-user             # GHCR credentials (chmod 600)
    ghcr-pat
```

## Next steps

- [Usage](/keel/docs/en/usage): CLI commands and flags
- [Service Config](/keel/docs/en/service-config): configure your containers
- [Remote Targets](/keel/docs/en/remote-targets): manage remote Docker hosts
