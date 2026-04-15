# Deployment Guide

Průvodce nasazením aplikace na produkci.

## Obsah

- [Build Process](#build-process)
- [Deployment na Netlify](#deployment-na-netlify)
- [Deployment na Vercel](#deployment-na-vercel)
- [Deployment na vlastní server](#deployment-na-vlastní-server)
- [Environment Variables](#environment-variables)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

---

## Build Process

### Kroky

1. **Install dependencies**
```bash
npm install
```

2. **Build aplikaci**
```bash
npm run build
```

Output bude v adresáři `dist/` s následující strukturou:
```
dist/
├── index.html         # HTML entry point
├── assets/
│   ├── index-ABC123.js     # Main JavaScript bundle
│   ├── index-XYZ789.css    # Extracted CSS
│   └── [Page]-XYZ789.js    # Code-split chunks
└── _redirects         # Netlify rewrite rules (pokud je potřeba)
```

3. **Test Build**
```bash
npm run preview
```
Otevřeš `http://localhost:4173` a testuj finální build.

### Build Tips

- **Hledej warnings v build outputu** - Optimalizuj před deploymentem
- **Check bundle size** - `npm run build` ti ukáže velikost
- **Unused code** - Vite automaticky tree-shakuje unused imports
- **Images** - Všechny obrázky jsou externální (Unsplash), takže nejsou v buildu

---

## Deployment na Netlify

Nejjednodušší option pro SPA.

### Možnost 1: Netlify Web UI

1. Jdi na https://app.netlify.com
2. Přidej nový projekt: "New site from Git"
3. Vyber GitHub/GitLab repozitář
4. Nastavení:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` nebo vyšší
5. Click "Deploy site"

Netlify automaticky builduje a deployuje na každý push do main branche.

### Možnost 2: Netlify CLI

```bash
# Instalace
npm install -g netlify-cli

# Login
netlify login

# Deploy z dist/
netlify deploy --prod --dir=dist
```

### Netlify Configuration (netlify.toml)

Vytvoř soubor `netlify.toml` v root adresáři:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

# SPA redirect - všechny 404y vrať index.html
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Cache headers
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### URL
Po deploymenti dostaneš URL typ: `https://xxxx.netlify.app`

---

## Deployment na Vercel

Populární alternatíva k Netlify.

### Setup

1. Jdi na https://vercel.com
2. Importuj projekt z GitHubu
3. Vercel automaticky detektuje Vite:
   - **Framework**: React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click "Deploy"

### vercel.json Configuration (Optional)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "NODE_VERSION": "18"
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### URL
Dostaneš URL: `https://your-project.vercel.app`

---

## Deployment na vlastní server

Pokud máš vlastní server (Apache, Nginx, atp).

### Requirements
- Web server (Apache, Nginx, IIS, atp)
- Node.js 18+ (optional, pokud budeš servírovat statické soubory)

### Steps

1. **Build aplikaci**
```bash
npm run build
```

2. **Upload `dist/` folder na server**
```bash
# Via SFTP / FTP / SCP
scp -r dist/ user@server.com:/var/www/html/cyberpower/
```

3. **Nakonfiguruj Web Server**

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name cyberpower.com www.cyberpower.com;

    root /var/www/html/cyberpower;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;

    location / {
        # Pro SPA - vše vrať index.html
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* ^/assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache HTML s krátkou TTL
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, max-age=3600";
    }
}
```

#### Apache Configuration (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Cache busting pro assets
  <FilesMatch "^/assets/">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  # SPA routing
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

### SSL Certificate
```bash
# Pomocí Let's Encrypt + Certbot
sudo certbot certonly --standalone -d cyberpower.com -d www.cyberpower.com
```

---

## Environment Variables

V Vite musíš použít `VITE_` prefix pro client-side variables.

### Příklad: API URL

**`.env`** (lokální, commit nezbytně nutný!)
```
VITE_API_URL=http://localhost:3000/api
```

**`.env.production`** (production)
```
VITE_API_URL=https://api.cyberpower.com/api
```

### Použití v kódu
```javascript
const apiUrl = import.meta.env.VITE_API_URL
console.log(apiUrl) // https://api.cyberpower.com/api (v produkci)
```

### Netlify/Vercel Environment Variables

1. Jdi do Project Settings
2. Najdi "Environment Variables"
3. Přidej proměnné:
   - `VITE_API_URL` = `https://api.cyberpower.com/api`
4. Redeploy

---

## Performance Optimization

### 1. Image Optimization

Pro Unsplash (který používáme), není potřeba, ale pro vlastní obrázky:

```jsx
// ✓ Správně - optimalizovaná velikost
<img 
  src="https://images.unsplash.com/photo-xxx?w=800" 
  srcSet="https://images.unsplash.com/photo-xxx?w=400 400w,
           https://images.unsplash.com/photo-xxx?w=800 800w"
  sizes="(max-width: 640px) 400px, 800px"
  alt="description"
/>
```

### 2. Code Splitting

Vite automaticky splittuje code, ale pokud chceš lazy-load stránky:

```jsx
import { lazy, Suspense } from 'react'

const News = lazy(() => import('./pages/News'))
const Live = lazy(() => import('./pages/LiveDates'))

<Suspense fallback={<p>Loading...</p>}>
  <Routes>
    <Route path="/news" element={<News />} />
    <Route path="/live-dates" element={<Live />} />
  </Routes>
</Suspense>
```

### 3. Bundle Analysis

```bash
npm install -D rollup-plugin-visualizer
```

```javascript
// vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default {
  plugins: [
    visualizer()
  ]
}
```

Build vytvoří `stats.html` se visualizací bundlu.

### 4. Minification

Vite automaticky minifikuje, ale zkontroluj:

```bash
npm run build
# Zkontroluj `dist/assets/` - .js a .css soubory by měly být minifikované
```

### 5. Remove Unused CSS

Pokud máš CSS, který se nepoužívá:

```bash
npm install -D purgecss
```

```javascript
// Nebo ručně - smaž nepoužitý CSS z *.css souborů
```

---

## Monitoring & Analytics

### Google Analytics
```jsx
// src/main.jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Sentry (Error Tracking)
```bash
npm install @sentry/react @sentry/tracing
```

```javascript
// src/main.jsx
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "https://xxx@xxx.ingest.sentry.io/xxx",
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
})
```

---

## Troubleshooting

### Problem: "Module not found" v produkci

**Příčina**: Import path je case-sensitive na Linux serverech

**Řešení**: Zkontroluj správné case-y:
```jsx
// ✓ Správně
import Home from './pages/Home'  // Home.jsx

// ✗ Špatně
import Home from './pages/home'  // Hledá home.jsx
```

### Problem: "404 na subroutes" (React Router)

**Příčina**: Web server nedirektuje subroutes na index.html

**Řešení**: Přidej rewrite rule:

Netlify: `netlify.toml` s `[[redirects]]`
Vercel: `vercel.json` s `rewrites`
Nginx: `try_files $uri /index.html`
Apache: `.htaccess` s `RewriteRule`

### Problem: "CORS errors"

**Příčina**: API je na jiné doméně

**Řešení**: Backend musí mít CORS headers nebo použij proxy:

```javascript
// Netlify Functions / Vercel Serverless jako proxy
fetch('/api/news') // → redirectuje na backend
```

### Problem: Pomalé loadování CSS/JS

**Řešení**:
1. Zkontroluj bundle size: `npm run build`
2. Aktivuj gzip compression na serveru
3. Cache busting - `<script src="/assets/index-ABC123.js">` (automaticky v Vite)
4. CDN pro assets (Cloudflare, CloudFront)

### Problem: "White page" v produkci

**Debugování**:
1. Otevřeš DevTools → Console → hledáš JS errors
2. Zkontroluj network tab → všechny soubory loadují?
3. Zkontroluj `dist/index.html` - jsou správné asset linky?

---

## Checklist před Deploymentem

- [ ] Všechny local changes commited
- [ ] `npm run build` projde bez errors
- [ ] `npm run preview` funguje bez chyb
- [ ] Všechny stránky se renderují v previewu
- [ ] Routing funguje (klikneš na linky → správná stránka)
- [ ] Žádné console errors v DevTools
- [ ] Mobile responsive design funguje
- [ ] External images loadují správně
- [ ] Všechna data jsou správná
- [ ] Performance je OK (DevTools → Lighthouse)

---

## Quick Deployment Command

Netlify:
```bash
npm run build && netlify deploy --prod --dir=dist
```

Vercel:
```bash
npm run build && vercel --prod
```

---

## Custom Domain

### Netlify
1. Domain Settings → "Add domain"
2. Nakonfiguruj DNS records (dle pokynů)
3. Čekat 24-48 hodin na DNS propagaci

### Vercel
1. Project Settings → Domains
2. Přidej domain
3. Nakonfiguruj DNS

### Obnov SSL Certifikat (Let's Encrypt)
```bash
sudo certbot renew
```

---

## Rollback na předchozí verzi

**Netlify**: Deploy history → click na starou verzi → "Restore"

**Vercel**: Deployments → Promote na stable verzi

**Vlastní server**: Git checkout staré verze a rebuild:
```bash
git checkout v1.0.0
npm run build
# Copy dist/ na server
```

---

## FAQ

**Q: Kolik stojí deployment?**
- Netlify: Free tier (1GB bandwith/měsíc)
- Vercel: Free tier (100GB bandwith/měsíc)
- Vlastní server: Závisí na hostiteli

**Q: Jak updatuju web po deploymenti?**
1. Uděláš změny v kódu
2. Git push do main branche
3. CI/CD (Netlify/Vercel) automaticky builduje a deployuje
4. Nebo: `npm run build && netlify deploy --prod`

**Q: Jak refreshuju cache po update?**
- Vite automaticky invaliduje assets pomocí hash (index-ABC123.js)
- index.html má krátkou cache TTL (3600s)
- Po 1 hodině se všichni uživatelé updatují

---

## Resources

- Netlify Deploy: https://docs.netlify.com
- Vercel Deployment: https://vercel.com/docs
- Vite Production: https://vitejs.dev/guide/build.html
- HTTP Caching: https://web.dev/http-cache/
