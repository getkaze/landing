---
title: Pipeline
order: 2
description: O pipeline de 5 fases que guia todo projeto Helm.
---

# Pipeline

Todo projeto Helm segue um pipeline estruturado com 5 fases. Cada fase tem um propósito específico, e os agentes devem atingir thresholds de qualidade antes do projeto avançar.

## Fases

### 1. Discover

**Agentes:** Scout (greenfield) ou Survey (brownfield), Research

A fase Discover entende o problema antes de qualquer código ser escrito. Scout entrevista você sobre objetivos e dores para projetos novos. Survey analisa codebases existentes. Research valida os achados contra documentação e código-fonte.

### 2. Plan

**Agentes:** Planning, Architect, Roadmap, Breakdown

Planning produz um PRD (Product Requirements Document) com requisitos funcionais e não-funcionais. Architect define a arquitetura técnica e padrões. Roadmap sequencia entregas em fases. Breakdown cria tarefas individuais com critérios de aceite Given-When-Then.

### 3. Quality (Gate do Plano)

**Agente:** Review

Review valida toda a cadeia de planejamento: cada tarefa deve rastrear a um requisito, cada requisito a um achado de pesquisa. Score deve atingir 95% antes do build começar. Este gate previne construir a coisa errada.

### 4. Build

**Agente:** Build

Build implementa tarefas do breakdown, seguindo a arquitetura e validando cada tarefa contra seus critérios de aceite. Tarefas são implementadas em ordem de fase com auto-crítica e testes em cada passo.

### 5. Quality (Gate do Build) + Deploy

**Agentes:** Verify, Ship

Verify valida que a implementação corresponde a spec, rodando testes, verificando segurança e pontuando qualidade. Ship cuida da preparação de release e deployment.

## Transições

Agentes transitam automaticamente quando:
1. O agente gera um documento de handoff
2. O score do agente atinge o threshold (90% geral, 95% para agentes QA)
3. Não restam blockers críticos não resolvidos

## Modos

| Modo | Fases | Leitura | Escrita |
|------|-------|---------|---------|
| Planning | Discover, Plan | Projeto inteiro | Apenas `.helm/` |
| Build | Build, Validate | Projeto inteiro | Projeto inteiro |
| Deploy | Deploy | Projeto inteiro | Projeto inteiro + infra |
