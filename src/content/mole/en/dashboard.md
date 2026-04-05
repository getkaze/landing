---
title: Dashboard
order: 6
description: Team dashboards, metrics, and role-based access control.
---

# Dashboard

Mole includes an optional HTMX-powered dashboard for developer growth tracking. Enable it by adding dashboard config to `mole.yaml`:

```yaml
dashboard:
  github_client_id: "your-oauth-app-client-id"
  github_client_secret: "your-oauth-app-client-secret"
  session_secret: "a-random-32-char-secret"
  base_url: "http://localhost:8080"
  # Restrict access to members of a specific GitHub org (recommended)
  allowed_org: "your-github-org"
```

Create a GitHub OAuth App (separate from the GitHub App) at [github.com/settings/developers](https://github.com/settings/developers) with callback URL `http://your-server/auth/callback`.

## Development Mode

For local development without GitHub OAuth, set `server.environment: development` in your config:

```yaml
server:
  environment: development
```

The login page shows role-based test logins (Admin, Dev, Tech Lead, Manager) instead of GitHub OAuth. All logins use a fixed `testuser` / `Test User` account. See `mole.yaml.dev.example` for a minimal dev config.

## Access Control

By default, any authenticated GitHub user can log in. Set `allowed_org` to restrict access to members of a specific GitHub organization -- only users who belong to that org will be allowed in.

```yaml
# Only members of "acme-corp" can access the dashboard
dashboard:
  allowed_org: "acme-corp"
```

Can also be set via the `MOLE_DASHBOARD_ALLOWED_ORG` environment variable.

## Access roles

| Role | Own Data | Team Average | Individual Others | Modules | Costs |
|------|----------|-------------|-------------------|---------|-------|
| Dev | Yes | Yes (anonymous) | No | Yes | No |
| Tech Lead | Yes | Yes | Yes (opt-in) | Yes | No |
| Manager | No | Yes | No | Yes | No |
| Admin | Yes | Yes | Yes | Yes | Yes |

> Manager sees less than Tech Lead by design -- this tool is for growth, not HR evaluation.

## Individual view

Each developer sees:
- **Quality trend**: score over time across PRs
- **Issue breakdown**: most common categories in their code
- **Improvement areas**: personalized suggestions
- **Achievements**: badges and streaks
- **Recent reviews**: history of PR reviews with scores

## Team view

Tech Leads and above see:
- **Team quality trend**: aggregate score over time
- **Developer comparison**: relative quality across team members
- **Hot spots**: modules with the most issues
- **Category distribution**: which issue types are most common

## Module health

Track quality metrics per module/directory:
- Average quality score
- Issue density (issues per line changed)
- Most common issue categories
- Trend over time

## Gamification

- **Achievements**: earned for milestones (first clean PR, 10 consecutive improvements)
- **Streaks**: consecutive PRs above quality threshold
- **Leaderboard**: team ranking by quality score (opt-in)
