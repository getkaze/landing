---
title: Docker
order: 8
description: Run Mole with Docker and Docker Compose.
---

# Docker

Pre-built images are published to GHCR on every push to main.

```bash
docker pull ghcr.io/getkaze/mole:main
```

## Run with config file

```bash
docker run -d --name mole \
  -p 8080:8080 \
  -v /path/to/mole.yaml:/etc/mole/mole.yaml \
  -v /path/to/github-app.pem:/etc/mole/github-app.pem \
  ghcr.io/getkaze/mole:main serve --config /etc/mole/mole.yaml
```

## Run with environment variables

```bash
docker run -d --name mole \
  -p 8080:8080 \
  -v /path/to/github-app.pem:/etc/mole/github-app.pem \
  -e MOLE_GITHUB_APP_ID=12345 \
  -e MOLE_GITHUB_PRIVATE_KEY_PATH=/etc/mole/github-app.pem \
  -e MOLE_GITHUB_WEBHOOK_SECRET=secret \
  -e MOLE_LLM_API_KEY=sk-ant-... \
  -e MOLE_MYSQL_HOST=mysql \
  -e MOLE_VALKEY_HOST=valkey \
  ghcr.io/getkaze/mole:main
```

## Docker Compose

```yaml
services:
  mole:
    image: ghcr.io/getkaze/mole:main
    ports:
      - "8080:8080"
    volumes:
      - ./mole.yaml:/etc/mole/mole.yaml
      - ./github-app.pem:/etc/mole/github-app.pem:ro
    environment:
      - MOLE_MYSQL_HOST=mysql
      - MOLE_VALKEY_HOST=valkey
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

## Build locally

```bash
docker build -t mole .
```

## Build from source

```bash
make build     # current platform
make release   # cross-compile for linux/darwin amd64/arm64
make test      # run tests
make clean     # remove binaries
```

Binaries are output to `dist/` with SHA256 checksums.

## Health check

Mole exposes a health endpoint at `/health`:

```bash
curl http://localhost:8080/health
```

## Metrics

Prometheus metrics are available at `/metrics`.
