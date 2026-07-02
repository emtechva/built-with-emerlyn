# AGENTS.md

## Project identity

This repository contains the portfolio website of **Emerlyn Bequio**, an **AI Automation Specialist**, under the brand **EMTECH Automations**.

The website is intended for prospective clients, Upwork clients, collaborators, and business owners looking for practical automation support.

## Required source files

Before creating or changing the website, read these files in this order:

1. `portfolio-information.md`
2. `website-build-prompt.md`
3. `FRONT END SKILL.md`
4. `TASTE SKILL.md`
5. Existing HTML, CSS, JavaScript, and assets

Also inspect:

- `references/`
- `assets/profile/`
- `assets/resume/`
- `assets/tools/`
- `assets/projects/`
- `assets/testimonials/`

## Instruction priority

When instructions conflict, follow this order:

1. The user's latest direct instruction
2. Verified facts in `portfolio-information.md`
3. Scope and feature requirements in `website-build-prompt.md`
4. The technology constraints in this file
5. Visual-design guidance in `FRONT END SKILL.md`
6. Compatible anti-template guidance in `TASTE SKILL.md`
7. Existing placeholder content

The two design skill files are design guidance, not permission to replace the project's approved technology stack.

## Technology constraints

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Do not introduce React, Next.js, Vue, Angular, Tailwind, Bootstrap, jQuery, npm packages, build tools, or component frameworks unless the user explicitly approves a stack change.

If `TASTE SKILL.md` recommends React, Next.js, Tailwind, Motion, GSAP, or another library, translate the underlying design principle into native HTML, CSS, and JavaScript.

Use:

- CSS Grid and Flexbox
- CSS custom properties
- IntersectionObserver for scroll reveals
- Native browser APIs
- Relative paths for local assets

Do not use a dependency merely because it appears in a design-skill file.

## Design read required before coding

Before writing or significantly revising code, provide a short design plan that includes:

### Design Read

Use this format:

> Reading this as: an AI automation specialist portfolio for business owners and hiring clients, with a premium dark-tech language inspired by music visualization and automation signal flow.

### Design dials

Use these starting values unless the latest user instruction changes them:

- `DESIGN_VARIANCE: 8`
- `MOTION_INTENSITY: 6`
- `VISUAL_DENSITY: 4`

### Design system plan

Define:

- A palette of 4 to 6 named colors with hex values
- A display type role
- A body type role
- A utility or mono type role when appropriate
- The main layout concept
- The page's single memorable signature element
- The mobile fallback for every asymmetric section

Review the plan before building. Replace any decision that looks generic, templated, or unrelated to automation.

## Design direction

Use the supplied theme reference as inspiration, not as a layout to copy.

The design should feel:

- Premium
- Technology-focused
- Distinctive
- Dark-first with a complete light theme
- Professional enough for business clients
- Visually connected to automation, systems, signals, routing, and orchestration

The approved color family includes:

- Near-black and charcoal
- Off-white
- Magenta
- Deep rose
- Violet
- Purple

Because purple and magenta are explicitly part of the user's reference, they are allowed. Use them consistently and deliberately rather than applying generic AI gradients to every element.

Avoid pure `#000000` and pure `#ffffff`.

## Signature element

The page should have one primary visual signature based on **automation signal flow**.

Preferred interpretations:

- A real workflow screenshot presented as a polished hero composition
- A layered route or signal path derived from actual automation logic
- A visual transition that connects lead capture, routing, CRM, booking, and follow-up

Do not create a fake dashboard, fake terminal, fake task manager, or fake software screenshot from decorative `<div>` elements.

If a suitable real hero image or workflow asset is unavailable, create a clearly labeled asset placeholder and report the required image dimensions.

## Hero rules

The hero is the design thesis.

Requirements:

- Use an asymmetric or split composition on desktop
- Keep the main headline to approximately two lines
- Keep supporting text concise
- Show the main CTA without scrolling
- Use no more than one primary CTA and one secondary CTA
- Keep the hero within the initial viewport where practical
- Keep desktop navigation on one line
- Do not place a logo wall, feature list, pricing message, or trust strip inside the hero

Avoid:

- Generic centered hero layouts
- A large gradient blob as the only visual
- Excessive gradient text
- Fake product UI
- Decorative version labels
- Section numbers used as decoration
- Multiple small meta labels around the headline

## Typography

Typography must carry part of the site's identity.

Use:

- A characterful sans-serif display style
- A highly readable sans-serif body style
- A restrained mono or utility style for technical metadata where it adds meaning

Do not default automatically to Inter.

Do not mix a random serif word into a sans-serif headline.

If local font files exist under `assets/fonts/`, use `@font-face` with `font-display: swap`.

If no font files exist, use a carefully chosen system fallback and document which optional typeface would improve the final design.

Never provide or expose font files to the user.

## Layout discipline

Do not repeat the same layout family for every section.

Across the full page, use at least four distinct layout families, such as:

- Split hero
- Horizontal tools rail
- Process timeline
- Asymmetric case-study grid
- Editorial experience timeline
- Focused testimonial feature
- Contact and booking split

Avoid:

- Three equal cards repeated across multiple sections
- Card containers around every piece of content
- More than two consecutive zigzag image-text sections
- Empty bento cells
- Identical section headers throughout
- Excessive rounded rectangles

Use cards only when they communicate hierarchy.

Choose a consistent radius system and apply it deliberately.

## Eyebrows, labels, and numbering

Use small uppercase eyebrow text sparingly.

Maximum:

- One eyebrow for every three sections

Do not place an eyebrow above every heading.

Use numbering only when sequence matters, such as the actual automation process or a chronological timeline.

Do not use decorative labels such as:

- `01 / ABOUT`
- `002 SELECTED WORK`
- Version numbers
- Fake build numbers
- Decorative status indicators

## Content rules

Use real, user-approved content.

Never invent or exaggerate:

- Employment history
- Company names
- Employment dates
- Client names
- Testimonials
- Revenue
- Conversion rates
- Performance statistics
- Certifications
- Technical proficiency
- Project outcomes

Present practice projects and case studies honestly. Do not describe them as paid client work unless confirmed.

Use plain, concrete language.

Avoid filler phrases such as:

- Elevate
- Seamless
- Unleash
- Next-generation
- Revolutionize

Do not use an em dash character. Use a regular hyphen or rewrite the sentence.

## Images and assets

Use real project images, workflow screenshots, profile photos, and logos from the workspace whenever available.

Do not reference filenames that do not exist.

Do not hotlink critical portfolio assets.

Do not use generic text-only logo walls.

Do not create fake screenshots from HTML rectangles.

When a required image is missing:

1. Keep a correctly sized placeholder slot
2. Add a clear code comment
3. Report the needed asset and recommended dimensions

Preserve image aspect ratios and reserve layout space to prevent CLS.

Use lazy loading for non-critical images.

## Tools section

Do not use a generic grid of identical white or glass cards.

Preferred approaches:

- A categorized horizontal rail
- A dense but readable tool matrix
- An asymmetric capability map
- Tool groups connected to actual tasks or outcomes

Tool descriptions should explain what the user does with each tool, not just name the platform.

Do not display fake proficiency percentages.

## Process section

The process is a real sequence, so progression is appropriate.

Use the actual activity names as the primary labels:

- Discover
- Map
- Design
- Build
- Test
- Hand over

Do not use generic labels such as `Stage 1` or `Phase 02` as the main text.

The desktop version may be horizontal or spatial.

The mobile version must become a clear vertical sequence.

## Case studies

Each case study may include:

- Business problem
- Proposed solution
- Workflow overview
- Tools and integrations
- Main automation steps
- Error handling
- Business value
- Project status
- Screenshots
- Verified links

Use actual screenshots whenever available.

Do not claim measurable outcomes unless exact verified data is supplied.

If a URL is missing, omit or disable the action rather than creating a broken link.

Avoid making every project card identical. Vary the layout based on the quality and orientation of available assets.

## Testimonials

Only display authentic feedback provided by the user.

Maximum visible quote length:

- Approximately three lines in the card or feature view

Use:

- Name
- Role
- Company when available

Do not invent names, photographs, star ratings, companies, or quotes.

When no verified feedback is available, hide the published section or mark it as a development placeholder.

## Contact form

Place labels above inputs.

Do not use placeholders as labels.

Provide:

- Clear focus states
- Inline validation
- Specific error messages
- Accessible helper text
- Readable contrast in both themes

Do not claim the form sends data until a working endpoint exists.

Never place secrets, private keys, access tokens, or credentials in client-side code.

## Booking area

Support the public booking URL supplied by the user.

When no valid Calendly or Google Calendar booking URL exists:

- Do not render a broken iframe
- Show a professional setup message
- Hide or disable the external booking action

Reserve space for the embed to minimize layout shift.

Ensure the booking area remains usable in dark mode, light mode, and mobile layouts.

## Theme system

Build both dark and light modes from the start.

Use one semantic CSS-variable token system.

The theme control must:

- Respect the system preference on the first visit
- Persist the manual selection in `localStorage`
- Update its accessible label
- Maintain readable contrast everywhere
- Avoid a visible incorrect-theme flash where practical

Do not alternate unrelated light and dark sections within one page.

## Motion

Use motion only when it communicates:

- Hierarchy
- Story progression
- User feedback
- State change

Preferred native techniques:

- CSS transitions
- CSS keyframes for a single deliberate ambient effect
- IntersectionObserver for reveal behavior
- Transform and opacity animation only

Do not use:

- `window.addEventListener("scroll", ...)` for continuous animation
- Layout-janking animation of width, height, top, or left
- Multiple endless marquees
- Animation on every card
- Custom cursors

Use at most one marquee on the page, and only when it serves real content.

Honor `prefers-reduced-motion`.

## Responsive behavior

Design mobile-first and verify approximately at:

- 320px
- 375px
- 768px
- 1024px
- 1440px and wider

For every multi-column section, explicitly define the layout below 768px.

Avoid horizontal overflow.

Do not use `100vh` for critical full-height mobile sections. Prefer `100dvh` with a sensible minimum height.

Navigation, filters, cards, modals, forms, and booking embeds must remain usable on small screens.

## Accessibility

Use:

- Semantic HTML
- Correct heading hierarchy
- Descriptive alt text
- Associated labels
- Visible keyboard focus
- Sufficient contrast
- Keyboard-accessible navigation
- Keyboard-accessible modals
- Escape-key support
- Reduced-motion support
- Clear status and error messaging

Do not use color alone to communicate meaning.

Verify button and form contrast in both themes.

CTA labels must stay on one line on desktop.

Use one consistent label per action intent across the page.

## Performance

Target:

- LCP under 2.5 seconds
- INP under 200 milliseconds
- CLS under 0.1

Use:

- Optimized image sizes
- Reserved image and embed dimensions
- Minimal JavaScript
- Lazy loading below the fold
- Transform and opacity for motion

Do not add heavy effects, filters, or libraries without clear value.

## JavaScript quality

Keep JavaScript modular and readable.

Use structured objects or arrays where appropriate for:

- Projects
- Tools
- Experience
- Testimonials

Avoid unnecessary global variables.

Do not leave:

- Console errors
- Debugging statements
- Broken handlers
- Unfinished functions
- Dead code

Essential content should remain understandable when JavaScript fails whenever practical.

## Work sequence

For every major task:

1. Read the required source files.
2. Inspect the relevant assets.
3. Produce the design read and short design plan.
4. Critique the plan for generic patterns.
5. Build the requested feature.
6. Review the result in dark and light modes.
7. Review desktop and mobile layouts.
8. Check visible copy for grammar, clarity, and unsupported claims.
9. Validate paths, links, controls, and interactive states.
10. Report the exact files changed and remaining content needs.

## Pre-flight checklist

Before declaring the website complete, verify:

- The design follows `FRONT END SKILL.md`.
- Compatible anti-template rules from `TASTE SKILL.md` are applied.
- The approved HTML, CSS, and JavaScript stack is preserved.
- The hero fits the initial viewport.
- Desktop navigation stays on one line.
- The site uses real assets rather than fake screenshots.
- Dark and light themes work and persist.
- Mobile navigation works.
- Navigation links target existing sections.
- There is no horizontal overflow.
- Case-study filtering works.
- Project details work.
- Escape closes menus and modals.
- Contact validation works.
- Booking fallback works.
- Buttons and forms pass contrast checks.
- Animations respect reduced-motion preferences.
- No fake information has been introduced.
- No missing asset path causes a broken image.
- Visible copy has been reviewed.
- Browser console has no errors.

## Communication

Use direct explanations suitable for a user with limited coding experience.

After each implementation, state:

- Which files were created or modified
- What was implemented
- Which placeholders still need real content
- Which assets are missing
- Exact steps to preview the result in VS Code
