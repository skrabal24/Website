import { Play, Zap, Disc3, Radio, Users, Calendar } from 'lucide-react'
import BackgroundScene from '../components/BackgroundScene'
import SectionBadge from '../components/SectionBadge'
import StatCard from '../components/StatCard'
import AudioPlayer from '../components/AudioPlayer'
import './Home.css'

export default function Home() {
  const featuredTracks = [
    { title: 'BEAM ME UP (KILL MODE)', artist: 'Cazzette', url: import.meta.env.BASE_URL + 'audio/beam-me-up-kill-mode.mp3' },
    { title: 'DIGITAL DREAMS', artist: 'Cyberpower', url: import.meta.env.BASE_URL + 'audio/digital-dreams.mp3' },
    { title: 'NEON NIGHTS', artist: 'Cyberpower', url: import.meta.env.BASE_URL + 'audio/neon-nights.mp3' },
  ]

  const stats = [
    { icon: Disc3, value: '3', label: 'Albums' },
    { icon: Radio, value: '47', label: 'Singles' },
    { icon: Users, value: '2M+', label: 'Listeners' },
    { icon: Calendar, value: '120+', label: 'Shows' },
  ]

  return (
    <div className="home">
      <BackgroundScene />

      <section className="hero">
        <div className="hero-grid-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <SectionBadge icon={Radio} text="Now Streaming" />
            <h1 className="hero-title">
              <span className="hero-title__line">CYBER</span>
              <span className="hero-title__line hero-title__line--accent">POWER</span>
            </h1>
            <p className="hero-subtitle">Where Technology Meets Sound</p>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <StatCard key={i} icon={s.icon} value={s.value} label={s.label} />
              ))}
            </div>
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
            <div className="hero-ring hero-ring--1"></div>
            <div className="hero-ring hero-ring--2"></div>
            <div className="hero-ring hero-ring--3"></div>
            <div className="hero-core"></div>
          </div>
        </div>
      </section>

      <section className="featured-tracks">
        <div className="container">
          <SectionBadge icon={Disc3} text="Latest Releases" />
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
              <SectionBadge icon={Users} text="The Collective" />
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
              <div className="cyber-grid-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-shows">
        <div className="container">
          <SectionBadge icon={Calendar} text="On Tour" />
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
