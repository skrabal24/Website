import { ShoppingCart, Star } from 'lucide-react'
import './Merchandise.css'

export default function Merchandise() {
  const products = [
    {
      id: 1,
      name: 'CYBERPOWER T-SHIRT',
      price: '29.99',
      rating: 5,
      inStock: true,
      image: '👕'
    },
    {
      id: 2,
      name: 'NEON HOODIE',
      price: '59.99',
      rating: 5,
      inStock: true,
      image: '🧥'
    },
    {
      id: 3,
      name: 'DIGITAL FUTURE VINYL',
      price: '39.99',
      rating: 5,
      inStock: true,
      image: '💿'
    },
    {
      id: 4,
      name: 'CYBER CAP',
      price: '24.99',
      rating: 4,
      inStock: true,
      image: '🧢'
    },
    {
      id: 5,
      name: 'BAND STICKER PACK',
      price: '9.99',
      rating: 5,
      inStock: true,
      image: '🎫'
    },
    {
      id: 6,
      name: 'SIGNATURE POSTER',
      price: '19.99',
      rating: 5,
      inStock: false,
      image: '📄'
    },
    {
      id: 7,
      name: 'CYBERPOWER MUG',
      price: '14.99',
      rating: 4,
      inStock: true,
      image: '☕'
    },
    {
      id: 8,
      name: 'LIMITED HOODIE JACKET',
      price: '89.99',
      rating: 5,
      inStock: true,
      image: '🧤'
    }
  ]

  return (
    <div className="merchandise">
      <section className="merch-hero">
        <div className="container">
          <h1>MERCHANDISE</h1>
          <p>Exclusive Cyberpower gear and collectibles</p>
        </div>
      </section>

      <section className="merch-content">
        <div className="container">
          <div className="merch-info">
            <div className="info-item">
              <h3>🚚 FREE SHIPPING</h3>
              <p>On orders over $50</p>
            </div>
            <div className="info-item">
              <h3>💎 OFFICIAL GEAR</h3>
              <p>100% authentic merchandise</p>
            </div>
            <div className="info-item">
              <h3>✨ LIMITED EDITIONS</h3>
              <p>Exclusive items available</p>
            </div>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
                <div className="product-image">
                  <span className="emoji">{product.image}</span>
                </div>

                <h3>{product.name}</h3>

                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < product.rating ? 'currentColor' : 'none'}
                      color={i < product.rating ? 'var(--primary)' : 'var(--border)'}
                    />
                  ))}
                </div>

                <div className="product-price">
                  <span className="price">${product.price}</span>
                </div>

                {product.inStock ? (
                  <button className="btn btn-primary btn-sm">
                    <ShoppingCart size={16} /> ADD TO CART
                  </button>
                ) : (
                  <button className="btn btn-secondary btn-sm" disabled>
                    OUT OF STOCK
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
