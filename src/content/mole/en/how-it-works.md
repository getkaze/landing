---
title: How It Works
order: 4
description: Mole's architecture and review flow.
---

# How It Works

Mole is a Go backend that integrates with GitHub via webhooks and uses Claude for AI-powered analysis.

## Architecture

```
GitHub webhook --> POST /webhook --> Valkey queue --> Worker pool
                   (signature check)   (dedup)          |
                                                  +-----+-----+
                                                  | Fetch PR diff (GitHub API)
                                                  | Load .mole/ context + config
                                                  | Run architecture validation (AST)
                                                  | Run security scanner (AST)
                                                  | Call Claude API (review + taxonomy)
                                                  | Calculate quality score
                                                  | Apply personality + severity filter
                                                  | Validate line numbers against diff
                                                  | Post review (summary + inline comments)
                                                  | Save review + issues to MySQL
                                                  +-- Aggregator computes metrics (hourly)
```

## Review flow

1. **Webhook received**: GitHub sends a pull request event
2. **Signature verified**: webhook secret is validated
3. **Queued**: event is deduplicated and added to Valkey queue
4. **Diff fetched**: worker fetches PR diff via GitHub API
5. **Context loaded**: project context from `.mole/` directory and config is assembled
6. **AST analysis**: architecture validation and security scanning run
7. **Claude analysis**: the diff + context is sent to Claude for review with issue taxonomy
8. **Quality scored**: score calculated (0-100) per PR
9. **Comments posted**: summary + inline comments posted on the PR
10. **Persisted**: review and issues saved to MySQL
11. **Metrics aggregated**: hourly aggregation for dashboard

## Deep review

For critical PRs, deep review uses Claude Opus with multi-pass analysis:

1. **First pass**: standard review (bugs, style)
2. **Second pass**: architecture and design review
3. **Third pass**: security-focused analysis
4. **Synthesis**: combine findings, remove duplicates, rank by severity
5. **Diagrams**: generate Mermaid sequence and class diagrams

## Quality scoring

Each PR receives a quality score (0-100) based on:
- Number and severity of issues found
- Issue categories affected
- Historical baseline for the repository
- Developer's recent trend

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/webhook` | GitHub webhook receiver |
| GET | `/health` | Health check (MySQL + Valkey status) |
| GET | `/metrics` | Prometheus metrics |
| GET | `/me` | Individual dashboard |
| GET | `/team` | Team dashboard |
| GET | `/modules` | Module dashboard |
| GET | `/costs` | Cost dashboard (admin only) |

## Tech stack

| Component | Technology |
|-----------|-----------|
| Language | Go 1.26 |
| Database | MySQL 8.0+ |
| Queue | Valkey 7.0+ (Redis-compatible) |
| LLM | Claude via Anthropic SDK |
| Dashboard | Go templates + HTMX |
| GitHub | go-github v72 + ghinstallation v2 |
| CLI | Cobra |
| Logging | log/slog (JSON structured) |
| Metrics | Prometheus client_golang |
| Migrations | golang-migrate (embedded SQL) |
| Container | Docker (multi-arch, GHCR) |
