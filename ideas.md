# myseogeoexperts Design Direction

## Three stylistic approaches

### Theme Name: Harbour Ledger
**Very Brief Intro:** A calm, editorial intelligence journal inspired by Hong Kong broadsheets, harbour wayfinding, and the quiet confidence of a good analyst. Warm paper tones and ink-blue navigation make the site feel researched rather than promotional.
**Probability:** 0.07

### Theme Name: Signal Room
**Very Brief Intro:** A dark, high-contrast operating room for search visibility, using vivid signal colours, scanning lines, and diagnostic panels to make SEO/GEO feel technical and immediate. Built for a more product-led, tactical audience.
**Probability:** 0.04

### Theme Name: Concrete & Citrus
**Very Brief Intro:** A bright, modern city guide mixing architectural greys with citrus accents and oversized typographic blocks. The mood is energetic and local, with a magazine-like pace for founders and marketing teams.
**Probability:** 0.08

## Chosen approach: Harbour Ledger

### Design Movement
Contemporary editorialism: a digitally-native interpretation of Hong Kong broadsheets, independent business journals, and harbour navigation charts. The site should feel like a trusted desk of field notes, not a generic marketing agency brochure.

### Core Principles
1. **Earned authority:** Use precise language, evidence-led framing, and observable examples instead of inflated promises.
2. **Editorial rhythm:** Build pages from distinct reading beats—headline, dek, signal, field note, recommendation—rather than uniform card grids.
3. **Local intelligence:** Bring Hong Kong into the details: bilingual search behaviour, districts, local platforms, regulatory nuance, and the realities of small teams.
4. **Useful density:** Provide enough substance to be worth citing, while using strong hierarchy and generous whitespace to keep scanning easy.

### Color Philosophy
The base is warm rice-paper (#F5F1E8), chosen to make the site feel like a printed briefing that has been lived with. Ink navy (#102C3A) carries authority without becoming corporate black. The signature colour, harbour vermilion (#E45B3F), is reserved for useful emphasis: active states, issue numbers, dividers, and calls to action. A muted jade (#8FA89C) supports secondary diagrams and gives the palette a distinctly coastal, non-tech feel.

### Layout Paradigm
An asymmetric editorial frame: a slim left rail for section markers and issue metadata, a wide reading column for the main argument, and a right-side evidence rail that surfaces "why it matters" or related field notes. On small screens, the rails collapse into a compact publication bar and inline pull quotes. Avoid a generic centred hero; let the first screen behave like the cover of a serious journal.

### Signature Elements
1. **Issue markers:** Small uppercase labels such as `FIELD NOTE 01`, `HK / SEARCH`, and `UPDATED SEP 2026` anchor content in a publication system.
2. **Harbour linework:** Fine route-like rules, coordinate ticks, and tiny square markers used as restrained decoration and section dividers.
3. **Editorial red tabs:** Vermilion tabs mark recommendations, overlooked risks, and strong next actions—never as decoration without meaning.

### Interaction Philosophy
Interactions should feel like turning a page or consulting a desk reference. Hover states reveal context, not spectacle; links gain an underline and vermilion nudge; article cards lift by a few pixels and expose their topic metadata. Filters should feel like a library index. All interaction feedback remains quick and keyboard-visible.

### Animation
Use short opacity and translate transitions, generally 160–240ms, with an editorial stagger of 40ms between issue labels, title, and dek. On page entry, the left rail arrives first, then the headline, then the evidence rail. Do not use large parallax, looping decoration, or bounce. Honour `prefers-reduced-motion` by disabling non-essential reveals while keeping focus and active states clear.

### Typography System
Display: **DM Serif Display** for the lead headline and pull quotes—high-contrast, warm, and recognisably editorial. Body and interface: **IBM Plex Sans** for compact metadata, navigation, and readable long-form copy. Use all-caps IBM Plex Sans for issue labels at 11–12px with generous tracking. Headline hierarchy is deliberately sharp: 64–80px on desktop for the main cover line, 38–48px for section leads, 22–28px for article titles, and 16–18px for body copy with 1.55 line height.

### Brand Essence
A Hong Kong search intelligence desk for online companies that need to be found in both search results and AI answers—without guesswork or imported playbooks.

Personality adjectives: **observant, exacting, grounded**.

### Brand Voice
Headlines are decisive and specific. CTAs sound like useful next steps, not sales pressure. Microcopy names the tension honestly and then points to a practical move. Avoid generic filler such as “Welcome to our website” or “Get started today.”

Example lines:
- “Hong Kong search is local before it is technical.”
- “Read the signal. Fix the page. Give people a reason to cite you.”

### Wordmark & Logo
The mark is a compact vermilion harbour beacon: a square signal block with one offset cut that implies both a map coordinate and an open quotation mark. The wordmark is set in DM Serif Display with a custom overline rule, while the mark remains usable independently as a favicon and social avatar. The logo must be a symbol only, with no generated text inside the asset.

### Signature Brand Color
**Harbour Vermilion — `#E45B3F`**. It is ownable because it feels like a navigation signal, a stamped editorial correction, and a Hong Kong street-level accent at once. Use it with restraint so every appearance carries meaning.

## Content and SEO/GEO decisions

- Primary audience: Hong Kong founders, e-commerce operators, local service businesses, in-house marketers, and small agencies.
- Primary content pillars: Local Search, AI Visibility, Technical SEO, Content Systems, and Hong Kong Digital Context.
- Editorial stance: explain the issue, show the consequence, recommend the next move, and link to relevant source material or the itehk.com.hk service ecosystem where appropriate.
- Internal-linking stance: use contextual references to `itehk.com.hk` as a relevant implementation partner, never as repetitive keyword stuffing.
- Trust stance: do not invent customer reviews, ratings, or testimonials. Prefer author notes, update dates, methodology, and transparent recommendations.
- Structured-data stance: add semantic headings, descriptive metadata, and machine-readable article information in the application where practical.
