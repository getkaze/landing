---
title: Spacing & Layout
order: 4
description: Spacing scale, layout containers, and responsive breakpoints.
---

# Spacing & Layout

Spacing uses an 8px base unit. Layout containers use fluid widths with `min()` for max-width capping.

## Spacing scale

| Token | Value | Multiple |
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

| Token | Value | Computed | Usage |
|-------|-------|----------|-------|
| `--radius-sm` | `0.375rem` | 6px | Inline code, small elements |
| `--radius-md` | `0.5rem` | 8px | Icon containers |
| `--radius-lg` | `0.75rem` | 12px | Cards, buttons |
| `--radius-xl` | `1.25rem` | 20px | Large cards, FAQ items |
| `--radius-pill` | `9999px` | pill | Badges, nav bar |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(15, 23, 42, 0.03)` | Minimal elevation |
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.03), 0 12px 30px rgba(15, 23, 42, 0.05)` | Card hover, button hover |
| `--shadow-md` | `0 1px 2px rgba(15, 23, 42, 0.03), 0 16px 40px rgba(15, 23, 42, 0.04)` | Product card hover |
| `--shadow-lg` | `0 1px 2px rgba(15, 23, 42, 0.04), 0 20px 50px rgba(15, 23, 42, 0.05)` | Elevated elements |

## Z-index scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `1` | Default stacking |
| `--z-card` | `10` | Cards above base |
| `--z-nav` | `100` | Navigation bar |
| `--z-overlay` | `200` | Mobile sidebar overlay |
| `--z-modal` | `300` | Modals |

## Layout containers

| Token | Value | Max width |
|-------|-------|-----------|
| `--shell-width` | `min(100% - 3rem, 76rem)` | 1216px |
| `--shell-narrow` | `min(100% - 3rem, 64rem)` | 1024px |

Usage:

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

## Responsive breakpoint

Single breakpoint at **768px**:

```css
@media (max-width: 768px) {
  section {
    padding: var(--space-2xl) var(--space-md);
  }
}
```

| Element | Desktop | Mobile (<=768px) |
|---------|---------|-------------------|
| Section padding | `3.5rem 24px` | `48px 16px` |
| Button padding | `12px 24px` | `10px 18px` |
| Grid columns | 2-4 | 1 |
| Docs sidebar | 240px fixed | Full-width overlay |
| Docs content margin | 240px left | 0 |
