---
title: Uso
order: 3
description: Comandos CLI do Mole e workflow de review de PRs.
---

# Uso

Mole funciona automaticamente via webhooks do GitHub e manualmente via CLI.

## Reviews automáticos

Uma vez que o GitHub App está instalado, Mole automaticamente revisa cada novo pull request. Nenhuma intervenção manual necessária.

## Comandos CLI

```bash
# Iniciar o servidor
mole serve

# Revisar um PR específico
mole review --repo owner/repo --pr 42

# Revisar com análise profunda (Claude Opus)
mole review --repo owner/repo --pr 42 --deep

# Revisar mudanças locais staged
mole review --local

# Revisar um arquivo diff
mole review --diff changes.patch

# Definir modo de personalidade
mole config set personality balanced

# Mostrar versão
mole version
```

## Modos de personalidade

| Modo | Comportamento |
|------|--------------|
| strict | Aponta tudo. Melhor para codebases críticos. |
| balanced | Padrão. Foca em corretude e segurança. |
| encouraging | Feedback gentil. Melhor para devs juniores. |

## Categorias de issues

Todo issue encontrado pelo Mole é classificado em uma de 6 categorias:

| Categoria | Descrição |
|-----------|-----------|
| Correctness | Erros de lógica, bugs, comportamento incorreto |
| Security | Vulnerabilidades, secrets hardcoded, riscos de injeção |
| Performance | Queries N+1, alocações desnecessárias, padrões lentos |
| Maintainability | Código complexo, acoplamento forte, abstrações faltando |
| Style | Nomenclatura, formatação, padrões idiomáticos |
| Documentation | Docs faltando, comentários desatualizados, APIs confusas |

Cada issue tem um nível de severidade: critical, high, medium, low.

## Sync de reações

Desenvolvedores podem reagir aos comentários de review no GitHub:
- 👍 Reconhecer o issue (vai corrigir)
- 👎 Discordar do achado
- 🚀 Já corrigido

Reações sincronizam com o dashboard e afetam o score de qualidade.
