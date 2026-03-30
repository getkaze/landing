---
title: Config de Serviço
order: 7
description: Referência completa para configuração JSON de serviços do Keel.
---

# Config de Serviço

Cada serviço é um arquivo JSON em `data/services/`. O Keel lê esses arquivos para criar e gerenciar containers Docker.

## Exemplo completo

```json
{
  "name": "redis",
  "group": "infra",
  "hostname": "keel-redis",
  "image": "redis:7",
  "network": "keel-net",
  "ports": { "internal": 6379, "external": 6379 },
  "environment": { "REDIS_ARGS": "--maxmemory 256mb" },
  "volumes": ["keel-redis-data:/data"],
  "ram_estimate_mb": 256,
  "start_order": 1,
  "dashboard_url": "http://localhost:8001",
  "health_check": {
    "type": "command",
    "command": "redis-cli ping",
    "interval": 5,
    "retries": 10,
    "start_period": 5
  },
  "logs": [
    { "name": "redis", "type": "docker" },
    { "name": "slow", "type": "file", "path": "/var/log/redis-slow.log", "host_path": "/applog/redis/slow.log" }
  ],
  "dev": {
    "dockerfile": ["FROM redis:7", "WORKDIR /data"],
    "command": ["redis-server", "--loglevel", "debug"]
  }
}
```

## Campos principais

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| name | string | sim | Nome do serviço (deve corresponder ao nome do arquivo) |
| image | string | sim | Imagem Docker com tag |
| hostname | string | não | Hostname do container (padrão: keel-{name}) |
| network | string | não | Nome da rede Docker (padrão: keel-net) |
| group | string | não | Categoria para agrupamento (ex: infra, app, tools) |
| start_order | number | não | Sequência de início (menor = primeiro, 0 = sem preferência) |

## Registry

O campo `registry` controla autenticação ao baixar imagens:

| Valor | Comportamento |
|-------|--------------|
| (omitido) | Docker Hub — sem autenticação especial |
| "ghcr" | GitHub Container Registry — auto-login no ghcr.io |

## Rede

| Campo | Tipo | Descrição |
|-------|------|-----------|
| ports.internal | number | Porta do container |
| ports.external | number | Porta do host (0 = sem binding no host) |

## Runtime

| Campo | Tipo | Descrição |
|-------|------|-----------|
| environment | object | Variáveis de ambiente como pares chave-valor |
| volumes | string[] | Montagens de volume (volumes nomeados ou bind mounts) |
| command | string | Sobrescrever comando entrypoint do container |
| files | string[] | Montagens de arquivo no formato "host:container" (somente leitura) |
| ram_estimate_mb | number | Uso esperado de RAM (exibido no dashboard) |

## URL do Dashboard

Serviços podem definir uma `dashboard_url`. Quando definida, um botão **ABRIR** aparece no card de overview e na página de detalhes.

```json
{
  "name": "redisinsight",
  "dashboard_url": "http://localhost:5540"
}
```

## Health checks

| Campo | Tipo | Descrição |
|-------|------|-----------|
| health_check.type | string | "http" ou "command" |
| health_check.command | string | Comando a executar (para tipo "command") |
| health_check.url | string | URL a verificar (para tipo "http") |
| health_check.interval | number | Intervalo de verificação em segundos |
| health_check.retries | number | Máximo de retries antes de unhealthy |
| health_check.start_period | number | Período de graça em segundos |

## Logs

Cada serviço pode ter múltiplas fontes de log:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| logs[].name | string | Nome de exibição da aba de log |
| logs[].type | string | "docker" ou "file" |
| logs[].path | string | Caminho do arquivo no container (para tipo "file") |
| logs[].host_path | string | Caminho do arquivo no host (para tipo "file") |

> Logs host-path podem ser lidos mesmo quando o container está crashado ou parado.

## Modo dev

Serviços podem definir um bloco `dev` para desenvolvimento local com hot reload. Veja [Modo Dev](/keel/docs/pt/dev-mode) para detalhes completos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| dev.dockerfile | string[] | Linhas do Dockerfile para a imagem dev |
| dev.command | string[] | Comando para executar no container dev |
| dev.cap_add | string[] | Capabilities Linux a adicionar |

## Editor de config

Todo config de serviço pode ser editado inline pelo dashboard. Alterações são salvas atomicamente com backup automático da versão anterior.
