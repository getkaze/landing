---
title: Instalação
order: 2
description: Instale o Mole e configure sua integração com GitHub.
---

# Instalação

Mole requer um GitHub App, um banco MySQL, Valkey (compatível com Redis) para cache e uma API key da Anthropic.

## Instalar

```bash
curl -fsSL https://getkaze.dev/mole/install.sh | bash
```

## Pré-requisitos

| Serviço | Versão | Propósito |
|---------|--------|-----------|
| MySQL | 8.0+ | Banco de dados primário |
| Valkey | 7.0+ | Cache e fila |
| Anthropic API key | - | Acesso à API do Claude |
| GitHub App | - | Integração webhook de PR |

## Configuração do GitHub App

1. Crie um novo GitHub App nas configurações da sua organização
2. Defina a webhook URL para sua instância do Mole
3. Conceda permissões: Pull Requests (leitura/escrita), Contents (leitura)
4. Assine eventos: Pull Request, Pull Request Review
5. Instale o app nos repositórios alvo

## Configuração

Crie `mole.yaml` na raiz do projeto:

```yaml
version: v0.1
database:
  host: localhost
  port: 3306
  name: mole
  user: mole
  password: ${MOLE_DB_PASSWORD}
cache:
  host: localhost
  port: 6379
anthropic:
  api_key: ${ANTHROPIC_API_KEY}
  model: claude-sonnet-4-20250514
github:
  app_id: ${GITHUB_APP_ID}
  private_key_path: ./github-app.pem
  webhook_secret: ${GITHUB_WEBHOOK_SECRET}
server:
  port: 8080
  host: 0.0.0.0
```

## Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `MOLE_DB_PASSWORD` | Senha do MySQL |
| `ANTHROPIC_API_KEY` | API key do Claude |
| `GITHUB_APP_ID` | ID do GitHub App |
| `GITHUB_WEBHOOK_SECRET` | Secret de validação do webhook |

## Iniciar

```bash
mole serve
```

O dashboard fica disponível em `http://localhost:8080`.

## Próximos passos

- [Uso](/mole/docs/pt/usage): comandos CLI e workflow de PR
- [Arquivos de Contexto](/mole/docs/pt/context-files): configure contexto do projeto
- [Docker](/mole/docs/pt/docker): execute com Docker
