import { ShoppingCart } from 'lucide-react'
import { merchData } from '../data/merch'
import './Merch.css'

export default function Merch() {
  return (
    <div className="merch">
      <section className="page-hero">
        <div className="container">
          <h1>MERCH</h1>
          <p>Official CyberPower gear and collectibles</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="merch-info">
            <div className="info-item">
              <h3>FREE SHIPPING</h3>
              <p>On orders over 1000 Kč</p>
            </div>
            <div className="info-item">
              <h3>OFFICIAL GEAR</h3>
              <p>100% authentic merchandise</p>
            </div>
            <div className="info-item">
              <h3>LIMITED EDITIONS</h3>
              <p>Exclusive items available</p>
            </div>
          </div>

          <div className="merch-grid">
            {merchData.map(item => (
              <div key={item.id} className={`merch-card ${!item.inStock ? 'out-of-stock' : ''}`}>
                <div className="merch-image">
                  <img src={item.imageUrl} alt={item.name} />
                  {!item.inStock && <span className="sold-out-badge">SOLD OUT</span>}
                </div>
                <div className="merch-details">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price} Kč</p>
                  {item.sizes && (
                    <div className="sizes">
                      {item.sizes.map(size => (
                        <span key={size} className="size">{size}</span>
                      ))}
                    </div>
                  )}
                  {item.colors && (
                    <div className="colors">
                      {item.colors.map(color => (
                        <span key={color} className="color">{color}</span>
                      ))}
                    </div>
                  )}
                  <button className={`btn-merch ${!item.inStock ? 'disabled' : ''}`} disabled={!item.inStock}>
                    <ShoppingCart size={16} /> {item.inStock ? 'ADD TO CART' : 'SOLD OUT'}
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
