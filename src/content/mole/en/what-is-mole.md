---
title: What is Mole?
order: 1
description: AI-powered PR reviews and developer growth platform.
---

# What is Mole?

Mole (the animal that digs deep, finding what others miss) is an open-source, self-hosted AI code review and developer growth platform. Install it as a GitHub App, point it at your repos, and every PR gets an automated review powered by Claude -- with personality, formal issue taxonomy, quality scoring, and growth tracking.

The full loop, self-hosted:

```
Review PR -> Classify issues -> Track patterns -> Surface insights -> Grow developers
```

## PR Review Features

- **Deep reviews** -- triggered automatically on PR open (Claude Opus), or manually with `/mole deep-review`
- **Standard reviews** -- lighter review with `/mole review` (Claude Sonnet)
- **Ignore PRs** -- skip reviews with `/mole ignore`
- **CLI reviews** -- review any PR from your terminal with `mole review owner/repo#123`
- **Bot personality** -- 3 modes: `mole` (playful), `formal` (professional), `minimal` (terse) -- configurable server-wide or per-repo
- **Localized reviews** -- full review output (issues, summary) in the configured language, not just the UI chrome
- **Issue taxonomy** -- Security, Bugs, Smells, Architecture, Performance, Style (with subcategories)
- **Two severity levels** -- Critical (red) and Attention (yellow) only -- no low-value suggestions
- **Quality score** -- 0-100 per PR (critical = -8, attention = -5)
- **Architecture validation** -- layer enforcement rules via AST analysis
- **Security scanner** -- AST-based detection of common vulnerabilities
- **Mermaid diagrams** -- sequence and class diagrams in deep reviews

## Developer Growth Dashboard

- **Individual view** -- issue heat map, score trends, streaks, badges
- **Team view** -- issue distribution, quality trends, training suggestions
- **Module view** -- health score, tech debt tracking, grouped by repository
- **Costs view** -- Claude API usage and estimated costs per model (admin only)
- **Gamification** -- streaks, badges, achievements
- **About page** -- application info and version
- **Role-based access** -- Dev, Tech Lead, Manager, Admin
- **i18n** -- Portuguese (default) and English, switchable via flag selector

## Next steps

- [Install & Setup](/mole/docs/en/install-setup): get Mole running
- [Usage](/mole/docs/en/usage): CLI commands and PR workflow
- [How It Works](/mole/docs/en/how-it-works): architecture and flow
