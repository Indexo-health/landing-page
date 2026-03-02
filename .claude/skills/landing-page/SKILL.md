# Landing Page Development Skill

Use this skill when creating or modifying landing page sections, components, or pages.

## Workflow

### Phase 1: Plan
Before making any code changes:
1. Read `CLAUDE.md` to review the design system and component patterns
2. Read `src/index.css` to confirm available design tokens
3. Read existing components in `src/components/` to understand established patterns
4. Create a TodoWrite checklist of every file that needs modification
5. Show the plan to the user before proceeding

### Phase 2: Implement
For each change, follow this order:
1. **Translations first** — Add both EN and ZH keys to `src/i18n/translations.ts`
2. **Component/Page code** — Create or edit the TSX file
3. **Routing** (if new page) — Add route to `src/App.tsx`
4. **SEO metadata** (if new page) — Add Helmet block with title, description, OG tags

### Phase 3: Verify
After all code changes:
1. Run `npm run lint` to verify TypeScript compiles
2. Start preview server and verify visually
3. Check both desktop and mobile layouts
4. Verify both EN and ZH translations render correctly

## Style Rules

### Required Design Tokens
Always use the project's design tokens from `src/index.css`. Never use raw Tailwind color classes.

**Correct:**
```tsx
<h2 className="text-brand-navy">Title</h2>
<p className="text-text-secondary">Description</p>
<button className="bg-brand-teal text-white">CTA</button>
<div className="bg-background-subtle border border-surface-border">Card</div>
```

**Wrong:**
```tsx
<h2 className="text-slate-900">Title</h2>
<p className="text-gray-500">Description</p>
<button className="bg-teal-500 text-white">CTA</button>
<div className="bg-gray-50 border border-gray-200">Card</div>
```

### Section Structure
Every new section must follow the standard layout:
- Container: `max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20`
- Vertical spacing: `py-20 lg:py-28`
- Section header: centered `text-center mb-16` with h2 + description
- Alternating backgrounds: `bg-white` → `bg-background-subtle` → `bg-white`

### Card Style
All cards use:
- Border radius: `rounded-[24px]`
- Border: `border border-surface-border`
- Shadow: `shadow-card` with `hover:shadow-card-hover`
- Hover lift: `hover:-translate-y-1 transition-all duration-300`
- Group interaction: `group` on card, `group-hover:` on icon

### Icons
Use Material Symbols Outlined (Google) — not Lucide icons in landing pages:
```tsx
<span className="material-symbols-outlined text-3xl">icon_name</span>
```
Find icon names at: https://fonts.google.com/icons

### Responsive Breakpoints
- Mobile first: base styles for mobile
- `md:` — tablet (768px+)
- `lg:` — desktop (1024px+)
- Text scaling: `text-3xl md:text-4xl lg:text-5xl`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### Animations
Available utility animations:
- `animate-float` — gentle vertical float (6s)
- `animate-float-delayed` — delayed float (starts at 3s)
- `animate-pulse` — subtle pulse
- `animate-spin-slow` — slow rotation (8s)
- `animate-dash` / `animate-dash-reverse` — SVG stroke animation
- `animation-delay-2000` / `animation-delay-4000` — staggered delays

## i18n Checklist
When adding any visible text:
- [ ] Add English key to `translations.en` in `src/i18n/translations.ts`
- [ ] Add Chinese key to `translations.zh` in `src/i18n/translations.ts`
- [ ] Use `{t('page.section.key')}` in JSX — never hardcode strings
- [ ] Follow naming convention: `page.section.element` (e.g., `hiw.hero.title1`)

## New Page Checklist
When creating a new page:
- [ ] Create `src/pages/PageName.tsx`
- [ ] Add Helmet metadata (title, description, canonical, OG tags)
- [ ] Add route in `src/App.tsx`
- [ ] Add navigation link in `src/components/Header.tsx` (both desktop and mobile nav)
- [ ] Add all translation keys (EN + ZH)
- [ ] Update `public/sitemap.xml` with new URL
- [ ] Run `npm run lint` to verify

## Image Guidelines
- All images go in `public/images/`
- Compress before committing (use sharp: JPEG ≤100KB, PNG ≤200KB typically)
- Use descriptive alt text for accessibility
- Use `object-cover` or `object-contain` as appropriate
- For transparent backgrounds, use PNG; for photos, use JPEG
