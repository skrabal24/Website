# Cyberpunk

React + Vite frontend skeleton pro hudebni web s cyberpunk vizualem, routovanim a zakladnim admin placeholder flow.

## Aktualni stav

- Verejna cast je rozdelena na routy `Home`, `Music`, `Releases`, `Videos`, `Shows`, `Gallery`, `About`, `Contact`.
- Admin cast ma placeholder login a protected dashboard pres `sessionStorage`.
- Obsah rout je centralizovany v datovem modulu, aby slo pozdeji jednoduse napojit backend.
- Prubezny log zmen je v `docs/progress.md`.
- Nasazeni na GitHub Pages je popsano v `docs/deployment.md`.

## Stack

- React
- React Router
- Motion
- Vite
- TypeScript

## Spusteni

1. `npm install`
2. `npm run dev`

## Kontrola

1. `npm run build`
2. `npm run lint`

## GitHub Pages

- Repo: `skrabal24/Website`
- Produkcni URL: `https://skrabal24.github.io/Website/`
- Deploy se spousti automaticky po pushi do `main` pres `.github/workflows/deploy-pages.yml`
- Na GitHub Pages budou interni routy pouzivat hash variantu, napr. `/#/music` nebo `/#/admin/login`
- Pred prvnim nasazenim je potreba v `Settings > Pages` prepnout `Source` na `GitHub Actions`

## Route map

- `/`
- `/music`
- `/releases`
- `/videos`
- `/shows`
- `/gallery`
- `/about`
- `/contact`
- `/admin/login`
- `/admin/dashboard`

## Poznamky

- Admin login je zatim jen frontend preview, ne realna autentizace.
- Social odkazy jsou zatim placeholdery.
- Projekt je veden v `E:\Projects\cyberpunk`.
