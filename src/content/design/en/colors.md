---
title: Colors
order: 2
description: Color tokens and palette.
---

# Colors

All colors are defined as CSS custom properties in `:root`. The palette uses warm neutrals for backgrounds, cool slate tones for text, and a near-black accent for actions.

## Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#fbfbf8` | Page background (warm off-white) |
| `--color-bg-alt` | `#fdfcf9` | Hover backgrounds, alternate sections |
| `--color-surface` | `hsla(0, 0%, 100%, 0.92)` | Card backgrounds (semi-transparent white) |
| `--color-surface-alt` | `hsla(0, 0%, 100%, 0.9)` | Sidebar hover, secondary surfaces |

The body also applies a subtle vertical gradient:

```css
background-image: linear-gradient(180deg, #fbfbf8, #f9fafb 52%, #fbfbf8);
```

## Text

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | `#0f172a` | Primary text, headings |
| `--color-text-secondary` | `#475569` | Body text, descriptions |
| `--color-text-muted` | `#64748b` | Labels, captions, placeholders |

## Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `#e2e8f0` | Dividers, table borders |
| `--color-border-light` | `rgba(226, 232, 240, 0.8)` | Card borders, subtle dividers |

## Accent

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#111827` | Primary buttons, active links, inline code |
| `--color-accent-hover` | `#1f2937` | Button hover, link hover |
| `--color-accent-light` | `#f3f4f6` | Icon containers, active sidebar items |
| `--color-accent-subtle` | `#e5e7eb` | Code backgrounds, blockquote backgrounds |

## Status

| Token | Value | Usage |
|-------|-------|-------|
| `--color-green` | `#16a34a` | Success states |
| `--color-red` | `#dc2626` | Error states |
| `--color-amber` | `#d97706` | Warning states |
| `--color-blue` | `#2563eb` | Info states |

## Selection

```css
::selection {
  background: rgba(17, 24, 39, 0.2);
  color: #111827;
}
```

## Code block colors

Code blocks use a dark theme:

| Element | Value |
|---------|-------|
| Header background | `#0e0e0e` |
| Code background | `#1e1e2e` |
| Code text | `#cdd6f4` |
| Window dots | `#ff5f57` (red), `#febc2e` (yellow), `#28c840` (green) |
