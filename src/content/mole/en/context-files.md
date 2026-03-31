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
  config.yaml       # Project-level review config
  architecture.md   # Architecture description
  patterns.md       # Approved patterns and conventions
  ignore.yaml       # Files/patterns to skip
```

## config.yaml

Project-level review configuration:

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

## patterns.md

Document approved patterns so Claude can enforce consistency:

```markdown
# Patterns

## Error handling
Always wrap errors with context: `fmt.Errorf("operation: %w", err)`

## Naming
- Interfaces: -er suffix (Reader, Writer)
- Constructors: New- prefix (NewService, NewClient)
```

## ignore.yaml

Skip files or patterns from review:

```yaml
paths:
  - "vendor/**"
  - "*.generated.go"
  - "testdata/**"
categories:
  - style    # Skip style issues globally
```
