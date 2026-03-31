---
title: Primeiros Passos
order: 1
description: Instale o Keel e comece a gerenciar containers Docker em segundos.
---

# Primeiros Passos

Keel é um dashboard Docker self-hosted. Um único binário Go (~10MB) sem dependências externas que dá controle total sobre ambientes Docker locais e remotos.

## Instalação

Execute o script de instalação para baixar o binário e configurar o diretório de dados:

```bash
curl -fsSL https://getkaze.dev/keel/install.sh | sudo bash
```

Isso instala o binário em `~/.local/bin/keel` e cria o diretório de dados:

| Plataforma | Binário | Diretório de Dados |
|------------|---------|-------------------|
| Linux (com sudo) | ~/.local/bin/keel | /var/lib/keel |
| Linux (sem sudo) | ~/.local/bin/keel | ~/.keel |
| macOS | ~/.local/bin/keel | ~/.keel |

> Se `~/.local/bin` não estiver no seu PATH, o instalador mostrará como adicioná-lo.

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

## Estrutura de diretórios

```
/var/lib/keel/
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
        dynamic.yml       # regras de roteamento Traefik
  state/
    target                # nome do target ativo
    ghcr-user             # credenciais GHCR (chmod 600)
    ghcr-pat
```

## Próximos passos

- [Uso](/keel/docs/pt/usage): comandos e flags do CLI
- [Config de Serviço](/keel/docs/pt/service-config): configure seus containers
- [Targets Remotos](/keel/docs/pt/remote-targets): gerencie hosts Docker remotos
