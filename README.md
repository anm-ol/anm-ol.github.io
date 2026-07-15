# anm-ol.github.io

Personal website of **Anmol Agarwal** — undergraduate in Electrical Engineering
and Computer Science at IISER Bhopal. Interests: Computer Vision, GenAI,
diffusion models, transformers, and graphics programming.

Live site: https://anm-ol.github.io

## Built with

This site is built with [Jekyll](https://jekyllrb.com/) on top of the
[academic-website-template](https://github.com/sbryngelson/academic-website-template)
by Spencer Bryngelson (MIT License — see `LICENSE`).

Content is config-driven:

- `_config.yml` — identity, links, theme, and which pages appear in the nav.
- `_pages/` — `home.md`, `about.md`, `software.md` (projects).
- `_data/news.yml` — the news timeline shown on the home page.
- `images/`, `papers/` — photo, project GIFs, resume, and internship report.

The `sim3d/` folder is a preserved copy of the original static "Sim3D Engine"
mini-site (devlog, setup, about). It is served as-is at
`/sim3d/sim3d.html` and linked from the projects page.

## Local development

Requires Ruby 3.x+ (this repo was built with Ruby 4.0 via Homebrew).

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Deployment

Pushing to the `main` branch triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and deploys it to
GitHub Pages. In the repo Settings → Pages, set **Source** to
**GitHub Actions**.
