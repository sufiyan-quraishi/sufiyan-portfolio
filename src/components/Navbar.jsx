import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import { personal } from '../data/personal';
import { useActiveSection } from '../hooks/useActiveSection';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={scrollTo('home')} aria-label="Go to top">
          <span className="navbar__mark">S</span>
          <span className="navbar__name">{personal.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={scrollTo(item.id)}
              className={`navbar__link ${activeId === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeSwitcher compact />
          <a href="#contact" onClick={scrollTo('contact')} className="btn btn-primary btn-sm navbar__cta">
            Let&rsquo;s Connect
          </a>
          <button
            className="navbar__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <nav className="mobile-menu__links" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={scrollTo(item.id)}
                className={`mobile-menu__link ${activeId === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__theme">
            <ThemeSwitcher />
          </div>
          <a href="#contact" onClick={scrollTo('contact')} className="btn btn-primary mobile-menu__cta">
            Let&rsquo;s Connect
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid transparent;
          background: transparent;
          transition: background 0.3s var(--ease), border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .navbar.is-scrolled {
          background: color-mix(in srgb, var(--bg) 78%, transparent);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-color: var(--border);
          box-shadow: var(--shadow-sm);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          transition: height 0.3s var(--ease);
        }
        .navbar.is-scrolled .navbar__inner { height: 64px; }

        .navbar__brand { display: flex; align-items: center; gap: 10px; }
        .navbar__mark {
          width: 34px; height: 34px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: white; font-weight: 800; font-size: 15px; flex-shrink: 0;
        }
        .navbar__name { font-weight: 700; font-size: 15.5px; letter-spacing: -0.01em; }

        .navbar__links { display: flex; align-items: center; gap: 4px; }
        .navbar__link {
          position: relative;
          padding: 8px 14px;
          font-size: 14.5px;
          font-weight: 500;
          color: var(--text-2);
          border-radius: 999px;
          transition: color 0.25s var(--ease), background 0.25s var(--ease);
        }
        .navbar__link:hover { color: var(--text); background: var(--surface-2); }
        .navbar__link.is-active { color: var(--primary); }

        .navbar__actions { display: flex; align-items: center; gap: 14px; }
        .navbar__cta { display: inline-flex; }
        .navbar__burger { display: none; background: none; border: none; color: var(--text); cursor: pointer; padding: 4px; }

        @media (max-width: 1024px) {
          .navbar__links { display: none; }
          .navbar__cta { display: none; }
          .navbar__burger { display: inline-flex; }
        }

        .mobile-menu {
          position: fixed;
          inset: 64px 0 0 0;
          background: var(--bg);
          z-index: 99;
          padding: 24px var(--pad-mobile) 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow-y: auto;
          animation: menu-in 0.25s var(--ease);
        }
        @keyframes menu-in { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: translateY(0);} }
        .mobile-menu__links { display: flex; flex-direction: column; gap: 4px; }
        .mobile-menu__link {
          padding: 14px 4px;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-2);
          border-bottom: 1px solid var(--border);
        }
        .mobile-menu__link.is-active { color: var(--primary); }
        .mobile-menu__theme { margin-top: 4px; }
        .mobile-menu__cta { width: 100%; }
      `}</style>
    </header>
  );
}
