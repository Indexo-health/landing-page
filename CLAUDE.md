# Indexo Health Landing Page

## Project Overview
Medical-grade sleep & cardiovascular monitoring landing page. React SPA with multi-language support (EN/ZH).

- **URL**: https://indexo.health
- **Repo**: https://github.com/Indexo-health/landing-page
- **Deploy**: Vercel (auto-deploy on push to `main`)

## Tech Stack
- React 19 + TypeScript 5.8 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin, NOT v3)
- React Router DOM v7 (client-side routing)
- react-helmet-async (per-page SEO metadata)
- Custom i18n via React Context (no external library)
- Icons: Material Symbols Outlined (Google)
- Font: Space Grotesk (Google Fonts)

## Project Structure
```
src/
  components/    # Shared reusable components (Header, Footer, Hero, etc.)
  pages/         # Page-level components (Home, HowItWorks, OurMission, NotFound)
  contexts/      # React Context providers (LanguageContext)
  i18n/          # translations.ts — flat key structure with dot notation
  App.tsx        # Router + layout wrapper
  main.tsx       # Entry point
  index.css      # Design tokens + global styles + utility classes
public/
  images/        # All image assets (compressed)
```

> **Note**: The `web/` folder is a legacy app — do NOT modify it. All work happens at the repo root.

## Design System

### Brand Colors (use these token names, NOT raw Tailwind colors)
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-teal` | #00BFA5 | Primary accent, CTAs, links, icons |
| `brand-navy` | #050A30 | Headings, dark backgrounds, footer |
| `brand-orange` | #FF9500 | Secondary accent, alerts, highlights |
| `brand-green` | #2ECC71 | Success states, online indicators |
| `brand-danger` / `brand-red` | #FF3B30 / #EF4444 | Alerts, warnings |

### Background Colors
| Token | Usage |
|-------|-------|
| `background-app` | Page background (#f4f6f8) |
| `background-subtle` | Card/section backgrounds (#F8FAFC) |
| `background-cool-gray` | Alternating sections (#F8FAFB) |
| `background-off-white` | Light sections (#FAFAFA) |
| `background-teal-tint` | Teal-tinted sections (#F0F9F8) |
| `card-white` | Card backgrounds (#ffffff) |

### Text Colors
| Token | Usage |
|-------|-------|
| `text-main` / `brand-navy` | Primary text, headings |
| `text-secondary` | Body text, descriptions (#64748b) |

### Shadows
| Token | Usage |
|-------|-------|
| `shadow-card` | Default card elevation |
| `shadow-card-hover` | Card hover state |
| `shadow-glow` | Teal glow effect |
| `shadow-soft-xl` | Glass cards |
| `shadow-btn-glow` | CTA button glow |

### Typography
- Font: `Space Grotesk` (loaded via Google Fonts in index.html)
- Headings: `font-bold text-brand-navy tracking-tight`
- Body: `text-text-secondary leading-relaxed`
- Section titles: `text-3xl md:text-4xl` or `text-4xl md:text-5xl`
- Badges: `text-xs font-bold uppercase tracking-wider`

### IMPORTANT: Color Usage Rules
- **ALWAYS** use design token class names: `text-brand-teal`, `bg-brand-navy`, etc.
- **NEVER** use raw Tailwind colors like `text-cyan-500`, `bg-slate-800`, `text-gray-600`
  - Exception: `gray-50`, `gray-100`, `gray-200`, `gray-400` for subtle UI elements (input borders, dividers)
- For opacity variants, use token + opacity: `bg-brand-teal/10`, `text-brand-navy/80`

## Component Patterns

### Section Layout
Every major section follows this pattern:
```tsx
<section className="py-20 lg:py-28 bg-{background-token}">
  <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">{t('key')}</h2>
      <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">{t('key')}</p>
    </div>
    {/* Section content */}
  </div>
</section>
```

### Card Pattern
```tsx
<div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card
  hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1
  transition-all duration-300 group">
  {/* Icon */}
  <div className="w-14 h-14 rounded-full bg-brand-teal-light/40 flex items-center justify-center
    mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
    <span className="material-symbols-outlined text-3xl">icon_name</span>
  </div>
  <h3 className="text-xl font-bold text-brand-navy mb-3">{t('key')}</h3>
  <p className="text-sm text-text-secondary leading-relaxed">{t('key')}</p>
</div>
```

### Badge Pattern
```tsx
<span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10
  text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20">
  {t('key')}
</span>
```

### CTA Button
```tsx
{/* Primary */}
<button className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white
  font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
  {t('key')}
  <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>

{/* Secondary */}
<button className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border
  text-brand-navy font-bold hover:bg-surface-border/50 transition-all">
  {t('key')}
</button>
```

### Glass Card (utility class)
```tsx
<div className="glass-card p-4 rounded-2xl">...</div>
{/* Expands to: bg-white/70 backdrop-blur-xl border border-white/60 shadow-soft-xl */}
```

## Internationalization (i18n)

### Usage
```tsx
import { useLanguage } from '../contexts/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t('page.section.key')}</h1>;
}
```

### Key Naming Convention
- Flat dot notation: `page.section.element`
- Pages: `hm` (Home), `hiw` (How It Works), `mis` (Mission)
- Shared: `nav.*`, `footer.*`
- Example: `hiw.hero.title1`, `footer.desc`, `nav.mission`

### Adding Translations
Both languages must be added simultaneously in `src/i18n/translations.ts`:
```typescript
export const translations = {
  en: { 'page.key': 'English text' },
  zh: { 'page.key': '中文文本' },
};
```

## SEO
Each page uses react-helmet-async for metadata:
```tsx
<Helmet>
  <title>Page Title — Indexo Health</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="https://indexo.health/path" />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
</Helmet>
```

## Build & Verification
```bash
npm run dev      # Dev server on port 3000
npm run build    # Production build → dist/
npm run lint     # TypeScript type check (tsc --noEmit)
```

- Always run `npm run lint` before committing to catch type errors
- Vercel auto-deploys on push to `main`
- `.npmrc` has `legacy-peer-deps=true` for React 19 compatibility

## Common Pitfalls
1. **Use design tokens, not raw colors**: `text-brand-teal` not `text-cyan-500`
2. **Tailwind CSS v4 syntax**: Uses `@theme` blocks in CSS, not `tailwind.config.js`
3. **Always add both EN + ZH translations** when adding new text
4. **Image compression**: All images in `public/images/` should be compressed with sharp before committing
5. **Flex stretch bug**: Images inside `flex flex-col` containers need `self-start` to prevent stretching
6. **SPA routing**: `vercel.json` rewrites all paths to `/index.html` for React Router
