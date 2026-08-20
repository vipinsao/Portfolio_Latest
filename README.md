# Portfolio — Vipin Chandra Sao

Source for my personal portfolio site: projects, experience, writing, and
contact details, built as a single-page Next.js app.

---

## Stack

| Area | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS |
| Animation | `motion` (Framer Motion) |
| Icons | `lucide-react` |
| Theming | `next-themes` (light/dark) |

## Structure

```
app/
  components/     Hero, About, Experience, Projects, Achievements,
                  Workflow, Blogs, Contact, Navbar, Footer, ThemeProvider
  context/        ModalContext — drives the project detail modal
  data/
    portfolio.js  All site content: bio, experience, projects, workflows, blogs
  layout.js       Server component. Exports `metadata` (title, description,
                  canonical, Open Graph, Twitter card) — this only works
                  because the layout is NOT "use client"; the App Router
                  ignores a `metadata` export from a client module.
  components/Providers.jsx
                  Every client-side provider (next-themes, ModalProvider,
                  ModalComponent), kept out of layout.js for that reason.
  page.js         Single-page composition of every section
assets/           Icon and logo imports consumed by components
public/           Static images referenced by portfolio.js
```

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

- Content is data-driven, so adding a project means appending an object to
  `projectsDetail` in `app/data/portfolio.js` and dropping its image in
  `public/images/`.
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
