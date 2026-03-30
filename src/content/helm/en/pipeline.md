---
title: Pipeline
order: 2
description: The 5-phase pipeline that guides every Helm project.
---

# Pipeline

Every Helm project follows a structured pipeline with 5 phases. Each phase has a specific purpose, and agents must meet quality thresholds before the project advances.

## Phases

### 1. Discover

**Agents:** Scout (greenfield) or Survey (brownfield), Research

The Discover phase understands the problem before any code is written. Scout interviews you about goals and pain points for new projects. Survey analyzes existing codebases. Research validates findings against documentation and source code.

### 2. Plan

**Agents:** Planning, Architect, Roadmap, Breakdown

Planning produces a Product Requirements Document (PRD) with functional and non-functional requirements. Architect defines the technical architecture and patterns. Roadmap sequences delivery into phases. Breakdown creates individual tasks with Given-When-Then acceptance criteria.

### 3. Quality (Plan Gate)

**Agent:** Review

Review validates the entire planning chain — every task must trace to a requirement, every requirement to a research finding. Score must reach 95% before build starts. This gate prevents building the wrong thing.

### 4. Build

**Agent:** Build

Build implements tasks from the breakdown, following the architecture and validating each task against its acceptance criteria. Tasks are implemented in phase order with self-critique and testing at each step.

### 5. Quality (Build Gate) + Deploy

**Agents:** Verify, Ship

Verify validates that the implementation matches the spec — running tests, checking security, and scoring quality. Ship handles release preparation and deployment.

## Transitions

Agents transition automatically when:
1. The agent generates a handoff document
2. The agent's score meets the threshold (90% general, 95% for QA agents)
3. No unresolved critical blockers remain

## Modes

| Mode | Phases | Read | Write |
|------|--------|------|-------|
| Planning | Discover, Plan | Entire project | `.helm/` only |
| Build | Build, Validate | Entire project | Entire project |
| Deploy | Deploy | Entire project | Entire project + infra |
