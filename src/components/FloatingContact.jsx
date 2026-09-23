import { useState } from 'react';
import { MessageCircle, Mail, Phone, MessageSquareText, Plus, X } from 'lucide-react';
import { links } from '../data/personal';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    setOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="floating-contact">
      {open && (
        <div className="floating-contact__menu" role="menu">
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="floating-contact__item" role="menuitem">
            <MessageCircle size={17} /> WhatsApp
          </a>
          <a href={links.email} className="floating-contact__item" role="menuitem">
            <Mail size={17} /> Email
          </a>
          <a href={links.phone} className="floating-contact__item" role="menuitem">
            <Phone size={17} /> Call
          </a>
          <button className="floating-contact__item" onClick={scrollToContact} role="menuitem">
            <MessageSquareText size={17} /> Contact Form
          </button>
        </div>
      )}

      <button
        className={`floating-contact__trigger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Plus size={22} />}
      </button>

      <style>{`
        .floating-contact {
          position: fixed;
          right: 20px;
          bottom: calc(20px + env(safe-area-inset-bottom, 0px));
          z-index: 150;
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
        }
        .floating-contact__trigger {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: #fff; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
          transition: transform 0.3s var(--ease);
        }
        .floating-contact__trigger:hover { transform: scale(1.06); }
        .floating-contact__trigger.is-open { transform: rotate(0deg); }

        .floating-contact__menu {
          display: flex; flex-direction: column; gap: 8px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; padding: 10px; box-shadow: var(--shadow-lg);
          animation: fc-in 0.22s var(--ease);
        }
        @keyframes fc-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .floating-contact__item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          font-size: 14px; font-weight: 600; color: var(--text);
          background: none; border: none; cursor: pointer; white-space: nowrap;
          font-family: inherit; text-align: left;
        }
        .floating-contact__item:hover { background: var(--surface-2); }

        @media (max-width: 480px) {
          .floating-contact { right: 14px; bottom: calc(14px + env(safe-area-inset-bottom, 0px)); }
          .floating-contact__trigger { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
}
