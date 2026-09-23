import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personal, links } from '../data/personal';
import { socialLinks } from '../data/socialLinks';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="navbar__mark footer__mark">S</span>
            <span className="footer__name">{personal.name}</span>
          </div>
          <p className="footer__tagline">Full Stack Developer building practical software experiences.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={scrollTo(item.id)}>{item.label}</a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={links.email} aria-label="Email"><Mail size={18} /></a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 {personal.name}. All rights reserved.</span>
          <a href="#contact" onClick={scrollTo('contact')}>Let&rsquo;s Connect</a>
        </div>
      </div>

      <style>{`
        .footer { border-top: 1px solid var(--border); margin-top: 64px; }
        .footer__top {
          padding: 56px 0 40px;
          display: grid;
          grid-template-columns: 1.2fr 1.4fr 0.6fr;
          gap: 32px;
          align-items: start;
        }
        .footer__brand-row { display: flex; align-items: center; gap: 10px; }
        .footer__mark { width: 30px; height: 30px; font-size: 13px; }
        .footer__name { font-weight: 700; font-size: 15px; }
        .footer__tagline { margin-top: 12px; font-size: 14px; color: var(--text-2); max-width: 260px; line-height: 1.6; }

        .footer__nav { display: flex; flex-wrap: wrap; gap: 10px 20px; align-content: start; }
        .footer__nav a { font-size: 14px; color: var(--text-2); }
        .footer__nav a:hover { color: var(--primary); }

        .footer__social { display: flex; gap: 10px; justify-content: flex-end; }
        .footer__social a {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-2); border: 1px solid var(--border); color: var(--text-2);
        }
        .footer__social a:hover { color: var(--primary); border-color: var(--primary); }

        .footer__bottom { border-top: 1px solid var(--border); }
        .footer__bottom-inner {
          padding: 20px 0;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          font-size: 13px; color: var(--muted);
        }
        .footer__bottom-inner a { color: var(--primary); font-weight: 600; }

        @media (max-width: 900px) {
          .footer__top { grid-template-columns: 1fr; }
          .footer__social { justify-content: flex-start; }
        }
        @media (max-width: 480px) {
          .footer__bottom-inner { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>
    </footer>
  );
}
