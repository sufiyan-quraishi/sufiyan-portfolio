import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

export default function CertificateViewer({ certificates, index, onClose, onNavigate }) {
  const [zoom, setZoom] = useState(1);
  const real = certificates.filter((c) => !c.placeholder);

  const goPrev = useCallback(() => {
    setZoom(1);
    onNavigate((index - 1 + real.length) % real.length);
  }, [index, real.length, onNavigate]);

  const goNext = useCallback(() => {
    setZoom(1);
    onNavigate((index + 1) % real.length);
  }, [index, real.length, onNavigate]);

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

  const cert = real[index];
  if (!cert) return null;

  return (
    <div className="cert-viewer" role="dialog" aria-modal="true" aria-label="Certificate viewer" onClick={onClose}>
      <div className="cert-viewer__toolbar" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setZoom((z) => Math.max(1, z - 0.25))} aria-label="Zoom out"><ZoomOut size={18} /></button>
        <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))} aria-label="Zoom in"><ZoomIn size={18} /></button>
        <a href={cert.image} download aria-label="Download certificate"><Download size={18} /></a>
        <button onClick={onClose} aria-label="Close viewer"><X size={18} /></button>
      </div>

      {real.length > 1 && (
        <button className="cert-viewer__nav cert-viewer__nav--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous certificate">
          <ChevronLeft size={26} />
        </button>
      )}

      <div className="cert-viewer__frame" onClick={(e) => e.stopPropagation()}>
        <img src={cert.image} alt={`${cert.title} certificate`} style={{ transform: `scale(${zoom})` }} />
      </div>

      {real.length > 1 && (
        <button className="cert-viewer__nav cert-viewer__nav--next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next certificate">
          <ChevronRight size={26} />
        </button>
      )}

      <div className="cert-viewer__caption">{cert.title} — {cert.issuer}</div>

      <style>{`
        .cert-viewer {
          position: fixed; inset: 0; z-index: 300;
          background: rgba(3, 6, 16, 0.94);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
        }
        .cert-viewer__frame { max-width: min(88vw, 900px); max-height: 74vh; overflow: hidden; }
        .cert-viewer__frame img {
          max-width: 100%; max-height: 74vh; object-fit: contain;
          border-radius: 10px; transition: transform 0.25s var(--ease);
        }
        .cert-viewer__toolbar {
          position: absolute; top: 20px; right: 20px; display: flex; gap: 8px;
        }
        .cert-viewer__toolbar button, .cert-viewer__toolbar a {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cert-viewer__nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .cert-viewer__nav--prev { left: 16px; }
        .cert-viewer__nav--next { right: 16px; }
        .cert-viewer__caption {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          color: #cbd5e1; font-size: 13.5px;
        }
      `}</style>
    </div>
  );
}
