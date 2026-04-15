import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { photosData } from '../data/photos'
import './Photos.css'

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const nextPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = photosData.findIndex(p => p.id === selectedPhoto.id)
    if (currentIndex < photosData.length - 1) {
      setSelectedPhoto(photosData[currentIndex + 1])
    }
  }

  const prevPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = photosData.findIndex(p => p.id === selectedPhoto.id)
    if (currentIndex > 0) {
      setSelectedPhoto(photosData[currentIndex - 1])
    }
  }

  return (
    <div className="photos">
      <section className="page-hero">
        <div className="container">
          <h1>PHOTOS</h1>
          <p>Visual moments from our journey</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="photos-grid">
            {photosData.map(photo => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img src={photo.imageUrl} alt={photo.title} />
                <div className="photo-overlay">
                  <span>{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPhoto(null)}>
              <X size={32} />
            </button>

            <button className="nav-btn prev-btn" onClick={prevPhoto}>
              <ChevronLeft size={32} />
            </button>

            <div className="lightbox-image">
              <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} />
              <p className="lightbox-title">{selectedPhoto.title}</p>
            </div>

            <button className="nav-btn next-btn" onClick={nextPhoto}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
