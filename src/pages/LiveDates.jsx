import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { liveDatesData } from '../data/liveDates'
import './LiveDates.css'

export default function LiveDates() {
  return (
    <div className="live-dates">
      <section className="page-hero">
        <div className="container">
          <h1>LIVE DATES</h1>
          <p>Join us for an unforgettable sonic experience</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="dates-list">
            {liveDatesData.map(tour => (
              <div key={tour.id} className="date-card">
                <div className="date-block">
                  <span className="date-day">{new Date(tour.date).getDate()}</span>
                  <span className="date-month">{new Date(tour.date).toLocaleString('en', { month: 'short' }).toUpperCase()}</span>
                  <span className="date-year">{new Date(tour.date).getFullYear()}</span>
                </div>

                <div className="date-details">
                  <div className="location">
                    <h3>{tour.venue}</h3>
                    <p>
                      <MapPin size={16} /> {tour.city}, {tour.country}
                    </p>
                  </div>

                  <div className="time">
                    <Clock size={16} /> {tour.time}
                  </div>
                </div>

                <div className="date-actions">
                  <span className={`status ${tour.status.replace('_', '-')}`}>
                    {tour.status === 'sold_out' ? 'SOLD OUT' : tour.status === 'cancelled' ? 'CANCELLED' : 'AVAILABLE'}
                  </span>
                  {tour.status === 'available' && (
                    <a href={tour.ticketUrl} className="btn-ticket" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> TICKETS {tour.price && `- ${tour.price}`}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
