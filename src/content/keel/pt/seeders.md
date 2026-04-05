---
title: Seeders
order: 4
description: Execute scripts de seed de dados dentro de containers Docker.
---

# Seeders

Execute scripts de seed de dados dentro de containers em execução -- migrações de banco, fixture data, configs iniciais.

Cada seeder é um arquivo JSON em `data/seeders/`:

```json
{
  "name": "mysql-init",
  "target": "db-seeder",
  "description": "Create localdev databases, users, and seed data",
  "order": 1,
  "commands": [
    { "name": "Install dependencies", "command": "pip install mysql-connector-python" },
    { "name": "Seed data",            "command": "python3 seed.py --env localdev" }
  ]
}
```

## Campos

| Campo | Descrição |
|-------|-----------|
| `target` | Nome do container para exec |
| `order` | Ordem de execução (menor = primeiro) |
| `commands` | Lista ordenada de passos (veja abaixo) |

Cada entrada de comando suporta:

| Campo | Descrição |
|-------|-----------|
| `name` | Identificador do passo |
| `command` | Comando único a executar via `docker exec` |
| `script` | Nome de arquivo de um script no diretório de seeders (alternativa ao `command`) |
| `interpreter` | Interpretador para pipe do script -- ex: `bash`, `python3` (usado com `script`) |
| `http` | Requisição HTTP a executar via `curl` dentro do container alvo (alternativa ao `command`/`script`) |

## Executando seeders

Seeders podem ser executados pela UI (página Seeders) ou via CLI:

```bash
keel seed                      # executar todos os seeders em ordem
keel seed mysql-init           # executar um único seeder
```
