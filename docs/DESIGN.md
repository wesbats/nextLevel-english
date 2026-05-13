# DESIGN.md - NextLevel English

**Neon-infused immersion meets high-performance education. A gaming-first aesthetic for the future of language learning.**

## Overview

A identidade visual da **NextLevel English** é baseada no conceito de "Leveling Up" (Subir de Nível). O sistema foi projetado para transformar a interface de uma plataforma educacional em um dashboard de alto desempenho, similar a um setup gamer premium. 

Utilizamos uma fundação em **Deep Navy** para criar profundidade, permitindo que os acentos em **Electric Blue** e **Neon Cyan** funcionem como fontes de luz (glows). A filosofia estética combina o "Glassmorphism" (efeito de vidro jateado) com tipografia técnica (Sora) para passar credibilidade e inovação. O objetivo é que o usuário sinta que está entrando em um simulador de alta tecnologia, e não em uma sala de aula tradicional.

---

## Colors

### Brand Palette

| Token     | Hex       | Role                                                    |
|-----------|-----------|----------------------------------------------------------|
| Primary   | `#0066FF` | Electric Blue — Botões principais e estados ativos.      |
| Secondary | `#00D4FF` | Neon Cyan — Ganhos de XP, destaques e acentos de energia.|
| Tertiary  | `#7C4DFF` | Soft Purple — Itens raros, conquistas épicas e modo Teen.|

### Surface Palette (Foco em Dark Mode)

| Token          | Hex       | Role                                              |
|----------------|-----------|---------------------------------------------------|
| Background     | `#0A0E1A` | Deep Navy — O fundo principal da landing page.    |
| Surface        | `#131720` | Dark Surface — Cards e fundos de seção.           |
| Surface Raised | `#1F2633` | Elevated — Estados de hover, dropdowns e modais.  |

### Content Palette

| Token          | Hex       | Role                                              |
|----------------|-----------|---------------------------------------------------|
| Text Primary   | `#FFFFFF` | Headlines e textos principais.                    |
| Text Secondary | `#8892A4` | Mid Gray — Descrições e textos de apoio.          |
| Text Tertiary  | `#4A5568` | Textos desativados ou legendas de rodapé.         |

### Border Palette

| Token         | Hex       | Usage                                             |
|---------------|-----------|---------------------------------------------------|
| Border Subtle | `#1E293B` | Divisores discretos e bordas de cards padrão.     |
| Border Medium | `#2D3748` | Bordas de inputs e separadores de painéis.        |
| Border Strong | `#0066FF` | Foco em elementos interativos e seleções.         |

### Semantic Colors

| Token   | Hex       | Usage                                             |
|---------|-----------|---------------------------------------------------|
| Success | `#00E676` | Level Green — Respostas corretas e ofensivas.     |
| Warning | `#FFB800` | Victory Gold — Ranks, moedas e conquistas.        |
| Error   | `#FF3B3B` | Alert Red — Erros, perda de vidas ou alertas.     |
| Info    | `#00D4FF` | Tooltips informativos e status da IA.             |

---

## Typography

### Font Stack

| Role             | Font Family                                                           |
|------------------|-----------------------------------------------------------------------|
| Display/Headings | Sora, system-ui, sans-serif                                           |
| UI/Body          | Inter, system-ui, sans-serif                                          |
| Mono/Data        | JetBrains Mono, Fira Code, monospace                                  |

### Type Scale

| Level        | Font   | Size | Weight | Line Height | Letter Spacing | Usage                               |
|--------------|--------|------|--------|-------------|----------------|-------------------------------------|
| Display      | Sora   | 72px | 800    | 1.1         | -0.02em        | Hero headlines (Marketing)          |
| Headline L   | Sora   | 48px | 700    | 1.2         | -0.01em        | Títulos de seção                    |
| Headline M   | Sora   | 32px | 600    | 1.3         | 0              | Subtítulos importantes              |
| Subhead      | Sora   | 24px | 600    | 1.4         | 0              | Títulos de cards                    |
| Body Large   | Inter  | 18px | 400    | 1.6         | 0              | Parágrafos de introdução            |
| Body         | Inter  | 16px | 400    | 1.6         | 0              | Texto corrido                       |
| Caption      | Inter  | 14px | 500    | 1.4         | 0.01em         | Rótulos pequenos e metadados        |
| Overline     | Sora   | 12px | 700    | 1.0         | 0.15em         | CATEGORIAS EM MAIÚSCULO             |
| Stats        | JBMono | 14px | 400    | 1.5         | 0              | Contadores de XP e dados técnicos   |

---

## Spacing

Sistema baseado em 8px para garantir ritmo visual.

| Property                    | Value (px)    |
|-----------------------------|---------------|
| Base unit                   | 8px           |
| Scale                       | 4, 8, 16, 24, 32, 48, 64, 80, 96, 128 |
| Component padding — small   | 12px          |
| Component padding — medium  | 24px          |
| Component padding — large   | 40px          |
| Section spacing — mobile    | 64px          |
| Section spacing — desktop   | 160px         |

---

## Border Radius

| Token  | Value  | Usage                                             |
|--------|--------|---------------------------------------------------|
| None   | 0px    | Não utilizado para manter suavidade.              |
| Small  | 4px    | Checkboxes, badges pequenos.                      |
| Medium | 12px   | Botões, campos de input, cards padrão.            |
| Large  | 24px   | Modals, seções hero, cards de destaque.           |
| Extra  | 32px   | Containers grandes e backgrounds decorativos.     |
| Full   | 9999px | Avatars, botões em formato de pílula.             |

---

## Shadows & Glows

Como o sistema é prioritariamente Dark Mode, utilizamos **Glows** (brilhos internos e externos) em vez de sombras pretas tradicionais para criar profundidade.

| Level   | Value                                               | Usage                                        |
|---------|-----------------------------------------------------|----------------------------------------------|
| Subtle  | `0 4px 12px rgba(0,0,0,0.3)`                        | Cards flutuantes padrão.                     |
| Glow S  | `0 0 15px rgba(0, 102, 255, 0.15)`                  | Brilho azul para elementos ativos.           |
| Glow L  | `0 0 40px rgba(0, 102, 255, 0.25)`                  | Destaque hero e elementos épicos.            |
| Focus   | `0 0 0 4px rgba(0, 102, 255, 0.4)`                  | Anel de foco para acessibilidade.            |

---

## Components

### Buttons (CTA Principal)
- **Background**: Gradient `linear-gradient(135deg, #0066FF, #00D4FF)`
- **Text**: `#FFFFFF`, Weight 700, Case: Sans
- **Radius**: 12px (Medium)
- **Hover**: Scale 1.05, Shadow `Glow S`.
- **Active**: Scale 0.98.

### Feature Cards (Glassmorphism)
- **Background**: `rgba(19, 23, 32, 0.6)`
- **Backdrop-blur**: 16px
- **Border**: 1px solid `rgba(255, 255, 255, 0.08)`
- **Radius**: 24px (Large)
- **Padding**: 32px
- **Hover**: Border-color `#0066FF`, Glow Subtle.

### Progress Bars (XP Style)
- **Track**: `#1F2633` (Surface Raised)
- **Fill**: Gradient `#00D4FF` to `#0066FF`
- **Height**: 8px
- **Radius**: 9999px

### Inputs
- **Background**: `#131720`
- **Border**: 2px solid `#1E293B`
- **Radius**: 12px
- **Focus**: Border `#0066FF`, Box-shadow `Focus`.

---

## Do's and Don'ts

1. **Do**: Use o gradiente da marca apenas em botões de ação primária ou textos de destaque no Hero.
2. **Don't**: Não use preto puro (`#000000`). Use sempre o Deep Navy (`#0A0E1A`) para manter o aspecto "premium gamer".
3. **Do**: Aplique `Sora` para todos os títulos acima de 24px para manter a personalidade técnica.
4. **Don't**: Não utilize sombras pretas pesadas em fundos escuros; prefira aumentar a luminosidade da superfície ou usar glows coloridos.
5. **Do**: Mantenha um espaçamento generoso (mínimo 160px) entre as grandes seções da landing page para evitar poluição visual.
6. **Don't**: Não misture o roxo (`#7C4DFF`) com o azul primário em proporções iguais; o roxo é um acento para raridade e o modo Teen.
7. **Do**: Utilize o `JetBrains Mono` para dados numéricos de progresso, simulando o HUD de um jogo.
8. **Don't**: Não arredonde cantos com valores inferiores a 12px para componentes de interface principais, para evitar uma aparência datada/rígida.
9. **Do**: Garanta que o contraste do texto secundário (`#8892A4`) passe nos testes WCAG AA sobre o fundo escuro.
10. **Don't**: Não use bordas sólidas brancas; prefira transparências (`rgba`) para um visual mais integrado e moderno.