---
title: Getting Started
order: 1
description: Install Helm and start orchestrating your backend projects.
---

# Getting Started

**Helm** (the helm of a ship -- the wheel that steers direction) is a CLI tool that manages the lifecycle of AI agent pipeline sessions. It provides visibility into pipeline progress, session continuity across Claude Code conversations, and state checkpointing.

## What is Helm?

Helm is a **state manager, not an executor**. Agent logic lives in markdown definitions and runs inside Claude Code. The CLI manages session state, displays progress, and bridges the gap between conversations.

```bash
helm init
helm status
helm resume
helm save
```

## Install

```bash
curl -fsSL https://getkaze.dev/helm/install.sh | bash
```

This installs the latest release to `~/.local/bin/helm`. To update later, run `helm update`.

### From source

```bash
git clone https://github.com/getkaze/helm.git
cd helm
make build
```

Binary is output to `bin/helm`. Add it to your PATH or run directly.

### Within Claude Code

Use the `/helm` slash command to activate the orchestrator. The CLI complements Claude Code -- use it standalone to check status and checkpoint state.

## Initialize a project

```bash
helm init
```

This creates `helm.yaml` (committed) and `.helm/` (runtime state, not committed).

## Start the pipeline

Inside Claude Code, invoke:

```
/helm
```

Helm detects whether your project is greenfield (new) or brownfield (existing) and routes to the correct first agent.

### Greenfield flow

```
scout → research → planning → architect → roadmap → breakdown → review → build → verify → ship
```

### Brownfield flow

```
survey → research → planning → architect → roadmap → breakdown → review → build → verify → ship
```

## What you get

- **Discover phase**: Scout or Survey analyzes your project, Research validates findings
- **Plan phase**: Planning creates the PRD, Architect defines the architecture, Roadmap sequences delivery, Breakdown creates tasks, Review validates traceability
- **Build phase**: Build implements tasks against acceptance criteria
- **Quality phase**: Verify validates implementation against the spec
- **Deploy phase**: Ship handles release and deployment

## Next steps

- [Pipeline](/helm/docs/en/pipeline): understand the 5 phases
- [Agents](/helm/docs/en/agents): meet the 12 agents
- [Usage](/helm/docs/en/usage): CLI commands and workflow
