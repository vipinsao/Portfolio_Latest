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
  layout.js       Root layout + theme provider
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
- The GitHub Pages URL for this repo serves the default Jekyll rendering of
  this README, not the app — a Next.js App Router build needs a Node host or a
  static export, so use the Vercel deployment instead.

## Author

**Vipin Chandra Sao** — [GitHub](https://github.com/vipinsao) ·
[LinkedIn](https://www.linkedin.com/in/vipinsao) ·
[LeetCode](https://leetcode.com/u/vipinsao/)
