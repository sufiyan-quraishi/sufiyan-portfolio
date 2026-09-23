import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [goPrev, goNext, onClose]);

  const current = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close viewer">
        <X size={22} />
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={26} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.caption} />
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Next image"
      >
        <ChevronRight size={26} />
      </button>

      <div className="lightbox__counter">
        {index + 1} / {images.length}
      </div>

      <style>{`
        .lightbox {
          position: fixed; inset: 0; z-index: 300;
          background: rgba(3, 6, 16, 0.92);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: lb-in 0.2s var(--ease);
        }
        @keyframes lb-in { from { opacity: 0; } to { opacity: 1; } }
        .lightbox__figure { max-width: min(90vw, 1000px); max-height: 82vh; text-align: center; }
        .lightbox__figure img {
          max-width: 100%; max-height: 76vh; object-fit: contain;
          border-radius: 12px; border: 1px solid rgba(255,255,255,0.12);
        }
        .lightbox__figure figcaption { color: #cbd5e1; font-size: 14px; margin-top: 14px; }
        .lightbox__close {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .lightbox__nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .lightbox__nav--prev { left: 16px; }
        .lightbox__nav--next { right: 16px; }
        .lightbox__counter {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          color: #cbd5e1; font-size: 13px; letter-spacing: 0.02em;
        }
        @media (max-width: 640px) {
          .lightbox__nav { width: 38px; height: 38px; }
          .lightbox__nav--prev { left: 6px; }
          .lightbox__nav--next { right: 6px; }
        }
      `}</style>
    </div>
  );
}
