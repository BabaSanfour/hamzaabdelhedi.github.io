# Stage 06 visual tokens

The active site uses the following shared visual tokens. Sass variables remain
the compile-time source for Bookshop and media queries; the CSS custom
properties are exposed once from the shared base layer and consumed by the
final site visual layer.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#f7f7f4` | Page background |
| `--color-surface` | `#ffffff` | Cards, controls, reading surfaces |
| `--color-text` | `#15171a` | Body and heading text |
| `--color-muted` | `#666b73` | Supporting text, metadata, dates |
| `--color-rule` | `#dedfe3` | Borders and dividers |
| `--color-primary` | `#4457c4` | Links, active controls, primary actions |
| `--color-secondary` | `#167d78` | Eyebrows, accents, timeline markers |
| `--color-focus` | `#3446ad` | Focus/link hover treatment |

Contrast checks against the light surfaces produced these ratios: text on the
page background `16.73:1`, text on white `17.96:1`, muted text on the page
background `5.00:1`, muted text on white `5.36:1`, primary on white `6.17:1`,
secondary on white `4.95:1`, and white text on primary `6.17:1`.

## Spacing, shape, and layout

| Token family | Values |
| --- | --- |
| Spacing | `4, 8, 12, 16, 24, 32, 48, 64, 96px` |
| Radius | `8px`, `14px`, `22px` |
| Reading width | `760px` |
| Wide width | `1180px` |
| Breakpoints | `576px`, `768px`, `1024px` |
| Base type | Inter, system fallbacks, `16px / 1.65` |
| Heading scale | `48 / 32 / 24 / 20 / 18 / 16px`, descending `h1`–`h6` |

## Component mapping

| Family | Active treatment |
| --- | --- |
| Header/navigation | Off-white header, one-pixel rule, primary active link, 44px minimum menu target |
| Research card | White surface, `14px` radius, rule border, no decorative shadow |
| Software card | Same surface family with restrained metadata and wrapped links |
| Publication row/card | White bordered card, resilient title/author wrapping, selectable citation text |
| Update item | Timeline rule/node system, muted metadata, readable summary and tags |
| Hero | Compact two-column introduction, bordered profile card, primary/secondary CTAs |
| Detail/post pages | `760px` reading column, visible links, responsive fact grid |
| Footer | Solid dark text treatment with consistent spacing; no gradient |

Legacy Sass aliases still exist because Bookshop compiles the shared component
library as one generated bundle. They support untouched interaction states and
editor-facing components; active page surfaces are overridden by
`site/assets/_visual-system.scss` and use the token values above. No second
palette or new font family was introduced.
