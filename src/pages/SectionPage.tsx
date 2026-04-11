import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { SectionPageContent } from '../data/site'
import { createRevealProps, heroReveal } from '../lib/motion'

type SectionPageProps = {
  page: SectionPageContent
}

export function SectionPage({ page }: SectionPageProps) {
  return (
    <main className="page">
      <motion.section className="page-hero" {...heroReveal}>
        <div className="page-hero__copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.description}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/">
              Back home
            </Link>
            <Link className="button button--ghost" to="/admin/login">
              Admin login
            </Link>
          </div>
        </div>

        <aside className="signal-card">
          <p className="eyebrow">MODULE</p>
          <h2>{page.panelTitle}</h2>
          <p>{page.panelDescription}</p>
          <div className="chip-row">
            {page.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
          <ul className="checklist">
            {page.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </motion.section>

      <motion.section className="section" {...createRevealProps()}>
        <div className="section-head">
          <p className="eyebrow">STRUCTURE</p>
          <h2>Obsah je rozdeleny do samostatnych stavebnich bloku</h2>
          <p>
            Kazda routa ma pripraveny vlastni obsahovy model, aby slo dalsi
            napojeni na data delat po castech a bez rozbiti celeho webu.
          </p>
        </div>

        <div className="content-grid">
          {page.cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="content-card"
              {...createRevealProps(index * 0.04)}
            >
              <span className="card-meta">{card.meta}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section section--split" {...createRevealProps(0.06)}>
        <article className="panel">
          <p className="eyebrow">IMPLEMENTATION FLOW</p>
          <h3>Doporuceny sled napojeni</h3>
          <ol className="timeline">
            {page.timeline.map((item) => (
              <li key={item.title} className="timeline-item">
                <span className="timeline-item__label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="panel panel--accent">
          <p className="eyebrow">READY STATE</p>
          <h3>{page.label} route je pripravena pro dalsi integraci</h3>
          <p>
            Aktualni verze drzi URL, strukturu, vizualni kostru i modulove bloky.
            Dalsi iterace muze jit rovnou do auth, dat nebo upload vrstvy.
          </p>
          <div className="chip-row">
            <span className="chip">url ready</span>
            <span className="chip">ui stable</span>
            <span className="chip">data next</span>
          </div>
          <div className="hero-actions">
            <Link className="button button--primary" to="/contact">
              Contact page
            </Link>
            <Link className="button button--ghost" to="/admin/dashboard">
              Protected dashboard
            </Link>
          </div>
        </article>
      </motion.section>
    </main>
  )
}
