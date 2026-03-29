import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featured = products.slice(0, 3);
  
  return (
    <>
      <section className="hero">
        <div>
          <img src="/logo.png" alt="May Flowers Horticulture" style={{ height: '150px', objectFit: 'contain', marginBottom: '2rem', filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))' }} />
          <h1>Bring Nature Indoors</h1>
          <p>Elevate your space with our premium, modern vertical gardens. Designed for aesthetics, engineered for growth.</p>
          <Link href="/catalog" className="btn">Shop the Catalog</Link>
        </div>
      </section>

      <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <h2>Why Choose May Flowers Horticulture?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', maxWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>💧 Smart Watering</h3>
            <p>Our self-watering systems ensure your plants thrive with zero effort.</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', maxWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>☀️ LED Technology</h3>
            <p>Built-in full-spectrum grow lights fit perfectly in dark spaces.</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', maxWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🌿 Premium Design</h3>
            <p>High quality materials that blend seamlessly into your modern home.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', margin: '4rem 0 0' }}>Featured Designs</h2>
        <div className="product-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Link href="/catalog" className="btn">View All 25 Gardens</Link>
        </div>
      </section>
    </>
  );
}
