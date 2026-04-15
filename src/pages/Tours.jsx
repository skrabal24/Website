import { MapPin, Clock, Ticket } from 'lucide-react'
import './Tours.css'

export default function Tours() {
  const tours = [
    {
      id: 1,
      city: 'Digital Arena',
      country: 'Cyber City',
      date: 'May 15, 2026',
      time: '20:00',
      venue: 'Cyber Convention Center',
      status: 'AVAILABLE'
    },
    {
      id: 2,
      city: 'Tech Palace',
      country: 'Innovation Park',
      date: 'May 22, 2026',
      time: '19:30',
      venue: 'Tech Palace Theatre',
      status: 'AVAILABLE'
    },
    {
      id: 3,
      city: 'Neon Hall',
      country: 'Future City',
      date: 'May 29, 2026',
      time: '21:00',
      venue: 'Neon Hall Auditorium',
      status: 'AVAILABLE'
    },
    {
      id: 4,
      city: 'Electric Dreams',
      country: 'Voltage Valley',
      date: 'June 5, 2026',
      time: '20:00',
      venue: 'Electric Dreams Stadium',
      status: 'AVAILABLE'
    },
    {
      id: 5,
      city: 'Cyber Festival',
      country: 'Global',
      date: 'June 12-14, 2026',
      time: 'Multiple',
      venue: 'Festival Grounds',
      status: 'CONFIRMED'
    },
    {
      id: 6,
      city: 'Pixel Park',
      country: 'Digital World',
      date: 'June 19, 2026',
      time: '19:00',
      venue: 'Pixel Park Arena',
      status: 'AVAILABLE'
    }
  ]

  return (
    <div className="tours">
      <section className="tours-hero">
        <div className="container">
          <h1>TOUR DATES 2026</h1>
          <p>Join us for an unforgettable sonic experience</p>
        </div>
      </section>

      <section className="tours-content">
        <div className="container">
          <div className="tours-info">
            <div className="info-card">
              <h3>COMING TO YOUR CITY</h3>
              <p>Experience Cyberpower live with cutting-edge visuals and immersive sound design.</p>
            </div>
            <div className="info-card">
              <h3>VIP PACKAGES</h3>
              <p>Exclusive VIP experiences including meet & greet, merchandise, and premium seating.</p>
            </div>
            <div className="info-card">
              <h3>EARLY BIRD DISCOUNT</h3>
              <p>Book your tickets now and receive 20% off. Limited time offer!</p>
            </div>
          </div>

          <div className="tours-list">
            {tours.map(tour => (
              <div key={tour.id} className="tour-card">
                <div className="tour-date-block">
                  <span className="tour-date">{tour.date}</span>
                  <span className="tour-time">
                    <Clock size={16} /> {tour.time}
                  </span>
                </div>

                <div className="tour-details">
                  <div className="location">
                    <h3>{tour.city}</h3>
                    <p>
                      <MapPin size={16} /> {tour.venue}
                    </p>
                    <p className="country">{tour.country}</p>
                  </div>

                  <div className="tour-actions">
                    <span className={`status ${tour.status.toLowerCase()}`}>
                      {tour.status}
                    </span>
                    <button className="btn btn-primary btn-sm">
                      <Ticket size={16} /> GET TICKETS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
