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
| `/mole ignore` | Skip all future reviews for this PR |

## CLI commands

```bash
# Start server + workers + dashboard
mole serve

# Run database migrations
mole migrate

# Check connectivity to MySQL, Valkey, and GitHub
mole health

# Scan repo and generate .mole/ context files
mole init /path/to/repo

# Review PR from CLI
mole review owner/repo#123
mole review owner/repo#123 --deep
mole review owner/repo#123 --install-id 12345

# Sync reactions, recalculate scores, update metrics
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

Developers can react to inline review comments on GitHub:
- 👍 Confirm the issue
- 👎 Mark as false positive

Force immediate sync:

```bash
mole sync
```

This command:
1. Polls GitHub for reactions on recent review comments
2. Marks issues as confirmed or false_positive
3. Recalculates PR scores excluding false positives
4. Updates developer and module metrics
