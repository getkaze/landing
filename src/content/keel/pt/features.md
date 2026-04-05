---
title: Funcionalidades
order: 3
description: Visão completa das funcionalidades de gerenciamento Docker do Keel.
---

# Funcionalidades

Uma visão completa de tudo que o Keel pode fazer.

## Dashboard

Visualização em grid ao vivo de todos os containers com polling de status em tempo real. Agrupe serviços por categoria. Inicie, pare, reinicie e atualize containers diretamente pela UI.

## Logs

Streaming baseado em SSE via `docker logs` ou arquivos de container. Suporta **logs host-path** -- leia arquivos de log diretamente do filesystem do host mesmo quando o container está crashado ou parado.

## Terminal

Terminal interativo completo no browser via WebSocket + PTY. Ctrl+\` para alternar. Suporte multi-abas -- uma aba **Local** fixa está sempre disponível, e cada conexão `docker exec` abre em sua própria aba. Clique em **CONNECT** em qualquer container em execução para abrir uma sessão shell.

## Métricas

CPU, memória, disco, load average, uptime e stats Docker por container em tempo real (CPU%, RAM, network I/O, block I/O).

## Editor de Config

Editor JSON inline para cada serviço. Edite, salve, e a config é escrita atomicamente com backup.

## URL do Dashboard

Serviços podem definir uma `dashboard_url` na sua config JSON. Quando definida, um botão **ABRIR** aparece tanto no card de overview quanto na página de detalhes, linkando para a UI web do serviço (ex: RedisInsight, DBGate, pgAdmin).

```json
{
  "name": "redisinsight",
  "dashboard_url": "http://localhost:5540"
}
```

## Health Checks

Health checks HTTP ou por comando com intervalo, retries e período de start configuráveis.
