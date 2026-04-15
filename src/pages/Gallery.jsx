import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Gallery.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { id: 1, title: 'Live Performance 2026', category: 'LIVE' },
    { id: 2, title: 'Studio Session', category: 'STUDIO' },
    { id: 3, title: 'Album Artwork', category: 'ART' },
    { id: 4, title: 'Concert Photo 1', category: 'LIVE' },
    { id: 5, title: 'Band Portrait', category: 'PORTRAIT' },
    { id: 6, title: 'Tour Stage Setup', category: 'TOUR' },
    { id: 7, title: 'Behind The Scenes', category: 'BTS' },
    { id: 8, title: 'Visual Effects Demo', category: 'VFX' },
    { id: 9, title: 'Merchandise Collection', category: 'MERCH' }
  ]

  const nextImage = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1])
    }
  }

  const prevImage = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1])
    }
  }

  return (
    <div className="gallery">
      <section className="gallery-hero">
        <div className="container">
          <h1>GALLERY</h1>
          <p>Visual moments from our journey</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map(image => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-image-placeholder">
                  <div className="placeholder-content">
                    <span className="category">{image.category}</span>
                    <h3>{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>

            <button className="nav-btn prev-btn" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>

            <div className="lightbox-image">
              <div className="image-placeholder">
                <h2>{selectedImage.title}</h2>
              </div>
            </div>

            <button className="nav-btn next-btn" onClick={nextImage}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
