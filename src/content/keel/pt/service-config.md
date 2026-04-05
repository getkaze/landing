---
title: Config de Serviço
order: 7
description: Referência completa para configuração JSON de serviços do Keel.
---

# Config de Serviço

Cada serviço é um arquivo JSON em `data/services/`. Exemplo completo:

```json
{
  "name": "redis",
  "group": "database",
  "hostname": "keel-redis",
  "image": "redis:7",
  "network": "keel-net",
  "ports": { "internal": 6379, "external": 6379 },
  "environment": { "REDIS_ARGS": "--maxmemory 256mb" },
  "volumes": ["keel-redis-data:/data"],
  "command": "redis-server --save 60 1",
  "files": ["data/config/redis.conf:/etc/redis/redis.conf"],
  "start_order": 1,
  "ram_estimate_mb": 256,
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

## Campos

| Campo | Descrição |
|-------|-----------|
| `name` | Identificador único do serviço |
| `group` | Agrupamento lógico -- `infra` inicia primeiro, depois seeders, depois o resto |
| `hostname` | Hostname do container Docker |
| `image` | Imagem Docker `name:tag` |
| `registry` | `ghcr` -- auto-login com credenciais armazenadas; `local` -- pula pull para imagens buildadas localmente (omita para imagens públicas) |
| `network` | Rede Docker (padrão: `keel-net`) |
| `ports` | `{ internal, external }` mapeamento de porta principal |
| `extra_ports` | Mapeamentos adicionais `{ internal, external }` de portas |
| `environment` | Variáveis de ambiente passadas ao container |
| `volumes` | Montagens de volume -- volumes nomeados, bind mounts ou arquivos de config |
| `command` | Sobrescrever CMD do container |
| `files` | Arquivos de config montados como somente leitura no container; sincronizados via `scp` em targets remotos (`local:container`) |
| `platform` | Forçar uma plataforma específica para a imagem (ex: `linux/amd64`) -- útil para hosts cross-architecture |
| `start_order` | Prioridade de startup (menor = mais cedo, 0 = último) |
| `ram_estimate_mb` | Dica de exibição para o dashboard |
| `dashboard_url` | URL externa -- mostra um botão **ABRIR** na UI |
| `health_check` | Config de health check HTTP ou por comando |
| `logs` | Fontes de log -- `docker` ou `file` com `host_path` opcional |
| `network_aliases` | Aliases de rede Docker -- habilita resolução de hostname virtual dentro da rede |
| `dev` | Config de modo desenvolvimento -- `dockerfile`, `command`, `cap_add` |
