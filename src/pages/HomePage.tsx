import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import {
  homeMetrics,
  roadmap,
  sectionPages,
  socialLinks,
} from '../data/site'
import { createRevealProps, heroReveal } from '../lib/motion'

export function HomePage() {
  return (
    <main className="page">
      <motion.section className="hero-shell" {...heroReveal}>
        <div className="hero-copy">
          <p className="eyebrow">CYBERPUNK MUSIC PLATFORM</p>
          <h1>Site skeleton pro music, media a admin flow.</h1>
          <p className="lede">
            Landing page uz neni slepa ulicka. Projekt je ted rozdeleny do
            samostatnych rout, pripraveny pro dalsi obsah a bez velkeho
            prepisu i pro backend vrstvu.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/music">
              Explore sections
            </Link>
            <Link className="button button--ghost" to="/admin/login">
              Open admin
            </Link>
          </div>
          <ul className="metrics">
            {homeMetrics.map((metric) => (
              <li key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="art-frame">
            <img src={heroImg} alt="Cyberpunk neon object" />
            <div className="art-frame__glow" />
          </div>

          <article className="now-playing">
            <p className="eyebrow">SYSTEM STATE</p>
            <h2>Routing live</h2>
            <p>
              Home, Music, Releases, Videos, Shows, Gallery, About a Contact uz
              bezi jako samostatne vstupy.
            </p>
            <div className="status-row" aria-label="Stav projektu">
              <span>routes</span>
              <span>layout</span>
              <span>admin</span>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section className="section" {...createRevealProps()}>
        <div className="section-head">
          <p className="eyebrow">SITE MAP</p>
          <h2>Verejne sekce jsou oddelene a pripravenene pro rust</h2>
          <p>
            Kazda stranka ma vlastni routu, vlastni obsahovy fokus a muze byt
            pozdeji napojena na data bez rozbiti cele aplikace.
          </p>
        </div>

        <div className="route-grid">
          {sectionPages.map((page, index) => (
            <motion.div key={page.slug} {...createRevealProps(index * 0.04)}>
              <Link className="route-card" to={page.path}>
                <span className="route-card__label">{page.eyebrow}</span>
                <strong>{page.label}</strong>
                <p>{page.summary}</p>
                <span className="route-card__meta">Open route</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" {...createRevealProps(0.04)}>
        <div className="section-head">
          <p className="eyebrow">SOCIAL LINKS</p>
          <h2>Placeholdery pro komunity a public signal</h2>
          <p>
            Odkazy jsou zatim demonstracni, ale UI pocita s realnymi social
            kanaly a jejich dalsim rozsireni.
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="social-card"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="social-card__icon" aria-hidden="true">
                <svg className="social-card__icon-mark" aria-hidden="true">
                  <use href={`/icons.svg#${link.icon}`} />
                </svg>
              </span>
              <strong>{link.name}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section className="section section--split" {...createRevealProps(0.08)}>
        <article className="panel panel--accent">
          <p className="eyebrow">ADMIN PREVIEW</p>
          <h2>Zakladni login a dashboard flow je pripraveny</h2>
          <p>
            Admin cast je zatim jen frontend placeholder, ale routy, guard a
            vstupni dashboard uz jsou pripravene pro dalsi iteraci.
          </p>
          <div className="chip-row">
            <span className="chip">login</span>
            <span className="chip">guard</span>
            <span className="chip">dashboard</span>
          </div>
          <div className="hero-actions">
            <Link className="button button--primary" to="/admin/login">
              Admin login
            </Link>
            <Link className="button button--ghost" to="/admin/dashboard">
              Dashboard route
            </Link>
          </div>
        </article>

        <article className="panel">
          <p className="eyebrow">ROADMAP</p>
          <h3>Nejblizsi navazujici kroky</h3>
          <ol className="roadmap">
            {roadmap.map((step) => (
              <li key={step.title} className="roadmap-item">
                <span className="roadmap-item__index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </article>
      </motion.section>
    </main>
  )
}
