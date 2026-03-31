---
title: Motion
order: 6
description: Transitions, animations, and interaction patterns.
---

# Motion

Motion is intentionally subtle. Transitions use CSS with consistent duration tokens. Scroll-triggered reveals use IntersectionObserver.

## Duration tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Link colors, sidebar hover |
| `--duration-default` | `200ms` | Buttons, cards, general transitions |
| `--duration-slow` | `300ms` | Complex state changes |
| `--easing-default` | `ease` | All standard transitions |

## Scroll reveal

Elements with the `.reveal` class fade in and slide up when they enter the viewport.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Triggered via IntersectionObserver:

```js
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

## Hover transitions

Standard pattern for all interactive elements:

```css
transition: background var(--duration-default) var(--easing-default),
            box-shadow var(--duration-default) var(--easing-default);
```

### Hover patterns by element

| Element | Transition property | Duration |
|---------|-------------------|----------|
| Links | color | `--duration-fast` (150ms) |
| Buttons | background, box-shadow | `--duration-default` (200ms) |
| Cards | box-shadow | `--duration-default` (200ms) |
| Product cards | box-shadow, transform | `--duration-default` (200ms) |
| Icons | color | `--duration-fast` (150ms) |

## Carousel

The testimonials carousel uses a cubic-bezier easing for smooth sliding:

```css
transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Card focus transitions:

```css
transition: opacity 0.4s ease, transform 0.4s ease;
```

## Terminal animation

Used in the Helm terminal showcase. Lines appear sequentially with staggered delays:

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Cursor blink */
animation: blink 1s step-end infinite;

/* Line entrance: 100ms stagger per line */
opacity: 0 -> 1;
transform: translateY(4px) -> translateY(0);
transition: 0.3s ease;
```

## Reduced motion

The design system does not currently include a `prefers-reduced-motion` media query. All animations are CSS-based and short duration (under 600ms).
