---
title: Uso
order: 3
description: Comandos CLI do Mole e workflow de review de PRs.
---

# Uso

Mole funciona automaticamente via webhooks do GitHub e manualmente via CLI ou comentarios no PR.

## Reviews automaticos

Uma vez que o GitHub App esta instalado, Mole automaticamente revisa cada novo pull request. Nenhuma intervencao manual necessaria.

## Comandos no PR

Comente em qualquer PR para acionar o Mole:

| Comando | Descricao |
|---------|-----------|
| `/mole review` | Review padrao (Claude Sonnet) |
| `/mole deep-review` | Deep review com diagramas (Claude Opus) |
| `/mole ignore` | Ignorar todos os reviews futuros deste PR |

## Comandos CLI

```bash
# Iniciar servidor + workers + dashboard
mole serve

# Rodar migrations do banco
mole migrate

# Verificar conectividade com MySQL, Valkey e GitHub
mole health

# Escanear repo e gerar arquivos de contexto .mole/
mole init /path/to/repo

# Revisar PR pelo CLI
mole review owner/repo#123
mole review owner/repo#123 --deep
mole review owner/repo#123 --install-id 12345

# Sincronizar reacoes, recalcular scores, atualizar metricas
mole sync

# Gerenciar roles do dashboard
mole admin set-role <user> <role>
mole admin list

# Atualizar para ultima versao
mole update

# Versao
mole version
```

## Modos de personalidade

| Modo | Comportamento |
|------|--------------|
| mole | Divertido. Personalidade padrao com tom leve. |
| formal | Profissional. Feedback tecnico direto ao ponto. |
| minimal | Conciso. Apenas o essencial, sem preenchimento. |

## Categorias de issues

Todo issue encontrado pelo Mole e classificado em uma de 6 categorias:

| Categoria | Descricao |
|-----------|-----------|
| Security | Vulnerabilidades, secrets hardcoded, riscos de injecao |
| Bugs | Erros de logica, comportamento incorreto, edge cases |
| Smells | Codigo complexo, acoplamento forte, problemas de qualidade |
| Architecture | Violacoes de camada, uso incorreto de padroes, limites de modulos |
| Performance | Queries N+1, alocacoes desnecessarias, padroes lentos |
| Style | Nomenclatura, formatacao, padroes idiomaticos |

## Sync de reacoes

Desenvolvedores podem reagir aos comentarios inline de review no GitHub:
- 👍 Confirmar o issue
- 👎 Marcar como falso positivo

Forcar sync imediato:

```bash
mole sync
```

Este comando:
1. Consulta o GitHub por reacoes em comentarios de review recentes
2. Marca issues como confirmados ou falso_positivo
3. Recalcula scores dos PRs excluindo falsos positivos
4. Atualiza metricas de desenvolvedores e modulos
