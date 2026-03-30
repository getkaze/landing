---
title: Usage
order: 3
description: Mole CLI commands and PR review workflow.
---

# Usage

Mole works automatically via GitHub webhooks and manually via the CLI.

## Automatic reviews

Once the GitHub App is installed, Mole automatically reviews every new pull request. No manual intervention needed.

## CLI commands

```bash
# Start the server
mole serve

# Review a specific PR
mole review --repo owner/repo --pr 42

# Review with deep analysis (Claude Opus)
mole review --repo owner/repo --pr 42 --deep

# Review local staged changes
mole review --local

# Review a diff file
mole review --diff changes.patch

# Set personality mode
mole config set personality balanced

# Show version
mole version
```

## Personality modes

| Mode | Behavior |
|------|----------|
| strict | Flags everything. Best for critical codebases. |
| balanced | Default. Focuses on correctness and security. |
| encouraging | Gentle feedback. Best for junior developers. |

## Issue categories

Every issue found by Mole is classified into one of 6 categories:

| Category | Description |
|----------|-------------|
| Correctness | Logic errors, bugs, incorrect behavior |
| Security | Vulnerabilities, hardcoded secrets, injection risks |
| Performance | N+1 queries, unnecessary allocations, slow patterns |
| Maintainability | Complex code, tight coupling, missing abstractions |
| Style | Naming, formatting, idiomatic patterns |
| Documentation | Missing docs, outdated comments, unclear APIs |

Each issue has a severity level: critical, high, medium, low.

## Reaction sync

Developers can react to review comments on GitHub:
- 👍 — Acknowledge the issue (will fix)
- 👎 — Disagree with the finding
- 🚀 — Already fixed

Reactions sync to the dashboard and affect quality scoring.
