# Progress Log

## 2026-04-11

### Dokonceno

- Pripraven GitHub Pages deployment pres `.github/workflows/deploy-pages.yml`.
- Produkcni build prepnut na Pages-safe routing: lokalne `BrowserRouter`, v buildu `HashRouter`.
- Vite konfigurace upravena na relativni `base`, aby fungovaly assety v podceste repozitare.
- README doplneno o produkcni URL, Pages poznamky a odkaz na deployment dokumentaci.
- Pridan samostatny dokument `docs/deployment.md` s postupem pro publikaci a kontrolu.

### Dulezite technicke poznamky

- GitHub Pages vyzaduje v nastaveni repozitare zdroj `GitHub Actions`.
- Verejne URL budou na GitHub Pages pouzivat hash routing, napr. `/#/music`.
- Admin flow zustava jen frontend preview pres `sessionStorage`.

### Dalsi doporucene kroky

- Overit prvni beh workflow po pushi do `main`.
- Dodelat realnou autentizaci a role.
- Napojit dashboard na CRUD moduly a storage.

## 2026-04-10

### Dokonceno

- Pridany `react-router-dom` a `motion`.
- Aplikace rozdelena na verejny layout a samostatne routy: Home, Music, Releases, Videos, Shows, Gallery, About, Contact.
- Pridany admin placeholder flow: `Login` -> protected `Dashboard`.
- Obsah rout presunut do `src/data/site.ts`, aby slo pozdeji jednoduse navazat backend.
- README aktualizovano o aktualni architekturu a route map.

### Dulezite technicke poznamky

- Admin ochrana je zatim jen preview pres `sessionStorage`.
- Dashboard zatim neni napojeny na databazi, auth provider ani storage.
- Social linky a produkcni kontakty jsou placeholdery.

### Dalsi doporucene kroky

- Napojit realne prihlaseni a role.
- Pridat CRUD pro tracks, releases a galerii.
- Vybrat a zapojit storage/upload flow.
- Dodelat CI a deployment pipeline.
