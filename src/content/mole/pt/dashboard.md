---
title: Dashboard
order: 6
description: Dashboards de equipe, métricas e controle de acesso por roles.
---

# Dashboard

O dashboard do Mole fornece métricas de equipe e individuais, tendências de qualidade e funcionalidades de gamificação.

## Roles de acesso

| Role | Permissões |
|------|-----------|
| Dev | Ver métricas próprias, reagir a reviews |
| Tech Lead | Ver métricas da equipe, configurar review |
| Architect | Tudo de Tech Lead + gerenciar regras de arquitetura |
| Manager | Tudo de Architect + tracking de custos, analytics de equipe |
| Admin | Acesso total, gerenciamento de usuários, config do sistema |

## Visão individual

Cada desenvolvedor vê:
- **Tendência de qualidade**: score ao longo do tempo em PRs
- **Breakdown de issues**: categorias mais comuns no seu código
- **Áreas de melhoria**: sugestões personalizadas
- **Conquistas**: badges e streaks
- **Reviews recentes**: histórico de reviews de PR com scores

## Visão da equipe

Tech Leads e acima veem:
- **Tendência de qualidade da equipe**: score agregado ao longo do tempo
- **Comparação de devs**: qualidade relativa entre membros da equipe
- **Hot spots**: módulos com mais issues
- **Distribuição de categorias**: quais tipos de issue são mais comuns
- **Tracking de custos**: uso da API Claude por dev/repositório

## Gamificação

- **Conquistas**: ganhas por milestones (primeiro PR limpo, 10 melhorias consecutivas)
- **Streaks**: PRs consecutivos acima do threshold de qualidade
- **Leaderboard**: ranking da equipe por score de qualidade (opt-in)

## Saúde dos módulos

Rastreie métricas de qualidade por módulo/diretório:
- Score médio de qualidade
- Densidade de issues (issues por linha alterada)
- Categorias de issue mais comuns
- Tendência ao longo do tempo
