import Link from 'next/link';
import { getGalleryImages } from '../utils/getGalleryImages';

export default function Home() {
  const allImages = getGalleryImages();
  // Get 4 images for the featured section on the homepage, or fewer if not available
  const featured = allImages.slice(0, 4);
  
  return (
    <>
      <section className="hero">
        <div>
          <img src="/logo.png" alt="May Flowers Horticulture" style={{ height: '150px', objectFit: 'contain', marginBottom: '2rem', filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))' }} />
          <h1>Elevate Your Environment</h1>
          <p>Discover our premium, modern vertical gardens and botanical installations. Designed for aesthetics, engineered for nature.</p>
          <Link href="/gallery" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>Explore Our Work</Link>
        </div>
      </section>

      <section style={{ padding: '6rem 5%', textAlign: 'center', background: 'var(--light)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Choose May Flowers Horticulture?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '20px', maxWidth: '350px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>✨ Aesthetic Perfection</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Every installation is treated as a piece of living art, tailored flawlessly to your space.</p>
          </div>
          <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '20px', maxWidth: '350px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🌿 Premium Quality</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>We source only the healthiest, most vibrant flora alongside top-tier architectural materials.</p>
          </div>
          <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '20px', maxWidth: '350px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>💧 Effortless Care</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Our modern installations feature smart watering systems so your greenery thrives naturally.</p>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section style={{ padding: '6rem 0', background: 'white' }}>
          <h2 style={{ textAlign: 'center', margin: '0 0 4rem', fontSize: '2.5rem' }}>Featured Installations</h2>
          
          <div className="masonry-gallery" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {featured.map((imgSrc, index) => (
              <div key={index} className="gallery-item" style={{ height: '350px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc} alt={`Featured Work ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/gallery" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>View Full Portfolio</Link>
          </div>
        </section>
      )}
    </>
  );
}
