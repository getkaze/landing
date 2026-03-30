---
title: Primeiros Passos
order: 1
description: Instale o Helm e comece a orquestrar seus projetos backend.
---

# Primeiros Passos

Helm é um orquestrador de agentes AI para desenvolvimento backend. Ele guia seu projeto por um pipeline estruturado — da descoberta ao deploy — usando agentes especializados com gates de qualidade em cada etapa.

## O que é o Helm?

Helm é um gerenciador de estado, não um executor. A lógica dos agentes vive em definições markdown e roda dentro do Claude Code. O CLI gerencia o estado da sessão, exibe progresso e faz a ponte entre conversas.

- **13 agentes especializados** em 5 fases do pipeline
- **10 regras de governança** garantindo qualidade, limites e rastreabilidade
- **Gates de qualidade** com threshold de 95% antes de build e deploy
- **Continuidade de sessão** — pare, retome e faça checkpoint a qualquer momento

## Instalação

```bash
curl -fsSL https://getkaze.dev/helm/install.sh | bash
```

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
Scout → Research → Planning → Architect → Roadmap → Breakdown → Review → Build → Verify → Ship
```

### Fluxo brownfield

```
Survey → Research → Planning → Architect → Roadmap → Breakdown → Review → Build → Verify → Ship
```

## O que você ganha

- **Fase Discover** — Scout ou Survey analisa seu projeto, Research valida os achados
- **Fase Plan** — Planning cria o PRD, Architect define a arquitetura, Roadmap sequencia entregas, Breakdown cria tarefas, Review valida rastreabilidade
- **Fase Build** — Build implementa tarefas contra critérios de aceite
- **Fase Quality** — Verify valida a implementação contra a spec
- **Fase Deploy** — Ship cuida do release e deployment

## Próximos passos

- [Pipeline](/helm/docs/pt/pipeline) — entenda as 5 fases
- [Agentes](/helm/docs/pt/agents) — conheça os 13 agentes especializados
- [Uso](/helm/docs/pt/usage) — comandos do CLI e workflow
