---
title: Docker
order: 8
description: Run Mole with Docker and Docker Compose.
---

# Docker

Run Mole in a container for easy deployment.

## Quick start

```bash
docker run -d \
  --name mole \
  -p 8080:8080 \
  -v ./mole.yaml:/app/mole.yaml \
  -e MOLE_DB_PASSWORD=secret \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -e GITHUB_APP_ID=12345 \
  -e GITHUB_WEBHOOK_SECRET=whsec_... \
  ghcr.io/getkaze/mole:latest
```

## Docker Compose

```yaml
services:
  mole:
    image: ghcr.io/getkaze/mole:latest
    ports:
      - "8080:8080"
    volumes:
      - ./mole.yaml:/app/mole.yaml
      - ./github-app.pem:/app/github-app.pem:ro
    environment:
      - MOLE_DB_PASSWORD=${MOLE_DB_PASSWORD}
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - GITHUB_APP_ID=${GITHUB_APP_ID}
      - GITHUB_WEBHOOK_SECRET=${GITHUB_WEBHOOK_SECRET}
    depends_on:
      mysql:
        condition: service_healthy
      valkey:
        condition: service_started

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: mole
      MYSQL_USER: mole
      MYSQL_PASSWORD: ${MOLE_DB_PASSWORD}
    volumes:
      - mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 5s
      retries: 10

  valkey:
    image: valkey/valkey:7
    volumes:
      - valkey-data:/data

volumes:
  mysql-data:
  valkey-data:
```

## Build from source

```bash
git clone https://github.com/getkaze/mole.git
cd mole
docker build -t mole .
```

## Environment variables

All configuration can be overridden with environment variables. See [Config Reference](/mole/docs/en/config-reference) for the full list.

## Health check

Mole exposes a health endpoint at `/health`:

```bash
curl http://localhost:8080/health
```

## Metrics

When enabled, Prometheus metrics are available at `:9090/metrics`.
