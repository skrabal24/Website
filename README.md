# Cyberpower - Oficiální web kapely

Moderní webová stránka elektronické rockové kapely **Cyberpower** vytvořená v **React** s **Vite**.

## Obsah

- [Přehled projektu](#přehled-projektu)
- [Technologie](#technologie)
- [Struktura projektu](#struktura-projektu)
- [Instalace a spuštění](#instalace-a-spuštění)
- [Stránky a obsah](#stránky-a-obsah)
- [Komponenty](#komponenty)
- [Datové soubory](#datové-soubory)
- [Styling](#styling)

## Přehled projektu

Cyberpower je futuristická elektronická rockmixtapela, která kombinuje syntezátory, živé nástroje a digitální inovace. Webová stránka slouží jako:

- **Centrální hub** pro fanoušky
- **Prodejní platforma** pro merchandise
- **Informační centrum** pro novinky a koncerty
- **Galerie** fotografií a videí
- **Prezentace** kapely a jejích členů

## Technologie

- **React 18.2** - UI framework
- **React Router 6.20** - Routing a navigace
- **Vite 5.0** - Build tool a dev server
- **React Icons 4.12** - Icon library (ikony)
- **Lucide React 0.292** - Moderní SVG ikony
- **CSS 3** - Vlastní styling

## Struktura projektu

```
cyberpower2/
├── src/
│   ├── pages/                  # Jednotlivé stránky aplikace
│   │   ├── Home.jsx           # Domovská stránka s hero sekcí
│   │   ├── News.jsx           # Novinky a články
│   │   ├── LiveDates.jsx      # Koncertní data
│   │   ├── Videos.jsx         # Videoklip a obsah
│   │   ├── Merch.jsx          # Merchandise shop
│   │   ├── Photos.jsx         # Fotogalerie
│   │   ├── Keef.jsx           # Info o speciálním obsahu
│   │   ├── Tattoos.jsx        # Tetovací galerie/design
│   │   └── [Page].css         # Stylování jednotlivých stránek
│   │
│   ├── components/            # Znovupoužitelné komponenty
│   │   ├── Header.jsx         # Horní navigace s menu
│   │   ├── Header.css         # Styling navigace
│   │   ├── Footer.jsx         # Patička stránky
│   │   └── Footer.css         # Styling patičky
│   │
│   ├── data/                  # Datové soubory
│   │   ├── news.js           # Data pro novinky
│   │   ├── liveDates.js      # Data pro koncertní data
│   │   ├── videos.js         # Data pro videa
│   │   ├── photos.js         # Data pro fotografie
│   │   ├── merch.js          # Data pro merchandise
│   │   └── socials.js        # Sociální média linky
│   │
│   ├── App.jsx               # Hlavní komponenta s routingem
│   ├── App.css               # Globální styling
│   ├── main.jsx              # Vstupní bod aplikace
│   └── index.css             # Globální CSS
│
├── index.html                 # HTML template
├── package.json              # Konfigurace projektu
└── vite.config.js           # Vite konfigurace
```

## Instalace a spuštění

### Požadavky
- Node.js 16+ 
- npm nebo yarn

### Instalace

```bash
cd cyberpower2
npm install
```

### Spuštění dev serveru

```bash
npm run dev
```

Server poběží na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
```

Vytvořený build je v adresáři `dist/`

### Náhled produkčního buildu

```bash
npm run preview
```

## Stránky a obsah

### Home (/)
Domovská stránka s:
- Hero sekcí s logem a call-to-action tlačítky
- Sekcí "Featured Tracks" se 3 vybraných skladeb
- Informacemi o kapele ("About the Band")
- Nadcházejícími koncerty
- Vizuálními efekty (zářící kruhy, cyber grid)

### News (/news)
- Přehled novinek a článků
- Kategorizace (ALBUM, TOUR, COLLABORATION, VIDEO)
- Připojení k datům z `data/news.js`
- Jednotlivé články s datem a autorem

### Live Dates (/live-dates)
- Seznam nadcházejících koncertů
- Informace o místě, čase a rezervaci lístků
- Integrace s `data/liveDates.js`

### Videos (/videos)
- Galerie videíků
- Pravděpodobně Youtube embedy nebo video preview
- Data z `data/videos.js`

### Merchandise (/merch)
- E-shop s merchandise produkty
- Kategorie a ceny
- Integrace s `data/merch.js`

### Photos (/photos)
- Fotogalerie z koncertů a akcí
- Lightbox nebo grid layout
- Data z `data/photos.js`

### Keef (/keef)
- Speciální obsah nebo sekce
- Pravděpodobně Easter egg či speciální stránka

### Tattoos (/tattoos)
- Tetovací inspirace nebo galerie
- Designy související s kapelou

## Komponenty

### Header
Hlavní navigační komponenta:
- Logo s odkazem na domovskou stránku
- Responzivní menu s hamburger ikonou (mobilní)
- Navigační odkazy na všechny hlavní stránky
- CSS třída `nav.open` pro zobrazení menu na mobilech

### Footer
Patička stránky:
- Kontaktní informace
- Sociální média linky (z `data/socials.js`)
- Copyright informace
- Relevantní linky a informace

### Routing (App.jsx)
Aplikace používá React Router pro navigaci:
```javascript
<Route path="/" element={<Home />} />
<Route path="/news" element={<News />} />
<Route path="/live-dates" element={<LiveDates />} />
<Route path="/videos" element={<Videos />} />
<Route path="/merch" element={<Merch />} />
<Route path="/photos" element={<Photos />} />
<Route path="/keef" element={<Keef />} />
<Route path="/tattoos" element={<Tattoos />} />
```

## Datové soubory

Všechny datové soubory jsou v adresáři `src/data/` a jsou importovány do příslušných stránek.

### news.js
Struktura:
```javascript
{
  id: number,
  title: string,
  excerpt: string,
  date: string (YYYY-MM-DD),
  author: string,
  category: 'ALBUM' | 'TOUR' | 'COLLABORATION' | 'VIDEO',
  imageUrl: string,
  slug: string
}
```

### liveDates.js
Očekávaná struktura pro koncertní data:
```javascript
{
  id: number,
  date: string,
  time: string,
  venue: string,
  city: string,
  country: string,
  ticketUrl: string
}
```

### videos.js
Očekávaná struktura pro videa:
```javascript
{
  id: number,
  title: string,
  youtubeId: string,
  thumbnail: string,
  releaseDate: string
}
```

### photos.js
Očekávaná struktura pro fotografie:
```javascript
{
  id: number,
  title: string,
  imageUrl: string,
  category: string,
  date: string
}
```

### merch.js
Očekávaná struktura pro merchandise:
```javascript
{
  id: number,
  name: string,
  price: number,
  image: string,
  category: string,
  description: string
}
```

### socials.js
Sociální média a kontakty:
```javascript
{
  platform: string, // 'instagram' | 'spotify' | 'youtube' | ...
  url: string,
  label: string
}
```

## Styling

### CSS Architektura
- **Global** - `src/index.css` a `src/App.css` pro základní styling
- **Per-page** - Každá stránka má vlastní CSS soubor
- **Per-component** - Komponenty (Header, Footer) mají dedikované CSS

### Design Koncept
Stránka používá **futuristický/cyberpunk** design:
- Neonové barvy (pravděpodobně modré, růžové, zelené)
- Glow efekty
- Geometric shapes a grid patterns
- Dynamické animace

### Ikony
- **Lucide React** - Play, Volume2, Zap, Menu, X apod.
- **React Icons** - Sociální média a další ikony

## Poznámky pro vývoj

1. **Responsive design** - Stránka je mobilní-friendly s hamburger menu
2. **SPA (Single Page Application)** - Routing je client-side bez page reloadů
3. **Static data** - Všechna data jsou v JS souborech (můžou být později nahrazena API)
4. **Performance** - Vite nabízí rychlý dev server a optimalizovaný build

## Budoucí rozšíření

Možné další funkce:
- Backend API pro dynamické obsahu
- E-commerce integrace pro merchandise
- Fan community/forum
- Streaming integrace (Spotify, Apple Music)
- Newsletter signup
- Social media feed integrace
- Newsletter/Email systém
