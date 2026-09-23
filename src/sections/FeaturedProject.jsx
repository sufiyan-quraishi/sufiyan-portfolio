import { ExternalLink, Github, MessageCircle, Check } from 'lucide-react';
import ProjectGallery from '../components/ProjectGallery.jsx';
import { links } from '../data/personal';

const CASE_STUDY_STEPS = [
  ['01', 'Overview', 'overview'],
  ['02', 'Problem', 'problem'],
  ['03', 'Solution', 'solution'],
  ['04', 'Key Features', 'keyFeatures'],
  ['05', 'Technology Stack', 'techStack'],
  ['06', 'Interface Showcase', 'interfaceShowcase'],
  ['07', 'Development Approach', 'developmentApproach'],
  ['08', 'Future Scope', 'futureScope'],
];

export default function FeaturedProject({ project, reverse = false }) {
  const cs = project.caseStudy;

  return (
    <article className={`featured ${reverse ? 'featured--reverse' : ''}`} id={project.id}>
      <div className="container">
        <div className="featured__top">
          <div className="featured__intro">
            <span className="tag featured__badge">{project.subtitle}</span>
            <h3 className="featured__title">{project.title}</h3>
            <p className="featured__desc">{project.description}</p>

            <div className="featured__tech">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="featured__ctas">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  Live Demo <ExternalLink size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <Github size={15} /> GitHub
                </a>
              )}
              {project.githubBackend && (
                <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <Github size={15} /> Backend
                </a>
              )}
              {project.githubFrontend && (
                <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <Github size={15} /> Frontend
                </a>
              )}
              <a href={links.whatsappProject} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                <MessageCircle size={15} /> Discuss This Project
              </a>
            </div>
          </div>

          <div className="featured__features card">
            <h4 className="featured__features-title">What it does</h4>
            <ul className="featured__features-list">
              {project.features.map((f) => (
                <li key={f.title}>
                  <Check size={16} className="featured__check" />
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="featured__gallery">
          <ProjectGallery images={project.gallery} />
        </div>

        {cs && (
          <div className="case-study">
            {CASE_STUDY_STEPS.map(([num, label, key]) => (
              <div className="case-study__row" key={key}>
                <div className="case-study__num">{num}</div>
                <div className="case-study__content">
                  <h5>{label}</h5>
                  {Array.isArray(cs[key]) ? (
                    <ul className="case-study__list">
                      {cs[key].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{cs[key]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .featured { padding: 64px 0; border-top: 1px solid var(--border); }
        .featured__top {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: start;
          margin-bottom: 36px;
        }
        .featured__badge { color: var(--primary); border-color: rgba(59,130,246,0.3); }
        .featured__title { margin-top: 16px; font-size: clamp(26px, 3vw, 34px); font-weight: 800; letter-spacing: -0.02em; }
        .featured__desc { margin-top: 14px; font-size: 16px; line-height: 1.7; color: var(--text-2); max-width: 560px; }
        .featured__tech { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 8px; }
        .featured__ctas { margin-top: 26px; display: flex; gap: 10px; flex-wrap: wrap; }

        .featured__features { padding: 24px; }
        .featured__features-title { font-size: 14px; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 16px; }
        .featured__features-list { display: flex; flex-direction: column; gap: 14px; }
        .featured__features-list li { display: flex; gap: 10px; align-items: flex-start; }
        .featured__features-list strong { display: block; font-size: 14.5px; font-weight: 600; }
        .featured__features-list span { display: block; font-size: 13px; color: var(--text-2); margin-top: 2px; line-height: 1.5; }
        .featured__check { color: var(--success); flex-shrink: 0; margin-top: 2px; }

        .case-study { margin-top: 48px; display: flex; flex-direction: column; }
        .case-study__row {
          display: grid; grid-template-columns: 64px 1fr;
          gap: 20px; padding: 22px 0; border-top: 1px solid var(--border);
        }
        .case-study__num { font-size: 14px; font-weight: 700; color: var(--muted); font-variant-numeric: tabular-nums; }
        .case-study__content h5 { font-size: 15.5px; font-weight: 700; margin-bottom: 8px; }
        .case-study__content p { font-size: 14.5px; line-height: 1.7; color: var(--text-2); max-width: 720px; }
        .case-study__list { display: flex; flex-direction: column; gap: 6px; }
        .case-study__list li { font-size: 14.5px; color: var(--text-2); padding-left: 16px; position: relative; }
        .case-study__list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background: var(--primary); }

        @media (max-width: 900px) {
          .featured__top { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .case-study__row { grid-template-columns: 1fr; gap: 6px; }
        }
      `}</style>
    </article>
  );
}
