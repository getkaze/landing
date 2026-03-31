---
title: Dashboard
order: 6
description: Team dashboards, metrics, and role-based access control.
---

# Dashboard

Mole's dashboard provides team and individual metrics, quality trends, and gamification features.

## Access roles

| Role | Permissions |
|------|------------|
| Dev | View own metrics, react to reviews |
| Tech Lead | View team metrics, configure review settings |
| Architect | All Tech Lead + architecture rules management |
| Manager | All Architect + cost tracking, team analytics |
| Admin | Full access, user management, system config |

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
- **Cost tracking**: Claude API usage per developer/repository

## Gamification

- **Achievements**: earned for milestones (first clean PR, 10 consecutive improvements)
- **Streaks**: consecutive PRs above quality threshold
- **Leaderboard**: team ranking by quality score (opt-in)

## Module health

Track quality metrics per module/directory:
- Average quality score
- Issue density (issues per line changed)
- Most common issue categories
- Trend over time
