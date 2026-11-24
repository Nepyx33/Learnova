# Learnova — online IT courses catalog

Course project for "Web technologies and web design" (topic 5 — **Online IT Courses Catalog**).
One site that grows lab by lab: Figma design → HTML skeleton → SCSS → JS + API.

- **Live preview (latest):** https://nepyx33.github.io/Learnova/
- **Each lab, frozen at its git tag:** [Lab 2](https://nepyx33.github.io/Learnova/lab2/) · Lab 3 (`/lab3/`) · Lab 4 (`/lab4/`)
- **Figma (Lab 1):** https://www.figma.com/design/vtuXHX0pOdyBjb8pBaVg0v/LR1---Learnova--Online-IT-Courses----Tsyba-Yurii-KN-41
- Based on the course template [web-template-2025](https://github.com/MarkovDmitriy/web-template-2025)

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | hero with search, stats, categories, popular courses, features, call to action |
| Courses | `courses.html` | catalog of 9 courses with filters (category, level, price, rating, duration), sorting, active filters, pagination |
| Course details | `course-details.html` | course info, purchase card, what you'll learn, curriculum (6 modules), instructor, reviews, related course |
| Enrollment | `enrollment.html` | 3-step progress, form (personal info, plan, schedule, agreements), order summary with promo code |

## Progress

| Lab | Status | What was added |
|---|---|---|
| 1 — Figma | ✅ | design system (5 core colors as styles + variables, Manrope / Inter text styles, 12 / 8 / 4 col grids), components with variants, 4 pages × desktop 1280 / mobile 360 |
| 2 — HTML | ✅ | semantic markup of 4 pages, relative navigation, `picture` + `srcset` (WebP + JPEG), EJS partials, schema.org microdata, i18n data attributes |
| 3 — SCSS | ⏳ | |
| 4 — JS + API | ⏳ | |

### Lab 2 details

- **Semantics:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`; tables with `caption` / `th scope` (curriculum, order summary); forms with `label`, `fieldset` / `legend` (search, filters, sorting, enrollment, promo code); `details` / `summary`, `dl`, `data`, `time`, `output`.
- **Accessibility:** skip link, `aria-current="page"` in navigation and breadcrumbs, `aria-current="step"` in the enrollment progress, `aria-label` on icon / repeated buttons, `aria-pressed` on toggle buttons, `aria-describedby` hints, one `h1` per page without skipped heading levels.
- **Responsive images:** `<picture>` with WebP `source` and JPEG fallback, `srcset` with 2 widths and `sizes`, `width` / `height`, lazy loading (`src/assets/images`).
- **Templating (EJS):** `src/partials/` — `head`, `header`, `footer`, `course-card`, `picture`, `breadcrumbs`. Pages are rendered by a small Vite plugin in `vite.config.js`; data for the partials is in `src/data/site.js`.
- **schema.org:** `Course` microdata with `Offer`, `AggregateRating`, `Person` and `Review` on the course details page and on every course card.
- **i18n:** UI strings have keys in `data-i18n`, `data-i18n-placeholder`, `data-i18n-aria-label`. Texts are in `src/i18n/en.js`, applied by `src/js/core/i18n.js`.
- **BEM** class names, no inline styles. Styles are added in Lab 3.

## Run locally

```bash
npm install
npm run dev      # Vite on http://localhost:5173 + json-server on http://localhost:5174
npm run build    # ESLint + production build to dist/
npm run preview  # serve dist/
npm run api      # json-server only
```

API for this topic (`api/routes.json`): `/topic5/courses`, `/topic5/courses/:id`, `/topic5/instructors`, `/topic5/categories`, `/topic5/reviews`, `/topic5/enrollments`.
See [api/API_MAP.md](api/API_MAP.md) for query params (`_page`, `_limit`, `_sort`, `_order`, `q`).

## Deploy

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes it to GitHub Pages:
the latest version goes to `/`, every git tag `lab2`, `lab3`, `lab4` is built into its own folder (`/lab2/` …).
Repository settings: **Settings → Pages → Source: GitHub Actions**.

## Structure

```
api/                 db.json + routes.json for json-server
index.html, courses.html, course-details.html, enrollment.html
src/
  partials/          EJS partials (head, header, footer, course card, picture, breadcrumbs)
  data/site.js       data for the EJS partials
  i18n/en.js         UI strings
  assets/images/     favicon, covers, hero, avatar (webp + jpg, 2 widths each)
  js/                main.js + i18n; api client and store from the template (used in Lab 4)
  styles/            SCSS 7-1 (Lab 3)
vite.config.js       multi-page build + EJS plugin
.github/workflows/deploy.yml   build and deploy to GitHub Pages
```
