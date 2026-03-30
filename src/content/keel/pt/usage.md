---
title: Uso
order: 2
description: Todos os comandos e flags do CLI do Keel.
---

# Uso

Todos os comandos do Keel. O dashboard inicia com um único comando `keel`, e o CLI dá controle total sobre containers, targets e workflows de desenvolvimento.

## Dashboard

```bash
# Iniciar o dashboard (padrão: http://localhost:60000)
keel
```

## Operações com containers

```bash
# Iniciar todos os serviços
keel start

# Iniciar serviços específicos
keel start redis mysql

# Iniciar um grupo
keel start infra

# Parar todos os serviços
keel stop

# Parar um serviço específico
keel stop traefik

# Parar um grupo
keel stop app

# Destruir e recriar todos os containers
keel reset --all

# Recriar um único serviço
keel reset redis
```

## Targets remotos

```bash
# Mostrar target ativo
keel target

# Mudar para um target remoto
keel target ec2

# Todos os comandos agora executam no ec2 via SSH
keel start

# Voltar para local
keel target local
```

## Modo dev

```bash
# Montar código local em um container com hot reload
keel dev api ~/projects/api

# O container roda em foreground
# Ctrl+C para parar e restaurar o container original
```

> O modo dev requer um bloco `dev` no JSON do serviço com linhas de `dockerfile`. Veja [Modo Dev](/keel/docs/pt/dev-mode) para detalhes.

## Seeders

```bash
# Executar todos os seeders
keel seed

# Executar um único seeder
keel seed mysql-init
```

## Hosts

```bash
# Adicionar domínios dos serviços ao /etc/hosts pela config do Traefik
keel hosts setup

# Usar um IP customizado
keel hosts setup --ip 10.0.0.5

# Remover entradas do keel do /etc/hosts
keel hosts remove
```

## Atualizações

```bash
# Verificar e instalar a versão mais recente
keel update
```

> Você também pode atualizar pelo dashboard na página de Configurações.

## Manutenção

```bash
# Remover todos os containers + rede + diretório de dados (requer sudo)
keel purge

# Mostrar versão
keel version

# Mostrar ajuda
keel help
```

## Flags

| Flag | Padrão | Descrição |
|------|--------|-----------|
| -port | 60000 | Porta HTTP |
| -bind | 127.0.0.1 | Endereço de bind |
| -keel-dir | (padrão da plataforma) | Diretório de dados |
| -dev | false | Servir assets web do filesystem |

> Você também pode sobrescrever o diretório de dados com a variável de ambiente `KEEL_DIR`.
