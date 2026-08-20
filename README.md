# Portfolio — Vipin Chandra Sao

Source for my personal portfolio site, built as a single-page Next.js app.

Five sections — hero, selected work, experience, open source, contact. It is
sized for the way it actually gets read: someone who already has the link,
deciding in a few seconds on a phone whether to reply. Anything that is not
evidence was cut.

---

## Stack

| Area | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS |
| Animation | `motion` — the `useInView` hook only |
| Icons | `lucide-react` |
| Theming | `next-themes` (light/dark) |

## Structure

```
app/
  components/
    Nav, Hero, Work, Experience, OpenSource, Contact, Footer
                  The five sections plus chrome. Everything is a server
                  component except Nav (theme), Footer (the year) and
                  Reveal.
    Section.jsx   One shell for every section: same measure, same rhythm.
    Reveal.jsx    The only animation — see "Motion" below.
    Providers.jsx Every client-side provider, kept out of layout.js so the
                  layout can stay a server module.
  data/
    portfolio.js  All site copy: bio, case studies, experience, open source,
                  writing. The components are generic renderers over it.
  globals.css     Colour tokens with their measured contrast ratios, the
                  type scale, the focus style, the reduced-motion block.
  layout.js       Server component. Exports `metadata` (title, description,
                  canonical, Open Graph, Twitter card) — this only works
                  because the layout is NOT "use client"; the App Router
                  ignores a `metadata` export from a client module.
  icon.svg        Favicon; Next emits the <link> for it.
  page.js         The five sections, in order.
public/           Screenshots and the portrait referenced by portfolio.js
```

## Design

- **Type does the work.** A 1.25-ratio scale, clamped fluid between 375px and
  1280px, so nothing jumps at a breakpoint. Newsreader for headings, Inter for
  reading, both self-hosted by `next/font`; system mono for numbers and
  stacks.
- **Colour is tokens, not `dark:` pairs.** `globals.css` defines
  bg/surface/fg/muted/line/accent as custom properties and `.dark` redefines
  them. Every foreground/background pair was run through a contrast
  calculator; the ratios are written into that file. The worst is 5.24:1,
  against AA's 4.5:1.
- **Motion**: one scroll reveal, twelve pixels, once, and it never hides
  anything in the server HTML — a block is only hidden after JavaScript has
  decided it is below the fold. Three gates: the OS reduced-motion setting,
  the below-fold check, and `once: true`.
- **Mobile first, tested.** No horizontal overflow at 375, 768 or 1440, in
  either theme. The name, one sentence, two checkable facts, résumé, email
  and availability all land inside the first screen at 375×812.

All copy lives in `app/data/portfolio.js`. Editing that one file changes the
site — the components are generic renderers over it.

## Running locally

```bash
git clone https://github.com/vipinsao/Portfolio_Latest.git
cd Portfolio_Latest
npm install
npm run dev
```

Open http://localhost:3000. There are no environment variables and no backend —
the site is fully static.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Notes

- Content is data-driven, so adding a case study means appending an object to
  `caseStudies` in `app/data/portfolio.js` and dropping its image in
  `public/images/`.
- A case study needs a `headline` number, and that number has to be the output
  of a command in the project it belongs to. If a project has nothing
  measured, it does not get a slot.
- `change` on each case study is that repository's own documented limitation,
  quoted rather than softened. It is the most useful field on the page and the
  easiest one to quietly water down. Do not.
- Every claim on the site traces to code in one of the linked repositories or
  to a command whose output is quoted in the commit that introduced it. Stack
  lists are read off `package.json`; measured figures come from that project's
  own test or eval harness. Do not add a number here that no command produces.
- The GitHub Pages URL for this repo (`vipinsao.github.io/Portfolio_Latest/`)
  cannot run a Next.js App Router build, and by default served a Jekyll
  rendering of this README. `index.html` and `.nojekyll` at the repository root
  now make that URL redirect to the Vercel deployment instead. Neither file is
  part of the Next build — `public/` is what Next serves. **Turning GitHub
  Pages off for this repo in Settings → Pages is still the cleaner fix**, and
  needs repository-owner access.

## Author

**Vipin Chandra Sao** — [GitHub](https://github.com/vipinsao) ·
[LinkedIn](https://www.linkedin.com/in/vipinsao) ·
[LeetCode](https://leetcode.com/u/vipinsao/)
