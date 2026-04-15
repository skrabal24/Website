import { Instagram, Youtube, Facebook, Twitter, Music, Apple } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/cyberpower', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@cyberpower', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/cyberpower', icon: Facebook },
    { name: 'X', url: 'https://x.com/cyberpower', icon: Twitter },
    { name: 'Spotify', url: 'https://open.spotify.com/artist/cyberpower', icon: Music },
    { name: 'Apple Music', url: 'https://music.apple.com/artist/cyberpower', icon: Apple }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CYBERPOWER</h3>
          <p>Futuristická elektronická rocková kapela zkoumající hranice zvuku a technologie.</p>
        </div>

        <div className="footer-section">
          <h3>SOCIALS</h3>
          <div className="social-links">
            {socialLinks.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name}>
                <s.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/live-dates">Live Dates</a></li>
            <li><a href="/videos">Videos</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CYBERPOWER. All rights reserved.</p>
        <p className="glitch">Powered by the future</p>
      </div>
    </footer>
  )
}
