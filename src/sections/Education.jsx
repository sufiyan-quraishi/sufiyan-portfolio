import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic background.</h2>
        </div>

        <div className="edu-grid">
          {education.map((e) => (
            <div className="edu-card card card--hover" key={e.degree}>
              <div className="edu-card__icon">
                <GraduationCap size={20} />
              </div>
              <h3 className="edu-card__degree">{e.degree}</h3>
              <p className="edu-card__institution">{e.institution}</p>
              <span className="tag edu-card__period">{e.period}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .edu-card { padding: 28px; }
        .edu-card__icon {
          width: 42px; height: 42px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); color: var(--primary); margin-bottom: 18px;
        }
        .edu-card__degree { font-size: 17px; font-weight: 700; letter-spacing: -0.01em; }
        .edu-card__institution { margin-top: 8px; color: var(--text-2); font-size: 14.5px; }
        .edu-card__period { margin-top: 16px; }

        @media (max-width: 700px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
