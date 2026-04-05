---
title: Primeiros Passos
order: 1
description: Instale o Helm e comece a orquestrar seus projetos backend.
---

# Primeiros Passos

**Helm** (o leme de um navio -- a roda que direciona) é uma ferramenta CLI que gerencia o ciclo de vida de sessões de pipeline de agentes AI. Oferece visibilidade no progresso do pipeline, continuidade de sessão entre conversas do Claude Code e checkpointing de estado.

## O que é o Helm?

Helm é um **gerenciador de estado, não um executor**. A lógica dos agentes vive em definições markdown e roda dentro do Claude Code. O CLI gerencia o estado da sessão, exibe progresso e faz a ponte entre conversas.

```bash
helm init
helm status
helm resume
helm save
```

## Instalação

```bash
curl -fsSL https://getkaze.dev/helm/install.sh | bash
```

Instala a versão mais recente em `~/.local/bin/helm`. Para atualizar depois, execute `helm update`.

### A partir do código-fonte

```bash
git clone https://github.com/getkaze/helm.git
cd helm
make build
```

O binário é gerado em `bin/helm`. Adicione ao seu PATH ou execute diretamente.

### Dentro do Claude Code

Use o slash command `/helm` para ativar o orquestrador. O CLI complementa o Claude Code -- use-o standalone para verificar status e fazer checkpoint do estado.

## Inicializar um projeto

```bash
helm init
```

Isso cria `helm.yaml` (commitado) e `.helm/` (estado runtime, não commitado).

## Iniciar o pipeline

Dentro do Claude Code, invoque:

```
/helm
```

O Helm detecta se seu projeto é greenfield (novo) ou brownfield (existente) e roteia para o primeiro agente correto.

### Fluxo greenfield

```
scout → research → planning → architect → roadmap → breakdown → review → build → verify → ship
```

### Fluxo brownfield

```
survey → research → planning → architect → roadmap → breakdown → review → build → verify → ship
```

## O que você ganha

- **Fase Discover**: Scout ou Survey analisa seu projeto, Research valida os achados
- **Fase Plan**: Planning cria o PRD, Architect define a arquitetura, Roadmap sequencia entregas, Breakdown cria tarefas, Review valida rastreabilidade
- **Fase Build**: Build implementa tarefas contra critérios de aceite
- **Fase Quality**: Verify valida a implementação contra a spec
- **Fase Deploy**: Ship cuida do release e deployment

## Próximos passos

- [Pipeline](/helm/docs/pt/pipeline): entenda as 5 fases
- [Agentes](/helm/docs/pt/agents): conheça os 12 agentes
- [Uso](/helm/docs/pt/usage): comandos do CLI e workflow
