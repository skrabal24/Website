import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import LiveDates from './pages/LiveDates'
import Videos from './pages/Videos'
import Merch from './pages/Merch'
import Photos from './pages/Photos'
import Keef from './pages/Keef'
import Tattoos from './pages/Tattoos'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/live-dates" element={<LiveDates />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/keef" element={<Keef />} />
            <Route path="/tattoos" element={<Tattoos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
