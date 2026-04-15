import { Play, Music, Disc3 } from 'lucide-react'
import './Discography.css'

export default function Discography() {
  const albums = [
    {
      id: 1,
      title: 'DIGITAL FUTURE',
      year: '2026',
      tracks: 12,
      featured: true,
      description: 'Latest album exploring themes of technology and humanity'
    },
    {
      id: 2,
      title: 'NEON DREAMS',
      year: '2025',
      tracks: 11,
      featured: false,
      description: 'An immersive journey through cyberpunk landscapes'
    },
    {
      id: 3,
      title: 'ELECTRIC PULSE',
      year: '2024',
      tracks: 10,
      featured: false,
      description: 'High-energy tracks that define our signature sound'
    },
    {
      id: 4,
      title: 'CYBER ANTHEM',
      year: '2023',
      tracks: 9,
      featured: false,
      description: 'Early compilation of our most iconic tracks'
    }
  ]

  const tracks = [
    { id: 1, title: 'DIGITAL DREAMS', album: 'DIGITAL FUTURE', duration: '3:45', year: '2026' },
    { id: 2, title: 'NEON NIGHTS', album: 'DIGITAL FUTURE', duration: '4:12', year: '2026' },
    { id: 3, title: 'CYBER PULSE', album: 'DIGITAL FUTURE', duration: '3:58', year: '2026' },
    { id: 4, title: 'FUTURE WAVE', album: 'NEON DREAMS', duration: '4:30', year: '2025' },
    { id: 5, title: 'ELECTRIC SOUL', album: 'NEON DREAMS', duration: '3:20', year: '2025' },
    { id: 6, title: 'SYNTHETIC LIFE', album: 'ELECTRIC PULSE', duration: '4:05', year: '2024' },
    { id: 7, title: 'TECH HARMONY', album: 'ELECTRIC PULSE', duration: '3:50', year: '2024' },
    { id: 8, title: 'CYBER ANTHEM', album: 'CYBER ANTHEM', duration: '4:45', year: '2023' }
  ]

  return (
    <div className="discography">
      <section className="disco-hero">
        <div className="container">
          <h1>DISCOGRAPHY</h1>
          <p>All our releases and music</p>
        </div>
      </section>

      <section className="albums-section">
        <div className="container">
          <h2>ALBUMS</h2>
          <div className="albums-grid">
            {albums.map(album => (
              <div key={album.id} className={`album-card ${album.featured ? 'featured' : ''}`}>
                <div className="album-cover">
                  <Disc3 size={80} />
                </div>
                {album.featured && <div className="featured-badge">LATEST</div>}
                <h3>{album.title}</h3>
                <p className="year">{album.year}</p>
                <p className="tracks">
                  <Music size={16} /> {album.tracks} Tracks
                </p>
                <p className="description">{album.description}</p>
                <button className="btn btn-primary btn-sm">
                  <Play size={16} /> PLAY ALBUM
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tracks-section">
        <div className="container">
          <h2>FEATURED TRACKS</h2>
          <div className="tracks-table">
            <div className="table-header">
              <div className="col-title">TRACK</div>
              <div className="col-album">ALBUM</div>
              <div className="col-year">YEAR</div>
              <div className="col-duration">DURATION</div>
              <div className="col-action"></div>
            </div>
            {tracks.map((track, idx) => (
              <div key={track.id} className="table-row">
                <div className="col-title">
                  <span className="track-number">{idx + 1}</span>
                  {track.title}
                </div>
                <div className="col-album">{track.album}</div>
                <div className="col-year">{track.year}</div>
                <div className="col-duration">{track.duration}</div>
                <div className="col-action">
                  <button className="play-icon" title="Play track">
                    <Play size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
