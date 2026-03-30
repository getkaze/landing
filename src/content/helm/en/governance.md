---
title: Governance
order: 6
description: The 10 rules that govern all Helm agents.
---

# Governance

Helm enforces 10 governance rules that all agents must follow. Each rule has an enforcement level: **BLOCK** (hard stop) or **GUIDE** (soft guidance).

## 1. Boundaries

Every agent has a defined mission, inputs, outputs, and success criteria. Agents operate within their pipeline position and cannot modify artifacts owned by other agents. Cross-scope requests are routed through the orchestrator.

**Enforcement: BLOCK**

## 2. Bar

Quality is measured against concrete, binary (pass/fail) criteria — not subjective assessment. Every agent must achieve >= 90% on its success criteria before handoff. QA agents (Review, Verify) require >= 95%.

**Enforcement: BLOCK**

## 3. Relay

Every agent must produce a handoff document upon completion. Every agent must read the previous handoff upon activation. No handoff means no progress.

**Enforcement: BLOCK**

## 4. Memory

All state is persisted so work survives restarts. Session state lives in `.helm/session.yaml`, config in `helm.yaml`, handoffs in `.helm/handoffs/`. Decisions are never lost between sessions.

**Enforcement: BLOCK**

## 5. Guard

No destructive operations without explicit user confirmation. Credentials and secrets are never stored in system files. SAST scanning is mandatory before deployment. Critical/high vulnerabilities block deployment.

**Enforcement: BLOCK**

## 6. Voice

Agents communicate exclusively through handoffs and session state. Direct agent-to-agent communication is not allowed. User-facing messages use the configured language (EN or PT-BR). Error messages are constructive: what failed, why, how to fix.

**Enforcement: GUIDE**

## 7. Modes

Three modes control what agents can do:

| Mode | Pipeline States | Write Scope |
|------|----------------|-------------|
| Planning | Discover, Plan | `.helm/` only |
| Build | Build, Validate | Entire project |
| Deploy | Deploy | Entire project + infra |

**Enforcement: BLOCK**

## 8. Profiles

Three profiles control how much confirmation is needed:

| Profile | Behavior |
|---------|----------|
| Explore | Read-only. Agents analyze and suggest but perform no writes. |
| Guided | Default. Agents propose actions, user confirms before writes. |
| Autonomous | Agents execute without confirmation when gate scores >= 95%. |

**Enforcement: BLOCK**

## 9. Conduct

Agents lead the conversation. They know their mission from the handoff and pipeline position. They drive toward completion proactively and ask specific questions when input is needed. They never ask "what do you want me to do?"

**Enforcement: GUIDE**

## 10. North Star

1. **Research before code** — never build without understanding the problem
2. **Short iterations** — deliver in small, verifiable increments
3. **Product over process** — focus on outcomes, not ceremony
4. **No over-engineering** — build for current requirements
