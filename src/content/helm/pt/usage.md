---
title: Uso
order: 3
description: Comandos do Helm e workflow diário.
---

# Uso

O Helm é invocado dentro do Claude Code via o comando `/helm`. O CLI gerencia inicialização e exibição de estado.

## Comandos

```bash
# Inicializar um novo projeto
helm init
helm init --name my-api --type brownfield --lang pt-BR
helm init --force                    # reinicializar projeto existente

# Verificar status do pipeline
helm status                          # dashboard colorido
helm status --short                  # resumo em uma linha
helm status --json                   # saída legível por máquina

# Retomar de onde parou
helm resume                          # mostrar contexto + próximos passos
helm resume --json                   # saída estruturada

# Salvar checkpoint do estado da sessão
helm save                            # validar + checkpoint
helm save --message "before refactor"
helm save --force                    # pular aviso de checkpoint recente

# Atualizar para última versão
helm update

# Outros
helm version
helm help
```

### Flags Globais

| Flag | Descrição |
|------|-----------|
| `--no-color` | Desabilitar saída colorida |

Cor é automaticamente desabilitada ao redirecionar saída ou quando a variável de ambiente `NO_COLOR` está definida.

## Comandos no Claude Code

Dentro do Claude Code, estes comandos controlam o orquestrador:

```
/helm              # Iniciar ou retomar o pipeline
/helm status       # Mostrar dashboard do projeto
/helm resume       # Recarregar sessão e continuar
/helm exit         # Salvar estado e parar
/helm stop         # Mesmo que exit
/helm help         # Mostrar comandos disponíveis
```

## Workflow diário

### Iniciando um novo projeto

1. Execute `helm init` no diretório do projeto
2. Abra o Claude Code e digite `/helm`
3. Descreva seu projeto. Helm roteia para o primeiro agente
4. Siga o pipeline em cada fase

### Retomando trabalho

1. Abra o Claude Code e digite `/helm`
2. Helm lê sua sessão e mostra onde você parou
3. Escolha continuar, revisar ou ver status

### Quick flow

Para tarefas pequenas e bem definidas (bug fixes, hotfixes):

1. Digite `/helm` e descreva a correção
2. Helm detecta que é uma tarefa rápida e oferece fast track
3. Fast track: Research (rápido) → Build → Verify → Ship
4. Pula: Planning, Architect, Roadmap, Breakdown, Review

## Perfis de execução

| Perfil | Comportamento |
|--------|--------------|
| Explore | Somente leitura. Agentes analisam e sugerem sem realizar escritas. |
| Guided | Padrão. Agentes propõem ações, usuário confirma antes de escritas. |
| Autonomous | Agentes executam sem confirmação quando gates passam em >= 95%. |

Se a qualidade cair abaixo de 95% durante execução autônoma, Helm rebaixa para modo guided.

## Arquivos de sessão

| Arquivo | Propósito | Commitado |
|---------|-----------|-----------|
| `helm.yaml` | Config do projeto (versão, tipo, idioma) | Sim |
| `.helm/session.yaml` | Estado runtime (agente atual, scores, timestamps) | Não |
| `.helm/handoffs/*.md` | Documentos de handoff dos agentes | Não |
| `.helm/artifacts/` | Artefatos de output dos agentes | Não |
