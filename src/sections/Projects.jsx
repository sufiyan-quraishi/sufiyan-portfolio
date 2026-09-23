import { useMemo, useState } from 'react';
import ProjectFilter from '../components/ProjectFilter.jsx';
import FeaturedProject from './FeaturedProject.jsx';
import { projects } from '../data/projects';

export default function Projects() {
  const [active, setActive] = useState('all');

  const visible = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-title">Software I&rsquo;ve designed, built and shipped.</h2>
          <p className="section-subtitle">
            Real, working applications — from a multi-role institute management platform to an AI-assisted resume tool.
          </p>
        </div>

        <ProjectFilter active={active} onChange={setActive} />

        {visible.length === 0 && (
          <p className="projects__empty">No projects match this filter yet.</p>
        )}
      </div>

      <div className={`projects__list ${visible.length === 0 ? 'is-empty' : ''}`}>
        {visible.map((project, i) => (
          <FeaturedProject key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <style>{`
        .projects__empty { color: var(--text-2); font-size: 15px; padding: 20px 0 60px; }
        .projects__list { transition: opacity 0.3s var(--ease); }
        .projects__list.is-empty { display: none; }
      `}</style>
    </section>
  );
}
