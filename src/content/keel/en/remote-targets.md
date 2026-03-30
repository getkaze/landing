---
title: Remote Targets
order: 6
description: Manage local and remote Docker hosts from the same interface.
---

# Remote Targets

Manage local and remote Docker hosts from the same interface. Keel opens an SSH tunnel automatically for remote targets.

## Config

Define targets in `data/targets.json`:

```json
{
  "targets": {
    "local": {
      "host": "127.0.0.1",
      "port_bind": "127.0.0.1"
    },
    "ec2": {
      "host": "user@1.2.3.4",
      "ssh_key": "~/.ssh/id_ed25519",
      "external_ip": "1.2.3.4"
    }
  },
  "default": "local"
}
```

## Fields

| Field | Description |
|-------|-------------|
| host | SSH connection string (user@ip) or "127.0.0.1" for local |
| ssh_key | Path to SSH private key |
| ssh_user | SSH username (alternative to user@ in host) |
| ssh_jump | Jump host for bastion tunneling |
| external_ip | Public IP of the remote host |
| port_bind | IP to bind ports to (default: 127.0.0.1) |
| description | Human-readable label for the target |

## Switching targets

```bash
# Show active target
keel target

# Switch to a remote target
keel target ec2

# All commands now execute on ec2 via SSH
keel start
keel stop redis

# Switch back to local
keel target local
```

## How it works

When you switch to a remote target, Keel opens an SSH tunnel that forwards the remote Docker socket to a local Unix socket at `/tmp/keel-docker-<target>.sock`.

All Docker operations — start, stop, logs, exec, stats — are transparently routed through this tunnel. The dashboard and CLI work exactly the same way regardless of target.

The tunnel includes automatic reconnection with exponential backoff and live status updates via SSE in the dashboard.
