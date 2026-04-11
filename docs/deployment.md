# Deployment

## GitHub Pages

- Repo: `skrabal24/Website`
- Cilova URL: `https://skrabal24.github.io/Website/`
- Automaticky deploy zajistuje workflow `.github/workflows/deploy-pages.yml`

## Jednorazove nastaveni repozitare

1. Otevrit `Settings > Pages` v repozitari `skrabal24/Website`.
2. V sekci `Build and deployment` nastavit `Source` na `GitHub Actions`.

## Jak probiha publikace

1. Zmeny se commitnou do branche `main`.
2. Po pushi na GitHub se spusti workflow `Deploy to GitHub Pages`.
3. Workflow provede `npm ci`, `npm run build` a publikuje obsah slozky `dist`.
4. Po dokonceni bude web dostupny na cilove URL.

## Technicke poznamky

- Lokalni vyvoj pouziva `BrowserRouter`, aby routy zustaly ciste.
- Produkcni build prepina na `HashRouter`, proto budou verejne URL na GitHub Pages ve tvaru `/#/music`.
- Vite build pouziva relativni `base`, aby fungovaly assety i v podceste repozitare.

## Kontrola po nasazeni

- Zkontrolovat kartu `Actions`, jestli workflow probehlo bez chyby.
- Otevrit `https://skrabal24.github.io/Website/`.
- Projit alespon Home, jednu obsahovou sekci a `/admin/login`.
