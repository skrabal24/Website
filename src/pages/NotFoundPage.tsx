import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="page not-found">
      <section className="section not-found__panel">
        <p className="eyebrow">404</p>
        <h1>Signal not found</h1>
        <p className="lede">
          Tato routa v aktualni kostre neexistuje. Vrat se na home nebo pokracuj
          do admin placeholderu.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/">
            Back home
          </Link>
          <Link className="button button--ghost" to="/admin/login">
            Admin login
          </Link>
        </div>
      </section>
    </main>
  )
}
