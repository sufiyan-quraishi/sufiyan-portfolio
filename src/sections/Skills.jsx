import * as Icons from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Technical Skills</span>
          <h2 className="section-title">Technologies and concepts I use to build practical applications.</h2>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => {
            const Icon = Icons[cat.icon] || Icons.Code2;
            return (
              <div key={cat.id} className="skill-card card card--hover">
                <div className="skill-card__head">
                  <div className="skill-card__icon">
                    <Icon size={19} />
                  </div>
                  <h3 className="skill-card__title">{cat.title}</h3>
                </div>
                <ul className="skill-card__list">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="skill-card__item">
                      <span className="skill-card__name">{s.name}</span>
                      <span className="skill-card__desc">{s.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .skill-card { padding: 26px; }
        .skill-card__head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .skill-card__icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); color: var(--primary);
          flex-shrink: 0;
        }
        .skill-card__title { font-size: 16.5px; font-weight: 700; letter-spacing: -0.01em; }
        .skill-card__list { display: flex; flex-direction: column; gap: 13px; }
        .skill-card__item { display: flex; flex-direction: column; gap: 2px; }
        .skill-card__name { font-size: 14.5px; font-weight: 600; }
        .skill-card__desc { font-size: 13px; color: var(--text-2); line-height: 1.5; }

        @media (max-width: 1024px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
