---
title: Instalacao
order: 2
description: Instale o Mole e configure sua integracao com GitHub.
---

# Instalacao

Mole requer um GitHub App, um banco MySQL, Valkey (compativel com Redis) para fila e uma API key da Anthropic.

## Pre-requisitos

| Servico | Versao | Proposito |
|---------|--------|-----------|
| MySQL | 8.0+ | Banco de dados primario |
| Valkey | 7.0+ | Fila e cache (compativel com Redis) |
| Anthropic API key | - | Acesso a API do Claude |
| GitHub App | - | Integracao webhook de PR |

## Instalar

```bash
curl -fsSL https://getkaze.dev/mole/install.sh | sudo bash
```

Ou baixe em [Releases](https://github.com/getkaze/mole/releases).

## Configuracao do GitHub App

Crie um novo GitHub App em github.com/settings/apps/new:

| Configuracao | Valor |
|-------------|-------|
| Webhook URL | `https://seu-servidor.com/webhook` |
| Webhook secret | Secret forte gerado |
| Permissoes | Pull requests (leitura e escrita), Contents (leitura) |
| Eventos | Pull request, Issue comment, Installation |

Baixe a chave privada e anote o App ID.

## Configuracao

```bash
cp mole.yaml.example mole.yaml
```

Preencha o GitHub App ID, caminho da chave privada, webhook secret, API key da Anthropic e credenciais do banco. Todos os valores podem ser sobrescritos com variaveis de ambiente prefixadas com `MOLE_` (ex: `MOLE_GITHUB_APP_ID`, `MOLE_LLM_API_KEY`, `MOLE_MYSQL_HOST`).

```yaml
github:
  app_id: 12345
  private_key_path: /etc/mole/app.pem
  webhook_secret: "secret"

llm:
  api_key: "sk-ant-..."
  review_model: "claude-sonnet-4-6"
  deep_review_model: "claude-opus-4-6"

mysql:
  host: localhost
  port: 3306
  database: mole
  user: mole
  password: "password"

valkey:
  host: localhost
  port: 6379

server:
  port: 8080
```

## Iniciar

```bash
mole serve
```

O Mole inicia um servidor HTTP (porta padrao 8080), pool de workers e agregador de metricas. Migrations do banco rodam automaticamente.

## Proximos passos

- [Uso](/mole/docs/pt/usage): comandos CLI e workflow de PR
- [Arquivos de Contexto](/mole/docs/pt/context-files): configure contexto do projeto
- [Docker](/mole/docs/pt/docker): execute com Docker
