---
title: Dev Mode
order: 5
description: Run services locally with source code mounted and hot reload.
---

# Dev Mode

Run a service locally with your source code mounted and hot reload enabled.

## Usage

```bash
keel dev <service> <local-path>
```

## How it works

1. Reads `dev.dockerfile` from the service JSON and builds a dev image
2. Stops the existing container
3. Runs the dev container in foreground with your local code mounted as a volume
4. Streams stdout/stderr to your terminal. `Ctrl+C` to stop

> Dev mode is only available on the **local** target. It is not supported over SSH.

## Service config

Add a `dev` block to your service JSON:

```json
{
  "dev": {
    "dockerfile": [
      "FROM golang:1.24",
      "RUN go install github.com/air-verse/air@latest",
      "WORKDIR /app",
      "COPY go.mod go.sum ./",
      "RUN go mod download"
    ],
    "command": ["air"],
    "cap_add": ["NET_BIND_SERVICE"]
  }
}
```

## Fields

| Field | Type | Description |
|-------|------|-------------|
| dev.dockerfile | string[] | Dockerfile lines for the dev image |
| dev.command | string[] | Command to run in the dev container |
| dev.cap_add | string[] | Linux capabilities to add |

## Example

```bash
# Run a Go service with air for hot reload
keel dev api ~/projects/api

# The container runs in foreground
# Your local ~/projects/api is mounted at /app
# Ctrl+C to stop and restore the original container
```
