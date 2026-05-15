import Link from 'next/link';
import { getGalleryImages } from '../utils/getGalleryImages';

export default function Home() {
  const allImages = getGalleryImages();
  const featured = allImages.slice(0, 3);
  
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Bring Your Walls to Life.</h1>
          <p className="hero-subtext">
            Discover sustainable, custom-designed vertical garden systems for any space.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/gallery" className="btn btn-primary">
              VIEW OUR PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              {/* Design Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3>Design</h3>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              {/* Installation Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3>Installation</h3>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              {/* Maintenance Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Maintenance</h3>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="editorial-section" style={{ background: '#fff', paddingTop: '0' }}>
          <h2 className="section-title">Featured Projects</h2>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1400px', margin: '0 auto', marginTop: '3rem' }}>
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

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/gallery" className="btn btn-outline">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
