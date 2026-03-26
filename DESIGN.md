# Design System Document

## 1. Overview & Creative North Star: "The Collegiate Curator"
This design system moves away from the rigid, utilitarian grids of traditional e-commerce. Our Creative North Star is **"The Collegiate Curator."** It blends the high-energy, "thrift-flip" aesthetic of Gen-Z digital marketplaces with the prestigious, heritage-driven atmosphere of Boston College.

To break the "template" look, we employ **Intentional Asymmetry**. We do not align every card perfectly; instead, we use varying aspect ratios and staggered vertical spacing (using our `spacing-12` and `spacing-16` tokens) to create a rhythm that feels like a curated editorial magazine rather than a database. We prioritize high-contrast typography and overlapping elements to give the UI a tactile, "pasted-up" feel that resonates with a trendy, edgy student body.

---

## 2. Colors & Surface Philosophy
The palette is rooted in high-contrast neutrals, using BC Maroon and Gold strictly as "punctuation marks" rather than structural elements.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define the transition between a product feed and a navigation bar, or a header and a hero section, you must use background color shifts. 
- *Example:* A `surface-container-low` (#f6f3f2) section sitting atop a `background` (#fcf9f8) main canvas. 

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials. 
- **Base Layer:** `surface` (#fcf9f8).
- **Secondary Modules:** `surface-container-low` (#f6f3f2).
- **Interactive Cards:** `surface-container-lowest` (#ffffff).
By nesting a `lowest` card inside a `low` section, you create a "natural lift" that feels sophisticated and intentional without a single 1px line.

### The "Glass & Gradient" Rule
To add visual "soul," use Glassmorphism for floating navigation bars or filter chips. Use `surface` colors at 70% opacity with a `blur-xl` backdrop filter. For high-impact CTAs, use a subtle linear gradient from `primary` (#640003) to `primary-container` (#8a100e) at a 135-degree angle. This prevents the maroon from looking "flat" or "academic" and makes it feel "premium digital."

---

### 3. Typography: Editorial Authority
We pair the expressive, wide-set **Epilogue** for display with the functional, Swiss-style precision of **Inter**.

- **Display & Headline (Epilogue):** These are your "vibe" setters. Use `display-lg` for hero statements. The heavy weight creates a brutalist, high-fashion contrast against white space.
- **Title & Body (Inter):** Used for product names and descriptions. `title-md` (1.125rem) is the workhorse for card headings.
- **The Hierarchy Strategy:** Create "Typographic Anchors." Pair a very large `headline-lg` price tag with a very small, all-caps `label-md` category tag. This extreme variance in scale is what creates the "edgy but clean" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like" for this brand. We use **Ambient Depth**.

- **The Layering Principle:** Depth is achieved by stacking. A search bar should not have a shadow; it should be a `surface-container-high` (#eae7e7) shape sitting on a `surface` (#fcf9f8) header.
- **Ambient Shadows:** Only use shadows for "Floating Action Buttons" or "Active Modals." Use a 4% opacity shadow using the `on-surface` (#1c1b1b) color with a 32px blur. It should feel like a soft glow, not a hard edge.
- **The "Ghost Border" Fallback:** If a product image blends too much into the background, use a "Ghost Border": `outline-variant` (#e1bfba) at **15% opacity**. 

---

## 5. Components

### Cards (The Hero Component)
Cards are the heart of the marketplace.
- **Style:** No borders. Use `rounded-lg` (1rem). 
- **Structure:** Use `surface-container-lowest` (#ffffff). Images should have a `rounded-md` (0.75rem) inner radius to create a "nested" look. 
- **Spacing:** Use `spacing-4` (1rem) internal padding. Forbid dividers between the image and the text; use `spacing-3` of white space instead.

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` (#ffffff) text, `rounded-full`. 
- **Secondary:** `surface-container-highest` (#e5e2e1) background with `on-surface` text. No border.
- **Tertiary:** Pure text in `on-primary-fixed-variant` (#8e1310) with a `label-md` weight.

### Input Fields
- **State:** Instead of a border, inputs use `surface-container-high` (#eae7e7) as a fill. 
- **Focus:** On focus, the background shifts to `surface-container-lowest` (#ffffff) with a 1px `primary` "Ghost Border" at 20% opacity.

### Selection Chips
- **Aesthetic:** Use `rounded-full`. Unselected chips should be `surface-container-low`. Selected chips should be `on-background` (#1c1b1b) with `background` (#fcf9f8) text for high-impact contrast.

---

## 6. Do’s and Don’ts

### Do:
- **Use "White Space" as a Separator:** Use `spacing-10` (2.5rem) between different product categories to let the eyes breathe.
- **Stagger Your Grid:** Offset the second column in a two-column product feed by `spacing-8` (2rem) vertically to create a Depop-style "scroll discovery" feel.
- **Embrace High Contrast:** Place `primary` (#640003) text directly on `background` (#fcf9f8) for a bold, collegiate look.

### Don't:
- **Don’t use 1px solid dividers:** This is the quickest way to make the design feel like a generic template. Use color blocks instead.
- **Don’t use pure black:** Use `on-surface` (#1c1b1b) for text to keep the "High-End Editorial" feel; pure #000000 is too harsh for long-form reading.
- **Don’t crowd the cards:** If a card feels tight, increase the `roundedness` and the external `spacing`. 
- **Don't use Gold (#BC9B6A) for text:** Use Gold only for small UI accents (stars, verified badges, or price tags) to ensure WCAG accessibility.