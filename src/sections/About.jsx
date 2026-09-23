import { MessageCircle, Download, ArrowUpRight } from 'lucide-react';
import { personal, links } from '../data/personal';
import { socialLinks } from '../data/socialLinks';
import { assets } from '../data/assets';

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">Turning ideas into practical software.</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>{personal.aboutIntro}</p>
          </div>

          <div className="about__card card">
            <div className="about__row">
              <span className="about__label">Name</span>
              <span className="about__value">{personal.name}</span>
            </div>
            <div className="about__row">
              <span className="about__label">Role</span>
              <span className="about__value">{personal.title}</span>
            </div>
            <div className="about__row">
              <span className="about__label">Focus</span>
              <span className="about__value">Java • Spring Boot • React • REST APIs</span>
            </div>
            <div className="about__row">
              <span className="about__label">Email</span>
              <a href={links.email} className="about__value about__link">
                {personal.email} <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="about__row">
              <span className="about__label">WhatsApp</span>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="about__value about__link">
                {personal.phoneDisplay} <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="about__row">
              <span className="about__label">GitHub</span>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="about__value about__link">
                Sufiyan-quraishi <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="about__row about__row--last">
              <span className="about__label">LinkedIn</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="about__value about__link">
                Mohammad Sufiyan Quraishi <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="about__actions">
              <a href={assets.resume.pdf} download={assets.resume.fileName} className="btn btn-secondary btn-sm">
                <Download size={15} /> Download Resume
              </a>
              <a href="#contact" onClick={scrollToContact} className="btn btn-primary btn-sm">
                <MessageCircle size={15} /> Let&rsquo;s Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }
        .about__text p {
          font-size: 18px;
          line-height: 1.75;
          color: var(--text-2);
        }
        .about__card { padding: 30px; }
        .about__row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14.5px;
        }
        .about__row--last { border-bottom: none; }
        .about__label { color: var(--muted); font-weight: 500; }
        .about__value { font-weight: 600; text-align: right; }
        .about__link { display: inline-flex; align-items: center; gap: 4px; color: var(--primary); }
        .about__link:hover { text-decoration: underline; }
        .about__actions { display: flex; gap: 10px; margin-top: 22px; flex-wrap: wrap; }

        @media (max-width: 900px) {
          .about__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .about__row { flex-direction: column; align-items: flex-start; gap: 4px; }
          .about__value { text-align: left; }
        }
      `}</style>
    </section>
  );
}
