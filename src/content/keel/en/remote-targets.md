---
title: Remote Targets
order: 6
description: Manage local and remote Docker hosts from the same interface.
---

# Remote Targets

Keel supports multiple Docker targets -- local or remote via SSH tunnel.

## Config

```json
{
  "targets": {
    "local": { "host": "127.0.0.1" },
    "ec2": {
      "host": "1.2.3.4",
      "ssh_user": "ubuntu",
      "ssh_key": "~/.ssh/id_ed25519",
      "ssh_jump": "ec2-user@bastion.example.com",
      "external_ip": "1.2.3.4",
      "port_bind": "0.0.0.0",
      "description": "AWS EC2 Ubuntu"
    }
  },
  "default": "local"
}
```

## Fields

| Field | Description |
|-------|-------------|
| `host` | IP address or hostname |
| `ssh_user` | SSH user for remote targets (omit for local) |
| `ssh_key` | Path to SSH private key (supports `~/`) |
| `ssh_jump` | Bastion/jump host for multi-hop SSH |
| `external_ip` | External IP used by `keel hosts setup` |
| `port_bind` | Bind interface for ports -- `127.0.0.1` (default) or `0.0.0.0` |
| `description` | Human-readable target label |
| `default` | Root-level field -- default target name |

## Switching targets

```bash
keel target ec2      # switch to remote
keel start           # commands now execute on ec2 via SSH
keel target local    # switch back
```

For remote targets, an SSH tunnel is opened automatically, forwarding the remote Docker socket to a local Unix socket (`/tmp/keel-docker-<target>.sock`). The tunnel is monitored with automatic reconnection and exponential backoff -- a live status dot in the topbar shows the connection state via SSE.
