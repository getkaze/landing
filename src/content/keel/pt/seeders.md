---
title: Seeders
order: 4
description: Execute scripts de seed de dados dentro de containers Docker.
---

# Seeders

Execute scripts de seed de dados dentro de containers em execução: migrações de banco, fixture data, configs iniciais.

## Como funciona

Cada seeder é um arquivo JSON em `data/seeders/`. Um seeder aponta para um container específico e executa uma lista de comandos em ordem.

## Config do seeder

```json
{
  "name": "mysql-init",
  "target": "db-seeder",
  "description": "Criar bancos localdev, usuários e seed de dados",
  "order": 1,
  "commands": [
    { "name": "Instalar dependências", "command": "pip install mysql-connector-python" },
    { "name": "Seed de dados", "command": "python3 seed.py --env localdev" }
  ]
}
```

## Campos

| Campo | Descrição |
|-------|-----------|
| name | Nome do seeder (deve corresponder ao nome do arquivo) |
| target | Nome do container para exec |
| description | Descrição legível |
| order | Ordem de execução (menor = primeiro) |
| commands | Lista ordenada de passos |
| commands[].name | Nome de exibição do passo |
| commands[].command | Comando shell a executar (inline) |
| commands[].script | Caminho para um arquivo de script (alternativa ao command) |
| commands[].interpreter | Interpretador do script (ex: "python3", "bash") |

## Executando seeders

Pelo CLI:

```bash
# Executar todos os seeders em ordem
keel seed

# Executar um único seeder
keel seed mysql-init
```

Você também pode executar seeders pelo dashboard na página **Seeders**.

> Seeders são executados via `docker exec` dentro do container alvo. O container deve estar rodando.
