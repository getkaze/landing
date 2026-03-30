---
title: Usage
order: 3
description: Helm commands and daily workflow.
---

# Usage

Helm is invoked inside Claude Code via the `/helm` command. The CLI manages initialization and state display.

## Commands

```bash
# Initialize a new project
helm init

# Show current state and version
helm status

# Resume from last checkpoint
helm resume
```

## Claude Code commands

Inside Claude Code, these commands control the orchestrator:

```
/helm              # Start or resume the pipeline
/helm status       # Show project dashboard
/helm resume       # Reload session and continue
/helm exit         # Save state and stop
/helm stop         # Same as exit
/helm help         # Show available commands
```

## Daily workflow

### Starting a new project

1. Run `helm init` in your project directory
2. Open Claude Code and type `/helm`
3. Describe your project — Helm routes to the first agent
4. Follow the pipeline through each phase

### Resuming work

1. Open Claude Code and type `/helm`
2. Helm reads your session and shows where you left off
3. Choose to continue, review, or check status

### Quick flow

For small, well-defined tasks (bug fixes, hotfixes):

1. Type `/helm` and describe the fix
2. Helm detects it's a quick task and offers a fast track
3. Fast track: Research (quick) → Build → Verify → Ship
4. Skips: Planning, Architect, Roadmap, Breakdown, Review

## Execution profiles

| Profile | Behavior |
|---------|----------|
| Explore | Read-only. Agents analyze and suggest but perform no writes. |
| Guided | Default. Agents propose actions, user confirms before writes. |
| Autonomous | Agents execute without confirmation when gate scores >= 95%. |

If quality drops below 95% during autonomous execution, Helm downgrades to guided mode.

## Session files

| File | Purpose | Committed |
|------|---------|-----------|
| `helm.yaml` | Project config (version, type, language) | Yes |
| `.helm/session.yaml` | Runtime state (current agent, scores, timestamps) | No |
| `.helm/handoffs/*.md` | Agent handoff documents | No |
| `.helm/artifacts/` | Agent output artifacts | No |
