---
title: Motion
order: 6
description: Transicoes, animacoes e padroes de interacao.
---

# Motion

Motion e intencionalmente sutil. Transicoes usam CSS com tokens de duracao consistentes. Reveals acionados por scroll usam IntersectionObserver.

## Tokens de duracao

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-fast` | `150ms` | Cores de link, hover de sidebar |
| `--duration-default` | `200ms` | Botoes, cards, transicoes gerais |
| `--duration-slow` | `300ms` | Mudancas de estado complexas |
| `--easing-default` | `ease` | Todas as transicoes padrao |

## Scroll reveal

Elementos com a classe `.reveal` aparecem com fade-in e deslizam para cima ao entrar no viewport.

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

Acionado via IntersectionObserver:

```js
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

## Transicoes de hover

Padrao para todos os elementos interativos:

```css
transition: background var(--duration-default) var(--easing-default),
            box-shadow var(--duration-default) var(--easing-default);
```

### Padroes de hover por elemento

| Elemento | Propriedade | Duracao |
|----------|------------|---------|
| Links | color | `--duration-fast` (150ms) |
| Botoes | background, box-shadow | `--duration-default` (200ms) |
| Cards | box-shadow | `--duration-default` (200ms) |
| Product cards | box-shadow, transform | `--duration-default` (200ms) |
| Icones | color | `--duration-fast` (150ms) |

## Carrossel

O carrossel de testimonials usa um easing cubic-bezier para deslizamento suave:

```css
transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Transicoes de foco do card:

```css
transition: opacity 0.4s ease, transform 0.4s ease;
```

## Animacao de terminal

Usada no showcase do terminal Helm. Linhas aparecem sequencialmente com delays escalonados:

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Cursor piscando */
animation: blink 1s step-end infinite;

/* Entrada de linha: 100ms de escalonamento por linha */
opacity: 0 -> 1;
transform: translateY(4px) -> translateY(0);
transition: 0.3s ease;
```

## Reduced motion

O design system atualmente nao inclui media query `prefers-reduced-motion`. Todas as animacoes sao baseadas em CSS e de curta duracao (menos de 600ms).
