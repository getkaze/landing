---
title: Funcionalidades
order: 3
description: Visão completa das funcionalidades de gerenciamento Docker do Keel.
---

# Funcionalidades

Uma visão completa de tudo que o Keel pode fazer.

## Dashboard ao Vivo

Visualização em grid em tempo real de todos os containers com polling de status. Agrupe serviços por categoria. Inicie, pare, reinicie e atualize containers sem sair do browser.

## Streaming de Logs SSE

Stream de logs via `docker logs` ou arquivos host-path — mesmo quando o container está crashado ou parado. Múltiplas fontes de log por serviço com navegação por abas.

## Terminal no Browser

PTY interativo completo via WebSocket. Interface multi-abas com uma aba Local fixa mais uma aba por sessão `docker exec`. Alterne com Ctrl+`.

## Métricas em Tempo Real

CPU, memória, disco, load average, uptime e stats Docker por container incluindo rede e block I/O. Tudo exibido no dashboard com auto-refresh.

## Targets Remotos via SSH

Gerencie hosts Docker locais e remotos pela mesma interface. Mude de target com um único comando. Túnel SSH aberto automaticamente com reconexão e backoff exponencial.

## Modo Dev + Hot Reload

Monte código-fonte local em um container com Dockerfile customizado e faça stream da saída direto no terminal. Ctrl+C para parar e restaurar o container original.

## Seeders

Execute scripts de seed de dados dentro dos containers — migrações de banco, fixture data, configs iniciais. Execute via CLI ou dashboard.

## Editor de Config

Editor JSON inline para cada serviço. Edite e salve diretamente pelo dashboard — alterações escritas atomicamente com backup automático da versão anterior.

## Health Checks

Monitoramento de saúde HTTP ou por comando com intervalo, retries e período de start configuráveis. Status visível nos cards do dashboard.

## URLs do Dashboard

Vincule serviços às suas UIs web. Quando configurado, um botão ABRIR aparece no card de overview e na página de detalhes.

## Suporte GHCR

Auto-login no GitHub Container Registry com credenciais armazenadas. Baixe imagens privadas do ghcr.io sem docker login manual.

## Criação de Serviço

Crie novos serviços diretamente pela UI do dashboard. Preencha os campos e o Keel gera o arquivo de config JSON.

## Auto-Update

Atualize o binário pela página de Configurações do dashboard ou via `keel update` no CLI.
