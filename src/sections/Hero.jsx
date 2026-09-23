import { Github, Linkedin, Mail, MessageCircle, ArrowRight, Download } from 'lucide-react';
import { personal, links } from '../data/personal';
import { socialLinks } from '../data/socialLinks';
import { assets } from '../data/assets';

const TECH_TAGS = [
  { label: 'Java', style: { top: '8%', left: '-8%' } },
  { label: 'Spring Boot', style: { top: '28%', right: '-14%' } },
  { label: 'React', style: { bottom: '20%', left: '-12%' } },
  { label: 'REST APIs', style: { bottom: '2%', right: '-6%' } },
];

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">{personal.heroBadge}</span>
          <h1 className="hero__heading">
            {personal.heroHeadingPrefix} <span className="text-gradient">{personal.heroHeadingHighlight}</span>
          </h1>
          <p className="hero__desc">{personal.heroDescription}</p>

          <div className="hero__ctas">
            <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
              View My Work <ArrowRight size={17} />
            </a>
            <a href={assets.resume.pdf} download={assets.resume.fileName} className="btn btn-secondary">
              <Download size={17} /> Download Resume
            </a>
          </div>

          <div className="hero__quick" aria-label="Quick contact">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hero__quick-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hero__quick-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={links.email} className="hero__quick-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="hero__quick-link" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-glow" aria-hidden="true" />
            <img
              src={assets.profile.photo}
              alt={`Portrait of ${personal.name}, ${personal.title}`}
              className="hero__portrait"
              width="480"
              height="600"
            />
            {TECH_TAGS.map((tag) => (
              <span key={tag.label} className="hero__tech-tag" style={tag.style}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding: 64px 0 96px;
        }
        .hero__glow {
          position: absolute; inset: 0; background: var(--glow);
          --y: -10%; pointer-events: none;
        }
        .hero__grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%);
        }
        .hero__inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          padding-top: 40px;
        }
        .hero__badge {
          display: inline-block;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.08em;
          color: var(--primary);
          background: var(--surface-2);
          border: 1px solid var(--border);
          padding: 7px 14px; border-radius: 999px;
          animation: fade-slide 0.6s var(--ease) both;
        }
        .hero__heading {
          margin-top: 22px;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          animation: fade-slide 0.6s var(--ease) 0.08s both;
        }
        .hero__desc {
          margin-top: 22px;
          max-width: 480px;
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-2);
          animation: fade-up 0.6s var(--ease) 0.18s both;
        }
        .hero__ctas {
          margin-top: 34px;
          display: flex; flex-wrap: wrap; gap: 14px;
          animation: fade-up 0.6s var(--ease) 0.26s both;
        }
        .hero__quick {
          margin-top: 30px;
          display: flex; gap: 10px;
          animation: fade-up 0.6s var(--ease) 0.34s both;
        }
        .hero__quick-link {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text-2);
          transition: color 0.25s var(--ease), border-color 0.25s var(--ease), transform 0.25s var(--ease);
        }
        .hero__quick-link:hover { color: var(--primary); border-color: var(--primary); transform: translateY(-3px); }

        .hero__visual { display: flex; justify-content: center; }
        .hero__portrait-wrap {
          position: relative;
          width: min(360px, 78vw);
          animation: portrait-in 0.7s var(--ease) 0.15s both;
        }
        .hero__portrait-glow {
          position: absolute; inset: -30px;
          background: radial-gradient(circle, rgba(59,130,246,0.28), transparent 65%);
          filter: blur(10px);
          z-index: 0;
        }
        .hero__portrait {
          position: relative; z-index: 1;
          width: 100%; aspect-ratio: 4/5; object-fit: cover;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
        }
        .hero__tech-tag {
          position: absolute; z-index: 2;
          font-size: 12.5px; font-weight: 600;
          padding: 8px 14px; border-radius: 999px;
          background: var(--surface); border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          color: var(--text);
          animation: float 5s ease-in-out infinite;
        }
        .hero__tech-tag:nth-child(2) { animation-delay: 0.6s; }
        .hero__tech-tag:nth-child(3) { animation-delay: 1.2s; }
        .hero__tech-tag:nth-child(4) { animation-delay: 1.8s; }

        @keyframes fade-slide { from { opacity: 0; transform: translateY(14px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes fade-up { from { opacity: 0; transform: translateY(18px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes portrait-in { from { opacity: 0; transform: scale(0.96);} to { opacity: 1; transform: scale(1);} }
        @keyframes float { 0%, 100% { transform: translateY(0);} 50% { transform: translateY(-8px);} }

        @media (max-width: 1024px) {
          .hero__inner { grid-template-columns: 1fr; text-align: center; }
          .hero__desc { margin-left: auto; margin-right: auto; }
          .hero__ctas, .hero__quick { justify-content: center; }
          .hero__visual { order: -1; margin-bottom: 8px; }
          .hero__portrait-wrap { width: min(300px, 68vw); }
        }
        @media (max-width: 480px) {
          .hero__tech-tag { display: none; }
        }
      `}</style>
    </section>
  );
}
