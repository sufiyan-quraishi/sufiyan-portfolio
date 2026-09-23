import { Eye, Download } from 'lucide-react';
import { assets } from '../data/assets';

export default function ResumeSection() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-card">
          <div className="resume-card__text">
            <h2 className="section-title">Want the complete picture?</h2>
            <p className="section-subtitle">
              View my resume for a concise overview of my technical skills, experience, education and projects.
            </p>
            <div className="resume-card__ctas">
              <a href={assets.resume.pdf} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Eye size={17} /> View Resume
              </a>
              <a href={assets.resume.pdf} download={assets.resume.fileName} className="btn btn-secondary">
                <Download size={17} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-card {
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: linear-gradient(135deg, var(--surface), var(--surface-2));
          padding: 56px;
          text-align: center;
        }
        .resume-card__text .section-title { max-width: 560px; margin: 0 auto; }
        .resume-card__text .section-subtitle { max-width: 480px; margin-left: auto; margin-right: auto; }
        .resume-card__ctas { margin-top: 30px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 640px) {
          .resume-card { padding: 36px 22px; }
        }
      `}</style>
    </section>
  );
}
