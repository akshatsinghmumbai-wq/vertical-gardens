import Link from 'next/link';
import { getGalleryImages } from '../utils/getGalleryImages';

export default function Home() {
  const allImages = getGalleryImages();
  // We'll show an asymmetrical 3-image spread for a more "moodboard / cafe" vibe
  const featured = allImages.slice(0, 3);
  
  return (
    <>
      <section className="hero">
        <div style={{ padding: '0 2rem' }}>
          <img 
            src="/logo/Logo_Black-removebg-preview.png" 
            alt="May Flowers Horticulture" 
            className="hero-logo"
          />
          <h1 className="hero-heading">
            Elevate Your Space.
          </h1>
          <p className="hero-subtext">
            Curated vertical gardens & botanical installations for the modern aesthetic.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/gallery" className="btn" style={{ fontSize: '1.1rem', padding: '1.2rem 3.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-section" style={{ background: 'var(--light)' }}>
        <h2 className="section-title">Our Philosophy</h2>
        <div style={{ width: '60px', height: '2px', background: 'var(--primary)', margin: '0 auto 4rem' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ background: '#fff', padding: '4rem 3rem', flex: '1', minWidth: '300px', border: '1px solid #eae1d8', transition: 'all 0.4s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '400' }}>Living Art</h3>
            <p style={{ color: '#7a7a7a', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Every installation is thoughtfully composed as a piece of living art, tailored flawlessly to harmonize with your interior architecture.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '4rem 3rem', flex: '1', minWidth: '300px', border: '1px solid #eae1d8', transition: 'all 0.4s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '400' }}>Organic Quality</h3>
            <p style={{ color: '#7a7a7a', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We source only the healthiest, vibrant flora alongside premium, sustainable materials to ensure lasting elegance.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '4rem 3rem', flex: '1', minWidth: '300px', border: '1px solid #eae1d8', transition: 'all 0.4s ease' }} className="feature-card">
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '400' }}>Seamless Care</h3>
            <p style={{ color: '#7a7a7a', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Enjoy the tranquility of nature with zero stress. Our modern systems feature integrated, intelligent watering technologies.
            </p>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="editorial-section" style={{ background: '#fff' }}>
          <h2 className="section-title">Featured Work</h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--primary)', margin: '0 auto 5rem' }}></div>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1400px', margin: '0 auto' }}>
            {featured.map((imgSrc, index) => (
              <div key={index} style={{ flex: '1', minWidth: '300px', height: '450px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={imgSrc} 
                  alt={`Selected Work ${index + 1}`} 
                  loading="lazy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                  className="hero-featured-image"
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link href="/gallery" className="btn" style={{ fontSize: '1.1rem', padding: '1.2rem 3.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '2px', background: 'transparent', color: 'var(--dark)', border: '1px solid var(--dark)', boxShadow: 'none' }}>
              Explore The Gallery
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
