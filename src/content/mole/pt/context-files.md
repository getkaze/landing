---
title: Arquivos de Contexto
order: 5
description: Configure contexto do projeto para melhores reviews com arquivos .mole/.
---

# Arquivos de Contexto

Mole usa arquivos no diretorio `.mole/` para entender o contexto do seu projeto. Melhor contexto significa reviews mais relevantes.

## Estrutura de diretorios

```
.mole/
  config.yaml       # Personalidade, filtro de severidade, regras de arquitetura
  architecture.md   # Design do sistema, estrutura de pacotes
  conventions.md    # Nomenclatura, tratamento de erros, padroes
  decisions.md      # ADRs, escolhas tecnicas
```

Arquivos markdown sao carregados automaticamente e incluidos no prompt de review. `config.yaml` controla o comportamento do Mole para este repo.

## Gerar automaticamente

```bash
mole init /path/to/repo
mole init /path/to/repo --language pt-BR   # gerar docs em Portugues
```

## config.yaml

Configuracao de review no nivel do projeto (sobrescreve defaults do servidor):

```yaml
language: go
framework: gin
personality: formal
deep_review:
  enabled: true
  triggers:
    - path: "internal/auth/**"
    - label: "security"
focus_areas:
  - security
  - performance
ignore_categories:
  - style
```

## architecture.md

Descreva a arquitetura do seu projeto em markdown. Claude usa isso para validar PRs contra padroes pretendidos:

```markdown
# Arquitetura

## Camadas
- handlers/ - Handlers HTTP (sem logica de negocio)
- services/ - Logica de negocio
- repositories/ - Acesso a dados

## Regras
- Handlers nao devem importar repositories diretamente
- Todo acesso ao banco passa por repositories
- Services sao a unica camada que pode chamar APIs externas
```

## conventions.md

Documente convencoes aprovadas para que Claude aplique consistencia:

```markdown
# Convencoes

## Tratamento de erros
Sempre encapsule erros com contexto: `fmt.Errorf("operacao: %w", err)`

## Nomenclatura
- Interfaces: sufixo -er (Reader, Writer)
- Construtores: prefixo New- (NewService, NewClient)
```

## decisions.md

Registre Architecture Decision Records (ADRs) e escolhas tecnicas que informam os reviews:

```markdown
# Decisoes

## ADR-001: Usar Valkey ao inves de Redis
Escolhemos Valkey 7.0+ como camada de cache/fila pelo licenciamento open-source.

## ADR-002: Deploy como binario unico
A aplicacao e distribuida como um unico binario Go com migrations embarcadas.
```
