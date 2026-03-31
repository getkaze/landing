---
title: Visao Geral
order: 1
description: Introducao ao design system da Kaze.
---

# Visao Geral

O design system da Kaze e a linguagem visual compartilhada entre todos os produtos Kaze: Keel, Helm e Mole. Ele define cores, tipografia, espacamento, componentes e padroes de interacao usados em todo o site e documentacao.

## Principios

1. **Minimalista**: UI limpa, sem poluicao visual
2. **Funcional**: cada elemento tem um proposito
3. **Focado em devs**: fontes monospace, blocos de codigo, mockups de terminal
4. **Performatico**: CSS puro, sem frameworks, sem preprocessadores
5. **Responsivo**: mobile-first, degradacao elegante em 768px
6. **Consistente**: escala unificada de tokens para espacamento, cor e tipografia

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Astro 5 (geracao de site estatico) |
| Estilos | CSS puro com custom properties |
| Fontes | Inter (sans), JetBrains Mono (mono) via Google Fonts |
| Icones | SVG inline (sem icon font) |
| Animacoes | CSS transitions + IntersectionObserver para reveals |
| Motion lib | motion@11 (disponivel, uso pontual) |

## Arquitetura

Todos os design tokens vivem em um unico arquivo: `src/styles/global.css`. Componentes usam tags `<style>` com escopo do Astro para encapsulamento enquanto referenciam tokens globais via CSS custom properties.

```
src/
  styles/
    global.css          # Tokens, reset, base, utilidades
  components/
    Nav.astro           # Barra de navegacao
    Footer.astro        # Rodape
    Hero.astro          # Secao hero
    FeatureCard.astro   # Cards de features
    ProductCard.astro   # Cards de produtos
    ...                 # Estilos com escopo por componente
  layouts/
    Base.astro          # Shell HTML, meta, fontes
    DocsLayout.astro    # Sidebar + conteudo de docs
```

## Sem dark mode

O design system atualmente possui um unico tema claro. Todos os tokens de cor assumem um fundo off-white quente (#fbfbf8).
