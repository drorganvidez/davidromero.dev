# davidromero.dev

Personal site — built with Jekyll, runs in Docker, deploys to GitHub Pages.

## dev

```bash
docker compose up
# -> http://localhost:4000 with livereload
```

## production build (local check)

```bash
docker compose --profile build run --rm build
# output -> ./_site
```

## deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages.

## structure

- `_config.yml` — site config
- `_layouts/` — default, post, project
- `_includes/` — nav, footer
- `_projects/` — project collection
- `_posts/` — blog
- `assets/css/style.scss` — terminal-inspired theme
- `assets/js/main.js` — typewriter + blinking cursor
- `.github/workflows/pages.yml` — CI/CD
