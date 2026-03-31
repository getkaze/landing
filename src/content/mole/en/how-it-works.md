---
title: How It Works
order: 4
description: Mole's architecture and review flow.
---

# How It Works

Mole is a Go backend that integrates with GitHub via webhooks and uses Claude for AI-powered analysis.

## Architecture

```
GitHub PR Event
  → Webhook Handler
    → Diff Parser
      → Context Loader (.mole/ files)
        → Claude Analysis
          → Comment Formatter
            → GitHub API (post comments)
              → Dashboard Update
```

## Review flow

1. **Webhook received**: GitHub sends a pull request event
2. **Diff parsed**: Mole extracts changed files and hunks
3. **Context loaded**: project context from `.mole/` directory is assembled
4. **Claude analysis**: the diff + context is sent to Claude for review
5. **Issues classified**: each finding is categorized and scored
6. **Comments posted**: inline comments are posted on the PR
7. **Dashboard updated**: quality metrics are recorded

## Deep review

For critical PRs, deep review uses Claude Opus with multi-pass analysis:

1. **First pass**: standard review (correctness, style)
2. **Second pass**: architecture and design review
3. **Third pass**: security-focused analysis
4. **Synthesis**: combine findings, remove duplicates, rank by severity

## Quality scoring

Each PR receives a quality score (0-100) based on:
- Number and severity of issues found
- Issue categories affected
- Historical baseline for the repository
- Developer's recent trend

## Tech stack

| Component | Technology |
|-----------|-----------|
| Backend | Go 1.26, spf13/cobra |
| AI | Claude API (Anthropic SDK) |
| Database | MySQL 8.0+ |
| Cache | Valkey 7.0+ (Redis-compatible) |
| Frontend | HTMX, Templ templates |
| Diagrams | Mermaid (security analysis) |
| Metrics | Prometheus |
| Integration | GitHub App, webhooks |
