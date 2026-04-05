---
title: Sessões
order: 5
description: Como o Helm gerencia estado entre conversas.
---

# Sessões

Helm persiste todo o estado para que o trabalho sobreviva entre sessões do Claude Code. Você pode parar a qualquer momento, fechar o editor e retomar depois sem perder progresso. As sessões incluem backups automáticos com rotação de checkpoints (máx 5).

## Como funciona

1. `helm init` cria `.helm/session.yaml` e `helm.yaml`
2. Agentes rodam dentro do Claude Code via `/helm` e atualizam o estado da sessão
3. `helm save` faz checkpoint do estado para handoff seguro de sessão
4. `helm resume` mostra onde retomar em uma nova sessão do Claude Code

## Estrutura de Arquivos

```
.helm/                    # Estado runtime (gitignored)
  session.yaml            # Estado atual da sessão
  session.yaml.backup     # Auto-backup antes de cada escrita
  handoffs/               # Documentos de handoff entre agentes
  artifacts/              # Output por agente (relatórios, specs)
  checkpoints/            # Snapshots da sessão (máx 5, rotação FIFO)

helm.yaml                 # Config do projeto (commitado)
references/               # Checklists de qualidade (segurança, testes, performance, launch)
```

## Checkpoints

`helm save` valida a integridade da sessão antes de fazer checkpoint:
- Verifica campos obrigatórios em session.yaml
- Verifica se arquivos de handoff existem para agentes completados
- Verifica se diretórios de artefatos existem para agentes completados
- Rotaciona checkpoints antigos (mantém últimos 5)
- Faz auto-backup de session.yaml antes de escrever

## Estado da sessão

O estado da sessão vive em `.helm/session.yaml`:

```yaml
project:
  name: meu-projeto
  type: brownfield
  state: build
execution_profile: guided
current_agent: build
language: pt-BR
workflow: standard
resume_point: "T2.1 - Fase 2 começa"
agents:
  survey:
    status: completed
    score: 92
    timestamp: "2026-03-29T16:30:00Z"
  research:
    status: completed
    score: 95
    timestamp: "2026-03-29T16:45:00Z"
  build:
    status: in_progress
    phase_completed: 1
    phases_total: 3
    tasks_completed: 16
    tasks_total: 29
    next_task: "T2.1"
```

## Handoffs

Todo agente produz um documento de handoff em `.helm/handoffs/`. O próximo agente lê este documento para entender o contexto e continuar o trabalho.

Estrutura do handoff:
- **Summary** (máx 150 linhas): missão concluída, decisões chave, artefatos, score
- **Deep Context** (opcional, máx 500 linhas): descobertas complexas que não cabem no summary

## Artefatos

Agentes produzem artefatos em `.helm/artifacts/{agente}/`. Incluem relatórios, PRDs, docs de arquitetura, breakdowns de tarefas e relatórios de build.

## Retomando

Quando você invoca `/helm` com uma sessão existente:

1. Helm lê o estado da sessão e o último handoff
2. Mostra sua posição atual no pipeline
3. Oferece três opções:
   - Continuar com o próximo passo (recomendado)
   - Revisar último output
   - Ver status completo

## Desvios

Quando requisitos mudam no meio do pipeline, Helm registra o desvio:

```yaml
deviations:
  - timestamp: "2026-03-29T18:00:00Z"
    type: scope_change
    from_agent: build
    to_agent: planning
    reason: "Novo requisito adicionado"
    resolved: false
```

Tipos: `scope_change`, `approach_change`, `skip_agent`, `revisit_agent`.

## Session lock

Enquanto ativo, todas as mensagens passam pelo Helm. O lock é liberado apenas por `/helm exit` ou `/helm stop`. Sair preserva todo o estado. Retomar reativa o lock.
