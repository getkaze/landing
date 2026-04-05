---
title: Targets Remotos
order: 6
description: Gerencie hosts Docker locais e remotos pela mesma interface.
---

# Targets Remotos

O Keel suporta múltiplos targets Docker -- locais ou remotos via túnel SSH.

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

## Campos

| Campo | Descrição |
|-------|-----------|
| `host` | Endereço IP ou hostname |
| `ssh_user` | Usuário SSH para targets remotos (omita para local) |
| `ssh_key` | Caminho para a chave privada SSH (suporta `~/`) |
| `ssh_jump` | Host bastion/jump para SSH multi-hop |
| `external_ip` | IP externo usado por `keel hosts setup` |
| `port_bind` | Interface de bind para portas -- `127.0.0.1` (padrão) ou `0.0.0.0` |
| `description` | Label legível para o target |
| `default` | Campo de nível raiz -- nome do target padrão |

## Trocando targets

```bash
keel target ec2      # mudar para remoto
keel start           # comandos agora executam no ec2 via SSH
keel target local    # voltar para local
```

Para targets remotos, um túnel SSH é aberto automaticamente, encaminhando o socket Docker remoto para um Unix socket local (`/tmp/keel-docker-<target>.sock`). O túnel é monitorado com reconexão automática e backoff exponencial -- um ponto de status ao vivo na topbar mostra o estado da conexão via SSE.
