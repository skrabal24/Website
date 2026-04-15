# Contributing - Průvodce vývojem

Jak přispívat k vývoji Cyberpower webu.

## Rychlý Start

```bash
# 1. Instalace
npm install

# 2. Spuštění dev serveru
npm run dev

# 3. Otevřít http://localhost:5173 v prohlížeči
```

## Přidávání Features

### 1. Přidání nové stránky

**Příklad: Přidání stránky "About" (/about)**

**Krok 1:** Vytvořit komponent
```jsx
// src/pages/About.jsx
import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Cyberpower</h1>
        <p>Hudební kapela...</p>
      </section>
    </div>
  )
}
```

**Krok 2:** Vytvořit styling
```css
/* src/pages/About.css */
.about {
  padding: 2rem;
}

.about-intro {
  max-width: 800px;
  margin: 0 auto;
}
```

**Krok 3:** Přidat route
```jsx
// src/App.jsx - přidat import
import About from './pages/About'

// ... v Routes:
<Route path="/about" element={<About />} />
```

**Krok 4:** Přidat navigační link
```jsx
// src/components/Header.jsx - přidat do menuItems
const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },  // ← NOVÝ
  { label: 'NEWS', path: '/news' },
  // ...
]
```

### 2. Přidání nových dat

**Příklad: Přidání dat pro Merchandise**

**Krok 1:** Vytvořit datový soubor
```javascript
// src/data/merch.js
export const merchData = [
  {
    id: 1,
    name: 'Cyberpower T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'SHIRTS',
    description: 'Official black t-shirt with neon logo'
  },
  {
    id: 2,
    name: 'Neon Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821552-23e0b4b90382?w=500',
    category: 'HOODIES',
    description: 'Warm hoodie with glowing Cyberpower print'
  }
  // ...
]
```

**Krok 2:** Usar data v stránce
```jsx
// src/pages/Merch.jsx
import { merchData } from '../data/merch'
import './Merch.css'

export default function Merch() {
  return (
    <div className="merch">
      <h1>MERCHANDISE</h1>
      <div className="merch-grid">
        {merchData.map(item => (
          <div key={item.id} className="merch-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="description">{item.description}</p>
            <p className="price">${item.price}</p>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 3. Úprava existující stránky

**Příklad: Přidání nové sekce na Home stránku**

```jsx
// src/pages/Home.jsx
// Přidat nový data array
const sponsorships = [
  { name: 'Brand 1', logo: 'url' },
  { name: 'Brand 2', logo: 'url' }
]

// Přidat novou sekci v JSX
<section className="sponsors">
  <div className="container">
    <h2>OUR PARTNERS</h2>
    <div className="sponsors-grid">
      {sponsorships.map((sponsor, idx) => (
        <div key={idx} className="sponsor-logo">
          <img src={sponsor.logo} alt={sponsor.name} />
        </div>
      ))}
    </div>
  </div>
</section>
```

## Styling - Best Practices

### Mobile-First CSS

```css
/* Nejdříve mobile layout */
.hero {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.hero-text {
  font-size: 1.5rem;
}

/* Pak tablet */
@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    padding: 2rem;
  }
  
  .hero-text {
    font-size: 2rem;
  }
}

/* Pak desktop */
@media (min-width: 1024px) {
  .hero {
    padding: 3rem;
  }
  
  .hero-text {
    font-size: 3rem;
  }
}
```

### Neon Effects

```css
/* Neon glow */
.neon-text {
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
}

/* Neon button */
.btn-neon {
  border: 2px solid #00ffff;
  color: #00ffff;
  box-shadow: 0 0 10px #00ffff inset;
  transition: all 0.3s ease;
}

.btn-neon:hover {
  box-shadow: 0 0 20px #00ffff inset, 0 0 20px #00ffff;
  color: #ffffff;
}

/* Animated glow */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff; }
  50% { box-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
}

.animated-glow {
  animation: glow 2s infinite;
}
```

## Testování

### Manuální Testing Checklist

Před committem zkontroluj:

- [ ] Stránka se renderuje bez chyb v konzoli
- [ ] Layout je responzivní (test na 320px, 768px, 1024px)
- [ ] Všechny linky v Header navigace fungují
- [ ] Všechny buttony mají click handlers
- [ ] Obrázky se loadují (pokud jsou externe, zkontroluj URL)
- [ ] Text je čitelný a má dostatečný kontrast
- [ ] Animace nejsou "buggy"
- [ ] Menu se zavírá po kliknutí na link (mobilní)

### Build Testing

```bash
# Zkontroluj, že build projde bez warningů
npm run build

# Náhled produkčního buildu
npm run preview
```

## Code Review Checklist

Než submitneš PR/commit, zkontroluj:

### Struktura
- [ ] Komponenty jsou v `src/pages/` nebo `src/components/`
- [ ] Stylování je v separátních `.css` souborech
- [ ] Data jsou v `src/data/`
- [ ] Nazvy souborů jsou PascalCase (Components) nebo camelCase (data)

### JavaScript
- [ ] Nejsou žádné `console.log()` statements
- [ ] Nejsou žádné unused imports
- [ ] Props jsou destructured
- [ ] Nejsou hardcoded stringy (měly by být v datech)
- [ ] Event handlery jsou arrow functions: `onClick={() => ...}`

### CSS
- [ ] CSS je ve správném souboru (ne inline styles)
- [ ] Třídy se jmenují kebab-case (`.hero-section`)
- [ ] Media queries jsou na konci souboru
- [ ] Žádné typo v CSS (přeslouchej si ho!)

### Accessibility
- [ ] Obrázky mají `alt` text
- [ ] Buttony jsou `<button>` elementy (ne `<div>` s onClick)
- [ ] Formy mají `<label>` elementy
- [ ] Textový kontrast je dostatečný

## Debugging Tips

### React DevTools
```javascript
// V prohlížeči
// Stáhni React DevTools extension
// Pak můžeš inspektovat komponenty, props, state, atd.
```

### Vite HMR
Aplikace se automaticky refreshne když uložíš soubor. Pokud se nerefreshne:
```bash
# Zkus zmanulovat dev server
npm run dev
```

### Console Errors
```javascript
// Pokud vidíš chybu v konzoli typu:
// "Cannot read property 'x' of undefined"
// Zkontroluj:
// 1. Importuješ správný data soubor?
// 2. Máš správné jméno property?
// 3. Existuje data ve datovém souboru?

import { newsData } from '../data/news'  // ✓ Správně
console.log(newsData)  // ✓ Debug (smaž později!)
```

## Common Mistakes

### ❌ Index jako Key
```jsx
// ŠPATNĚ - list items by se mohly renderovat špatně
{items.map((item, idx) => <div key={idx}>{item}</div>)}

// SPRÁVNĚ - používej unique ID
{items.map(item => <div key={item.id}>{item}</div>)}
```

### ❌ Mutace State
```jsx
// ŠPATNĚ
const [items, setItems] = useState([])
items.push(newItem)  // Direktní mutace!

// SPRÁVNĚ
const [items, setItems] = useState([])
setItems([...items, newItem])  // Nový array
```

### ❌ Inline Styles
```jsx
// ŠPATNĚ
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>

// SPRÁVNĚ - v CSS souboru
<div className="text-error">Text</div>
```

```css
.text-error {
  color: red;
  font-size: 16px;
}
```

### ❌ Image hotlinking
```jsx
// ŠPATNĚ - externí URL může zmizet
<img src="http://random-website.com/image.jpg" />

// SPRÁVNĚ - trusted source (Unsplash, tvoje CDN)
<img src="https://images.unsplash.com/photo-xxx?w=800" />
```

## Performance Tips

1. **Obrázky** - Používej Unsplash pro development, produkci by měly být optimalizované
2. **Bundle size** - Zkontroluj `npm run build` output pro size warnings
3. **Lazy Loading** - Pokud bude 10+ stránek, zvážit code splitting
4. **Memoization** - Pokud se komponenta renderuje příliš často, možné:
   ```javascript
   import { memo } from 'react'
   export default memo(MyComponent)
   ```

## Resources

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev
- **React Router**: https://reactrouter.com
- **CSS Tricks**: https://css-tricks.com
- **Web Accessibility**: https://www.w3.org/WAI/

## Questions?

Podívej se na CLAUDE.md pro architekturní rozhodnutí a best practices.
