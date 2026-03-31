---
title: Componentes
order: 5
description: Componentes de UI e seus padroes.
---

# Componentes

Todos os componentes sao arquivos Astro `.astro` em `src/components/`. Estilos sao encapsulados via tags `<style>` do Astro e referenciam tokens globais.

## Botoes

Tres variantes de botao definidas globalmente em `global.css`:

### btn-primary

Fundo escuro, texto branco. Call-to-action primario.

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

Transparente com borda. Acao secundaria.

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

Transparente, sem borda. Acao terciaria.

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

Label pill uppercase usada para categorizacao de secoes.

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

Item de grid com icone opcional, titulo e descricao.

- Padding: `var(--space-xl)` (32px)
- Borda: `1px solid var(--color-border-light)`
- Radius: `var(--radius-lg)` (12px)
- Background: `var(--color-surface)`
- Icone: container 40x40px, `var(--radius-md)`, fundo `var(--color-accent-light)`
- Hover: `var(--shadow-sm)`

### ProductCard

Card com link para showcases de produto. Levanta no hover.

- Padding: `var(--space-xl)` (32px)
- Borda: `1px solid var(--color-border)`
- Radius: `var(--radius-xl)` (20px)
- Background: `var(--color-surface)`
- Icone: container 36x36px
- Hover: `var(--shadow-md)` + `translateY(-2px)`

## Navegacao (Nav.astro)

Posicao fixa, backdrop blur, formato pill.

- Altura: auto (baseada em padding)
- Background: `rgba(248, 250, 252, 0.6)`
- Borda: `1px solid rgba(148, 163, 184, 0.14)`
- Radius: `var(--radius-pill)`
- Backdrop: `blur(16px)`
- Logo: icone (20x20) + wordmark em monospace
- Mobile: menu hamburger alterna visibilidade dos links

## Hero (Hero.astro)

Layout centralizado com badge, titulo, subtitulo, botoes CTA opcionais e bloco de instalacao.

- Container: `var(--shell-narrow)` (max 1024px)
- Titulo: `var(--text-display)`, peso 800
- Subtitulo: `var(--text-body-lg)`, `var(--color-text-secondary)`
- Gap do CTA: `var(--space-md)` (16px)

## FAQ (FAQ.astro)

Acordeao usando `<details>/<summary>` nativos.

- Itens: fundo `var(--color-bg)`, radius `var(--radius-xl)`
- Pergunta: flex com space-between, `var(--color-text)`
- Resposta: `var(--color-text-secondary)`, fonte menor
- Icone toggle: "+" rotaciona 45deg ao abrir
- Hover: `var(--shadow-sm)`

## Testimonials (Testimonials.astro)

Carrossel de 3 cards com foco central.

- Inativo: `scale(0.92)`, `opacity(0.4)`
- Ativo (centro): `scale(1)`, `opacity(1)`
- Navegacao: botoes circulares 48x48px
- Avatar: 40x40px circular
- Transicao: `0.4s ease` opacidade, `0.5s cubic-bezier` movimento

## ValuePanel (ValuePanel.astro)

Grid de 2 colunas com texto + conteudo visual.

- Background: `rgba(255, 255, 255, 0.6)`
- Borda: `1px solid var(--color-border-light)`
- Radius: `var(--radius-xl)`
- Padding: `var(--space-2xl)` (48px)
- Variante invertida para layouts alternados

## StatsRow (StatsRow.astro)

Display de 3 colunas de estatisticas com divisores.

- Alinhamento de texto centralizado
- Valores grandes na cor accent
- Labels em texto muted
- Divisores border-right entre itens

## CodeBlock (CodeBlock.astro)

Display de codigo estilo terminal.

- Header: escuro (#0e0e0e) com 3 dots de janela (vermelho/amarelo/verde)
- Corpo: escuro (#1e1e2e) com syntax highlighting
- Fonte monospace
- Responsivo: fonte menor e text wrapping no mobile

## InstallBlock (InstallBlock.astro)

Display de comando de instalacao unico com botao de copiar.

- Botao de copiar com clipboard API
- Feedback de sucesso: checkmark verde, timeout de 2s
- Highlighting de comando para keywords bash
