---
title: Overview
order: 1
description: Introduction to the Kaze design system.
---

# Overview

The Kaze design system is the shared visual language across all Kaze products: Keel, Helm, and Mole. It defines colors, typography, spacing, components, and interaction patterns used throughout the landing site and documentation.

## Principles

1. **Minimalist**: clean, uncluttered UI with no decorative bloat
2. **Functional**: every element serves a purpose
3. **Developer-focused**: monospace fonts, code blocks, terminal mockups
4. **Performant**: pure CSS, no frameworks, no preprocessors
5. **Responsive**: mobile-first, graceful degradation at 768px
6. **Consistent**: unified token scale for spacing, color, and typography

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static site generation) |
| Styling | Pure CSS with custom properties |
| Fonts | Inter (sans), JetBrains Mono (mono) via Google Fonts |
| Icons | Inline SVG (no icon font) |
| Animations | CSS transitions + IntersectionObserver for reveals |
| Motion lib | motion@11 (available, used sparingly) |

## Architecture

All design tokens live in a single file: `src/styles/global.css`. Components use Astro's scoped `<style>` tags for encapsulation while referencing global tokens via CSS custom properties.

```
src/
  styles/
    global.css          # Tokens, reset, base, utilities
  components/
    Nav.astro           # Navigation bar
    Footer.astro        # Site footer
    Hero.astro          # Hero section
    FeatureCard.astro   # Feature cards
    ProductCard.astro   # Product cards
    ...                 # Component-scoped styles
  layouts/
    Base.astro          # HTML shell, meta, fonts
    DocsLayout.astro    # Docs sidebar + content
```

## No dark mode

The design system currently has a single light theme. All color tokens assume a warm off-white background (#fbfbf8).
