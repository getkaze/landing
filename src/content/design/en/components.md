---
title: Components
order: 5
description: UI components and their patterns.
---

# Components

All components are Astro `.astro` files in `src/components/`. Styles are scoped via Astro's `<style>` tags and reference global tokens.

## Buttons

Three button variants defined globally in `global.css`:

### btn-primary

Dark background, white text. Primary call-to-action.

```css
.btn-primary {
  background: var(--color-accent);        /* #111827 */
  color: #fff;
  padding: 12px 24px;
  border-radius: var(--radius-lg);        /* 12px */
  font-size: var(--text-small);           /* 0.875rem */
  font-weight: 600;
}
/* Hover: background accent-hover, shadow-sm */
```

### btn-secondary

Transparent with border. Secondary action.

```css
.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 12px 24px;
  border-radius: var(--radius-lg);
  font-size: var(--text-small);
  font-weight: 600;
}
/* Hover: background bg-alt */
```

### btn-ghost

Transparent, no border. Tertiary action.

```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  padding: 12px 24px;
  border-radius: var(--radius-lg);
  font-size: var(--text-small);
  font-weight: 500;
}
/* Hover: background bg-alt, color text */
```

## Badge

Uppercase pill label used for section categorization.

```css
.badge {
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}
```

## Cards

### FeatureCard

Grid item with optional icon, title, and description.

- Padding: `var(--space-xl)` (32px)
- Border: `1px solid var(--color-border-light)`
- Radius: `var(--radius-lg)` (12px)
- Background: `var(--color-surface)`
- Icon: 40x40px container, `var(--radius-md)`, `var(--color-accent-light)` background
- Hover: `var(--shadow-sm)`

### ProductCard

Linked card for product showcases. Lifts on hover.

- Padding: `var(--space-xl)` (32px)
- Border: `1px solid var(--color-border)`
- Radius: `var(--radius-xl)` (20px)
- Background: `var(--color-surface)`
- Icon: 36x36px container
- Hover: `var(--shadow-md)` + `translateY(-2px)`

## Navigation (Nav.astro)

Fixed position, backdrop blur, pill-shaped.

- Height: auto (padding-based)
- Background: `rgba(248, 250, 252, 0.6)`
- Border: `1px solid rgba(148, 163, 184, 0.14)`
- Radius: `var(--radius-pill)`
- Backdrop: `blur(16px)`
- Logo: icon (20x20) + wordmark in monospace
- Mobile: hamburger menu toggles link visibility

## Hero (Hero.astro)

Centered layout with badge, title, subtitle, optional CTA buttons and install block.

- Container: `var(--shell-narrow)` (max 1024px)
- Title: `var(--text-display)`, weight 800
- Subtitle: `var(--text-body-lg)`, `var(--color-text-secondary)`
- CTA gap: `var(--space-md)` (16px)

## FAQ (FAQ.astro)

Accordion using native `<details>/<summary>`.

- Items: `var(--color-bg)` background, `var(--radius-xl)` radius
- Question: flex with space-between, `var(--color-text)`
- Answer: `var(--color-text-secondary)`, smaller font
- Toggle icon: "+" rotates 45deg on open
- Hover: `var(--shadow-sm)`

## Testimonials (Testimonials.astro)

3-card carousel with center focus.

- Inactive: `scale(0.92)`, `opacity(0.4)`
- Active (center): `scale(1)`, `opacity(1)`
- Navigation: circular buttons 48x48px
- Avatar: 40x40px circular
- Transition: `0.4s ease` opacity, `0.5s cubic-bezier` movement

## ValuePanel (ValuePanel.astro)

2-column grid with text + visual content.

- Background: `rgba(255, 255, 255, 0.6)`
- Border: `1px solid var(--color-border-light)`
- Radius: `var(--radius-xl)`
- Padding: `var(--space-2xl)` (48px)
- Reversed variant for alternating layouts

## StatsRow (StatsRow.astro)

3-column stat display with dividers.

- Centered text alignment
- Large values in accent color
- Labels in muted text
- Border-right dividers between items

## CodeBlock (CodeBlock.astro)

Terminal-style code display.

- Header: dark (#0e0e0e) with 3 window dots (red/yellow/green)
- Body: dark (#1e1e2e) with syntax highlighting
- Monospace font
- Responsive: smaller font and text wrapping on mobile

## InstallBlock (InstallBlock.astro)

Single-command install display with copy button.

- Copy button with clipboard API
- Success feedback: green checkmark, 2s timeout
- Command highlighting for bash keywords
