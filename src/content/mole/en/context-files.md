---
title: Context Files
order: 5
description: Configure project context for better reviews with .mole/ files.
---

# Context Files

Mole uses files in the `.mole/` directory to understand your project's context. Better context means more relevant reviews.

## Directory structure

```
.mole/
  config.yaml       # Personality, severity filter, architecture rules
  architecture.md   # System design, package structure
  conventions.md    # Naming, error handling, patterns
  decisions.md      # ADRs, tech choices
```

Markdown files are loaded automatically and included in the review prompt. `config.yaml` controls Mole's behavior for this repo.

## Generate automatically

```bash
mole init /path/to/repo
mole init /path/to/repo --language pt-BR   # generate docs in Portuguese
```

## config.yaml

Project-level review configuration (overrides server-level defaults):

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

Describe your project's architecture in markdown. Claude uses this to validate PRs against intended patterns:

```markdown
# Architecture

## Layers
- handlers/ - HTTP handlers (no business logic)
- services/ - Business logic
- repositories/ - Data access

## Rules
- Handlers must not import repositories directly
- All database access goes through repositories
- Services are the only layer that can call external APIs
```

## conventions.md

Document approved conventions so Claude can enforce consistency:

```markdown
# Conventions

## Error handling
Always wrap errors with context: `fmt.Errorf("operation: %w", err)`

## Naming
- Interfaces: -er suffix (Reader, Writer)
- Constructors: New- prefix (NewService, NewClient)
```

## decisions.md

Record Architecture Decision Records (ADRs) and tech choices that inform reviews:

```markdown
# Decisions

## ADR-001: Use Valkey over Redis
We chose Valkey 7.0+ as our cache/queue layer for its open-source licensing.

## ADR-002: Single binary deployment
The application ships as a single Go binary with embedded migrations.
```
