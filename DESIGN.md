# IT Company B2B Showcase

## Purpose
Enterprise-focused IT solutions website showcasing computer accessories, cloud solutions, and networking products. Professional B2B presentation for decision-makers.

## Aesthetic Direction
Premium tech minimalism with precision depth. Confident, authoritative, trustworthy. Surface-based elevation instead of gradients. Clean modernism executed with conviction.

## Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `0.35 0.08 250` (deep navy) | `0.72 0.12 250` (bright blue) | Header, buttons, primary UI |
| Accent | `0.65 0.15 200` (cyan) | `0.7 0.17 200` (bright cyan) | CTAs, highlights, interaction |
| Secondary | `0.92 0.02 250` (slate) | `0.2 0 0` (dark slate) | Backgrounds, subtle fills |
| Muted | `0.92 0.02 250` (light slate) | `0.2 0 0` (dark slate) | Disabled, tertiary content |
| Background | `0.98 0 0` (near-white) | `0.12 0 0` (near-black) | Page canvas |
| Foreground | `0.18 0 250` (navy text) | `0.92 0.01 250` (light text) | Primary text |
| Destructive | `0.55 0.22 25` (red) | `0.65 0.19 22` (bright red) | Errors, dangerous actions |

## Typography

| Role | Font | Scale | Weight |
|------|------|-------|--------|
| Display/Headlines | Space Grotesk | 48–28px | 600–700 |
| Body | Plus Jakarta Sans | 16–14px | 400–600 |
| Monospace | JetBrains Mono | 14–12px | 400 |

## Structural Zones

| Zone | Background | Treatment | Detail |
|------|-----------|-----------|--------|
| Header | `bg-card` | `border-b`, `shadow-subtle`, sticky | Logo, nav, spacing 1rem |
| Hero | `bg-background` with `accent-line` | Full-width, `py-24`, accent top bar | Headline 48px, CTA prominent |
| Service Cards | Alternating `bg-card` / `bg-secondary/20` | `shadow-elevated`, `rounded-lg` | 3-column grid, consistent spacing |
| Product Grid | `bg-background` | Light borders, hover lift | 4-column responsive grid |
| Footer | `bg-muted/30` | `border-t border-border` | 3 columns, compact text |

## Component Patterns
- **Buttons**: Accent fill for primary, secondary outline for secondary, navy primary-foreground text
- **Cards**: `bg-card`, `border border-border`, `shadow-subtle`, no padding exceeds 1.5rem
- **Headers**: 600–700 weight, navy foreground, tight leading
- **Interactive**: `transition-smooth` on hover/focus, slight lift via `shadow-elevated`

## Motion & Interaction
- Smooth 0.3s easing on all interactive elements
- No bounce or elastic effects — professional cadence only
- Hover: slight shadow increase, no color shift
- Focus: ring-2 ring-accent, offset 2px

## Responsive Strategy
Mobile-first: `sm:` (640px), `md:` (768px), `lg:` (1024px). Hero 2 col → single, product grid 2 → 1.

## Signature Detail
Accent cyan top bar on hero and key sections. Precise 4px underline accent in primary sections. Elevation through shadow hierarchy, not gradients or blur.

## Constraints
- No full-page gradients, no hover color shifts, no rainbow charts, max 3 colors per section
- 10px+ gaps between cards, consistent 1rem padding within
- All text: navy foreground in light, light text in dark
- Monospace for product specs/SKUs only
