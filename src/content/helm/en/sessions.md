---
title: Sessions
order: 5
description: How Helm manages state across conversations.
---

# Sessions

Helm persists all state so that work survives across Claude Code sessions. You can stop at any point, close the editor, and resume later without losing progress. Sessions include automatic backups with checkpoint rotation (max 5).

## Session state

Session state lives in `.helm/session.yaml`:

```yaml
project:
  name: my-project
  type: brownfield
  state: build
execution_profile: guided
current_agent: build
language: pt-BR
workflow: standard
resume_point: "T2.1 - Phase 2 starts"
agents:
  survey:
    status: completed
    score: 92
    timestamp: "2026-03-29T16:30:00Z"
  research:
    status: completed
    score: 95
    timestamp: "2026-03-29T16:45:00Z"
  build:
    status: in_progress
    phase_completed: 1
    phases_total: 3
    tasks_completed: 16
    tasks_total: 29
    next_task: "T2.1"
```

## Handoffs

Every agent produces a handoff document in `.helm/handoffs/`. The next agent reads this document to understand context and continue the work.

Handoff structure:
- **Summary** (max 150 lines): mission completed, key decisions, artifacts, score
- **Deep Context** (optional, max 500 lines): complex discoveries that don't fit in the summary

## Artifacts

Agents produce artifacts in `.helm/artifacts/{agent}/`. These include reports, PRDs, architecture docs, task breakdowns, and build reports.

## Resuming

When you invoke `/helm` with an existing session:

1. Helm reads session state and the latest handoff
2. Shows your current position in the pipeline
3. Offers three options:
   - Continue with the next step (recommended)
   - Review last output
   - View full status

## Deviations

When requirements change mid-pipeline, Helm logs the deviation:

```yaml
deviations:
  - timestamp: "2026-03-29T18:00:00Z"
    type: scope_change
    from_agent: build
    to_agent: planning
    reason: "New requirement added"
    resolved: false
```

Types: `scope_change`, `approach_change`, `skip_agent`, `revisit_agent`.

## Session lock

While active, all messages route through Helm. The lock is released only by `/helm exit` or `/helm stop`. Exiting preserves all state, and resuming re-activates the lock.
