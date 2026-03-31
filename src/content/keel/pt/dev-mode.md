---
title: Modo Dev
order: 5
description: Execute serviços localmente com código-fonte montado e hot reload.
---

# Modo Dev

Execute um serviço localmente com seu código-fonte montado e hot reload habilitado.

## Uso

```bash
keel dev <serviço> <caminho-local>
```

## Como funciona

1. Lê `dev.dockerfile` do JSON do serviço e builda uma imagem dev
2. Para o container existente
3. Executa o container dev em foreground com seu código local montado como volume
4. Faz stream de stdout/stderr no seu terminal. `Ctrl+C` para parar

> O modo dev só está disponível no target **local**. Não é suportado via SSH.

## Config do serviço

Adicione um bloco `dev` no JSON do seu serviço:

```json
{
  "dev": {
    "dockerfile": [
      "FROM golang:1.24",
      "RUN go install github.com/air-verse/air@latest",
      "WORKDIR /app",
      "COPY go.mod go.sum ./",
      "RUN go mod download"
    ],
    "command": ["air"],
    "cap_add": ["NET_BIND_SERVICE"]
  }
}
```

## Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| dev.dockerfile | string[] | Linhas do Dockerfile para a imagem dev |
| dev.command | string[] | Comando para executar no container dev |
| dev.cap_add | string[] | Capabilities Linux a adicionar |

## Exemplo

```bash
# Executar um serviço Go com air para hot reload
keel dev api ~/projects/api

# O container roda em foreground
# Seu ~/projects/api local é montado em /app
# Ctrl+C para parar e restaurar o container original
```
