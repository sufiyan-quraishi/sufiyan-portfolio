import * as Icons from 'lucide-react';
import { highlights } from '../data/journey';

export default function HighlightStrip() {
  return (
    <section className="highlight-strip">
      <div className="container highlight-strip__grid">
        {highlights.map((h) => {
          const Icon = Icons[h.icon] || Icons.Sparkles;
          return (
            <div key={h.title} className="highlight-card card">
              <div className="highlight-card__icon">
                <Icon size={20} />
              </div>
              <h3 className="highlight-card__title">{h.title}</h3>
              <p className="highlight-card__desc">{h.description}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        .highlight-strip { padding: 0 0 100px; }
        .highlight-strip__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .highlight-card { padding: 26px 22px; }
        .highlight-card__icon {
          width: 42px; height: 42px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); color: var(--primary);
          margin-bottom: 16px;
        }
        .highlight-card__title { font-size: 15.5px; font-weight: 700; letter-spacing: -0.01em; }
        .highlight-card__desc { margin-top: 8px; font-size: 14px; color: var(--text-2); line-height: 1.55; }

        @media (max-width: 900px) {
          .highlight-strip__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .highlight-strip__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
