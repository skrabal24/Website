import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'NEWS', path: '/news' },
    { label: 'LIVE DATES', path: '/live-dates' },
    { label: 'VIDEOS', path: '/videos' },
    { label: 'MERCH', path: '/merch' },
    { label: 'PHOTOS', path: '/photos' },
    { label: 'KEEF', path: '/keef' },
    { label: 'TATTOOS', path: '/tattoos' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">⚡ CYBERPOWER ⚡</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
