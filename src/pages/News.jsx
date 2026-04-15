import { Calendar, User, ArrowRight } from 'lucide-react'
import './News.css'

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'New Album "DIGITAL FUTURE" Released',
      excerpt: 'After months of intense production, our new album featuring 12 tracks exploring themes of technology and humanity is now available on all platforms.',
      date: 'April 10, 2026',
      author: 'Cyberpower',
      category: 'ALBUM'
    },
    {
      id: 2,
      title: 'World Tour Announcement 2026',
      excerpt: 'We are thrilled to announce our biggest world tour yet, visiting 50 cities across 30 countries. Tickets are on sale now.',
      date: 'March 28, 2026',
      author: 'Cyberpower',
      category: 'TOUR'
    },
    {
      id: 3,
      title: 'Collaboration with Tech Genius Producer',
      excerpt: 'We are excited to announce our collaboration with renowned producer and technologist for exclusive remixes and new tracks.',
      date: 'March 15, 2026',
      author: 'Cyberpower',
      category: 'COLLABORATION'
    },
    {
      id: 4,
      title: 'Live Performance at Cyber Festival',
      excerpt: 'Our electrifying performance at Cyber Festival 2026 has been one of the highlights of our career. Watch the full performance now.',
      date: 'March 5, 2026',
      author: 'Cyberpower',
      category: 'PERFORMANCE'
    },
    {
      id: 5,
      title: 'Behind the Scenes: Studio Sessions',
      excerpt: 'Check out exclusive footage from our studio sessions where we create our signature sound using cutting-edge technology.',
      date: 'February 18, 2026',
      author: 'Cyberpower',
      category: 'BEHIND THE SCENES'
    },
    {
      id: 6,
      title: 'New Music Video Drops',
      excerpt: 'Our latest music video for "NEON NIGHTS" is now available featuring stunning visual effects and cyberpunk aesthetics.',
      date: 'February 1, 2026',
      author: 'Cyberpower',
      category: 'VIDEO'
    }
  ]

  return (
    <div className="news">
      <section className="news-hero">
        <div className="container">
          <h1>LATEST NEWS</h1>
          <p>Stay updated with the latest from Cyberpower</p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="news-grid">
            {newsItems.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-category">{item.category}</div>
                <h2>{item.title}</h2>
                <div className="news-meta">
                  <span className="meta-item">
                    <Calendar size={16} /> {item.date}
                  </span>
                  <span className="meta-item">
                    <User size={16} /> {item.author}
                  </span>
                </div>
                <p className="excerpt">{item.excerpt}</p>
                <a href="#" className="read-more">
                  READ MORE <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
