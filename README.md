# anm-ol.github.io

Personal website of **Anmol Agarwal** — Member of Technical Staff (Pretraining) at
Wayfarer Labs and an undergraduate in Electrical Engineering and Computer Science
at IISER Bhopal. Interests: video world models, computer vision, generative AI,
diffusion models, and graphics programming.

Live site: https://anm-ol.github.io

## Built with

This site uses the [**al-folio**](https://github.com/alshedivat/al-folio) Jekyll
theme by Maruan Al-Shedivat and contributors (MIT License — see `LICENSE`).

Content lives in:

- `_config.yml` — identity, theme options (dark mode on), navbar.
- `_pages/` — `about.md` (home), `publications.md`, `projects.md`, `cv.md`, `news.md`.
- `_bibliography/papers.bib` — publications (rendered by jekyll-scholar).
- `_projects/` — project cards.
- `_news/` — home-page announcements.
- `_data/socials.yml` — social links.
- `assets/img/`, `assets/pdf/` — photo, project media, CV.

The `sim3d/` folder is a preserved copy of the original static "Sim3D Engine"
mini-site (devlog, setup, about), served as-is at `/sim3d/sim3d.html` and linked
from the Sim3D project card.

## Local development

Requires Ruby 3.x+ and ImageMagick (and Node for JS minification in production).

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
with `JEKYLL_ENV=production` and deploys it to GitHub Pages via GitHub Actions
(Settings → Pages → Source → GitHub Actions).
