# CLAUDE.md - Instrukce pro AI vývoj

## Projekt: Cyberpower Official Website

Moderní webová stránka pro hudební kapelu Cyberpower. React + Vite SPA s 8 hlavními stránkami.

---

## 🎯 Cíle a Omezení

### ✓ Cíle
- Moderní, futuristický design (cyberpunk/neon)
- Responzivní design (mobile-first)
- Rychlý výkon (Vite)
- Jednoduchá údržba (statické data)

### ✗ Omezení
- **Žádné backend API** - Vše jsou statické data v JS souborech
- **Žádný TypeScript** - Projekt je v čistém JSX
- **Žádné dependencies navíc** - Minimalistický package.json
- **CSS only** - Žádný SASS/PostCSS preprocessor
- **React 18.2 API** - Funkční komponenty + Hooks

---

## 📁 Struktura a Konvence

### File Organization
```
src/
├── pages/           # Jedna stránka = jeden komponet = jedna route
│   ├── [Name].jsx   # Komponet
│   └── [Name].css   # Styling
├── components/      # Sdílené komponenty (Header, Footer, ...)
│   ├── [Name].jsx
│   └── [Name].css
├── data/            # Statické datové soubory
│   └── [resource].js
├── App.jsx          # Root router komponet
└── main.jsx         # Vite entry point
```

### Pojmenování
- **Komponenty**: PascalCase (Home.jsx, Header.jsx)
- **Data/Utils**: camelCase (newsData, liveData)
- **CSS třídy**: kebab-case (.hero-section, .nav-link)
- **Props**: camelCase (isOpen, onToggle)

### CSS Konvence
```css
/* Třídy pro komponenty */
.header { }
.nav-link { }
.nav-link:hover { }
.nav.open { }  /* State variant */

/* Media queries na konci */
@media (max-width: 768px) { }
```

---

## 🛠️ Development Workflow

### Spuštění
```bash
npm install  # První run
npm run dev  # Dev server na http://localhost:5173
```

### Přidání nové stránky
1. Vytvořit `src/pages/[Name].jsx` (export default function)
2. Vytvořit `src/pages/[Name].css`
3. Přidat route v `App.jsx`: `<Route path="/name" element={<Name />} />`
4. Přidat link v `Header.jsx` do menuItems

### Přidání komponenty
1. Vytvořit `src/components/[Name].jsx` (export default function)
2. Vytvořit `src/components/[Name].css`
3. Importovat a usar v potřebných stránkách

### Přidání dat
1. Vytvořit `src/data/[resource].js`
2. Export const array: `export const [resource]Data = [...]`
3. Import v stránce: `import { [resource]Data } from '../data/[resource]'`
4. Mapovat v JSX: `{data.map((item, idx) => ...)}`

---

## ✅ Quality Standards

### JavaScript/JSX
- Funkční komponenty (NO class components)
- Hooks (useState, useEffect pokud je potřeba)
- Destructuring pro props
- Arrow functions pro callbacky
- Bez console.log() v production kódu
- Bez unused imports
- Bez prop-types (nejsou instalovány)

### CSS
- Flexbox/Grid pro layouty
- CSS Variables pro barvy/fonty (pokud existují)
- Mobile-first media queries (@media max-width)
- Žádné inline styles
- BEM-like naming (`.header-nav`, `.nav-link`)

### Bez Scope Creep
- Oprav POUZE zadanou feature
- Nerefaktor okolní kód
- Neměň existující API signatury
- Neodstraňuj nepoužitý kód

---

## 🚀 Before Committing

- [ ] Všechny stránky se renderují bez chyb
- [ ] Routing funguje (všechny linky v Header navigují správně)
- [ ] Responsive design funguje (test na mobilní rezolucích)
- [ ] Žádné console errors
- [ ] `npm run build` projde bez problémů
- [ ] Žádné unused imports/variables

---

## 🎨 Design System (Estimated)

Projekt používá **cyberpunk/neon** design. Očekávané prvky:

### Barvy
- Dark background (možná #000 nebo #0a0e27)
- Neon accents (modrá, fialová, růžová, zelená)
- Neon glow effects (box-shadow s neon barvou)

### Typography
- UPPERCASE headingy (CYBERPOWER, FEATURED TRACKS)
- Sans-serif font (možná system fonts)

### Visual Effects
- Glow effects na textu a ikonách
- Geometric shapes
- Animated circles/grids
- Neon-style borders

### Komponenty
- Neon glow buttons
- Glowing circles (animované)
- Cyber grid patterns
- Card-based layouts

---

## 🔄 Common Tasks

### Task: Přidat nový obsah do existující stránky
```jsx
// 1. Přidej data do src/data/ nebo přímo do stránky
const newContent = [...]

// 2. V stránce mapuj a renderuj
{newContent.map((item) => (
  <div key={item.id} className="item">
    {/* ... */}
  </div>
))}
```

### Task: Přidat nový navigační link
```jsx
// src/components/Header.jsx
const menuItems = [
  { label: 'NEW PAGE', path: '/new-page' },
  // ...
]

// src/App.jsx
<Route path="/new-page" element={<NewPage />} />
```

### Task: Přidat CSS animaci
```css
@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 1); }
}

.glowing-element {
  animation: glow 2s infinite;
}
```

---

## 📝 TypeScript?
**NE** - Projekt je v čistém JSX bez TypeScript. Pokud si přeješ přidat TS, je to větší refactoring a měl by se diskutovat.

---

## 🌐 API/Backend?
**Zatím žádný** - Vše jsou statické JS datové soubory. Pokud bude potřeba backend:
1. Vytvořit API endpoint
2. Vyměnit import data za fetch() call
3. Přidat error handling a loading state

---

## 🧪 Testing?
**Zatím nemáme** - Pokud si přeješ přidat vitest/@testing-library:
```bash
npm install -D vitest @testing-library/react jsdom
```

---

## 📱 Responsive Design
- **Mobile-first approach** - začni s mobile CSS, pak přidej desktop
- **Breakpoints** (typické):
  - 320px - 480px: mobile
  - 481px - 768px: tablet
  - 769px+: desktop
- **Header má hamburger menu** - funguje na mobilě

---

## 🎬 Vite-specific Tips
- HMR (Hot Module Replacement) - kod se updatuje v prohlížeči automaticky
- Fast refresh pro React
- CSS je importován přímo v JSX
- Static assets v `public/` (pokud existuje)

---

## 🚫 Anti-Patterns

❌ **NEDĚL TOTO:**
```jsx
// ❌ Inline styles
<div style={{ color: 'red' }}>Text</div>

// ❌ Index jako key
{items.map((item, idx) => <div key={idx}>{item}</div>)}

// ❌ Mutace props
props.data.push(newItem)  // ŠPATNĚ!

// ❌ Direct DOM manipulation
document.querySelector('.nav').innerHTML = '...'

// ❌ Console.log v productionu
console.log('debug:', data)

// ❌ Unused imports
import { Something } from './something'  // Není použito!
```

✅ **DĚLEJ TOTO:**
```jsx
// ✅ CSS classes
<div className="text-error">Text</div>

// ✅ Item ID jako key
{items.map((item) => <div key={item.id}>{item}</div>)}

// ✅ Never mutate props
const newItems = [...props.data, newItem]

// ✅ React handles DOM
<nav className={isOpen ? 'nav open' : 'nav'}>...</nav>

// ✅ Žádné debug v production
// Nebo podmíněně: if (process.env.NODE_ENV === 'development')

// ✅ Smazat nepoužitý import
```

---

## 📞 Questions?

- Projekt dokumentace: README.md, ARCHITECTURE.md
- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- React Router docs: https://reactrouter.com
