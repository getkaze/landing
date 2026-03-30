---
title: Agentes
order: 4
description: Os 13 agentes especializados que compõem o pipeline do Helm.
---

# Agentes

Helm tem 13 agentes — 11 no pipeline, 1 orquestrador e 1 sob demanda. Cada agente tem uma missão definida, inputs, outputs e critérios de sucesso.

## Orquestrador

**Helm** — o ponto de entrada único. Roteia requisições, gerencia sessões, lida com desvios e guia usuários pelo pipeline. Todas as mensagens passam pelo Helm quando uma sessão está ativa.

## Fase Discover

### Scout (apenas greenfield)
Entrevista o usuário sobre objetivos do projeto, dores e workflow atual. Produz um relatório de descoberta que alimenta o agente Research.

### Survey (apenas brownfield)
Analisa a codebase existente — estrutura de arquivos, dependências, padrões, tech stack e estado atual. Produz um relatório de survey da codebase.

### Research
Mergulha fundo no domínio do projeto. Lê documentação, código-fonte e referências externas. Valida achados do Scout ou Survey e produz um relatório de pesquisa abrangente.

## Fase Plan

### Planning
Produz um PRD (Product Requirements Document) com requisitos funcionais, não-funcionais, questões resolvidas e decisões em aberto. Cada requisito rastreia a um achado de pesquisa.

### Architect
Define a arquitetura técnica — tech stack, estrutura do projeto, padrões de componentes, fluxo de dados e estratégia de deploy. Decisões são justificadas contra requisitos.

### Roadmap
Sequencia entregas em fases baseadas em dependências, risco e prioridade. Produz um plano de entrega faseado com marcos claros.

### Breakdown
Converte o roadmap em tarefas individuais com critérios de aceite Given-When-Then, estimativas de tamanho e cadeias de dependência. Cada tarefa rastreia a um requisito.

## Fase Quality

### Review (Gate do Plano)
Valida toda a cadeia de planejamento de ponta a ponta. Verifica que cada tarefa rastreia a um requisito e cada requisito rastreia a um achado de pesquisa. Requer score de 95% para prosseguir ao build. Veredicto: APPROVED ou BLOCKED.

### Verify (Gate do Build)
Valida a implementação contra a spec. Roda testes, verifica segurança (SAST) e pontua qualidade. Requer veredicto APPROVED para prosseguir ao ship.

## Fase Build

### Build
Implementa tarefas do breakdown seguindo a arquitetura. Auto-valida cada tarefa contra critérios de aceite. Suporta modos interativo (confirmar cada tarefa) e autônomo (auto-executar).

## Fase Deploy

### Ship
Cuida da preparação de release e deployment. Gerencia versionamento, changelog e configuração de deploy.

## Sob Demanda

### Tradeoff
Pode ser invocado a qualquer momento por qualquer agente ao enfrentar uma decisão com múltiplas opções. Apresenta opções com prós, contras e recomendações. Retorna o controle ao agente invocador após a decisão.
