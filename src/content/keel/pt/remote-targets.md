---
title: Targets Remotos
order: 6
description: Gerencie hosts Docker locais e remotos pela mesma interface.
---

# Targets Remotos

Gerencie hosts Docker locais e remotos pela mesma interface. O Keel abre um túnel SSH automaticamente para targets remotos.

## Config

Defina targets em `data/targets.json`:

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

## Campos

| Campo | Descrição |
|-------|-----------|
| host | String de conexão SSH (user@ip) ou "127.0.0.1" para local |
| ssh_key | Caminho para a chave privada SSH |
| ssh_user | Usuário SSH (alternativa a user@ no host) |
| ssh_jump | Jump host para tunelamento via bastion |
| external_ip | IP público do host remoto |
| port_bind | IP para bind de portas (padrão: 127.0.0.1) |
| description | Label legível para o target |

## Trocando targets

```bash
# Mostrar target ativo
keel target

# Mudar para um target remoto
keel target ec2

# Todos os comandos agora executam no ec2 via SSH
keel start
keel stop redis

# Voltar para local
keel target local
```

## Como funciona

Quando você muda para um target remoto, o Keel abre um túnel SSH que encaminha o socket Docker remoto para um Unix socket local em `/tmp/keel-docker-<target>.sock`.

Todas as operações Docker (start, stop, logs, exec, stats) são roteadas transparentemente através desse túnel. O dashboard e o CLI funcionam exatamente da mesma forma independente do target.

O túnel inclui reconexão automática com backoff exponencial e atualizações de status em tempo real via SSE no dashboard.
