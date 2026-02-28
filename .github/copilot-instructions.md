# Indexo Health Landing Page - AI Coding Guidelines

## Project Overview
This is a standalone React component for a bilingual (English/Chinese) landing page promoting Indexo Health's sleep monitoring system. The component uses Framer Motion animations, Lucide React icons, and Tailwind CSS styling.

## Key Architecture
- **Main Component**: `IndexoHealthLandingPage.jsx` - Single large component with internal sub-components
- **State Management**: React hooks (`useState` for language switching and FAQ accordion)
- **Internationalization**: `copy` object with `en` and `zh` translations, selected via `lang` state
- **Assets**: Placeholder images in `assets/` folder; update `assets` object in component for real images

## Component Patterns
- **Class Utilities**: Use `cx(...classes)` for conditional Tailwind classes (e.g., `cx("base", condition && "extra")`)
- **Reusable Components**: `Pill`, `SectionTitle`, `Container` defined as functions within the main component
- **Animation**: `motionIn` object for consistent Framer Motion entrance animations
- **Layout**: Responsive grid layouts with `sm:`, `lg:` breakpoints; max-width containers

## Styling Conventions
- **Backdrop Effects**: `backdrop-blur` with `bg-white/10` for glassmorphism (e.g., hero section)
- **Borders & Shadows**: `border-white/15`, `shadow-2xl` for depth
- **Gradients**: `bg-gradient-to-br from-white/10 via-white/5 to-white/10` for subtle backgrounds
- **Rounded Corners**: `rounded-3xl` for cards, `rounded-2xl` for smaller elements
- **Color Scheme**: White text on dark backgrounds, `text-white/90`, `text-foreground/70` for hierarchy

## Content Structure
- **Copy Object**: Centralized text in `en` and `zh` objects; access via `copy.section.key`
- **Sections**: Hero, Problem/Solution, Value/Model, Trust/FAQ, Footer
- **FAQ**: Accordion with `faqOpen` state controlling which item is expanded
- **Trust Points**: Three key selling points displayed as pills/badges

## Development Workflow
- **No Build System**: Component is standalone; integrate into larger React app as needed
- **Dependencies**: Requires `react`, `framer-motion`, `lucide-react`, `tailwindcss`
- **Assets Integration**: Update paths in `assets` object (e.g., `heroBedroom: "/path/to/image.jpg"`)
- **Language Switching**: Toggle `lang` between "en" and "zh" for full page translation

## Key Files
- `IndexoHealthLandingPage.jsx`: Main component with all logic and sub-components
- `assets/`: Directory for images (currently empty; add hero bedroom, app screenshots, ring closeups)
- `indexohealth_logo_pack/`: Logo assets in multiple sizes (PNG, transparent)

## Common Tasks
- **Add New Section**: Insert motion.div with `motionIn`, use `SectionTitle` and `Container`
- **Update Copy**: Modify `en` or `zh` objects in `copy` useMemo
- **Add Animation**: Apply `motion.div` with `motionIn` for entrance effects
- **Style Consistency**: Match existing `bg-white/10`, `border-white/15`, `rounded-3xl` patterns</content>
<parameter name="filePath">/Users/junhaohu/Desktop/SleepCoachApp/Indexo.Health_landing_page/.github/copilot-instructions.md