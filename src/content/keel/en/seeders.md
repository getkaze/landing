---
title: Seeders
order: 4
description: Run data seeding scripts inside Docker containers.
---

# Seeders

Run data seeding scripts inside running containers: database migrations, fixture data, initial configs.

## How it works

Each seeder is a JSON file in `data/seeders/`. A seeder targets a specific container and runs a list of commands in order.

## Seeder config

```json
{
  "name": "mysql-init",
  "target": "db-seeder",
  "description": "Create localdev databases, users, and seed data",
  "order": 1,
  "commands": [
    { "name": "Install dependencies", "command": "pip install mysql-connector-python" },
    { "name": "Seed data", "command": "python3 seed.py --env localdev" }
  ]
}
```

## Fields

| Field | Description |
|-------|-------------|
| name | Seeder name (must match filename) |
| target | Container name to exec into |
| description | Human-readable description |
| order | Execution order (lower = first) |
| commands | Ordered list of steps |
| commands[].name | Step display name |
| commands[].command | Shell command to run (inline) |
| commands[].script | Path to a script file (alternative to command) |
| commands[].interpreter | Interpreter for the script (e.g. "python3", "bash") |

## Running seeders

From the CLI:

```bash
# Run all seeders in order
keel seed

# Run a single seeder
keel seed mysql-init
```

You can also run seeders from the dashboard via the **Seeders** page.

> Seeders are executed via `docker exec` inside the target container. The container must be running.
