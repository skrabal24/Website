# 📚 Dokumentace Cyberpower Web

Kompletní dokumentace pro vývojáře pracující na projektu Cyberpower website.

## Dostupné dokumenty

### 🎯 Začátek
| Dokument | Popis |
|----------|-------|
| **[README.md](README.md)** | Přehled projektu, instalace, základní struktura |
| **[QUICK_START.md](#quick-start)** | Rychlý start - prvních 5 minut |

### 💡 Vývoj
| Dokument | Popis |
|----------|-------|
| **[CLAUDE.md](CLAUDE.md)** | Instrukce pro AI vývoj, best practices, omezení |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | Průvodce pro přispívání, jak přidat features |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | Technická architektura, data flow, design decisions |
| **[API_DATA_SCHEMA.md](API_DATA_SCHEMA.md)** | Datové struktury, schémata, příklady |

### 🚀 Produkce
| Dokument | Popis |
|----------|-------|
| **[DEPLOYMENT.md](DEPLOYMENT.md)** | Nasazení na Netlify/Vercel/vlastní server |
| **[PERFORMANCE.md](#performance)** | Optimalizace, monitoring, caching |

---

## 🚀 Quick Start

### 1. Instalace (1 min)
```bash
cd cyberpower2
npm install
```

### 2. Dev Server (1 min)
```bash
npm run dev
```
Otevřeš http://localhost:5173

### 3. Tvoje první změna (3 min)

Udělej změnu v `src/pages/Home.jsx`:
```jsx
// Změň text
<h1 className="hero-title">CYBERPOWER</h1>
// → na:
<h1 className="hero-title">CYBERPOWER 2.0</h1>
```

Aplikace se automaticky refreshne (HMR).

### 4. Vytvoření nové stránky (5 min)

Podrobný průvodce najdeš v [CONTRIBUTING.md](CONTRIBUTING.md#přidávání-features).

---

## 📁 Struktura Projektů

```
cyberpower2/
├── src/
│   ├── pages/              # 8 hlavních stránek
│   ├── components/         # Header, Footer
│   ├── data/              # Statická data (news, merch, atp)
│   ├── App.jsx            # Router
│   └── main.jsx           # Entry point
│
├── dist/                  # Build output (po `npm run build`)
│
└── 📄 Documentation:
    ├── README.md          # Přehled
    ├── CLAUDE.md          # AI instrukce
    ├── CONTRIBUTING.md    # Vývoj
    ├── ARCHITECTURE.md    # Architektura
    ├── API_DATA_SCHEMA.md # Data
    ├── DEPLOYMENT.md      # Deploy
    └── DOCS_INDEX.md      # Tenhle soubor
```

---

## 📚 Dokumenty Detailně

### README.md
**Kdy otevřít**: Poprvé v projektu
- Přehled projektu
- Technologie (React, Vite, Router)
- Instalace a spuštění
- Struktura souborů
- Popis jednotlivých stránek
- Komponenty, data, styling

### CLAUDE.md
**Kdy otevřít**: Než začneš kódovat
- Instrukce pro AI spolupracovníky
- Omezení projektu (no TypeScript, no backend)
- Konvence pojmenování
- Quality standards
- Anti-patterns
- Common tasks

### CONTRIBUTING.md
**Kdy otevřít**: Když přidáváš feature
- Průvodce: Přidání nové stránky
- Průvodce: Přidání nových dat
- Úprava existujících stránek
- Styling best practices
- Testing checklist
- Code review checklist
- Debugging tips

### ARCHITECTURE.md
**Kdy otevřít**: Když chceš pochopit design
- System overview diagram
- Vrstvená architektura (pages, components, data, styles)
- Data flow
- Routing struktura
- State management
- Key architectural decisions
- Component lifecycle (na příkladu Header)
- Performance considerations

### API_DATA_SCHEMA.md
**Kdy otevřít**: Když pracuješ s daty
- Schémata pro všechny datové soubory:
  - News Data
  - Live Dates
  - Videos
  - Photos
  - Merchandise
  - Socials
- Příklady pro každý datový typ
- Jak používat data v komponentách
- Migration na API
- Data validation

### DEPLOYMENT.md
**Kdy otevřít**: Když nasazuješ do produkce
- Build process
- Deployment na Netlify (nejjednodušší)
- Deployment na Vercel
- Deployment na vlastní server
- Environment variables
- Performance optimization
- Monitoring & analytics
- Troubleshooting
- Pre-deployment checklist

---

## 🎯 Typické Scénáře

### Scénář 1: "Jsem nový v projektu"
1. Přečti [README.md](README.md) - 5 minut
2. Běž na [Quick Start](#quick-start) - 5 minut
3. Podívej se na [CLAUDE.md](CLAUDE.md) - 10 minut
4. Experimentuj s [CONTRIBUTING.md](CONTRIBUTING.md) - přidej jednoduchou změnu

### Scénář 2: "Chci přidat novou stránku"
1. Otevři [CONTRIBUTING.md](CONTRIBUTING.md#1-přidání-nové-stránky)
2. Podívej se na [API_DATA_SCHEMA.md](API_DATA_SCHEMA.md) pokud potřebuješ nová data
3. Kóduj & testuj podle [CONTRIBUTING.md](CONTRIBUTING.md#testing)

### Scénář 3: "Chci pochopit architektu"
1. Přečti [ARCHITECTURE.md](ARCHITECTURE.md)
2. Podívej se na [API_DATA_SCHEMA.md](API_DATA_SCHEMA.md) pro data flow
3. Procvič s [CONTRIBUTING.md](CONTRIBUTING.md#common-tasks)

### Scénář 4: "Nasazuju do produkce"
1. Zkontroluj [DEPLOYMENT.md](DEPLOYMENT.md) - přečti intro
2. Vyber platformu: Netlify (nejjednodušší) nebo Vercel
3. Procvič [Pre-deployment checklist](DEPLOYMENT.md#checklist-před-deploymentem)

---

## 🔧 Commands

```bash
# Development
npm run dev              # Spustit dev server (http://localhost:5173)
npm run build           # Build pro produkci (output: dist/)
npm run preview         # Preview produkčního buildu

# Debugging
npm run build --debug   # Build s debuggingem
```

---

## 🎨 Design System

Projekt používá **cyberpunk/neon** design:

- **Barvy**: Neon (modrá, fialová, růžová, zelená) na tmavém pozadí
- **Typography**: UPPERCASE headingy, sans-serif
- **Efekty**: Glow effects, animované kruhy, grid patterns
- **Layout**: Flexbox/Grid, mobile-first responsive

Příklady jsou v jednotlivých `.css` souborech.

---

## ❌ Co NEDĚLIT

1. **Neměň signatury funkcí** - bez zadání
2. **Nerefaktor okolní kód** - jen to co je zadáno
3. **Nepřidávej TypeScript** - projekt je v JSX
4. **Neudělej backend** - všechno jsou statická data
5. **Neodstraňuj CSS** - jen pokud opravdu nepoužitý

Detaily v [CLAUDE.md](CLAUDE.md#-anti-patterns).

---

## ✅ Checklist Před Committem

- [ ] Změny jsou v `src/pages/` nebo `src/components/` nebo `src/data/`
- [ ] Styling je v `.css` souboru
- [ ] Žádné console.log() nebo debug kód
- [ ] Žádné unused imports
- [ ] `npm run build` projde bez errors
- [ ] Žádné TypeScript (.ts, .tsx)
- [ ] Mobile design je responzivní

---

## 📞 FAQ

**Q: Jak spustím projekt?**
```bash
npm install && npm run dev
```

**Q: Jak přidám nový obsah?**
Viz [CONTRIBUTING.md](CONTRIBUTING.md)

**Q: Jak nasadím do produkce?**
Viz [DEPLOYMENT.md](DEPLOYMENT.md)

**Q: Jak chci přidat API?**
Viz [API_DATA_SCHEMA.md](API_DATA_SCHEMA.md#migration-na-api)

**Q: Jaké jsou omezení projektu?**
Viz [CLAUDE.md](CLAUDE.md#-omezení)

**Q: Jak debugging?**
Viz [CONTRIBUTING.md](CONTRIBUTING.md#debugging-tips)

---

## 🌐 Dostupné Stránky

| Route | Soubor | Popis |
|-------|--------|-------|
| `/` | `src/pages/Home.jsx` | Domovská stránka s hero sekcí |
| `/news` | `src/pages/News.jsx` | Novinky a články |
| `/live-dates` | `src/pages/LiveDates.jsx` | Koncertní data |
| `/videos` | `src/pages/Videos.jsx` | Videoklipy |
| `/merch` | `src/pages/Merch.jsx` | Merchandise shop |
| `/photos` | `src/pages/Photos.jsx` | Fotogalerie |
| `/keef` | `src/pages/Keef.jsx` | Speciální obsah |
| `/tattoos` | `src/pages/Tattoos.jsx` | Tetovací inspirace |

---

## 🚀 Next Steps

1. **Spusť dev server**: `npm run dev`
2. **Otevři browser**: http://localhost:5173
3. **Procvič si**: Přidej jednoduchou změnu (např. změň název v Home.jsx)
4. **Čti dokumentaci**: Začni s [CONTRIBUTING.md](CONTRIBUTING.md)
5. **Ptej se**: Otevři issue nebo se podívej do CLAUDE.md pro AI instrukce

---

## 📖 Weitere Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [CSS Tricks](https://css-tricks.com)

---

**Poslední update**: 2026-04-15
**Projekt**: Cyberpower Official Website
**Stack**: React 18.2 + Vite 5.0
