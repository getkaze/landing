---
title: What is Mole?
order: 1
description: AI-powered code review with gamification and team dashboards.
---

# What is Mole?

Mole is an AI-powered code review tool that uses Claude to analyze pull requests, score code quality, and help developers grow. It's self-hosted, team-focused, and built for organizations that want actionable feedback — not just linting.

## Key features

- **Automated PR reviews** — Claude analyzes every pull request with context-aware suggestions
- **Deep reviews** — Claude Opus multi-pass analysis for critical PRs
- **6 issue categories** — correctness, security, performance, maintainability, style, documentation
- **Quality scoring** — per-PR and per-developer metrics tracked over time
- **Growth dashboard** — individual and team analytics, trends, and improvement areas
- **Gamification** — achievements, streaks, and leaderboards
- **3 personality modes** — strict, balanced, encouraging
- **5 access roles** — Dev, Tech Lead, Architect, Manager, Admin
- **Security scanning** — vulnerability detection with Mermaid diagrams
- **Architecture validation** — enforce patterns and module boundaries
- **CLI** — run reviews from the terminal
- **i18n** — English and Portuguese (PT-BR)

## How it works

1. A developer opens a pull request on GitHub
2. Mole's GitHub App receives a webhook event
3. Claude analyzes the diff with project context from `.mole/` files
4. Review comments are posted inline on the PR
5. Quality score and issue breakdown are tracked in the dashboard

## Name

Named after the mole — a creature that digs deep underground to find what others miss. Mole digs deep into code to surface issues, patterns, and opportunities for growth.

## Next steps

- [Install & Setup](/mole/docs/en/install-setup) — get Mole running
- [Usage](/mole/docs/en/usage) — CLI commands and PR workflow
- [How It Works](/mole/docs/en/how-it-works) — architecture and flow
