import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.DEV ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <HashRouter basename="/Website/">
        <App />
      </HashRouter>
    )}
  </StrictMode>,
)
