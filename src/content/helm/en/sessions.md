---
title: Sessions
order: 5
description: How Helm manages state across conversations.
---

# Sessions

Helm persists all state so that work survives across Claude Code sessions. You can stop at any point, close the editor, and resume later without losing progress. Sessions include automatic backups with checkpoint rotation (max 5).

## How it works

1. `helm init` creates `.helm/session.yaml` and `helm.yaml`
2. Agents run inside Claude Code via `/helm` and update session state
3. `helm save` checkpoints state for safe session handoff
4. `helm resume` shows where to pick up in a new Claude Code session

## File Structure

```
.helm/                    # Runtime state (gitignored)
  session.yaml            # Current session state
  session.yaml.backup     # Auto-backup before every write
  handoffs/               # Agent-to-agent handoff documents
  artifacts/              # Per-agent output (reports, specs)
  checkpoints/            # Session snapshots (max 5, FIFO rotation)

helm.yaml                 # Project config (committed)
references/               # Quality checklists (security, testing, performance, launch)
```

## Checkpoints

`helm save` validates session integrity before checkpointing:
- Checks required fields in session.yaml
- Verifies handoff files exist for completed agents
- Verifies artifact directories exist for completed agents
- Rotates old checkpoints (keeps last 5)
- Auto-backs up session.yaml before writing

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
