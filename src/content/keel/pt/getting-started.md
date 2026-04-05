---
title: Primeiros Passos
order: 1
description: Instale o Keel e comece a gerenciar containers Docker em segundos.
---

# Primeiros Passos

**Keel** (a quilha de um navio -- a estrutura oculta que mantém tudo alinhado) é um dashboard web self-hosted para gerenciar ambientes Docker -- locais ou remotos via SSH -- a partir de um único binário Go (~10MB, sem dependências externas).

## Pré-requisitos

- **Docker** -- instalação local ou host remoto com Docker via SSH
- **Par de chaves SSH** -- necessário para targets remotos
- **sudo** -- apenas para `keel hosts setup` (modifica `/etc/hosts`)

## Instalação

```bash
curl -fsSL https://getkaze.dev/keel/install.sh | sudo bash
```

Isso instala o binário em `~/.local/bin/keel` e cria o diretório de dados em `/var/lib/keel`. O binário pertence ao seu usuário, permitindo auto-update pelo dashboard sem sudo. O instalador adiciona automaticamente `~/.local/bin` ao seu PATH (suporta zsh, bash e fish).

## Iniciar

Após instalar, inicie o dashboard com um único comando:

```bash
keel
```

Abra `http://localhost:60000` e você terá um dashboard completo com status em tempo real, logs, terminal, métricas e gerenciamento de containers.

## O que você ganha

- **Dashboard ao Vivo**: visualização em grid em tempo real de todos os containers com polling de status
- **Streaming de Logs SSE**: stream de `docker logs` ou arquivos host-path
- **Terminal no Browser**: PTY interativo completo via WebSocket
- **Métricas em Tempo Real**: CPU, memória, disco, load average, stats por container
- **Targets Remotos**: gerencie hosts Docker remotos via túnel SSH
- **Modo Dev**: monte código local com hot reload
- **Seeders**: execute scripts de seed de dados dentro dos containers
- **Auto-Update**: atualize o binário pelo dashboard ou CLI
- **Editor de Config**: edite configs JSON dos serviços inline pelo dashboard
- **Health Checks**: monitoramento HTTP ou por comando com intervalos configuráveis

## Diretório de dados

| Plataforma | Caminho Padrão | Override |
|------------|---------------|----------|
| Linux | `/var/lib/keel/` | `KEEL_DIR` ou `-keel-dir` |
| macOS | `~/.keel/` | `KEEL_DIR` ou `-keel-dir` |

```
/var/lib/keel/      # Linux (ou ~/.keel/ no macOS)
  data/
    config.json           # config global (rede, subnet)
    targets.json          # targets Docker (local + SSH)
    services/
      redis.json          # um arquivo por container
      traefik.json
    seeders/
      mysql-init.json
    config/
      traefik/
        dynamic.yml       # regras de roteamento Traefik (usado por "keel hosts")
  state/
    target                # nome do target ativo
    ghcr-user             # credenciais GHCR (chmod 600)
    ghcr-pat
```

## Próximos passos

- [Uso](/keel/docs/pt/usage): comandos e flags do CLI
- [Config de Serviço](/keel/docs/pt/service-config): configure seus containers
- [Targets Remotos](/keel/docs/pt/remote-targets): gerencie hosts Docker remotos
