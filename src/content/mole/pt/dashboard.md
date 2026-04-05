---
title: Dashboard
order: 6
description: Dashboards de equipe, metricas e controle de acesso por roles.
---

# Dashboard

Mole inclui um dashboard opcional com HTMX para rastreamento de crescimento de desenvolvedores. Habilite adicionando config do dashboard em `mole.yaml`:

```yaml
dashboard:
  github_client_id: "your-oauth-app-client-id"
  github_client_secret: "your-oauth-app-client-secret"
  session_secret: "a-random-32-char-secret"
  base_url: "http://localhost:8080"
  # Restringir acesso a membros de uma org GitHub especifica (recomendado)
  allowed_org: "your-github-org"
```

Crie um GitHub OAuth App (separado do GitHub App) em [github.com/settings/developers](https://github.com/settings/developers) com callback URL `http://seu-servidor/auth/callback`.

## Modo de Desenvolvimento

Para desenvolvimento local sem GitHub OAuth, defina `server.environment: development` na sua config:

```yaml
server:
  environment: development
```

A pagina de login mostra logins de teste por role (Admin, Dev, Tech Lead, Manager) ao inves de GitHub OAuth. Todos os logins usam uma conta fixa `testuser` / `Test User`. Veja `mole.yaml.dev.example` para uma config minima de dev.

## Controle de Acesso

Por padrao, qualquer usuario GitHub autenticado pode logar. Defina `allowed_org` para restringir acesso a membros de uma organizacao GitHub especifica -- apenas usuarios que pertencem a essa org serao permitidos.

```yaml
# Apenas membros de "acme-corp" podem acessar o dashboard
dashboard:
  allowed_org: "acme-corp"
```

Tambem pode ser definido via a variavel de ambiente `MOLE_DASHBOARD_ALLOWED_ORG`.

## Roles de acesso

| Role | Dados Proprios | Media da Equipe | Individual Outros | Modulos | Custos |
|------|----------------|-----------------|-------------------|---------|--------|
| Dev | Sim | Sim (anonimo) | Nao | Sim | Nao |
| Tech Lead | Sim | Sim | Sim (opt-in) | Sim | Nao |
| Manager | Nao | Sim | Nao | Sim | Nao |
| Admin | Sim | Sim | Sim | Sim | Sim |

> Manager ve menos que Tech Lead por design -- esta ferramenta e para crescimento, nao avaliacao de RH.

## Visao individual

Cada desenvolvedor ve:
- **Tendencia de qualidade**: score ao longo do tempo em PRs
- **Breakdown de issues**: categorias mais comuns no seu codigo
- **Areas de melhoria**: sugestoes personalizadas
- **Conquistas**: badges e streaks
- **Reviews recentes**: historico de reviews de PR com scores

## Visao da equipe

Tech Leads e acima veem:
- **Tendencia de qualidade da equipe**: score agregado ao longo do tempo
- **Comparacao de devs**: qualidade relativa entre membros da equipe
- **Hot spots**: modulos com mais issues
- **Distribuicao de categorias**: quais tipos de issue sao mais comuns

## Saude dos modulos

Rastreie metricas de qualidade por modulo/diretorio:
- Score medio de qualidade
- Densidade de issues (issues por linha alterada)
- Categorias de issue mais comuns
- Tendencia ao longo do tempo

## Gamificacao

- **Conquistas**: ganhas por milestones (primeiro PR limpo, 10 melhorias consecutivas)
- **Streaks**: PRs consecutivos acima do threshold de qualidade
- **Leaderboard**: ranking da equipe por score de qualidade (opt-in)
