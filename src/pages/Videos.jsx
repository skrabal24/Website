import { Play } from 'lucide-react'
import { videosData } from '../data/videos'
import './Videos.css'

export default function Videos() {
  return (
    <div className="videos">
      <section className="page-hero">
        <div className="container">
          <h1>VIDEOS</h1>
          <p>Watch CyberPower in action</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="videos-grid">
            {videosData.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-btn">
                      <Play size={32} />
                    </div>
                  </div>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.views?.toLocaleString()} views • {video.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
