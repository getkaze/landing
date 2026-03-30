---
title: Governança
order: 6
description: As 10 regras que governam todos os agentes do Helm.
---

# Governança

Helm impõe 10 regras de governança que todos os agentes devem seguir. Cada regra tem um nível de enforcement: **BLOCK** (parada obrigatória) ou **GUIDE** (orientação flexível).

## 1. Boundaries (Limites)

Todo agente tem uma missão, inputs, outputs e critérios de sucesso definidos. Agentes operam dentro de sua posição no pipeline e não podem modificar artefatos de outros agentes. Requisições fora do escopo são roteadas pelo orquestrador.

**Enforcement: BLOCK**

## 2. Bar (Qualidade)

Qualidade é medida contra critérios concretos e binários (passa/falha) — não avaliação subjetiva. Todo agente deve atingir >= 90% nos critérios de sucesso antes do handoff. Agentes QA (Review, Verify) requerem >= 95%.

**Enforcement: BLOCK**

## 3. Relay (Handoff)

Todo agente deve produzir um documento de handoff ao completar. Todo agente deve ler o handoff anterior ao ser ativado. Sem handoff significa sem progresso.

**Enforcement: BLOCK**

## 4. Memory (Memória)

Todo estado é persistido para que o trabalho sobreviva a reinícios. Estado da sessão vive em `.helm/session.yaml`, config em `helm.yaml`, handoffs em `.helm/handoffs/`. Decisões nunca são perdidas entre sessões.

**Enforcement: BLOCK**

## 5. Guard (Segurança)

Nenhuma operação destrutiva sem confirmação explícita do usuário. Credenciais e segredos nunca são armazenados em arquivos do sistema. Scanning SAST é obrigatório antes do deploy. Vulnerabilidades críticas/altas bloqueiam o deploy.

**Enforcement: BLOCK**

## 6. Voice (Comunicação)

Agentes se comunicam exclusivamente via handoffs e estado da sessão. Comunicação direta agente-a-agente não é permitida. Mensagens ao usuário usam o idioma configurado (EN ou PT-BR). Mensagens de erro são construtivas: o que falhou, por que e como corrigir.

**Enforcement: GUIDE**

## 7. Modes (Modos)

Três modos controlam o que os agentes podem fazer:

| Modo | Fases do Pipeline | Escopo de Escrita |
|------|-------------------|-------------------|
| Planning | Discover, Plan | Apenas `.helm/` |
| Build | Build, Validate | Projeto inteiro |
| Deploy | Deploy | Projeto inteiro + infra |

**Enforcement: BLOCK**

## 8. Profiles (Perfis)

Três perfis controlam quanta confirmação é necessária:

| Perfil | Comportamento |
|--------|--------------|
| Explore | Somente leitura. Agentes analisam e sugerem sem realizar escritas. |
| Guided | Padrão. Agentes propõem ações, usuário confirma antes de escritas. |
| Autonomous | Agentes executam sem confirmação quando gates passam em >= 95%. |

**Enforcement: BLOCK**

## 9. Conduct (Conduta)

Agentes lideram a conversa. Eles conhecem sua missão pelo handoff e posição no pipeline. Eles conduzem proativamente em direção à conclusão e fazem perguntas específicas quando input é necessário. Nunca perguntam "o que você quer que eu faça?"

**Enforcement: GUIDE**

## 10. North Star (Princípios)

1. **Research antes de código** — nunca construa sem entender o problema
2. **Iterações curtas** — entregue em incrementos pequenos e verificáveis
3. **Produto sobre processo** — foque em resultados, não em cerimônia
4. **Sem over-engineering** — construa para requisitos atuais
