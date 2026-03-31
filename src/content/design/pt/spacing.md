---
title: Espacamento & Layout
order: 4
description: Escala de espacamento, containers de layout e breakpoints responsivos.
---

# Espacamento & Layout

O espacamento usa uma unidade base de 8px. Containers de layout usam larguras fluidas com `min()` para limite de largura maxima.

## Escala de espacamento

| Token | Valor | Multiplo |
|-------|-------|----------|
| `--space-xs` | `4px` | 0.5x |
| `--space-sm` | `8px` | 1x |
| `--space-md` | `16px` | 2x |
| `--space-lg` | `24px` | 3x |
| `--space-xl` | `32px` | 4x |
| `--space-2xl` | `48px` | 6x |
| `--space-3xl` | `56px` | 7x |
| `--space-4xl` | `72px` | 9x |
| `--space-5xl` | `120px` | 15x |

## Border radius

| Token | Valor | Computado | Uso |
|-------|-------|-----------|-----|
| `--radius-sm` | `0.375rem` | 6px | Codigo inline, elementos pequenos |
| `--radius-md` | `0.5rem` | 8px | Containers de icone |
| `--radius-lg` | `0.75rem` | 12px | Cards, botoes |
| `--radius-xl` | `1.25rem` | 20px | Cards grandes, itens de FAQ |
| `--radius-pill` | `9999px` | pill | Badges, barra de nav |

## Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-xs` | `0 1px 2px rgba(15, 23, 42, 0.03)` | Elevacao minima |
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.03), 0 12px 30px rgba(15, 23, 42, 0.05)` | Hover de card, hover de botao |
| `--shadow-md` | `0 1px 2px rgba(15, 23, 42, 0.03), 0 16px 40px rgba(15, 23, 42, 0.04)` | Hover de product card |
| `--shadow-lg` | `0 1px 2px rgba(15, 23, 42, 0.04), 0 20px 50px rgba(15, 23, 42, 0.05)` | Elementos elevados |

## Escala de z-index

| Token | Valor | Uso |
|-------|-------|-----|
| `--z-base` | `1` | Empilhamento padrao |
| `--z-card` | `10` | Cards acima da base |
| `--z-nav` | `100` | Barra de navegacao |
| `--z-overlay` | `200` | Overlay de sidebar mobile |
| `--z-modal` | `300` | Modais |

## Containers de layout

| Token | Valor | Largura maxima |
|-------|-------|---------------|
| `--shell-width` | `min(100% - 3rem, 76rem)` | 1216px |
| `--shell-narrow` | `min(100% - 3rem, 64rem)` | 1024px |

Uso:

```css
.container {
  width: var(--shell-width);
  margin: 0 auto;
}

section {
  padding: 3.5rem var(--space-lg);
  width: var(--shell-width);
  margin: 0 auto;
}
```

## Breakpoint responsivo

Breakpoint unico em **768px**:

```css
@media (max-width: 768px) {
  section {
    padding: var(--space-2xl) var(--space-md);
  }
}
```

| Elemento | Desktop | Mobile (<=768px) |
|----------|---------|-------------------|
| Padding da secao | `3.5rem 24px` | `48px 16px` |
| Padding do botao | `12px 24px` | `10px 18px` |
| Colunas de grid | 2-4 | 1 |
| Sidebar de docs | 240px fixa | Overlay full-width |
| Margem do conteudo docs | 240px esquerda | 0 |
