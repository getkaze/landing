---
title: Typography
order: 3
description: Font families, type scale, and text styles.
---

# Typography

The type system uses two font families loaded via Google Fonts, a responsive fluid scale, and tight letter-spacing for headings.

## Font families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | All body text, headings, UI |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Code, product names, labels |

Fonts are loaded from Google Fonts with preconnect:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

## Type scale

All sizes use `clamp()` for fluid responsiveness where appropriate.

| Token | Value | Usage |
|-------|-------|-------|
| `--text-display` | `clamp(2.35rem, 5vw, 4.2rem)` | Hero titles |
| `--text-h1` | `clamp(1.9rem, 3.2vw, 3rem)` | Page headings |
| `--text-h2` | `clamp(1.2rem, 2vw, 1.65rem)` | Section headings |
| `--text-h3` | `1.125rem` | Subsection titles |
| `--text-body` | `1rem` | Default body text |
| `--text-body-lg` | `clamp(1.05rem, 1.8vw, 1.325rem)` | Hero subtitles, lead text |
| `--text-small` | `0.875rem` | Buttons, sidebar, table cells |
| `--text-xs` | `0.75rem` | Badges, labels, captions |
| `--text-code` | `0.875rem` | Code blocks, inline code |

## Line heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | `1.05` | Headings, display text |
| `--leading-normal` | `1.7` | Body text |
| `--leading-relaxed` | `1.65` | Large body, docs prose |

## Heading styles

| Level | Size | Weight | Letter-spacing |
|-------|------|--------|----------------|
| h1 | `var(--text-h1)` | 800 | -0.035em |
| h2 | `var(--text-h2)` | 800 | -0.025em |
| h3 | `var(--text-h3)` | 600 | -0.015em |
| display | `var(--text-display)` | 800 | -0.04em |

## Body defaults

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

## Section labels

Used for uppercase category headers above sections:

```css
.section-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}
```
