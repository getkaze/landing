---
title: Getting Started
order: 1
description: Install Helm and start orchestrating your backend projects.
---

# Getting Started

Helm is an AI agent orchestrator for backend development. It guides your project through a structured pipeline — from discovery to deployment — using specialized agents with quality gates at every stage.

## What is Helm?

Helm is a state manager, not an executor. Agent logic lives in markdown definitions and runs inside Claude Code. The CLI manages session state, displays progress, and bridges the gap between conversations.

- **13 specialized agents** across 5 pipeline phases
- **10 governance rules** enforcing quality, boundaries, and traceability
- **Quality gates** at 95% threshold before build and deploy
- **Session continuity** — stop, resume, and checkpoint at any point

## Install

```bash
curl -fsSL https://getkaze.dev/helm/install.sh | bash
```

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
Scout → Research → Planning → Architect → Roadmap → Breakdown → Review → Build → Verify → Ship
```

### Brownfield flow

```
Survey → Research → Planning → Architect → Roadmap → Breakdown → Review → Build → Verify → Ship
```

## What you get

- **Discover phase** — Scout or Survey analyzes your project, Research validates findings
- **Plan phase** — Planning creates the PRD, Architect defines the architecture, Roadmap sequences delivery, Breakdown creates tasks, Review validates traceability
- **Build phase** — Build implements tasks against acceptance criteria
- **Quality phase** — Verify validates implementation against the spec
- **Deploy phase** — Ship handles release and deployment

## Next steps

- [Pipeline](/helm/docs/en/pipeline) — understand the 5 phases
- [Agents](/helm/docs/en/agents) — meet the 13 specialized agents
- [Usage](/helm/docs/en/usage) — CLI commands and workflow
