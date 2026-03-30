---
title: Arquivos de Contexto
order: 5
description: Configure contexto do projeto para melhores reviews com arquivos .mole/.
---

# Arquivos de Contexto

Mole usa arquivos no diretório `.mole/` para entender o contexto do seu projeto. Melhor contexto significa reviews mais relevantes.

## Estrutura de diretórios

```
.mole/
  config.yaml       # Config de review do projeto
  architecture.md   # Descrição da arquitetura
  patterns.md       # Padrões e convenções aprovados
  ignore.yaml       # Arquivos/padrões a ignorar
```

## config.yaml

Configuração de review no nível do projeto:

```yaml
language: go
framework: gin
personality: balanced
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

Descreva a arquitetura do seu projeto em markdown. Claude usa isso para validar PRs contra padrões pretendidos:

```markdown
# Arquitetura

## Camadas
- handlers/ — Handlers HTTP (sem lógica de negócio)
- services/ — Lógica de negócio
- repositories/ — Acesso a dados

## Regras
- Handlers não devem importar repositories diretamente
- Todo acesso ao banco passa por repositories
- Services são a única camada que pode chamar APIs externas
```

## patterns.md

Documente padrões aprovados para que Claude aplique consistência:

```markdown
# Padrões

## Tratamento de erros
Sempre encapsule erros com contexto: `fmt.Errorf("operação: %w", err)`

## Nomenclatura
- Interfaces: sufixo -er (Reader, Writer)
- Construtores: prefixo New- (NewService, NewClient)
```

## ignore.yaml

Ignore arquivos ou padrões no review:

```yaml
paths:
  - "vendor/**"
  - "*.generated.go"
  - "testdata/**"
categories:
  - style    # Ignorar issues de estilo globalmente
```
