import * as Icons from 'lucide-react';
import { journey } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Development Journey</span>
          <h2 className="section-title">My Development Journey</h2>
        </div>

        <div className="journey-rail">
          {journey.map((m) => {
            const Icon = Icons[m.icon] || Icons.Sparkles;
            return (
              <div className="journey-item" key={`${m.year}-${m.title}`}>
                <div className="journey-item__icon"><Icon size={17} /></div>
                <span className="journey-item__year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .journey-rail {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .journey-item {
          padding: 24px; border-radius: var(--radius-md);
          background: var(--surface); border: 1px solid var(--border);
        }
        .journey-item__icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); color: var(--primary); margin-bottom: 14px;
        }
        .journey-item__year { font-size: 12.5px; font-weight: 700; color: var(--primary); letter-spacing: 0.03em; }
        .journey-item h3 { margin-top: 6px; font-size: 15.5px; font-weight: 700; }
        .journey-item p { margin-top: 6px; font-size: 13.5px; color: var(--text-2); line-height: 1.55; }

        @media (max-width: 900px) {
          .journey-rail { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .journey-rail { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
