---
title: Seeders
order: 4
description: Run data seeding scripts inside Docker containers.
---

# Seeders

Run data seeding scripts inside running containers -- database migrations, fixture data, initial configs.

Each seeder is a JSON file in `data/seeders/`:

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

## Fields

| Field | Description |
|-------|-------------|
| `target` | Container name to exec into |
| `order` | Execution order (lower = first) |
| `commands` | Ordered list of steps (see below) |

Each command entry supports:

| Field | Description |
|-------|-------------|
| `name` | Step identifier |
| `command` | Single command to execute via `docker exec` |
| `script` | Filename of a script in the seeders directory (alternative to `command`) |
| `interpreter` | Interpreter to pipe the script into -- e.g. `bash`, `python3` (used with `script`) |
| `http` | HTTP request to execute via `curl` inside the target container (alternative to `command`/`script`) |

## Running seeders

Seeders can be run from the UI (Seeders page) or via CLI:

```bash
keel seed                      # run all seeders in order
keel seed mysql-init           # run a single seeder
```
