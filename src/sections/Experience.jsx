import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I&rsquo;ve applied what I&rsquo;ve learned.</h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline__item" key={job.company}>
              <div className="timeline__marker">
                <Briefcase size={16} />
              </div>
              <div className="timeline__card card">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span className="tag">{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <ul className="timeline__list">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline { position: relative; display: flex; flex-direction: column; gap: 28px; }
        .timeline::before {
          content: '';
          position: absolute; left: 19px; top: 10px; bottom: 10px;
          width: 1px; background: var(--border);
        }
        .timeline__item { position: relative; display: flex; gap: 24px; }
        .timeline__marker {
          position: relative; z-index: 1; flex-shrink: 0;
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface); border: 1px solid var(--border); color: var(--primary);
        }
        .timeline__card { flex: 1; padding: 26px; }
        .timeline__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .timeline__head h3 { font-size: 18px; font-weight: 700; letter-spacing: -0.01em; }
        .timeline__company { margin-top: 4px; color: var(--primary); font-weight: 600; font-size: 14.5px; }
        .timeline__list { margin-top: 16px; display: flex; flex-direction: column; gap: 9px; }
        .timeline__list li {
          font-size: 14.5px; color: var(--text-2); line-height: 1.6; padding-left: 16px; position: relative;
        }
        .timeline__list li::before {
          content: ''; position: absolute; left: 0; top: 9px;
          width: 5px; height: 5px; border-radius: 50%; background: var(--muted);
        }
      `}</style>
    </section>
  );
}
