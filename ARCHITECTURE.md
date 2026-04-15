# Architektura Cyberpower webu

## Přehled systému

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client                          │
├─────────────────────────────────────────────────────────────┤
│                  React 18.2 + React Router                   │
├─────────────────────────────────────────────────────────────┤
│  Pages          Components        Data           Styling     │
│  ├─ Home        ├─ Header        ├─ news.js     ├─ App.css  │
│  ├─ News        ├─ Footer        ├─ videos.js   ├─ [Page].css
│  ├─ LiveDates   │                ├─ merch.js    │           │
│  ├─ Videos      │                ├─ photos.js   │           │
│  ├─ Photos      │                ├─ liveDates   │           │
│  ├─ Merch       │                └─ socials.js  │           │
│  ├─ Keef        │                                            │
│  └─ Tattoos     │                                            │
└─────────────────────────────────────────────────────────────┘
                          ↓
                    Vite Dev Server
                    (HMR enabled)
                          ↓
                  Static Build (dist/)
```

## Vrstvená architektura

### 1. Prezentační vrstva (Pages)
Každá stránka je samostatný React komponet v `src/pages/`:
- Odpovídá jedné route
- Importuje si data z `data/` adresáře
- Má vlastní CSS soubor
- Neobsahuje business logic (jen presentace)

```
Home.jsx
  ├─ imports data (featured tracks)
  ├─ renders sections (hero, tracks, about, shows)
  └─ uses components (none in this case)
```

### 2. Komponenty (Reusable Components)
Komponenty v `src/components/` jsou sdílené:
- **Header** - Navigace (sdílená všemi stránkami)
- **Footer** - Patička (sdílená všemi stránkami)

Každý komponent má:
- JSX soubor
- CSS soubor
- State management pomocí `useState` (pro Header: toggle menu)

### 3. Datová vrstva (Data Layer)
Soubory v `src/data/` jsou čisté datové struktury:
- Exportují konstantní pole/objekty
- Neobsahují logiku
- Jsou importovány do stránek
- Budoucí: mohou být nahrazeny API callsem

Příklad:
```javascript
// src/data/news.js
export const newsData = [
  { id: 1, title: '...', ... },
  { id: 2, title: '...', ... }
]
```

### 4. Styling
```
src/
├── index.css          # Globální: resetování, fonty, variables
├── App.css            # Globální: layout (header, main, footer)
├── pages/
│   └── [Page].css     # Page-specific styling
└── components/
    └── [Component].css  # Component-specific styling
```

## Data Flow

```
App.jsx (Router)
  ├─ Header (Global)
  │   └─ menuItems state
  │
  ├─ Route → Page Component
  │   ├─ import data from data/
  │   ├─ useState (page-specific state)
  │   └─ render content
  │
  └─ Footer (Global)
      └─ socials data
```

## Routing struktura

React Router konfigurce v `App.jsx`:
- **Client-side routing** - bez page reloadů
- **8 hlavních routes**
- Navigace přes `<Link>` komponenty v Header

```javascript
<Route path="/" element={<Home />} />
<Route path="/news" element={<News />} />
// ... atd
```

## State Management

Projekt používá **React Hooks** (žádné Redux/Context):
- Local state pouze tam kde je potřeba (Header: menu toggle)
- Žádný globální state (zatím)
- Budoucí: Context API pokud bude třeba shared state

## Key Architectural Decisions

### ✓ Proč Vite?
- Rychlý dev server (HMR)
- Malý build size
- Zero-config pro React

### ✓ Proč React Router?
- Standard routing pro React SPAs
- Deklarativní route definition
- Snadná navigace bez page reloadů

### ✓ Proč static data (ne API)?
- Jednoduchost
- Žádné backend dependency
- Snadné pro MVP
- Lze později nahradit API bez změny UI

### ✓ Proč Lucide + React Icons?
- Malá velikost
- Tree-shakeable (jen použité ikony)
- Modální design

## Component Lifecycle (Header example)

```javascript
Header.jsx
├─ const [isMenuOpen, setIsMenuOpen] = useState(false)
│   ├─ Initial: false
│   └─ Toggle na button click
│
├─ menuItems array (static)
│
├─ JSX render
│   ├─ Logo link
│   ├─ Menu toggle button (responsive)
│   ├─ Nav links
│   └─ On click → setIsMenuOpen(false) per Link
│
└─ CSS
    ├─ nav.open {} (when menu is open)
    └─ @media (mobile-specific styles)
```

## CSS Preprocessor?
Projekt nepoužívá SASS/LESS, jen vanilla CSS3:
- CSS Variables (budou pravděpodobně v index.css)
- CSS Grid/Flexbox
- CSS Animations
- CSS Media Queries

Přidání SASS:
```bash
npm install -D sass
```
Pak přejmenovat .css → .scss a importovat.

## Performance Considerations

1. **Code Splitting** - Vite automaticky splittuje chunks
2. **Image Optimization** - Všechny images jsou externální (Unsplash URLs)
3. **No unnecessary dependencies** - Minimalistický package.json
4. **Lazy Loading** - Możné přidat později s React.lazy()

## Build Output (Vite)

```
dist/
├─ index.html
├─ assets/
│   ├─ index-XXX.js        (main bundle)
│   ├─ [Page]-XXX.js       (code-split pages)
│   └─ [Page]-XXX.css      (extracted CSS)
└─ _redirects              (pro Netlify/Vercel SPA routing)
```

## Deployment Architecture

Aplikace je plně **statická** a může běžet na:
- **Netlify** - `npm run build`, deploy `dist/`
- **Vercel** - automaticky
- **GitHub Pages** - s vite configuration
- **AWS S3 + CloudFront**
- **Tradiční web hosting** - copy `dist/` na server

Pro SPA routing je potřeba redirect rule na serveru.

## Error Boundary?
Není implementován. Lze přidat pokud bude třeba:
```javascript
class ErrorBoundary extends React.Component {
  // ... error handling
}
```

## Testing?
Projekt v současnosti nemá testy. Možné přidat:
```bash
npm install -D vitest @testing-library/react
```
