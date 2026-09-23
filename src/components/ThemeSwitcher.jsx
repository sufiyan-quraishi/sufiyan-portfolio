import { useEffect, useRef, useState } from 'react';
import { Check, Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.jsx';

export default function ThemeSwitcher({ compact = false }) {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const active = themes.find((t) => t.id === theme) ?? themes[0];

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="theme-switcher" ref={rootRef}>
      <button
        type="button"
        className="theme-switcher__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Appearance: ${active.name}. Change theme`}
      >
        <Palette size={15} />
        <span className="theme-switcher__dot" style={{ background: active.swatch[2] }} />
        {!compact && <span className="theme-switcher__label">{active.name}</span>}
      </button>

      {open && (
        <div className="theme-switcher__panel" role="listbox" aria-label="Appearance">
          <p className="theme-switcher__heading">Appearance</p>
          <ul className="theme-switcher__list">
            {themes.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={theme === t.id}
                  className={`theme-switcher__option ${theme === t.id ? 'is-active' : ''}`}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                >
                  <span className="theme-switcher__swatch">
                    {t.swatch.map((c, i) => (
                      <span key={i} className="theme-switcher__swatch-dot" style={{ background: c }} />
                    ))}
                  </span>
                  <span className="theme-switcher__text">
                    <span className="theme-switcher__name">{t.name}</span>
                    <span className="theme-switcher__desc">{t.description}</span>
                  </span>
                  {theme === t.id && <Check size={15} className="theme-switcher__check" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .theme-switcher { position: relative; }
        .theme-switcher__trigger {
          display: flex; align-items: center; gap: 8px;
          height: ${compact ? '38px' : '40px'};
          padding: 0 ${compact ? '10px' : '14px'};
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface-2);
          color: var(--text-2);
          cursor: pointer;
          transition: border-color 0.25s var(--ease), color 0.25s var(--ease);
        }
        .theme-switcher__trigger:hover { color: var(--text); border-color: var(--primary); }
        .theme-switcher__dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .theme-switcher__label { font-size: 13.5px; font-weight: 500; white-space: nowrap; }

        .theme-switcher__panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 268px;
          max-width: 84vw;
          background: var(--card, var(--surface));
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 14px;
          z-index: 200;
          animation: theme-panel-in 0.18s var(--ease);
        }
        @keyframes theme-panel-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

        .theme-switcher__heading {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--muted); margin: 2px 4px 10px;
        }
        .theme-switcher__list { display: flex; flex-direction: column; gap: 2px; }
        .theme-switcher__option {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 8px; border-radius: 10px; border: 1px solid transparent;
          background: transparent; cursor: pointer; text-align: left;
          transition: background 0.2s var(--ease);
        }
        .theme-switcher__option:hover { background: var(--surface-2); }
        .theme-switcher__option.is-active { border-color: var(--border); background: var(--surface-2); }
        .theme-switcher__swatch { display: flex; flex-shrink: 0; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
        .theme-switcher__swatch-dot { width: 9px; height: 26px; }
        .theme-switcher__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .theme-switcher__name { font-size: 13.5px; font-weight: 600; color: var(--text); }
        .theme-switcher__desc { font-size: 11.5px; color: var(--text-2); }
        .theme-switcher__check { margin-left: auto; color: var(--primary); flex-shrink: 0; }
      `}</style>
    </div>
  );
}
