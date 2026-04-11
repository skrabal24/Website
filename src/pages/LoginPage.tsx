import type { FormEvent } from 'react'
import { motion } from 'motion/react'
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom'
import { createAdminSession, hasAdminSession } from '../lib/adminSession'
import { heroReveal } from '../lib/motion'

function getRedirectPath(state: unknown) {
  if (
    typeof state === 'object' &&
    state !== null &&
    'from' in state &&
    typeof state.from === 'string'
  ) {
    return state.from
  }

  return '/admin/dashboard'
}

export function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()

  if (hasAdminSession()) {
    return <Navigate replace to="/admin/dashboard" />
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createAdminSession()
    navigate(getRedirectPath(location.state), { replace: true })
  }

  return (
    <main className="auth-shell">
      <motion.section className="auth-card" {...heroReveal}>
        <div className="auth-copy">
          <p className="eyebrow">ADMIN LOGIN</p>
          <h1>Preview vstup do dashboardu</h1>
          <p className="lede">
            Tenhle krok zatim nesaha na backend. Slouzi jen jako frontend
            placeholder, aby slo navrhnout flow a chovani admin casti.
          </p>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                className="input"
                id="email"
                name="email"
                placeholder="artist@cyberpunk.local"
                required
                type="email"
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                className="input"
                id="password"
                name="password"
                placeholder="********"
                required
                type="password"
              />
            </div>

            <div className="auth-actions">
              <button className="button button--primary" type="submit">
                Enter dashboard
              </button>
              <Link className="button button--ghost" to="/">
                Back to site
              </Link>
            </div>
          </form>
        </div>

        <aside className="auth-aside">
          <p className="eyebrow">PLACEHOLDER MODE</p>
          <h2>Co tenhle login umi</h2>
          <p>
            Po odeslani formulare se ulozi pouze session flag do
            <code> sessionStorage</code>. Neni to zabezpeceni, jen priprava pro
            pozdejsi realny auth provider.
          </p>
          <ul className="checklist">
            <li>Guard pro protected route uz funguje.</li>
            <li>Dashboard lze otevrit az po preview loginu.</li>
            <li>Pri nasazeni se tenhle flow nahradi realnou autentizaci.</li>
          </ul>
          <p className="subtle">
            Potrebny dalsi krok: Supabase Auth nebo jina realna identity vrstva.
          </p>
        </aside>
      </motion.section>
    </main>
  )
}
