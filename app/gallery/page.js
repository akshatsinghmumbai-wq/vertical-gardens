import { getGalleryImages } from '../../utils/getGalleryImages';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Work | May Flowers Horticulture',
  description: 'View our portfolio of premium vertical gardens and lush plant installations.',
};

export default function GalleryPage() {
  const images = getGalleryImages();

  // If no images are found, show a beautiful blank slate
  if (images.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)' }}>Gallery is Empty!</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
          Please connect your pendrive and copy your photos into the `public/gallery` folder to see them appear here!
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--light)', minHeight: '100vh', padding: '4rem 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeIn 1s ease' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--dark)' }}>Our Portfolio</h1>
        <p style={{ fontSize: '1.2rem', color: '#777', maxWidth: '600px', margin: '1rem auto' }}>
          A curated collection of our premium horticulture installations, vertical gardens, and vibrant plant designs.
        </p>
      </div>

      <div className="masonry-gallery">
        {images.map((imgSrc, index) => (
          <div key={index} className="gallery-item">
            {/* We use a standard img tag because we don't know the exact dimensions beforehand to pass to Next Image easily */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imgSrc} 
              alt={`May Flowers Horticulture Installation ${index + 1}`} 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }}>
        <Link href="/about" className="btn" style={{ fontSize: '1.3rem', padding: '1rem 3rem' }}>
          Enquire About an Installation
        </Link>
      </div>
    </div>
  );
}
