---
title: Features
order: 3
description: Complete feature overview of Keel's Docker management capabilities.
---

# Features

A complete overview of everything Keel can do.

## Live Dashboard

Real-time grid view of all containers with status polling. Group services by category. Start, stop, restart, and update containers without leaving the browser.

## SSE Log Streaming

Stream logs from `docker logs` or host-path files, even when the container is crashed or stopped. Multiple log sources per service with tabbed navigation.

## Browser Terminal

Full interactive PTY via WebSocket. Multi-tab interface with a fixed Local tab plus one tab per `docker exec` session. Toggle with Ctrl+`.

## Real-Time Metrics

CPU, memory, disk, load average, uptime, and per-container Docker stats including network and block I/O. All displayed in the dashboard with auto-refresh.

## Remote Targets via SSH

Manage local and remote Docker hosts from the same interface. Switch targets with a single command. SSH tunnel opened automatically with reconnection and exponential backoff.

## Dev Mode + Hot Reload

Mount local source code into a container with a custom Dockerfile and stream output directly to your terminal. Ctrl+C to stop and restore the original container.

## Seeders

Run data seeding scripts inside containers: database migrations, fixture data, initial configs. Execute via CLI or dashboard.

## Config Editor

Inline JSON editor for each service. Edit and save directly from the dashboard. Changes are written atomically with automatic backup of the previous version.

## Health Checks

HTTP or command-based health monitoring with configurable interval, retries, and start period. Status visible on the dashboard cards.

## Dashboard URLs

Link services to their web UIs. When configured, an OPEN button appears on the overview card and detail page.

## GHCR Support

Auto-login to GitHub Container Registry with stored credentials. Pull private images from ghcr.io without manual docker login.

## Service Creation

Create new services directly from the dashboard UI. Fill in the fields and Keel generates the JSON config file.

## Self-Update

Update the binary from the dashboard Settings page or via `keel update` in the CLI.
