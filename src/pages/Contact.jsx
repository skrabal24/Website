import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>CONTACT US</h1>
          <p>Get in touch with Cyberpower</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>REACH OUT</h2>

              <div className="info-box">
                <div className="info-icon">
                  <Mail size={32} />
                </div>
                <div>
                  <h3>EMAIL</h3>
                  <p><a href="mailto:contact@cyberpower.com">contact@cyberpower.com</a></p>
                  <p className="response-time">Response time: 24-48 hours</p>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <Phone size={32} />
                </div>
                <div>
                  <h3>PHONE</h3>
                  <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                  <p className="response-time">Mon-Fri 9AM-5PM EST</p>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3>LOCATION</h3>
                  <p>Digital City, Cyber District</p>
                  <p className="response-time">Virtual Office</p>
                </div>
              </div>

              <div className="social-box">
                <h3>FOLLOW US</h3>
                <div className="social-links">
                  <a href="#" className="social-btn">Instagram</a>
                  <a href="#" className="social-btn">Twitter</a>
                  <a href="#" className="social-btn">Facebook</a>
                  <a href="#" className="social-btn">Discord</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={20} /> SEND MESSAGE
                </button>

                {submitted && (
                  <div className="success-message">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
