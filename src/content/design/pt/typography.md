---
title: Tipografia
order: 3
description: Familias de fonte, escala tipografica e estilos de texto.
---

# Tipografia

O sistema tipografico usa duas familias de fontes carregadas via Google Fonts, uma escala fluida responsiva e letter-spacing apertado para headings.

## Familias de fonte

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Texto corpo, headings, UI |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Codigo, nomes de produto, labels |

Fontes carregadas do Google Fonts com preconnect:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

## Escala tipografica

Todos os tamanhos usam `clamp()` para responsividade fluida onde apropriado.

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-display` | `clamp(2.35rem, 5vw, 4.2rem)` | Titulos hero |
| `--text-h1` | `clamp(1.9rem, 3.2vw, 3rem)` | Headings de pagina |
| `--text-h2` | `clamp(1.2rem, 2vw, 1.65rem)` | Headings de secao |
| `--text-h3` | `1.125rem` | Titulos de subsecao |
| `--text-body` | `1rem` | Texto corpo padrao |
| `--text-body-lg` | `clamp(1.05rem, 1.8vw, 1.325rem)` | Subtitulos hero, texto destaque |
| `--text-small` | `0.875rem` | Botoes, sidebar, celulas de tabela |
| `--text-xs` | `0.75rem` | Badges, labels, captions |
| `--text-code` | `0.875rem` | Blocos de codigo, codigo inline |

## Alturas de linha

| Token | Valor | Uso |
|-------|-------|-----|
| `--leading-tight` | `1.05` | Headings, texto display |
| `--leading-normal` | `1.7` | Texto corpo |
| `--leading-relaxed` | `1.65` | Corpo grande, prosa de docs |

## Estilos de heading

| Nivel | Tamanho | Peso | Letter-spacing |
|-------|---------|------|----------------|
| h1 | `var(--text-h1)` | 800 | -0.035em |
| h2 | `var(--text-h2)` | 800 | -0.025em |
| h3 | `var(--text-h3)` | 600 | -0.015em |
| display | `var(--text-display)` | 800 | -0.04em |

## Defaults do corpo

```css
body {
  font-family: var(--font-sans);
  font-size: var(--text-body);    /* 1rem */
  font-weight: 400;
  line-height: var(--leading-normal);  /* 1.7 */
  letter-spacing: -0.011em;
  -webkit-font-smoothing: antialiased;
}
```

## Labels de secao

Usados para headers de categoria em uppercase acima de secoes:

```css
.section-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}
```
