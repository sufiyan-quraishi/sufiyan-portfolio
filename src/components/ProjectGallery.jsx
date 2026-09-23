import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import Lightbox from './Lightbox.jsx';

export default function ProjectGallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [featured, ...rest] = images;

  return (
    <div className="gallery">
      <button className="gallery__featured" onClick={() => setOpenIndex(0)} aria-label={`View ${featured.caption} fullscreen`}>
        <img src={featured.src} alt={featured.caption} loading="lazy" />
        <span className="gallery__overlay">
          <ZoomIn size={16} /> {featured.caption}
        </span>
      </button>

      {rest.length > 0 && (
        <div className="gallery__grid">
          {rest.map((img, i) => (
            <button
              key={img.src}
              className="gallery__thumb"
              onClick={() => setOpenIndex(i + 1)}
              aria-label={`View ${img.caption} fullscreen`}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <span className="gallery__overlay gallery__overlay--sm">
                <ZoomIn size={14} />
              </span>
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}

      <style>{`
        .gallery__featured {
          position: relative;
          display: block; width: 100%; padding: 0; border: none; cursor: pointer;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          margin-bottom: 16px;
        }
        .gallery__featured img { width: 100%; display: block; transition: transform 0.5s var(--ease); }
        .gallery__featured:hover img { transform: scale(1.03); }

        .gallery__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .gallery__thumb {
          position: relative;
          padding: 0; border: 1px solid var(--border); cursor: pointer;
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .gallery__thumb img { width: 100%; aspect-ratio: 16/10; object-fit: cover; transition: transform 0.5s var(--ease); }
        .gallery__thumb:hover img { transform: scale(1.06); }

        .gallery__overlay {
          position: absolute; left: 12px; bottom: 12px;
          display: flex; align-items: center; gap: 6px;
          background: rgba(3,6,16,0.6);
          color: #fff; font-size: 12.5px; font-weight: 500;
          padding: 6px 10px; border-radius: 999px;
          opacity: 0; transition: opacity 0.25s var(--ease);
        }
        .gallery__featured:hover .gallery__overlay,
        .gallery__thumb:hover .gallery__overlay { opacity: 1; }
        .gallery__overlay--sm { left: 8px; bottom: 8px; padding: 5px; }

        @media (max-width: 640px) {
          .gallery__grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
