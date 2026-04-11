import { motion } from 'motion/react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { publicNavigation } from '../data/site'
import { heroReveal } from '../lib/motion'

export function PublicLayout() {
  return (
    <div className="site-shell">
      <motion.header className="site-header chrome" {...heroReveal}>
        <Link className="brand" to="/">
          <span className="brand__mark" aria-hidden="true">
            CP
          </span>
          <span className="brand__copy">
            <strong>Cyberpunk</strong>
            <span>music platform skeleton</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Hlavni navigace">
          {publicNavigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
              end={item.to === '/'}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button--ghost button--sm" to="/admin/login">
          Admin
        </Link>
      </motion.header>

      <Outlet />

      <footer className="site-footer chrome">
        <div>
          <strong>Frontend base online</strong>
          <p>React, routing a placeholder admin flow jsou pripraveny.</p>
        </div>
        <div>
          <p>Dokumentace: docs/progress.md</p>
          <p>Dalsi krok: auth, CRUD moduly a storage vrstva.</p>
        </div>
      </footer>
    </div>
  )
}
