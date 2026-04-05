---
title: Docker
order: 8
description: Execute o Mole com Docker.
---

# Docker

Uma imagem pre-built e publicada no GHCR a cada push na `main`:

```bash
docker pull ghcr.io/getkaze/mole:main
```

## Executar com arquivo de config

```bash
docker run -d --name mole \
  -p 8080:8080 \
  -v /path/to/mole.yaml:/etc/mole/mole.yaml \
  -v /path/to/github-app.pem:/etc/mole/github-app.pem \
  ghcr.io/getkaze/mole:main serve --config /etc/mole/mole.yaml
```

## Executar com variaveis de ambiente

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

## Build local

```bash
docker build -t mole .
```
