---
title: Agents
order: 4
description: The 13 specialized agents that power Helm's pipeline.
---

# Agents

Helm has 13 agents — 11 in the pipeline, 1 orchestrator, and 1 on-demand. Each agent has a defined mission, inputs, outputs, and success criteria.

## Orchestrator

**Helm** — the single entry point. Routes requests, manages sessions, handles deviations, and guides users through the pipeline. All messages pass through Helm when a session is active.

## Discover Phase

### Scout (greenfield only)
Interviews the user about their project goals, pain points, and current workflow. Produces a discovery report that seeds the Research agent.

### Survey (brownfield only)
Analyzes the existing codebase — file structure, dependencies, patterns, tech stack, and current state. Produces a codebase survey report.

### Research
Deep-dives into the project's domain. Reads documentation, source code, and external references. Validates findings from Scout or Survey and produces a comprehensive research report.

## Plan Phase

### Planning
Produces a Product Requirements Document (PRD) with functional requirements, non-functional requirements, resolved questions, and open decisions. Every requirement traces to a research finding.

### Architect
Defines the technical architecture — tech stack, project structure, component patterns, data flow, and deployment strategy. Decisions are justified against requirements.

### Roadmap
Sequences delivery into phases based on dependencies, risk, and priority. Produces a phased delivery plan with clear milestones.

### Breakdown
Converts the roadmap into individual tasks with Given-When-Then acceptance criteria, size estimates, and dependency chains. Each task traces to a requirement.

## Quality Phase

### Review (Plan Gate)
Validates the entire planning chain end-to-end. Checks that every task traces to a requirement and every requirement traces to a research finding. Requires 95% score to proceed to build. Verdict: APPROVED or BLOCKED.

### Verify (Build Gate)
Validates the implementation against the spec. Runs tests, checks security (SAST), and scores quality. Requires APPROVED verdict to proceed to ship.

## Build Phase

### Build
Implements tasks from the breakdown following the architecture. Self-validates each task against acceptance criteria. Supports interactive (confirm each task) and autonomous (auto-execute) modes.

## Deploy Phase

### Ship
Handles release preparation and deployment. Manages versioning, changelog, and deployment configuration.

## On-Demand

### Tradeoff
Can be invoked at any point by any agent when facing a multi-option decision. Presents options with pros, cons, and recommendations. Returns control to the invoking agent after the decision is made.
