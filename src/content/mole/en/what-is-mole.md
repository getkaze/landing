---
title: What is Mole?
order: 1
description: AI-powered PR reviews and developer growth platform.
---

# What is Mole?

Mole is an open-source, self-hosted AI code review and developer growth platform. It installs as a GitHub App and uses Claude to automatically review pull requests, classify issues, and track developer growth metrics.

Review PR -- Classify issues -- Track patterns -- Surface insights -- Grow developers

## Key features

- **Automated PR reviews**: Claude analyzes every pull request on open
- **Deep reviews**: multi-pass analysis with Claude Opus, triggered automatically or via `/mole deep-review`
- **Standard reviews**: lighter reviews with Claude Sonnet via `/mole review`
- **6 issue categories**: Security, Bugs, Smells, Architecture, Performance, Style
- **Quality scoring**: 0-100 per PR
- **Architecture validation**: layer enforcement via AST analysis
- **Security scanning**: AST-based vulnerability detection
- **Mermaid diagrams**: sequence and class diagrams in deep reviews
- **3 personality modes**: mole (playful), formal (professional), minimal (terse)
- **Localized reviews**: full output in configured language
- **Growth dashboard**: individual and team analytics with gamification
- **5 access roles**: Dev, Tech Lead, Architect, Manager, Admin
- **CLI**: review any PR from the terminal
- **i18n**: English and Portuguese (PT-BR)

## How it works

1. A developer opens a pull request on GitHub
2. Mole's GitHub App receives a webhook event
3. Claude analyzes the diff with project context from `.mole/` files
4. Review comments are posted inline on the PR with quality score
5. Metrics are aggregated hourly for the growth dashboard

## Growth dashboard

- Individual view with heat maps, score trends, streaks, badges
- Team view showing issue distribution and quality trends
- Module view with health scores and tech debt tracking
- Costs view for Claude API usage (admin only)
- Gamification with streaks and achievements
- Role-based access control
- i18n support (Portuguese and English)

## Next steps

- [Install & Setup](/mole/docs/en/install-setup): get Mole running
- [Usage](/mole/docs/en/usage): CLI commands and PR workflow
- [How It Works](/mole/docs/en/how-it-works): architecture and flow
