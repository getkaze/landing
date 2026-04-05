---
title: Usage
order: 3
description: Mole CLI commands and PR review workflow.
---

# Usage

Mole works automatically via GitHub webhooks and manually via the CLI or PR comments.

## Automatic reviews

Once the GitHub App is installed, Mole automatically reviews every new pull request. No manual intervention needed.

## PR commands

Comment on any PR to trigger Mole:

| Command | Description |
|---------|-------------|
| `/mole review` | Standard review (Claude Sonnet) |
| `/mole deep-review` | Deep review with diagrams (Claude Opus) |
| `/mole dig` | Contextual review -- clones repo, explores codebase with Sonnet, reviews with Opus |
| `/mole ignore` | Skip all future reviews for this PR |

PRs are also reviewed automatically when opened.

## CLI commands

```bash
# Start server + workers + dashboard
mole serve

# Run database migrations
mole migrate

# Check connectivity to MySQL, Valkey, and GitHub
mole health

# Scan a repo and generate .mole/ context files
mole init /path/to/repo
mole init /path/to/repo --language pt-BR

# Review a PR from the CLI
mole review owner/repo#123
mole review owner/repo#123 --deep
mole review owner/repo#123 --dig       # clone + explore + review
mole review owner/repo#123 --install-id 12345

# Review from local fixtures (no GitHub App needed)
mole review --local ./testdata/fixtures/01-auth-tokens/
mole review --local ./testdata/fixtures/05-cache-layer/ --deep

# Sync reactions, recalculate scores, and update metrics
mole sync

# Manage dashboard roles
mole admin set-role <user> <role>
mole admin list

# Update to latest version
mole update

# Version
mole version
```

## Personality modes

| Mode | Behavior |
|------|----------|
| mole | Playful. Default personality with a lighthearted tone. |
| formal | Professional. Straight-to-the-point technical feedback. |
| minimal | Terse. Only the essentials, no filler. |

## Issue categories

Every issue found by Mole is classified into one of 6 categories:

| Category | Description |
|----------|-------------|
| Security | Vulnerabilities, hardcoded secrets, injection risks |
| Bugs | Logic errors, incorrect behavior, edge cases |
| Smells | Complex code, tight coupling, code quality issues |
| Architecture | Layer violations, pattern misuse, module boundary issues |
| Performance | N+1 queries, unnecessary allocations, slow patterns |
| Style | Naming, formatting, idiomatic patterns |

## Reaction sync

Developers can react to Mole's inline comments with :+1: (confirm issue) or :-1: (false positive). Mole syncs reactions automatically every hour, but you can force an immediate sync:

```bash
mole sync
```

This command:
1. Polls GitHub for reactions on recent review comments
2. Marks issues as `confirmed` or `false_positive` based on reactions
3. Recalculates PR scores excluding false positives
4. Updates developer and module metrics (false positives are no longer counted)
