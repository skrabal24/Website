# Data Schema & API Documentation

Dokumentace datových struktur používaných v aplikaci.

## Obsah
- [News Data](#news-data)
- [Live Dates Data](#live-dates-data)
- [Videos Data](#videos-data)
- [Photos Data](#photos-data)
- [Merchandise Data](#merchandise-data)
- [Socials Data](#socials-data)

---

## News Data

**Soubor:** `src/data/news.js`

Seznám novinek a článků o kapele.

### Struktura
```typescript
interface NewsItem {
  id: number              // Unikátní ID
  title: string          // Nadpis článku
  excerpt: string        // Krátký popis (pro preview)
  date: string           // ISO 8601 format: "YYYY-MM-DD"
  author: string         // Autor článku
  category: string       // Kategorie: 'ALBUM' | 'TOUR' | 'COLLABORATION' | 'VIDEO'
  imageUrl: string       // URL obrázku (external URL)
  slug: string           // URL-friendly identifier
}
```

### Příklad
```javascript
export const newsData = [
  {
    id: 1,
    title: 'Novy album CyberPower vychazi tento mesic',
    excerpt: 'Dlho ocakavany album finally uz je na svete. Predobjednavky byly spusteny.',
    date: '2026-04-10',
    author: 'CyberPower',
    category: 'ALBUM',
    imageUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800',
    slug: 'novy-album-cyberpower'
  },
  // ... více artikl
]
```

### Použití
```jsx
import { newsData } from '../data/news'

// V komponentě
{newsData.map(article => (
  <article key={article.id}>
    <img src={article.imageUrl} alt={article.title} />
    <h3>{article.title}</h3>
    <p>{article.excerpt}</p>
    <small>{article.date} • {article.author}</small>
  </article>
))}
```

---

## Live Dates Data

**Soubor:** `src/data/liveDates.js`

Seznam nadcházejících koncertů a akcí.

### Struktura
```typescript
interface LiveDate {
  id: number              // Unikátní ID
  date: string           // ISO 8601 format: "YYYY-MM-DD"
  time: string           // Čas koncertu: "19:30"
  venue: string          // Jméno místa: "O2 Arena"
  city: string           // Město: "Prague"
  country: string        // Země: "Czech Republic"
  ticketUrl: string      // URL pro koupi lístků (optional)
  soldOut?: boolean      // Vyprodáno (optional)
  price?: number         // Cena lístku (optional)
}
```

### Příklad
```javascript
export const liveDatesData = [
  {
    id: 1,
    date: '2026-05-15',
    time: '19:30',
    venue: 'O2 Arena',
    city: 'Prague',
    country: 'Czech Republic',
    ticketUrl: 'https://ticketing.example.com/cyberpower-prague'
  },
  {
    id: 2,
    date: '2026-05-22',
    time: '20:00',
    venue: 'Berlin Atonal',
    city: 'Berlin',
    country: 'Germany',
    ticketUrl: 'https://ticketing.example.com/cyberpower-berlin',
    soldOut: true
  },
  // ... více koncertů
]
```

### Použití
```jsx
import { liveDatesData } from '../data/liveDates'

{liveDatesData.map(show => (
  <div key={show.id} className="show-item">
    <div className="date">
      <span className="day">{new Date(show.date).getDate()}</span>
      <span className="month">{new Date(show.date).toLocaleString('en', { month: 'short' })}</span>
    </div>
    <div className="info">
      <h3>{show.venue}</h3>
      <p>{show.city}, {show.country}</p>
      <p className="time">{show.time}</p>
    </div>
    <a href={show.ticketUrl} className="btn">
      {show.soldOut ? 'SOLD OUT' : 'GET TICKETS'}
    </a>
  </div>
))}
```

---

## Videos Data

**Soubor:** `src/data/videos.js`

Seznam videíků a videoclipů.

### Struktura
```typescript
interface Video {
  id: number              // Unikátní ID
  title: string          // Název videa
  youtubeId: string      // YouTube video ID (z URL: youtube.com/watch?v=XXX)
  thumbnail: string      // URL náhledu (optional)
  releaseDate: string    // ISO 8601: "YYYY-MM-DD"
  duration?: string      // Délka videa: "3:45"
  description?: string   // Popis videa
}
```

### Příklad
```javascript
export const videosData = [
  {
    id: 1,
    title: 'Digital Dreams - Official Music Video',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1514608287524-5348dcf39b1d?w=500',
    releaseDate: '2026-03-01',
    duration: '4:12',
    description: 'Official music video for Digital Dreams'
  },
  {
    id: 2,
    title: 'Live Performance - Cyber Festival 2026',
    youtubeId: 'V8WXnX0SqOo',
    thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500',
    releaseDate: '2026-03-15',
    duration: '45:30',
    description: 'Full live performance from Cyber Festival'
  },
  // ...
]
```

### Příklad: YouTube Embed
```jsx
import { videosData } from '../data/videos'

{videosData.map(video => (
  <div key={video.id} className="video-card">
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${video.youtubeId}`}
      title={video.title}
      allowFullScreen
    ></iframe>
    <h3>{video.title}</h3>
    <p>{video.description}</p>
  </div>
))}
```

---

## Photos Data

**Soubor:** `src/data/photos.js`

Fotogalerie z akcí a koncertů.

### Struktura
```typescript
interface Photo {
  id: number              // Unikátní ID
  title: string          // Název fotografie
  imageUrl: string       // URL obrázku
  category: string       // Kategorie: 'LIVE' | 'STUDIO' | 'BEHIND-THE-SCENES' | ...
  date: string           // ISO 8601: "YYYY-MM-DD"
  photographer?: string  // Jméno fotografa
  event?: string         // Na jaké akci byla pořízena
}
```

### Příklad
```javascript
export const photosData = [
  {
    id: 1,
    title: 'Cyber Festival Main Stage',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
    category: 'LIVE',
    date: '2026-03-20',
    photographer: 'John Smith',
    event: 'Cyber Festival 2026'
  },
  {
    id: 2,
    title: 'Studio Recording Session',
    imageUrl: 'https://images.unsplash.com/photo-1514608287524-5348dcf39b1d?w=800',
    category: 'STUDIO',
    date: '2026-02-10',
    photographer: 'Jane Doe'
  },
  // ...
]
```

### Použití: Photo Gallery Grid
```jsx
import { photosData } from '../data/photos'

{photosData.map(photo => (
  <div key={photo.id} className="photo-item">
    <img src={photo.imageUrl} alt={photo.title} />
    <div className="photo-info">
      <h3>{photo.title}</h3>
      <p className="category">{photo.category}</p>
      <small>{photo.date} • {photo.photographer}</small>
    </div>
  </div>
))}
```

---

## Merchandise Data

**Soubor:** `src/data/merch.js`

Merchandise produkty pro prodej.

### Struktura
```typescript
interface MerchItem {
  id: number              // Unikátní ID
  name: string           // Jméno produktu
  price: number          // Cena v USD/EUR
  image: string          // URL obrázku
  category: string       // Kategorie: 'SHIRTS' | 'HOODIES' | 'ACCESSORIES' | ...
  description: string    // Popis produktu
  sizes?: string[]       // Dostupné velikosti: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  colors?: string[]      // Dostupné barvy: ['BLACK', 'WHITE', 'NEON_BLUE']
  inStock?: boolean      // Na skladě (optional, default true)
  shippingInfo?: string  // Informace o dopravě
}
```

### Příklad
```javascript
export const merchData = [
  {
    id: 1,
    name: 'Cyberpower Classic T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'SHIRTS',
    description: 'Black t-shirt with neon Cyberpower logo on front',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['BLACK', 'WHITE', 'NEON_BLUE'],
    inStock: true,
    shippingInfo: 'Ships worldwide in 3-5 business days'
  },
  {
    id: 2,
    name: 'Neon Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821552-23e0b4b90382?w=500',
    category: 'HOODIES',
    description: 'Warm hoodie with glowing Cyberpower print on back',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['BLACK'],
    inStock: true
  },
  // ...
]
```

### Použití: Merch Shop Grid
```jsx
import { merchData } from '../data/merch'

{merchData.map(item => (
  <div key={item.id} className="merch-card">
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p className="category">{item.category}</p>
    <p className="description">{item.description}</p>
    
    {item.sizes && (
      <select className="size-select">
        <option>Select Size</option>
        {item.sizes.map(size => (
          <option key={size}>{size}</option>
        ))}
      </select>
    )}
    
    <p className="price">${item.price}</p>
    <button className="btn btn-primary" disabled={!item.inStock}>
      {item.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
    </button>
  </div>
))}
```

---

## Socials Data

**Soubor:** `src/data/socials.js`

Sociální média a kontaktní informace.

### Struktura
```typescript
interface Social {
  platform: string       // 'instagram' | 'spotify' | 'youtube' | 'twitter' | 'tiktok' | 'email' | ...
  url: string           // URL odkazu
  label: string         // Viditelný text: "Follow on Instagram"
  icon?: string         // Icon ID (pokud je potřeba specifický)
}
```

### Příklad
```javascript
export const socialsData = [
  {
    platform: 'instagram',
    url: 'https://instagram.com/cyberpowerband',
    label: 'Instagram'
  },
  {
    platform: 'spotify',
    url: 'https://open.spotify.com/artist/XXX',
    label: 'Listen on Spotify'
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/@cyberpowerband',
    label: 'Subscribe on YouTube'
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/cyberpowerband',
    label: 'Follow on Twitter'
  },
  {
    platform: 'email',
    url: 'mailto:contact@cyberpower.com',
    label: 'contact@cyberpower.com'
  },
  // ...
]
```

### Použití: Social Links v Footer
```jsx
import { socialsData } from '../data/socials'

<div className="social-links">
  {socialsData.map(social => (
    <a 
      key={social.platform}
      href={social.url}
      title={social.label}
      className={`social-link social-${social.platform}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {social.label}
    </a>
  ))}
</div>
```

---

## Migration na API

Pokud chceš data nahradit API callsem, postupuj takto:

### Příklad: Změna z static data na API

**Před:**
```jsx
import { newsData } from '../data/news'

export default function News() {
  return (
    <div>
      {newsData.map(article => (...))}
    </div>
  )
}
```

**Po:**
```jsx
import { useState, useEffect } from 'react'

export default function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setArticles(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {articles.map(article => (...))}
    </div>
  )
}
```

---

## Validace dat

Pro produkci můžeš přidat validaci. Doporučuji:

```bash
npm install zod  # nebo yup
```

```javascript
import { z } from 'zod'

const NewsSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  excerpt: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string(),
  category: z.enum(['ALBUM', 'TOUR', 'COLLABORATION', 'VIDEO']),
  imageUrl: z.string().url(),
  slug: z.string()
})

// Validace dat
try {
  const validNews = NewsSchema.parse(article)
} catch (error) {
  console.error('Invalid article:', error)
}
```

---

## Best Practices

1. **Always use `key={item.id}`** - Not `idx`, to avoid rendering bugs
2. **External images from trusted sources** - Unsplash, Pexels, tvá CDN
3. **Validate data from API** - Předpokládej, že API může vrátit špatná data
4. **Cache data** - Pokud se data neměnní, cachuj je
5. **Error handling** - Vždy zpracuj error state, ne jen loading state

---

## Questions?

Viz CONTRIBUTING.md pro příklady, jak pracovat s daty.
