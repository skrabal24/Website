import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Tattoos.css'

const tattoosData = [
  {
    id: 1,
    title: 'Cyber sleeve - left arm',
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda438121?w=600',
    description: 'Full sleeve depicting digital circuitry and neural networks'
  },
  {
    id: 2,
    title: 'Neural network - back',
    imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600',
    description: 'Intricate network design spanning the entire back'
  },
  {
    id: 3,
    title: 'Neon skull - chest',
    imageUrl: 'https://images.unsplash.com/photo-1475403614135-5f1b8cc43c2a?w=600',
    description: 'Skull with neon outlines glowing in the dark'
  },
  {
    id: 4,
    title: 'Circuit arm - right arm',
    imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600',
    description: 'Circuit board design wrapping around the forearm'
  },
  {
    id: 5,
    title: 'Binary code - neck',
    imageUrl: 'https://images.unsplash.com/photo-1542727313-4f1a054f201f?w=600',
    description: 'Binary sequence flowing up the neck'
  },
  {
    id: 6,
    title: 'Glitch effect - shoulder',
    imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600',
    description: 'Abstract glitch art covering the shoulder'
  }
]

export default function Tattoos() {
  const [selectedTattoo, setSelectedTattoo] = useState(null)

  const nextTattoo = () => {
    if (!selectedTattoo) return
    const currentIndex = tattoosData.findIndex(t => t.id === selectedTattoo.id)
    if (currentIndex < tattoosData.length - 1) {
      setSelectedTattoo(tattoosData[currentIndex + 1])
    }
  }

  const prevTattoo = () => {
    if (!selectedTattoo) return
    const currentIndex = tattoosData.findIndex(t => t.id === selectedTattoo.id)
    if (currentIndex > 0) {
      setSelectedTattoo(tattoosData[currentIndex - 1])
    }
  }

  return (
    <div className="tattoos">
      <section className="page-hero">
        <div className="container">
          <h1>TATTOOS</h1>
          <p>Keef's body art collection</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="tattoos-grid">
            {tattoosData.map(tattoo => (
              <div
                key={tattoo.id}
                className="tattoo-item"
                onClick={() => setSelectedTattoo(tattoo)}
              >
                <img src={tattoo.imageUrl} alt={tattoo.title} />
                <div className="tattoo-overlay">
                  <span>{tattoo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTattoo && (
        <div className="lightbox" onClick={() => setSelectedTattoo(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedTattoo(null)}>
              <X size={32} />
            </button>

            <button className="nav-btn prev-btn" onClick={prevTattoo}>
              <ChevronLeft size={32} />
            </button>

            <div className="lightbox-image">
              <img src={selectedTattoo.imageUrl} alt={selectedTattoo.title} />
              <h3>{selectedTattoo.title}</h3>
              <p>{selectedTattoo.description}</p>
            </div>

            <button className="nav-btn next-btn" onClick={nextTattoo}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
