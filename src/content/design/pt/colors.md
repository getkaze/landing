---
title: Cores
order: 2
description: Tokens de cor e paleta.
---

# Cores

Todas as cores sao definidas como CSS custom properties no `:root`. A paleta usa neutros quentes para fundos, tons slate frios para texto e um accent quase preto para acoes.

## Fundos

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#fbfbf8` | Fundo da pagina (off-white quente) |
| `--color-bg-alt` | `#fdfcf9` | Fundos de hover, secoes alternadas |
| `--color-surface` | `hsla(0, 0%, 100%, 0.92)` | Fundos de cards (branco semi-transparente) |
| `--color-surface-alt` | `hsla(0, 0%, 100%, 0.9)` | Hover de sidebar, superficies secundarias |

O body tambem aplica um gradiente vertical sutil:

```css
background-image: linear-gradient(180deg, #fbfbf8, #f9fafb 52%, #fbfbf8);
```

## Texto

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-text` | `#0f172a` | Texto primario, headings |
| `--color-text-secondary` | `#475569` | Texto corpo, descricoes |
| `--color-text-muted` | `#64748b` | Labels, captions, placeholders |

## Bordas

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-border` | `#e2e8f0` | Divisores, bordas de tabela |
| `--color-border-light` | `rgba(226, 232, 240, 0.8)` | Bordas de cards, divisores sutis |

## Accent

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-accent` | `#111827` | Botoes primarios, links ativos, codigo inline |
| `--color-accent-hover` | `#1f2937` | Hover de botoes, hover de links |
| `--color-accent-light` | `#f3f4f6` | Containers de icone, itens ativos da sidebar |
| `--color-accent-subtle` | `#e5e7eb` | Fundos de codigo, fundos de blockquote |

## Status

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-green` | `#16a34a` | Sucesso |
| `--color-red` | `#dc2626` | Erro |
| `--color-amber` | `#d97706` | Aviso |
| `--color-blue` | `#2563eb` | Informacao |

## Selecao

```css
::selection {
  background: rgba(17, 24, 39, 0.2);
  color: #111827;
}
```

## Cores de blocos de codigo

Blocos de codigo usam um tema escuro:

| Elemento | Valor |
|----------|-------|
| Fundo do header | `#0e0e0e` |
| Fundo do codigo | `#1e1e2e` |
| Texto do codigo | `#cdd6f4` |
| Dots da janela | `#ff5f57` (vermelho), `#febc2e` (amarelo), `#28c840` (verde) |
