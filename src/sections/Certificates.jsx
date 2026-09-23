import { useState } from 'react';
import { Award, Eye } from 'lucide-react';
import { certificates } from '../data/certificates';
import CertificateViewer from '../components/CertificateViewer.jsx';

export default function Certificates() {
  const [viewerIndex, setViewerIndex] = useState(null);
  const realCerts = certificates.filter((c) => !c.placeholder);

  const openViewer = (cert) => {
    const idx = realCerts.findIndex((c) => c.id === cert.id);
    if (idx > -1) setViewerIndex(idx);
  };

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">Credentials that back up the skills.</h2>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) =>
            cert.placeholder ? (
              <div className="cert-card cert-card--placeholder" key={cert.id}>
                <Award size={26} className="cert-card__placeholder-icon" />
                <h3>{cert.title}</h3>
                <p>{cert.placeholderText}</p>
              </div>
            ) : (
              <button className="cert-card card card--hover" key={cert.id} onClick={() => openViewer(cert)}>
                <div className="cert-card__image-wrap">
                  <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
                  <span className="cert-card__view">
                    <Eye size={15} /> View Certificate
                  </span>
                </div>
                <div className="cert-card__body">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer} &middot; {cert.date}</p>
                </div>
              </button>
            )
          )}
        </div>
      </div>

      {viewerIndex !== null && (
        <CertificateViewer
          certificates={certificates}
          index={viewerIndex}
          onClose={() => setViewerIndex(null)}
          onNavigate={setViewerIndex}
        />
      )}

      <style>{`
        .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .cert-card {
          text-align: left; padding: 0; overflow: hidden; cursor: pointer;
          font-family: inherit; display: block; width: 100%;
        }
        .cert-card__image-wrap { position: relative; }
        .cert-card__image-wrap img { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
        .cert-card__view {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: rgba(3,6,16,0.55); color: #fff; font-size: 14px; font-weight: 600;
          opacity: 0; transition: opacity 0.25s var(--ease);
        }
        .cert-card:hover .cert-card__view { opacity: 1; }
        .cert-card__body { padding: 20px; }
        .cert-card__body h3 { font-size: 15.5px; font-weight: 700; }
        .cert-card__body p { margin-top: 6px; font-size: 13.5px; color: var(--text-2); }

        .cert-card--placeholder {
          border: 1px dashed var(--border);
          border-radius: var(--radius-md);
          padding: 40px 24px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center;
          color: var(--muted);
        }
        .cert-card__placeholder-icon { margin-bottom: 14px; opacity: 0.6; }
        .cert-card--placeholder h3 { font-size: 15px; font-weight: 700; color: var(--text-2); }
        .cert-card--placeholder p { margin-top: 6px; font-size: 13.5px; }

        @media (max-width: 700px) {
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
