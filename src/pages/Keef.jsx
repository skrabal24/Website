import { Link } from 'react-router-dom'
import { Instagram, Youtube, Twitter } from 'lucide-react'
import './Keef.css'

export default function Keef() {
  return (
    <div className="keef">
      <section className="page-hero">
        <div className="container">
          <h1>KEEF</h1>
          <p>The mastermind behind CyberPower</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="keef-profile">
            <div className="keef-image">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600" alt="Keef" />
            </div>
            <div className="keef-info">
              <h2>THE ARTIST</h2>
              <p className="keef-bio">
                Keef is the founding member and primary creative force of CyberPower.
                With roots in underground electronic music scenes, he has spent over a decade
                pushing the boundaries of what is possible when technology meets raw creativity.
              </p>
              <p className="keef-bio">
                His unique approach to sound design combines analog warmth with digital precision,
                creating sonic landscapes that have captivated audiences across Europe.
                When not in the studio, Keef can be found exploring new synthesis techniques
                or documenting his latest tattoo collection.
              </p>
              <div className="keef-socials">
                <a href="https://instagram.com/keefcyberpower" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} /> Instagram
                </a>
                <a href="https://youtube.com/@keefcyberpower" target="_blank" rel="noopener noreferrer">
                  <Youtube size={24} /> YouTube
                </a>
                <a href="https://x.com/keefcyberpower" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} /> X
                </a>
              </div>
              <Link to="/tattoos" className="btn-tattoos">
                VIEW KEEF'S TATTOOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
