import { Play, Zap } from 'lucide-react'
import AudioPlayer from '../components/AudioPlayer'
import './Home.css'

export default function Home() {
  const featuredTracks = [
    { title: 'BEAM ME UP (KILL MODE)', artist: 'Cazzette', url: '/audio/cazzette%20%20%20beam%20me%20up%20(kill%20mode)%20(radio%20edit)%20-%20[MP3JUICES.COM].mp3' },
    { title: 'DIGITAL DREAMS', artist: 'Cyberpower', url: '/audio/digital-dreams.mp3' },
    { title: 'NEON NIGHTS', artist: 'Cyberpower', url: '/audio/neon-nights.mp3' },
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">CYBERPOWER</h1>
            <p className="hero-subtitle">Where Technology Meets Sound</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <Play size={20} /> PLAY LATEST
              </button>
              <button className="btn btn-secondary">
                <Zap size={20} /> TOUR DATES
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glowing-circle circle-1"></div>
            <div className="glowing-circle circle-2"></div>
            <div className="glowing-circle circle-3"></div>
          </div>
        </div>
      </section>

      <section className="featured-tracks">
        <div className="container">
          <h2>FEATURED TRACKS</h2>
          <div className="tracks-grid">
            {featuredTracks.map((track, idx) => (
              <div key={idx} className="track-card">
                <AudioPlayer
                  url={track.url}
                  title={track.title}
                  subtitle={track.artist}
                  waveformStyle="mirror"
                  height={70}
                  barWidth={2}
                  barSpacing={1}
                  waveformColor="rgba(255, 0, 255, 0.2)"
                  progressColor="rgba(255, 0, 255, 1)"
                  buttonColor="#ff00ff"
                  showPlaybackSpeed
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>ABOUT THE BAND</h2>
              <p>
                Cyberpower is a futuristic electronic rock band pushing the boundaries of sound and technology.
                Founded in 2020, we blend synthesizers, live instruments, and digital innovation to create
                an immersive sonic experience that transcends traditional genre limitations.
              </p>
              <p>
                Our mission is to explore the intersection of human creativity and technological possibility,
                creating music that speaks to the digital age while maintaining authentic emotional depth.
              </p>
              <button className="btn btn-primary">LEARN MORE</button>
            </div>
            <div className="about-visual">
              <div className="cyber-grid"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-shows">
        <div className="container">
          <h2>UPCOMING SHOWS</h2>
          <div className="shows-list">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="show-item">
                <div className="show-date">
                  <span className="month">MAR</span>
                  <span className="day">{15 + idx * 5}</span>
                </div>
                <div className="show-info">
                  <h3>Cyber Festival {idx + 1}</h3>
                  <p>Digital Arena, Cyber City</p>
                </div>
                <button className="btn btn-secondary btn-sm">GET TICKETS</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
