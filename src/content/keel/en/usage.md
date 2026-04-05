---
title: Usage
order: 2
description: All Keel CLI commands and flags.
---

# Usage

All Keel commands. The dashboard starts with a single `keel` command, and the CLI gives you full control over containers, targets, and dev workflows.

## Dashboard

```bash
# Start the dashboard (default: http://localhost:60000)
keel
```

## Container operations

```bash
# Start all services
keel start

# Start specific services
keel start redis mysql

# Start all services in a group
keel start infra

# Stop all services
keel stop

# Stop a specific service
keel stop traefik

# Stop all services in a group
keel stop tools

# Restart all services (stop + start)
keel restart

# Restart specific services
keel restart redis mysql

# Destroy and recreate all containers
keel reset --all

# Recreate a single service
keel reset redis
```

## Remote targets

```bash
# Show active target
keel target

# Switch to a remote target
keel target ec2

# All commands now execute on ec2 via SSH
keel start

# Switch back to local
keel target local
```

## Dev mode

```bash
# Mount local code into a container with hot reload
keel dev api ~/projects/api

# The container runs in foreground
# Ctrl+C to stop and restore the original container
```

> Dev mode requires a `dev` block in the service JSON with `dockerfile` lines. See [Dev Mode](/keel/docs/en/dev-mode) for details.

## Seeders

```bash
# Run all seeders
keel seed

# Run a single seeder
keel seed mysql-init
```

## Hosts

```bash
# Add service domains to /etc/hosts from Traefik config
keel hosts setup

# Use a custom IP
keel hosts setup --ip 10.0.0.5

# Remove keel entries from /etc/hosts
keel hosts remove
```

## Updates

```bash
# Check for updates and install latest
keel update
```

> You can also update from the dashboard via the Settings page.

## Maintenance

```bash
# Remove all containers + network + data directory
keel purge

# Show version
keel version

# Show help
keel help
```

## Flags

| Flag | Default | Description |
|------|---------|-------------|
| `-port` | `60000` | HTTP port |
| `-bind` | `127.0.0.1` | Bind address |
| `-keel-dir` | `/var/lib/keel` (Linux) or `~/.keel` (macOS) | Data directory |
| `-dev` | `false` | Serve web assets from filesystem |

Override the data directory with `KEEL_DIR` environment variable.
