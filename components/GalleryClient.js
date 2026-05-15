'use client';

import { useState } from 'react';

export default function GalleryClient({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="masonry-gallery">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            onClick={() => setSelectedImage(img)}
            style={{ cursor: 'pointer' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.name} 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            
            <div className="modal-layout">
              <div className="modal-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.name} 
                  className="modal-image"
                />
              </div>
              
              <div className="modal-info">
                <h2>{selectedImage.name}</h2>
                <div className="modal-divider"></div>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic', color: '#555' }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
