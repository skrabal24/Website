import { motion } from 'motion/react'
import { Link, useNavigate } from 'react-router-dom'
import {
  dashboardChecklist,
  dashboardPanels,
  dashboardStats,
} from '../data/site'
import { clearAdminSession } from '../lib/adminSession'
import { createRevealProps, heroReveal } from '../lib/motion'

export function DashboardPage() {
  const navigate = useNavigate()

  function handleLogout() {
    clearAdminSession()
    navigate('/', { replace: true })
  }

  return (
    <main className="page">
      <motion.section className="admin-hero" {...heroReveal}>
        <div className="admin-copy">
          <div className="admin-topbar">
            <p className="eyebrow">ADMIN DASHBOARD</p>
            <span className="badge">preview mode</span>
          </div>
          <h1>Ridici vrstva pro dalsi obsahove moduly</h1>
          <p className="lede">
            Dashboard je zatim kostra, ale uz drzi navigacni vstup, odhlaseni a
            zakladni moduly, ktere se budou napojovat na backend.
          </p>
          <div className="admin-actions">
            <Link className="button button--primary" to="/music">
              Public music
            </Link>
            <button className="button button--ghost" onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
          <ul className="stat-grid">
            {dashboardStats.map((item) => (
              <li key={item.label} className="metric">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="signal-card">
          <p className="eyebrow">CURRENT STATUS</p>
          <h2>Frontend ready, backend next</h2>
          <p>
            Public routy a admin vstup uz existuji. Dalsi iterace ma resit
            autentizaci, data model a editacni formulare.
          </p>
          <div className="chip-row">
            <span className="chip">auth next</span>
            <span className="chip">crud next</span>
            <span className="chip">storage next</span>
          </div>
        </aside>
      </motion.section>

      <motion.section className="section" {...createRevealProps()}>
        <div className="section-head">
          <p className="eyebrow">MODULES</p>
          <h2>Pripraveny seznam admin oblasti</h2>
          <p>
            Jednotlive bloky uz maji misto v dashboardu a muzou se rozdelit do
            samostatnych editacnich stranek, jakmile bude hotovy backend.
          </p>
        </div>

        <div className="dashboard-grid">
          {dashboardPanels.map((panel, index) => (
            <motion.article
              key={panel.title}
              className="dashboard-panel"
              {...createRevealProps(index * 0.04)}
            >
              <h3>{panel.title}</h3>
              <p>{panel.description}</p>
              <span className="dashboard-panel__status">{panel.status}</span>
              <span className="dashboard-panel__action">{panel.action}</span>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section section--split" {...createRevealProps(0.06)}>
        <article className="panel">
          <p className="eyebrow">NEXT ACTIONS</p>
          <h3>Co musi prijit pred ostrym nasazenim</h3>
          <ul className="checklist">
            {dashboardChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel panel--accent">
          <p className="eyebrow">RETURN PATH</p>
          <h3>Dashboard navazuje na verejny web</h3>
          <p>
            Aktualni admin kostra pocita s tim, ze se bude sprava obsahu
            propisovat primo do rout Music, Releases, Videos, Shows a Gallery.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/">
              Back home
            </Link>
            <Link className="button button--ghost" to="/releases">
              Releases route
            </Link>
          </div>
        </article>
      </motion.section>
    </main>
  )
}
